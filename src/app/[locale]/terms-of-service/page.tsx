import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    await getTranslations({ locale, namespace: 'Metadata' });
    return {
        title: "Terms of Service | Lemonade Ideas",
        description: "Terms of Service and Fulfillment Policies for Lemonade Ideas LLC.",
    };
}

export default function TermsOfService() {
    return (
        <main className="bg-white min-h-screen pt-32 pb-24 text-gray-800">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    
                    {/* Header Section */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wide text-[#1E3A1A]">
                            Terms Of Service
                        </h1>
                        <div className="mt-4 sep-yellow"></div>
                    </div>

                    {/* Content Section */}
                    <div className="font-body text-[16px] md:text-[18px] leading-relaxed space-y-8 text-gray-700">
                        
                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Services to Be Performed</h2>
                            <p>
                                Lemonade Ideas LLC. agrees to deliver the services outlined in the attached proposal (the Project). Lemonade Ideas LLC. retains the right to determine the methods, processes, and techniques necessary to achieve the results specified by the Client. The Client may provide direction regarding the desired outcomes but will not oversee or control how Lemonade Ideas LLC. and its team complete the work. If necessary, Lemonade Ideas LLC. may employ subcontractors or additional staff at its expense, and the Client will not supervise their activities. All services will be carried out at agreed-upon times as discussed by both parties.
                            </p>
                            <p className="mt-4">
                                When applicable, the Client engages Lemonade Ideas LLC. to perform services related to the development, marketing, and online promotion of their business using Lemonade Ideas LLC. expertise.
                            </p>
                            <p className="mt-4">
                                The scope of services may be updated or amended as mutually agreed between the Client and Lemonade Ideas LLC.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Fulfillment Policies</h2>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Refund Policy:</strong> If Lemonade Ideas LLC. does not deliver the services as described in its official agreements, marketing materials, or account communications, the Client is entitled to a refund for any undelivered services.</li>
                                <li><strong>Delivery Policy:</strong> Delivery timelines for Lemonade Ideas LLC. services vary based on the type of service provided. Regular updates will be communicated throughout the project to ensure the Client is fully informed.</li>
                                <li><strong>Cancellation Policy:</strong> All services provided by Lemonade Ideas LLC. are offered on a month-to-month basis. While certain services may require recommended timelines for optimal results, the Client has the freedom to cancel at any time. A formal cancellation notice of 30 days is required.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Compensation</h2>
                            <p>
                                The Client agrees to compensate Lemonade Ideas LLC. as per the terms outlined in the attached proposal. Payments are due on an agreed-upon schedule unless modifications are made in writing by mutual consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Third-Party Expenses</h2>
                            <p>
                                The Client will reimburse Lemonade Ideas LLC. for any reasonable expenses incurred solely for the benefit of the Project. Examples include direct costs related to specific third-party tools or services required for the Client&apos;s business needs.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Independent Contractor</h2>
                            <p>
                                Both parties acknowledge and agree that Lemonade Ideas LLC. operates as an independent contractor and is not an agent, employee, partner, or joint venturer of the Client. The Client will not withhold or remit taxes, insurance, or benefits for Lemonade Ideas LLC. or its team.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Copyrights and Trademarks</h2>
                            <p>
                                The Client guarantees that any materials (text, images, designs, trademarks, etc.) provided to Lemonade Ideas LLC. are owned by the Client or are legally authorized for use. The Client indemnifies Lemonade Ideas LLC. against any legal claims arising from the misuse of these materials.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Proprietary Rights</h2>
                            <p>
                                The Client does not gain ownership of Lemonade Ideas LLC. proprietary tools, images, designs, or intellectual property as part of this agreement. The Client also agrees not to reverse engineer, replicate, or modify Lemonade Ideas LLC. intellectual assets without written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Laws Affecting Electronic Commerce</h2>
                            <p>
                                The Client is solely responsible for compliance with any local, state, or federal laws, taxes, and regulations affecting their e-commerce operations in California. The Client agrees to indemnify Lemonade ideas LLC. against any claims arising from these responsibilities.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Indemnification</h2>
                            <p>
                                The Client agrees to indemnify and hold Lemonade ideas LLC. harmless from any liabilities, claims, or damages arising from the services rendered or the use of materials provided by the Client.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Taxes</h2>
                            <p>
                                The Client is responsible for any applicable state or local taxes, including sales and use taxes, associated with the services provided by Lemonade ideas LLC.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Termination of Services</h2>
                            <p className="mb-3">This Agreement may terminate under the following conditions:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Completion of the Project.</li>
                                <li>Non-payment by the Client after five days of notice.</li>
                                <li>Material breach of agreement terms.</li>
                                <li>Thirty (30) days written notice by either party.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Confidential Information</h2>
                            <p>
                                Any confidential information disclosed during the course of this Agreement will remain the exclusive property of the disclosing party. Both parties agree to safeguard confidential materials and refrain from sharing them without prior authorization.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Return of Client Property</h2>
                            <p>
                                At the termination of this Agreement, Lemonade ideas LLC. agrees to return all materials provided by the Client.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Arbitration of Disputes</h2>
                            <p>
                                Any disputes arising from this Agreement will first attempt resolution through informal negotiations. If unresolved, disputes will be settled through arbitration in accordance with California law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Force Majeure</h2>
                            <p>
                                Neither party will be held liable for failure to perform due to unforeseen circumstances such as natural disasters, labor strikes, or acts of government.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Assignment</h2>
                            <p>
                                This Agreement may not be transferred or assigned without prior written consent from both parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold uppercase text-[#1E3A1A] mb-4">Governing Law</h2>
                            <p>
                                This Agreement will be governed by and interpreted under the laws of the State of California.
                            </p>
                        </section>

                    </div>
                </div>
            </main>
    );
}
