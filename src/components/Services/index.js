import React from 'react';

// CSS
import { Container } from './ServicesCSS';

// media
import { heroBackground } from '../../media';
import { guide, spontan, general } from '../../media';
// footer
import Footer from '../Footer/Footer';

const Services = () => {
  return (
    <Container background={heroBackground} className="services-page">
      <div className="services-container">
        <h2>What I offer</h2>
        <p className="h2-what-i-offer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea,
          officiis tempora non odit repudiandae sequi eum suscipit ipsa modi est
          omnis expedita odio sapiente, dolorum itaque doloribus inventore
          dignissimos nihil. Beatae reprehenderit rerum, quibusdam, eaque
          commodi soluta explicabo facere voluptas illo laboriosam, eveniet
          alias consectetur ad. Velit earum libero a quaerat amet facilis
          numquam pariatur quae dolorum tempora dolor incidunt quo accusamus
          accusantium voluptatibus placeat, quam aperiam officiis laboriosam
          obcaecati? Non, cupiditate eius voluptates ad exercitationem deleniti
          quo rerum provident? Est porro fugit explicabo, adipisci totam
          placeat, libero quisquam ducimus ipsa minus laboriosam quaerat eaque
          saepe. Aperiam possimus itaque velit nesciunt! Delectus, quos
          accusamus nostrum incidunt ducimus deleniti accusantium libero, maxime
          voluptatum quis itaque inventore hic distinctio voluptatem quibusdam
          ipsam, iure reiciendis. Necessitatibus exercitationem nostrum,
          asperiores, enim deserunt, quia distinctio tempora modi voluptatibus
          quos temporibus soluta. Totam quod minima natus ullam, laborum
          accusantium voluptatem doloremque commodi perspiciatis tenetur,
          distinctio, repellat impedit fugiat. Sint consequuntur aspernatur
          distinctio consequatur debitis tenetur provident ducimus atque nulla
          earum obcaecati incidunt, corporis eum ipsam nam. Laborum numquam
          asperiores optio ex? Minus tempora deserunt magni aspernatur! Iste
          fugiat veritatis architecto ad error, voluptatum nihil praesentium
          aspernatur dolores doloremque eius nesciunt mollitia repellendus,
          voluptatem obcaecati ipsa.
        </p>

        <h2 style={{ marginBottom: '50px' }}>Types of services</h2>
        <div className="service-type-grid">
          <div>
            <img src={guide} alt="asd" />
          </div>
          <div className="service-desc">
            <h3>Guide</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis quod nulla id temporibus quas odit molestiae ratione,
              aliquid commodi sequi, veniam iure atque facilis, inventore sunt
              amet quis in culpa!
            </p>
            <div className="left">
              <button>Read more</button>
            </div>
          </div>
        </div>

        <div className="service-type-grid type-2">
          <div className="service-desc">
            <h3>General</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              id itaque corporis vitae magnam perspiciatis beatae sed asperiores
              illum, eos soluta. Voluptatum iure praesentium odit cum dolorem,
              pariatur iste nisi ipsa vel facilis.
            </p>
            <div className="right">
              <button>Read more</button>
            </div>
          </div>
          <div>
            <img src={general} alt="asd" />
          </div>
        </div>

        <div className="service-type-grid">
          <div>
            <img src={spontan} alt="asd" />
          </div>
          <div className="service-desc">
            <h3>Spontaneous</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              facilis in necessitatibus libero autem unde. Qui minus tempora
              itaque atque aliquam error, facilis modi repellat.
            </p>
            <div className="left">
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Services;
