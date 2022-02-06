import { News } from '../../../News/interface/NewsInterface';
import {url} from '../config';

export default function getNews(): Promise<Array<News>> {
    return fetch(url + "/news")
        .then(response => response.json())
        .then(json => json.data.news);
}
