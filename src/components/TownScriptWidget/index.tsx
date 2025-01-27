"use client";

import { useEffect } from "react";
import Button from "../Button";

const townscriptId = process.env.NEXT_PUBLIC_TOWNSCRIPT_ID;

const TownScriptWidget = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.townscript.com/static/Bookingflow/js/townscript-widget.nocache.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    const handlePopup = () => {
        console.log("register popup");
        if ((window as any).popup) {
            (window as any).popup(townscriptId);
        }
        else {
            console.error("popup not loaded yet");
        }
    }


    return (
        <div>
            <Button onClick={handlePopup} inverted>
                Register
            </Button>
            <noscript id="tsNoJsMsg">Javascript on your browser is not enabled.</noscript>
        </div>
    )
}

export default TownScriptWidget;