const apiKey = 'a3600493f930704cc99f0653e363a8bb';
const startHttp = 'http://ws.audioscrobbler.com/2.0/';

export async function getResponses(addUrl: string){ 
    const a = await fetch(startHttp + addUrl + '&api_key='+ apiKey + '&format=json');

    if(a.ok == false){
        throw new Error('Error: ' +  a.status);
    }

    return a.json();
}