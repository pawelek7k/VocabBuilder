import { LinkType } from "@/types/LinkType";
import classNames from "classnames";
import Link from "next/link";

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
