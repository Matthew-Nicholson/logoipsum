import React from "react";

type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav>Navigation</nav>
      <main className="main container">{children}</main>
    </>
  );
};

export default Layout;
