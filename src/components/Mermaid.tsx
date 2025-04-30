'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
    chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        mermaid.initialize({ startOnLoad: false });

        const renderMermaid = async () => {
            if (container.current) {
                try {
                    const { svg } = await mermaid.render('generatedDiagram', chart);
                    container.current.innerHTML = svg;
                } catch (err) {
                    container.current.innerHTML = `<pre style="color:red;">${String(err)}</pre>`;
                }
            }
        };

        renderMermaid();
    }, [chart]);

    return <div ref={container} />;
}
