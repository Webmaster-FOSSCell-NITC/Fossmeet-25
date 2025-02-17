"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useState } from 'react';
import MobileNavItem from './MobileNavItem';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { lato } from '@/fonts';


const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const navBarItems = useMemo(() => [
        {
            name: 'Home',
            route: "/",
            newTab: false
        },
        {
            name: 'Workshops',
            route: "/workshops",
            newTab: false
        },
        {
            name: 'Speakers',
            route: "/speakers",
            newTab: false
        },
        {
            name: 'Gallery',
            route: '/gallery',
            newTab: true
        }
    ], []);

    const [open, setOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setOpen(prev => (!prev));
    }, [setOpen]);


    const routeToTarget = useCallback((route: string, newTab: boolean = false) => {
        console.log("hi")
        setOpen(false);
        if (newTab) {
            const a = document.createElement('a');
            a.href = route;
            a.target = '_blank';
            a.click();
        }
        else {
            const a = document.createElement('a');
            a.href = route;
            // a.target = '_blank';
            a.click();
        }
    }, [router, setOpen]);

    return (
        <div className={`fixed top-0 left-0 w-full flex items-center justify-center bg-white z-[100] h-16 border-b-[1px] ${lato.className}`}>
            <nav className="w-full max-w-[1920px] h-16 flex items-center justify-between">
                <Link href="/" className='w-full lg:w-1/5 h-full flex items-center p-4 lg:px-8 lg:py-4 order-first z-[200]'>
                    <img src="/Navbar/logo.svg" height={25} width={25} alt="logo" />
                    <h2 className={`text-2xl font-bold  ${lato.className}`} > FOSSMeet&apos;25 </h2>
                </Link>
                <div className='w-full flex items-center justify-end lg:w-3/5 h-full p-4 lg:px-8 lg:py-4 z-[2]'>
                    <div className="hidden h-full lg:flex items-center relative justify-center gap-4">
                        {
                            navBarItems.map((item, index) => (
                                <motion.button
                                    key={index}
                                    className='mx-4 text-nowrap text-base'
                                    style={{ color: (item.route == pathname) ? 'var(--primary)' : 'var(--secondary)' }}
                                    whileHover={{ color: 'var(--primary)' }}
                                    whileTap={{ color: 'var(--primary)' }}
                                    onClick={() => routeToTarget(item.route, item.newTab)}
                                >
                                    {item.name}
                                </motion.button>
                            ))
                        }
                        <span className='absolute -bottom-4 left-0 w-full h-[1px] bg-white' />
                    </div>
                    <button className='h-full lg:hidden flex items-center justify-end' onClick={toggleMenu}>
                        <img src="/Navbar/hamburger-menu-svgrepo-com.svg" width={75} height={75} alt=" hamburger-menu" />
                    </button>
                </div>
                
                <AnimatePresence>
                    {
                        open && (
                            <div className='block lg:hidden fixed top-0 left-0 h-screen w-screen flex flex-col gap-2 items-center justify-center overscroll-contain'>
                                <motion.div
                                    className='absolute top-0 left-0 w-full bg-[rgba(0,0,0,0.2)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overscroll-contain'
                                    initial={{ height: '0dvh', backdropFilter: 'blur(0px)', opacity: 0 }}
                                    animate={{ height: '100dvh', backdropFilter: 'blur(20px)', opacity: 1 }}
                                    exit={{
                                        height: '0dvh', backdropFilter: 'blur(0px)', opacity: 0, transition: {
                                            delay: 0.8,
                                        }
                                    }}
                                    transition={{ duration: 0.4, ease: [0.445, 0.05, 0.55, 0.95] }}
                                />
                                {
                                    navBarItems.map((item, index) => (
                                        <MobileNavItem
                                            key={index}
                                            item={item}
                                            index={index}
                                            onClick={() => routeToTarget(item.route, item.newTab)}
                                        />
                                    ))
                                }
                            </div>
                        )
                    }
                </AnimatePresence>
            </nav>
        </div>
    )
}

export default Navbar;