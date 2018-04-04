import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackButton = styled(Link)`
  position: absolute;
  left: 20px;
  top: 20px;

  display: flex;
  width: 25px;
  height: 25px;

  background-color: white;
  border-radius: 50%;
`;

export const Goback = styled.img`
  width: 15px;
  height: 15px;
  margin: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  margin-top: 10vh;
`;

export const WrapperCharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 760px;

  margin: auto;

  @media (max-width: 1024px) {
    margin: 20px;
  }
`;

export const CharacterPicture = styled.img`
  width: 33.3%;
  max-height: 400px;
  margin: auto;
`;

export const CharacterTitle = styled.h1`
  color: #b50f16;
`;

export const CharacterDescription = styled.p`
  color: white;
  text-align: center;
`;

export const CategoryList = styled.ul`
  margin: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    padding-left: 0;
  }

  li {
    list-style: none;
    color: white;
  }
`;

export const CategoryListTitle = styled.span`
  display: block;
  margin-bottom: 10px;

  font-weight: 100;
  font-size: 18px;
  color: #b50f16;
  text-transform: uppercase;
`;
