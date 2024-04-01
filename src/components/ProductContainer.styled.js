import styled from 'styled-components';

export const ProductContainerStyled = styled.div`
  font-size: 1.5rem;
  padding-top: 47px;
  padding-bottom: 52px;
  background: #F4C166;
  color: #591F07;
  width: 1100px;
  @media (max-width: 768px) {
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
`;

export const FlexItem = styled.div`
  flex-basis: calc(33.333% - 20px); 
  height: 200px;
`;