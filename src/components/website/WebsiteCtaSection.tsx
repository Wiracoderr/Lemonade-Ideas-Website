export default function WebsiteCtaSection() {
  return (
    <section className="py-20 bg-[#8DBF43] text-[#1e3a1a] text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-widest">
          Ready to move forward?
        </h2>
        <p className="mb-10 font-medium text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
          Whether you already have a website or don&apos;t know where to start, we&apos;ve got you covered. We&apos;ll simplify the process and ensure your project is completed on time and within budget.
        </p>
        <a 
          href="https://calendly.com/lemonadeideas-consultation/30min?month=2026-03" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#1e3a1a] text-white py-4 px-10 rounded-lg flex items-center justify-center gap-3 mx-auto font-bold uppercase hover:bg-white hover:text-[#1e3a1a] transition-all group w-fit shadow-xl"
        >
          <svg className="h-5 w-5 text-[#8DBF43]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          <div className="text-left">
            <span className="block text-[10px] opacity-70 tracking-widest">Speak with our expert</span>
            Schedule a Call
          </div>
        </a>
      </div>
    </section>
  );
}
