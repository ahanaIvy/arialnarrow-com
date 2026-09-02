'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

interface FontPreviewProps {
  defaultText?: string;
  className?: string;
}

const styles = [
  { name: 'Regular', weight: 400, style: 'normal' },
  { name: 'Bold', weight: 700, style: 'normal' },
  { name: 'Italic', weight: 400, style: 'italic' },
  { name: 'Bold Italic', weight: 700, style: 'italic' },
];

export function FontPreview({ defaultText = 'The quick brown fox jumps over the lazy dog', className = '' }: FontPreviewProps) {
  const [text, setText] = useState(defaultText);
  const [fontSize, setFontSize] = useState(48);
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [isCopied, setIsCopied] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  // Get the font family name with the correct weight/style combination
  const getFontFamily = (weight: number, style: string) => {
    let fontName = 'Arial Narrow';
    if (weight === 700 && style === 'italic') return `${fontName} Bold Italic`;
    if (weight === 700) return `${fontName} Bold`;
    if (style === 'italic') return `${fontName} Italic`;
    return fontName;
  };

  const handleStyleChange = (style: typeof styles[0]) => {
    setSelectedStyle(style);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleReset = () => {
    setText(defaultText);
    setFontSize(48);
    setSelectedStyle(styles[0]);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Preview area */}
      <div 
        ref={previewRef}
        className="relative min-h-[200px] rounded-lg border border-border bg-white p-8 flex items-center justify-center overflow-hidden"
        style={{
          fontFamily: `"${getFontFamily(selectedStyle.weight, selectedStyle.style)}", Arial, sans-serif`,
          fontWeight: selectedStyle.weight,
          fontStyle: selectedStyle.style,
          fontSize: `${fontSize}px`,
          lineHeight: 1.3,
        }}
      >
        <div className="w-full text-center break-words">
          {text || 'Preview text...'}
        </div>
        
        {/* Decorative watermark */}
        <div className="absolute bottom-2 right-3 text-xs text-muted-foreground/20 select-none">
          ArialNarrow.com
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Text input */}
        <div className="space-y-2">
          <label htmlFor="preview-text" className="text-sm font-medium text-foreground">
            Custom Text
          </label>
          <input
            id="preview-text"
            type="text"
            value={text}
            onChange={handleTextChange}
            className="w-full rounded-md border border-border bg-white px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Type your text here..."
          />
        </div>

        {/* Font size slider */}
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
            style={{
              background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${((fontSize - 12) / (120 - 12)) * 100}%, hsl(var(--secondary)) ${((fontSize - 12) / (120 - 12)) * 100}%, hsl(var(--secondary)) 100%)`
            }}
          />
        </div>
      </div>

      {/* Style buttons */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm font-medium text-foreground mr-2">Style:</span>
        {styles.map((style) => (
          <button
            key={style.name}
            onClick={() => handleStyleChange(style)}
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

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleReset}
          className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
        >
          Reset
        </button>
        <button
          onClick={handleCopy}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            isCopied
              ? 'bg-green-500 text-white'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          {isCopied ? '✓ Copied!' : 'Copy Text'}
        </button>
      </div>
    </div>
  );
}