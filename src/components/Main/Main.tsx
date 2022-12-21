import { useEffect, useState } from "react";
import { PopularArtist } from "./PopularArtist";
import { PopularTrack } from "./PopularTrack";

const apiKey = 'a3600493f930704cc99f0653e363a8bb';
const startHttp = 'http://ws.audioscrobbler.com/2.0/';

interface IMain {
  choosingInfoTrack: (str: string, cover: string) => void;
}


export const Main = (props: IMain) => {
    const {choosingInfoTrack} = props;
    const [str, setStr] = useState<string>('');
    const [requestType, setRequestType] = useState<number>(-1);

    useEffect(() => {
      const controller = new AbortController()
      const { signal } = controller;

      (async () => {
        const a = await fetch(startHttp + str + '&api_key='+ apiKey + '&format=json', 
        { signal })
        .then((result) => {
          console.log('in then');
          
          if(result.ok === false){
            throw new Error('Error: ' +  a.status);
          }

          /**При нажатие на определённый элемент у нас будет меняться тип запроса. 
           * Если мы нажимаем на артиста, то значение requestType = 0,
           * а если мы нажимаем на трек, то значение requestType = 1.
          */
          if(requestType == 0) {
            result.json().then((results) => window.location.href = results.artist.url);
            setRequestType(-1);
          }else if(requestType == 1){
            result.json().then(results => window.location.href = results.results.trackmatches.track[0].url);
            setRequestType(-1);
          }

          return result
        })
        .catch((err) => {
          console.log(err.name);
          return err;
        })

      })()
  
      return () => controller.abort()
    }, [str])

    /**Переход на страницу исполнителя */
    const pageArtist = (str:string) => {
      /**Изменение типа запроса */
      setRequestType(0);
      setStr('?method=artist.getinfo&artist=' + str) 
    }

    /**Переход на страницу тега */
    const pageTag = (str:string) => {
      window.location.href = 'https://www.last.fm/tag/' + str;
    }

    /**Переход на страницу трека */
    const pageTrack = (str:string) => {
      /**Изменение типа запроса */
      setRequestType(1);
      setStr('?method=track.search&track=' + str)
    }

    return(
        <main className="content">
        <div>
          <h1 className="content-top-header">
            Music
          </h1>
          <div className="container-page-content">
            <section className="music-section">
              <h2 className="music-section-heading">Hot right now</h2>
              <PopularArtist pageArtist={pageArtist} pageTag={pageTag}/>
            </section> 
          </div>

          <div className="container-page-content">
            <section className="music-section">
              <h2 className="music-section-heading">Popular tracks</h2>
              <PopularTrack pageArtist={pageArtist} pageTag={pageTag} pageTrack={pageTrack} choosingInfoTrack={choosingInfoTrack}/>
            </section>
          </div>
        </div>
    </main>

    );
}

function useEffectAsync(arg0: () => () => void, arg1: string[]) {
  throw new Error("Function not implemented.");
}
