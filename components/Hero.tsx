import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from './ui/text-generate-effect';
import Button from './ui/Button';
import { FaLocationArrow, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#0f172a] text-white overflow-hidden">

      {/* Spotlight Effects */}
      <Spotlight className='absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen fill="White"' />
      <Spotlight className='absolute top-10 left-full h-[80vh] w-[50vw] fill="purple"' />
      <Spotlight className='absolute top-28 left-80 h-[80vh] w-[50vw] fill="blue"' />

      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]",
        )}
      />

      {/* Profile Image */}
      <img
        src="/pf1.png"
        alt="Siddharth Singh"
        className="w-40 h-40 md:w-44 md:h-44 rounded-full border-4 border-white shadow-lg absolute top-6 left-6 z-10 transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
      />

      {/* Content */}
      <div className="z-10 flex flex-col items-center px-4 text-center">
        <TextGenerateEffect
          className='text-[32px] md:text-5xl lg:text-6xl font-bold leading-tight mb-4 mt-50'
          words='Transforming Concepts into Seamless User Experiences'
        />

        <p className='text-lg md:text-xl lg:text-2xl font-medium mb-6'>
          Hi, I&apos;m Siddharth, a Full Stack Developer
        </p>

        {/* Buttons Row */}
        <div className="flex gap-4">
          {/* Show My Work Button */}
          <a href='#about'>
            <Button
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              otherclasses="transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500"
            />
          </a>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1oGOd9S3nVuo_ctLPQP0WTJ5JbfRn3Kb7/preview"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              title="Resume"
              icon={<FaFileDownload />}
              position="right"
              otherclasses="transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500"
            />
          </a>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-10 z-10 animate-bounce text-white opacity-60 text-sm">
        ↓ Scroll to explore more
      </div>
    </section>
  )
}

export default Hero
