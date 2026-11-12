/**
 * Describes the props accepted by HomeTemplate.
 */
export type HomeTemplateProps = {
  /**
   * The text shown as the screen's level-one heading.
   */
  title: string;
};

/**
 * Renders the home screen layout, showing its title as the level-one heading.
 */
const HomeTemplate = ({ title }: HomeTemplateProps) => {
  return <h1>{title}</h1>;
};

export default HomeTemplate;
