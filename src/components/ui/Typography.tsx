import React from 'react';
import type { ElementType } from 'react';


const variantMap = {
    mobileHeaderH1: {
        tag: 'p',
        className: 'font-bebas font-normal text-[1.75rem] leading-none tracking-[-1%] uppercase'
    },
    mobileH1: {
        tag: 'p',
        className: 'font-bebas font-normal text-[3.563rem] leading-none tracking-normal uppercase'
    },
    mobileH2: {
        tag: 'p',
        className: 'font-bebas font-normal text-[2.688rem] leading-none tracking-[-2%] uppercase'
    },
    mobileH3: {
        tag: 'p',
        className: 'font-medium text-[1.5rem] leading-[140%] tracking-normal'
    },
    mobileH5: {
        tag: 'p',
        className: 'font-semibold text-[1rem] leading-[150%] tracking-normal uppercase'
    },
    mobileBodyMD: {
        tag: 'p',
        className: 'font-normal text-[1rem] leading-[160%] tracking-normal'
    },
    mobileBodySM: {
        tag: 'p',
        className: 'font-medium text-[1rem] leading-[160%] tracking-normal'
    },
    mobileMiscBtn: {
        tag: 'p',
        className: 'font-bold text-[0.875rem] leading-none tracking-normal uppercase'
    },
    mobileMiscLink: {
        tag: 'p',
        className: 'font-bold text-[0.875rem] leading-[150%] tracking-normal uppercase'
    },

    bodyMD: {
        tag: 'p',
        className: 'font-normal text-[1.125rem] leading-[150%] tracking-normal'
    },
    bodySM: {
        tag: 'p',
        className: 'font-medium text-[1rem] leading-[160%] tracking-normal'
    },
} as const;

type Variant = keyof typeof variantMap;

interface Props {
    variant?: Variant; // which design variant to use
    as?: ElementType; // optional override for the underlying tag
    className?: string; // additional classes to merge
    children?: React.ReactNode; // content
}

export default function Typography({
    variant = 'mobileH1',
    as,
    className = '',
    children,
    ...props
}: Props & React.HTMLAttributes<HTMLElement>) {

    const entry = variantMap[variant]

    const defaultTag = entry.tag
    const variantClass = entry.className

    const Tag = (as || defaultTag) as ElementType;

    return (
        <Tag className={`${variantClass} ${className}`.trim()} {...props}>
            {children}
        </Tag>
    );
}
