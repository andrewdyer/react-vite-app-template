import React, { type PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  className?: string;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
