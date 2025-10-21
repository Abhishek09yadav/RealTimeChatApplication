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
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      return toast.error("please select an image file");
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };
  const handleSubmit = () => {};
  return (
    <div className="p-4 w-full">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative ">
            <Image
              src={imagePreview}
              alt="image"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700 "
            />
            <button
              onClick={removeImage}
              className="absolute hover:bg-red-400 hover:text-white -top-1.5 -right-1.5 w-5 h-5 rounded-full cursor-pointer bg-base-300 flex items-center justify-center"
            >
              <X className="size-3 " />
            </button>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 ">
        <div className="flex flex-1 gap-2">
          <input
            type="text"
            className="w-full input input-bordered rounded-lg input-sm sm:input-md "
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
