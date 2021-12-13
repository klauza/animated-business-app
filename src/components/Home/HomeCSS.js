import styled from 'styled-components';

export const Container = styled.div`
  .home {
    background: white;
    /* width: 100%; */
  }
  .container-home {
    opacity: 0;
    animation: animatePage 300ms forwards;
    // background: rgba(59, 88, 152, 0.7);
    // background: black;
    position: absolute;
    top: 60px;
    overflow: hidden;
    width: 100%;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.4;
      background: url(${(props) => props.background}) repeat;
    }

    &__hero {
      width: 100%;
      clip-path: polygon(
        0 0,
        100% 0,
        100% 80%,
        70% 80%,
        50% 90%,
        30% 80%,
        0 80%
      );

      &--img {
        width: 100%;
        height: 92vh;
        img {
          filter: saturate(1.35);
          object-fit: cover;
          width: 100%;
          height: 100%;
          object-position: 50% 28%;
        }
      }

      &--para {
        text-align: center;
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        max-width: 600px;
        background: rgba(0, 0, 0, 0.2);
        padding: 20px 15px 0;

        p {
          @import url('https://fonts.googleapis.com/css?family=Marck+Script&display=swap');
          font-family: 'Marck Script', cursive;
          color: white;
          font-size: 1.55rem;
          /* &::after {
            content: '';
            display: block;
            margin: 0 auto;
            position: absolute;
            bottom: -100%;
            left: 50%;
            transform: translateX(-50%);
            height: 2px;
            width: 80px;
            // background: white;
            // border-bottom: 2px dashed white;

            @media (max-width: 1197px) {
              bottom: -40%;
            } */
          /* } */
        }
        @media (max-width: 660px) {
          padding: 0 10px;
          top: 10%;
          max-width: unset;
          width: 100%;
          p::after {
            bottom: -50%;
          }
        }
      }
    }
    @import url('https://fonts.googleapis.com/css?family=Russo+One&display=swap');
    &__intro-text {
      text-align: center;
      margin: -15px auto 25px;
      max-width: 600px;
      span {
        font-family: 'Russo One', sans-serif;
        color: black;
        position: relative;
        font-size: 1.25em;
      }
    }

    &__experience {
      text-align: center;
      margin-top: 200px;

      span {
        font-family: 'Russo One', sans-serif;
        color: black;
        position: relative;
        font-size: 1.25em;
        &::before,
        &::after {
          content: '';
          display: block;
          width: 20px;
          height: 3px;
          // background: black;
          margin: 0 auto;
        }
        &::before {
          position: absolute;
          top: 50%;
          left: -30px;
          transform: translateY(-50%);
        }
        &::after {
          position: absolute;
          top: 50%;
          right: -30px;
          transform: translateY(-50%);
        }
      }
    }

    &__skill-icons {
      width: 80%;
      margin: 50px auto 0;
      padding-bottom: 150px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      // each skill block
      .skill-block-parent {
        transition: all 300ms ease;
        perspective: 500px;
        .icon-container {
          transform: rotateY(-360deg);
          transform-origin: center top;

          opacity: 0;
          //transform: translateY(100px);

          z-index: 2;
          width: 100px;
          height: 100px;
          // overflow: hidden;
          text-align: center;
          margin: 15px 10px;
          background: black;
          border: 1px solid white;
          i {
            color: white;
            font-size: 68px; // ICON SIZE
            line-height: 100px;
          }
          .desc {
            background: rgba(105, 105, 105, 0.87);
            color: #000;
            font-family: 'Russo One', sans-serif;
          }
        }

        &:hover {
          cursor: pointer;
          transform: translateY(-8px);
          transition: transform 300ms ease;
        }
      }

      .shadow {
        transition: all 300ms ease;
        position: relative;
        &::after {
          content: '';
          opacity: 0;
          transition: all 150ms ease;
          animation: shadow 750ms forwards;
          width: 90px;
          height: 3px;
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          filter: blur(3px);
          background: black;
          position: absolute;
        }
      }
      @keyframes shadow {
        0% {
        }
        100% {
          opacity: 0.7;
        }
      }
      .skill-block-parent:nth-child(1) .icon-container {
        i {
          // map
          color: #fff;
        }
      }
      .skill-block-parent:nth-child(2) .icon-container {
        i {
          color: #4dd0e1;
        }
      }
      .skill-block-parent:nth-child(3) .icon-container {
        i {
          color: green;
        }
      }
      .skill-block-parent:nth-child(4) .icon-container {
        i {
          color: hsl(0, 95%, 57%);
        }
      }
      .skill-block-parent:nth-child(5) .icon-container {
        i {
          color: #fff;
        }
      }
      .skill-block-parent:nth-child(6) .icon-container {
        i {
          color: #e44f26;
        }
      }
      .skill-block-parent:nth-child(7) .icon-container {
        i {
          color: yellow;
        }
      }
      .skill-block-parent:nth-child(8) .icon-container {
        i {
          color: grey;
        }
        .desc {
          letter-spacing: -1px;
        }
      }
      .skill-block-parent:nth-child(9) .icon-container {
        i {
          color: #e44f26;
        }
        img {
          object-fit: cover;
          height: 98%;
          margin-top: 4px;
        }
      }
    }

    // skill blocks animation [ icon-container class ]
    @keyframes animation-icon-block {
      0% {
        opacity: 0;
        transform: rotateY(-360deg);
      }

      100% {
        opacity: 1;
        transform: rotateY(0deg);
      }
    }
  }
`;
