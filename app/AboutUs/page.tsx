import { Title } from "@/components/Shared";
import { NextPage } from "next";

const AboutUs: NextPage = () => {
  return (
    <>
      <div className="pt-[80px]">
        <div className="p-[40px] shadow-2xl rounded-3xl w-[1200px] mb-[50px] m-auto">
          <div className="mt-2">
            <Title text={"Наша команда"} />
            <div className="grid grid-cols-3 gap-6 mt-6">
              {["/imges/giga1.jpg", "/imges/giga2.jpg", "/imges/giga3.jpg"].map(
                (src, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={src}
                      alt={`Команда ${index + 1}`}
                      className="w-40 h-40 rounded-full object-cover mx-auto"
                    />
                    <p className="mt-2 font-semibold">Имя сотрудника</p>
                    <p className="text-sm text-gray-500">Должность</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="mt-5">
            <Title text={"О нас"} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              tempora inventore, iure harum repudiandae debitis voluptatibus
              voluptate blanditiis perferendis architecto a nobis sed obcaecati
              molestias, facilis odit aliquam! Officia ipsa doloremque
              consequuntur voluptatibus aliquid eos, incidunt ipsam non, rem
              sequi amet necessitatibus odio corrupti. Maxime ipsa commodi
              quisquam tempore provident?
            </p>
          </div>
          <div className="mt-5">
            <Title text={"Почему так дорого"} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              tempora inventore, iure harum repudiandae debitis voluptatibus
              voluptate blanditiis perferendis architecto a nobis sed obcaecati
              molestias, facilis odit aliquam! Officia ipsa doloremque
              consequuntur voluptatibus aliquid eos, incidunt ipsam non, rem
              sequi amet necessitatibus odio corrupti. Maxime ipsa commodi
              quisquam tempore provident?
            </p>
          </div>
          <div className="mt-5">
            <Title text={"Что именно отличает наш товар от других?"} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              tempora inventore, iure harum repudiandae debitis voluptatibus
              voluptate blanditiis perferendis architecto a nobis sed obcaecati
              molestias, facilis odit aliquam! Officia ipsa doloremque
              consequuntur voluptatibus aliquid eos, incidunt ipsam non, rem
              sequi amet necessitatibus odio corrupti. Maxime ipsa commodi
              quisquam tempore provident?
            </p>
          </div>

          <div className="mt-5">
            <Title text={"Наши ценности"} />
            <ul className="list-disc ml-6 mt-4">
              <li>Клиентоориентированность</li>
              <li>Высокое качество продукции</li>
              <li>Экологичность</li>
              <li>Индивидуальный подход</li>
            </ul>
          </div>

          <div className="mt-5">
            <Title text={"Наша история"} />
            <p className="mt-4">
              Наша компания была основана в 2010 году с целью предоставления
              качественных услуг. За 10 лет мы выросли из маленькой команды в
              крупную компанию с международным охватом.
            </p>
          </div>
          <div className="mt-5">
            <Title text={"Контакты"} />
            <div className="mt-4">
              <p>📍 Адрес: г. Санкт-Петербург, ул. Примерная, д. 1</p>
              <p>📞 Телефон: +7 (123) 456-78-90</p>
              <p>📧 Email: info@example.com</p>
              <div className="mt-2 flex space-x-4">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  VK
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
