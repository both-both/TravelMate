export type ContainerTag =
  | "div"
  | "section"
  | "fielsdset"
  | "figure"
  | "main"
  | "article";

export type ContainerProps = {
  innerHTML?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  title?: string;
};

export type ContainerStyleProps = {
  $color?: string;
};
