import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CharacterInfo = styled.div`
  position: absolute;
  bottom: 20px;
  width: 90%;
  height: 50px;

  padding-left: 20px;

  background-color: #b50f16bf;

  transition: all 0.4s ease-out;
  overflow: hidden;

  h1 {
    font-size: 18px;
    line-height: 1.5;
    text-align: left;
    color: white;

    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`;

export const CharacterCard = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;

  width: 25%;
  height: 250px;
  margin: 5px;

  background-image: url(${props => props.picture});
  background-position: center;
  background-size: cover;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 20px;
  }

  &:hover ${CharacterInfo}, &:focus ${CharacterInfo} {
    height: 100px;
    background-color: #ffffffd9;

    h1 {
      color: #b50f16;
    }
  }
`;

export const CharacterDetail = styled.div`
  margin-top: 25px;
`;

export const CharacterDetailLink = styled.button`
  margin-right: 10px;
  padding: 0 10px;

  background-color: #b50f16;
  border: none;

  color: white;
  text-decoration: none;
  line-height: 0;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #f0141e;
  }

  p::first-letter {
    text-transform: uppercase;
  }
`;
