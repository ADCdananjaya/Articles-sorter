import { useState, useEffect } from "react";

import Articles from "./components/Articles";

function App() {

  const ARTICLES = [
    {
      title: "A message to our customers",
      upvotes: 12,
      date: "2020-01-24",
    },
    {
      title: "Alphabet earnings",
      upvotes: 22,
      date: "2019-11-23",
    },
    {
      title: "Artificial Mountains",
      upvotes: 2,
      date: "2019-11-22",
    },
    {
      title: "Scaling to 100k Users",
      upvotes: 72,
      date: "2019-01-21",
    },
    {
      title: "The Emu War",
      upvotes: 24,
      date: "2019-10-21",
    },
    {
      title: "What's SAP",
      upvotes: 1,
      date: "2019-11-21",
    },
    {
      title: "Simple text editor has 15k monthly users",
      upvotes: 7,
      date: "2010-12-31",
    },
  ].map(obj => {
    return {...obj, date: new Date(obj.date)};
  });

  const [ articles, setArticles ] = useState([...ARTICLES]);
  const [ votedButtonStatus, setVotedButtonStatus ] = useState(true);
  const [ recentButtonStatus, setRecentButtonStatus ] = useState(false);

  useEffect(() => {
    setArticles([...articles.sort((a, b) => b.upvotes - a.upvotes)]);
  }, []);

  const handleMostVoted = () => {
    setRecentButtonStatus(prev => !prev);
    setVotedButtonStatus(prev => !prev);

    setArticles([...articles.sort((a, b) => b.upvotes - a.upvotes)]);
  }

  const handleMostRecent = () => {
    setRecentButtonStatus(prev => !prev);
    setVotedButtonStatus(prev => !prev);

    setArticles([...ARTICLES.sort((a, b) => Number(b.date) - Number(a.date))]);
  }

  return (
    <div className="w-full h-full flex items-center flex-col pt-10 gap-14">
      <div className="flex flex-row justify-evenly gap-12 items-center">
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-40 disabled:hover:bg-teal-500" onClick={handleMostVoted} disabled={votedButtonStatus}>Most Voted</button>
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-40 disabled:hover:bg-teal-500" onClick={handleMostRecent} disabled={recentButtonStatus}>Most Recent</button>
      </div>
      <Articles articles={articles}/>
    </div>
  )
}

export default App
