import React from 'react';
import './App.css';
import NewsPage from './News/pages/NewsPage/NewsPage';
import Sidebar from './shared/Sidebar/Sidebar';
import ArchivedNewsPage from './News/pages/ArchivedNewsPage/ArchivedNewsPage';

function App() {
  const [active, setActive] = React.useState<string>('news');

  return (
    <div className="App d-flex">
      <Sidebar active={active} setActive={setActive}/>

      {active !== "archive" 
        ? <NewsPage type={active}/> 
        : <ArchivedNewsPage type={active}/>}
      
    </div>
  );
}

export default App;
