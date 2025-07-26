import { AlertTriangle, X, Zap, Phone } from 'lucide-react';

function QuotaExceededModal({ quotaModal, setQuotModal }) {
	const currentUsage = 2
	const maxQuota = 2
	const quotaType = "API requests"
	const usagePercentage = (currentUsage / maxQuota) * 100;

	console.log(quotaModal)






	return (
<div className={`${quotaModal} fixed inset-0 z-50 flex items-center justify-center p-4`}>
  {/* Backdrop */}
  <div
    className="fixed inset-0 bg-black/10 bg-opacity-50 transition-opacity duration-300"
    onClick={() => setQuotModal("hidden")}
  />

  {/* Modal Content */}
  <div className="relative z-10 w-full max-w-md transform rounded-2xl bg-white p-6 shadow-2xl transition-all duration-300 scale-100">
    {/* Close button */}
    <button
      onClick={() => setQuotModal("hidden")}
      className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-200"
    >
      <X size={20} />
    </button>

    {/* Icon and Title */}
    <div className="text-center mb-6">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 mb-4">
        <AlertTriangle className="h-8 w-8 text-amber-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Quota Exceeded</h3>
      <p className="text-gray-600 text-sm">
        You've reached your {quotaType} limit for this billing period
      </p>
    </div>

    {/* Usage Stats */}
    <div className="bg-gray-50 rounded-xl p-4 mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">Current Usage</span>
        <span className="text-sm font-semibold text-gray-900">
          {currentUsage.toLocaleString()} / {maxQuota.toLocaleString()}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-amber-400 to-red-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${Math.min(usagePercentage, 100)}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-2">
        {usagePercentage.toFixed(1)}% of quota used
      </p>
    </div>

    {/* Action Buttons */}
    <div className="space-y-3">
      <button
        onClick={() => {}}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02]"
      >
        <Phone size={18} />
      Contact Us
      </button>
    </div>

  
  </div>
</div>

	)
}

export default QuotaExceededModal