import { useState } from "react";

const apiKey = 'a3600493f930704cc99f0653e363a8bb';
const startHttp = 'http://ws.audioscrobbler.com/2.0/';

var resp = '';
export const controller = Array<AbortController>();

export async function getResponses(addUrl: string){ 
    const con = new AbortController();

    controller.push(con);


    const a = await fetch(startHttp + addUrl + '&api_key='+ apiKey + '&format=json', {
        signal: con.signal
    }).then((result) => {
        console.log('in then');
        return result;
    })
    .catch((err) => {
        console.log(err.name);
        return err;
    })
 
    for(var i = 0; i < controller.length - 1; ++i){
        controller[i].abort();
    }

    if(a.ok == false){
        throw new Error('Error: ' +  a.status);
    }

    return a.json();
}

