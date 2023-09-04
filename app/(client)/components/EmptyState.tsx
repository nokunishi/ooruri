const EmptyState = () => {
  return (
    <div
      className="min-w-10 relative h-screen flex justify-center
        items-center bg-gray-100"
    >
      <div className="text-center items-center flex flex-col">
        <h2 className="mt-2 text-2xl font-semibold text-gray-900">
          Select a chat or start a new converstion
        </h2>
      </div>
    </div>
  );
};

export default EmptyState;
