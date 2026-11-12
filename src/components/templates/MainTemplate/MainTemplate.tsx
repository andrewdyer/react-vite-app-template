import type { ReactNode } from 'react';

/**
 * Describes the props accepted by MainTemplate.
 */
export type MainTemplateProps = {
  /**
   * The screen content rendered inside the main landmark.
   */
  children: ReactNode;
};

/**
 * Renders the page's main landmark around the current screen's content.
 */
const MainTemplate = ({ children }: MainTemplateProps) => {
  return <main>{children}</main>;
};

export default MainTemplate;
