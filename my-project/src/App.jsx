import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css'

function App() {
  return (
    <>
      <div className='mx-auto flex max-w-sm items-center gap-x-4 rounded-4xl bg-white p-6 shadow-2xl outline outline-black/5 dark:bg-slate-800'>
        <div>
          <img src={reactLogo} alt="React Logo" className='size-20 shrink-0' />
        </div>

        <div className='text-xl  font-medium text-black dark:text-white'>
          <h1>React</h1>
          <p className='text-gray-500 dark:text-gray-500'>React is a JavaScript library.</p>
        </div>
      </div>




      <div className='flex  gap-2 sm:flex-row sm:items-center sm:gap-2 sm:py-2 bg-blue-200 mt-10 justify-center mx-auto max-w-sm rounded-4xl p-6' >
        <div>

          <img
            src={viteLogo}
            className='size-20 shrink-0 rounded-full'
          />

        </div>
        <div>
          <p className='text-lg font-semibold text-bold'> Vite </p>
          <p className='font-medium text-gray-500'> Vite is frontend build tool</p>
        </div>
        <button
          className='rounded-full border border-purple-200 px-5 py-1.5 text-sm font-semibold text-purple-600 hover:bg-purple-50'
        >
          Get Started
        </button>
      </div>
    </>
  );
}
export default App;