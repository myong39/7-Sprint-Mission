import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";

export interface ButtonProps {
  href: Url;
  children: ReactNode;
}
