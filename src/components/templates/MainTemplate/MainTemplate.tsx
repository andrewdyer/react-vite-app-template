import type { ReactNode } from 'react';

export type MainTemplateProps = {
  children: ReactNode;
};

const MainTemplate = ({ children }: MainTemplateProps) => {
  return <main>{children}</main>;
};

export default MainTemplate;
