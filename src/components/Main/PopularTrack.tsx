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

    const artistNameList = ['Jin', 'Taylor Swift', 'BTS', 'LE SSERAFIM', 'SZA', 'Lil Uzi Vert', 'Jin', 'Sam Smith', 'j-hope'];
    const trackNameList = ['The Astronaut', 'Bejeweled', 'Yet to Come', 'ANTIFRAGILE', 'Shirt', 'Just Wanna Rock',
                           'Super Tuna', 'Unholy (feat. Kim Petras)', 'MORE'];
    const tagList = ['rap', 'bts', 'hip-hop',
                     'pop', 'singer-songwriter', 'electronic',
                     'k-pop', 'bts', 'korean',
                     'reggaeton', 'k-pop', '',
                     'myspotigrambot', '', '',
                     'jersey club', 'lil uzi vert', '',
                     'pop', 'folk', 'k-pop',
                     'hyperpop', 'pop', 'electropop',
                     'rock', 'rap', 'hip-hop'];
    const coverTrackList = ['https://lastfm.freetls.fastly.net/i/u/300x300/0fe6ceb1724e7c44f483413b011b391e.jpg',
                            'https://lastfm.freetls.fastly.net/i/u/300x300/ab707b9f7cb3321ccdf5aad2b16c825b.jpg',
                            'https://lastfm.freetls.fastly.net/i/u/300x300/66d3ab40aa56c8cb83c2751dae5bc672.jpg',
                            'https://lastfm.freetls.fastly.net/i/u/300x300/47403415f97336603c88ea4c1062d4b1.jpg',
                            'https://lastfm.freetls.fastly.net/i/u/300x300/7f6eded6cfe999ddc394bbe709defc43.jpg',
                            'https://lastfm.freetls.fastly.net/i/u/300x300/c7f947f888d002fc3d84b38cfa96829c.jpg',
                            'https://lastfm.freetls.fastly.net/i/u/300x300/ad14504eb8a61b62b84d9aaf9eab6de0.jpg',
                            'https://lastfm.freetls.fastly.net/i/u/300x300/b11feab3d5951f275dc5258774a3a0ea.jpg',
                            'https://lastfm.freetls.fastly.net/i/u/300x300/70ff23ed846e3e4a14717863e71ba8dc.jpg'];

    return (
        <ol className="column-tracks">
          {artistNameList.map((el,index) => (
                  <li>
                  <div className="column-tracks-item">
                    <div className="media-item-tracks">
                      <img src={coverTrackList[index]} title={trackNameList[index] + ' - ' + artistNameList[index]} onClick={clickCover}/>
                    </div>
                    <div className="media-item-tracks-info">
                      <h3 className="column-tracks-item-name hover-text" onClick={clickTrack}>{trackNameList[index]}</h3>
                      <p className="column-tracks-item-artist hover-text" onClick={clickNameArtist}>{artistNameList[index]}</p>
                      <ul className="tags-list">
                        <li className="hover-text" onClick={clickTagArtist}>{tagList[3 * index]}</li>
                        <li className="hover-text" onClick={clickTagArtist}>{tagList[3 * index + 1]}</li>
                        <li className="hover-text" onClick={clickTagArtist}>{tagList[3 * index + 2]}</li>
                      </ul>
                    </div>
                  </div>
                </li>
                ))}
      </ol>
    );
}