import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from './components/Appbar';
import ShowNews from './components/ShowNews';
import ReadLater from './components/ReadLater';
import Footer from './components/Footer';
import { NewsProvider } from './context/newsContext';

function App() {
  return (
    <BrowserRouter>
      <NewsProvider>
        <AppHeader />
        <Routes>
          <Route index element={<ShowNews />} />
          <Route path="/read-later" element={<ReadLater />} />
        </Routes>
        <Footer />
      </NewsProvider>
    </BrowserRouter>
  );
}

export default App;
