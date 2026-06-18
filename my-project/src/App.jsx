import reactLogo from './assets/react.svg';

import './App.css'

function App() {
  return (
    <>
    <div className='mx-auto flex max-w-sm items-center gap-x-4 rounded-4xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800'>
      <div>
        <img src={reactLogo} alt="React Logo"  className='size-20 shrink-0'/>
      </div>

      <div className='text-xl  font-medium text-black dark:text-white'>
        <h1>React</h1>
        <p className='text-gray-500 dark:text-gray-500'>React is a JavaScript library.</p>
      </div>
    </div>
    </>
  );
}
export default App;