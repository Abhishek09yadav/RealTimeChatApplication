const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex flex-col overflow-y-auto p-4 space-y-6">
      {skeletonMessages.map((_, idx) => (
        <div key={idx} className="flex items-start space-x-3">
          <div className="avatar">
            <div className="size-10 rounded-full">
              <div className="skeleton w-full h-full rounded-full" />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="skeleton h-4 w-16" />
            <div className="skeleton h-16 w-full rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
