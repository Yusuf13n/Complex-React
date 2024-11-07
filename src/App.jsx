import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Section } from "./components/SectionFourImage/Section";
import { Map } from "./components/Map/Map";
import { Slider2 } from "./components/Slider 2/Slider2";
import { Footer } from "./components/Footer/Footer";
import { Banks } from "./components/Banks/Banks";
import { Otdelka } from "./components/Otdelka/Otdelka";
import { Test } from "./components/Test/Test";
import { Estetika } from "./components/Estetika/Estetika";
import { Filter } from "./components/Filter/Filter";
import { Otdelka2 } from "./components/Otdelka2/Otdelka2";
import { WomanCard } from "./components/FormRecording/WomanCard";
import CarouselImg from "./components/Slider/Slider";


export default function App() {
  return (
    <>
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
    </>
  );
}
