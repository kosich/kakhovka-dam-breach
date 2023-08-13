import { PropsWithChildren } from "react";

export const Subtle = ({ children }: PropsWithChildren) => {
  return <small className="text-sm text-left italic text-gray-500 dark:text-gray-100">{children}</small>;
}