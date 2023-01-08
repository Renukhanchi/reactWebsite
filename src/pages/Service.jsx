import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card  from '../components/Card'


const Service = () => {
const [ loading , setLoading ] = useState(true)
const [ error, setError] = useState('')	
const [ post, setPost] = useState({})

  const style={
    display:'flex',
    justifyContent : 'space-evenly',
    flexWrap : 'wrap',
    // height:'80vh',
  }

  useEffect(()=>{
    axios
    .get('https://api.unsplash.com/photos/?client_id=S4qFVobcvrfQEbtcgy7P6oOSQbMRdEeOnXUaOLOADkQ')
    .then(response=>{ 
        setLoading(false)
				setPost(response.data)
				setError('')
    })
    .catch(e=>{
      setLoading(true)
      setPost({})
      setError('something went wrong')})
  },[])



  return (
    <div style={style}>
{/* <img src={images[0].urls.raw} alt="img" style={{width:'30vw'}}/> */}
      {loading ? 'Loading' : post.data }
			{error ? error : null}	
    <Card topic='web development' img={post[0].urls.raw}/>
    <Card topic='app development'  img={post[1].urls.raw}/>
    <Card topic='software development'  img={post[2].urls.raw}/>
    <Card topic='digital marketing'  img={post[3].urls.raw}/>
    <Card topic='android development' img={post[4].urls.raw} />
    <Card topic='marketing' img={post[5].urls.raw}/>

    </div>


  )
}

export default Service