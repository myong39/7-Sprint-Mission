import { getLinkStyle } from "@/utils/Utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  style?: CSSProperties;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  const style: CSSProperties = isActive ? getLinkStyle({ isActive: true }) : {};

  return (
    <Link href={href} style={style}>
      {children}
    </Link>
  );
};

export default NavLink;
