import React from "react";
import { Users } from "lucide-react";
import  '../HideScrollBar.css'
const SidebarSkeleton = () => {
  const sekeletonContacts = Array(8).fill(null);
  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-300 ">
      {/* header */}
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6" />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
      </div>
      {/* skeleton contacts */}
      <div className="overflow-y-scroll scrollbar-hide w-full py-3">
        {sekeletonContacts.map((_, index) => (
          <div key={index} className="w-full p-3 flex items-center gap-3">
            {/* avtar */}
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton size-12 rounded-full" />
            </div>
            {/* user info for lg screen */}
            <div className="hidden lg:block text-left min-w-0 flex-col ">
              <div className="skeleton h-4 w-32 mb-2" />
              <div className="skeleton h-3 w-16" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
