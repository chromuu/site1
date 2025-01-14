"use client";

import React from 'react';
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Dock, DockItem, DockIcon, DockLabel } from "@/components/ui/dock";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Background Grid */}
      <FlickeringGrid
        className="absolute inset-0"
        squareSize={4}
        gridGap={6}
        color="#9CA3AF"
        maxOpacity={0.15}
        flickerChance={0.1}
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Header */}
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-8">
          Welcome to Your Dashboard
        </h1>
        
        {/* Morphing Text */}
        <div className="h-[200px] flex items-center justify-center">
          <GooeyText
            texts={["mochi", "momo", "miso","sky"]}
            morphTime={1}
            cooldownTime={0.12}
            className="font-bold"
            textClassName="text-white"
          />
        </div>
        
        {/* Dock Component */}
        <div className="mt-12">
          <Dock>
            <DockItem onClick={() => window.location.href = 'https://files.fatemuu.xyz'}>
              <DockIcon>
                <img src="/icon1.svg" alt="Icon 1" />
              </DockIcon>
              <DockLabel>Files</DockLabel>
            </DockItem>
            <DockItem onClick={() => window.location.href = 'https://todo.fatemuu.xyz'}>
              <DockIcon>
                <img src="/icon2.svg" alt="Icon 2" />
              </DockIcon>
              <DockLabel>ToDo List</DockLabel>
            </DockItem>
            <DockItem onClick={() => window.location.href = 'https://tv.fatemuu.xyz'}>
              <DockIcon>
                <img src="/icon3.svg" alt="Icon 3" />
              </DockIcon>
              <DockLabel>IPTV</DockLabel>
            </DockItem>
          </Dock>
        </div>
      </div>
    </div>
  );
}
