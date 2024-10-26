"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import React from 'react';
import Link from "next/link";

export default function Graph() {
    const data = [
        { name: '0', Minutes: 30, pv: 2400, amt: 2400 },
        { name: '1', Minutes: 90, pv: 1398, amt: 2210 },
        { name: '2', Minutes: 130, pv: 9800, amt: 2290 },
        { name: '3', Minutes: 178, pv: 3908, amt: 2000 },
        { name: '4', Minutes: 201, pv: 4800, amt: 2181 },
        { name: '5', Minutes: 239, pv: 3800, amt: 2500 },
        { name: '6', Minutes: 349, pv: 4300, amt: 2100 }
    ];

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-2 w-200 bg-gray-800 text-center text-white font-mono">
            <Link href="/">Listening Time over days</Link>
            <LineChart width={400} height={400} data={data}>
                <CartesianGrid stroke="#FFFFFF" />
                <XAxis dataKey="name" label={{ value: 'Days', position: 'insideBottom', offset: 0 }} stroke="#FFFFFF" />
                <YAxis label={{ value: 'Listening Time (minutes)', angle: -90, position: 'insideLeft' }} stroke="#FFFFFF"/>
                <Tooltip />
                <Line type="monotone" dataKey="Minutes" stroke="#808080" />
            </LineChart>
        </div>
    );
}