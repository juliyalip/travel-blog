import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import GaleryList from './components/GaleryList/GaleryList';
import { countries, topCountries } from './content/description';
import PhotoGalery from './components/PhotoGalery/PhotoGalery';
import Greeting from './components/Greeting/Greeting';

function App() {
  return (<>
    <Header />
    <Greeting />

    <Banner />
    <GaleryList items={countries} />
    <PhotoGalery images={topCountries} />
  </>
  );
}

export default App;