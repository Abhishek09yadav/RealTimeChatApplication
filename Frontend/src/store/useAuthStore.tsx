import { log } from "console";
import {create} from "zustand";
import { axiosInstance } from "../lib/axios";
export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn:false,
  isupdatingProfile: false,
   isCheckingAuth: true,
 checkAuth: async() =>{
  try{
   const res = axiosInstance.get('/auth/check');
   set({authUser: res?.data,})
  }
  catch(error){
    
    console.log('error',error);
    
  }
 }
}));