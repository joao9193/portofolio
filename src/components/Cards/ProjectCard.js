import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  CardInfo,
  HeaderThree,
  PictureImg,
  Picture,
  Hr,
  ImgContainer,
  Tag,
  TagList,
  TitleContent,
  TypeBadge,
  PlaceholderCover,
  PlaceholderInner,
  PlaceholderInitials,
  LinksRow,
  LinkBadge,
  StackLabel,
} from "./CardStyles";
import { BsPlusCircleFill } from "react-icons/bs";
import {
  FiExternalLink,
  FiGlobe,
  FiSmartphone,
  FiPackage,
} from "react-icons/fi";
import {
  SiAndroid,
  SiApple,
  SiGoogleplay,
  SiAppstore,
  SiGooglechrome,
  SiUnity,
  SiBitcoin,
} from "react-icons/si";
import ProjectModal from "../Modal/ProjectModal";

const variants = {
  pageInitial: { opacity: 0, scale: 0.95 },
  pageAnimate: { opacity: 1, scale: 1 },
  pageExit: { opacity: 0, scale: 0.95 },
};

const TYPE_META = {
  website:    { label: "Web",        icon: <FiGlobe />,      from: "#6C72CB", to: "#CB69C1" },
  mobile:     { label: "Mobile",     icon: <FiSmartphone />, from: "#13ADC7", to: "#6C72CB" },
  blockchain: { label: "Blockchain", icon: <SiBitcoin />,    from: "#F7931A", to: "#945DD6" },
  game:       { label: "Game",       icon: <SiUnity />,      from: "#F46737", to: "#13ADC7" },
  extension:  { label: "Extension",  icon: <SiGooglechrome />, from: "#4285F4", to: "#34A853" },
  javascript: { label: "JavaScript", icon: <FiPackage />,    from: "#F7DF1E", to: "#6C72CB" },
};

const linkIconFor = (label = "", url = "") => {
  const l = label.toLowerCase();
  const u = url.toLowerCase();
  if (l.includes("ios") || l.includes("app store") || u.includes("apps.apple.com")) return <SiAppstore />;
  if (l.includes("android") || l.includes("play") || u.includes("play.google.com")) return <SiGoogleplay />;
  if (l.includes("chrome") || u.includes("chromewebstore")) return <SiGooglechrome />;
  if (l.includes("apk")) return <SiAndroid />;
  if (l.includes("apple")) return <SiApple />;
  return <FiExternalLink />;
};

const initialsFrom = (title = "") =>
  title
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const buildScreenshotUrl = (url) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800&h=500`;

const ProjectCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const openModal = () => setIsOpen(true);
  const toggleModal = () => setIsOpen(!isOpen);

  const {
    title,
    description,
    tags = [],
    image,
    imageWebp,
    images,
    links,
    mainType,
    screenshotOf,
  } = item;

  const meta = TYPE_META[mainType] || TYPE_META.website;
  const resolvedImage = image || (screenshotOf ? buildScreenshotUrl(screenshotOf) : null);
  const hasImage = Boolean(resolvedImage) && !imgFailed;
  const hasGallery = Array.isArray(images) && images.length > 0;

  return (
    <motion.div
      key={title}
      className="project-card"
      layout
      initial="pageInitial"
      animate="pageAnimate"
      variants={variants}
      transition={{ type: "tween" }}
    >
      <ImgContainer>
        <TypeBadge>
          {meta.icon}
          {meta.label}
        </TypeBadge>

        {hasImage ? (
          <Picture>
            {imageWebp && <source srcSet={imageWebp} type="image/webp" />}
            <PictureImg
              src={resolvedImage}
              alt={title}
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
          </Picture>
        ) : (
          <PlaceholderCover from={meta.from} to={meta.to}>
            <PlaceholderInner>
              {meta.icon}
              <PlaceholderInitials>{initialsFrom(title)}</PlaceholderInitials>
            </PlaceholderInner>
          </PlaceholderCover>
        )}

        {hasGallery && (
          <>
            <Button
              type="button"
              aria-label="Open Project Gallery in a modal window"
              onClick={openModal}
            >
              <BsPlusCircleFill />
            </Button>
            <ProjectModal
              isOpen={isOpen}
              toggleModal={toggleModal}
              title={title}
              images={images}
            />
          </>
        )}
      </ImgContainer>

      <TitleContent>
        <HeaderThree title>{title}</HeaderThree>
        <Hr />
      </TitleContent>

      <CardInfo className="card-info">{description}</CardInfo>

      {Array.isArray(links) && links.length > 0 && (
        <LinksRow>
          {links.map((l, i) => (
            <LinkBadge
              key={i}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              title={l.label}
            >
              {linkIconFor(l.label, l.url)}
              {l.label}
            </LinkBadge>
          ))}
        </LinksRow>
      )}

      {tags.length > 0 && (
        <div className="card-footer">
          <StackLabel>Stack</StackLabel>
          <TagList>
            {tags.map((t, i) => (
              <Tag key={i}>{t}</Tag>
            ))}
          </TagList>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
