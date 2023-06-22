import { createChart, ColorType, ISeriesApi } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';
export const Chart = ( props ) => {
    const {
        // data, 
        candleData,
        colors: {
			backgroundColor = 'white',
			lineColor = '#2962FF',
			textColor = 'black',
			areaTopColor = '#2962FF',
			areaBottomColor = 'rgba(41, 98, 255, 0.28)',
		} = {}
    } = props
    const chartContainerRef = useRef<HTMLDivElement>(null)
    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth });
            }
            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: {type: ColorType.Solid, color: backgroundColor},
                    textColor
                },
                width: chartContainerRef.current.clientWidth,
                height:300,
            });
            chart.timeScale().fitContent();
            // const newSeries:ISeriesApi<'Area'> = chart.addAreaSeries({lineColor, topColor: areaTopColor, bottomColor: areaBottomColor});
            // newSeries.setData(data);
            const candlestickSeries:ISeriesApi<'Candlestick'> = chart.addCandlestickSeries({
                upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
                wickUpColor: '#26a69a', wickDownColor: '#ef5350',
            })
            candlestickSeries.setData(candleData)
            window.addEventListener('resize', handleResize)
            return () => {
                window.removeEventListener('resize', handleResize);
                chart.remove()
            }
        },
        [candleData, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    )
    return(<div ref = {chartContainerRef}></div>)
}