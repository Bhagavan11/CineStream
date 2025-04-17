import { create } from 'zustand'
import toast from 'react-hot-toast'
import axios from 'axios' // ✅ Correct import

export const useAuthStore = create((set) => ({
  user: null,
  isSigningUp: false,
  isCheckingAuth:true,
  isLogingOut:false,
  isLogingIn:false,

  signup: async (credentials) => {
  set({ isSigningUp: true });
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/auth/signup",
      credentials,
      {
        withCredentials: true, // ✅ Allow cookies
      }
    );

    set({ user: response.data.user, isSigningUp: false });
    toast.success("Account created successfully");
    console.log(response.data);
  } catch (error) {
    console.log(error.response?.data?.message || error.message);
    toast.error(error.response?.data?.message || "An error occurred");
    set({ isSigningUp: false, user: null });
  }
},


  login: async (credentials) => {
    set({isLogingIn:true})
    try {
        const response=await axios.post("http://localhost:5000/api/v1/auth/login", credentials,{
            withCredentials:true,
        })
        set({user:response.data.user, isLogingIn:false})
    } catch (error) {
        console.log(error.response?.data?.message || error.message);
        toast.error(error.response?.data?.message || "An error occurred");
        set({isLogingIn:false,user: null});
        
    }
  },
  logout: async () => {
    set({ isLogingOut: true });
    try {
      await axios.post(
        "http://localhost:5000/api/v1/auth/logout",
        {},
        {
          withCredentials: true, // ✅ Allow cookies
        }
      );
      set({ user: null, isLogingOut: false });
      toast.success("Logged out successfully");
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || "An error occurred");
      set({ isLogingOut: false });
    }
  },
  authCheck: async () => {
  set({ isCheckingAuth: true });
  console.log("i am authcheck in front end"); // 👈 This should show
  try {
    const response = await axios.get("http://localhost:5000/api/v1/auth/authCheck",
        {
  withCredentials: true
}
    );
    console.log("Response:", response.data); // 👈 Also add this
    set({ user: response.data.user, isCheckingAuth: false });
  } catch (error) {
    console.log("Error in authCheck:", error); // 👈 And this
    // toast.error(error.response?.data?.message || "An error occurred");
    set({ user: null, isCheckingAuth: false });
  }
}
}))
