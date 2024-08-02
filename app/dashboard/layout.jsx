import React from "react";

const Layout = ({ children, products, users }) => {
  return (
    <div className="min-h-screen">
      {children}

      <div className="flex flex-col md:flex-row gap-5 min-h-screen">
        {products} {users}
      </div>
    </div>
  );
};

export default Layout;
