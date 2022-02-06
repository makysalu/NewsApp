import React from 'react';
import { News } from '../../interface/NewsInterface';
import './NewsCard.css'

type AppProps = {
    newsItem: News,
    type: string
    eventClick: (_id: string) => void
}

const NewsCard = ({newsItem, type, eventClick}:AppProps) => {
    return (
        <div className="card m-2 p-0">
            <div className="card-header p-3">
                <div className="float-sm-end">
                    {
                        type === "news" ?
                        (<button type="button" className="btn btn-news" onClick={(event) => {
                            eventClick(newsItem._id)
                        }} title="Archive">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-folder-symlink" viewBox="0 0 16 16">
                                <path d="m11.798 8.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742z"/>
                                <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm.694 2.09A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09l-.636 7a1 1 0 0 1-.996.91H2.826a1 1 0 0 1-.995-.91l-.637-7zM6.172 2a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"/>
                            </svg>
                        </button>) :
                        (<button type="button" className="btn btn-news" onClick={(event) => {
                            eventClick(newsItem._id)
                        }} title="Delete">                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button>)
                    }
                </div>
                <div className="float-sm-start">
                    <h5 className="card-title">{newsItem.title}</h5>
                    <h6 className="card-subtitle mb-2 text-secondary">
                        {newsItem.author}
                    </h6>
                </div>
                
            </div>
            <div className="card-body">
                <p className="card-text">
                    {newsItem.description}
                </p>
                <div className="float-lg-end">
                    {new Date(newsItem.date).toDateString()}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;