export type HomeTemplateProps = {
  title: string;
};

const HomeTemplate = ({ title }: HomeTemplateProps) => {
  return <h1>{title}</h1>;
};

export default HomeTemplate;
