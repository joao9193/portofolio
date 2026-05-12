import React, { useState, useCallback } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Slide = ({ item }) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const handleLoad = useCallback(() => setLoaded(true), []);
  const handleError = useCallback(() => {
    setLoaded(true);
    setErrored(true);
  }, []);

  return (
    <div className="gallery-slide">
      {!loaded && (
        <div className="gallery-slide-loader" aria-label="Loading image">
          <div className="gallery-skeleton" />
          <div className="gallery-spinner-wrap">
            <div className="gallery-spinner-glow" />
            <div className="gallery-spinner" />
            <div className="gallery-spinner-core" />
          </div>
          <span className="gallery-loader-text">
            Loading
            <span className="gallery-loader-dots">
              <i />
              <i />
              <i />
            </span>
          </span>
        </div>
      )}
      {errored ? (
        <div className="gallery-slide-error">Image failed to load</div>
      ) : (
        <img
          className="image-gallery-image"
          src={item.original}
          alt={item.originalAlt || ''}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          style={{ opacity: loaded ? 1 : 0 }}
        />
      )}
    </div>
  );
};

const renderSlide = (item) => <Slide item={item} />;

export default function Gallery({ media }) {
  return (
    <ImageGallery
      items={media}
      showPlayButton={false}
      showThumbnails={media.length > 1}
      showFullscreenButton
      showIndex
      showBullets={false}
      lazyLoad
      slideDuration={350}
      thumbnailPosition="bottom"
      renderItem={renderSlide}
    />
  );
}
