
interface ICreateSearchBar {
    actionSearchBar: boolean;
    toggleSearchBar: (a:boolean) => void; 
    openPage: (page: string) => void;
}

export const CreateSearchBar = (props: ICreateSearchBar) =>{
    const {actionSearchBar} = props;
    const {toggleSearchBar} = props;
    const {openPage} = props;


    /**Закрытие поисковой строки */
    const clickCancel = () =>{
        toggleSearchBar(false);
    }

    /**Поиск по нажатию на кнопку */
    const clickSubmit = (event: any) =>{
        event.preventDefault();
        var form = new FormData(event.target.parentNode.parentNode);
        
        openPage(form.get('textSearch')+ '');
    }

    /**Поиск по нажатию на "Enter" */
    const onSubmit = (event: any) => {
        event.preventDefault();
        var form = new FormData(event.target);

        openPage(form.get('textSearch')+ '')
    }

    if(actionSearchBar){
        return(
            <form className="masthead-search-form" onSubmit={onSubmit}>
                <div className="masthead-search-inner-wrap">
                    <input className="masthead-search-field" type="text" placeholder="Search for music…" name="textSearch"></input>
                    <a className="masthead-search-toggle-cancel" onClick={clickCancel}></a>
                    <a className="masthead-search-submit" onClick={clickSubmit}></a>
                </div>
            </form>
        );
    } else {
        return(
            <div></div>
        );
    }
}