import styled, { css } from 'styled-components';

export const EmblaContainer = styled.div`
  display: flex;
  position: relative;
  padding: 20px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: auto;

  .embla__viewport {
    overflow: hidden;
    width: 100%;
  }

  .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  }

  .embla__container {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-left: -10px;
    height: 100%;
    width: 100%;
  }

  .embla__slide {
    position: relative;
    padding-left: 10px; 
  }

  .embla__slide__inner {
    display: flex;
    position: relative;
    overflow: hidden;
    height: 600px;
    width: 958px;

    img{
      border-radius: 0;
    }
  }

.embla__slide__img {
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  width: auto;
  min-height: 100%;
  min-width: 100%;
  max-width: none;
}

.embla__button {
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  fill: #1bcacd;
  padding: 0;
}

.embla__button:disabled {
  cursor: default;
  opacity: 0.3;
}

.embla__button__svg {
  width: 100%;
  height: 100%;
}

.embla__button__prev {
  left: 27px;
}

.embla__button__next {
  right: 27px;
}

.embla__dots {
  display: flex;
  list-style: none;
  justify-content: center;
  padding-top: 10px;
}

.embla__dot {
  background-color: transparent;
  cursor: pointer;
  position: relative;
  padding: 0;
  outline: 0;
  border: 0;
  width: 30px;
  height: 30px;
  margin-right: 7.5px;
  margin-left: 7.5px;
  display: flex;
  align-items: center;
}

.embla__dot:after {
  background-color: #efefef;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  content: "";
}

.embla__dot.is-selected:after {
  background-color: #1bcacd;
  opacity: 1;
}
`;