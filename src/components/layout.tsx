import React from "react";
import NavBar from "../pages/_nav_bar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>{children}</main>
    </div>
  );
};
