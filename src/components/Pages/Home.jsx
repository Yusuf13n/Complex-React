import { useState } from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Section } from "../SectionFourImage/Section";
import { Map } from "../Map/Map";
import { CarouselImg } from "../Slider/Slider";
import { WomanCard } from "../FormRecording/WomanCard";
import { Slider2 } from "../Slider 2/Slider2";
import { Filter } from "../Filter/Filter";
import { Test } from "../Test/Test";
import { Otdelka } from "../Otdelka/Otdelka";
import { Otdelka2 } from "../Otdelka2/Otdelka2";
import { Banks } from "../Banks/Banks";
import { Footer } from "../Footer/Footer";
import { Estetika } from "../Estetika/Estetika";

export const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Section />
      <Map />
      <CarouselImg />
      <WomanCard />
      <Slider2 />
      <Estetika />
      <Filter />
      <Test />
      <Otdelka />
      <Otdelka2 />
      <Banks />
      <Footer />
    </div>
  );
};
