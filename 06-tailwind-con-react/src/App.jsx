import './index.css';
import Card from './components/Card';

function App() {

  return (
    <>
      <div className='flex -mx-2 flex-wrap mt-10'>
        <div className='w-full sm:w-1/2 md:w-1/3 px-2'>
          <Card photo='https://picsum.photos/900' />
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 px-2'>
          <Card photo='https://picsum.photos/900' />
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 px-2'>
          <Card photo='https://picsum.photos/900' />
        </div>
      </div>
    </>
  )
}

export default App
