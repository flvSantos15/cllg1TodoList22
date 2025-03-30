interface IErrorProps {
  text: string | undefined;
}

export function Error({ text }: IErrorProps) {
  return <span className="text-red-500">{text}</span>;
}
