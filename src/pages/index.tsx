import Layout from "src/components/Layout"
import { Chart } from "src/components/Chart"
import { Table } from "src/components/Table"
export default function MainPage(){
  // const initialData = [
  //   { time: '2018-12-22', value: 32.51 },
  //   { time: '2018-12-23', value: 31.11 },
  //   { time: '2018-12-24', value: 27.02 },
  //   { time: '2018-12-25', value: 27.32 },
  //   { time: '2018-12-26', value: 25.17 },
  //   { time: '2018-12-27', value: 28.89 },
  //   { time: '2018-12-28', value: 25.46 },
  //   { time: '2018-12-29', value: 23.92 },
  //   { time: '2018-12-30', value: 22.68 },
  //   { time: '2018-12-31', value: 22.67 },
  // ];
  const candleInitialData = [
    { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
    { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
    { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
    { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
    { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
    { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
    { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
    { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
    { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
    { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },  
  ]
  return (
      <Layout title = "Home">
        <h1 className="mb-[8px]"></h1>
        <div className="container  xl:max-w-[1140px] xxl:max-w-[1320px]  h-100 overflow-hidden">
          <Chart className = "w-100" candleData = {candleInitialData} />  
          <div className="flex flex-row">
            <Table title = "Sell Orders" order_type="Buy Tao" ></Table>
            <Table title = "Buy Orders" order_type="Sell Tao"></Table>
          </div>
          <div className="flex justify-center items-center box-border p-[5px]">
            <input type="checkbox" className="ml-[-1.5em] pl-[1.5em] w-[1em] h-[1em] rounded-md focus:outline-none border-[#86b7fe] focus:shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] "/>
            <label className="text-[1rem] text-[#6c757d] font-normal ml-[15px]">Auto Refresh</label>
          </div>
        </div>
      </Layout>
  )
}