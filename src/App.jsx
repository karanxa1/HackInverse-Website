import './App.css'
import Calender from './Calender.jsx'
import AboutSection from './AboutSection.jsx'
import Sponsors from './Sponsors.jsx'

function App() {

  return (
   <>
    <div className='w-full flex items-center justify-center bg-[#222222] md:bg-[#484848]'>
      
  <div className='bg-[#222222] text-white w-full md:max-w-3xl mx-auto flex flex-col items-center px-6 py-12'>
    <Calender/>
    <AboutSection/>
    <Sponsors/>
    </div>
   </div>
  </>
  )
}

export default App
