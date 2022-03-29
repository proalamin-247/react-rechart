import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                const phoneData = loadedData.map(phone => {
                    const parts = phone.slug.split('-');
                    const ph = {
                        name: parts[0],
                        price: parseInt(parts[1])
                    }
                    return ph;
                });
                setPhones(phoneData);
                console.log(phoneData);
            })
    }, [])
    return (
        // <ResponsiveContainer width="100%" height="100%">
        <BarChart width={800} height={400} data={phones}>
            <Bar dataKey={'price'} fill="#8884d8" />
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend/>
        </BarChart>
        // </ResponsiveContainer>
    );
};

export default SpecialChar;