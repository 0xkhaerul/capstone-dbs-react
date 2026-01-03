import api from "../../api";

type LoginHandlerProps = {
  email: string;
  password: string;
  idCheckForm: string | null;
};

type RegisterHandlerProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type VerifyHandlerProps = {
  email: string;
  otpCode: string;
};

type LoginResult = {
  userId: string;
  name: string;
  email: string;
  isVerified: boolean;
  token: string;
};

type LoginResponse = {
  error: boolean;
  message: string;
  loginResult: LoginResult;
};

export const LoginHandler = (payload: LoginHandlerProps) => {
  const { email, password, idCheckForm } = payload;
  const body = {
    email,
    password,
    // backend expects `checkFormId` (as used in Postman)
    checkFormId: idCheckForm ?? null,
  };

  return api.post<LoginResponse>("/login", body);
};

export const RegisterHandler = (payload: RegisterHandlerProps) => {
  const { name, email, password, confirmPassword } = payload;
  const body = {
    name,
    email,
    password,
    confirmPassword,
  };

  return api.post("/users", body);
};

export const VerifyOtpHandler = (payload: VerifyHandlerProps) => {
  const { email, otpCode } = payload;
  const body = {
    email,
    otpCode,
  };

  return api.post("/verify-otp", body);
};

export const saveTokenToLocalStorage = (token: string) => {
  try {
    localStorage.setItem("token", token);
  } catch (e) {
    console.warn("Could not save token to localStorage:", e);
  }
};
