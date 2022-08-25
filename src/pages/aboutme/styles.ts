import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex:1;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px){
    flex-direction: column-reverse;
  }
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding-left: min(50px, 5%);
  padding-right: min(50px, 5%);

  >div{
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;

  }

  p{
    text-align: justify;
    text-justify: inter-word;
  }

  svg{
    margin-bottom: 1px;
    margin-right:4px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;


