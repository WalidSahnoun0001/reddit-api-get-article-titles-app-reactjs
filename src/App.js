import { useState, useEffect } from "react";
import Articles from "./components/Articles";

function App() {

  const [articles, setArticles] = useState([])
  const [val, setVal] = useState('reactjs')
  const url = `https://www.reddit.com/r/${val}.json`

  useEffect(()=> {
    fetch(url).then((data)=> data.json().then(data=> setArticles(data.data.children))).catch(err=> console.log(err))
  }, [url])

  return (
    <section>
      <div className="box">
      <h2>Reddit Api App</h2>
        <div className="display"> 
          <input type="text" placeholder="Type here..." value={val} onChange={e => setVal(e.target.value)}/>
        </div>
      <h3>{val}</h3>
        <div className="articles">
          <Articles articles={articles} />
        </div>
      </div>
    </section>
  );
}

export default App;
