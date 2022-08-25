import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`

  margin: 110px auto 0;
  display: flex;
  flex-direction: row;

  height: 600px;
  padding: 10px;
  width: 100%;

  border-radius: 6px;

  @media (max-width: 768px){
    flex-direction: column;

    > div{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const Info = styled.div`
  margin-right: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-width: 2px;
  border-radius: 6px;

`;

export const CustomForm = styled(Form)`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;

  >div{
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;

    .divider{
      margin:5px;
    }


    @media (max-width: 768px){
      flex-direction: column;
    }
  }
  
  width: 70%;

  @media (max-width: 768px){
    align-self: center;
    margin-top: 20px;
    width: 100%;
    margin: 0;
    
  }

  .btn-submit{
    margin-top: 2px;
  }
`;