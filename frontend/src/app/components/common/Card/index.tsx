import { Link } from "react-router-dom";
import { CardProps } from "@/types/Globals/Cards";

export function Card({ children, link }: CardProps) {
  const className =
    "flex flex-col justify-between p-4 transition duration-200 bg-white shadow hover:bg-white/0 dark:hover:bg-white/10 hover:cursor-pointer min-h-36 dark:bg-white/20 rounded-3xl";

  if (link) {
    return (
      <Link to={link} className={className}>
        {children}
      </Link>
    );
  }

  return <div className={className}>{children}</div>;
}

export function CardHeader({ children }: CardProps) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children }: CardProps) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}

export function CardContent({ children }: CardProps) {
  return <div className="text-xs">{children}</div>;
}

export function CardFooter({ children }: CardProps) {
  return <div className="text-xs">{children}</div>;
}
