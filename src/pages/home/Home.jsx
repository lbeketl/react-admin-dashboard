import React from 'react'
import './home.css'
import { userData } from '../../dummyData';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import WidgetSm from '../../components/widgetSm/widgetSm';
import WidgetLg from '../../components/widgetLg/widgetLg';
export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title='User Analystics' grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
