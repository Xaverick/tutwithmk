import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './SearchBlog.scss'
import {BlogData} from '../../../Data'
import Banner from '../../../components/Banner/Banner'
import { useNavigate } from 'react-router-dom'



const SearchBlog = () => {

    const title = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const myPromise = new Promise((resolve, reject) => {
        const newData =  BlogData.filter((item) => item.title.toLowerCase().includes(title.title.toLowerCase()) )
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
          .then(newData => setData([...newData]))
          .catch(err => setData([]))
          console.log(data);
  
        window.scrollTo(0, 0)  
      }catch(err){
        console.log(err);
      }
  
  
    },[title])



    return (
        <>
            <Banner name={`Searched for: ${title.title}`}/>
            
            {!(data.length > 0) ? <h1 className='no__data'>No Data Found</h1> : (          
              <div className='blogs__list'>
                <div className='content-left'>     
                  {data.map((data) => ( 
                    <div className='blog__card' key={data.id}>
                      <img src={data.img} alt="" />
                      <div className='blog__card__content'>
                          <h2 onClick={() => {navigate(`/blogs/${data.id}`)}}>{data.title}</h2>
                          <p>{data.name} . {data.date}</p>
                      </div>
                    </div>
                  ))}         
                
                </div>
              </div>
              
            )}
        </>
    )


}

export default SearchBlog