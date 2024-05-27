import Flickity from "react-flickity-component";
import "./flickity_css.css";
import espresso from "../../imges/espresso.jpg";
import kapuchino from "../../imges/kapuchino.jpg";
import latte from "../../imges/latte.jpg";
import amerikano from "../../imges/americano.jpg";
import raf from "../../imges/raf.jpg";

const flickityOptions = {
  initialIndex: 2,
};

const coffeeSlider = {
  id: [1, 2, 3, 4, 5],
  title: ["Эспрессо", "Капучино", "Латте", "Американо", "Раф"],
  images: [espresso, kapuchino, latte, amerikano, raf],
};

export default function ScrollElem() {
  return (
    <section className="scrollElemBlock">
      <div className="_conteiner">
        <h1>Кофейный Магазин</h1>
        <h3>Наслаждайтесь Своим Кофе Весь День</h3>
        <a className="btnShop">Купить</a>
        <Flickity
          className="slider"
          elementType="div"
          disableImagesLoaded={false}
          options={flickityOptions}
          reloadOnUpdate
          static
        >
          {coffeeSlider["id"].map((index) => {
            return (
              <div key={index} className="elemCoffe">
                <>
                  <h2>{coffeeSlider["title"][index - 1]}</h2>
                  <div
                    style={{
                      backgroundImage: `url(${
                        coffeeSlider["images"][index - 1]
                      })`,
                      width: "100%",
                      height: 500,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </>
              </div>
            );
          })}
        </Flickity>
      </div>
    </section>
  );
}