import { useState } from 'react'
import { useAuthStore } from '../store/authUser'
import { Link } from 'react-router-dom'
import { Menu, Search, LogOut } from 'lucide-react'
import { useContentStore } from '../store/content'

const Navbar = () => {
    const [isMobilemenuOpen, setIsMobileMenuOpen] = useState(false)
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobilemenuOpen)
    const { user, logout } = useAuthStore()
    const {contentType, setContentType } = useContentStore()
    console.log("contentType", contentType)

    return (
        <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
            <div className='flex items-center gap-10 z-50'>
                <Link to='/'>
                    <img src='/netflix-logo.png' alt='logo' className='w-32 sm:w-40' />
                </Link>

                {/* Desktop nav bar */}
                <div className='hidden sm:flex gap-2 items-center'>
                    <Link to='/' className='text-white text-xl font-bold hover:underline' onClick={()=>{setContentType("movie")}}>
                        Movies
                    </Link>
                    <Link to='/' className='text-white text-xl font-bold hover:underline'onClick={()=>{setContentType("tv")}}>
                        TV Shows
                    </Link>
                    <Link to='/history' className='text-white text-xl font-bold hover:underline' onClick={()=>{setContentType("movie")}}>
                        Search History
                    </Link>
                </div>
            </div>

            <div className='flex gap-2 items-center z-50'>
                <Link to='/search'>
                    <Search className='text-white cursor-pointer size-6' />
                </Link>
                <img src={user.image} alt='Avatar' className='h-8 rounded cursor-pointer' />
                <LogOut className='size-6 cursor-pointer text-white' onClick={logout} />
                <div className='sm:hidden'>
                    <Menu className='size-6 cursor-pointer text-white' onClick={toggleMobileMenu} />
                </div>
            </div>

            {/* Mobile menu */}
            {isMobilemenuOpen && (
                <div className='w-full sm:hidden mt-4 z-50 bg-black rounded border-gray-800'>
                    <Link to='/' className='block hover:underline p-3 text-white' onClick={toggleMobileMenu}>
                        Movies
                    </Link>
                    <Link to='/' className='block hover:underline p-3 text-white' onClick={toggleMobileMenu}>
                        TV Shows
                    </Link>
                    <Link to='/history' className='block hover:underline p-3 text-white' onClick={toggleMobileMenu}>
                        Search History
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Navbar
