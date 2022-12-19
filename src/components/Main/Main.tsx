import { getResponses } from "../../api";
import { PopularArtist } from "./PopularArtist";
import { PopularTrack } from "./PopularTrack";


interface IMain {
  choosingInfoTrack: (str: string, cover: string) => void;
}

export const Main = (props: IMain) => {
    const {choosingInfoTrack} = props;


    /**Переход на страницу исполнителя */
    const pageArtist = (str:string) => {
      const data = getResponses('?method=artist.getinfo&artist=' + str);

      data.then(results => window.location.href = results.artist.url);
    }

    /**Переход на страницу тега */
    const pageTag = (str:string) => {
      window.location.href = 'https://www.last.fm/tag/' + str;
    }

    /**Переход на страницу трека */
    const pageTrack = (str:string) => {
      const data = getResponses('?method=track.search&track=' + str);

      data.then(results => window.location.href = results.results.trackmatches.track[0].url);
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