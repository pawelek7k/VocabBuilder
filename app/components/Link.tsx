import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

type LinkType = {
  to: string;
  children?: ReactNode;
  namespace?: string;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkComponent = ({
  to,
  children,
  //   namespace,
  className,
  ...rest
}: LinkType) => {
  //   const translatedMessage = useTranslatedMessage(namespace, t);
  const classes = classNames("no-underline", className);
  return (
    <Link href={to} className={classes} {...rest}>
      {/* {translatedMessage && `${translatedMessage} `} */}
      {children}
    </Link>
  );
};
