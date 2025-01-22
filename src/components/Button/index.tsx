'use client'

import { JSX, MouseEventHandler, ReactNode, useMemo } from "react";
import { motion } from 'framer-motion'

/**
 * global button component for a consistent design across pages
 * @param {ButtonProps} props - props to be passed to the component
 * @param {ReactNode} [props.children] - content to be displayed within the button
 * @param {MouseEventHandler<HTMLButtonElement>} [props.onClick] - onClick action for the button
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
    onClick = undefined,
    className = "",
    disabled = false,
}: ButtonProps): JSX.Element => {


    const buttonAnimationConfig = useMemo(() => ({
        initia: {
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
            onClick={onClick}
            className={`relative flex items-center justify-center py-[7px] px-[48px] border border-px disabled:opacity-50 bg-primary disabled:cursor-not-allowed ${className}`
            }
            disabled={disabled}
            {...(!disabled && buttonAnimationConfig)}
        >
            <div>
                {children}
            </div>
            <span className="absolute right-[12px] top-[50%] translate-y-[-50%] h-[16px] w-[16px] flex items-center justify-center">
                &rarr;
            </span>
        </motion.button >
    )
}

export default Button;

export interface ButtonProps {
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    className?: string,
    disabled?: boolean,
}