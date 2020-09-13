import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR048qL6CIzYNfM2mXws2VdrS4lNPVkugsqvx6J7YjnOnx6naEQ2BAd7HoI"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12131415"
            title="Acer Nitro 5 Gaming Laptop,9th Gen Intel Core i7-9750H, 
            NVIDIA GeForce RTX 2060,15.6 Full HD IPS 144Hz Display,
            16GB DDR4, 256GB NVMe SSD, Wi-Fi 6, Waves MaxxAudio, 
            Backlit Keyboard, AN515-54-728C"
            price={1018.05}
            image="https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="23232425"
            title="Acer Predator Helios 300 Gaming Laptop, 
            Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 
            15.6 Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel 
            DDR4, 512GB NVMe SSD, Wi-Fi 6, RGB Keyboard, PH315-53-72XD"
            price={1197.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="12345678"
            title="BlueFinger Gaming Keyboard Mouse Headset Combo,
            USB Wired Crack Backlit Keyboard,114 Keys Letters 
            Glow LED Keyboard,Red LED Light Headset for 
            Laptop PC Computer Work and Game"
            price={43.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71C5wIr22rL._AC_SL1001_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="32333435"
            title="iBUYPOWER Gaming PC Computer Desktop Element 
            9260 (Intel Core i7-9700F 3.0Ghz, NVIDIA GeForce GTX 
            1660 Ti 6GB, 16GB DDR4, 240GB SSD, 1TB HDD, 
            Wi-Fi & Windows 10 Home) Black"
            price={999.99}
            image="https://images-na.ssl-images-amazon.com/images/I/819XYUimTuL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="42434445"
            title="[Ryzen & GTX 1050 Ti Edition] SkyTech Shadow Gaming Computer
             Desktop PC Ryzen 1200 3.1GHz Quad-Core, GTX 1050 Ti 4GB, 
             8GB DDR4 2400, 1TB HDD, 24X DVD, Wi-Fi USB, Windows 10 Home 64-bit"
            price={624.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61BTO%2BfRmbL._AC_SL1260_.jpg"
            rating={5}
          />
          <Product
            id="52535455"
            title="Razer Tartarus v2 Gaming Keypad: Mecha-Membrane Key 
            Switches - 32 Programmable Keys - Customizable Chroma 
            RGB Lighting - Programmable Macros - Classic Black"
            price={71.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71r3ktfakgL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="72737475"
            title="Razer Mamba Wireless Gaming Mouse: 16,000 DPI 
            Optical Sensor - Chroma RGB Lighting - 7 Programmable 
            Buttons - Mechanical Switches - Up to 50 Hr Battery Life"
            price={57.93}
            image="https://images-na.ssl-images-amazon.com/images/I/71I6p3xRAZL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="62636465"
            title="Sceptre 30-inch Curved Gaming Monitor 21:9 
            2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort 
            up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
            price={278.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="82838485"
            title="Sceptre 24-Inch Curved 144Hz Gaming LED Monitor 
            Edge-Less AMD FreeSync DisplayPort HDMI, 
            Machine Black (C248B-144RN)"
            price={154.97}
            image="https://images-na.ssl-images-amazon.com/images/I/81VG9l7IC0L._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
