import { AnchorHTMLAttributes, PropsWithChildren } from "react";

export function Link({ children, ...props }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  if (props.href?.startsWith('#')) {
    return <a {...props}>{children}</a>;
  }

  props.target = '_blank';
  props.rel = 'noreferrer noopener';

  return <>
    <a {...props}>{children}</a><span className="text-xs font-sans"> ↗</span>
  </>;
}
