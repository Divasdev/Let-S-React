export function FAQitem() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
   
      <div className="border border-gray-100 rounded-2xl shadow-sm px-4">
        <button className="flex items-center justify-between w-full py-5">
          <span className="text-left font-bold text-gray-900">
            Where do you get your flight data?
          </span>

          <span className="text-xl text-gray-500">↓</span>
        </button>

      </div>


      <div className="border border-gray-200 rounded-2xl shadow-sm px-4">
        <button className="flex items-center justify-between w-full py-5">
          <span className="text-left font-bold text-gray-900">
            How accurate is the delay prediction?
          </span>

          <span className="text-xl text-gray-500">↓</span>
        </button>
      </div>

  
    </div>
  );
}