import { BiSolidReport } from "react-icons/bi";
import { TrendingUp, FileText, BarChart3, ArrowRight, Newspaper, Calculator } from 'lucide-react';


function Card({ data }) {
	return (
		   <a href={data.path}>
			 <div className="group cursor-pointer bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:scale-105 hover:border-blue-200 transition-all duration-200 w-[500px] h-[300px]">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
					{data.icon}
                </div>
               
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
				{data.title}
			  </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
				{data.slogn}
              </p>
              
              

             
            </div>
            
            {/* Bottom gradient accent */}
          </div>
		   </a>

	)
}

function Dashboard() {
	const cardData = [
		{"slogn":"Analyze market sentiment from thousands of news sources, social media, and financial reports using advanced NLP algorithms to predict market movemen" ,"title": "News sentiment analysis", "icon": <Newspaper className="h-8 w-8 text-blue-600" />, "buttontitle": "Start Analysis", "title_color": "text-blue-600", "path": "news" },

		{"slogn":"Instant Financial Intelligence — Just Upload.", "title": "Analyze financial statements", "icon": <FileText className="h-8 w-8 text-purple-600" />, "title_color": "text-purple-600",  "path": "analysis" }

	]


	return (
		<div>
			<div className="flex items-center justify-center h-screen space-x-4">
				{cardData.map((card, index) => {
					return (
							<Card key={index} data={card} />
					)
				})}
			</div>
		</div>
	)
}

export default Dashboard