import React, { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="container mx-auto max-w-5xl pt-3 md:pt-12 ">
      {children}
    </main>
  );
};

export default Container;
