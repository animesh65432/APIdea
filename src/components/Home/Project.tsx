import { useState } from 'react';
import { Code, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { ProjectsTypes } from "@/types"
import { Mermaid } from "@/components"

type Props = {
    project: ProjectsTypes;
}

export default function Project({ project }: Props) {
    const [copied, setCopied] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const copyCode = () => {
        navigator.clipboard.writeText(project.starterCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-slate-50 p-6 rounded-lg shadow-md max-w-4xl mx-auto my-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="border-b border-slate-200 p-4">
                    <h3 className="text-lg font-semibold text-slate-800">
                        {project.name}
                    </h3>
                </div>

                <div className="p-4 bg-slate-50">
                    <p className="font-medium text-slate-700">{project.description}</p>
                </div>


                <div className="relative">
                    <div className="bg-slate-800 p-2 flex justify-between items-center">
                        <div className="flex items-center">
                            <Code size={18} className="text-slate-300 mr-2" />
                            <span className="text-sm text-slate-300">Starter Code</span>
                        </div>
                        <button
                            onClick={copyCode}
                            className="flex items-center text-xs text-slate-300 hover:text-white transition-colors px-2 py-1 rounded"
                        >
                            {copied ? (
                                <>
                                    <Check size={16} className="mr-1" />
                                    <span>Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy size={16} className="mr-1" />
                                    <span>Copy code</span>
                                </>
                            )}
                        </button>
                    </div>

                    <div className={`bg-slate-900 p-4 overflow-auto ${expanded ? 'max-h-full' : 'max-h-64'}`}>
                        <pre className="text-slate-200 text-sm whitespace-pre-wrap font-mono">
                            {project.starterCode}
                        </pre>
                    </div>

                    {project.starterCode.length > 200 && (
                        <button
                            className="w-full bg-slate-800 text-slate-300 hover:text-white py-1 flex justify-center items-center text-sm"
                            onClick={() => setExpanded(!expanded)}
                        >
                            {expanded ? (
                                <>
                                    <ChevronUp size={16} className="mr-1" />
                                    <span>Show less</span>
                                </>
                            ) : (
                                <>
                                    <ChevronDown size={16} className="mr-1" />
                                    <span>Show more</span>
                                </>
                            )}
                        </button>
                    )}
                </div>


                <div className="p-4 border-t border-slate-200">
                    <h4 className="text-sm font-medium text-slate-600 mb-2">Flow Diagram</h4>
                    <div className="bg-slate-50 p-3 rounded border border-slate-200">
                        <Mermaid
                            chart={`graph LR
                ${project.diagram.split('→').map((node, i, arr) => {
                                if (i < arr.length - 1) {
                                    // Format each node and connection
                                    const currentNode = `node${i}["${node.trim()}"]`;
                                    const nextNode = `node${i + 1}["${arr[i + 1].trim()}"]`;
                                    return `${currentNode} --> ${nextNode}`;
                                }
                                return '';
                            }).filter(Boolean).join('\n                ')}
              `}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}