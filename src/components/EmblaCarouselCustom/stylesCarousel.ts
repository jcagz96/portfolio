import styled from 'styled-components';

export const EmblaContainer = styled.div`
  position: relative;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  background-color: ${(props) => props.theme.colors.body};

  @media (max-width: 1064px){
      padding-left: 16px;
      padding-right: 16px;
  }


  @media (max-width: 390px){
      width: 350px;
      height: 200px;
      padding-left: 0px;
      padding-right: 0px;
  }


  .embla__viewport {
    overflow: hidden;
    width: inherit;

    @media (max-width: 390px){
      width: 350px;
      height: 200px;
    }
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
    height: 100%;
    width: 100%;
  }

  .embla__slide {
    position: relative;
    
  }

  .embla__slide__inner {
    display: flex;
    position: relative;
    overflow: hidden;
    height: 600px;
    width: 1000px;

    @media (max-width: 390px){
      width: 350px;
      height: 200px;
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

`;