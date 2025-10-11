"use client"
import React, { useRef, useState } from "react";
import { Image, Send, X } from "lucide-react";
import { useChatStore } from "@/store/useChatStore";
import { ChatStore } from "./types";
const MessageInput = () => {
    const [text, setText] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null)
    const {sendMessage} = useChatStore<ChatStore>;
  return (
    <div>
      input area
    </div>
  )
}

export default MessageInput
