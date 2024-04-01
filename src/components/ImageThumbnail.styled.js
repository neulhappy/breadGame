// ImageThumbnailStyled.js
import styled from 'styled-components';

export const ImageThumbnailStyled = styled.img`
    width: 350px;
    height: 300px;
  
  @media (max-width: 1023px) {
    width: 300px;
    height: 250px;
  }
  
  @media (max-width: 767px) {
    width: 200px;
    height: 150px;
  }
`;
