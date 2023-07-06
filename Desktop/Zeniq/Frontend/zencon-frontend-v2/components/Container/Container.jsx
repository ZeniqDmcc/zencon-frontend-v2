import React from "react";

export default function Container({ children }) {
  return (
    <div className="container w-full px-4 py-[13px] 640px:w-full mx-auto">{children}</div>
  );
}
