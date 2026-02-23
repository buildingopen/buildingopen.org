'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

const CANVAS_SIZE = 800;
const LOGO_WIDTH = 90;
const LOGO_HEIGHT = Math.round(LOGO_WIDTH * 40 / 46); // ~78
const LOGO_OFFSET_RIGHT = 155;
const LOGO_OFFSET_BOTTOM = 95;

function drawBadge(ctx: CanvasRenderingContext2D, img: HTMLImageElement) {
  // Square crop and resize
  const size = Math.min(img.width, img.height);
  const sx = (img.width - size) / 2;
  const sy = (img.height - size) / 2;

  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.drawImage(img, sx, sy, size, size, 0, 0, CANVAS_SIZE, CANVAS_SIZE);

  // Logo position (matches Python script)
  const logoX = CANVAS_SIZE - LOGO_WIDTH - LOGO_OFFSET_RIGHT; // 555
  const logoY = CANVAS_SIZE - LOGO_HEIGHT - LOGO_OFFSET_BOTTOM; // 627

  // Scale factors from SVG viewBox (46x40) to logo size
  const scaleX = LOGO_WIDTH / 46;
  const scaleY = LOGO_HEIGHT / 40;

  // Draw green circle
  ctx.fillStyle = '#22c55e';
  ctx.beginPath();
  ctx.arc(logoX + 36 * scaleX, logoY + 22 * scaleY, 10 * scaleX, 0, Math.PI * 2);
  ctx.fill();

  // Draw "b" text
  ctx.fillStyle = '#22c55e';
  ctx.font = `700 ${Math.round(40 * scaleY)}px "Space Grotesk", system-ui, sans-serif`;
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('b', logoX, logoY + 32 * scaleY);
}

export default function BadgePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasImage, setHasImage] = useState(false);
  const [dragging, setDragging] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontLoaded(true));
  }, []);

  const processImage = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = CANVAS_SIZE;
        canvas.height = CANVAS_SIZE;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        drawBadge(ctx, img);
        setHasImage(true);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

  const handleFile = useCallback((files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    if (!file.type.startsWith('image/')) return;
    processImage(file);
  }, [processImage]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files);
  }, [handleFile]);

  const handleDownload = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'profile-bo.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, []);

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-3 text-center">
          Building Open Badge
        </h1>
        <p className="text-zinc-400 text-center mb-10 max-w-lg mx-auto">
          Add the Building Open logo to your profile picture. Upload a photo, preview the badge, and download it.
        </p>

        {/* Upload area */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
            dragging
              ? 'border-green-500 bg-green-500/5'
              : 'border-zinc-700 hover:border-zinc-500'
          }`}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <input
            id="file-input"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFile(e.target.files)}
          />
          <svg className="w-10 h-10 mx-auto mb-3 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
          </svg>
          <p className="text-zinc-400 text-sm">
            Drop your photo here or <span className="text-green-500">browse</span>
          </p>
          <p className="text-zinc-600 text-xs mt-1">PNG, JPG, or WebP</p>
        </div>

        {/* Canvas preview */}
        <div className={`mt-8 ${hasImage ? '' : 'hidden'}`}>
          <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
            <canvas
              ref={canvasRef}
              className="w-full max-w-sm mx-auto rounded"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors"
            >
              Download Badge (800x800)
            </button>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-16 border-t border-zinc-800 pt-10">
          <h2 className="text-lg font-semibold mb-4">How it works</h2>
          <ol className="space-y-3 text-sm text-zinc-400">
            <li className="flex gap-3">
              <span className="text-green-500 font-medium">1.</span>
              Upload any profile picture (it gets cropped to a square)
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-medium">2.</span>
              The Building Open logo is applied at the bottom-right
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-medium">3.</span>
              Download the 800x800 PNG and use it on LinkedIn, GitHub, etc.
            </li>
          </ol>
          <p className="text-xs text-zinc-600 mt-4">
            Everything happens in your browser. No images are uploaded to any server.
          </p>
        </div>
      </div>
    </div>
  );
}
