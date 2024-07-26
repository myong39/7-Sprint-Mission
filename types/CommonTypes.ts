import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";

export interface ButtonProps {
  href?: Url;
  children: ReactNode;
  disabled?: boolean;
}

export interface FileInputType {
  name: string;
  value: File | null;
  onChange: (file: File | null) => void;
  className?: string;
}
