
import Select from 'react-select';
import { useState } from 'react';
import axios from 'axios';
import AnalysisLoadingModal from '../components/modals/analysisLoading';
import qs from 'qs'
import { Newspaper, BarChart3 } from 'lucide-react';

import { DateTime } from 'luxon';


function News() {


	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [selectedCompanies, setSelectedCompanies] = useState([]);
	const [selectedSectors, setSelectedSectors] = useState([]);
	const [useDateFilter, setUseDateFilter] = useState(false);
	const cairoTime = DateTime.now().setZone('Africa/Cairo');
	const dateNow = cairoTime.toFormat('yyyy-MM-dd')


	const handleCheckboxChange = (e) => {
		setUseDateFilter(e.target.checked);
		console.log('Checkbox is now:', e.target.checked);
	};


	const [counter, setCount] = useState(100);

	const increment = () => setCount(prev => prev + 1);
	const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
	const handleChangeCounter = (e) => {
		const value = parseInt(e.target.value);
		if (!isNaN(value)) setCount(value);
	};


	const sectors = [
		{ label: "Others", value: "Others" },
		{ label: "Real Estate", value: "Real Estate" },
		{ label: "Education Services", value: "Education Services" },
		{ label: "Health Care & Pharmaceuticals", value: "Health Care & Pharmaceuticals" },
		{ label: "Basic Resources", value: "Basic Resources" },
		{ label: "Food, Beverages and Tobacco", value: "Food, Beverages and Tobacco" },
		{ label: "Building Materials", value: "Building Materials" },
		{ label: "Shipping & Transportation Services", value: "Shipping & Transportation Services" },
		{ label: "Energy & Support Services", value: "Energy & Support Services" },
		{ label: "Non-bank financial services", value: "Non-bank financial services" },
		{ label: "Banks", value: "Banks" },
		{ label: "Trade & Distributors", value: "Trade & Distributors" },
		{ label: "Contracting & Construction Engineering", value: "Contracting & Construction Engineering" },
		{ label: "Textile & Durables", value: "Textile & Durables" },
		{ label: "Industrial Goods, Services and Automobiles", value: "Industrial Goods, Services and Automobiles" },
		{ label: "IT, Media & Communication Services", value: "IT, Media & Communication Services" },
		{ label: "Travel & Leisure", value: "Travel & Leisure" },
		{ label: "Utilities", value: "Utilities" },
	];



	const companies_Options = [
		{ label: "Amer Group Holding", value: "AMER.EGX" },
		{ label: "Taaleem Management Services", value: "TALM.EGX" },
		{ label: "Ibnsina Pharma", value: "ISPH.EGX" },
		{ label: "Abou Kir Fertilizers", value: "ABUK.EGX" },
		{ label: "AJWA for Food Industries company Egypt", value: "AJWA.EGX" },
		{ label: "Sinai Cement", value: "SCEM.EGX" },
		{ label: "ASEC Company For Mining - ASCOM", value: "ASCM.EGX" },
		{ label: "Emaar Misr for Development", value: "EMFD.EGX" },
		{ label: "Arab Real Estate Investment CO.-ALICO", value: "RREI.EGX" },
		{ label: "Alexandria Containers and goods", value: "ALCN.EGX" },
		{ label: "Alexandria Mineral Oils Company", value: "AMOC.EGX" },
		{ label: "Ismailia Misr Poultry", value: "ISMA.EGX" },
		{ label: "El Ahli Investment and Development", value: "AFDI.EGX" },
		{ label: "Commercial International Bank-Egypt (CIB)", value: "COMI.EGX" },
		{ label: "Export Development Bank of Egypt", value: "EXPA.EGX" },
		{ label: "Iron And Steel for Mines and Quarries", value: "ISMQ.EGX" },
		{ label: "Maridive & oil services", value: "MOIL.EGX" },
		{ label: "Delta Sugar", value: "SUGR.EGX" },
		{ label: "International Company For Fertilizers & Chemicals", value: "ICFC.EGX" },
		{ label: "International Agricultural Products", value: "IFAP.EGX" },
		{ label: "Extracted Oils", value: "ZEOT.EGX" },
		{ label: "Six of October Development & Investment (SODIC)", value: "OCDI.EGX" },
		{ label: "Eastern Company", value: "EAST.EGX" },
		{ label: "El Shams Housing & Urbanization", value: "ELSH.EGX" },
		{ label: "Elsaeed Contracting& Real Estate Investment Company SCCD", value: "UEGC.EGX" },
		{ label: "Egyptian Chemical Industries (Kima)", value: "EGCH.EGX" },
		{ label: "Engineering Industries (ICON)", value: "ENGC.EGX" },
		{ label: "Tenth Of Ramadan Pharmaceutical Industries&Diagnostic-Rameda", value: "RMDA.EGX" },
		{ label: "Ceramic & Porcelain", value: "PRCL.EGX" },
		{ label: "Medical Packaging Company", value: "MEPA.EGX" },
		{ label: "Arab Cotton Ginning", value: "ACGC.EGX" },
		{ label: "Arabian Cement Company", value: "ARCC.EGX" },
		{ label: "The Arab Dairy Products Co. Arab Dairy - Panda", value: "ADPC.EGX" },
		{ label: "El Ezz Porcelain (Gemma)", value: "ECAP.EGX" },
		{ label: "Egyptian Kuwaiti Holding", value: "EKHO.EGX" },
		{ label: "Egyptian Kuwaiti Holding-EGP", value: "EKHOA.EGX" },
		{ label: "El Kahera Housing", value: "ELKA.EGX" },
		{ label: "Cairo Poultry", value: "POUL.EGX" },
		{ label: "Cairo Oils & Soap", value: "COSG.EGX" },
		{ label: "Cairo For Investment And Real Estate Developments-CIRA Edu", value: "CIRA.EGX" },
		{ label: "QALA For Financial Investments", value: "CCAP.EGX" },
		{ label: "Canal Shipping Agencies", value: "CSAG.EGX" },
		{ label: "Electro Cable Egypt", value: "ELEC.EGX" },
		{ label: "Industrial & Engineering Projects", value: "IEEC.EGX" },
		{ label: "The United Bank", value: "UBEE.EGX" },
		{ label: "Egyptian International Pharmaceuticals (EIPICO)", value: "PHAR.EGX" },
		{ label: "Egyptian Transport (EGYTRANS)", value: "ETRS.EGX" },
		{ label: "Telecom Egypt", value: "ETEL.EGX" },
		{ label: "Egyptian for Tourism Resorts", value: "EGTS.EGX" },
		{ label: "Egyptian Media Production City", value: "MPRC.EGX" },
		{ label: "Egyptians Housing Development & Reconstruction", value: "EHDR.EGX" },
		{ label: "Arab Developers Holding", value: "ARAB.EGX" },
		{ label: "Arab Moltaka Investments Co", value: "AMIA.EGX" },
		{ label: "Mansourah Poultry", value: "MPCO.EGX" },
		{ label: "Oriental Weavers", value: "ORWE.EGX" },
		{ label: "El Nasr Clothes & Textiles (Kabo)", value: "KABO.EGX" },
		{ label: "MM Group For Industry And International Trade", value: "MTIE.EGX" },
		{ label: "ODIN Investments", value: "ODIN.EGX" },
		{ label: "Orascom Financial Holding", value: "OFH.EGX" },
		{ label: "Orascom Construction PLC", value: "ORAS.EGX" },
		{ label: "Orascom Investment Holding", value: "OIH.EGX" },
		{ label: "Orascom Development Egypt", value: "ORHD.EGX" },
		{ label: "E-finance For Digital and Financial Investments", value: "EFIH.EGX" },
		{ label: "Edita Food Industries S.A.E", value: "EFID.EGX" },
		{ label: "Palm Hills Development Company", value: "PHDC.EGX" },
		{ label: "Pioneers Properties For Urban Development(PREDCO)", value: "PRDC.EGX" },
		{ label: "Beltone Holding", value: "BTFH.EGX" },
		{ label: "Al Baraka Bank Egypt", value: "SAUD.EGX" },
		{ label: "Qatar National Bank", value: "QNBE.EGX" },
		{ label: "Credit Agricole Egypt", value: "CIEB.EGX" },
		{ label: "B Investments Holding", value: "BINV.EGX" },
		{ label: "South Valley Cement", value: "SVCE.EGX" },
		{ label: "Juhayna Food Industries", value: "JUFO.EGX" },
		{ label: "GB Corp", value: "GBCO.EGX" },
		{ label: "Dice Sport & Casual Wear", value: "DSCW.EGX" },
		{ label: "Raya Holding For Financial Investments", value: "RAYA.EGX" },
		{ label: "Raya Customer Experience", value: "RACC.EGX" },
		{ label: "Zahraa Maadi Investment & Development", value: "ZMID.EGX" },
		{ label: "CI Capital Holding For Financial Investments", value: "CICH.EGX" },
		{ label: "Sidi Kerir Petrochemicals - SIDPEC", value: "SKPC.EGX" },
		{ label: "Sharm Dreams Co. for Tourism Investment", value: "SDTI.EGX" },
		{ label: "Cleopatra Hospital Company", value: "CLHO.EGX" },
		{ label: "Taqa Arabia", value: "TAQA.EGX" },
		{ label: "Obour Land For Food Industries", value: "OLFI.EGX" },
		{ label: "Natural Gas & Mining Project (Egypt Gas)", value: "EGAS.EGX" },
		{ label: "Fawry For Banking Technology And Electronic Payment", value: "FWRY.EGX" },
		{ label: "Kafr El Zayat Pesticides", value: "KZPC.EGX" },
		{ label: "Lecico Egypt", value: "LCSW.EGX" },
		{ label: "Macro Group Pharmaceuticals -Macro Capital", value: "MCRO.EGX" },
		{ label: "EFG Holding", value: "HRHO.EGX" },
		{ label: "T M G Holding", value: "TMGH.EGX" },
		{ label: "Madinet Masr For Housing and Development", value: "MASR.EGX" },
		{ label: "Heliopolis Housing", value: "HELI.EGX" },
		{ label: "Misr National Steel - Ataqa", value: "ATQA.EGX" },
		{ label: "Misr Fertilizers Production Company - Mopco", value: "MFPC.EGX" },
		{ label: "Misr Chemical Industries", value: "MICH.EGX" },
		{ label: "Misr Cement (Qena)", value: "MCQE.EGX" },
		{ label: "Egypt Aluminum", value: "EGAL.EGX" },
		{ label: "Abu Dhabi Islamic Bank- Egypt", value: "ADIB.EGX" },
		{ label: "Mena Touristic & Real Estate Investment", value: "MENA.EGX" },
		{ label: "Al Khair River For Development Agricultural Investment&Envir", value: "KRDI.EGX" }
	]



	const handleChange = (selectedOptions) => {
		const valuesOnly = selectedOptions.map(option => option.value);

		setSelectedCompanies(valuesOnly);
		console.log(valuesOnly)
	};


	const handleChangeSectors = (selectedOptions) => {
		const valuesOnly = selectedOptions.map(option => option.value);

		setSelectedSectors(valuesOnly);
		console.log(valuesOnly)
	};
	const customStyles = {
		multiValueRemove: (base) => ({
			...base,
			opacity: 1,              // always visible
			color: 'black',          // icon color

		}),
		option: (provided, state) => ({
			...provided,
			color: 'black',
			backgroundColor: state.isFocused ? '#f3f4f6' : 'white',
		}),
		multiValueLabel: (provided) => ({
			...provided,
			color: 'black',
		}),
		singleValue: (provided) => ({
			...provided,
			color: 'black',
		}),
	};

	const query = new URLSearchParams();
	selectedCompanies.forEach(symbol => query.append("companies", symbol));

	if (useDateFilter) {
		query.append("date_filter", dateNow)

	}

	console.log(useDateFilter)

	const sectorsQuery = new URLSearchParams();
	selectedSectors.forEach(symbol => sectorsQuery.append("sectors", symbol));


	if (useDateFilter) {
		sectorsQuery.append("date_filter", dateNow)

	}


	const url = `/api/headlines?${sectorsQuery.toString()}`;
	console.log("Final URL:", url);

	const fetchHeadlines = async () => {
		try {
			setLoading(true);

			const params = {
				companies: selectedCompanies,
			};

			if (counter > 0) {
				params.limit = counter;
			}

			if (useDateFilter) {
				params.date_filter = dateNow; // Make sure dateNow is formatted correctly
			}

			const res = await axios.get('https://newsapi.stockastic.app/headlines', {
				auth: {
					username: 'admin',
					password: 'Admin@1310',
				},
				params,
				paramsSerializer: params => {
					return qs.stringify(params, { arrayFormat: 'repeat' });
				},
			});

			console.log(res);
			setData(res.data);
			setLoading(false);
		} catch (e) {
			console.log(e);
		}
	};

	const fetchAll = async () => {
		try {
			setLoading(true);

			const params = {
			};

			if (counter > 0) {
				params.limit = counter;
			}

			if (useDateFilter) {
				params.date_filter = dateNow; // Make sure dateNow is formatted correctly
			}

			const res = await axios.get('https://newsapi.stockastic.app/headlines', {
				auth: {
					username: 'admin',
					password: 'Admin@1310',
				},
				params,
				paramsSerializer: params => {
					return qs.stringify(params, { arrayFormat: 'repeat' });
				},
			});

			console.log(res);
			setData(res.data);
			setLoading(false);
		} catch (e) {
			console.log(e);
		}
	};

	const fetchHeadlinesSectors = async () => {
		try {
			setLoading(true);

			const params = {
				sectors: selectedSectors,
			};

			if (counter > 0) {
				params.limit = counter;
			}

			if (useDateFilter) {
				params.date_filter = dateNow;
			}

			const res = await axios.get('https://newsapi.stockastic.app/headlines', {
				auth: {
					username: 'admin',
					password: 'Admin@1310',
				},
				params,
				paramsSerializer: (params) => {
					return qs.stringify(params, { arrayFormat: 'repeat' });
				},
			});

			console.log(res);
			setData(res.data);
			setLoading(false);
		} catch (e) {
			console.log(e);
		}
	};


	let count = {}


	for (const elem of data) {
		if (count[elem.referenced_stock_symbol]) {
			count[elem.referenced_stock_symbol] += 1;
		} else {
			count[elem.referenced_stock_symbol] = 1
		}
	}

	const result = [];
	for (const [symbol, value] of Object.entries(count)) {
		result.push({ symbol, count: value });
	}


	return (
		<div >
			{loading && <AnalysisLoadingModal />
			}
			<div className='space-y-5 m-auto w-[70%] min-h-screen '>
				<h4 className='text-3xl dark:text-black font-semibold text-black'>News Headlines Dashboard</h4>


				<div className='shadow-lg border m-auto border-gray-300 rounded-2xl bg-white 100 space-y-10 dark:bg-white-100 p-5'>
					<h4 className='text-xl dark:text-gray-700 font-semibold text-gray-700'>Filter Headlines</h4>

					<div className='flex flex-row justify-center space-x-6'>
						<div className='flex flex-col w-[400px]'>
							<div className=''>
								<h5 className='text-gray-700 font-medium text-[17px]'>
									Filter by Company
								</h5>
							</div>
							<div>

								<Select
									isDisabled={selectedSectors.length > 0}
									isMulti
									name="frameworks"
									options={companies_Options}
									styles={customStyles}
									classNamePrefix="select"
									onChange={handleChange}
								/>
							</div>
						</div>



						<div className='flex flex-col w-[400px]'>
							<div className=''>
								<h5 className='text-gray-700 font-medium text-[17px]'>
									Filter by Sector
								</h5>
							</div>
							<div>
								<Select
									isDisabled={selectedCompanies.length > 0}

									isMulti
									name="frameworks"
									options={sectors}
									styles={customStyles}
									classNamePrefix="select"
									onChange={handleChangeSectors}

								/>
							</div>
						</div>
					</div>

					<div className='flex flex-row justify-center space-x-6'>
						<div className='flex flex-col w-[400px]'>
							<div>
								<h5 className='text-gray-700 font-medium text-[17px]'>
									Date Filter</h5>
							</div>
							<div class="flex items-center">
								<input onChange={handleCheckboxChange} id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 dark:text-gray-900 text-gray-900 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
								<label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900">Use Date Filter</label>
							</div>

						</div>

						<div className='flex flex-col w-[400px]'>
							<div className=''>
								<h5 className='text-gray-700 font-medium text-[17px]'>
									Limit Results
								</h5>
							</div>
							<div>
								<label className='text-gray-900'>Number of Headlines</label>
								<form>
									<div className="relative flex items-center max-w-[8rem]">
										<button
											type="button"
											onClick={decrement}
											className="bg-gray-100 dark:hover:bg-blue-500 dark:bg-blue-400 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-2 focus:outline-none"
										>
											<svg
												className="w-3 h-3 text-white dark:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 18 2"
											>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M1 1h16"
												/>
											</svg>
										</button>

										<input
											type="text"
											value={counter}
											onChange={handleChangeCounter}
											className="bg-blue-400 border-x-0 border-gray-300 h-11 text-center text-white text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-blue-400 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="999"
											required
										/>

										<button
											type="button"
											onClick={increment}
											className="bg-gray-100 dark:bg-blue-400 dark:hover:bg-blue-500 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-2 focus:outline-none"
										>
											<svg
												className="w-3 h-3 text-blue-600 dark:text-white"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 18 18"
											>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M9 1v16M1 9h16"
												/>
											</svg>
										</button>
									</div>
								</form>

							</div>
						</div>
					</div>

				{selectedCompanies.length > 0 ? (
  <button
    onClick={fetchHeadlines}
    className="w-[80%] m-auto flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg shadow-sm hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
  >
    Fetch Headlines 
  </button>
) : selectedSectors.length > 0 ? (
  <button
    onClick={fetchHeadlinesSectors}
    className="w-[80%] m-auto flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium rounded-lg shadow-sm hover:from-green-700 hover:to-emerald-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
  >
    Fetch Headlines 
  </button>
) : (
   <button
    onClick={fetchAll}
    className="w-[80%] m-auto flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium rounded-lg shadow-sm hover:from-green-700 hover:to-emerald-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
  >
    Fetch Headlines 
  </button>
)}

				</div>

				{data.length != 0 && <div className='shadow-lg border m-auto mt-10 border-gray-300 rounded-2xl bg-white  100 space-y-10 dark:bg-white-100 p-5'>
					<div className="flex flex-col gap-8 p-6 bg-white rounded-xl shadow-md w-full max-w-4xl mx-auto">

						{/* Summary */}
						<div>
							<div className="flex items-center gap-2 mb-4">
								<Newspaper className="text-blue-600" />
								<h4 className="text-gray-700 text-2xl font-semibold">Summary</h4>
							</div>
							<div className="flex flex-col items-start rounded-lg text-gray-900">
								<p className="text-lg font-semibold">Total Headlines</p>
								<h4 className="text-xl font-bold text-center">{data?.length}</h4>
							</div>
						</div>

						{/* Divider */}
						<hr className="border-t border-gray-300" />

						{/* Headlines by Stock */}
						<div>
							<div className="flex items-center gap-2 mb-4">
								<BarChart3 className="text-green-600" />
								<h3 className="text-gray-700 text-2xl font-semibold">Headlines by Stock</h3>
							</div>

							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
								{result
									?.filter((o) => o.symbol !== 'N/A')
									.map((obj, index) => (
										<div
											key={index}
											className="flex flex-col items-center justify-center bg-[#f0f9ff] text-black rounded-lg p-3"
										>
											<p className="text-md font-semibold text-center">{obj.symbol}</p>
											<h4 className="text-xl font-bold text-center">{obj.count}</h4>
										</div>
									))}

								<div
									className="flex flex-col items-center justify-center bg-[#f0f9ff] text-black rounded-lg p-3"
								>
									<p className="text-md font-semibold text-center">Latest Article</p>
									<h4 className="text-xl font-bold text-center">{data[0]?.article_timestamp.split("T").join(" ")}</h4>
								</div>

								<div
									className="flex flex-col  items-center justify-center bg-[#f0f9ff] text-black rounded-lg p-3"
								>
									<p className="text-md font-semibold text-center">Oldest Article</p>
<h4 className="text-xl font-bold text-center">
  {data[data.length - 1]?.article_timestamp.split("T").join(" ")}
</h4>
								</div>
							</div>
						</div>
					</div>
					<div class="relative overflow-x-auto">
						<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
							<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" class="px-6 py-3 dark:bg-[#f0f9ff] text-gray-700 dark:text-gray-700">
										Date & Time
									</th>
									<th scope="col" class="px-6 py-3 dark:bg-[#f0f9ff] text-gray-700 dark:text-gray-700">
										Stock symbol
									</th>
									<th scope="col" class="px-6 py-3 dark:bg-[#f0f9ff] text-gray-700 dark:text-gray-700">
										Headline
									</th>
									<th scope="col" class="px-6 py-3 dark:bg-[#f0f9ff] text-gray-700 dark:text-gray-700">
										Sentiment Score
									</th>

									<th scope="col" class="px-6 py-3 dark:bg-[#f0f9ff] text-gray-700 dark:text-gray-700">
										Sentiment
									</th>
								</tr>
							</thead>
							<tbody>

								{data?.map((row, index) => {
									return (
										<tr class="bg-white  dark:bg-gray-200 dark:border-gray-700 border-gray-200">
											<th scope="row" class="px-6 py-4 font-medium  bg-white dark:text-gray-900 text-gray-900 whitespace-nowrap ">
												{row.article_timestamp.split("T").join(" ")}
											</th>
											<td class="px-6 py-4 font-medium  bg-white dark:text-gray-900 text-gray-900 whitespace-nowrap ">
												{row.referenced_stock_symbol}
											</td>
											<td class="px-6 py-4 font-medium  bg-white dark:text-gray-900 text-gray-900 whitespace-nowrap ">
												{row.headline}
											</td>
											<td class="px-6 py-4 font-medium  bg-white dark:text-gray-900 text-gray-900 whitespace-nowrap ">
												{row.sentiment_score}
											</td>

											<td class="px-6 py-4 font-medium  bg-white dark:text-gray-900 text-gray-900 whitespace-nowrap ">
												{row.sentiment}
											</td>
										</tr>
									)
								})}

							</tbody>
						</table>
					</div>
				</div>}

			</div>


			<div>





			</div>

		</div>
	)
}

export default News