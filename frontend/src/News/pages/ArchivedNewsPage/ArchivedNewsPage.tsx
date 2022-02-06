import React, { useEffect } from 'react';
import { newsApi } from '../../../Api/NewsApi/config';
import { News } from '../../interface/NewsInterface';
import NewsList from '../../components/NewsList/NewsList';
import Loading from '../../components/Loading/Loading';
import ModalError from '../../components/ModalError/ModalError';

type AppProps = {
    type: string,
}

const ArchivedNewsPage = ({type}:AppProps) => {
    const [news, setNews] = React.useState<Array<News>>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string>("");
    
    const deleteArchivedNews = (_id: string) => {
        setLoading(true);
        let newsCopy = [...news];

        newsApi.deleteArchivedNews(_id).then(
            data => {
                if(data.ok)
                {
                    newsCopy = newsCopy.filter(article => article._id !== _id);
                    setNews(newsCopy);
                    setLoading(false);                    
                }
                else 
                {
                    setError(data.statusText);
                    setLoading(false);
                }                                     
            }
        )
    }

    useEffect(() => {
        newsApi.getArchivedNews().then(
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

    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <NewsList news={news} setNews={setNews} type="archived" eventClick={(_id) => {deleteArchivedNews(_id)}}/>
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

export default ArchivedNewsPage;