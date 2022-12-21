import React, { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

function App() {
   const [infoTrack, setInfoTrack] = useState<string>('');
   const [coverTrack, setCoverTrack] = useState<string>("https://www.last.fm/static/images/defaults/player_default_album.430223706b14.png");

   const choosingInfoTrack = (str: string, cover: string) =>{
      setInfoTrack(str);
      setCoverTrack(cover);
   }

   return (
      <>
      <Header infoTrack={infoTrack} coverTrack={coverTrack} />
      <Main choosingInfoTrack={choosingInfoTrack} />
      <Footer />
      </>
   );
}

export default App;
