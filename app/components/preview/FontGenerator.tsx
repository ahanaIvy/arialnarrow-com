'use client';

import { useState, useRef, useEffect } from 'react';

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
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const displayText = isUppercase ? text.toUpperCase() : text;

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
    
    navigator.clipboard.writeText(css).then(() => {
      // Show success feedback
      alert('CSS copied to clipboard!');
    }).catch(() => {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = css;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('CSS copied to clipboard!');
    });
  };

  const handleDownloadImage = async () => {
    if (!previewRef.current) {
      alert('Preview not ready. Please try again.');
      return;
    }

    setIsGeneratingImage(true);

    try {
      // Try to load html2canvas dynamically
      const html2canvas = await import('html2canvas').then(mod => mod.default);
      
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        backgroundColor: backgroundColor,
        allowTaint: false,
        useCORS: true,
        logging: false,
        width: previewRef.current.scrollWidth,
        height: previewRef.current.scrollHeight,
      });
      
      const link = document.createElement('a');
      link.download = 'arial-narrow-preview.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
      // Fallback: Use canvas API directly
      try {
        await downloadImageFallback();
      } catch (fallbackError) {
        alert('Unable to download image. Please use the Copy CSS option instead.');
      }
    } finally {
      setIsGeneratingImage(false);
    }
  };

  // Fallback method using canvas API
  const downloadImageFallback = async () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas not supported');

    const textToRender = displayText || 'Preview text...';
    const padding = 40;
    
    // Measure text
    canvas.width = 800;
    canvas.height = 400;
    
    // Clear and set background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Set text properties
    ctx.font = `${fontSize}px "Arial Narrow", Arial, sans-serif`;
    ctx.fillStyle = textColor;
    ctx.textAlign = alignment;
    ctx.textBaseline = 'middle';
    
    // Position text
    let x = canvas.width / 2;
    if (alignment === 'left') x = padding;
    if (alignment === 'right') x = canvas.width - padding;
    
    ctx.fillText(textToRender, x, canvas.height / 2);
    
    // Download
    const link = document.createElement('a');
    link.download = 'arial-narrow-preview.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
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
            style={{
              background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${((letterSpacing + 2) / (22)) * 100}%, hsl(var(--secondary)) ${((letterSpacing + 2) / (22)) * 100}%, hsl(var(--secondary)) 100%)`
            }}
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
            style={{
              background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${((lineHeight - 0.8) / (1.7)) * 100}%, hsl(var(--secondary)) ${((lineHeight - 0.8) / (1.7)) * 100}%, hsl(var(--secondary)) 100%)`
            }}
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
            fontFamily: '"Arial Narrow", Arial, sans-serif',
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
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleCopyCSS}
          className="px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Copy CSS
        </button>
        <button
          onClick={handleDownloadImage}
          disabled={isGeneratingImage}
          className={`px-6 py-2.5 text-sm font-medium rounded-md transition-colors ${
            isGeneratingImage
              ? 'bg-secondary text-muted-foreground cursor-not-allowed'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          {isGeneratingImage ? 'Generating...' : 'Download Image'}
        </button>
      </div>
    </div>
  );
}
