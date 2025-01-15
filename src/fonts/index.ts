
import { Geist, Geist_Mono, Gloria_Hallelujah, Lato, Alexandria, Zen_Tokyo_Zoo } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


const gloriaHallelujah = Gloria_Hallelujah({
    subsets: ['latin'],
    weight: ['400'],
    variable: "--font-gloria-hallelujah",
})

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
    variable: "--font-lato",
})

const alexandria = Alexandria({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-alexandria",
})

const zenTokyoZoo = Zen_Tokyo_Zoo({
    subsets: ['latin'],
    weight: ['400'],
    variable: "--font-zen-tokyo-zoo",
})


export {
    geistMono,
    geistSans,
    gloriaHallelujah,
    lato,
    alexandria,
    zenTokyoZoo,
}