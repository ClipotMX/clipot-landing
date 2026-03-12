import { ReactNode, useEffect } from "react";
import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // En Vite/React Router no existe un "layout" de Next; aplicamos el scroll suave a nivel de documento.
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-14 md:pt-16">
        {children}
      </main>
    </>
  );
};

export default Layout;
