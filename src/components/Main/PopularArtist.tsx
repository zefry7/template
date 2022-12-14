
interface IPopularArtist {
    pageArtist: (str: string) => void;
    pageTag: (str: string) => void;
}

export const PopularArtist = (props: IPopularArtist) => {
    const {pageArtist} = props;
    const {pageTag} = props;

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
                <li className="music-more-artists-item-wrap">
                  <div className="music-more-artists-item">
                    <div className="artist-avatar">
                      <div className="media-item">
                        <span className="avatar">
                          <img src="https://lastfm.freetls.fastly.net/i/u/300x300/f67b3747a6e31aea5a5fae1fdb06d906.jpg" title="Jin" onClick={clickAvatarArtist}/>
                        </span>
                      </div>
                      <h3 className="music-more-artists-item-name hover-text" onClick={clickNameArtist}>Jin</h3>
                    </div>
                    <ul className="tag">
                      <li className="hover-text" onClick={clickTagArtist}>rap</li>
                      <li className="hover-text" onClick={clickTagArtist}>bts</li>
                      <li className="hover-text" onClick={clickTagArtist}>hip-hop</li>
                    </ul>
                  </div>
                </li>

                <li className="music-more-artists-item-wrap">
                  <div className="music-more-artists-item">
                    <div className="artist-avatar">
                      <div className="media-item">
                        <span className="avatar">
                          <img src="https://lastfm.freetls.fastly.net/i/u/300x300/8ee856aa702a3e01ddede54af3380bf4.jpg" title="Kanye West" onClick={clickAvatarArtist}/>
                        </span>
                      </div>
                      <h3 className="music-more-artists-item-name hover-text" onClick={clickNameArtist}>Kanye West</h3>
                    </div>
                    <ul className="tag">
                      <li className="hover-text" onClick={clickTagArtist}>hip-hop</li>
                      <li className="hover-text" onClick={clickTagArtist}>rap</li>
                      <li className="hover-text" onClick={clickTagArtist}>hip-hop</li>
                    </ul>
                  </div>
                </li>

                <li className="music-more-artists-item-wrap">
                  <div className="music-more-artists-item">
                    <div className="artist-avatar">
                    <div className="media-item">
                      <span className="avatar">
                        <img src="https://lastfm.freetls.fastly.net/i/u/300x300/9e594670d75384b1a2b2432a020a3aa7.jpg" title="Ken Carson" onClick={clickAvatarArtist}/>
                      </span>
                    </div>
                    <h3 className="music-more-artists-item-name hover-text" onClick={clickNameArtist}>Ken Carson</h3>
                    </div>
                    <ul className="tag">
                      <li className="hover-text" onClick={clickTagArtist}>opium</li>
                      <li className="hover-text" onClick={clickTagArtist}>rage</li>
                      <li className="hover-text" onClick={clickTagArtist}>trap</li>
                    </ul>
                  </div>
                </li>

                <li className="music-more-artists-item-wrap">
                  <div className="music-more-artists-item">
                    <div className="artist-avatar">
                    <div className="media-item">
                      <span className="avatar">
                        <img src="https://lastfm.freetls.fastly.net/i/u/300x300/98c7ac4149d5e18c569800e0821968a9.jpg" title="Baby Keem" onClick={clickAvatarArtist}/>
                      </span>
                    </div>
                    <h3 className="music-more-artists-item-name hover-text" onClick={clickNameArtist}>Baby Keem</h3>
                    </div>
                    <ul className="tag">
                      <li className="hover-text" onClick={clickTagArtist}>rap</li>
                      <li className="hover-text" onClick={clickTagArtist}>hip-hop</li>
                      <li className="hover-text" onClick={clickTagArtist}>trap</li>
                    </ul>
                  </div>
                </li>

                <li className="music-more-artists-item-wrap">
                  <div className="music-more-artists-item">
                    <div className="artist-avatar">
                    <div className="media-item">
                      <span className="avatar">
                        <img src="https://lastfm.freetls.fastly.net/i/u/300x300/e99eefc7294dbdb0b5402d3b47004bd5.jpg" title="Playboi Carti" onClick={clickAvatarArtist}/>
                      </span>
                    </div>
                    <h3 className="music-more-artists-item-name hover-text" onClick={clickNameArtist}>Playboi Carti</h3>
                    </div>
                    <ul className="tag">
                      <li className="hover-text" onClick={clickTagArtist}>trap</li>
                      <li className="hover-text" onClick={clickTagArtist}>hip-hop</li>
                      <li className="hover-text" onClick={clickTagArtist}>cloud rap</li>
                    </ul>
                  </div>
                </li>

                <li className="music-more-artists-item-wrap">
                  <div className="music-more-artists-item">
                    <div className="artist-avatar">
                    <div className="media-item">
                      <span className="avatar">
                        <img src="https://lastfm.freetls.fastly.net/i/u/300x300/1d4ccfe034d2f7b880146f5523f3987d.jpg" title="Drake" onClick={clickAvatarArtist}/>
                      </span>
                    </div>
                    <h3 className="music-more-artists-item-name hover-text" onClick={clickNameArtist}>Drake</h3>
                    </div>
                    <ul className="tag">
                      <li className="hover-text" onClick={clickTagArtist}>hip-hop</li>
                      <li className="hover-text" onClick={clickTagArtist}>rap</li>
                      <li className="hover-text" onClick={clickTagArtist}>rnb</li>
                    </ul>
                  </div>
                </li>

                <li className="music-more-artists-item-wrap">
                  <div className="music-more-artists-item">
                    <div className="artist-avatar">
                    <div className="media-item">
                      <span className="avatar">
                        <img src="https://lastfm.freetls.fastly.net/i/u/300x300/725cbf01f1b2b49bf17b3cb6e956283b.jpg" title="The Weeknd" onClick={clickAvatarArtist}/>
                      </span>
                    </div>
                    <h3 className="music-more-artists-item-name hover-text" onClick={clickNameArtist}>The Weeknd</h3>
                    </div>
                    <ul className="tag">
                      <li className="hover-text" onClick={clickTagArtist}>rnb</li>
                      <li className="hover-text" onClick={clickTagArtist}>electronic</li>
                      <li className="hover-text" onClick={clickTagArtist}>canadian</li>
                    </ul>
                  </div>
                </li>

                <li className="music-more-artists-item-wrap">
                  <div className="music-more-artists-item">
                    <div className="artist-avatar">
                    <div className="media-item">
                      <span className="avatar">
                        <img src="https://lastfm.freetls.fastly.net/i/u/300x300/ab7a6339205f9c9ac97069f5ce0cf103.jpg" title="Kendrick Lamar" onClick={clickAvatarArtist}/>
                      </span>
                    </div>
                    <h3 className="music-more-artists-item-name hover-text" onClick={clickNameArtist}>Kendrick Lamar</h3>
                    </div>
                    <ul className="tag">
                      <li className="hover-text" onClick={clickTagArtist}>rap</li>
                      <li className="hover-text" onClick={clickTagArtist}>hip-hop</li>
                      <li className="hover-text" onClick={clickTagArtist}>hip-hop</li>
                    </ul>
                  </div>
                </li>

                <li className="music-more-artists-item-wrap">
                  <div className="music-more-artists-item">
                    <div className="artist-avatar">
                    <div className="media-item">
                      <span className="avatar">
                        <img src="https://lastfm.freetls.fastly.net/i/u/300x300/0cbe15b8d7aeff2b90190c0c7bc1f5b2.jpg" title="Tyler, the Creator" onClick={clickAvatarArtist}/>
                      </span>
                    </div>
                    <h3 className="music-more-artists-item-name hover-text" onClick={clickNameArtist}>Tyler, the Creator</h3>
                    </div>
                    <ul className="tag">
                      <li className="hover-text" onClick={clickTagArtist}>rap</li>
                      <li className="hover-text" onClick={clickTagArtist}>ofwgkta</li>
                      <li className="hover-text" onClick={clickTagArtist}>hip-hop</li>
                    </ul>
                  </div>
                </li>

                <li className="music-more-artists-item-wrap">
                  <div className="music-more-artists-item">
                    <div className="artist-avatar">
                    <div className="media-item">
                      <span className="avatar">
                        <img src="https://lastfm.freetls.fastly.net/i/u/300x300/a9788abf3dd8ebd18e55ec6809c8995c.jpg" title="Arctic Monkeys" onClick={clickAvatarArtist}/>
                      </span>
                    </div>
                    <h3 className="music-more-artists-item-name hover-text" onClick={clickNameArtist}>Arctic Monkeys</h3>
                    </div>
                    <ul className="tag">
                      <li className="hover-text" onClick={clickTagArtist}>indie rock</li>
                      <li className="hover-text" onClick={clickTagArtist}>indie</li>
                      <li className="hover-text" onClick={clickTagArtist}>british</li>
                    </ul>
                  </div>
                </li>

                <li className="music-more-artists-item-wrap">
                  <div className="music-more-artists-item">
                    <div className="artist-avatar">
                    <div className="media-item">
                      <span className="avatar">
                        <img src="https://lastfm.freetls.fastly.net/i/u/300x300/d6e904e50bb79e7877711efe9463c675.jpg" title="Juice WRLD" onClick={clickAvatarArtist}/>
                      </span>
                    </div>
                    <h3 className="music-more-artists-item-name hover-text" onClick={clickNameArtist}>Juice WRLD</h3>
                    </div>
                    <ul className="tag">
                      <li className="hover-text" onClick={clickTagArtist}>rap</li>
                      <li className="hover-text" onClick={clickTagArtist}>emo rap</li>
                      <li className="hover-text" onClick={clickTagArtist}>hip-hop</li>
                    </ul>
                  </div>
                </li>

                <li className="music-more-artists-item-wrap">
                  <div className="music-more-artists-item">
                    <div className="artist-avatar">
                    <div className="media-item">
                      <span className="avatar">
                        <img src="https://lastfm.freetls.fastly.net/i/u/300x300/58e50b952de3f500384d3f45d8edb7df.jpg" title="Bladee" onClick={clickAvatarArtist}/>
                      </span>
                    </div>
                    <h3 className="music-more-artists-item-name hover-text" onClick={clickNameArtist}>Bladee</h3>
                    </div>
                    <ul className="tag">
                      <li className="hover-text" onClick={clickTagArtist}>trap</li>
                      <li className="hover-text" onClick={clickTagArtist}>hip-hop</li>
                      <li className="hover-text" onClick={clickTagArtist}>cloud trap</li>
                    </ul>
                  </div>
                </li>

        </ol>
    );
}