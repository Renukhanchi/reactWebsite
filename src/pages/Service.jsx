import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card  from '../components/Card'


const Service = () => {
const [ error, setError] = useState('')	
const [ post1, setPost1] = useState([])

  const style={
    display:'flex',
    justifyContent : 'space-evenly',
    flexWrap : 'wrap',
  }

  useEffect(()=>{
      axios
          .get("https://api.tvmaze.com/search/shows?q=all")
          .then((res) => {
            setPost1(res.data);
          })
          .catch((err)=>{
              setError(err.message);
          })
  },[])


  return (
    <div style={style}>
      <div>{error}</div>
      {
        post1.map((data)=>{
          const image = data.show?.image?.medium
          console.log(data.show?.image?.medium);  
          return(
            <div>
              <Card image={image}/>
            </div>
          )
        })
      }

    </div>

  )
}

export default Service