import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ChevronRight } from 'lucide-react'


const AuthScreen = () => {
    const [email, setEmail] = useState('')
    const navigate=useNavigate()
    const handleFormSubmit=(e)=>
    {
        e.preventDefault()
        navigate('/signup?email='+email)
    }
  return (
    <div className='hero-bg relative'>
        {/* navbar */}
        <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
            <img src="/netflix-logo.png" alt="logo" className="w-54" />
            <Link to={"/login"} className='text-white bg-red-600 py-1 px-2 rounded hover:bg-red-700'>
                Sign In
            </Link>
        </header>

        {/* hero section */}

        <div className='flex flex-col items-center justify-center text-center py-40 max-w-6xl mx-auto text-white'>
            <h1 className='text-4xl md:text-6xlfont-bold mb-4'>Unlimited Movies, TV shows, and more.</h1>
            <p className='text-lg mb-4'>Watch anywhere, anytime with Netflix.</p> 
            <p className='mb-4'>Ready to watch? Enter your email to create or restart your membership</p>
            <form className='flex flex-col md:flex-row gap-4 w-1/2' onSubmit={handleFormSubmit}>
                <input type='email' id='email' name='email'  className=' p-2 rounded flex-1 bg-black/80 border border-gray-700 '  placeholder='you@example.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button className=' bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 rounded flex justify-center items-center hover:bg-red-700'>Get Started<ChevronRight className='size-8 md:size-10'/></button>
        
            </form>
            
        </div>
        {/* separator */}
        <div className="w-full h-1 bg-[#232323]" aria-hidden="true"></div>
            {/* 1st section */}
        <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                {/* left-side */}
                <div className='flex-1 text-center md:text-left' >
                    <h2 className=' text-4xl md:text-5xl font-extrabold mb-4'>Enjoy on your TV</h2>
                    <p className='text-lg md:text-xl'>
                        Watch on Smart TVs,PlayStation,Xbox,Chromecast,Apple TV Blue-ray players, and more.
                    </p>
                </div>
                {/* right-side */}
                <div className='flex-1 relative'>
                    
                    <video className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10' playsInline autoPlay={true} muted loop>
                    
                        <source src='/hero-vid.m4v' type='video/mp4' />
                    </video>
                    <img src='/tv.png' alt="tv image" className='mt-4 z-20 relative' />
                </div>
                
            </div>
            


        </div>
        {/* separator */}
        <div className="w-full h-1 bg-[#232323]" aria-hidden="true"></div>

            {/* 2nd section */}
        <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>

                {/* left-side */}
                <div className='flex-1 relative' >
                    <div className='relative'>
                        <img src='/stranger-things-lg.png' alt="stranger things image" className='mt-4' />
                    
                    <div className='flex items-center gap-2 absolute bottom-5 left-1/2 bg-black -translate-x-1/2 w-3/4 lg:w-1/2 h-25 border-slate-500 rounded-md px-2'>
                        <img src='/stranger-things-sm.png' alt="stranger things image" className='h-full' />
                    
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex flex-col gap-0'>
                            <span className='text-md lg:text-lg font-bold'>Stranger Things</span>
                            <span className='text-sm text-blue-500'>Downloading</span>
                        </div>
                        <img src='/download-icon.gif' alt="download icon" className='h-6 w-6' />
                    </div>
                    </div>
                    </div>
                </div>
                {/* right-side */}
                <div className='flex-1 text-center md:text-left text-center' >
                    <h2 className=' text-4xl md:text-5xl font-extrabold mb-4 text-balance'>Download your shows to watch offline</h2>
                    <p className='text-lg md:text-xl'>
                        Discover new films and series, watch in the comfort of your own home.
                    </p>
                </div>
            </div>
        </div>

        {/* separator */}
        <div className="w-full h-1 bg-[#232323]" aria-hidden="true"></div>
                {/* 3rd section */}
         <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                {/* left-side */}
                <div className='flex-1 text-center md:text-left' >
                    <h2 className=' text-4xl md:text-5xl font-extrabold mb-4'>Watch everywhere</h2>
                    <p className='text-lg md:text-xl'>
                       Stream unlimited movies and TV shows on your phone,tanlet,laptop,and TV. 
                    </p>
                </div>
                {/* right-side */}
                <div className='flex-1 relative overflow-hidden'>
                    <img src='/device-pile.png' alt="device image" className='mt-4 z-20 relative' />
                    
                    <video className='absolute top-2 left-1/2 -translate-x-1/2  h-4/6 z-10 max-w-[63%]' playsInline autoPlay={true} muted loop>
                    
                        <source src='/video-devices.m4v' type='video/mp4' />
                    </video>
                    
                </div>
                
            </div>
            
        </div>
        {/* separator */}
        <div className="w-full h-1 bg-[#232323]" aria-hidden="true"></div>
        {/* 4 th section */}
        <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row  px-4 md:px-2'>
                {/* left-side */}
                <div className='flex-1 relative overflow-hidden'>
                    <img src='/kids.png' alt="kids image" className='mt-4' />
                </div>
                <div className='flex-1 text-center md:text-left'>
                    <h2 className=' text-4xl md:text-5xl font-extrabold mb-4'>Create profiles for kids</h2>
                    <p className='text-lg md:text-xl'>
                        Send kids on advaentures with their favorite characters in a space made just for them-free with your membership
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthScreen
