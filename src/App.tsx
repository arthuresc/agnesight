import { useEffect, useState } from 'react'
import './App.css'
import EmailIcon from './Assets/Icons/Svg/Email'
import useFetch from './Hooks/useFetch'
import useBinanceAnnouncementsAPI from './Hooks/useBinanceAnnouncementsAPI'

function App() {
  // const [count, setCount] = useState(0)

  
  // const {data: dataBinance, error: errroBinance, loading: loadingBinance, options:optionBinance } = useBinanceAnnouncementsAPI()
  
  // console.log(dataBinance, ':turtle:')
  
  const { currenciesData: dataBinance, error, loading } = useBinanceAnnouncementsAPI();

  console.log(dataBinance, '🦜')
  // useEffect(() => {
  // }, [])
  

  return (
    <>
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-neutral-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        {/* <img className="size-12 shrink-0 " src="./src/assets/images/svg/email.svg" alt="ChitChat Logo" />  */}
        <EmailIcon state="warning" />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
          <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
        </div>
      </div>
    </>
  )
}

export default App;

