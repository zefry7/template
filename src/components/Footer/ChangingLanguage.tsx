export const ChangingLanguage = () => {


    /**Выбор языка на странице */
    const onClick = (event: any) => {
        const a = event.target.parentElement.parentElement.getElementsByTagName('strong');
        for(let j = 0; j < a.length; ++j){
            a[j].parentElement.setAttribute('class', 'footer-language');
            a[j].setAttribute('class', 'hover-text');
        }

        event.target.parentElement.setAttribute('class', event.target.parentElement.getAttribute('class') + ' footer-language--active');
        event.target.setAttribute('class', '');
    }

    return (
      <ul className="language-selector">
        <li className="footer-language footer-language--active">
          <strong onClick={onClick}>English</strong>
        </li>

        <li className="footer-language">
          <strong className="hover-text" onClick={onClick}>Deutsch</strong>
        </li>

        <li className="footer-language">
          <strong className="hover-text" onClick={onClick}>Español</strong>
        </li>

        <li className="footer-language">
          <strong className="hover-text" onClick={onClick}>Français</strong>
        </li>

        <li className="footer-language">
          <strong className="hover-text" onClick={onClick}>Italiano</strong>
        </li>

        <li className="footer-language">
          <strong className="hover-text" onClick={onClick}>日本語</strong>
        </li>

        <li className="footer-language">
          <strong className="hover-text" onClick={onClick}>Polski</strong>
        </li>

        <li className="footer-language">
          <strong className="hover-text" onClick={onClick}>Português</strong>
        </li>

        <li className="footer-language">
          <strong className="hover-text" onClick={onClick}>Русский</strong>
        </li>

        <li className="footer-language">
          <strong className="hover-text" onClick={onClick}>Svenska</strong>
        </li>

        <li className="footer-language">
          <strong className="hover-text" onClick={onClick}>Türkçe</strong>
        </li>

        <li className="footer-language">
          <strong className="hover-text" onClick={onClick}>简体中文</strong>
        </li>

      </ul>
    );
}