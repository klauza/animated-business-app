import styled from 'styled-components';

export const Wrapper = styled.div`
  /* overflow: hidden; */
  color: #fff;
  /* padding: 50px; */
  /* background: rgba(0, 0, 0, 0.25); */
  width: 100%;

  /* clear: both; */
  position: relative;
  height: 200px;
  padding: 0 0 300px;
  background: url(${(props) => props.background}) repeat-x;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background: url(${(props) => props.backgroundPattern}) repeat;
  }

  p {
    padding: 20px;
    background: rgba(0, 0, 0, 0.72);
    color: #fff;
    margin: auto;
    max-width: 270px;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
