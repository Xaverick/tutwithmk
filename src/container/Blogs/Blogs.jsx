import React , {useState,useEffect} from 'react'
import Banner from '../../components/Banner/Banner'
import './Blogs.scss'

import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import {BlogData} from '../../Data'




const Blogs = () => {
    const [trendingIndex, setTrendingIndex] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const limitedData = BlogData.slice(3, 7)
    const data = BlogData[currentIndex]
    const barData = BlogData[trendingIndex]
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

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
        const interval = setInterval(() => {
            if(trendingIndex === BlogData.length - 1){
                setTrendingIndex(0)
            }else{
                setTrendingIndex(trendingIndex + 1)
            }
        }, 5000);
    
        return () => clearInterval(interval);
    }, [trendingIndex]);

    return (
    <>
        <Banner name='Blogs' subtitle={'Lorem ipsum dolor sit amet, consectetu.'} />



        <div className='app__blogs'>
            
            <div className='blogs__header'>
                {data && (
                    <div className='image' key={data.id}>
                        <img src={data.img} alt="" />
                        <div className='overlay-content'>
                            <h1 onClick={() => {navigate(`/blogs/${data.id}`)}}>{data.title}</h1>
                            <span>{data.name} </span>
                            
                        </div>
                    </div>
                )} 

                <div className='dot__navigation'>
                    {limitedData.map((item, index) => (
                        <div key={index} className={`dot ${currentIndex === index ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></div>
                    ))}
                </div>
                
                <div className="trending__bar">
                    <span className='tag'>
                        <p>Trending</p>
                    </span>

                    <span className='title-area'>
                        { barData && (
                            <p>{barData.title}</p>    
                                                
                        )}
                    </span>

                    <span className='controls'>
                        <span className='icon' onClick={() => trendingIndex <= 0 ? setTrendingIndex(BlogData.length - 1) : setTrendingIndex(trendingIndex-1)}> <AiOutlineLeft /> </span>
                        <span className='icon' onClick={() => trendingIndex >= (BlogData.length - 1) ? setTrendingIndex(0) : setTrendingIndex(trendingIndex + 1)}> <AiOutlineRight /> </span>
                    </span>
                </div>
            </div>


            <div className='blogs__content'>
                <div className='content-left'>
                    {BlogData.map((item, index) => (
                        <div className='blog__card' key={index}>
                            <img src={item.img} alt="" />
                            <div className='blog__card__content'>
                                <h2 onClick={() => {navigate(`/blogs/${item.id}`)}}>{item.title}</h2>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='content-right'>
                    <div className="search">
                        <input type="text" placeholder='Search...' value={search} onChange={(e) => handleChange(e)}/>
                        <button className='search-click' onClick={() => {handleSubmit()}}>Search</button>
                    </div>

                    <div className="popular-post">
                        <h2 className='heading'>Popular Post</h2>
                        {limitedData.map((item, index) => (
                            <div className='blog__card' key={index}>
                                <img src={item.img} alt="" />
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

export default Blogs