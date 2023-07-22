import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Blog.scss'
import {BlogData} from '../../../Data'
import MkProfile from '../../../assets/MkProfile.jpg'

const Blog = () => {
  const id = useParams()
  const [data, setData] = useState({})

  const myPromise = new Promise((resolve, reject) => {
      const newData =  BlogData.filter((item) => item.id == id.id)
      if(newData.length > 0){
        resolve(newData);
      }
      else{
        reject("error");
      }
    
  });

  useEffect(() => {
    try{
      myPromise
        .then(newData => setData(newData[0]))
        .catch(err => setData({}))
    }catch(err){
      console.log(err);
    }

  },[])


  return (
    <>
      <div className="app__blog">
        <div className='blog__header'>
          <h1>{data.title}</h1>
          <p>{data.name} . {data.date}</p>
        </div>

        <div className='blog__content'>
          <div className='content-left'>
            <img src={data.img} alt="" />
            <p>{data.content}</p>
          </div>

          <div className='content-right'>
                    <div className="search">
                        <input type="text" placeholder='Search...' />
                        <button className='search-click'>Search</button>
                    </div>
                    <div className='author'>
                      <span className="image">
                        <img src={MkProfile} alt="" />
                      </span>
                        
                      <div className='description'>
                          <h2>Author</h2>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptas iure rem neque vel quod minima saepe ipsa</p>
                      </div>

                    </div>
                    <div className="popular-post">
                        <h2 className='heading'>Popular Post</h2>
                        {BlogData.map((item, index) => (
                            <div className='blog__card' key={index}>
                                <img src={item.img} alt="" />
                                <div className='blog__card__content'>
                                    <h2 onClick={() => {navigate(`/blogs/${item.id}`)}}>{item.title}</h2>
                                    <p>{item.name} . {item.date}</p>
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