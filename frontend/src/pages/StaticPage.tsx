import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPageBySlug, getLeadership } from '../services/api';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

const StaticPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [pageData, setPageData] = useState<Record<string, any> | null>(null);
    const [leadership, setLeadership] = useState<Record<string, any>[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                if (slug === 'leadership') {
                    const res = await getLeadership();
                    setLeadership(res.data);
                    setPageData({
                        title: "Managing Partners",
                        description: "The architects of corporate transformation. Our leadership syndicate directs the global strategy of the MIR Enterprises ecosystem."
                    });
                } else {
                    const res = await getPageBySlug(slug || '');
                    setPageData(res.data);
                }
            } catch (error) {
                console.error("Error fetching page data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-8 h-8 rounded-full border-2 border-brand-200 border-t-accent animate-spin"></div>
        </div>
    );

    if (!pageData) return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white pt-20">
            <h2 className="text-3xl font-display font-semibold mb-6">Documentation Unavailable.</h2>
            <Link to="/" className="btn-outline">Return to Ecosystem</Link>
        </div>
    );

    return (
        <div className="bg-white min-h-screen">
            {/* Firm Narrative Header */}
            <section className="pt-40 pb-20 bg-brand-950 text-white relative flex items-end min-h-[50vh]">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-800 to-brand-950"></div>
                <div className="container-content relative z-10 w-full text-center">
                    <span className="eyebrow text-accent mb-6">Institutional Identity</span>
                    <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight leading-tight mb-8">
                        {pageData.title}
                    </h1>
                    {pageData.description && (
                        <p className="text-xl md:text-2xl font-serif text-brand-300 leading-relaxed max-w-2xl mx-auto">
                            {pageData.description}
                        </p>
                    )}
                </div>
            </section>

            <section className="py-24">
                <div className="container-content">
                    {slug === 'leadership' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {leadership.map((leader, index) => (
                                <FadeIn key={leader.id} delay={index * 0.1}>
                                    <div className="group border border-brand-200 bg-white hover:border-brand-950 transition-colors duration-500 overflow-hidden text-center h-full">
                                        {/* Placeholder for professional portrait */}
                                        <div className="h-72 bg-brand-50 relative overflow-hidden flex items-center justify-center">
                                            <div className="absolute inset-0 bg-brand-100 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className="w-20 h-20 rounded-full border border-brand-300 flex items-center justify-center relative z-10 bg-white">
                                                <span className="font-display text-2xl text-brand-400">{leader.name.charAt(0)}</span>
                                            </div>
                                        </div>
                                        <div className="p-8">
                                            <h3 className="text-2xl font-display font-semibold text-brand-950 mb-2">{leader.name}</h3>
                                            <p className="text-xs font-bold tracking-widest text-accent uppercase mb-6">{leader.role}</p>
                                            <p className="text-sm font-serif text-brand-600 leading-relaxed mb-6">
                                                {leader.bio.length > 120 ? `${leader.bio.substring(0, 120)}...` : leader.bio}
                                            </p>
                                            <a href={`mailto:${leader.contact_email}`} className="link-editorial text-xs font-semibold tracking-wide uppercase text-brand-900">
                                                Contact Partner
                                            </a>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    ) : (
                        <FadeIn>
                            <div className="prose prose-lg prose-slate prose-headings:font-display prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline max-w-none text-brand-700 font-serif leading-loose">
                                <p className="first-letter:text-6xl first-letter:font-display first-letter:font-semibold first-letter:text-brand-950 first-letter:float-left first-letter:pr-3 first-letter:leading-none">
                                    {pageData.content}
                                </p>

                                {/* Simulated trust narrative elements for deep editorial sizing */}
                                {slug === 'our-idea' && (
                                    <>
                                        <h2 className="text-3xl text-brand-950 mt-16 mb-6">The Founding Thesis</h2>
                                        <p>
                                            MIR Enterprises was structured on a singular architectural thesis: The modern corporate landscape is highly fragmented, leaving massive margins lost to inefficiency. We built MIR Consulting to operate as the vanguard unit, restructuring complex entities before integrating them into our broader ecosystem metrics.
                                        </p>

                                        <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-y border-brand-200">
                                            <div>
                                                <span className="text-4xl font-display font-light text-brand-300 block mb-4">Integrity</span>
                                                <p className="text-sm leading-relaxed">We operate within absolute discretion. Our mandates regularly reshape competitive landscapes, requiring impenetrable data silos.</p>
                                            </div>
                                            <div>
                                                <span className="text-4xl font-display font-light text-brand-300 block mb-4">Velocity</span>
                                                <p className="text-sm leading-relaxed">Consulting without execution is academic. Our frameworks are engineered to radically alter logistics within the first financial quarter.</p>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {slug === 'company-future' && (
                                    <>
                                        <h2 className="text-3xl text-brand-950 mt-16 mb-6">The Holding Structure</h2>
                                        <p>
                                            MIR Consulting represents the first pillar of the MIR ecosystem. Over the next decade, our expansion thesis outlines the aggressive incubation and acquisition of parallel ventures leveraging our centralized data intelligence.
                                        </p>
                                        <ul className="list-none pl-0 space-y-6 mt-10">
                                            <li className="flex gap-6 border border-brand-100 p-6 bg-brand-50 shadow-sm">
                                                <div className="w-12 h-12 bg-white flex shrink-0 items-center justify-center font-display font-bold text-accent shadow-sm">T1</div>
                                                <div>
                                                    <strong className="block text-brand-950 font-sans tracking-wide uppercase text-sm mb-2">Technological Ventures</strong>
                                                    <p className="text-base m-0 leading-relaxed">Developing proprietary internal SaaS capabilities capable of automating the exact supply chain bottlenecks we consult against.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </>
                                )}
                            </div>
                        </FadeIn>
                    )}

                    {/* Contact Final CTA */}
                    <div className="mt-32 text-center pt-16 border-t border-brand-100">
                        <span className="eyebrow text-brand-500 mb-6">Next Steps</span>
                        <h3 className="text-3xl font-display font-semibold text-brand-950 mb-8">Initiate Executive Dialogue</h3>
                        <Link to="/about/leadership" className="btn-primary">
                            Contact the Partners
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StaticPage;
