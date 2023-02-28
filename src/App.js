import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
    const [data,setData]=useState([])
  
  useEffect(()=>{

   // get api implimantation
    const url= "https://fakestoreapi.com/products?sort=desc"
    fetch(url,{
      headers:{
        companyId:"9689715181"
      }
    }
      )
    .then(response => response.json()).then(json=>{
      console.log("jsonnnn", json)
      setData(json)
    } ).catch(e=>{
      console.log("e",e)
    })
  }, [])

  // post and put api implementation
  const postPutEvent=()=>{
      const data = {
        id:"def456",
        name:"seema",
        mobile:"4859757845",
        designation:"developer",
        pin:"410504"
      }
    const url= data.id? "https://fakestoreapi.com/products?sort=desc/"+data.id :"https://fakestoreapi.com/products?sort=desc"
    fetch(url,  {
      method:data.id? "PUT":"POST",
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*"
        

      },
      body:JSON.stringify(data)
    })

    .then(response=>{
      console.log("response",response)
      if(response.status===200){
        alert("success")
      }
    }).catch(e=>{
      console.log("e",e)
    })
  }

  return (
    <div className="App">
      <h1>Welcome to api</h1>
      {
        data.map(item=>{
          return(
            <div>
              {item.title} <br />
              {item.price} 

            </div>
          )
        })
      }
      <button onClick={postPutEvent}>Submit</button>
    </div>
  );
}

export default App;
