import {url} from '../config';

export default function archiveNews(id: string): Promise<Response> {    
    return fetch(url + "/news/archive", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id:id})
    });
}