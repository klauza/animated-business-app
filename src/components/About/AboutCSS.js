import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Russo+One&display=swap');

  .about-main-container {
    position: absolute;
    top: 60px; // 0 default
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin-bottom: 450px;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      /* opacity: 0.6; */
      background: url(${(props) => props.background}) repeat;
    }
    /* background-color: ${(props) => props.themeBackground}; */
    color: ${(props) => props.themeTextColor};
    .about-contacts div a {
      color: ${(props) => (props.isNight ? '#556bac' : 'default')};
    }

    .about-contacts {
      display: flex;
      flex-direction: row;
      font-weight: 700;
      position: absolute;
      top: 65px;
      left: 50%;
      transform: translateX(-50%);
      @media (max-width: 768px) {
        top: 140px;
      }
      div {
        display: flex;
        flex-direction: row;
      }
      div span {
        margin-left: 10px;
        margin-right: 10px;
      }
      div:nth-child(1) i {
        margin-right: 10px;
      }
      div:nth-child(2) i {
        border-left: 0.5px solid black;
        padding-left: 10px;
      }
      div > * {
        display: inline-block;
      }
    }
  }

  .about {
    min-height: 90vh;
    width: 100%;
    margin: 0 auto;
    padding: 150px 5% 200px;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;

    position: relative;

    &__top {
      font-family: 'Russo One', sans-serif;

      grid-column: 1 / 3;
      grid-row: 1 / 2;
      text-align: left;

      margin: 10px 25px;
      position: relative;
      line-height: 1.3em;

      font-size: 1.75vw;
      @media screen and (min-width: 1335px) {
        font-size: 1.4em;
      }
      @media screen and (min-width: 1930px) {
        font-size: 2em;
      }
    }
    &__separator {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      position: relative;
      align-self: center;
      justify-self: center;
      background: #016cc4;
      width: 50px;
      height: 5px;
      @media (max-width: 60em) {
        display: none;
      }
    }
    &__mid {
      grid-column: 2 / 4;
      grid-row: 2 / 3;
      font-size: 5em;
      font-family: 'Russo One', sans-serif;
      font-weight: 700;
      text-align: center;
      position: relative;
      height: 100px;
      color: white;
      overflow: hidden;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: #556bac;
        border-radius: 3px;
        border: 1px solid #016cc4;
      }

      span#about-text {
        position: absolute;
        left: 50%;
        transform: translateX(-200%); // default -50%
        top: 0;
        z-index: 10;
        line-height: 100px;
        transition: all ease-out 1s;
      }
    }
    // MID 2
    &__mid-right {
      font-family: 'Russo One', sans-serif;
      font-weight: 700;
      grid-column: 5 / 7;
      grid-row: 2 / 3;
      font-size: 5em;
      text-align: center;
      position: relative;
      height: 100px;
      color: white;
      align-self: center;
      justify-self: center;
      width: 40%;
      overflow: hidden;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: #556bac;
        border-radius: 3px;
        border: 1px solid #016cc4;
      }
      span#me-text {
        position: absolute;
        left: 50%;
        transform: translateX(120%); // default -50%
        top: 0;
        z-index: 10;
        line-height: 100px;
        text-indent: -1vw;
        transition: all ease-out 1s;
      }
    }
    // MID 2 END

    &__bottom {
      font-family: 'Russo One', sans-serif;

      grid-column: 1 / 3;
      position: relative;
      margin: 10px 25px;

      font-size: 1.75vw;
      line-height: 1.3em;
      @media screen and (min-width: 1200px) {
        font-size: 1.4em;
      }
      @media screen and (min-width: 1930px) {
        font-size: 2em;
      }
    }

    &__image {
      margin: 0;
      grid-column: 3 / 6;
      grid-row: 1 / 6;
      // width: 100%;
      // height: 100%;
      box-shadow: 0px 3px 7px -2px rgba(79, 79, 101, 1);
      position: relative;
      div {
        width: 100%;
        height: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(80%);
      }
    }
  }
  @media (max-width: 60em) {
    .about {
      width: 100%;
      margin: 0 auto;
      padding: 0 0 175px 0;

      grid-template-columns: 1fr;
      grid-template-rows: auto;
      &__top {
        grid-column: 1;
        grid-row: 2;
        text-align: center;

        margin: 25px 25px 0px;
        font-size: 1.4em;
      }

      &__mid {
        grid-column: 1;
        grid-row: 1;
        font-size: 2.75em;
        letter-spacing: 15px;

        &::after {
          width: 100%;
          border-radius: 0;
          border: 0;
        }
      }

      &__mid-right {
        display: none;
      }

      &__bottom {
        text-align: center;
        grid-column: 1;
        grid-row: auto;
        margin: 50px 25px;
        font-size: 1.35em;

        &::before {
          content: '';
          display: block;
          height: 3px;
          width: 25%;
          background: #556bac;
          margin: 0px auto 50px auto;
        }
      }

      // figure{
      //     grid-column: 1;
      //     grid-row: auto;
      //     width: 90%;
      //     margin: 0 auto;

      // }

      &__image {
        grid-column: 1;
        grid-row: auto;
        width: 90%;
        margin: 0 auto;
        height: 100%;
        object-fit: cover;
        filter: brightness(80%);
      }
    }
  }
`;
