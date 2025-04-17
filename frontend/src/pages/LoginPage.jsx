import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authUser'
const LoginPage = () => {
    const [email,setEmail]=useState('')
    
    const [password,setPassword]=useState('')
    const {login}=useAuthStore()
    const handleLogin=(e)=>{
        e.preventDefault()
        
       
        // API call to signup user
        console.log({email,password})
         login({email,password})
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
                <h1 className='text-center text-white text-2xl font-bold mb-4'>Login</h1>
                <form className='space-y-4' onSubmit={handleLogin}>
                    <div>
                        <label htmlFor='email' className='text-sm font-medium text-gray-300 block'>Email</label>
                        <input type='email' id='email' name='email'  className='w-full px-3 py-2 rounded-md border-gray-700 focus:outline-none focus:ring bg-transparent text-white'  placeholder='you@example.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                   
                     <div>
                        <label htmlFor='password' className='text-sm font-medium text-gray-300 block'>password</label>
                        <input type='password' id='password' name='password'  className='w-full px-3 py-2 rounded-md border-gray-700 focus:outline-none focus:ring bg-transparent text-white'  placeholder='**********' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <button className='w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700'>Login</button>
        
                </form>
                <div className='text-center text-gray-400'>
                    Don't have an account? {" "}<Link to='/signup' className='text-red-500 hover:underline'>signup</Link> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
