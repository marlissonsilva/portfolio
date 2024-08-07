interface TitleSectionProps {
  title: string;
  className?: string;
}

export default function TitleSection(props: TitleSectionProps) {
  const { className } = props;
  return (
    <h4 className={`uppercase text-4xl py-9 ${className ?? className}`}>
      {props.title}
    </h4>
  );
}
