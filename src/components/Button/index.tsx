import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "link";
  className?: string;
  style?: object;
  handleClick?: (e: any) => void;
  isPrimary?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isSmall?: boolean;
  isLarge?: boolean;
  isBlock?: boolean;
  hasShandow?: boolean;
  href?: string;
  target?: string;
}

export default function Button({
  type = "button",
  className,
  isDisabled,
  isLoading,
  handleClick,
  children,
  href = "#",
  target,
  isBlock,
  isLarge,
  isSmall,
  isPrimary,
  hasShandow,
  style,
}: ButtonProps) {
  // set classname
  const classname = [className, "btn"];
  if (isPrimary) classname.push("btn-primary");
  if (isLarge) classname.push("btn-lg");
  if (isSmall) classname.push("btn-sm");
  if (isBlock) classname.push("btn-block");
  if (hasShandow) classname.push("btn-shadow");
  if (isDisabled || isLoading) classname.push("disabled");

  // type link
  if (type === "link") {
    return (
      <Link
        to={href}
        className={classname.join(" ")}
        target={target === "_blank" ? "_blank" : undefined}
        onClick={handleClick}
        style={style ? style : {}}
      >
        {isLoading ? "...loading" : children}
      </Link>
    );
  }

  // default type button
  return (
    <button
      className={classname.join(" ")}
      disabled={isDisabled}
      onClick={handleClick}
      style={style ? style : {}}
    >
      {isLoading ? "...Loading" : children}
    </button>
  );
}
