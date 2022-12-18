
interface ISearchBar {
    toggleSearchBar: (t:boolean) => void; 
}

export const SearchBar = (props: ISearchBar) => {
    const {toggleSearchBar} = props;
    
    return(
        <button className="masthead-search-toggle" onClick={() => {toggleSearchBar(true)}}></button>
    );
}