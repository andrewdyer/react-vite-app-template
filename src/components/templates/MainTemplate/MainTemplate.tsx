import type { ReactNode } from 'react';

import {
  CurrentUserSummary,
  type CurrentUserSummaryProps,
} from '@/components/organisms';

/**
 * Describes the props accepted by MainTemplate.
 */
export type MainTemplateProps = {
  /**
   * The screen content rendered inside the main landmark.
   */
  children: ReactNode;

  /**
   * The signed-in user and their loading state, shown in the page header.
   *
   * @remarks
   * When omitted, no header is rendered, such as on the root error screen where the account may
   * be the cause of the failure.
   */
  currentUser?: CurrentUserSummaryProps;
};

/**
 * Renders the page frame: a header showing the signed-in user, when given, above the main landmark
 * that holds the current screen's content.
 */
const MainTemplate = ({ children, currentUser }: MainTemplateProps) => {
  return (
    <>
      {currentUser && (
        <header>
          <CurrentUserSummary {...currentUser} />
        </header>
      )}
      <main>{children}</main>
    </>
  );
};

export default MainTemplate;
