export type LinkType = {
    to: string;
    children?: ReactNode;
    namespace?: string;
    className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
