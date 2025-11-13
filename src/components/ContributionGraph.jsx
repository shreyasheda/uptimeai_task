import React, { useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import Plot from 'react-plotly.js';
import '../styles/ContributionGraph.css';

export default function ContributionGraph({ username }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
			.then((res) => res.json())
			.then((d) => setData(d.contributions));
	}, [username]);

	const option = {
		tooltip: {},
		visualMap: {
			min: 0,
			max: 20,
			orient: 'horizontal',
			left: 'center',
			bottom: 20,
			inRange: {
				color: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
			},
		},
		calendar: { range: '2025' },
		series: [
			{
				type: 'heatmap',
				coordinateSystem: 'calendar',
				data: data.map((c) => [c.date, c.count]),
			},
		],
	};

	return (
		<div className="contribution-graph">
			<h3>Contributions</h3>
			<div style={{width: '100%' }}>
				<ReactEcharts option={option} style={{ height: 300, width: '100%' }} />
			</div>
		</div>
	);
}

