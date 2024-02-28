declare module "*.less" {
  const content: { [className: string]: string };
  export default content;
}

declare var module: NodeModule & {
  hot?: {
    accept(
      dependency: string,
      callback?: () => void,
      errorHandler?: (err: Error) => void
    ): void;
  };
};
