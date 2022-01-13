import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;

  /* opacity: 0; */

  background: url(${(props) => props.background}) repeat;
  /* filter: brightness(0.5); */

  /* height: 1000px; */
  @import url('https://fonts.googleapis.com/css?family=Russo+One&display=swap');
  font-family: 'Russo One', sans-serif;

  .services-container {
    max-width: 1280px;
    margin: 150px auto 0;
    padding: 0 10px 200px;
    /* border: 1px solid red; */

    .h2-what-i-offer {
      margin-top: 10px;
      margin-bottom: 150px;
      font-size: 1.1em;
    }

    h2 {
      padding: 0;
      margin: 0;
      /* position: relative; */
      z-index: 1;
      display: inline-block;
      position: relative;
      &::after {
        content: '';
        width: 100%;
        height: 21px;
        /* transform: rotate(45deg); */
        position: absolute;
        background-color: #556bac;
        bottom: 4px;
        left: 0px;
        z-index: -1;
      }

      @media (max-width: 570px) {
        font-size: 10vw;
      }
    }

    @media (max-width: 570px) {
      margin: 2em auto 0;
    }
  }

  .service-type-grid {
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;

    .service-image {
      &:hover {
        img {
          transition: all 500ms ease;
          transform: rotate(10deg) scale(1.5);
        }
      }
    }

    div {
      max-height: 400px;
      overflow: hidden;
      img {
        transition: all 500ms ease;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    .service-desc {
      padding-left: 10px;
      h3 {
        padding: 0;
        margin: 0;
      }
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        padding: 50px 0;
        @media (max-width: 768px) {
          padding: 10px 0;
        }
      }
      .left {
        float: left;
      }
      button {
        /* width: 100px; */
        padding: 10px 5px;
        border: none;
        display: inline-block;
        padding: 0.75rem 1.25rem;
        border-radius: 10rem;
        color: #fff;
        text-transform: uppercase;
        font-size: 1rem;
        letter-spacing: 0.15rem;
        transition: all 0.3s;
        position: relative;
        overflow: hidden;
        z-index: 1;
        background-color: #556bac;
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.35);
        &:hover {
          background: #2980b9;
        }
        &:active {
          background: #2980b9;
          top: 2px;
        }
      }
    }
  }

  .type-2 {
    text-align: right;
    .service-desc {
      padding-left: 0px;
      padding-right: 10px;
      .right {
        float: right;
        width: 100%;
      }
      button {
      }
    }
  }
`;
