export default function WebsiteMaintenanceSection() {
  return (
    <section className="py-20 bg-[#F3F8F2]/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-300 mb-2 opacity-50 tracking-[0.5em]">MAINTENANCE BUNDLES</h2>
          <div className="bg-[#8DBF43] text-[#1e3a1a] font-bold py-2 px-8 inline-block rounded text-sm uppercase tracking-widest mb-8">
            Maintenance Bundles
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bundle 1 */}
          <div className="bg-white p-10 rounded-lg shadow-md border-t-4 border-[#8DBF43]">
            <ul className="space-y-5 mb-10">
              <li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <span className="text-[#8DBF43] font-bold">✓</span> Save 10% on the standard rate
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <span className="text-[#8DBF43] font-bold">✓</span> 5+ hours of professional website maintenance
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <span className="text-[#8DBF43] font-bold">✓</span> Minimum purchase of 5 hours required
              </li>
            </ul>
            <a 
              href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#1e3a1a] text-white py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#8DBF43] hover:text-[#1e3a1a] transition-colors"
            >
              Get Started
            </a>
          </div>
          
          {/* Bundle 2 */}
          <div className="bg-white p-10 rounded-lg shadow-md border-t-4 border-[#8DBF43]">
            <ul className="space-y-5 mb-10">
              <li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <span className="text-[#8DBF43] font-bold">✓</span> Save 20% on the standard rate
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <span className="text-[#8DBF43] font-bold">✓</span> 10+ hours of professional website maintenance
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                <span className="text-[#8DBF43] font-bold">✓</span> Minimum purchase of 10 hours required
              </li>
            </ul>
            <a 
              href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#1e3a1a] text-white py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#8DBF43] hover:text-[#1e3a1a] transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
