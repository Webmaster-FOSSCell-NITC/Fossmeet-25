'use client'


import { JSX, MouseEventHandler, ReactNode, useCallback, useMemo } from "react";
import { motion } from 'framer-motion'
import { lato } from "@/fonts";
import Image from "next/image";

/**
 * global button component for a consistent design across pages
 * @param {ButtonProps} props - props to be passed to the component
 * @param {ReactNode} [props.children] - content to be displayed within the button
 * @param {MouseEventHandler<HTMLButtonElement>} [props.onClick] - on Click action on the button
 * @param {string} [props.href] - to route to a particular page
 * @param {string} [props.className] - className extension for customization (defaults to none)
 * @param {boolean} [props.disabled] - set to true if button is to be disabled (defaults to false)
 * @param {boolean} [props.invert] - set colour scheme to be inverted
 * 
 * 
 * @returns {JSX.Element} - The component to be rendered
 * @author Diljith P D
 */
const Button = ({
    children,
    onClick = undefined,
    href=undefined,
    className = "",
    disabled = false,
    inverted = false,
}: ButtonProps): JSX.Element => {
    const buttonDefaultConfig = useMemo(() => ({
        initial: {
            backgroundColor: 'var(--primary)',
            color: 'var(--secondary)',
            borderColor: 'var(--primary)',
            scale: 1,
        },
        whileHover: {
            backgroundColor: 'var(--white)',
            color: 'var(--secondary)',
            borderColor: 'var(--secondary)',
            scale: 1.01,
        },
        whileTap: {
            backgroundColor: 'var(--secondary)',
            color: 'var(--white)',
            borderColor: 'var(--secondary)',
            scale: 0.99,
        },
    }), []);

    const buttonInvertedConfig = useMemo(() => ({
        initial: {
            backgroundColor: 'var(--secondary)',
            color: 'var(--white)',
            borderColor: 'var(--secondary)',
            scale: 1,
        },
        whileHover: {
            backgroundColor: 'var(--white)',
            color: 'var(--secondary)',
            borderColor: 'var(--secondary)',
            scale: 1.01,
        },
        whileTap: {
            backgroundColor: 'var(--primary)',
            color: 'var(--white)',
            borderColor: 'var(--primary)',
            scale: 0.99,
        },
    }), []);


    const buttonAnimationConfig = useMemo(() =>
        inverted ? buttonInvertedConfig : buttonDefaultConfig,
        [inverted, buttonDefaultConfig, buttonInvertedConfig]);

    return (
        <motion.button
            onClick={onClick}
            className={`relative flex items-center justify-center py-[7px] px-[48px] border border-px disabled:opacity-50 bg-primary disabled:cursor-not-allowed ${lato.className} ${className}`}
            disabled={disabled}
            {...(!disabled && buttonAnimationConfig)}
        >
            <a href={href}>
                <div>
                    {children}
                </div>
                <span className="absolute h-full right-[12px] top-[50%] translate-y-[-50%] flex items-center justify-center ">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="right-arrow 1">
                        <path id="Vector" d="M22.6547 24.5883C22.4367 24.3703 22.4438 24.0258 22.6547 23.7937L27.3234 18.5625H7.3125C7.00312 18.5625 6.75 18.3094 6.75 18C6.75 17.6906 7.00312 17.4375 7.3125 17.4375H27.3234L22.6617 12.2062C22.4578 11.9672 22.4367 11.6367 22.6547 11.4187C22.8727 11.2008 23.2523 11.1867 23.4563 11.4117C23.4563 11.4117 29.025 17.5289 29.0813 17.5992C29.1375 17.6695 29.25 17.7961 29.25 18C29.25 18.2039 29.1375 18.3445 29.0813 18.4008C29.025 18.457 23.4563 24.5883 23.4563 24.5883C23.3508 24.6937 23.2031 24.75 23.0555 24.75C22.9078 24.75 22.7672 24.6937 22.6547 24.5883Z" className={inverted ? 'fill-white': `fill-secondary`} />
                    </g>
                </svg>
                </span>
            </a>
        </motion.button >
    )
}

export default Button;

export interface ButtonProps {
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    href?: string,
    className?: string,
    disabled?: boolean,
    inverted?: boolean,
}