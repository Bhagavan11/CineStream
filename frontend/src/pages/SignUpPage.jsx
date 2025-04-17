import {useState} from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authUser';
const SignUpPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const emailValue = searchParams.get('email');
    const [email,setEmail]=useState(emailValue||'') 
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
   const {signup}= useAuthStore()
    const handleSignUp=(e)=>{
        e.preventDefault()
        signup({email,username,password})
        // API call to signup user
        console.log({email,username,password})
    }
  return (
    <div className='h-screen w-full hero-bg'>
        <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
            <Link to="/">
                <img src="/netflix-logo.png" alt="logo" className="w-54" />
            </Link>
        </header>
        
        <div className='flex justify-center items-center mt-20 mx-3'>
            <div className='w-full max-w-md p-8 space-y-6 bg-black/60 round-lg shadow-md'>
                <h1 className='text-center text-white text-2xl font-bold mb-4'>Sign Up</h1>
                <form className='space-y-4' onSubmit={handleSignUp}>
                    <div>
                        <label htmlFor='email' className='text-sm font-medium text-gray-300 block'>Email</label>
                        <input type='email' id='email' name='email'  className='w-full px-3 py-2 rounded-md border-gray-700 focus:outline-none focus:ring bg-transparent text-white'  placeholder='you@example.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor='username' className='text-sm font-medium text-gray-300 block'>username</label>
                        <input type='text' id='username' name='username'  className='w-full px-3 py-2 rounded-md border-gray-700 focus:outline-none focus:ring bg-transparent text-white'  placeholder='bhagavan' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                     <div>
                        <label htmlFor='password' className='text-sm font-medium text-gray-300 block'>password</label>
                        <input type='password' id='password' name='password'  className='w-full px-3 py-2 rounded-md border-gray-700 focus:outline-none focus:ring bg-transparent text-white'  placeholder='**********' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <button className='w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700'>Sign Up</button>
        
                </form>
                <div className='text-center text-gray-400'>
                    Already a member? {" "}<Link to='/login' className='text-red-500 hover:underline'>Login</Link> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage
