import styled from 'styled-components';

export const MainBackgroundStyled = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("/bg_main.jpg");
    background-size: cover;
    background-position: center;

  @media (max-width: 1023px) {
    .txt{
      font-size: 4rem;
      padding-bottom: 90px;
    }
    .item {
      padding: 150px 0 50px 0;
      width: 750px;
      margin-left: -105px;
    }
  }
  
  
  @media (max-width: 767px) {
    .txt{
      font-size: 2rem;
      padding-bottom: 100px;
    }
    .item {
      padding: 100px 0 35px 0;
      width: 700px;
      margin: 0 0 0 -160px;
      flex-wrap: wrap;
    }
    .letter-input{
      width: 30px;
      height: 30px;
    }
    .game button {
      padding: 5px 10px;
      font-size: 1rem;
    }
  }
`;
