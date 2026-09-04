'use client';

import { useState, useRef } from 'react';

interface FontGeneratorProps {
  className?: string;
}

const defaultText = 'Arial Narrow Generator';

export function FontGenerator({ className = '' }: FontGeneratorProps) {
  const [text, setText] = useState(defaultText);
  const [fontSize, setFontSize] = useState(64);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [lineHeight, setLineHeight] = useState(1.2);
  const [alignment, setAlignment] = useState<'left' | 'center' | 'right'>('center');
  const [textColor, setTextColor] = useState('#1a1a1a');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [isUppercase, setIsUppercase] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const displayText = isUppercase ? text.toUpperCase() : text;

  const showStatus = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => {
      setStatusMessage(null);
    }, 3000);
  };

  const handleCopyCSS = () => {
    const css = `/* Arial Narrow CSS */
.text-arial-narrow {
  font-family: "Arial Narrow", Arial, sans-serif;
  font-size: ${fontSize}px;
  letter-spacing: ${letterSpacing}px;
  line-height: ${lineHeight};
  text-align: ${alignment};
  color: ${textColor};
  background-color: ${backgroundColor};
  ${isUppercase ? 'text-transform: uppercase;' : ''}
}`;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(css).then(() => {
        showStatus('CSS copied to clipboard!');
      }).catch(() => {
        fallbackCopy(css);
      });
    } else {
      fallbackCopy(css);
    }
  };

  const fallbackCopy = (css: string) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = css;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showStatus('CSS copied to clipboard!');
    } catch {
      showStatus('Failed to copy CSS automatically. Please copy from preview.');
    }
  };

  const handleDownloadSVG = () => {
    try {
      const textToRender = displayText || 'Arial Narrow';
      const rawLines = textToRender.split('\n');
      const maxLineLength = Math.max(...rawLines.map((l) => l.length), 10);
      const width = Math.max(600, Math.ceil(maxLineLength * fontSize * 0.65) + 100);
      const lineStep = fontSize * lineHeight;
      const height = Math.max(200, Math.ceil(rawLines.length * lineStep) + 80);

      const x = alignment === 'center' ? width / 2 : alignment === 'left' ? 40 : width - 40;
      const textAnchor = alignment === 'center' ? 'middle' : alignment === 'left' ? 'start' : 'end';
      const startY = (height - (rawLines.length - 1) * lineStep) / 2;

      const tspans = rawLines
        .map((line, idx) => {
          const escaped = line
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
          const lineY = startY + idx * lineStep;
          return `    <tspan x="${x}" y="${lineY}">${escaped || ' '}</tspan>`;
        })
        .join('\n');

      const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="100%" height="100%" fill="${backgroundColor}" />
  <text 
    text-anchor="${textAnchor}" 
    fill="${textColor}" 
    font-family="'Arial Narrow', 'Nimbus Sans L', sans-serif-condensed, sans-serif" 
    font-size="${fontSize}px" 
    letter-spacing="${letterSpacing}px"
    dominant-baseline="central"
  >
${tspans}
  </text>
</svg>`;

      const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'arial-narrow-vector.svg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showStatus('Vector SVG downloaded successfully!');
    } catch {
      showStatus('Could not export SVG. Please copy CSS instead.');
    }
  };

  const handleDownloadImage = () => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        showStatus('Canvas rendering unavailable.');
        return;
      }
      const padding = 48;
      ctx.font = `${fontSize}px "Arial Narrow", "Nimbus Sans L", sans-serif-condensed, sans-serif`;
      const textToRender = displayText || 'Arial Narrow';
      const textMetrics = ctx.measureText(textToRender);
      
      canvas.width = Math.max(500, Math.ceil(textMetrics.width) + padding * 2);
      canvas.height = Math.max(180, Math.ceil(fontSize * lineHeight) + padding * 2);

      // Background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render text
      ctx.font = `${fontSize}px "Arial Narrow", "Nimbus Sans L", sans-serif-condensed, sans-serif`;
      ctx.fillStyle = textColor;
      ctx.textAlign = alignment;
      ctx.textBaseline = 'middle';
      const x = alignment === 'center' ? canvas.width / 2 : alignment === 'left' ? padding : canvas.width - padding;
      const y = canvas.height / 2;
      ctx.fillText(textToRender, x, y);

      const link = document.createElement('a');
      link.download = 'arial-narrow-specimen.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      showStatus('Specimen PNG downloaded successfully!');
    } catch {
      showStatus('Could not export image. Please use Copy CSS.');
    }
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Text Input */}
        <div className="space-y-2">
          <label htmlFor="gen-text" className="text-sm font-medium text-foreground">
            Text
          </label>
          <input
            id="gen-text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full rounded-md border border-border bg-white px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Type your text here..."
          />
        </div>

        {/* Font Size */}
        <div className="space-y-2">
          <label htmlFor="gen-size" className="text-sm font-medium text-foreground">
            Font Size: {fontSize}px
          </label>
          <input
            id="gen-size"
            type="range"
            min="12"
            max="200"
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${((fontSize - 12) / (200 - 12)) * 100}%, hsl(var(--secondary)) ${((fontSize - 12) / (200 - 12)) * 100}%, hsl(var(--secondary)) 100%)`
            }}
          />
        </div>

        {/* Letter Spacing */}
        <div className="space-y-2">
          <label htmlFor="gen-spacing" className="text-sm font-medium text-foreground">
            Letter Spacing: {letterSpacing}px
          </label>
          <input
            id="gen-spacing"
            type="range"
            min="-2"
            max="20"
            step="0.5"
            value={letterSpacing}
            onChange={(e) => setLetterSpacing(parseFloat(e.target.value))}
            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Line Height */}
        <div className="space-y-2">
          <label htmlFor="gen-lineheight" className="text-sm font-medium text-foreground">
            Line Height: {lineHeight}
          </label>
          <input
            id="gen-lineheight"
            type="range"
            min="0.8"
            max="2.5"
            step="0.1"
            value={lineHeight}
            onChange={(e) => setLineHeight(parseFloat(e.target.value))}
            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Alignment */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Alignment</label>
          <div className="flex gap-1">
            {(['left', 'center', 'right'] as const).map((align) => (
              <button
                key={align}
                onClick={() => setAlignment(align)}
                className={`flex-1 px-3 py-1.5 text-sm rounded-md transition-all ${
                  alignment === align
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {align.charAt(0).toUpperCase() + align.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Colors</label>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground">Text</span>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-8 h-8 rounded border border-border cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground">BG</span>
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-8 h-8 rounded border border-border cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Uppercase Toggle */}
        <div className="space-y-2 flex items-end">
          <button
            onClick={() => setIsUppercase(!isUppercase)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              isUppercase
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {isUppercase ? 'UPPERCASE' : 'lowercase'} 
            <span className="ml-1 text-xs opacity-60">(Toggle)</span>
          </button>
        </div>
      </div>

      {/* Preview */}
      <div 
        ref={previewRef}
        className="rounded-lg border border-border p-8 min-h-[200px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundColor,
          minHeight: '200px',
        }}
      >
        <div
          style={{
            fontFamily: '"Arial Narrow", "Nimbus Sans L", sans-serif-condensed, sans-serif',
            fontSize: `${fontSize}px`,
            letterSpacing: `${letterSpacing}px`,
            lineHeight,
            textAlign: alignment,
            color: textColor,
            width: '100%',
            wordBreak: 'break-word',
          }}
        >
          {displayText || 'Preview text...'}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={handleDownloadSVG}
          className="px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12L12 16.5m0 0L16.5 12M12 16.5V3" />
          </svg>
          Download SVG Vector
        </button>
        <button
          onClick={handleDownloadImage}
          className="px-5 py-2.5 text-sm font-semibold bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors border border-border flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          Download PNG
        </button>
        <button
          onClick={handleCopyCSS}
          className="px-5 py-2.5 text-sm font-semibold bg-white text-foreground border border-border rounded-md hover:bg-secondary/40 transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
          </svg>
          Copy CSS Code
        </button>
        {statusMessage && (
          <span className="text-sm px-3 py-1.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 transition-opacity font-medium">
            {statusMessage}
          </span>
        )}
      </div>
    </div>
  );
}
