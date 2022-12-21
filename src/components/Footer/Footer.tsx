import { ChangingLanguage } from "./ChangingLanguage";

export const Footer = () =>{
    const nameColList = ["Company", "Help", "Goodies", "Account", "Follow Us"]
    const nameRowList = ["About Last.fm", 'Contact Us', 'Jobs', '',
                         "Track My Music", "Community Support", 'Community Guidelines', 'Help',
                         "Download Scrobbler", "Developer API", "Free Music Downloads", "Merchandise",
                         "Sign Up", "Log In", "Subscribe", "",
                         "Facebook", "Twitter", "Instagram", "YouTube"]
    const linkRowList = ["https://www.last.fm/about", "https://www.last.fm/about/contact", "https://www.last.fm/about/jobs", '',
                         "https://www.last.fm/about/trackmymusic", "https://support.last.fm/", "https://www.last.fm/help/guidelines", "https://www.last.fm/help/faq",
                         "https://www.last.fm/about/trackmymusic", "https://www.last.fm/api", "https://www.last.fm/music/+free-music-downloads", "https://store.last.fm/",
                         "https://www.last.fm/join", "https://www.last.fm/login", "https://www.last.fm/pro", "",
                         "https://www.facebook.com/lastfm", "https://twitter.com/lastfm", "https://www.instagram.com/last_fm", "https://www.youtube.com/user/lastfm"]

    return(
        <footer className="footer">
        <div className="footer-top">
          <div className="footer-container">
            <div className="footer-top-row">
                {nameColList.map((el,index) => (
                  <div className="footer-top-col">
                  <h2 className="footer-heading">{el}</h2>
                  <ul className="footer-links">
                    <li>
                      <a className="hover-text link" href={linkRowList[4 * index]}>{nameRowList[4 * index]}</a>
                    </li>
                    <li>
                      <a className="hover-text link" href={linkRowList[4 * index + 1]}>{nameRowList[4 * index + 1]}</a>
                    </li>
                    <li>
                      <a className="hover-text link" href={linkRowList[4 * index + 2]}>{nameRowList[4 * index + 2]}</a>
                    </li>
                    <li>
                      <a className="hover-text link" href={linkRowList[4 * index + 2]}>{nameRowList[4 * index + 3]}</a>
                    </li>
                  </ul>
                  </div> 
                ))} 
            </div>
          </div>
        </div>
  
        <div className="footer-bottom">
          <div className="footer-container">
            <div className="row">
  
              <div className="col-xs-12 col-sm-9">
                <ul className="language-selector">  
                    <ChangingLanguage />
                </ul>
  
                <p className="footer-timezone">
                  <a className="link" href="https://www.last.fm/settings/website#website">
                  <span className="hover-text">Time zone:
                    <strong>Europe/Moscow</strong>
                  </span>
                  </a>
                </p>
  
  
                <ul className="footer-legal">
                  <li>
                    <a className="hover-text link" href="http://www.cbsinteractive.com/">CBS Interactive</a> 
                  </li>
                  <li>© 2022 Last.fm Ltd. All rights reserved</li>
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/legal/terms">Terms of Use</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/legal/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/legal">Legal Policies</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/legal/cookies">Cookies Policy</a>
                  </li>
                  <li className="hover-text"> Cookie Information</li>
                  <li>
                    <a className="hover-text link" href="https://careers.viacomcbs.com/">Jobs at ViacomCBS</a>
                  </li>
                </ul>
                <p className="footer-legal">
                  <a className="hover-text link" href="http://www.last.fm/">Last.fm Music</a>
                </p>
              </div>
  
              <div className="logo">
                <p>Audioscrobbler</p>
                <img src="https://www.last.fm/static/images/footer_logo@2x.49ca51948b0a.png" width="37" height="20"/>
  
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}