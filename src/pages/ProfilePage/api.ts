import api from "../../api";

export const getAllCheckHistory = () => {
  const token = localStorage.getItem("token");
  const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
  return api.get("/form-check-history", { headers });
};

export const getCheckHistroyById = (id: string) => {
  const token = localStorage.getItem("token");
  const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
  return api.get(`/form-check-history/${id}`, { headers });
};

export const unSaveCheckHistory = (id: string) => {
  const token = localStorage.getItem("token");
  const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
  return api.patch(`/form-check-history/${id}/unsave`, null, { headers });
};
