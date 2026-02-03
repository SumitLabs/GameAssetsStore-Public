import Banner from "../components/Banner";
import Counter from "../components/Counter";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Subscribe from "../components/Subscribe";
import Title from "../components/Title";
import img01 from "../assets/img01.png";
import AssetCarousel from "../components/AssetCarousel";
import "./home.css";
import Review from "../components/Review";

const Home = () => {
  let popular_games = [
    
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
         price: "9",
      isFree:false,
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
         price: "99",
      isFree:false,
      img: img01,
      link: "",
    },
        {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "0",
      isFree:true,
      img: img01,
      link: "",
    },
        {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
          price: "0",
      isFree:true,
      img: img01,
      link: "",
    },
  ];

  let popular_sounds = [
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "0",
      isFree:true,
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      isFree:false,
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
         price: "9",
      isFree:false,
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
         price: "99",
      isFree:false,
      img: img01,
      link: "",
    },
        {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "0",
      isFree:true,
      img: img01,
      link: "",
    },
        {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
          price: "0",
      isFree:true,
      img: img01,
      link: "",
    },
  ];

  let popular_guis = [ 
     {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "0",
      isFree:true,
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "99",
      isFree:false,
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
         price: "9",
      isFree:false,
      img: img01,
      link: "",
    },
    {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
         price: "99",
      isFree:false,
      img: img01,
      link: "",
    },
        {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
      price: "0",
      isFree:true,
      img: img01,
      link: "",
    },
        {
      title: "2D Featured Creator Bundle-",
      dev: "gamedevmarket",
      info: `Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iste sit magnam inventore recusandae
            animi rem?`,
          price: "0",
      isFree:true,
      img: img01,
      link: "",
    },
  ];

  return (
    <>
      <Hero />
      <Service />

      {/* Popular Games */}
      <section className="container popular_game_asset">
        <Title semi_title="Recent Popular Assets" title="Latest Game Assets" />
        <AssetCarousel data={popular_games} />
      </section>

      <Banner />

      {/* Popular Sounds */}
      <section className="container popular_sound_asset">
        <Title semi_title="Recent Popular Assets" title="Latest Sound Assets" />
        <AssetCarousel data={popular_sounds} />
      </section>

      <Counter />

      {/* Popular GUIs */}
      <section className="container popular_gui_asset">
        <Title semi_title="Recent Popular Assets" title="Latest GUI Assets" />
        <AssetCarousel data={popular_guis} />
      </section>

      {/* Testimonials */}
      <div className="container ">
        <Title semi_title="our testimonials" title="Our Testimonials" />
        <div className="my-24 ">
          <Review />
        </div>
      </div>

      <Subscribe />
    </>
  );
};

export default Home;
