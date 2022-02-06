import { News } from '../../../News/interface/NewsInterface';
import {url} from '../config';

export default function getArchivedNews(): Promise<Array<News>> {
    return fetch(url + "/archived-news")
        .then(response => response.json())
        .then(json => json.data.news);
}
