import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/THBY_S2_02111_GWBleedingHero_1500x600_PRE_Final_en-US_PVD5224._CB410800060_.jpg'
          alt=''
        />

        <div className='home__row'>
          <Product
            id='6545223'
            title='The Road to React: Your journey to master plain yet pragmatic React.js '
            price={27.65}
            image='https://m.media-amazon.com/images/I/31apmbgpwkL.jpg'
            rating={5}
          />
          <Product
            id='6545244'
            title='Powerbeats Pro Wireless Earphones - Apple H1 Headphone Chip, Class 1 Bluetooth, 9 Hours Of Listening Time, Sweat Resistant Earbuds - Black'
            price={249.95}
            image='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_Manual_1224445_1174420_US_us_goldtiles_1031718_3091859_750x500_2X_en_US.jpg'
            rating={4}
          />
        </div>

        <div className='home__row'>
          <Product
            id='8465485'
            title='Amazon Brand – Rivet Bubble Textured Lightweight Decorative Fringe Throw Blanket, 48" x 60", Black and Cream'
            price={50.52}
            image='https://images-na.ssl-images-amazon.com/images/I/91UtejgKdNL._AC_SX679_.jpg'
            rating={5}
          />

          <Product
            id='3484752'
            title='50 Pcs Disposable Face Mask 3-Ply Breathable & Comfortable Filter Safety Mask, Protective Blue Masks for Indoor and Outdoor'
            price={11.89}
            image='https://images-na.ssl-images-amazon.com/images/I/612WINc5xFL._AC_SX466_PIbundle-50,TopRight,0,0_SH20_.jpg'
            rating={5}
          />
          <Product
            id='8647391'
            title='Bedsure Large Orthopedic Foam Dog Bed for Small, Medium, Large and Extra Large Dogs/Cats Up to 50/75/100lbs - Orthopedic Egg-Crate Foam with Removable Washable Cover - Water-Resistant Pet Mat'
            price={23.79}
            image='https://images-na.ssl-images-amazon.com/images/I/713gp%2BOYxDL._AC_SX679_.jpg'
            rating={5}
          />
        </div>

        <div className='home__row'>
          <Product
            id='9622541'
            title='All-New Insignia NS-24DF310NA21 24-inch Smart HD 720p TV - Fire TV Edition'
            price={99.99}
            image='https://images-na.ssl-images-amazon.com/images/I/612LGuPnbVL._AC_SX425_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
