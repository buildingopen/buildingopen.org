'use client';

import { useState, useRef, ChangeEvent } from 'react';

export default function BadgePage() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target?.result as string);
        drawImageWithBadge(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const drawImageWithBadge = (src: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      // Set canvas to a square based on the shortest side to crop (object-fit: cover)
      const size = Math.min(img.width, img.height);
      canvas.width = size;
      canvas.height = size;

      // Calculate source x and y to crop from the center
      const sx = (img.width - size) / 2;
      const sy = (img.height - size) / 2;
      
      // Draw cropped original image
      ctx.drawImage(img, sx, sy, size, size, 0, 0, size, size);

      // Draw the Building Open badge
      const badge = new Image();
      badge.onload = () => {
        // Position badge at bottom right
        const badgeSize = size * 0.25; // 25% of image size
        const margin = size * 0.05;
        const bx = size - badgeSize - margin;
        const by = size - badgeSize - margin;

        ctx.drawImage(badge, bx, by, badgeSize, badgeSize);
      };
      badge.src = '/logo.svg';
    };
    img.src = src;
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'buildingopen-profile.png';
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Get your Badge</h1>
        <p className="text-zinc-400 mb-8 text-sm sm:text-base">
          Upload your profile picture to add the Building Open badge. Show your support for open tools and education.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 sm:p-8">
          <div className="flex flex-col items-center gap-6">
            {!imageSrc ? (
              <div className="w-full h-48 sm:h-64 border-2 border-dashed border-zinc-700 rounded-lg flex flex-col items-center justify-center text-zinc-500 hover:border-zinc-500 hover:text-zinc-400 transition-colors cursor-pointer relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <svg className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-sm sm:text-base">Upload a photo</span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-6 w-full">
                <canvas 
                  ref={canvasRef} 
                  className="w-full max-w-[400px] h-auto rounded-lg shadow-lg aspect-square object-cover"
                />
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                  <button 
                    onClick={() => setImageSrc(null)}
                    className="flex-1 px-4 py-2.5 sm:py-2 border border-zinc-700 rounded text-sm hover:bg-zinc-800 transition-colors"
                  >
                    Reset
                  </button>
                  <button 
                    onClick={handleDownload}
                    className="flex-1 px-4 py-2.5 sm:py-2 bg-white text-black rounded text-sm font-medium hover:bg-zinc-200 transition-colors"
                  >
                    Download Image
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
