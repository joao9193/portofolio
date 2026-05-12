import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background-color: ${props => props.theme.colors.bodyBgColor};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6{
    background: linear-gradient(121.57deg, ${props => props.theme.colors.headingFirstGradientColor} 18.77%, ${props => props.theme.colors.accent1} 60.15%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    color: ${props => props.theme.colors.primary1};
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  button{
    display: inline-flex;
    align-items: center;
    font-size: 1.6rem;
    padding: .75rem 1rem;
    background-image: linear-gradient(270deg,${props => props.theme.colors.background2} 0%, ${props => props.theme.colors.accent1} 100%);
    color: #fefefe;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition-duration: 0.3s;
    transition-property: background-image;

    &:hover {
      background-image: linear-gradient(270deg, ${props => props.theme.colors.accent1} 0%, ${props => props.theme.colors.background2} 100%);
    }
  }
  .ReactModal__Overlay{
    background-color: ${props => props.theme.colors.bodyBgColor} !important;
    z-index: 21;
  }
  .ReactModal__Content{
    @media screen and (orientation: portrait) and (max-width: 480px) {
      max-width: 95vw !important;
    }
  }
  .ReactModal__Body--open{
    overflow: hidden;
  }
  .image-gallery {
    width: 100%;
  }

  .image-gallery-icon {
    background-image: none !important;
    color: #fff !important;
    filter: drop-shadow(0 2px 6px rgba(0,0,0,0.45));
    transition: transform 200ms ease, color 200ms ease;
  }
  .image-gallery-icon:hover {
    color: ${(props) => props.theme.colors.accent1} !important;
    transform: scale(1.06);
  }

  .image-gallery-left-nav,
  .image-gallery-right-nav {
    padding: 0 !important;
    width: 44px;
    height: 44px;
    background: rgba(0,0,0,0.45) !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center;
    justify-content: center;
    top: 50%;
    transform: translateY(-50%);
  }
  .image-gallery-left-nav { left: 12px; }
  .image-gallery-right-nav { right: 12px; }
  .image-gallery-left-nav .image-gallery-svg,
  .image-gallery-right-nav .image-gallery-svg {
    width: 22px;
    height: 22px;
  }

  .image-gallery-fullscreen-button,
  .image-gallery-play-button {
    padding: 0 !important;
    bottom: 10px;
    right: 10px;
  }
  .image-gallery-fullscreen-button .image-gallery-svg {
    width: 22px;
    height: 22px;
  }

  .image-gallery-index {
    background: rgba(0,0,0,0.55);
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 1.2rem;
    top: 10px;
    right: 10px;
  }

  .image-gallery-slide-wrapper {
    background: #0e0f15;
    border-radius: 12px;
    overflow: hidden;
  }

  .gallery-slide {
    position: relative;
    width: 100%;
    min-height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .gallery-slide .image-gallery-image {
    transition: opacity 350ms ease;
  }

  .gallery-slide-loader {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 22px;
    background: radial-gradient(circle at 50% 50%, #1a1c26 0%, #0e0f15 70%);
    z-index: 1;
    overflow: hidden;
  }

  .gallery-skeleton {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      110deg,
      transparent 0%,
      rgba(255,255,255,0.03) 40%,
      rgba(255,255,255,0.08) 50%,
      rgba(255,255,255,0.03) 60%,
      transparent 100%
    );
    background-size: 220% 100%;
    animation: gallery-shimmer 1.8s ease-in-out infinite;
    pointer-events: none;
  }

  .gallery-spinner-wrap {
    position: relative;
    width: 64px;
    height: 64px;
    z-index: 2;
  }
  .gallery-spinner-glow {
    position: absolute;
    inset: -16px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      ${(props) => props.theme.colors.accent1}59 0%,
      ${(props) => props.theme.colors.background2}26 45%,
      transparent 70%
    );
    filter: blur(6px);
    animation: gallery-pulse 2s ease-in-out infinite;
  }
  .gallery-spinner {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      transparent 0%,
      ${(props) => props.theme.colors.accent1}33 25%,
      ${(props) => props.theme.colors.accent1} 70%,
      ${(props) => props.theme.colors.background2} 92%,
      transparent 100%
    );
    -webkit-mask: radial-gradient(circle, transparent 58%, #000 60%);
            mask: radial-gradient(circle, transparent 58%, #000 60%);
    animation: gallery-spin 1.1s cubic-bezier(0.65, 0, 0.35, 1) infinite;
  }
  .gallery-spinner-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    transform: translate(-50%, -50%);
    box-shadow:
      0 0 6px rgba(255,255,255,0.6),
      0 0 14px ${(props) => props.theme.colors.accent1};
    animation: gallery-core 2s ease-in-out infinite;
  }

  .gallery-loader-text {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.72);
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    z-index: 2;
  }
  .gallery-loader-dots {
    display: inline-flex;
    align-items: flex-end;
    height: 1em;
    gap: 3px;
    margin-left: 4px;
  }
  .gallery-loader-dots i {
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: currentColor;
    animation: gallery-dot 1.2s ease-in-out infinite;
  }
  .gallery-loader-dots i:nth-child(2) { animation-delay: 0.18s; }
  .gallery-loader-dots i:nth-child(3) { animation-delay: 0.36s; }

  .gallery-slide-error {
    color: rgba(255,255,255,0.6);
    font-size: 1.4rem;
    padding: 40px 16px;
    text-align: center;
  }

  @keyframes gallery-spin {
    to { transform: rotate(360deg); }
  }
  @keyframes gallery-shimmer {
    0%   { background-position: 220% 0; }
    100% { background-position: -220% 0; }
  }
  @keyframes gallery-pulse {
    0%, 100% { transform: scale(0.85); opacity: 0.55; }
    50%      { transform: scale(1.15); opacity: 1; }
  }
  @keyframes gallery-core {
    0%, 100% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.7; }
    50%      { transform: translate(-50%, -50%) scale(1.2);  opacity: 1; }
  }
  @keyframes gallery-dot {
    0%, 80%, 100% { transform: translateY(0);   opacity: 0.4; }
    40%           { transform: translateY(-4px); opacity: 1; }
  }

  .image-gallery-content:not(.fullscreen) .image-gallery-slide .image-gallery-image {
    max-height: calc(80vh - 180px);
    object-fit: contain;
    background: #0e0f15;

    @media ${(props) => props.theme.breakpoints.md} {
      max-height: calc(70vh - 140px);
    }
  }

  .image-gallery-content.fullscreen .image-gallery-slide .image-gallery-image {
    max-height: 100vh;

    @media ${(props) => props.theme.breakpoints.sm} {
      height: 96vh;
    }
  }

  .image-gallery-thumbnails-wrapper {
    margin-top: 14px;
  }
  .image-gallery-thumbnails {
    padding: 0 !important;
  }
  .image-gallery-thumbnail {
    width: 96px;
    border: 2px solid transparent;
    border-radius: 8px;
    overflow: hidden;
    transition: border-color 200ms ease, transform 200ms ease;
  }
  .image-gallery-thumbnail + .image-gallery-thumbnail {
    margin-left: 8px;
  }
  .image-gallery-thumbnail:hover {
    transform: translateY(-2px);
    border-color: rgba(255,255,255,0.25);
  }
  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:focus {
    border-color: ${(props) => props.theme.colors.accent1} !important;
    outline: none;
  }
  .image-gallery-thumbnail .image-gallery-thumbnail-image {
    border-radius: 6px;
    object-fit: cover;
    aspect-ratio: 16 / 10;
  }
  
  .project-card{
    display: grid;
    grid-template-rows: auto auto 1fr auto auto;
    padding-bottom: 2rem;
    height: 100%;
    background-color: ${props => props.theme.colors.bgContrast};
    border-radius: 16px;
    border: 1px solid ${props => props.theme.colors.shadow === 'rgba(0,0,0,0.3)' ? 'rgba(0,0,0,.06)' : 'rgba(255,255,255,.06)'};
    box-shadow: 0 4px 20px -8px ${props => props.theme.colors.shadow};
    overflow: hidden;
    transition: transform 350ms ease, box-shadow 350ms ease, border-color 350ms ease;

    &:hover{
      transform: translateY(-6px);
      box-shadow: 0 18px 38px -16px ${props => props.theme.colors.shadow};
      border-color: ${props => props.theme.colors.accent1};
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      width: 100%;
      display: block;
    }
  }

`;

export default GlobalStyles;