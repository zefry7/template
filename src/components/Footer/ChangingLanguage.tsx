import { useEffect, useState } from "react";

export const ChangingLanguage = () => {
    const [lang, setLang] = useState<number>(0);

    const listLanguage = ["English", "Deutsch", "Español", "Français", "Italiano", "日本語", "Polski", "Português", "Русский", "Svenska", "Türkçe", "简体中文"]
    
    /**Выбор языка на странице */
    const onClick: React.MouseEventHandler<HTMLElement> = (event) => {
      setLang(Number(event.currentTarget.title));
    }

    const changingStyle = (index: number) => {
      if(lang == index){
        return 'footer-language footer-language--active';
      }
      return 'footer-language hover-text';
    }

    return ( 
      <>
        {listLanguage.map((l, index) => (
          <li className={changingStyle(index)} title={index.toString()} onClick={onClick}>
            <strong>{l}</strong>
          </li>          
        ))}
      </>
    );
}

