import styled from 'styled-components';

export const ImgContainer = styled.figure`
  margin: 0;
  position: relative;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
`

export const Picture = styled.picture`
  display: block;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
`

export const PictureImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  transition: transform 600ms ease;

  .project-card:hover & {
    transform: scale(1.05);
  }
`

export const PlaceholderCover = styled.div`
  position: relative;
  padding-top: 56.25%;
  background: linear-gradient(135deg, ${({ from }) => from || '#6C72CB'} 0%, ${({ to }) => to || '#CB69C1'} 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 20% 30%, rgba(255,255,255,.15), transparent 35%),
      radial-gradient(circle at 80% 70%, rgba(255,255,255,.1), transparent 40%);
  }
`

export const PlaceholderInner = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  color: #fff;

  svg {
    font-size: 4.4rem;
    opacity: .9;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,.25));
  }
`

export const PlaceholderInitials = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: .95;
`

export const TitleContent = styled.div`
  padding: 0 20px;
  z-index: 20;
  width: 100%;
  font-size: 1.75rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 1px;
  color: ${props => props.theme.colors.primary1};
  background: none;
  padding: 1.5rem 0 .5rem;
  font-size: ${(props) => props.title ? '2.4rem' : '2rem'};
  -webkit-text-fill-color: unset;
  -webkit-background-clip: unset;
  line-height: 1.2;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 20px;
  line-height: 1.55;
  font-size: 1.5rem;
  opacity: .85;
`;

export const ExternalLinks = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
  padding: .75rem 1rem;
  background-image: linear-gradient(270deg,${props => props.theme.colors.background2} 0%, ${props => props.theme.colors.accent1} 100%);
  color: #fefefe;
  transition-duration: 0.3s;
  transition-property: background-image;

  &:hover {
    background-image: linear-gradient(270deg, ${props => props.theme.colors.accent1} 0%, ${props => props.theme.colors.background2} 100%);
  }

  &.link-to{
    margin: auto;
    min-height: 40px;
    max-width: 160px;
    border-radius: 999px;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 20px 0;
`

export const Tag = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.filterBtnBgColor};
  color: ${({ theme }) => theme.colors.primary1};
  border: 1px solid ${({ theme }) => theme.colors.shadow === 'rgba(0,0,0,0.3)' ? 'rgba(0,0,0,.08)' : 'rgba(255,255,255,.1)'};
  opacity: .9;
  text-decoration: none;
  transition: transform 200ms ease, opacity 200ms ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 1;
  }
`

export const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-image: none;
  background-color: transparent;
  transition: background-color 300ms ease-in-out;
  cursor: pointer;

  svg{
    opacity: 0;
    visibility: hidden;
    transform: scale(0.15);
    transition: transform 300ms ease-in-out,
                opacity 300ms ease-in-out,
                visibility 300ms ease-in-out;
    color: #fff;
    font-size: 4rem;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,.4));
  }

  &:hover{
    background-image: none;
    background-color: rgba(0,0,0, .35);

    svg{
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    }
  }
`

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin-right: auto;
  margin-top: .25rem;
  margin-bottom: 1.25rem;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(121.57deg, ${props => props.theme.colors.button} 18.77%, ${props => props.theme.colors.accent1} 60.15%);
`;

export const TypeBadge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: .5px;
  text-transform: uppercase;
  color: #fff;
  background: rgba(23, 24, 31, .7);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, .15);
  border-radius: 999px;

  svg {
    font-size: 1.3rem;
  }
`

export const LinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 20px 0;
`

export const LinkBadge = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.primary1};
  background: ${({ theme }) => theme.colors.filterBtnBgColor};
  border: 1px solid ${({ theme }) => theme.colors.accent1};
  transition: transform 200ms ease, background 200ms ease, color 200ms ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(270deg, ${({ theme }) => theme.colors.background2} 0%, ${({ theme }) => theme.colors.accent1} 100%);
    color: #fff;
  }

  svg {
    font-size: 1.4rem;
  }
`

export const StackLabel = styled.div`
  padding: 18px 20px 0;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  opacity: .55;
`
