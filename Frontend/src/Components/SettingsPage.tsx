"use client"
import React from 'react'
import { useAuthStore } from "@/store/useAuthStore";

const settingsPage = () => {
      const { authUser } = useAuthStore();
  
  return (
    <div>settingsPage</div>
  )
}

export default settingsPage