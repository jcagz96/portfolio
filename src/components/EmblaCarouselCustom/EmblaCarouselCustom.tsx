import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from 'next/image';
import { EmblaContainer } from './stylesCarousel';

interface EmblaCarouselCustomProps {
  images: ImageProps[];
}

interface ImageProps {
  id: string;
  url: string;
}

const EmblaCarouselCustom = ({ images }: EmblaCarouselCustomProps) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<any>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  function myMediaByIndex(index: ImageProps): string {
    //return media[index % media.length];
    const result = images.find(image => image.id === index.id)?.url;

    if (!result) {
      return "";
    }

    return result;
  }

  return (
    <>
      <EmblaContainer>
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {images.map((index: ImageProps) => (
              <div className="embla__slide" key={index.id}>
                <div className="embla__slide__inner">
                  <Image
                    className="embla__slide__img"
                    src={myMediaByIndex(index)}
                    alt="A cool cat."
                    layout="fill"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </EmblaContainer>

      {/*
        <div className={styles.embla__dots}>
        {scrollSnaps.map((_: any, index: any) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
      */}

    </>
  );
};

export default EmblaCarouselCustom;
