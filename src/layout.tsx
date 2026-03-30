import { ReactNode, useEffect } from "react";
import Navbar from "@/components/Navbar";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    // En Vite/React Router no existe un "layout" de Next; aplicamos el scroll suave a nivel de documento.
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    setTimeout(() => el.scrollIntoView({ block: "start" }), 0);
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <main className="pt-14 md:pt-16">
        {children}
      </main>
      <WhatsAppFloatingButton />
    </>
  );
};

export default Layout;
