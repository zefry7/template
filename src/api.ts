const apiKey = 'a3600493f930704cc99f0653e363a8bb';
const startHttp = 'http://ws.audioscrobbler.com/2.0/';

let controller = new AbortController();

export async function getResponses(addUrl: string){ 


    const a = await fetch(startHttp + addUrl + '&api_key='+ apiKey + '&format=json', {
        signal: controller.signal
    });


    if(a.ok == false){
        throw new Error('Error: ' +  a.status);
    }

    return a.json();
}

export async function abortCont(){
    controller.abort();
}