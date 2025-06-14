export const Description = ({
  description,
  age,
  title
}: {
  description: string;
  age: number;
  title: string
}) => {
  return <h3>{title} {description} {age}</h3>;
};
