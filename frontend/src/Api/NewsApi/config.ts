import getNews from './Rutas/GetNews';
import getArchivedNews from './Rutas/GetArchivedNews';
import archiveNews from './Rutas/ArchiveNews';
import deleteArchivedNews from './Rutas/DeleteArchivedNews';

export const url: string = 'http://localhost:3000';


export const newsApi = {
    getNews,
    getArchivedNews,
    archiveNews,
    deleteArchivedNews
}