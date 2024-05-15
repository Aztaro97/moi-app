import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function layout({ children }: Props) {
  return <div className="p-10">{children}</div>;
}
