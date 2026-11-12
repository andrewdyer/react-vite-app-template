/**
 * Describes the props accepted by StatusTemplate.
 */
export type StatusTemplateProps = {
  /**
   * The text shown as the screen's level-one heading, naming what happened.
   */
  title: string;

  /**
   * The explanation shown below the heading, telling the user what they can do next.
   */
  description: string;

  /**
   * The URL the recovery link points to.
   *
   * @remarks
   * The link is a plain anchor, so following it reloads the application. This also clears any
   * state that caused an error.
   */
  linkHref: string;

  /**
   * The text of the recovery link, describing where {@link StatusTemplateProps.linkHref} leads.
   */
  linkLabel: string;
};

/**
 * Renders a full-screen status message, such as an error or a missing page, with a link the user
 * can follow to recover.
 */
const StatusTemplate = ({
  title,
  description,
  linkHref,
  linkLabel,
}: StatusTemplateProps) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={linkHref}>{linkLabel}</a>
    </>
  );
};

export default StatusTemplate;
