import { useEffect, useState } from "react";
import "./App.css";
import EmailIcon from "./Assets/Icons/Svg/Email";
// import useFetch from './Hooks/useFetch'
import useBinanceAnnouncementsAPI from "./Hooks/useBinanceAnnouncementsAPI";
import type BinanceMarketNoticesData from "binance-api";

function App() {
  // const [count, setCount] = useState(0)

  // const {data: dataBinance, error: erroBinance, loading: loadingBinance, options:optionBinance } = useBinanceAnnouncementsAPI()

  // console.log(dataBinance, ':turtle:')
  // debugger;
  const {
    data: dataBinance,
    currenciesData,
    error,
    loading,
  } = useBinanceAnnouncementsAPI();

  // useEffect(() => {
  // }, [])

  if (loading) {
    return (
      <div className="text-center text-2xl font-bold text-gray-500 dark:text-gray-400">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center text-2xl font-bold text-red-500">
        Error: {error.message}
      </div>
    );
  }
  // Limpando para ver se ele passa para a impressao dos dados, está correto porem dando erro de não achar o dataBinance
  // if (!dataBinance || !dataBinance.data || dataBinance.data.length === 0) {
  //   return (
  //     <div className="text-center text-2xl font-bold text-gray-500 dark:text-gray-400">
  //       No data available
  //     </div>
  //   );
  // }
  // if (!dataBinance.success) {
  //   console.error("Error fetching data:", dataBinance);
  //   return (
  //     <div className="text-center text-2xl font-bold text-gray-500 dark:text-gray-400">
  //       Status: {dataBinance.message}
  //     </div>
  //   );
  // }
  // console.log(typeof dataBinance.data[0].id, "🦜");

  return (
    <>
      {currenciesData &&
        currenciesData.map((item:any) => {
          return (
            <div
              key={item.id}
              className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-neutral-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
            >
              <EmailIcon state="warning" />
              <div>
                <div className="text-xl font-medium text-black dark:text-white">
                  {item.title}
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Publicado: {new Date(item.time).toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default App;
