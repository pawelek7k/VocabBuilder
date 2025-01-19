import { ReactNode } from "react";

type OverlayProps = {
  children: ReactNode;
};

export const Overlay = ({ children }: OverlayProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[999] bg-zinc-950/90">
      {children}
    </div>
  );
};
