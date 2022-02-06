import {url} from '../config';

export default function deleteArchivedNews(id: string): Promise<Response> {
    return fetch(url + "/news/" + id, {
        method: 'DELETE'
    });
}
