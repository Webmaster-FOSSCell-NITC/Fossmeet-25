'use client'

import Container from "@/components/Container";
import Section from "@/components/Section";
import Hls from "hls.js";
import { useEffect, useRef } from "react";

const Page = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        let hls: Hls | null = null;
        if (!videoRef.current)
            return;
        const videoUrl = process.env.NEXT_PUBLIC_STREAM_URL || "";
        if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
            videoRef.current.src = videoUrl;
        }
        else if (Hls.isSupported()) {
            hls = new Hls();
            hls.loadSource(videoUrl);
            hls.attachMedia(videoRef.current);
            void videoRef.current.play();
        }

        return () => {
            if (hls != null) {
                hls.destroy();
            }
        }
    }, [videoRef]);


    return (
        <Container>
            <Section className="flex items-center justify-center">
                <video ref={videoRef} className="aspect-video w-[900px] max-w-[80%]" controls muted autoPlay playsInline />
            </Section>
        </Container>
    )
}

export default Page;