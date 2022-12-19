import { ChangingLanguage } from "./ChangingLanguage";

export const Footer = () =>{
    return(
        <footer className="footer">
        <div className="footer-top">
          <div className="footer-container">
            <div className="footer-top-row">
  
              <div className="footer-top-col">
                <h2 className="footer-heading">Company</h2>
                <ul className="footer-links">
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/about">About Last.fm</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/about/contact">Contact Us</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/about/jobs">Jobs</a>
                  </li>
                </ul>
              </div> 
  
              <div className="footer-top-col">
                <h2 className="footer-heading">Help</h2>
                <ul className="footer-links">
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/about/trackmymusic">Track My Music</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://support.last.fm/">Community Support</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/help/guidelines">Community Guidelines</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/help/faq">Help</a>
                  </li>
                </ul>
              </div> 
  
              <div className="footer-top-col">
                <h2 className="footer-heading">Goodies</h2>
                <ul className="footer-links">
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/about/trackmymusic">Download Scrobbler</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/api">Developer API</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/music/+free-music-downloads">Free Music Downloads</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://store.last.fm/">Merchandise</a>
                  </li>
                </ul>
              </div> 
  
              <div className="footer-top-col">
                <h2 className="footer-heading">Account</h2>
                <ul className="footer-links">
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/join">Sign Up</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/login">Log In</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://www.last.fm/pro">Subscribe</a>
                  </li>
                </ul>
              </div> 
  
              <div className="footer-top-col">
                <h2 className="footer-heading">Follow Us</h2>
                <ul className="footer-links">
                  <li>
                    <a className="hover-text link" href="https://www.facebook.com/lastfm">Facebook</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://twitter.com/lastfm">Twitter</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://www.instagram.com/last_fm">Instagram</a>
                  </li>
                  <li>
                    <a className="hover-text link" href="https://www.youtube.com/user/lastfm">YouTube</a>
                  </li>
                </ul>
              </div> 
  
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