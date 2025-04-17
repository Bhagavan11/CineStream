import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route } from "react-router-dom";
import Fotter from "./components/Fotter";
import { Toaster } from "react-hot-toast"; // ✅ Correct way
import { useAuthStore } from "./store/authUser";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import WatchPage from "./pages/WatchPage";
import SearchPage from "./pages/SearchPage";
import HistoryPage from "./pages/SearchHistoryPage";
import SearchHistoryPage from "./pages/SearchHistoryPage";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  const { user,isCheckingAuth,authCheck} =useAuthStore()
 
  useEffect(()=>{
    
    authCheck()
  },[authCheck])
  if(isCheckingAuth)
  {
    return(
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 w-10 h-10"></Loader>
        </div>
        

      </div>
    )
  }
  return(
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={!user?<LoginPage/>:<HomePage/> }/>
      <Route path="/signup" element={!user?<SignUpPage/>:<HomePage/>} />
      <Route path="/watch/:id" element={!user?<LoginPage/>:<WatchPage/>} />
      <Route path="/search" element={!user?<LoginPage/>:<SearchPage/>} />
       <Route path="/history" element={!user?<LoginPage/>:<SearchHistoryPage/>} />
       <Route path="/*" element={<NotFoundPage/>}/>
       
    </Routes>
    <Fotter />
    <Toaster/>
    </>
  )
}

export default App
