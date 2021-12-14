import React from 'react';

// CSS
import { Container } from './ContactCSS';

// media
import { heroBackground, contactimg } from '../../media';
// import { guide, spontan, general } from '../../media';

// footer
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <Container background={heroBackground} className="contact-page">
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-icon-1">
            <i class="fas fa-mobile-alt"></i>
          </div>
          <div className="contact-text-1">0749000914</div>
          <div className="contact-icon-2">
            <i class="far fa-envelope"></i>
          </div>
          <div className="contact-text-2">the.lincoln@gmail.com</div>

          <div className="contact-image">
            <img src={contactimg} />
          </div>
        </div>

        <div className="faq-grid">
          <h2>FAQ</h2>
          <h5>Question 1</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            repellat sapiente omnis consequuntur aliquid ex unde, magnam
            eligendi optio sequi mollitia dolorum! Praesentium, id nam impedit
            odio amet officia distinctio tempora eligendi repudiandae,
            exercitationem porro.
          </p>
          <h5>Question 2</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sunt
            quis repellat odit, voluptatem ducimus nostrum iste impedit
            dignissimos ex animi maxime alias voluptate mollitia suscipit
            accusantium, vero quidem rem. Iure debitis saepe, sapiente ducimus
            aspernatur qui dicta id eos et!
          </p>
          <h5>Question 3</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab itaque
            eos sit debitis? Culpa eveniet doloremque quod harum optio natus
            ipsa et laudantium consequuntur maxime.
          </p>
          <h5>Question 4</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
            tempore expedita ex nisi doloremque facere.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab itaque
            eos sit debitis? Culpa eveniet doloremque quod harum optio natus
            ipsa et laudantium consequuntur maxime.
          </p>
          <h5>Question 5</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            fugit vero culpa neque quas aut tenetur, maxime iusto beatae, esse,
            ad temporibus magni nisi similique incidunt alias reiciendis
            perferendis recusandae. Nihil, magni! Libero ipsum atque iusto ipsa
            fuga suscipit commodi!
          </p>
          <h5>Question 6</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            enim quas beatae nisi quo ducimus iure doloribus nihil alias illo
            dignissimos ab, voluptatum debitis eligendi eveniet vero placeat?
            Praesentium!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab itaque
            eos sit debitis? Culpa eveniet doloremque quod harum optio natus
            ipsa et laudantium consequuntur maxime.
          </p>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Contact;
