'use client';

import { useState } from 'react';

interface FontPreviewProps {
  defaultText?: string;
}

const styles = [
  { name: 'Regular', weight: 400, style: 'normal' },
  { name: 'Bold', weight: 700, style: 'normal' },
  { name: 'Italic', weight: 400, style: 'italic' },
  { name: 'Bold Italic', weight: 700, style: 'italic' },
];

export function FontPreview({ defaultText = 'The quick brown fox jumps over the lazy dog' }: FontPreviewProps) {
  const [text, setText] = useState(defaultText);
  const [fontSize, setFontSize] = useState(48);
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);

  const getFontFamily = (weight: number, style: string) => {
    let fontName = 'Arial Narrow';
    if (weight === 700 && style === 'italic') return `${fontName} Bold Italic`;
    if (weight === 700) return `${fontName} Bold`;
    if (style === 'italic') return `${fontName} Italic`;
    return fontName;
  };

  const handleReset = () => {
    setText(defaultText);
    setFontSize(48);
    setSelectedStyle(styles[0]);
  };

  const handleDownloadSVG = () => {
    try {
      const textToRender = text || defaultText;
      const width = Math.max(600, Math.ceil(textToRender.length * fontSize * 0.7) + 80);
      const height = Math.max(180, Math.ceil(fontSize * 1.8) + 60);

      const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <rect width="100%" height="100%" fill="#ffffff" />
  <text 
    x="50%" 
    y="52%" 
    text-anchor="middle" 
    fill="#0f172a" 
    font-family="'Arial Narrow', 'Nimbus Sans L', sans-serif-condensed, sans-serif" 
    font-size="${fontSize}px" 
    font-weight="${selectedStyle.weight}"
    font-style="${selectedStyle.style}"
    dominant-baseline="middle"
  >${textToRender.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</text>
</svg>`;

      const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `arial-narrow-${selectedStyle.name.toLowerCase().replace(/\s+/g, '-')}.svg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error('SVG export failed', e);
    }
  };

  const handleDownloadPNG = () => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      const textToRender = text || defaultText;
      const fontStr = `${selectedStyle.style === 'italic' ? 'italic ' : ''}${selectedStyle.weight} ${fontSize}px "Arial Narrow", "Nimbus Sans L", sans-serif-condensed, sans-serif`;
      ctx.font = fontStr;
      const metrics = ctx.measureText(textToRender);
      const padding = 40;

      canvas.width = Math.max(500, Math.ceil(metrics.width) + padding * 2);
      canvas.height = Math.max(160, Math.ceil(fontSize * 1.5) + padding * 2);

      // Background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Text
      ctx.font = fontStr;
      ctx.fillStyle = '#0f172a';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(textToRender, canvas.width / 2, canvas.height / 2);

      const link = document.createElement('a');
      link.download = `arial-narrow-${selectedStyle.name.toLowerCase().replace(/\s+/g, '-')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) {
      console.error('PNG export failed', e);
    }
  };

  return (
    <div className="space-y-6">
      <div
        className="relative min-h-[200px] rounded-lg border border-border bg-white p-8 flex items-center justify-center overflow-hidden shadow-sm"
        style={{
          fontFamily: `"${getFontFamily(selectedStyle.weight, selectedStyle.style)}", "Arial Narrow", "Nimbus Sans L", sans-serif-condensed, sans-serif`,
          fontWeight: selectedStyle.weight,
          fontStyle: selectedStyle.style,
          fontSize: `${fontSize}px`,
          lineHeight: 1.3,
        }}
      >
        <div className="w-full text-center break-words">{text || 'Preview text...'}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="preview-text" className="text-sm font-medium text-foreground">
            Custom Preview Text
          </label>
          <input
            id="preview-text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full rounded-md border border-border bg-white px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="font-size" className="text-sm font-medium text-foreground">
              Font Size: {fontSize}px
            </label>
          </div>
          <input
            id="font-size"
            type="range"
            min="12"
            max="120"
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-border">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-muted-foreground mr-1">Weights:</span>
          {styles.map((style) => (
            <button
              key={style.name}
              onClick={() => setSelectedStyle(style)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                selectedStyle.name === style.name
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
              style={{
                fontFamily: `"${getFontFamily(style.weight, style.style)}", "Arial Narrow", Arial, sans-serif`,
                fontWeight: style.weight,
                fontStyle: style.style,
              }}
            >
              {style.name}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleDownloadSVG}
            className="px-4 py-2 text-xs font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-1.5"
            title="Download vector SVG file"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12L12 16.5m0 0L16.5 12M12 16.5V3" />
            </svg>
            Download SVG
          </button>
          <button
            onClick={handleDownloadPNG}
            className="px-3 py-2 text-xs font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors border border-border flex items-center gap-1.5"
            title="Download PNG image"
          >
            Download PNG
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
