// Header.styled.js
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: white;
  position: fixed;
  .nav {
    width: 100%;
  }
  
  
  @media(max-width: 1023px) {
    min-height: 80vh;
    .nav-link {
        font-size: 1.8rem;
        margin-left: -500px;
    }
    .nav {
      width: 1200px;
    }
  }
  
  @media (max-width: 767px) {
    min-height: 70vh;
    .nav-link {
      font-size: 1.3rem;
      margin-left: -450px;
    }
    .nav {
      width: 1000px;
    }
  }
`;


