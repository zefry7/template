
interface IPopularArtist {
    pageArtist: (str: string) => void;
    pageTag: (str: string) => void;
}

export const PopularArtist = (props: IPopularArtist) => {
    const {pageArtist} = props;
    const {pageTag} = props;

    const artistNameList = ["Jin", "Kanye West", 'Ken Carson', 'Baby Keem', 'Playboi Carti', 'Drake', 'The Weeknd', 
                            'Kendrick Lamar', 'Tyler, the Creator', 'Arctic Monkeys', 'Juice WRLD', 'Bladee'];
    
    const artistAvatarList = ["https://lastfm.freetls.fastly.net/i/u/300x300/f67b3747a6e31aea5a5fae1fdb06d906.jpg",
                              "https://lastfm.freetls.fastly.net/i/u/300x300/8ee856aa702a3e01ddede54af3380bf4.jpg",
                              "https://lastfm.freetls.fastly.net/i/u/300x300/9e594670d75384b1a2b2432a020a3aa7.jpg",
                              "https://lastfm.freetls.fastly.net/i/u/300x300/98c7ac4149d5e18c569800e0821968a9.jpg",
                              'https://lastfm.freetls.fastly.net/i/u/300x300/e99eefc7294dbdb0b5402d3b47004bd5.jpg',
                              'https://lastfm.freetls.fastly.net/i/u/300x300/1d4ccfe034d2f7b880146f5523f3987d.jpg',
                              'https://lastfm.freetls.fastly.net/i/u/300x300/725cbf01f1b2b49bf17b3cb6e956283b.jpg',
                              'https://lastfm.freetls.fastly.net/i/u/300x300/ab7a6339205f9c9ac97069f5ce0cf103.jpg',
                              'https://lastfm.freetls.fastly.net/i/u/300x300/0cbe15b8d7aeff2b90190c0c7bc1f5b2.jpg',
                              'https://lastfm.freetls.fastly.net/i/u/300x300/a9788abf3dd8ebd18e55ec6809c8995c.jpg',
                              'https://lastfm.freetls.fastly.net/i/u/300x300/d6e904e50bb79e7877711efe9463c675.jpg',
                              'https://lastfm.freetls.fastly.net/i/u/300x300/58e50b952de3f500384d3f45d8edb7df.jpg']

    const tagList = ["rap", "bts", "hip-hop",
                     "hip-hop", "rap", "hip-hop",
                     'opium', 'rage', 'trap',
                     'rap', "hip-hop", 'trap',
                     'trap', 'hip-hop', 'cloud rap',
                     'hip-hop', 'rap', 'rnb',
                     'rnb', 'electronic', 'canadian',
                     'rap', 'hip-hop', 'hip-hop',
                     'rap', 'ofwgkta', 'hip-hop',
                     'indie rock', 'indie', 'british',
                     'rap', 'emo rap', 'hip-hop',
                     'trap', 'hip-hop', 'cloud trap']

    const clickNameArtist = (event: any) => {
        pageArtist(event.target.innerHTML)
    }

    const clickAvatarArtist = (event: any) => {
        pageArtist(event.target.getAttribute('title'))
    }

    const clickTagArtist = (event: any) => {
        pageTag(event.target.innerHTML)
    }

    return(
        <ol className="music-more-artists">
                {artistNameList.map((el,index) => (
                  <li className="music-more-artists-item-wrap">
                  <div className="music-more-artists-item">
                    <div className="artist-avatar">
                      <div className="media-item">
                        <span className="avatar">
                          <img src={artistAvatarList[index]} title={el} onClick={clickAvatarArtist}/>
                        </span>
                      </div>
                      <h3 className="music-more-artists-item-name hover-text" onClick={clickNameArtist}>{el}</h3>
                    </div>
                    <ul className="tag">
                      <li className="hover-text" onClick={clickTagArtist}>{tagList[3 * index]}</li>
                      <li className="hover-text" onClick={clickTagArtist}>{tagList[3 * index + 1]}</li>
                      <li className="hover-text" onClick={clickTagArtist}>{tagList[3 * index + 2]}</li>
                    </ul>
                  </div>
                </li>
                ))}
        </ol>
    );
}