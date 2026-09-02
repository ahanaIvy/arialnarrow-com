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

  return (
    <div className="space-y-6">
      <div
        className="relative min-h-[200px] rounded-lg border border-border bg-white p-8 flex items-center justify-center overflow-hidden"
        style={{
          fontFamily: `"${getFontFamily(selectedStyle.weight, selectedStyle.style)}", Arial, sans-serif`,
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
            Custom Text
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
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {styles.map((style) => (
          <button
            key={style.name}
            onClick={() => setSelectedStyle(style)}
            className={`px-4 py-1.5 text-sm rounded-md transition-all ${
              selectedStyle.name === style.name
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
            style={{
              fontFamily: `"${getFontFamily(style.weight, style.style)}", Arial, sans-serif`,
              fontWeight: style.weight,
              fontStyle: style.style,
            }}
          >
            {style.name}
          </button>
        ))}
      </div>

      <button
        onClick={handleReset}
        className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
      >
        Reset
      </button>
    </div>
  );
}
