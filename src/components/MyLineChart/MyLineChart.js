import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            name: 'Product A',
            price: 4000,
            selles: 2400,
            amt: 2400,
        },
        {
            name: 'Product B',
            price: 3000,
            selles: 1398,
            amt: 2210,
        },
        {
            name: 'Product C',
            price: 2000,
            selles: 4800,
            amt: 2290,
        },
        {
            name: 'Product D',
            price: 2780,
            selles: 3908,
            amt: 2000,
        },
        {
            name: 'Product E',
            price: 1890,
            selles: 4800,
            amt: 2181,
        },
        {
            name: 'Product F',
            price: 2390,
            selles: 3800,
            amt: 2500,
        },
        {
            name: 'Product G',
            price: 3490,
            selles: 4300,
            amt: 2100,
        },
    ];


    return (
        <LineChart width={800} height={500} data={data}>
            <Line dataKey={'price'}></Line>
            <Line dataKey={'selles'}></Line>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </LineChart>
    );
};

export default MyLineChart;