'use client'

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

type TypingEffectProps = {
    sentences: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
};

const TypingEffect: React.FC<TypingEffectProps> = ({
    sentences,
    typeSpeed = 50,
    backSpeed = 25,
    loop = true,
}) => {
    const typedElement = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typedElement.current) {
            // Zamieniamy znaki nowej linii na <br> w każdym zdaniu
            const formattedSentences = sentences.map(sentence => sentence.replace(/\n/g, '<br>'));

            const typed = new Typed(typedElement.current, {
                strings: formattedSentences,
                typeSpeed: typeSpeed,
                backSpeed: backSpeed,
                loop: loop,
                smartBackspace: true, // Inteligentne kasowanie
            });

            // Czyszczenie instancji Typed.js po zakończeniu efektu
            return () => {
                typed.destroy();
            };
        }
    }, [sentences, typeSpeed, backSpeed, loop]);

    return <span ref={typedElement} className="typed-output" />;
};

export default TypingEffect;
