import React, { EventHandler, MouseEventHandler } from "react";

interface IPopularTrack {
    pageArtist: (str: string) => void;
    pageTag: (str: string) => void;
    pageTrack: (str: string) => void;
    choosingInfoTrack: (str: string, cover: string) => void;
}

export const PopularTrack = (props: IPopularTrack) => {
    const {pageArtist} = props;
    const {pageTag} = props;
    const {pageTrack} = props;
    const {choosingInfoTrack} = props;

    const clickNameArtist = (event: any) => {
        pageArtist(event.target.innerHTML)
    }

    const clickTagArtist = (event: any) => {
        pageTag(event.target.innerHTML)
    }

    const clickTrack = (event: any) => { 
        pageTrack(event.target.innerHTML)
    }

    const clickCover = (event: any) =>{
        choosingInfoTrack(event.target.getAttribute('title'), event.target.getAttribute('src'));
    }

    return (
        <ol className="column-tracks">
        <li>
          <div className="column-tracks-item">
            <div className="media-item-tracks">
              <img src="https://lastfm.freetls.fastly.net/i/u/300x300/0fe6ceb1724e7c44f483413b011b391e.jpg" title="The Astronaut - Jin" onClick={clickCover}/>
            </div>
            <div className="media-item-tracks-info">
              <h3 className="column-tracks-item-name hover-text" onClick={clickTrack}>The Astronaut</h3>
              <p className="column-tracks-item-artist hover-text" onClick={clickNameArtist}>Jin</p>
              <ul className="tags-list">
                <li className="hover-text" onClick={clickTagArtist}>rap</li>
                <li className="hover-text" onClick={clickTagArtist}>bts</li>
                <li className="hover-text" onClick={clickTagArtist}>hip-hop</li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div className="column-tracks-item">
            <div className="media-item-tracks">
              <img src="https://lastfm.freetls.fastly.net/i/u/300x300/ab707b9f7cb3321ccdf5aad2b16c825b.jpg" title="Bejeweled - Taylor Swift" onClick={clickCover}/>
            </div>
            <div className="media-item-tracks-info">
              <h3 className="column-tracks-item-name hover-text" onClick={clickTrack}>Bejeweled</h3>
              <p className="column-tracks-item-artist hover-text" onClick={clickNameArtist}>Taylor Swift</p>
              <ul className="tags-list">
                <li className="hover-text" onClick={clickTagArtist}>pop</li>
                <li className="hover-text" onClick={clickTagArtist}>singer-songwriter</li>
                <li className="hover-text" onClick={clickTagArtist}>electronic</li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div className="column-tracks-item">
            <div className="media-item-tracks">
              <img src="https://lastfm.freetls.fastly.net/i/u/300x300/66d3ab40aa56c8cb83c2751dae5bc672.jpg" title="Yet to Come - BTS" onClick={clickCover}/>
            </div>
            <div className="media-item-tracks-info">
              <h3 className="column-tracks-item-name hover-text" onClick={clickTrack}>Yet to Come</h3>
              <p className="column-tracks-item-artist hover-text" onClick={clickNameArtist}>BTS</p>
              <ul className="tags-list">
                <li className="hover-text" onClick={clickTagArtist}>k-pop</li>
                <li className="hover-text" onClick={clickTagArtist}>bts</li>
                <li className="hover-text" onClick={clickTagArtist}>korean</li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div className="column-tracks-item">
            <div className="media-item-tracks">
              <img src="https://lastfm.freetls.fastly.net/i/u/300x300/47403415f97336603c88ea4c1062d4b1.jpg" title="ANTIFRAGILE - LE SSERAFIM" onClick={clickCover}/>
            </div>
            <div className="media-item-tracks-info">
              <h3 className="column-tracks-item-name hover-text" onClick={clickTrack}>ANTIFRAGILE</h3>
              <p className="column-tracks-item-artist hover-text" onClick={clickNameArtist}>LE SSERAFIM</p>
              <ul className="tags-list">
                <li className="hover-text" onClick={clickTagArtist}>reggaeton</li>
                <li className="hover-text" onClick={clickTagArtist}>k-pop</li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div className="column-tracks-item">
            <div className="media-item-tracks">
              <img src="https://lastfm.freetls.fastly.net/i/u/300x300/7f6eded6cfe999ddc394bbe709defc43.jpg" title="Shirt - SZA" onClick={clickCover}/>
            </div>
            <div className="media-item-tracks-info">
              <h3 className="column-tracks-item-name hover-text" onClick={clickTrack}>Shirt</h3>
              <p className="column-tracks-item-artist hover-text" onClick={clickNameArtist}>SZA</p>
              <ul className="tags-list">
                <li className="hover-text" onClick={clickTagArtist}>myspotigrambot</li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div className="column-tracks-item">
            <div className="media-item-tracks">
              <img src="https://lastfm.freetls.fastly.net/i/u/300x300/c7f947f888d002fc3d84b38cfa96829c.jpg" title="Just Wanna Rock - Lil Uzi Vert" onClick={clickCover}/>
            </div>
            <div className="media-item-tracks-info">
              <h3 className="column-tracks-item-name hover-text" onClick={clickTrack}>Just Wanna Rock</h3>
              <p className="column-tracks-item-artist hover-text" onClick={clickNameArtist}>Lil Uzi Vert</p>
              <ul className="tags-list">
                <li className="hover-text" onClick={clickTagArtist}>jersey club</li>
                <li className="hover-text" onClick={clickTagArtist}>lil uzi vert</li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div className="column-tracks-item">
            <div className="media-item-tracks">
              <img src="https://lastfm.freetls.fastly.net/i/u/300x300/ad14504eb8a61b62b84d9aaf9eab6de0.jpg" title="Super Tuna - Jin" onClick={clickCover}/>
            </div>
            <div className="media-item-tracks-info">
              <h3 className="column-tracks-item-name hover-text" onClick={clickTrack}>Super Tuna</h3>
              <p className="column-tracks-item-artist hover-text" onClick={clickNameArtist}>Jin</p>
              <ul className="tags-list">
                <li className="hover-text" onClick={clickTagArtist}>pop</li>
                <li className="hover-text" onClick={clickTagArtist}>folk</li>
                <li className="hover-text" onClick={clickTagArtist}>k-pop</li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div className="column-tracks-item">
            <div className="media-item-tracks">
              <img src="https://lastfm.freetls.fastly.net/i/u/300x300/b11feab3d5951f275dc5258774a3a0ea.jpg" title="Unholy (feat. Kim Petras) - Sam Smith" onClick={clickCover}/>
            </div>
            <div className="media-item-tracks-info">
              <h3 className="column-tracks-item-name hover-text" onClick={clickTrack}>Unholy (feat. Kim Petras)</h3>
              <p className="column-tracks-item-artist hover-text" onClick={clickNameArtist}>Sam Smith</p>
              <ul className="tags-list">
                <li className="hover-text" onClick={clickTagArtist}>hyperpop</li>
                <li className="hover-text" onClick={clickTagArtist}>pop</li>
                <li className="hover-text" onClick={clickTagArtist}>electropop</li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <div className="column-tracks-item">
            <div className="media-item-tracks">
              <img src="https://lastfm.freetls.fastly.net/i/u/300x300/70ff23ed846e3e4a14717863e71ba8dc.jpg" title="MORE - j-hope" onClick={clickCover}/>
            </div>
            <div className="media-item-tracks-info">
              <h3 className="column-tracks-item-name hover-text" onClick={clickTrack}>MORE</h3>
              <p className="column-tracks-item-artist hover-text" onClick={clickNameArtist}>j-hope</p>
              <ul className="tags-list">
                <li className="hover-text" onClick={clickTagArtist}>rock</li>
                <li className="hover-text" onClick={clickTagArtist}>rap</li>
                <li className="hover-text" onClick={clickTagArtist}>hip-hop</li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
    );
}