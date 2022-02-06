import React from 'react';
import { News } from '../../interface/NewsInterface';
import NewsCard from '../NewsCard/NewsCard';

type AppProps = {
    news: Array<News>,
    setNews: (news: Array<News>) => void,
    type: string,
    eventClick: (_id: string) => void
}

const NewsList = ({news, setNews, type, eventClick}: AppProps) => {
    return (
        <div className='row m-4'>
            {
                news.map(newsItem => (
                    <NewsCard key={newsItem._id} newsItem={newsItem} type={type} eventClick={eventClick}/>
                )) 
            }        
        </div>
    );
};

export default NewsList;