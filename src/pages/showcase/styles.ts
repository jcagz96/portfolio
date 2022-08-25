import styled from 'styled-components';
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  
  grid-auto-rows: minmax(100px, auto);

  @media (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
    padding: 60px;
  }
`;

export const Project = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  background: gray;
  border-radius:20px;
  cursor: pointer;
  

  > div:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    position: relative;
    height: 500px;
    background: blue;
    overflow:hidden;

    img{
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

      -webkit-transform: scale(1);
	    transform: scale(1);
	    -webkit-transition: .3s ease-in-out;
	    transition: .3s ease-in-out;

      &:hover {
	      -webkit-transform: scale(1.3);
	      transform: scale(1.3);
    }

  }
    & + div{ 
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

}
`;
