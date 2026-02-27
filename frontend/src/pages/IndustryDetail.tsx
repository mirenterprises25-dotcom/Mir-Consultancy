import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, TrendingUp } from 'lucide-react';
import { getIndustryBySlug } from '../services/api';

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

const IndustryDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [industry, setIndustry] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIndustry = async () => {
            try {
                const response = await getIndustryBySlug(slug || '');
                setIndustry(response.data);
            } catch (error) {
                console.error("Error fetching industry:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchIndustry();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-brand-50">
            <div className="w-8 h-8 rounded-full border-2 border-brand-950 border-t-accent animate-spin"></div>
        </div>
    );

    if (!industry) return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-brand-50 pt-20">
            <h2 className="text-3xl font-display font-semibold mb-6">Sector Dossier Unavailable.</h2>
            <Link to="/" className="btn-outline">Return to Ecosystem</Link>
        </div>
    );

    return (
        <div className="bg-brand-50 min-h-screen pb-32">
            {/* Editorial Header */}
            <section className="pt-40 pb-20 bg-brand-950 text-white relative flex items-end min-h-[50vh]">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent to-transparent"></div>
                <div className="container-custom relative z-10 w-full">
                    <Link to="/" className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-brand-400 hover:text-white transition-colors mb-12">
                        <ArrowLeft size={14} className="mr-2" /> Sector Analysis
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8">
                            <span className="eyebrow text-accent mb-6">MIR Coverage Area</span>
                            <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight leading-tight mb-8">
                                {industry.name}
                            </h1>
                            <p className="text-xl md:text-2xl font-serif text-brand-300 leading-relaxed max-w-2xl">
                                {industry.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Structural Analysis Content */}
            <section className="pt-24">
                <div className="container-content">
                    <FadeIn>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
                            <div className="lg:col-span-2 prose prose-lg prose-slate prose-headings:font-display prose-headings:font-semibold max-w-none text-brand-700 font-serif leading-loose">
                                <h2 className="text-3xl text-brand-950 mb-8 border-b border-brand-200 pb-4">The Strategic Mandate</h2>
                                <p className="mb-8">
                                    In the {industry.name} sector, incremental optimization is no longer sufficient. Enterprise value is now disproportionately awarded to organizations capable of executing systemic, data-validated structural transformations. We view this sector not through the lens of traditional operations, but as an interconnected ecosystem of asset yields, supply chain velocities, and patron behavioral data.
                                </p>
                                <p>
                                    Our managing partners have architected turnaround protocols for globally distributed operations within this vertical, consistently identifying margin expansion opportunities hidden within legacy operational bloat. The methodology is rigorous, quantitative, and exclusively tailored for dominant market players.
                                </p>
                            </div>

                            {/* Metadata / Impact Column */}
                            <div className="lg:col-span-1">
                                <div className="bg-white border border-brand-200 p-8 shadow-sm relative">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
                                    <span className="text-xs tracking-widest text-brand-500 font-bold uppercase block mb-6">Quantitative Impact</span>
                                    <div className="space-y-8">
                                        <div>
                                            <Target className="text-brand-950 mb-3" size={24} strokeWidth={1.5} />
                                            <h4 className="font-display text-xl text-brand-950 font-semibold mb-2">Cost Restructuring</h4>
                                            <p className="text-sm text-brand-600">Averaging 18-24% reduction in enterprise logistical overhead.</p>
                                        </div>
                                        <div className="h-px bg-brand-100"></div>
                                        <div>
                                            <TrendingUp className="text-brand-950 mb-3" size={24} strokeWidth={1.5} />
                                            <h4 className="font-display text-xl text-brand-950 font-semibold mb-2">Yield Expansion</h4>
                                            <p className="text-sm text-brand-600">Proprietary modeling driving top-line growth through predictive modeling.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="bg-brand-950 text-white p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <h3 className="text-3xl font-display font-semibold mb-4">Orchestrate a Strategic Response</h3>
                                <p className="text-brand-300 font-serif text-lg leading-relaxed">
                                    Determine the exact parameters defining enterprise success within {industry.name}. Engage our partners for a confidential preliminary logistical audit.
                                </p>
                            </div>
                            <Link to="/about/leadership" className="btn-accent shrink-0 w-full md:w-auto">
                                Engage the Firm
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default IndustryDetail;
