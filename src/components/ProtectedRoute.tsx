import { Navigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

export const ProtectedUserRoute = ({ element }: { element: JSX.Element }) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("userToken") : null;
  if (!token) return <Navigate to="/admin/login" replace />;
  return element;
};

export const ProtectedAdminRoute = ({ element }: { element: JSX.Element }) => {
  const adminToken = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
  if (adminToken) return element;
  const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL;
  const supabaseAnon = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnon) return <Navigate to="/admin/login" replace />;
  const supabase = createClient(supabaseUrl, supabaseAnon);
  const user = (typeof window !== "undefined" && (window as any).__supabase_user_cache) || null;
  if (user && ["admin", "operator"].includes(user?.app_metadata?.role || "")) return element;
  return <Navigate to="/admin/login" replace />;
};
