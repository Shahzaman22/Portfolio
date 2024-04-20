import React,{useEffect} from 'react'
import Sandesh from '../assets/projects/sandeshh.png'
import Gist from '../assets/projects//gist.png'
import Chatbot from '../assets/projects/chatbot.png'
import Ide from '../assets/projects/ide.png'
import ShopEasy from '../assets/projects/shopeasy.png'
import Upscale from '../assets/projects/upscale.png'
import youtube2Mp3 from '../assets/projects/youtube2Mp3.PNG'
import moviesApplication from '../assets/projects/moviesApplication.png'
import chatApp from '../assets/projects/chatApp.jpg'
import ecommerceApp from '../assets/projects/ecommerceApp.jpg'
import trustApp from '../assets/projects/trustApp.jpg'
import weatherApp from '../assets/projects/weatherApp.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    // {
    //   id: 1,
    //   src: Sandesh,
    //   desc: "Sandesh is a Chat App made using ReactJS + Tailwind CSS + ChatEngine API Service + Firebase authentication...",
    //   demo: "https://sandeshh.netlify.app/",
    //   code: "https://github.com/dipayansarkar47/Sandesh"
    // },
    // {
    //   id: 2,
    //   src: ShopEasy,
    //   desc: "This Full-Stack ShopKaro e-commerce website is made using ReactJS, Tailwind CSS, Firebase....",
    //   demo: "https://shopeasyy.vercel.app/",
    //   code: "https://github.com/dipayansarkar47/shopeasy"
    // },
    {
      id: 3,
      src: chatApp,
      desc: "Built with React & Appwrite, my chat app offers seamless communication. Real-time messaging, sleek design, secure data management. Connect anytime, anywhere!",
      demo: "https://cwbbot.vercel.app/",
      code: "https://github.com/dipayansarkar47/ai-chatbot"
    },
    // {
    //   id: 4,
    //   src: Ide,
    //   // desc: "Keeper is a simple note taking application made using Flutter...",
    //   demo: "https://opeditor.vercel.app/",
    //   code: "https://github.com/dipayansarkar47/online-code-editor"
    // },
    {
      id: 5,
      src: trustApp,
      desc: "Created with HTML, CSS, and vanilla JavaScript, our trust organization website featuring clean design and informative content, it serves as a reliable resource for our community.",
      demo: "https://upscaleai.vercel.app/",
      code: "https://github.com/dipayansarkar47/upscale-ai"
    },
    {
      id: 6,
      src: ecommerceApp,
      desc: "My ecommerce app provides a smooth shopping experience. With a user-friendly interface and seamless navigation, it's your go-to destination for online shopping.",
      demo: "https://gist-ai.vercel.app/",
      code: "https://github.com/dipayansarkar47/Gist.AI-Summarizer"
    },

    {
      id: 7,
      src: moviesApplication,
      desc: "Welcome to Movix, your ultimate movie database application. Explore a vast collection of films with detailed information at your fingertips. From plot summaries to cast details, Movix has everything you need to discover your next favorite movie.",
      demo: "https://gist-ai.vercel.app/",
      code: "https://github.com/dipayansarkar47/Gist.AI-Summarizer"
    },
    
    {
      id: 7,
      src: weatherApp,
      desc: "Introducing our weather app, designed to keep you informed and prepared. With real-time updates, intuitive design, and accurate forecasts, it's your go-to companion for staying ahead of the elements.",
      demo: "https://gist-ai.vercel.app/",
      code: "https://github.com/dipayansarkar47/Gist.AI-Summarizer"
    },
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white pb-16
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0' >
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg mb-4' style={{border:'1px solid #6B7280'}}>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
{/*                   
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button> */}
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects