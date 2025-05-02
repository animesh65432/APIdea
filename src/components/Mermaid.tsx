'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
    chart: string;
    className?: string;
}

let diagramCounter = 0;

export default function Mermaid({ chart, className }: MermaidProps) {
    const container = useRef<HTMLDivElement>(null);
    const [diagramId] = useState(`mermaid-diagram-${diagramCounter++}`);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: 'default'
        });

        const renderMermaid = async () => {
            if (container.current) {
                try {
                    const { svg } = await mermaid.render(diagramId, chart);
                    container.current.innerHTML = svg;
                } catch (err) {
                    console.error("Mermaid rendering error:", err);
                    container.current.innerHTML = `<pre style="color:red;">${String(err)}</pre>`;
                }
            }
        };

        renderMermaid();
    }, [chart, diagramId]);

    return <div ref={container} className={className} />;
}