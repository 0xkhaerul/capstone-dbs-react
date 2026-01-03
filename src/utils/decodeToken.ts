import { jwtDecode } from "jwt-decode";

export type JwtPayload = {
  userId: string;
  exp: number;
  iat?: number;
  role?: string;
};

export const decodeToken = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    const decoded = jwtDecode<JwtPayload>(token);

    // expired check
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      return null;
    }

    return decoded;
  } catch (error) {
    console.error("Invalid token:", error);
    localStorage.removeItem("token");
    return null;
  }
};
