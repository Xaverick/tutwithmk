import React , {useState,useEffect} from 'react'
import './Contact.scss'
import  {motion,AnimatePresence} from "framer-motion"
import {AiOutlineArrowDown} from 'react-icons/ai'
import Banner from '../../components/Banner/Banner'
import emailjs from '@emailjs/browser';
import{Link} from 'react-router-dom'


const data = [
    {
        title: `Define "Life"?`,
        content: `"Life": “An Everyday pathetic drag of mundane rituals with a fitful struggle to keep self - Positive.” MK.`,
        open: true,
        move:true
    },
    {
        title: "Why do I always get Hurt?",
        content: <div><p>Your Destiny Revealed: Since childhood you were hurt; you still get hurt and you’ll continue to get hurt.</p> <p>Accept it or “die”!</p> <p>Now if you can accept it… here is something for you:</p> <p>“My friend… you’ve always been too much & that too much has always hurt you so much!!!” MK.</p> </div>,
        open: false,
        move:false
    
    },
    {
        title: "What will change after Personal Transformation Sessions?",
        content: <div>
                <p>Well, ask anyone what doesn't change after these sessions. Everything Changes! <br />Clients come to me saying they want to get rid of this or that or how they wish they could be like they were earlier, Happy, Enjoying & Successful.</p>
                <p>I'll be Honest – It's Untrue! Actually what they want deep down is A Better Version of their earlier Self – which they had been, when they were at their Peak in Life! </p>
                <p>Now, because they didn't know how to go to Level Next – they stumbled down & down & got themselves in all those Mental & Physical Difficulties!</p>
                <p>Let me be point blank, My Clients Achieve Exactly This: A Completely Brand New – Superior – Totally Revamped(Changed) Version of their old self.</p>
                <p>Meet Your Version X.</p>
            </div>,
        open: false,
        move:false
      
    },
    {
        title: "Why Me?",
        content: <div>
                <p>Why not you? You’re arrogant, self-centric, 1000% self-absorbed, High-Rated Victim & the list goes on… but still you have Always wanted to Help others & never could Really hate anyone!</p>
                <p>Can you prove me wrong? </p>
                <p>Now, with yourself all that was wrong, ever was wrong or to be conclusive- Missing in your life, not from yesterday but since your childhood is: Training!!!</p>
                <p>Your Fact Correction: You’re not a soldier. You are a Warrior & to Train A Warrior- Hmm… A very few people can do so! </p>
                <p>Welcome To Your Clan - Your Training Begins.</p>
                <Link  to="/services/launchpad">Click Here</Link>
            </div>,
        open: false,
        move:false
    },
    {
        title: "What! Why Personal Transformation?",
        content: <div>
                <p>Any & all of your answers (& examine that) are there 'coz you were deprived of the true essence of the word – Transformation!</p>
                <p>Notice, we're not talking here about "Improvement". It's very slow, time consuming & a boring thing! Atleast I feel that way & all the people coming to me feel the same.</p>
                <p>Transformation is a different, all together, Frequency! It's Intense, Powerful, Thrilling with 280+ on highway or like watching 12-D movie!!!</p>
                <p>If you're reading these words: You've lived Transformation! (I won't believe you for a single sec. if you say "No".)</p>
                <p>Only thing is, you couldn't control & maintain it so it vanished. Let's talk about it on "koffee with MK".</p>
                <Link  to="/services/coffewithmk">Click Here</Link>
            </div>,
        open: false,
        move:false
    },

];



const Contact = ({label}) => {

    const [formData, setFormData] = useState({name: '', email: '', number:'' ,message: ''})
    const [isFrormSubmitted, setIsFrormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const { name, email, message,number} = formData;

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})

    }
    
    const handleSubmit = (e) => {    
        if(!name || !email || !message || !number) return alert('Please fill all the fields')
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return alert('Please enter a valid email')
        if(message.length < 20) return alert('Message should be atleast 20 characters long')
        if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(number)) return alert('Please enter a valid phone number')
        e.preventDefault();
        setLoading(true);
        const templateParams = {to_name: 'MK' ,email: formData.email, name: formData.name, message: formData.message, number: formData.number}
        emailjs.send('service_c8k4b74', 'template_bvxknzh', templateParams, "rm4pX9TVY2e3BT41g")
        .then(function(response) {
            setIsFrormSubmitted(true);
            setLoading(false);
            setFormData({name: '', email: '', number:'' ,message: ''})
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });

    }

    
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
    <>

    <Banner name='Connect' subtitle=""/>  
    <div className="contact-heading">
        <p className='desc'>"Just Interested" <br />Don't Bother <br /> <br /> Ready to do Whatever it Takes... <br />Get in Touch.</p>
    </div>
    <div className='faq-background'>
        <div className='image-overlay'>    
            <div className='contact-question-and-faq'>         

                <div id="faq" className='faq-section'>
                    {/* <p className='para-heading'>FAQ</p> */}
                    <h1>Frequently Asked <br /> Questions</h1>
                    <p>You Asked I Replied - </p>
                    <p> Instant Power Shots <br /> (Take it whenever you feel low) </p>
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

                <div className='mid-apply-section__form'>
                <div className='apply-form'>
                    <p>Still Have Questions? <br /> <span>Ask Here.</span></p>

                    <form  className='main-form'>       
                        <div className='fields'>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Name" name = 'name' className='p-text'  value={name} onChange={handleChangeInput} required/>
                        </div>

                        <div className='fields middle'>
                            <div style={{display:"flex", flexDirection:"column",gap:'1rem'}}>
                                <label htmlFor="">Phone Number</label>
                                <input type="tel" placeholder="Phone Number" name = "number" value={number} onChange={handleChangeInput} className='p-text' required/>
                            </div>
                        
                            <div style={{display:"flex", flexDirection:"column",gap:'1rem'}}>
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder="Email" name = "email" className='p-text' value={email} onChange={handleChangeInput} required />
                            </div>
                            
                        
                        
                        </div>

                        <div className='fields'>
                            <label htmlFor="">Message</label>
                            <textarea
                                className='p-text'
                                placeholder="Message"  
                                value= {message}
                                name = "message"
                                onChange={handleChangeInput} 
                                required
                            />
                        </div> 

                        <button type='button' onClick={handleSubmit}>{loading ? "Sending..." : "Send"}</button>
                    </form>

                </div>



            </div>


            </div>
        </div>
    </div>
    </>
  )
}

export default Contact