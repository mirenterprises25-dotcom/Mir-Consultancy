import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, GitMerge, FileSpreadsheet, Lock } from 'lucide-react';
import { getCapabilityBySlug } from '../services/api';

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

const CapabilityDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [capability, setCapability] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCapability = async () => {
            try {
                const response = await getCapabilityBySlug(slug || '');
                setCapability(response.data);
            } catch (error) {
                console.error("Error fetching capability:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCapability();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-brand-950">
            <div className="w-8 h-8 rounded-full border-2 border-brand-800 border-t-accent animate-spin"></div>
        </div>
    );

    if (!capability) return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-brand-950 text-white pt-20">
            <h2 className="text-3xl font-display font-semibold mb-6">Methodology Unavailable.</h2>
            <Link to="/" className="btn-outline-dark">Return to Ecosystem</Link>
        </div>
    );

    return (
        <div className="bg-white min-h-screen">
            {/* Capability Header (Light Theme for methodology) */}
            <section className="pt-40 pb-20 bg-brand-50 border-b border-brand-200">
                <div className="container-custom">
                    <Link to="/" className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-brand-500 hover:text-accent transition-colors mb-12">
                        <ArrowLeft size={14} className="mr-2" /> Consulting Frameworks
                    </Link>
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-brand-950 tracking-tight leading-tight mb-8">
                            {capability.name}
                        </h1>
                        <p className="text-xl md:text-2xl font-serif text-brand-600 leading-relaxed border-l-2 border-accent pl-6">
                            {capability.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Methodology Narrative */}
            <section className="py-24">
                <div className="container-content">
                    <FadeIn>
                        <div className="prose prose-lg prose-slate prose-headings:font-display prose-headings:font-semibold max-w-none text-brand-700 font-serif leading-loose mb-24">
                            <h2 className="text-3xl text-brand-950 mb-8">Implementation Philosophy</h2>
                            <p className="mb-8">
                                Capabilities at MIR Consulting are not standardized products; they are rigorous frameworks deployed to solve massive structural inefficiencies. The {capability.name} methodology requires a full systemic audit before any strategic execution begins.
                            </p>
                            <p>
                                Our partners embed directly alongside C-level operators to ensure that theoretical strategy seamlessly transitions into measurable, quantitative change on the ground floor. Intelligence is useless without operational extraction.
                            </p>
                        </div>

                        {/* The Blueprint Framework Grid */}
                        <div className="border-t border-brand-200 pt-16 mt-16">
                            <span className="eyebrow text-brand-950 mb-12">The MIR Blueprint</span>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div className="flex flex-col gap-4">
                                    <span className="text-3xl font-display font-light text-brand-300">01</span>
                                    <GitMerge size={24} className="text-accent mb-2" strokeWidth={1.5} />
                                    <h4 className="font-semibold text-brand-950 text-lg">Systemic Integration</h4>
                                    <p className="text-sm font-serif text-brand-600">Aligning decentralized systems into a unified operational command structure.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="text-3xl font-display font-light text-brand-300">02</span>
                                    <FileSpreadsheet size={24} className="text-accent mb-2" strokeWidth={1.5} />
                                    <h4 className="font-semibold text-brand-950 text-lg">Data Harvesting</h4>
                                    <p className="text-sm font-serif text-brand-600">Refining raw inputs into board-level strategic visualization.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="text-3xl font-display font-light text-brand-300">03</span>
                                    <Lock size={24} className="text-accent mb-2" strokeWidth={1.5} />
                                    <h4 className="font-semibold text-brand-950 text-lg">Risk Mitigation</h4>
                                    <p className="text-sm font-serif text-brand-600">Securing aggressive growth trajectories against market volatility.</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="bg-brand-950 py-24 text-center border-t-4 border-accent">
                <div className="container-content">
                    <FadeIn>
                        <h3 className="text-3xl md:text-4xl font-display font-semibold text-white mb-8">Ready to deploy the framework?</h3>
                        <Link to="/about/leadership" className="btn-accent">
                            Consult our Partners
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default CapabilityDetail;
