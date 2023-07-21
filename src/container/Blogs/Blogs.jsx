import React , {useState,useEffect} from 'react'
import Banner from '../../components/Banner/Banner'
import './Blogs.scss'
import blogsimage from '../../assets/blogsimgae.jpg'
import companyOfYou from '../../assets/companyOfYou.jpg'
import strategy from  '../../assets/strategy.jpg'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'


const headerData = [
    {
        id:1,
        title:'The Company of You',
        img: companyOfYou,
        name:'John Doe',
        date:'12/12/2020'
    },
    {
        id:2,
        title:'Strategy',
        img: strategy,
        name:'John Doe',
        date:'12/12/2020'
    },
    {
        id:3,  
        title:'blogsimgae',
        img: blogsimage,
        name:'John Doe',
        date:'12/12/2020'
    }
]



const Blogs = () => {
    const [trendingIndex, setTrendingIndex] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const data = headerData[currentIndex]
    const barData = headerData[trendingIndex]


    useEffect(() => {
        const interval = setInterval(() => {
            if(trendingIndex === headerData.length - 1){
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
                            <h1>{data.title}</h1>
                            <span>{data.name} . {data.date}</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat alias quos iusto laudantium. Odio repellendus reprehenderit veniam ullam consequatur neque dolor, unde temporibus laboriosam, velit, pariatur reiciendis tempora. Officiis, id!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sint sequi velit maiores id mollitia, cumque excepturi reprehenderit veritatis nostrum praesentium expedita necessitatibus odit pariatur illo accusamus amet esse quo?</p>
                        </div>
                    </div>
                )} 

                <div className='dot__navigation'>
                    {headerData.map((item, index) => (
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
                        <span className='icon' onClick={() => trendingIndex <= 0 ? setTrendingIndex(headerData.length - 1) : setTrendingIndex(trendingIndex-1)}> <AiOutlineLeft /> </span>
                        <span className='icon' onClick={() => trendingIndex >= (headerData.length - 1) ? setTrendingIndex(0) : setTrendingIndex(trendingIndex + 1)}> <AiOutlineRight /> </span>
                    </span>
                </div>
            </div>


            <div className='blogs__content'>
                <div className='content-left'>
                    {headerData.map((item, index) => (
                        <div className='blog__card' key={index}>
                            <img src={item.img} alt="" />
                            <div className='blog__card__content'>
                                <h2>{item.title}</h2>
                                <p>{item.name} . {item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='content-right'>
                    <div className="search">
                        <input type="text" placeholder='Search...' />
                        <button className='search-click'>Search</button>
                    </div>

                    <div className="popular-post">
                        <h2 className='heading'>Popular Post</h2>
                        {headerData.map((item, index) => (
                            <div className='blog__card' key={index}>
                                <img src={item.img} alt="" />
                                <div className='blog__card__content'>
                                    <h2>{item.title}</h2>
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

export default Blogs