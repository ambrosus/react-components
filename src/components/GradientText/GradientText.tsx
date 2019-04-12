import React, { useRef, useEffect, SFC } from 'react';
import clsx from 'clsx';
import { IGradientText } from '../../interfaces/gradient-text.interface';
import './GradientText.scss';

const GradientText: SFC<IGradientText> = ({ fontWeight = 400, size = 20, vertical = false, colors, className = '', children, value }) => {
    const text = useRef<SVGTextElement>(null);
    const svgWrapper = useRef<any>(null);
    useEffect(() => {
        text.current!.style.fontSize = `${size}px`;
        text.current!.style.fontWeight = fontWeight.toString();

        const bbox = text.current!.getBBox();
        svgWrapper.current!.style.width = bbox.width;
        svgWrapper.current!.style.height = bbox.height;
    });

    return (
        <div className={clsx('AMB-Gradient-Text', className)}>
            <svg ref={svgWrapper}>
                <defs>
                    <linearGradient id={`${colors.join('')}-${vertical}`}
                        x1='0' y1='0' x2={vertical ? '0' : '100%'} y2={vertical ? '100%' : '0'}
                        gradientUnits='userSpaceOnUse'>
                        {
                            colors.map((color: any, index: number) => (
                                <React.Fragment key={`${color}-${index}`}>
                                    <stop stopColor={color} offset={`${index / colors.length * 100}%`} />
                                </React.Fragment>
                            ))
                        }
                    </linearGradient>
                </defs>
                <text ref={text} width='100' height='100' x='0' y={size} fill={`url(#${colors.join('')}-${vertical})`}>
                    {children || value}
                </text>
            </svg>
        </div>
    );
};

export default GradientText;
