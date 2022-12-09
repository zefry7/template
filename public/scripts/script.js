const langObj = document.querySelector('.language-selector');
const popularArtist = document.querySelector('.music-more-artists');
const popularTracks = document.querySelector('.column-tracks');
const header = document.querySelector('.header');

const apiKey = 'a3600493f930704cc99f0653e363a8bb';
const startHttp = 'http://ws.audioscrobbler.com/2.0/';


async function getResponses(addUrl){ 
    const a = await fetch(startHttp + addUrl + '&api_key='+ apiKey + '&format=json');

    if(a.ok == false){
        throw new Error('Error: ' +  a.status);
    }

    return a.json();
}

main();

async function main(){
    clickArtist();
    clickTrack();
    changingLanguage();
    useSearchBar();
    clickTag();
    playTrack();
}


async function tagPage(element){
    if(element.target.parentElement.getAttribute('class') == "tags-list" || element.target.parentElement.getAttribute('class') == "tag"){
        window.location.href = 'https://www.last.fm/tag/' + element.target.innerHTML;
    }
}

/**Переход на страницу тегов у популярных артистов и треков*/
async function clickTag(){
    document.addEventListener('click', (element)=>{ 
        tagPage(element);
    })
}

async function artistPage(i){
    const o = popularArtist.getElementsByClassName("music-more-artists-item-name");

    const data = getResponses('?method=artist.getinfo&artist=' + o[i].innerHTML);

    data.then(results => window.location.href = results.artist.url);
}

/**Переход на страницу популярного артиста*/
async function clickArtist(){
    const n = popularArtist.getElementsByClassName("artist-avatar");

    for(let i = 0; i < n.length; ++i){
        n[i].addEventListener('click', ()=>{
            artistPage(i);
        })       
    }
}

async function trackPage(inner){
    const data = getResponses('?method=track.search&track=' + inner);
    data.then(results => window.location.href = results.results.trackmatches.track[0].url);
}

/**Переход на страницу популярного трека*/
async function clickTrack(){
    const b = popularTracks.getElementsByClassName('column-tracks-item-name');

    for(let i = 0; i < b.length; ++i){
        b[i].addEventListener('click', ()=>{
            trackPage(b[i].innerHTML);
        })          
    }
}

async function language(a, i){
    for(let j = 0; j < a.length; ++j){
        a[j].parentElement.setAttribute('class', 'footer-language');
        a[j].setAttribute('class', 'hover-text');
    }
    a[i].parentElement.setAttribute('class', a[i].parentElement.getAttribute('class') + ' footer-language--active');
    a[i].setAttribute('class', '');
}

/**Выбор языка на странице */
async function changingLanguage(){
    const a = langObj.getElementsByTagName('strong');

    for(let i = 0; i < a.length; ++i){
        a[i].addEventListener('click', ()=>{
            language(a, i);        
        })
    } 
}

async function createSearchBar(){
    const f = document.createElement('form');
    f.setAttribute("class", "masthead-search-form");
    
    const d = document.createElement('div');
    d.setAttribute("class", "masthead-search-inner-wrap");

    const inp = document.createElement('input');
    inp.setAttribute("class", "masthead-search-field");
    inp.setAttribute("type", "text");
    inp.setAttribute("placeholder","Search for music…");

    const a1 = document.createElement('a');
    a1.setAttribute("class","masthead-search-toggle-cancel");

    const a2 = document.createElement('a');
    a2.setAttribute("class","masthead-search-submit");

    d.insertAdjacentElement("afterbegin", a2);
    d.insertAdjacentElement("afterbegin", a1);
    d.insertAdjacentElement("afterbegin", inp);

    f.insertAdjacentElement("afterbegin", d);

    const x = header.getElementsByClassName('header-content')[0];

    x.insertAdjacentElement('afterbegin', f);

    const cancelButton = x.getElementsByClassName('masthead-search-toggle-cancel')[0];
        
    cancelButton.addEventListener('click', ()=>{
        cancelButton.parentNode.parentNode.removeChild(cancelButton.parentNode);        
    })

    const searchButton = x.getElementsByClassName('masthead-search-submit')[0];

    searchButton.addEventListener('click', ()=>{
        const hr = "https://www.last.fm/search?q=" + x.getElementsByClassName('masthead-search-field')[0].value;     
        window.location.href = hr;
    })
}

async function pressingEnter(event){
    if(event.code == 'Enter' && document.getElementsByClassName('masthead-search-field')[0] != undefined){
        const hr = "https://www.last.fm/search?q=" + document.getElementsByClassName('masthead-search-field')[0].value;     
        window.location.href = hr;
    }
}

/**Отображение строки поиска и взаимодействия с ней*/
async function useSearchBar(){
    const searchButton = header.getElementsByClassName('masthead-search-toggle')[0];

    searchButton.addEventListener('click', ()=>{
        createSearchBar();
    })

    document.addEventListener('keydown', (event)=>{
        pressingEnter(event);
    })
}

async function onTrack(x, i){
    const srcImgTrack = x[i].getElementsByTagName('img')[0].getAttribute('src');

    const defImgTrack = header.getElementsByTagName('img')[0];

    defImgTrack.setAttribute('src', srcImgTrack);

    const infoTrack = header.getElementsByClassName('player-bar-now-playing-inner-wrap')[0];

    infoTrack.innerHTML = x[i].getElementsByClassName('column-tracks-item-artist')[0].innerHTML + ' - ' + x[i].getElementsByClassName('column-tracks-item-name')[0].innerHTML;
}

/**Отображение запущенного трека из списка популярных треков */
async function playTrack(){
    const x = popularTracks.getElementsByClassName('column-tracks-item');

    for(let i = 0; i < x.length; ++i){
        x[i].addEventListener('click', ()=>{
            onTrack(x, i);
        })
    }
}


