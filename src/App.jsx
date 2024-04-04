
import './App.css'
import { useStore } from './store'

function App() {
  
  const count= useStore((state)=>state.count);
  const Increment= useStore((state)=>state.Increment);
  const Decrement= useStore((state)=>state.Decrement);
  const Reset= useStore((state)=>state.Reset);
  const IncrementAsync = useStore((state)=>state.IncrementAsync);
  const DecrementAsync = useStore((state)=>state.DecrementAsync);

  // const {count,Increment,Decrement, Reset ,IncrementAsync , DecrementAsync}= useStore((state)=>state);

  return (
    <div className='flex flex-col items-center justify-around gap-16  p-5 md:p-20 '>

      <h1 className='text-center  text-2xl md:text-[2.5rem] font-bold gradientText '>Counter App with using Zustand</h1>

      <h2 className='font-semibold text-3xl text-black relative'>Count : <span className={`text-red-500 absolute ${count===0?"animate-bounce":""} font-bold ml-3 text-4xl`}> {count}</span></h2>

      <div className='flex flex-col lg:flex-row text-sm md:text-lg  items-center justify-center gap-4 md:gap-8 tracking-wide'>

          <button className='px-3 py-1 bg-indigo-500 text-white rounded active:scale-90 hover:bg-green-500 w-24 md:w-36' onClick={()=>Increment()}>Increment</button>

          <button className='px-3 py-1 bg-indigo-500 text-white rounded active:scale-90 hover:bg-gray-500  md:w-36' onClick={()=>Reset()}>Reset</button>

          <button className='px-3 py-1 bg-indigo-500 text-white rounded active:scale-90 hover:bg-red-500  md:w-36' onClick={()=>Decrement()}>Decrement</button>
       
      </div>

      <div className='flex flex-col lg:flex-row text-sm md:text-lg  items-center justify-center gap-4 md:gap-8 tracking-wide'>

          <button className='px-3 py-1 bg-indigo-500 text-white rounded active:scale-90 hover:bg-red-500  md:w-40' onClick={()=>IncrementAsync()}>IncrementAsync</button>
          <button className='px-3 py-1 bg-indigo-500 text-white rounded active:scale-90 hover:bg-red-500  md:w-40' onClick={()=>DecrementAsync()}>DecrementAsync</button>
       
      </div>
      
    </div>
  )
}

export default App
