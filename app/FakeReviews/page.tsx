"use client";
import { Reviews, Title } from "@/components/Shared";
import { Accessibility, Dribbble, Handshake } from "lucide-react";
import { NextPage } from "next";
import { useState } from "react";

const FakeReviews: NextPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSend = () => {
    setIsModalVisible(true);
    setTimeout(() => setIsModalVisible(false), 1000);
  };

  return (
    <>
      <section
        className="relative h-screen bg-no-repeat bg-cover bg-center z-0 flex justify-center items-center"
        style={{ backgroundImage: "url('/imges/Reviews.webp')" }}
      >
        <div className="flex flex-col items-center z-10">
          <div className="relative flex items-center space-x-2">
            <input
              type="email"
              placeholder="Напишите свой email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Отправить
              <Dribbble className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="flex space-x-4 mt-6 cursor-pointer">
            <Accessibility className="text-gray-600 w-8 h-8" />
            <Dribbble className="text-gray-600 w-8 h-8 animate-bounce" />
            <Handshake className="text-gray-600 w-8 h-8" />
            <Dribbble className="text-gray-600 w-8 h-8 animate-bounce" />
            <Accessibility className="text-gray-600 w-8 h-8 " />
          </div>
        </div>

        {isModalVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center animate-fade-in">
              <h2 className="text-xl font-semibold text-black">
                Сообщение успешно отправлено
              </h2>
            </div>
          </div>
        )}
      </section>
      <div className="h-1 bg-black mt-[40px] w-[1200px] m-auto"></div>
      <div className="flex flex-col items-center justify-center py-[50px]">
        <div className="shadow-lg p-10 rounded-3xl bg-slate-300">
          <Title text={"Отзывы"} size="md" className="text-center" />
          <div className="">
            <Reviews />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-[50px]">
        {/* Заголовок */}
        <Title text={"Посетите нас"} size="md" className="mb-4" />

        {/* Карта */}
        <div className="w-full max-w-[1200px] h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1169091732137!2d-122.08424998432751!3d37.42199997982454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba0300a6fb37%3A0x76e9200bcec5f4d6!2sGoogleplex!5e0!3m2!1sen!2sus!4v1615329235706!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="rounded-lg shadow-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default FakeReviews;
