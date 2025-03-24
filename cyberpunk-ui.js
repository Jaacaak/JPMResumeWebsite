"use client"

import React from "react"

const CyberpunkUI = () => {
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    const drawGlobe = (ctx, x, y, radius) => {
      ctx.strokeStyle = "black"
      ctx.lineWidth = 1

      // Draw globe outline
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.stroke()

      // Draw latitude lines
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath()
        ctx.ellipse(x, y, radius, radius * Math.cos((i * Math.PI) / 8), 0, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Draw longitude lines
      for (let i = 0; i < 8; i++) {
        ctx.beginPath()
        ctx.moveTo(x, y - radius)
        ctx.bezierCurveTo(
          x + radius * Math.sin((i * Math.PI) / 4),
          y - radius * 0.5,
          x + radius * Math.sin((i * Math.PI) / 4),
          y + radius * 0.5,
          x,
          y + radius,
        )
        ctx.stroke()
      }
    }

    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        // Draw three globes
        drawGlobe(ctx, 40, 60, 30)
        drawGlobe(ctx, 40, 140, 30)
        drawGlobe(ctx, 40, 220, 30)
      }
    }
  }, [])

  return (
    <div className="bg-white p-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-12 gap-4 border-2 border-black p-4">
        {/* Left section with perspective grid and figure */}
        <div className="col-span-7 border-2 border-black relative h-[600px]">
          <div className="absolute inset-0 grid-perspective">
            {/* Top grid */}
            <div className="absolute top-0 left-0 w-full h-1/2 border-b border-black">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={`top-${i}`}
                  className="absolute border-r border-black"
                  style={{
                    left: `${(i + 1) * 8}%`,
                    top: "0",
                    height: "100%",
                    transform: `perspective(1000px) rotateX(45deg) scaleY(${1 - i * 0.05})`,
                    transformOrigin: "bottom",
                  }}
                />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={`horizontal-top-${i}`}
                  className="absolute border-t border-black w-full"
                  style={{
                    top: `${(i + 1) * 10}%`,
                    transform: `perspective(1000px) rotateX(45deg) scaleY(${1 - i * 0.05})`,
                    transformOrigin: "bottom",
                  }}
                />
              ))}
            </div>

            {/* Bottom grid */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 border-t border-black">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={`bottom-${i}`}
                  className="absolute border-r border-black"
                  style={{
                    left: `${(i + 1) * 8}%`,
                    bottom: "0",
                    height: "100%",
                    transform: `perspective(1000px) rotateX(-45deg) scaleY(${1 - i * 0.05})`,
                    transformOrigin: "top",
                  }}
                />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={`horizontal-bottom-${i}`}
                  className="absolute border-b border-black w-full"
                  style={{
                    bottom: `${(i + 1) * 10}%`,
                    transform: `perspective(1000px) rotateX(-45deg) scaleY(${1 - i * 0.05})`,
                    transformOrigin: "top",
                  }}
                />
              ))}
            </div>

            {/* Japanese figure */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64">
              <div className="relative w-full h-full">
                <svg viewBox="0 0 100 150" className="w-full h-full">
                  <path
                    d="M50,30 C60,30 65,40 65,50 C65,60 60,70 50,70 C40,70 35,60 35,50 C35,40 40,30 50,30 Z"
                    fill="white"
                    stroke="black"
                    strokeWidth="1"
                  />
                  <path d="M50,70 L50,110" stroke="black" strokeWidth="1" />
                  <path d="M30,90 L70,90" stroke="black" strokeWidth="1" />
                  <path d="M50,110 L30,130" stroke="black" strokeWidth="1" />
                  <path d="M50,110 L70,130" stroke="black" strokeWidth="1" />
                  <path d="M35,50 C25,60 25,80 35,90" stroke="black" strokeWidth="1" fill="none" />
                  <path d="M65,50 C75,60 75,80 65,90" stroke="black" strokeWidth="1" fill="none" />
                </svg>
              </div>
            </div>

            {/* Globes */}
            <div className="absolute left-12 top-0 bottom-0 flex flex-col justify-around">
              <canvas ref={canvasRef} width="80" height="300" />
            </div>
          </div>

          {/* LUMA text vertical */}
          <div
            className="absolute right-4 top-1/2 -translate-y-1/2 text-6xl font-bold"
            style={{ writingMode: "vertical-rl" }}
          >
            LUMA
          </div>
        </div>

        {/* Right section with various UI elements */}
        <div className="col-span-5 grid grid-rows-6 gap-4">
          {/* Tunnel vortex */}
          <div className="row-span-1 border-2 border-black relative">
            <div className="absolute inset-0 flex items-center justify-center">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={`circle-${i}`}
                  className="absolute border border-black rounded-full"
                  style={{
                    width: `${100 - i * 12}%`,
                    height: `${100 - i * 12}%`,
                    transform: i % 2 === 0 ? "scaleX(1.2)" : "scaleX(1.2) scaleY(0.9)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Strange text */}
          <div className="row-span-1 border-2 border-black flex items-center justify-center">
            <div className="bg-gray-200 px-4 py-1 rounded-full text-xs tracking-widest">
              ⊂⊃⊥⊥⊃ ⊂⊃⊥⊥⊃ • ⊥⊥⊃⊂⊃⊥⊥ ⊥⊥⊃⊂⊃
            </div>
          </div>

          {/* Grid and chart */}
          <div className="row-span-2 grid grid-cols-2 gap-4">
            <div className="border-2 border-black">
              <div className="grid grid-cols-10 grid-rows-20 h-full w-full">
                {Array.from({ length: 200 }).map((_, i) => (
                  <div key={`grid-${i}`} className="border-r border-b border-black" />
                ))}
              </div>
            </div>
            <div className="border-2 border-black p-2">
              <div className="text-[6px] mb-1 text-center">SPACE VECTOR</div>
              <div className="h-4/5 border border-black relative">
                <div className="absolute bottom-0 left-0 w-full h-full">
                  <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={`chart-grid-${i}`} className="border-r border-t border-black" />
                    ))}
                  </div>
                  <div className="absolute bottom-1/3 left-0 w-full border-t border-black border-dashed" />
                  <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-black transform -translate-x-1/2" />
                </div>
              </div>
              <div className="flex justify-between text-[6px] mt-1">
                <span>0</span>
                <span>ACCELERATION COEFFICIENT</span>
              </div>
            </div>
          </div>

          {/* Progress bars */}
          <div className="row-span-1 border-2 border-black p-2 grid gap-2">
            <div className="flex items-center gap-2">
              <div className="h-2 flex-grow bg-gray-200 relative">
                <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-orange-500" />
                <div className="absolute left-1/3 top-0 bottom-0 w-1 h-1 bg-black transform -translate-x-1/2 -translate-y-1/4" />
              </div>
              <div className="text-[6px] flex justify-between w-24">
                <span>0%</span>
                <span>SYSTEM CAPACITY</span>
                <span>100%</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 flex-grow bg-orange-500" />
              <div className="text-[6px] flex justify-between w-24">
                <span>0%</span>
                <span>ENERGY LEVEL</span>
                <span>100%</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 flex-grow bg-orange-500" />
              <div className="text-[6px] flex justify-between w-24">
                <span>0%</span>
                <span>POWER SUPPLY</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Quote marks */}
          <div className="row-span-1 border-2 border-black rounded-full flex items-center justify-center">
            <div className="text-4xl text-orange-500 font-bold">"</div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="col-span-12 grid grid-cols-12 gap-4 mt-4">
          {/* Color palette */}
          <div className="col-span-6 flex">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={`color-${i}`} className={`flex-1 h-12 border border-black ${i >= 5 ? "bg-orange-500" : ""}`} />
            ))}
          </div>

          {/* Livia text */}
          <div className="col-span-2 flex items-center text-3xl font-bold">
            Livia <span className="ml-2">←</span>
          </div>

          {/* Hand and time warp */}
          <div className="col-span-2 grid grid-rows-2 gap-2">
            <div className="border-2 border-black p-1">
              <svg viewBox="0 0 100 50" className="w-full h-full">
                <path d="M30,40 C40,20 60,20 70,40" stroke="black" fill="none" strokeWidth="1" />
                <path d="M30,40 L40,45 L50,40 L60,45 L70,40" stroke="black" fill="none" strokeWidth="1" />
                <path d="M50,40 L50,20" stroke="black" fill="none" strokeWidth="1" />
                <path d="M40,45 L40,25" stroke="black" fill="none" strokeWidth="1" />
                <path d="M60,45 L60,25" stroke="black" fill="none" strokeWidth="1" />
              </svg>
            </div>
            <div className="border-2 border-black p-1 text-center">
              <div className="transform scale-x-[-1] text-[8px]">TIME WARP</div>
              <div className="mt-1">
                <svg viewBox="0 0 50 20" className="w-full h-full">
                  <circle cx="25" cy="10" r="8" fill="white" stroke="black" strokeWidth="1" />
                  <circle cx="22" cy="7" r="2" fill="black" />
                  <circle cx="28" cy="7" r="2" fill="black" />
                  <path d="M22,13 C22,15 28,15 28,13" stroke="black" fill="none" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>

          {/* Starburst */}
          <div className="col-span-2 border-2 border-black relative">
            <div className="absolute inset-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={`ray-${i}`}
                  className="absolute bg-black h-0.5 w-full left-0 top-1/2 -translate-y-1/2 origin-center"
                  style={{ transform: `rotate(${i * 22.5}deg)` }}
                />
              ))}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black" />
              <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

