"use client"
import React, { useRef, useState } from "react";
import { Image, Send, X } from "lucide-react";
import { useChatStore } from "@/store/useChatStore";

const MessageInput = () => {
    const [text, setText] = useState("");
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { sendMessage } = useChatStore();
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {}
    const removeImage = () =>{}
  return (
    <div>
      input area
    </div>
  )
}

export default MessageInput
