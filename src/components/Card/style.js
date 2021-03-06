import styled from "styled-components";

export const Title = styled.div`
  text-align: center;
  font-family: Gadget;
  font-weight: bold;
  font-size: 30px;
  margin-top: -100px;
  color: #001529;
  background: #f0f2f5;
  position: relative;
  opacity: 0.2;
  border-radius: 40px;
  &:hover {
    opacity: 1;
  }
`;

export const Picture = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 40px;
`;

export const Img = styled.img`
  width: 300px;
  border-radius: 40px;
  object-fit: cover;
`;

export const Card = styled.div`
  margin: 30px 30px;
  width: 300px;
  height: 400px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: scale(0.9, 0.9);
    box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
      -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
  }
`;

export const Container = styled.div`
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 6rem;
`;
