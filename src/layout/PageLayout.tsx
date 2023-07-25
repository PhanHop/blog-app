import classNames from 'classnames';
import * as React from 'react';

type Props = React.PropsWithChildren<{
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}>;

export default function PageLayout({
  header,
  footer,
  children,
  className,
}: Props) {
  return (
    <div className={classNames('relative', className)}>
      {header}
      <div>{children}</div>
      {footer}
    </div>
  );
}