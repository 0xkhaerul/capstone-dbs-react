import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const auth = isAuthenticated || !!token;

  if (!auth) return <Navigate to="/login" replace />;

  return <>{children}</>;
}
