import React from "react";
import classNames from "classnames";
type Props = React.PropsWithChildren & {
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div
      className={classNames(
        "px-4 md:px-10 lg:px-0 lg:w-[1160px] xl:w-[1460px] mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
