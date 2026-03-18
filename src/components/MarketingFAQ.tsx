import { ChevronDown } from 'lucide-react';
export default function MarketingFAQ() {
    return (
        <section className="py-24 bg-surface-light dark:bg-surface-dark relative overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-5">
                <span className="text-[20rem] font-bold text-primary dark:text-white">FAQ</span>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary dark:text-white text-center mb-12 uppercase">
                    Frequently Asked Questions
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm flex justify-between items-center cursor-pointer group">
                            <span className="font-bold text-sm text-gray-800 dark:text-gray-200">How much do your services cost?</span>
                            <ChevronDown className="text-primary dark:text-white group-hover:text-secondary transition" />
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm flex justify-between items-center cursor-pointer group">
                            <span className="font-bold text-sm text-gray-800 dark:text-gray-200">What makes you different than other companies?</span>
                            <ChevronDown className="text-primary dark:text-white group-hover:text-secondary transition" />
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm flex justify-between items-center cursor-pointer group">
                            <span className="font-bold text-sm text-gray-800 dark:text-gray-200">How fast can you get me on page 1 of Google?</span>
                            <ChevronDown className="text-primary dark:text-white group-hover:text-secondary transition" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm flex justify-between items-center cursor-pointer group">
                            <span className="font-bold text-sm text-gray-800 dark:text-gray-200">Do you provide a free consultation?</span>
                            <ChevronDown className="text-primary dark:text-white group-hover:text-secondary transition" />
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm flex justify-between items-center cursor-pointer group">
                            <span className="font-bold text-sm text-gray-800 dark:text-gray-200">Do you offer performance-based marketing services?</span>
                            <ChevronDown className="text-primary dark:text-white group-hover:text-secondary transition" />
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm flex justify-between items-center cursor-pointer group">
                            <span className="font-bold text-sm text-gray-800 dark:text-gray-200">Do you require long-term contracts?</span>
                            <ChevronDown className="text-primary dark:text-white group-hover:text-secondary transition" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
