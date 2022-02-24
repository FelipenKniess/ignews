import Link, { LinkProps} from 'next/link'
import { useRouter  } from 'next/router';
import {ReactElement, cloneElement} from 'react';

interface LinkMenuProps extends LinkProps {
    children: ReactElement;
    activeClassName: string;
}

export default function ActiveLink({children, activeClassName, ...rest}:LinkMenuProps) {
    const {asPath} = useRouter();
    const className = asPath === rest.href ? activeClassName : ''
    return (
        <Link {...rest}>
            {cloneElement(children, {
                className,
            })}
        </Link>
    )
}