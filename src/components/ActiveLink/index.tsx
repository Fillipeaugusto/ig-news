import { useRouter } from 'next/dist/client/router';
import Link, { LinkProps } from 'next/link';
import { ReactElement, cloneElement } from 'react';

interface AtiveLinkProps extends LinkProps {
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({children, activeClassName , ...rest}: AtiveLinkProps){
     
    const { asPath } = useRouter();
    
    const className  = asPath === rest.href ? activeClassName : '';
    return (
        <Link {...rest}>
            {cloneElement(children,{
                className: className
            })}
        </Link>
    )
}