import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: url(${(props) => props.background}) repeat;

  @import url('https://fonts.googleapis.com/css?family=Russo+One&display=swap');
  font-family: 'Russo One', sans-serif;

  .contact-container {
    margin: 150px auto 0;
    padding: 0 10px 200px;
    max-width: 1280px;

    .contact-grid {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 100px 200px 30px 200px;
      grid-template-rows: 100px 100px;
      grid-template-areas:
        'icon1 text1 text1 . . img'
        'icon2 text2 text2 . . img';

      @media (max-width: 768px) {
        justify-content: center;
        grid-template-columns: 100px 200px;
        grid-template-rows: 100px 100px 200px;
        grid-template-areas:
          'icon1 text1'
          'icon2 text2'
          'img img'
          'img img';
      }
    }

    .contact-text-1,
    .contact-text-2,
    .contact-icon-1,
    .contact-icon-2 {
      box-shadow: 0px 3px 7px -2px rgba(79, 79, 101, 1);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      /* padding-left: 15px; */
      /* border: 1px solid red; */
      span {
        font-size: 18px;
      }
      i {
        color: #f5f5f5;
        font-size: 42px;
      }
    }
    .contact-text-1,
    .contact-text-2 {
      background-color: #d4d4d4;
    }

    .contact-icon-1,
    .contact-icon-2 {
      background-color: #556bac;
    }

    .contact-icon-1 {
      grid-area: icon1;
    }
    .contact-text-1 {
      grid-area: text1;
    }
    .contact-icon-2 {
      grid-area: icon2;
    }
    .contact-text-2 {
      grid-area: text2;
    }
    .contact-image {
      grid-area: img;
      overflow: hidden;
      transition: transform 300ms ease;
      box-shadow: 0px 3px 7px -2px rgba(79, 79, 101, 1);
      img {
        object-fit: cover;
        transform: scaleX(-1);
        /* object-position: 0px -15px; */
        width: 100%;
        height: 100%;
      }
    }

    .faq-grid {
      margin-top: 150px;
      h2 {
        padding: 0;
        margin: 0;
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
      }
    }
  }
`;
