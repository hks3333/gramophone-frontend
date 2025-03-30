// src/components/topbar.tsx
import { FC } from 'react';
import "./vinylcover.css"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Blurhash } from "react-blurhash";


interface VinylCoverProps {
    imageSrc: string;
    text: string;
    onPlay: () => void;
}

const VinylCover: FC<VinylCoverProps> = ({ imageSrc, text, onPlay }) => {

    const [isLoaded, setIsLoaded] = useState(false);

    const formatCircularText = (text: string): string => {
        const cleanText = text.trim();
        let formattedText = '';
        let wordCount = 0;

        while (wordCount < 40) {
            formattedText += cleanText + ' • ';
            wordCount += text.split('').length;

            if (wordCount + text.split('').length > 40) break;
        }

        return formattedText;
    };

    const circularText = formatCircularText(text);

    return (
        <div className="vinyl">

            <div className="image-container">
                {!isLoaded && (
                    <div className="cover blurhash">
                        <Blurhash
                            hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Random hash
                            width={160}
                            height={160}
                            resolutionX={32}
                            resolutionY={32}
                            punch={1}
                        />
                    </div>
                )}

                <img
                    src={imageSrc}
                    alt="Album Cover"
                    className={`cover image ${isLoaded ? "visible" : "hidden"}`}
                    onLoad={() => setIsLoaded(true)}
                />
            </div>


            <svg viewBox="0 0 200 200" className="text-circle">
                <defs>
                    <path
                        id="circlePath"
                        d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                    />
                </defs>
                <text>
                    <textPath href="#circlePath">
                        {circularText}
                    </textPath>
                </text>
            </svg>
            <Button className="play-button" onClick={onPlay}>▶</Button>
        </div>
    );
};

export default VinylCover;