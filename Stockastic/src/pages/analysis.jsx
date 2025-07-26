import ApexCharts from "apexcharts";
import { useState, useEffect } from "react";

import Chart from "../components/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { TbReportAnalytics } from "react-icons/tb";


import { FaBuilding } from "react-icons/fa6";
import { TrendingUp, Calendar, DollarSign, BarChart3, PieChart, ChevronDown, Building2, Globe, Users, Target } from 'lucide-react';
import Spinner from "../components/spinner";

import { lazy, Suspense } from "react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import AnalysisLoadingModal from "../components/modals/analysisLoading";
import { IoCloseSharp } from "react-icons/io5";
import { FaFileUpload } from "react-icons/fa";
import axios from "axios";
import QuotaExceededModal from "../components/modals/quotaExceeded";
const apiUrl = import.meta.env.VITE_API_URL;





function Analysis() {

	const [selectedStatement, setSelectedStatement] = useState(null);
	const [loading, setLoading] = useState(true)

	const [analysisiSpinner, setAnalysisSpinner] = useState(false)

	const [sentFile, setFile] = useState()
	const [data, setData] = useState([])
	const [quotaModal, setQuotModal] = useState("hidden")


	const fileChange = (e) => {
		const file = e.target.files[0]
		if (file) {
			setFile(file)
		}
		console.log(file)
	}


	function formatMarkdownToReadable(text) {
		const lines = text.split('\n');

		const formatted = lines
			.filter(line => line.trim() !== '' && !line.startsWith('```')) // Skip empty lines & ```markdown
			.map(line => {
				if (/^##\s/.test(line)) {
					// Main section like "## 1. ..."
					const cleanLine = line.replace(/^##\s*/, '').trim();
					return `<p><b>${cleanLine}</b></p>`;
				} else if (/^###\s/.test(line)) {
					// Sub-section like "### 1.1. ..."
					const cleanLine = line.replace(/^###\s*/, '').trim();
					return `<p style="font-weight: 600;">${cleanLine}</p>`;
				} else {
					// Normal paragraph
					return `<p>${line.trim()}</p>`;
				}
			})
			.join('\n');

		return formatted;
	}



	const financialSummery = formatMarkdownToReadable(
		data?.raw_agent_results?.financial_summary?.data || ''
	);

	const notesSummery = formatMarkdownToReadable(
		data?.raw_agent_results?.notes_analysis?.data || ''
	);

	const financialStatements = data?.raw_agent_results?.data_extraction?.data?.financial_statements || {};

	const financialStatementsArray = Object.entries(financialStatements);



	const handleSelectChange = (e) => {
		const [mainKey, subKey] = e.target.value.split('__');

		const selectedData = financialStatements[mainKey]?.[subKey];

		if (selectedData) {
			const details = selectedData.details ?? null;
			const overall = selectedData.overall_comparison ?? null;


			setSelectedStatement({
				mainKey,
				subKey,

				details,
				overall,
			});
		} else {
			const growth_rate = selectedData.growth_rate ?? null;
			setSelectedStatement({
				mainKey,
				subKey,

				details: null,
				overall: null,
			});
		}
	};




	const formatTitle = (str) =>
		str.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());



	if (document.getElementById("column-chart") && typeof ApexCharts !== 'undefined') {
		const chart = new ApexCharts(document.getElementById("column-chart"), options);
		chart.render();
	}








	const detailsChartData = selectedStatement?.details
		? Object.entries(selectedStatement.details).map(([label, value]) => ({
			label,
			current: value.current_year,
			previous: value.previous_year,
			growth_rate: value.growth_rate
		}))
		: [];


	const overallChartData = selectedStatement?.overall
		? [{
			label: 'Overall',
			current: selectedStatement.overall.current_year,
			previous: selectedStatement.overall.previous_year,
			growth_rate: selectedStatement.overall.growth_rate
		}]
		: [];

	setTimeout(() => {
		setLoading(false)
	}, 2000);

	if (loading) return <Spinner />




	const handleSubmit = (e) => {
		e.preventDefault();

		axios.get(`https://authapi.stockastic.app/api/quota-check`, {
			withCredentials: true,
		})
			.then(function (response) {
				const formData = new FormData();


				formData.append('file', sentFile);

				setAnalysisSpinner(true);
				axios.post("https://analysisapi.stockastic.app/analyze", formData, {
					auth: {
						username: 'admin',
						password: 'Admin@1310'
					},

				})
					.then(res => {
						setData(res.data.result)


						axios.get(`https://authapi.stockastic.app/api/quota-update`, {
							withCredentials: true,
						}).then(res => {
							console.log(res)
						})


					}
					)


					.catch(err => {
						console.error(err)
					})
					.finally(() => setAnalysisSpinner(false))

			})
			.catch(function (error) {
				if (error.response.data.statusCode === "429") {
					setQuotModal("fixed")
					return
				}


			})





	};


	return (
		<div className="text-black w-full ">

			{analysisiSpinner && <AnalysisLoadingModal />}
			<QuotaExceededModal quotaModal={quotaModal} setQuotModal={setQuotModal} />


			{sentFile ? (

				<div className="flex flex-row  justify-center mt-20">

					<div className="border items-center h-12 text-center flex  border-gray-300 shadow-md font-bold w-fit p-2 rounded-l-2xl bg-white">
						<p>{sentFile.name}</p>
						<IoCloseSharp onClick={() => setFile("")} color="black" />

					</div>
					<div>

						<button
							onClick={(e, file) => handleSubmit(e, file)}

							type="submit"
							className="w-35 flex items-center justify-center h-12 gap-2 px-4 py-3 rounded-r-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium shadow-sm hover:from-blue-700  rounded-0 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
						>

							Confirm
							<FaFileUpload size="20" color="white" />


						</button>
					</div>
				</div>



			) : (
				<div class="flex items-center justify-center w-[60%] m-auto mt-10">
					<label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-200 dark:bg-white-700 hover:bg-gray-100 dark:border-gray-300 dark:hover:border-gray-300 dark:hover:bg-gray-200">
						<div class="flex flex-col items-center justify-center pt-5 pb-6">
							<svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
							</svg>
							<p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
							<p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
						</div>
						<input id="dropzone-file" onChange={fileChange} type="file" class="hidden" />
					</label>
				</div>

			)}



			{data.length !== 0 && <>

				<div className="mt-20">
					<button type="button" class="bg-white border flex items-center text-center m-auto mb-10 dark:!border-gray-300 text-gray-500 !border-gray-400 dark:!bg-white">
						<svg class="w-6 h-6 text-gray-800 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01" />
						</svg>

						Download Report
					</button>
					<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8 m-auto w-[80%]">


						<div className="flex items-center gap-3 mb-6">
							<div className="p-2 bg-blue-50 rounded-lg">
								<Globe className="w-6 h-6 text-blue-600" />
							</div>
							<h2 className="text-2xl font-bold text-gray-900">Company Overview</h2>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="space-y-2">
								<div className="flex items-center gap-2">
									<Building2 className="w-5 h-5 text-gray-500" />
									<span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Company</span>
								</div>
								<p className="text-xl font-semibold text-gray-900">{data.company_information.company_name}</p>
							</div>

							<div className="space-y-2">
								<div className="flex items-center gap-2">
									<Calendar className="w-5 h-5 text-gray-500" />
									<span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Period</span>
								</div>
								<p className="text-xl font-semibold text-gray-900">{data.company_information.reporting_period}</p>
							</div>

							<div className="space-y-2">
								<div className="flex items-center gap-2">
									<DollarSign className="w-5 h-5 text-gray-500" />
									<span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Currency</span>
								</div>
								<p className="text-xl font-semibold text-gray-900">{data.company_information.currency}</p>
							</div>
						</div>
					</div>

					<div className="bg-white flex flex-row justify-between rounded-xl shadow-sm border border-gray-100 p-8 mb-8 m-auto w-[80%]">
						<div className="flex items-center gap-3">
							<div className="p-2 bg-indigo-50 rounded-lg">
								<BarChart3 className="w-5 h-5 text-indigo-600" />
							</div>
							<h2 className="text-xl font-semibold text-gray-900">Financial Analytics</h2>
						</div>
						<div>
							<select
								id="financial-statements"
								onChange={handleSelectChange}
								className="bg-gray-50 w-[40%] mt-3 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg block m-auto p-2.5"
							>
								<option value="">Select Metric</option>
								{financialStatementsArray.flatMap(([mainKey, sections]) =>
									Object.keys(sections).map((subKey) => (
										<option key={`${mainKey}-${subKey}`} value={`${mainKey}__${subKey}`}>
											{`${formatTitle(mainKey)} - ${formatTitle(subKey)}`}
										</option>
									))
								)}
							</select>


						</div>


					</div>




					<div>

						<div className="flex flex-row space-x-2 m-auto text-center justify-center">
							<h4 className="h-fit font-semibold">{selectedStatement?.mainKey?.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}</h4>
							<h4>{selectedStatement?.subKey?.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}</h4>
						</div>


						<div className="bg-white flex flex-row justify-between rounded-xl shadow-sm border border-gray-100 p-8 mb-8 m-auto w-[80%]">




							<div class="grid grid-cols-2  md:grid-cols-2   lg:grid-cols-4  gap-4 w-[80%] m-auto">
								{detailsChartData?.map((o, idx) => (
									<Chart key={`details-${idx}`} chart_data={o} />
								))}

								{overallChartData?.map((o, idx) => (
									<Chart key={`overall-${idx}`} chart_data={o} />
								))}

							</div>
							<div id="html-dist"></div>
						</div>
					</div>


				</div>


				<div className="w-[80%] m-auto mb-10 mt-10 bg-white dark:bg-white">
					<Accordion className="bg-white dark:bg-white border !border-gray-300">
						<AccordionPanel>
							<AccordionTitle className="!bg-white text-black dark:text-black dark:!bg-white focus:ring-0 dark:focus:ring-0  focus:border-0">Executive Summary</AccordionTitle>
							<AccordionContent className="bg-white dark:bg-white">
								<div dangerouslySetInnerHTML={{ __html: financialSummery }} />
							</AccordionContent>
						</AccordionPanel>
						<AccordionPanel>

							<AccordionTitle className="!bg-white text-black dark:text-black dark:!bg-white focus:ring-0 dark:focus:ring-0  focus:border-0">Notes Summary</AccordionTitle>
							<AccordionContent className="bg-white dark:bg-white">
								<div dangerouslySetInnerHTML={{ __html: notesSummery }} />
							</AccordionContent>
						</AccordionPanel>


					</Accordion>

				</div>
			</>}

		</div>
	)
}

export default Analysis