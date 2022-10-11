import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string | { href: string; as: string };
  prefetch?: boolean;
  className?: string;
  activeClass: string;
}

const NavLink = forwardRef(
  ({ className = '', to, prefetch, activeClass, ...props }: IProps, ref: any) => {
    const router = useRouter();

    const isActivePath = (path: string) => {
      if (path === '/' && router.pathname === path) return true;
      else if (path !== '/' && router.pathname.includes(path)) return true;
      else return false;
    };

    if (typeof to === 'string') {
      return (
        <Link href={to} prefetch={prefetch || false}>
          <a
            className={clsx({ [className]: className, [activeClass]: isActivePath(to) })}
            {...props}
            ref={ref}
          />
        </Link>
      );
    }

    return (
      <Link href={to.href} as={to.as} prefetch={prefetch || false}>
        <a
          className={clsx({ [className]: className, [activeClass]: isActivePath(to.as) })}
          {...props}
          ref={ref}
        />
      </Link>
    );
  }
);

NavLink.displayName = 'NavLink';
export default NavLink;
