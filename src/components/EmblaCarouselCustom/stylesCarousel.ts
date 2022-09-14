import styled, { css } from 'styled-components';

export const EmblaContainer = styled.div`
  position: relative;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;



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
    margin-left: -5px;
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
    width: 1000px;
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


`;