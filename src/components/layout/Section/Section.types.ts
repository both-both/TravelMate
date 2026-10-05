import type { ReactNode } from "react";

export type SectionProps = {
  title: string;
  link?: string;
  linkText?: string;
  children: ReactNode;
};
