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
  const { data: dataBinance, error, loading } = useBinanceAnnouncementsAPI();

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
  // Se ele não cai em um desses tratamentos de erro ou do loading ele só quebra quando não identifica o retorno do dado
  if (!dataBinance || !dataBinance.data || dataBinance.data.length === 0) {
    return (
      <div className="text-center text-2xl font-bold text-gray-500 dark:text-gray-400">
        No data available
      </div>
    );
  }
  if (!dataBinance.success) {
    console.error("Error fetching data:", dataBinance);
    return (
      <div className="text-center text-2xl font-bold text-gray-500 dark:text-gray-400">
        Status: {dataBinance.message}
      </div>
    );
  }
  console.log(typeof dataBinance.data, "🦜");

  return (
    <div className="flex min-h-screen flex-row flex-wrap items-center justify-center bg-gray-100 p-4 dark:bg-neutral-900 gap-4">
      {dataBinance.data &&
        dataBinance.data.body.data.map((item: any) => {
          //.footer.title === "New Listing"
          if (item) {
            return (
              <div
                key={item.id}
                className="mx-auto flex max-w-sm items-center rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-neutral-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
              >
                <EmailIcon state="warning" />
                <div>
                  <div className="text-xl font-medium text-black dark:text-white">
                    {item.symbol}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Publicado:{" "}
                    {new Date(item.date_added).toLocaleDateString("pt-BR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      timeZone: "America/Sao_Paulo",
                    })}
                  </p>
                </div>
              </div>
            );
          } else {
            return ''
          }
        })}
    </div>
  );
}

export default App;
