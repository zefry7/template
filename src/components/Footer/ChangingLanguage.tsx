import { useEffect, useState } from "react";

export const ChangingLanguage = () => {
    const listLanguage = ["English", "Deutsch", "Español", "Français", "Italiano", "日本語", "Polski", "Português", "Русский", "Svenska", "Türkçe", "简体中文"]
    const defaultStyle: (string)[] = [ 'footer-language hover-text',
                              'footer-language hover-text',
                              'footer-language hover-text',
                              'footer-language hover-text',
                              'footer-language hover-text',
                              'footer-language hover-text',
                              'footer-language hover-text',
                              'footer-language hover-text',
                              'footer-language hover-text',
                              'footer-language hover-text',
                              'footer-language hover-text',
                              'footer-language hover-text',
                              'footer-language hover-text',
                              'footer-language hover-text'];

    const [arr, setValue] = useState([
    'footer-language hover-text footer-language--active',
    'footer-language hover-text',
    'footer-language hover-text',
    'footer-language hover-text',
    'footer-language hover-text',
    'footer-language hover-text',
    'footer-language hover-text',
    'footer-language hover-text',
    'footer-language hover-text',
    'footer-language hover-text',
    'footer-language hover-text',
    'footer-language hover-text',
    'footer-language hover-text',
    'footer-language hover-text']);
    
    /**Выбор языка на странице */
    const onClick: React.MouseEventHandler<HTMLElement> = (event) => {
      const n = event.currentTarget.title;
    
      setValue([...defaultStyle.slice(0, Number(n)), 'footer-language footer-language--active',...defaultStyle.slice(Number(n) + 1)])
    }

    return (
      <ul className="language-selector">  
        {arr.map((l, index) => (
          <li className={l} title={index.toString()} onClick={onClick}>
            <strong>{listLanguage[index]}</strong>
          </li>          
        ))}
      </ul>
    );
}

