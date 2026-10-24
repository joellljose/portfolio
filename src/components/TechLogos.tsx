import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = "w-6 h-6", size = 24 }) => {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (norm) {
    case 'python':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M63.6 5.5c-29.3 0-27.5 12.7-27.5 12.7l.03 13.2h28v3.9H24.3S5.5 33.2 5.5 63.8c0 30.7 16.4 29.6 16.4 29.6h9.8v-13.8s-.5-16.4 16.1-16.4h27.8s15.5.2 15.5-15V20.5S93.8 5.5 63.6 5.5zm-15.3 8.3a4.7 4.7 0 110 9.4 4.7 4.7 0 010-9.4z" fill="url(#python-grad-1)" />
          <path d="M64.4 122.5c29.3 0 27.5-12.7 27.5-12.7l-.03-13.2h-28v-3.9h39.8s18.8 2.1 18.8-28.5c0-30.7-16.4-29.6-16.4-29.6h-9.8v13.8s.5 16.4-16.1 16.4H52.4s-15.5-.2-15.5 15v28.2s-2.7 15 27.5 15zm15.3-8.3a4.7 4.7 0 110-9.4 4.7 4.7 0 010 9.4z" fill="url(#python-grad-2)" />
          <defs>
            <linearGradient id="python-grad-1" x1="16.5" y1="9.5" x2="80" y2="70" gradientUnits="userSpaceOnUse">
              <stop stopColor="#387EB8" />
              <stop offset="1" stopColor="#366994" />
            </linearGradient>
            <linearGradient id="python-grad-2" x1="112" y1="118" x2="48" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFE873" />
              <stop offset="1" stopColor="#FFD43B" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128">
          <path fill="#F7DF1E" d="M0 0h128v128H0z"/>
          <path d="M67.3 100.3c3.6 5.8 8.6 9.8 17.6 9.8 7.4 0 12.2-3.7 12.2-8.8 0-6.1-4.9-8.3-13.1-11.8l-4.5-1.9c-13-5.5-21.7-12.5-21.7-27.2 0-13.5 10.3-23.8 26.3-23.8 11.4 0 19.6 4 25.4 14.1l-11.7 7.5c-3.1-5.5-6.5-7.7-13.7-7.7-5.7 0-9.8 3.5-9.8 8 0 5.5 3.8 7.6 11.2 10.8l4.5 1.9c15.4 6.6 23.8 13.3 23.8 28.5 0 16.3-12.7 25.2-28.9 25.2-16.1 0-26.3-7.7-31.5-17.7l14.4-7.2zm-42.5 1.5c2.7 4.7 5.7 8.6 11.6 8.6 6 0 9.8-2.4 9.8-11.7V40.2h16.2v58.8c0 17.9-10.5 25.9-25.7 25.9-13.8 0-21.8-7.3-26-16.3l14.1-6.8z"/>
        </svg>
      );

    case 'dart':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128">
          <path fill="#01579B" d="M26.2 8.7L11.5 23.5l36.7 36.7 22.1-22.1z"/>
          <path fill="#29B6F6" d="M11.5 23.5l58.9 58.9 14.7-14.7-36.9-36.9z"/>
          <path fill="#0175C2" d="M48.2 60.2l22.1 22.2 46.2-46.2H74.3z"/>
          <path fill="#02569B" d="M85.1 67.7L70.3 82.4l46.2 46.2 11.5-11.5z"/>
          <path fill="#039BE5" d="M70.3 82.4l22.1 22.1 24.1-24.1z"/>
          <path fill="#0288D1" d="M74.3 36.2l42.2 42.3V36.2z"/>
        </svg>
      );

    case 'flutter':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128">
          <path fill="#02569B" d="M78.6 12.8L16.2 75.2l19.5 19.5L117.6 12.8z"/>
          <path fill="#0175C2" d="M78.6 51.8L44.5 85.9l19.5 19.5L103 66.2z"/>
          <path fill="#13B9FD" d="M64 105.4l19.5 19.5h39.1L83.5 85.9z"/>
          <path fill="#35B4F6" d="M83.5 85.9l19.5-19.7 19.6 19.7-19.6 19.5z"/>
        </svg>
      );

    case 'cpp':
    case 'cplusplus':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128">
          <path fill="#00599C" d="M116.7 33.6L68.5 5.8c-2.8-1.6-6.2-1.6-9 0L11.3 33.6c-2.8 1.6-4.5 4.6-4.5 7.8v55.5c0 3.2 1.7 6.2 4.5 7.8l48.2 27.8c2.8 1.6 6.2 1.6 9 0l48.2-27.8c2.8-1.6 4.5-4.6 4.5-7.8V41.4c0-3.2-1.7-6.2-4.5-7.8z"/>
          <path fill="#004482" d="M64 6.8v114.4c1.5 0 3-.4 4.5-1.2l48.2-27.8c2.8-1.6 4.5-4.6 4.5-7.8V41.4c0-3.2-1.7-6.2-4.5-7.8L73 6c-2.8-.7-5.9-.2-9 .8z"/>
          <path fill="#FFF" d="M70.3 75.8c-3.1 5.4-8.8 8.8-15 8.8-9.7 0-17.5-7.8-17.5-17.5s7.8-17.5 17.5-17.5c6.2 0 11.9 3.4 15 8.8l10.8-6.2c-5.4-9.3-15.1-15.2-25.8-15.2-16.6 0-30.1 13.5-30.1 30.1s13.5 30.1 30.1 30.1c10.7 0 20.4-5.9 25.8-15.2l-10.8-6.2z"/>
          <path fill="#FFF" d="M92.7 62.7h-4.3v-4.3h-4.3v4.3h-4.3v4.3h4.3v4.3h4.3V67h4.3zm19.8 0h-4.3v-4.3h-4.3v4.3h-4.3v4.3h4.3v4.3h4.3V67h4.3z"/>
        </svg>
      );

    case 'c':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128">
          <path fill="#00599C" d="M116.7 33.6L68.5 5.8c-2.8-1.6-6.2-1.6-9 0L11.3 33.6c-2.8 1.6-4.5 4.6-4.5 7.8v55.5c0 3.2 1.7 6.2 4.5 7.8l48.2 27.8c2.8 1.6 6.2 1.6 9 0l48.2-27.8c2.8-1.6 4.5-4.6 4.5-7.8V41.4c0-3.2-1.7-6.2-4.5-7.8z"/>
          <path fill="#004482" d="M64 6.8v114.4c1.5 0 3-.4 4.5-1.2l48.2-27.8c2.8-1.6 4.5-4.6 4.5-7.8V41.4c0-3.2-1.7-6.2-4.5-7.8L73 6c-2.8-.7-5.9-.2-9 .8z"/>
          <path fill="#FFF" d="M82.2 78.4c-4.5 7.8-12.8 12.6-21.7 12.6-14.1 0-25.5-11.4-25.5-25.5S46.4 40 60.5 40c8.9 0 17.2 4.8 21.7 12.6l12.7-7.3C88.6 34.3 75.3 27.5 60.5 27.5 39.5 27.5 22.5 44.5 22.5 65.5S39.5 103.5 60.5 103.5c14.8 0 28.1-6.8 34.4-17.8L82.2 78.4z"/>
        </svg>
      );

    case 'java':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128">
          <path fill="#5382A1" d="M47.7 85.3c0 0-7.3 3.9 5.2 5.2 15.3 1.6 23.3 1.3 40.4-1.9 0 0 4.6 2.9-5.2 5.2-18.7 4.3-34.9 3.2-50.6.2-5.4-1-8.5-3.3 1.8-6.7 1.3-.6 3.6-1.3 8.4-2z"/>
          <path fill="#E76F00" d="M44.5 68.6c0 0-8.5 6.2 4.3 7.8 15.6 2 27.8 2.2 49.3-3.2 0 0 3.7 2.6-4.6 4.6-17.6 4.3-34.2 3.8-51.5.3-7.5-1.5-10.7-4.9 2.5-9.5z"/>
          <path fill="#5382A1" d="M72.9 28.1c4.9 5.6 3.8 10.6-2.5 16.7-6.2 6.1-9.6 11.5-3.9 19.8 0 0-11.8-6.1-5.7-16.7 6.3-10.8 12.1-13.8 12.1-19.8z"/>
          <path fill="#E76F00" d="M85.4 41.7c7.5 8.7 2.9 18.7-7.4 27.7-10 8.7-2 15.9-2 15.9s-12.7-7.1-4.7-18.6c7.7-11 14.1-16.8 14.1-25z"/>
          <path fill="#5382A1" d="M37.3 103.7c16.2 1.3 41.7.7 58.7-3.6 0 0-5.1 3.5-17.6 5.5-15.8 2.5-38.7 2.2-54.3-.4-4.8-.8-4.4-2.8 13.2-1.5z"/>
        </svg>
      );

    case 'gemini':
    case 'googlegeminiapi':
    case 'geminiapi':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M64 4C64 37.1 37.1 64 4 64c33.1 0 60 26.9 60 60 0-33.1 26.9-60 60-60-33.1 0-60-26.9-60-60z" fill="url(#gemini-gradient)" />
          <defs>
            <linearGradient id="gemini-gradient" x1="4" y1="4" x2="124" y2="124" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1BA1E3" />
              <stop offset="0.35" stopColor="#5B7FFF" />
              <stop offset="0.7" stopColor="#9C6BFF" />
              <stop offset="1" stopColor="#FF70A6" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'firebase':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128">
          <path fill="#FFA000" d="M22.8 91.1L3.9 55.4c-1.3-2.5-.5-5.7 1.9-7.1 2.2-1.2 5-.6 6.5 1.4l15 20.3L44.8 37c1.4-2.7 4.7-3.7 7.4-2.3 1.4.7 2.4 2 2.7 3.5l10.4 52.9H22.8z"/>
          <path fill="#F57C00" d="M72.2 4.9c1.5-2.7 4.9-3.6 7.6-2.1 1.4.8 2.3 2.1 2.6 3.6l41.7 84.7H65.3l6.9-91.2z"/>
          <path fill="#FFCA28" d="M124.1 91.1L107.6 19.3c-.6-2.9-3.4-4.8-6.3-4.2-1.7.3-3.1 1.4-3.8 2.9L22.8 91.1h101.3z"/>
          <path fill="#FFA000" d="M3.9 91.1l54.8 30.8c3.3 1.9 7.4 1.9 10.7 0l54.8-30.8-60.1 34.6L3.9 91.1z"/>
        </svg>
      );

    case 'nodejs':
    case 'node':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128">
          <path fill="#339933" d="M64 4.5l55.4 32v64L64 123.5l-55.4-32v-64L64 4.5z"/>
          <path fill="#FFF" d="M64 19.4L18.8 45.5v52.2L64 123.8l45.2-26.1V45.5L64 19.4zm31.8 70.8L64 108.6 32.2 90.2V53.4L64 35l31.8 18.4v36.8z"/>
        </svg>
      );

    case 'docker':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128">
          <path fill="#2496ED" d="M124.9 59.8c-2.4-1.7-8-1.5-12.4-.4-1.2-5.4-5.2-9.7-10.4-11.7l-2.4-.9-.8 2.4c-1.3 4.1-.7 8.5 1.6 12.2-2.3 1.2-5.8 2.5-9.8 2.5H3.6C1.6 63.9 0 65.5 0 67.5c0 14.9 6.2 28.9 17.5 39.1 12.8 11.5 29.8 17.9 47.9 17.9 39.6 0 71.9-26.9 77.4-65.7 3.6-1.5 8.1-4.8 9.5-11.4l.6-2.9-8-.4.9-4.3zM49.6 24.3H36.3v13.3h13.3V24.3zm16.5 0H52.8v13.3h13.3V24.3zm16.5 0H69.3v13.3h13.3V24.3zM33 40.8H19.7v13.3H33V40.8zm16.5 0H36.3v13.3h13.3V40.8zm16.5 0H52.8v13.3h13.3V40.8zm16.5 0H69.3v13.3h13.3V40.8zm16.6 0H85.9v13.3h13.3V40.8z"/>
        </svg>
      );

    case 'git':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128">
          <path fill="#F05032" d="M124.7 54.8L73.2 3.3c-4.4-4.4-11.6-4.4-16 0L39.8 20.7l20.4 20.4c4.7-1.6 10.1-.6 13.9 3.2 3.8 3.8 4.8 9.2 3.2 13.9l19.6 19.6c4.7-1.6 10.1-.6 13.9 3.2 5.5 5.5 5.5 14.5 0 20s-14.5 5.5-20 0c-4.2-4.2-5-10.4-2.5-15.3l-18.2-18.2v27.4c2.1 1.7 3.7 4.2 4.3 7 1.8 8.1-3.3 16.1-11.4 17.9-8.1 1.8-16.1-3.3-17.9-11.4-1.3-6 1-11.9 5.6-15.2V58.3c-4.6-3.3-6.9-9.2-5.6-15.2 1.1-4.8 4.4-8.8 8.8-10.5L34.1 15 3.3 45.8c-4.4 4.4-4.4 11.6 0 16l51.5 51.5c4.4 4.4 11.6 4.4 16 0l53.9-53.9c4.4-4.4 4.4-11.6 0-16.1l0 1.5z"/>
        </svg>
      );

    case 'github':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M64 5.1C28.7 5.1 0 33.8 0 69.2c0 28.3 18.4 52.3 43.8 60.8 3.2.6 4.4-1.4 4.4-3.1 0-1.5-.1-6.6-.1-12-17.8 3.9-21.6-7.6-21.6-7.6-2.9-7.4-7.1-9.4-7.1-9.4-5.8-4 .4-3.9.4-3.9 6.4.5 9.8 6.6 9.8 6.6 5.7 9.8 15 7 18.6 5.3.6-4.1 2.2-7 4-8.6-14.2-1.6-29.2-7.1-29.2-31.6 0-7 2.5-12.7 6.6-17.2-.7-1.6-2.9-8.1.6-17 0 0 5.4-1.7 17.6 6.6 5.1-1.4 10.6-2.1 16-2.2 5.4.1 10.9.8 16 2.2 12.2-8.3 17.6-6.6 17.6-6.6 3.5 8.9 1.3 15.4.6 17 4.1 4.5 6.6 10.2 6.6 17.2 0 24.6-15 30-29.3 31.6 2.3 2 4.3 5.9 4.3 11.8 0 8.5-.1 15.4-.1 17.5 0 1.7 1.2 3.7 4.5 3.1C109.6 121.5 128 97.5 128 69.2c0-35.4-28.7-64.1-64-64.1z"/>
        </svg>
      );

    case 'php':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128">
          <ellipse cx="64" cy="64" rx="60" ry="34" fill="#777BB4"/>
          <path fill="#FFF" d="M38.5 76h-8.8l7.5-24.1h15.2c3.5 0 6.2.7 7.9 2.2 1.8 1.5 2.2 3.7 1.3 6.6-.9 2.8-2.6 4.9-5.1 6.3-2.5 1.4-5.8 2.1-9.9 2.1H41l-2.5 6.9zm6.6-18.4l-1.9 6.2h4.5c2 0 3.5-.3 4.4-1 .9-.7 1.5-1.7 1.8-2.9.4-1.1.2-1.9-.4-2.4-.6-.5-1.7-.8-3.3-.8h-7.1zm22.4 18.4l7.5-24.1h8.8l-3.2 10.3h10.4l3.2-10.3h8.8l-7.5 24.1h-8.8l3.4-10.9H76.3l-3.4 10.9h-8.8zm39.1 0h-8.8l7.5-24.1h15.2c3.5 0 6.2.7 7.9 2.2 1.8 1.5 2.2 3.7 1.3 6.6-.9 2.8-2.6 4.9-5.1 6.3-2.5 1.4-5.8 2.1-9.9 2.1h-5.6l-2.5 6.9zm6.6-18.4l-1.9 6.2h4.5c2 0 3.5-.3 4.4-1 .9-.7 1.5-1.7 1.8-2.9.4-1.1.2-1.9-.4-2.4-.6-.5-1.7-.8-3.3-.8h-7.1z"/>
        </svg>
      );

    case 'sql':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128" fill="none">
          <rect x="14" y="20" width="100" height="88" rx="16" fill="#1E293B" stroke="#38BDF8" strokeWidth="6" />
          <path d="M32 44h20v6H38v8h12v6H38v12h-6V44z" fill="#38BDF8" />
          <path d="M58 44h18c5 0 8 3 8 8v16c0 5-3 8-8 8H58V44zm6 6v20h12c2 0 3-1 3-3V53c0-2-1-3-3-3H64z" fill="#38BDF8" />
          <path d="M90 44h6v26h14v6H90V44z" fill="#38BDF8" />
          <circle cx="104" cy="73" r="3" fill="#00FF88" />
        </svg>
      );

    case 'html':
    case 'html5':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 128 128">
          <path fill="#E44D26" d="M19.3 116.7L8.6 0h110.8l-10.7 116.7L63.8 128z"/>
          <path fill="#F16529" d="M64 118.6l37.8-10.5 9-97.7H64z"/>
          <path fill="#EBEBEB" d="M64 52.8H46.4l-1.2-13.8H64V25.2H31.5l3.6 41.4H64zm0 39.4l-.1.1-15.8-4.3-1-11.4H33.4l2 22.4 28.5 7.9.1-.1z"/>
          <path fill="#FFF" d="M63.9 52.8v13.8h16.5l-1.6 17.5-14.9 4v14.3l28.5-7.9 3.9-41.7H63.9zm0-27.6v13.8h32.2l.3-3.6.9-10.2H63.9z"/>
        </svg>
      );

    default:
      return (
        <div className={`flex items-center justify-center rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold ${className}`} style={{ width: size, height: size }}>
          {name.slice(0, 3).toUpperCase()}
        </div>
      );
  }
};
