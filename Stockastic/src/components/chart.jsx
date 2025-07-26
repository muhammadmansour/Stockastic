import ReactApexChart from "react-apexcharts";
import { useState, useEffect } from "react";

function Chart({ chart_data }) {

	console.log(chart_data)

	const [series, setSeries] = useState([]);
	const [options, setOptions] = useState({});
	const [growthRate, setGrowthRate] = useState()

	useEffect(() => {
		if (chart_data) {

		setSeries([{
  name: chart_data.label,
  data: [
    Number(chart_data.current) / 1_000_000,
    Number(chart_data.previous) / 1_000_000
  ]
}]);

setOptions({
  chart: {
    height: 300,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: { position: 'top' }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: (val) => val.toFixed(2) + 'M',
    offsetY: -20,
    style: { fontSize: '12px', colors: ["#304758"] }
  },
  xaxis: {
    categories: ["Current Year", "Previous Year"],
    position: 'top',
    axisBorder: { show: false },
    axisTicks: { show: false },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#f4f8fd',
          colorTo: '#f4f8fd',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: { enabled: true }
  },
  yaxis: {
    labels: {
      formatter: (val) => val.toFixed(2) + 'M'
    }
  },
  tooltip: {
    y: {
      formatter: (val) => val.toFixed(2) + 'M'
    }
  }
});


		}
	}, [chart_data]);

	return (
		<div className="bg-white w-[280px] shadow-2xl rounded-2xl mt-5">
			<p className={`m-auto  text-center font-semibold ${chart_data?.growth_rate > 0 ? 'text-green-700' : 'text-red-600'}`}>
				Growth Rate {chart_data?.growth_rate}%
			</p>
			<ReactApexChart options={options} series={series} type="bar" height={350} />
			<p className="font-sans  text-gray-600 font-semibold text-[13px] mb-3 text-center p-2">
				{chart_data.label}
			</p>
		</div>
	);
}

export default Chart;
