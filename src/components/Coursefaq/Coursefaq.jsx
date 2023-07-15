import React , {useState,useEffect} from 'react'
import './Coursefaq.scss'
import  {motion,AnimatePresence} from "framer-motion"
import {AiOutlineArrowDown} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'


const data = [
    {
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
          ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
          In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
          Fusce sed commodo purus, at tempus turpis.`,
        open: true,
        move:true
    },
    {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
            "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        open: false,
        move:false
    
    },
    {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
        Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
        Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
        Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        open: false,
        move:false
      
    },
    {
        title: "What is the package version",
        content: <p>current version is 1.2.1</p>,
        open: false,
        move:false
    },
];


const Coursefaq = ({name}) => {

    const [liveData, setLiveData] = useState(data)
    const togglefaq = (index) => {
        setLiveData(liveData.map((item, i) => {
        if (i === index) {
            item.move = !item.move;
            item.open = !item.open;
            
        } else {
            item.move = false;
            item.open = false;
            
        } 
        return item;
        }))
    
    }

  return (
    <div className='faq-background'>
        <div className='image-overlay'>    
            <div className='question-and-faq'>
            <div className='mid-apply-section__form'>
                <div className='apply-form'>
                    <p>Still Have Questions? <br /> <span>Ask Here.</span></p>

                    <form  className='main-form'>       
                    <div className='fields'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Name" name = 'name' className='p-text'  required/>
                    </div>

                    <div className='fields middle'>
                        <div style={{display:"flex", flexDirection:"column",gap:'1rem'}}>
                        <label htmlFor="">Phone Number</label>
                        <input type="email" placeholder="Phone Number" name = "email" className='p-text' required/>
                        </div>
                    
                        <div style={{display:"flex", flexDirection:"column",gap:'1rem'}}>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Email" name = "email" className='p-text' required/>
                        </div>
                        
                    
                    
                    </div>

                    <div className='fields'>
                        <label htmlFor="">Message</label>
                        <textarea
                        className='p-text'
                        placeholder="Message"  
                        // value= {message}
                        // name = "message"
                        // onChange={handleChangeInput} 
                        required
                        />
                    </div> 

                    <button type='button'>Send</button>
                    </form>

                    <div className='apply-here'>
                    <AiOutlineHome />
                    <p>Apply here</p>
                    </div>
                </div>



            </div>



            <div className='faq-section'>
                <p className='para-heading'>FAQ</p>
                <h1>Frequently Ask <br /> Qustions</h1>
                <p>Must go through the below Q & A’s</p>
                <p>before applying for {name} </p>
                <div className='faq'>
                {liveData.map((item, index) => (
            
                    <div key={index} className='single-faq'>
                        <div className='question'>
                        <h1>{item.title}</h1>                                        
                        <motion.div 
                            className='arrow'
                            onClick={() => togglefaq(index)}
                            initial="down"
                            animate={{rotate: item.move ? 180 : 0}}                         
                            transition={{duration: 0.1, ease: "linear"}} 
                            variants={{
                            down: { rotate: 0 }
                            }}
                        >
                            <AiOutlineArrowDown />
                        </motion.div> 
            
                        
                    
                        
                        
                        </div>
                        <AnimatePresence>
                        {item.open && (
                        
                                <motion.div
                                className="answer"
                                key="content"
                                initial="collapsed"
                                animate="open"                           
                                exit={{ opacity: 0, height: 0 ,padding:0}}
                                transition={{duration: 0.3, ease: "linear"}} 
                                variants={{
                                open: { opacity: 1, height: 'auto' },
                                collapsed: { opacity: 0, height: 0 ,padding:0},
                                
                                }}
                            >
                                {item.content}
                            </motion.div>
                            
                        )}
                        </AnimatePresence> 

                    </div>

                ))}
                </div>
            </div>


            </div>
        </div>
    </div>
  )
}

export default Coursefaq