type Props = {
  title: string;
  description: string;
};

export default function Alert({ title, description }: Props) {
  return (
    <div
      role="alert"
      className="absolute bottom-20 left-0 right-0 animate-fade-in py-4 text-center"
    >
      <p className="h3 mb-2">{title}</p>
      <p>{description}</p>
    </div>
  );
}
