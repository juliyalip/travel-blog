import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Typogrefy from './components/Typografy/Typografy';
import GaleryList from './components/GaleryList/GaleryList';
import { description, countries } from './content/description';

function App() {
  return (<>
    <Header />
    <Typogrefy type='description' content={description} />
    <Banner />
    <GaleryList items={countries} />

  </>
  );
}

export default App;