import React from "react";
import {
    PieChart, Pie, Legend, Tooltip,
} from 'recharts';

export default function PieComponent(props) {
    console.log("props.users : ", props.users);
    let users = props.users;
    let pieData = [];
    users.map(u=> {
        pieData.push({name: "Bug "+u.id, value: u.NOS})
    });

    return (
        <PieChart width={400} height={400}>
            <Pie dataKey="value" isAnimationActive={false} data={pieData} cx={200} cy={200} outerRadius={80} fill="#4EF908" label />
            <Tooltip />
        </PieChart>
    );
}