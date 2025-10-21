"use client";
import React, { useRef, useState } from "react";
import { Send, X } from "lucide-react";
import { CiImageOn } from "react-icons/ci";
import { useChatStore } from "@/store/useChatStore";
import Image from "next/image";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { sendMessage } = useChatStore();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      return toast.error("please select an image file");
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader?.result);
    };
    reader.readAsDataURL(file);
  };
  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };
  // const ha
  return (
    <div className="p-4 w-full">
      hello
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative ">
            <Image
              src={imagePreview}
              alt="image"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700 "
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageInput;
