
import { SearchBar } from './SearchBar';
import { CreateSearchBar } from './CreateSearchBar';
import { useState } from 'react';


interface IHeader {
    infoTrack: string
    coverTrack: string
}

export const Header = (props: IHeader) =>{
    const [actionSearchBar, setActionSearchBar] = useState<boolean>(false);

    const {infoTrack} = props;
    const {coverTrack} = props;
  
    /**Отображение поисковой строки */
    const toggleSearchBar = (act: boolean) => {
        setActionSearchBar(act);
    }
    /**Открытие страницы по запросу из поисковой строки */
    const openPage = (page: string) =>{
        window.location.href = "https://www.last.fm/search?q=" + page;
    }

    return (    
    <header className="header">
      <section className="header-content">
      <div className="player-bar-inner-wrap">
        <CreateSearchBar actionSearchBar={actionSearchBar} toggleSearchBar={toggleSearchBar} openPage={openPage}/>
        <a className="player-bar-artwork">
          <img src={coverTrack} id="player_bar_play_1" height="58" width="58"/>
        </a>
        <div className="source-info"></div>

        <MediaControl />
        
        <div className="player-bar-now-playing">
          <div className="player-bar-now-playing-inner-wrap">
            <p>{infoTrack}</p>
          </div>
        </div>
        <div className="player-bar-progress">
        </div>
      </div>

      <div className="masthead-logo">
        <a href="/"></a>
      </div>
      
        <div className="masthead">
          <div className="masthead-inner-wrap">
            <SearchBar toggleSearchBar={toggleSearchBar}/>

            <Navlist />

         </div> 
        </div> 

      <ul className="site-auth">
        <li className="site-auth-item">
          <a className="site-auth-control hover-text" href="https://www.last.fm/login">Log in</a>
        </li>
      </ul>
      <a className="btn-secondary" href="https://www.last.fm/join">SING UP</a>
      </section>
    </header>
    );
}


const Navlist = () => {
  return(
          <div className="navlist--more">
            <ul className="navlist-items">
              <li>
                <a className="masthead-nav-control hover-text" href="https://www.last.fm/dashboard">Live</a>
              </li>
              <li>
                <a className="masthead-nav-control hover-text" href="https://www.last.fm/music">Music</a>
              </li>
              <li>
                <a className="masthead-nav-control hover-text" href="https://www.last.fm/charts">Charts</a>
              </li>
              <li>
                <a className="masthead-nav-control hover-text" href="https://www.last.fm/events">Events</a>
              </li>
              <li>
                <a className="masthead-nav-control hover-text" href="https://www.last.fm/features">Features</a>
              </li>
            </ul>
          </div>
  )
}


const MediaControl = () => {
  return(
        <div>
          <ul className="media-controls">
            <li>
              <button className="player-bar-btn--previous"></button>
            </li>
            <li>
              <button className="player-bar-btn--play"></button>
            </li>
            <li>
              <button className="player-bar-btn--next"></button>
            </li>
          </ul>
        </div>
  )
}