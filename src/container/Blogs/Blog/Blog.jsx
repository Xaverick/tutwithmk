import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Blog.scss'
import {BlogData} from '../../../Data'
import MkProfile from '../../../assets/MkProfile.jpg'
import { useNavigate } from 'react-router-dom'


const Blog = () => {
  const id = useParams()
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  
  const myPromise = new Promise((resolve, reject) => {
    const newData =  BlogData.filter((item) => item.id == id.id)
    if(newData.length > 0){
      resolve(newData);
    }
    else{
      reject("error");
    }
    
  });

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = () => {
      if(search === ''){
          alert('Please enter something to search')
      }
      else{
          navigate(`/blogs/search/${search}`)
      }
  }


  useEffect(() => {
    try{
      myPromise
        .then(newData => setData(newData[0]))
        .catch(err => setData({}))

      window.scrollTo(0, 0)  
    }catch(err){
      console.log(err);
    }


  },[id])


  return (
    <>
      <div className="app__blog">
        <div className='blog__header'>
          <h1>{data.title}</h1>
          <p>{data.name} </p>
        </div>

        <div className='blog__content'>
          <div className='content-left'>
            {data.video && (<iframe src={data.video} frameborder="0" allow="autoplay;"></iframe>)}
            {data.img && (<img src={data.img} alt="" />)}
            {data.content}   
      
            {data.link && (
              <a href={data.link}>Click Here</a>
            )}

            <p className='footer'> <br />MK</p>
          </div>

          <div className='content-right'>
                    <div className="search">
                        <input type="text" placeholder='Search...' value={search} onChange={(e) => handleChange(e)} />
                        <button className='search-click' onClick={() => {handleSubmit()}}>Search</button>
                    </div>
                    <div className='author'>
                      <span className="image">
                        <img src={MkProfile} alt="" />
                      </span>
                        
                      <div className='description'>
                          <h2>MK</h2>
                          <p>Precision, Perfection, Power, Harmony, You. If that is not you, then what have you become!?</p>
                      </div>

                    </div>
                    <div className="popular-post">
                        <h2 className='heading'>Popular Post</h2>
                        {BlogData.map((item, index) => (
                            <div className='blog__card' key={index}>
                                {item.video && (<iframe src={item.video} frameborder="0" allow="autoplay;"></iframe>)}
                                {item.img && (<img src={item.img} alt="" />)}
                                <div className='blog__card__content'>
                                    <h2 onClick={() => {navigate(`/blogs/${item.id}`)}}>{item.title}</h2>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        ))}

                    </div>



                </div>

        </div>

      </div>

      
    
    </>
  )
}

export default Blog