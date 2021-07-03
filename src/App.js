import React,{useState} from 'react'
import './App.css';

function App() {
  const [value, setvalue] = useState("")
  const [arr, setarr] = useState([]);

  const fetchImages=()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=YqvnMo-MzxF0q9ALPg69IC5RL6hGDQ6jP1FnrcDmf3U&query=${value}&orientation=squarish&per_page=500&page=2`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setarr(data.results)
    })
  }
  return (
    <div className="App">
     <div className="myDiv">
       <span>search</span>
       <input 
       style={{width: "60%"}}
       type="text" value={value} onChange={(e)=>setvalue(e.target.value)}
       />
       <button onClick={()=>fetchImages()}>search</button>
       
     </div>
     <div>
     <div className="gallery">
        {
          arr.map((item)=>{
            return <img className="item" src={item.urls.regular} alt=""/>
          })
        }
       </div>
     </div>
    </div>
  );
}
// 

export default App;
