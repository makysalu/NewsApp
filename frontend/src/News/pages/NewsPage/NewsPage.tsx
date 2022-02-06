import React, { useEffect } from 'react';
import { newsApi } from '../../../Api/NewsApi/config';
import { News } from '../../interface/NewsInterface';
import NewsList from '../../components/NewsList/NewsList';
import Loading from '../../components/Loading/Loading';
import ModalError from '../../components/ModalError/ModalError';

type AppProps = {
    type: string,
}
const NewsPage = ({type}:AppProps) => {
    const ws = React.useRef<WebSocket>();
    const [news, setNews] = React.useState<Array<News>>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string>("");
        
    useEffect(() => {
        newsApi.getNews().then(
            data => {
                setNews(data);           
                setLoading(false);
            },
            error => {
                setError(error);
                setLoading(false);
            }
        );
    }, []);
    
    useEffect(() => {
        ws.current?.close();
        ws.current = new WebSocket('ws://localhost:8080');
        ws.current.onmessage = (event) => {            
            const newsItem = JSON.parse(event.data);
            let newsCopy = [...news];   
            newsCopy.unshift(newsItem);
            setNews(newsCopy);
        }
    }, [news]);

    const archiveNews = (_id: string) => {        
        setLoading(true);
        let newsCopy = [...news];        
        newsApi.archiveNews(_id).then(
            data => {
                if(data.ok)
                {
                    newsCopy = newsCopy.filter(news => news._id !== _id);
                    setNews(newsCopy);
                    setLoading(false);                    
                }
                else 
                {
                    setError(data.statusText);
                    setLoading(false);
                }                                     
            }
        );
    }
    
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <NewsList news={news} setNews={setNews} type="news" eventClick={(_id) => {archiveNews(_id)}}/> 
                </div>

                {
                    loading
                    ?
                        <Loading/>
                    :   
                        null  
                }

                {
                    error !== ""
                    ?
                        <ModalError error={error} setError={setError}/> 
                    :   
                      null  
                }
                
                
            </div>
        </div>
    );
};

export default NewsPage;