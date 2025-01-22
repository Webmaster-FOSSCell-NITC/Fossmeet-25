'use client'

import { JSX, MouseEventHandler, ReactNode, useCallback, useMemo } from "react";
import { motion } from 'framer-motion'
import { lato } from "@/fonts";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";

/**
 * global button component for a consistent design across pages
 * @param {ButtonProps} props - props to be passed to the component
 * @param {ReactNode} [props.children] - content to be displayed within the button
 * @param {string} [props.href] - Route link
 * @param {string} [props.className] - className extension for customization (defaults to none)
 * @param {boolean} [props.disabled] - set to true if button is to be disabled (defaults to false)
 * 
 * 
 * @returns {JSX.Element} - The component to be rendered
 * 
 * @author Diljith P D
 */
const Button = ({
    children,
    href = undefined,
    className = "",
    disabled = false,
}: ButtonProps): JSX.Element => {

    const router = useRouter();

    const buttonAnimationConfig = useMemo(() => ({
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



    return (
        <motion.button
            onClick={href ? () => router.push(href) : undefined}
            className={`relative flex items-center justify-center py-[7px] px-[48px] border border-px disabled:opacity-50 bg-primary disabled:cursor-not-allowed ${lato.className} ${className}`}
            disabled={disabled}
            {...(!disabled && buttonAnimationConfig)}
        >
            <div>
                {children}
            </div>
            <span className="absolute h-full right-[12px] top-[50%] translate-y-[-50%] flex items-center justify-center ">
                <span className="text-base">
                    &rarr;
                </span>
            </span>
        </motion.button >
    )
}

export default Button;

export interface ButtonProps {
    children: ReactNode,
    href?: string,
    className?: string,
    disabled?: boolean,
}