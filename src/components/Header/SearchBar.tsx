
interface ISearchBar {
    toggleSearchBar: (t:boolean) => void; 
}

export const SearchBar = (props: ISearchBar) => {
    const {toggleSearchBar} = props;
    
    const onClick = (event: any) =>{
        event.preventDefault();

        toggleSearchBar(true);
    }

    return(
        <a className="masthead-search-toggle" onClick={onClick}></a>
    );
}