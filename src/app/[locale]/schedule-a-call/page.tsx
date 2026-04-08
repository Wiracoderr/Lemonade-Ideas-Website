'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle } from 'lucide-react';
import { format, addDays, isSameDay, startOfToday, isWeekend } from 'date-fns';

interface SlotInfo {
    iso: string;
    label: string;
}

export default function SchedulePage() {
    const today = startOfToday();
    
    const upcomingDays = useMemo(() => {
        const days: Date[] = [];
        let curDate = today;
        let count = 0;
        
        while (days.length < 14 && count < 30) {
            if (!isWeekend(curDate)) {
                days.push(curDate);
            }
            curDate = addDays(curDate, 1);
            count++;
        }
        return days;
    }, [today]);

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [availableSlots, setAvailableSlots] = useState<SlotInfo[]>([]);
    const [selectedSlot, setSelectedSlot] = useState<SlotInfo | null>(null);
    const [isLoadingSlots, setIsLoadingSlots] = useState(false);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [notes, setNotes] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (!selectedDate) {
            setAvailableSlots([]);
            return;
        }

        const fetchSlots = async () => {
            setIsLoadingSlots(true);
            setSelectedSlot(null);
            try {
                const formattedDate = format(selectedDate, 'yyyy-MM-dd');
                const response = await fetch('/api/calendar/availability', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ date: formattedDate })
                });

                if (response.ok) {
                    const data = await response.json();
                    setAvailableSlots(data.availableSlots || []);
                } else {
                    setAvailableSlots([]);
                }
            } catch (error) {
                console.error("Availability error", error);
                setAvailableSlots([]);
            } finally {
                setIsLoadingSlots(false);
            }
        };

        fetchSlots();
    }, [selectedDate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!selectedSlot || !name || !email) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/calendar/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    notes,
                    slotTime: selectedSlot.iso
                })
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                alert('An error occurred while booking. It seems that slot was just taken. Please try another one.');
            }
        } catch (error) {
            console.error(error);
            alert('A networking error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <main className="min-h-screen bg-[#f2f8f9] font-['Poppins',sans-serif] flex items-center justify-center pt-24 pb-12">
                <div className="bg-white p-10 md:p-16 rounded-2xl shadow-xl max-w-2xl w-[90%] text-center border-t-8 border-[#1E3A1A]">
                    <CheckCircle className="w-24 h-24 text-[#3AAB43] mx-auto mb-6" />
                    <h1 className="text-[32px] md:text-[42px] font-[Oswald] font-bold text-[#1E3A1A] mb-4 uppercase">
                        Booking Confirmed!
                    </h1>
                    <p className="text-[#64748b] text-[16px] md:text-[18px] mb-8 leading-relaxed">
                        We have successfully scheduled your consultation call. <br className="hidden md:block" />
                        An email invitation has been sent to <strong>{email}</strong> with the calendar event and instructions.
                    </p>
                    <div className="bg-[#f8fafc] rounded-xl p-6 mb-8 text-left border border-[#e2e8f0]">
                        <h3 className="font-bold text-[#1E3A1A] mb-4 text-[18px] uppercase tracking-wide">Appointment Details</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <CalendarIcon className="w-5 h-5 text-[#3AAB43]" />
                                <span className="font-medium text-[#1E3A1A]">{selectedDate && format(selectedDate, "EEEE, MMMM do, yyyy")}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-[#3AAB43]" />
                                <span className="font-medium text-[#1E3A1A]">{selectedSlot?.label} (Pacific Time)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white font-['Poppins',sans-serif]">
            {/* Header Section */}
            <section className="bg-white pt-[120px] pb-12 md:pt-[160px] md:pb-16 text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-[28px] md:text-[42px] lg:text-[48px] font-[Oswald] font-bold uppercase leading-snug tracking-wide text-[#1E3A1A] mb-4">
                        SCHEDULE A <span className="text-[#3AAB43]">DISCOVERY CALL</span>
                    </h1>
                    <p className="text-[#4b5563] text-[16px] md:text-[18px] max-w-2xl mx-auto">
                        Choose a convenient time below to speak directly with our internet marketing expert. Let&apos;s discuss your goals and how we can grow your business.
                    </p>
                    <div className="flex justify-center w-full mt-6">
                        <img src="/images/layer-1.png" alt="underline decour" className="h-4 object-contain opacity-90" width={180} />
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 pb-24 h-auto min-h-[500px]">
                <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e2e8f0] overflow-hidden flex flex-col lg:flex-row">
                    
                    {/* Left: Date Selection */}
                    <div className="w-full lg:w-1/3 bg-[#f8fafc] border-r border-[#e2e8f0] p-6 md:p-10">
                        <h2 className="text-[20px] font-[Oswald] font-bold uppercase text-[#1E3A1A] mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-[#1E3A1A] text-white flex items-center justify-center text-[14px]">1</span>
                            Select a Date
                        </h2>
                        <div className="flex flex-col gap-3">
                            {upcomingDays.map((date, idx) => {
                                const isSelected = selectedDate && isSameDay(date, selectedDate);
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedDate(date)}
                                        className={`w-full text-left p-4 rounded-xl transition-all font-semibold flex items-center justify-between border ${isSelected ? 'bg-[#1E3A1A] text-[#FED52B] border-[#1E3A1A] shadow-md scale-[1.02]' : 'bg-white text-[#334155] border-[#cbd5e1] hover:border-[#1E3A1A] hover:shadow-sm'}`}
                                    >
                                        <div className="flex flex-col">
                                            <span className={`text-[12px] uppercase tracking-wider ${isSelected ? 'opacity-80' : 'text-[#64748b]'}`}>
                                                {format(date, "EEEE")}
                                            </span>
                                            <span className="text-[16px]">
                                                {format(date, "MMM do, yyyy")}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Middle: Time Selection */}
                    <div className={`w-full lg:w-1/3 border-r border-[#e2e8f0] p-6 md:p-10 transition-opacity duration-300 ${!selectedDate ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                        <h2 className="text-[20px] font-[Oswald] font-bold uppercase text-[#1E3A1A] mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-[#1E3A1A] text-white flex items-center justify-center text-[14px]">2</span>
                            Select a Time (Pacific)
                        </h2>
                        
                        {!selectedDate && (
                            <p className="text-[#64748b] text-center mt-10">Please select a date first.</p>
                        )}

                        {selectedDate && isLoadingSlots && (
                            <div className="flex justify-center items-center mt-10">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1E3A1A]"></div>
                            </div>
                        )}

                        {selectedDate && !isLoadingSlots && availableSlots.length === 0 && (
                            <p className="text-[#e11d48] text-center mt-10 font-medium">Fully booked on this day. Please select another date.</p>
                        )}

                        {selectedDate && !isLoadingSlots && availableSlots.length > 0 && (
                            <div className="grid grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                {availableSlots.map((slot, idx) => {
                                    const isSelected = selectedSlot?.iso === slot.iso;
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedSlot(slot)}
                                            className={`py-3 px-2 text-center rounded-lg font-semibold border transition-all text-[15px] ${isSelected ? 'bg-[#3AAB43] text-white border-[#3AAB43] shadow-md' : 'bg-white text-[#1E3A1A] border-[#1E3A1A]/30 hover:border-[#1E3A1A]'}`}
                                        >
                                            {slot.label}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Right: Booking Form */}
                    <div className={`w-full lg:w-1/3 bg-white p-6 md:p-10 transition-opacity duration-300 ${!selectedSlot ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                         <h2 className="text-[20px] font-[Oswald] font-bold uppercase text-[#1E3A1A] mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-[#1E3A1A] text-white flex items-center justify-center text-[14px]">3</span>
                            Your Details
                        </h2>
                        
                        {!selectedSlot ? (
                             <p className="text-[#64748b] text-center mt-10">Please select a time slot.</p>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="p-4 bg-[#f2f8f9] rounded-xl mb-2 text-[14px] text-[#1E3A1A] border border-[#e2e8f0]">
                                    <span className="font-bold block uppercase tracking-wider text-[#64748b] text-[11px] mb-1">SELECTED SLOT:</span>
                                    <span className="font-semibold">{format(selectedDate!, "EEEE, MMMM do")} at {selectedSlot.label} (Pacific Time)</span>
                                </div>
                                
                                <div className="space-y-1">
                                    <label className="text-[13px] font-semibold text-[#1E3A1A] uppercase">Full Name *</label>
                                    <input required type="text" value={name} onChange={e => setName(e.target.value)} className="w-full border-b border-[#d1d5db] py-2 focus:outline-none focus:border-[#3AAB43] transition-colors text-[#1E3A1A]" placeholder="John Doe" />
                                </div>
                                
                                <div className="space-y-1">
                                    <label className="text-[13px] font-semibold text-[#1E3A1A] uppercase">Email Address *</label>
                                    <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border-b border-[#d1d5db] py-2 focus:outline-none focus:border-[#3AAB43] transition-colors text-[#1E3A1A]" placeholder="john@company.com" />
                                </div>
                                
                                <div className="space-y-1">
                                    <label className="text-[13px] font-semibold text-[#1E3A1A] uppercase">Phone Number</label>
                                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="w-full border-b border-[#d1d5db] py-2 focus:outline-none focus:border-[#3AAB43] transition-colors text-[#1E3A1A]" placeholder="(555) 123-4567" />
                                </div>
                                
                                <div className="space-y-1">
                                    <label className="text-[13px] font-semibold text-[#1E3A1A] uppercase">Anything we should know?</label>
                                    <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} className="w-full border-b border-[#d1d5db] py-2 focus:outline-none focus:border-[#3AAB43] transition-colors resize-none text-[#1E3A1A]" placeholder="I'd like to discuss my website redesign..." />
                                </div>
                                
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`mt-4 w-full bg-[#1E3A1A] text-[#FED52B] hover:bg-[#2c5225] font-[Oswald] font-bold uppercase tracking-wide py-4 md:py-5 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                                >
                                    {isSubmitting ? 'Booking...' : 'CONFIRM BOOKING'}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </section>
            
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1; 
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #cbd5e1; 
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8; 
                }
            `}</style>
        </main>
    );
}
