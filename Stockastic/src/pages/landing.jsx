import img1 from "../assets/stochastic_hero_dashboard-sEXfsj19.png"
import img2 from "../assets/ai_insights_graphic-CBMie933.png"
import { LogIn } from "lucide-react";

function Landing() {
	return (
		<div className="w-[80%] mx-auto">
			<section className="grid lg:grid-cols-2 gap-12 items-center">
				<div className="space-y-8" >
					<p className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-primary/90 bg-blue-100 text-blue-800 hover:bg-blue-100">AI-Powered Financial Intelligence</p>
					<h4 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
						Unlock AI-Powered Insights for

						<span class="text-blue-600">
							EGX Listed Companies
						</span>

					</h4>


					<p className="text-gray-700 text-lg text-left">
						<span className="block">Advanced financial analysis, performance tracking, and data management </span>
						<span className="block"> specifically designed for the Egyptian Exchange market.</span>
					</p>

			<div className="flex flex-col items-center justify-center gap-3 md:flex-row w-full max-w-sm text-center">
      <a href="/register" className="w-full md:w-auto">
        <button
          className="w-full md:w-[200px] flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg shadow-sm hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          Try Us
        </button>
      </a>

      <a href="/login" className="w-full md:w-auto">
        <button
          className="w-full md:w-[200px] flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg shadow-sm hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <LogIn className="w-5 h-5" />
          Login
        </button>
      </a>
    </div>


					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
						<div className="flex flex-col text-center">
							<h4 className="text-2xl font-bold text-blue-600">
								200+
							</h4>
							<p className="text-sm text-gray-600">
								EGX Companies Analyzed

							</p>
						</div>


						<div className="flex flex-col text-center">
							<h4 className="text-2xl font-bold text-blue-600">
								99.9%
							</h4>
							<p className="text-sm text-gray-600">
								Data Accuracy

							</p>
						</div>


						<div className="flex flex-col text-center">
							<h4 className="text-2xl font-bold text-blue-600">
								24/7
							</h4>
							<p className="text-sm text-gray-600">
								Market Monitoring

							</p>
						</div>

					</div>
				</div>

				<div className="relative z-10">
					<img src={img1} className="w-full h-auto rounded-lg shadow-2xl" />
				</div>
			</section>


			<section class="py-16 bg-white">

				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
							Why Choose Stockastic?

						</h3>

						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Leverage cutting-edge AI technology to make informed investment decisions in the Egyptian stock market.


						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">

						<div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center hover:shadow-lg transition-shadow duration-300"><div data-slot="card-header" class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
							<div class="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain h-12 w-12 text-blue-600" aria-hidden="true"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
								<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
								<path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
							</svg></div><div data-slot="card-title" class="font-semibold text-xl text-gray-900">AI-Powered Analysis</div>
						</div>
							<div data-slot="card-content" class="px-6"><div data-slot="card-description" class="text-muted-foreground text-base text-gray-700">Advanced algorithms analyze EGX companies' financial data with unprecedented accuracy and speed.</div>
							</div>
						</div>


						<div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center hover:shadow-lg transition-shadow duration-300"><div data-slot="card-header" class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"><div class="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity h-12 w-12 text-blue-600" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></div><div data-slot="card-title" class="font-semibold text-xl text-gray-900">Real-Time Insights</div></div><div data-slot="card-content" class="px-6"><div data-slot="card-description" class="text-muted-foreground text-base text-gray-700">Live performance tracking and market intelligence to keep you ahead of market movements.</div></div></div>



						<div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center hover:shadow-lg transition-shadow duration-300">
							<div data-slot="card-header" class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
								<div class="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-12 w-12 text-blue-600" aria-hidden="true">
										<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
									</svg></div><div data-slot="card-title" class="font-semibold text-xl text-gray-900">Trusted Data</div>
							</div><div data-slot="card-content" class="px-6">
								<div data-slot="card-description" class="text-muted-foreground text-base text-gray-700 ">Reliable financial statements analysis and comprehensive risk assessment you can depend on.</div></div></div>
					</div>

				</div>

			</section>


			<div class="container mx-auto px-4"><div class="text-center mb-16">
				<h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
					Comprehensive EGX Analysis Tools</h2>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to analyze and track Egyptian Exchange listed companies with professional-grade accuracy.</p>
			</div><div class="grid lg:grid-cols-2 gap-12 items-center">
					<div class="flex lg:order-1">
						<div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm w-full hover:shadow-lg transition-shadow duration-300">
							<div data-slot="card-header" class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
								<div class="flex items-center space-x-4">
									<div class="p-2 bg-blue-50 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column h-8 w-8 text-blue-600" aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></div><div data-slot="card-title" class="font-semibold text-xl text-gray-900 dark:text-gray-900">Financial Statement Analysis</div></div></div><div data-slot="card-content" class="px-6"><div data-slot="card-description" class="text-muted-foreground text-base text-gray-700">Deep dive into EGX companies' financial health with AI-powered analysis of balance sheets, income statements, and cash flow data.</div>
							</div>
						</div></div>
					<div class="flex lg:order-2"><div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm w-full hover:shadow-lg transition-shadow duration-300"><div data-slot="card-header" class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"><div class="flex items-center space-x-4"><div class="p-2 bg-blue-50 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-8 w-8 text-blue-600" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg></div><div data-slot="card-title" class="font-semibold text-xl text-gray-900 dark:text-gray-900">Performance Tracking</div></div></div><div data-slot="card-content" class="px-6"><div data-slot="card-description" class="text-muted-foreground text-base text-gray-700">Real-time monitoring of stock performance, market trends, and key financial metrics for informed investment decisions.</div></div></div></div><div class="flex lg:order-1"><div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm w-full hover:shadow-lg transition-shadow duration-300"><div data-slot="card-header" class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"><div class="flex items-center space-x-4"><div class="p-2 bg-blue-50 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-8 w-8 text-blue-600" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg></div><div data-slot="card-title" class="font-semibold text-xl text-gray-900 dark:text-gray-900">Risk Assessment</div></div></div><div data-slot="card-content" class="px-6"><div data-slot="card-description" class="text-muted-foreground text-base text-gray-700">Advanced risk analysis using machine learning algorithms to identify potential investment risks and opportunities.</div></div></div></div><div class="flex lg:order-2"><div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm w-full hover:shadow-lg transition-shadow duration-300"><div data-slot="card-header" class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"><div class="flex items-center space-x-4"><div class="p-2 bg-blue-50 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-pie h-8 w-8 text-blue-600" aria-hidden="true"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg></div><div data-slot="card-title" class="font-semibold text-xl text-gray-900 dark:text-gray-900">Market Insights</div></div></div><div data-slot="card-content" class="px-6"><div data-slot="card-description" class="text-muted-foreground text-base  text-gray-700">Comprehensive market intelligence and sector analysis specifically tailored for the Egyptian Exchange.</div></div></div></div></div>
			</div>

			<section class="py-16 bg-slate-900 text-white"><div class="container mx-auto px-4"><div class="grid lg:grid-cols-2 gap-12 items-center"><div class="space-y-6"><h2 class="text-3xl lg:text-4xl font-bold">AI-Driven Market Intelligence</h2><p class="text-xl text-gray-300">Our advanced artificial intelligence algorithms process vast amounts of financial data to deliver actionable insights for EGX investments.</p><div class="space-y-4"><div class="flex items-center space-x-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-6 w-6 text-green-400" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Real-time financial statement analysis</span></div><div class="flex items-center space-x-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-6 w-6 text-green-400" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Predictive risk assessment models</span></div><div class="flex items-center space-x-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-6 w-6 text-green-400" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Market trend identification</span></div><div class="flex items-center space-x-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-6 w-6 text-green-400" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Automated portfolio optimization</span></div></div><button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-10 rounded-md px-6 has-[>svg]:px-4 bg-blue-600 hover:bg-blue-700">Explore AI Features</button></div><div class="relative"><img alt="AI Insights" class="w-full h-auto rounded-lg" src={img2} /></div></div></div></section>
			<section class="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white"><div class="container mx-auto px-4 text-center"><div class="max-w-3xl mx-auto space-y-6"><h2 class="text-3xl lg:text-4xl font-bold">Ready to Transform Your EGX Analysis?</h2><p class="text-xl text-blue-100">Join leading Egyptian financial professionals who trust Stockastic for their investment decisions.</p><div class="flex flex-col sm:flex-row gap-4 justify-center"><button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-10 rounded-md has-[>svg]:px-4 bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">Request Demo</button><button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md has-[>svg]:px-4 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">Contact Sales</button></div></div></div></section>
		</div>

	)
}

export default Landing