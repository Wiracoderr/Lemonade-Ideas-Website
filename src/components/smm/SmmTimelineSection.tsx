import React from 'react';

export default function SmmTimelineSection() {
    return (
        <section className="py-20 bg-blue-50/50 font-sans" data-purpose="timeline">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="pl-6 border-l-8 border-[#ccff00] mb-12">
                    <h2 className="text-3xl font-extrabold text-[#0d2a1a] uppercase leading-none">
                        The Social Media Management Timeline
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl font-medium">
                        We&apos;ve carefully crafted a timeline to set your social media strategy up for long-term success. We will keep you fully involved throughout the process.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Side: Images Stack */}
                    <div className="space-y-4">
                        <img 
                            alt="Building phase" 
                            className="rounded shadow-md w-full h-auto object-cover aspect-video" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbWz2_4kZDssI935-CyU8qgRhjBwxEdgKjF_FouqCqiU4d4VMKOOT4ruZLBzTL_aJC2tRph2JKwV-NX-Jx8EjdlaAu7AbptiykhSuphNlaBs0sgvtwbn9BF-qs8RL37ZwO4LsTse_rfNK1t6VP4gg9vijqfV5z2QmiM_wq_OK3mzSJkIHKlqX-Yo0lp0RO-zmTuiVLnjjQE-jgom7t7JBkWIvS7zx21ZawVgVWY-vd2webCD3oqtogyfBOCtFvycT3sLNJDEutd8o"
                            loading="lazy"
                        />
                        <img 
                            alt="Content phase" 
                            className="rounded shadow-md w-full h-auto object-cover aspect-video hidden md:block" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWNrF-gGnIUQo5J3U0Eo7SsvkWPAksZvO6CCrq92znucc4GcOOSbPaDipwSpD5GG6xjvSNeP7KWJdtPc6OeulQiqUkIYSj5Lfv51UjtD3fZzklQvL8mpoXK2G2ABZB7YSkjy_OmLGnMwMarcmAWE_YAajOcOjvDn_KK6bKHIW1IhzWY0in3rM1W5Wo7ktOuFEc_LqXzJvr2NVDWNdo8nFD-C7pOxlp6M6keKPVP0zlZiRyBn6ivaRdmR2Qzmpq57tyMCUpYLBROu4"
                            loading="lazy"
                        />
                        <img 
                            alt="Scaling phase" 
                            className="rounded shadow-md w-full h-auto object-cover aspect-video hidden md:block" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRnq_7n7CRqXE88AoHlbqfcEZrSnjvDx-0CAtEmKD45YVgsPG6OUcsaqodLO4-8TK62Hmsky_d2SS6n6qtr1PNjTP0eaDBO57sMHduiqla-m56K5EWasTh-uWWn3avkVBegrRvYJDFWRwhgli8dQFO3HkOkiVtnok6CA-wa9oQa2KcLz5U5g0P8Cop4Suh77nHitkxfZIlcMpHnf3xiZVV72syQ7VYNKmAt7xZK6iJYLEmU3dFs-cm0zvItr061EMIRDA_rkIb1iM"
                            loading="lazy"
                        />
                    </div>
                    {/* Right Side: Content */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="font-black text-[#0d2a1a] uppercase text-lg">Build - Month 1</h3>
                            <p className="text-[15px] font-medium text-gray-600 mt-2">We establish a strong foundation for your social media presence—setting up profiles, creating content calendars, identifying target audiences, and designing posts tailored to your brand.</p>
                            <p className="text-[11px] font-bold text-gray-400 mt-2 tracking-wide uppercase">30-Day Check-in: Review initial engagement and growth metrics with your Account Manager.</p>
                        </div>
                        <div>
                            <h3 className="font-black text-[#0d2a1a] uppercase text-lg">Learn - Month 2</h3>
                            <p className="text-[15px] font-medium text-gray-600 mt-2">Your social media campaigns go live, and we analyze performance—refining content strategies, adjusting posting schedules, and improving audience targeting to increase engagement and reach.</p>
                            <p className="text-[11px] font-bold text-gray-400 mt-2 tracking-wide uppercase">60-Day Check-in: Discuss performance updates and insights with your Account Manager.</p>
                        </div>
                        <div>
                            <h3 className="font-black text-[#0d2a1a] uppercase text-lg">Optimize - Month 3</h3>
                            <p className="text-[15px] font-medium text-gray-600 mt-2">We fine-tune strategies by focusing on top-performing posts, experimenting with new content formats, and improving ad performance (if applicable). By the end of month 3, you&apos;ll see measurable increases in engagement and audience growth.</p>
                            <p className="text-[11px] font-bold text-gray-400 mt-2 tracking-wide uppercase">90-Day Check-in: Assess progress and determine next steps to achieve your goals.</p>
                        </div>
                        <div>
                            <h3 className="font-black text-[#0d2a1a] uppercase text-lg">Manage &amp; Scale - Month 4+</h3>
                            <p className="text-[15px] font-medium text-gray-600 mt-2">We continue optimizing your strategy to boost your ROI and scale your online presence further.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
