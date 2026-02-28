import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, Share2, Download } from 'lucide-react';
import { getInsightBySlug } from '../services/api';

const InsightDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [insight, setInsight] = useState<Record<string, any> | null>(null);
    const [loading, setLoading] = useState(true);

    // Reading progress bar
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        const fetchInsight = async () => {
            try {
                const response = await getInsightBySlug(slug || '');
                setInsight(response.data);
            } catch (error) {
                console.error("Error fetching insight:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchInsight();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-8 h-8 rounded-full border-2 border-brand-200 border-t-accent animate-spin"></div>
        </div>
    );

    if (!insight) return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white pt-20">
            <h2 className="text-3xl font-display font-semibold text-brand-950 mb-6">Publication Unavailable.</h2>
            <Link to="/insights" className="btn-outline">Return to Journal</Link>
        </div>
    );

    return (
        <div className="bg-white min-h-screen">
            {/* Reading Progress Indicator */}
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left" style={{ scaleX }} />

            {/* Editorial Header */}
            <section className="pt-32 pb-16 bg-brand-50 border-b border-brand-200">
                <div className="container-content">
                    <Link to="/insights" className="inline-flex items-center text-[11px] font-semibold tracking-widest uppercase text-brand-500 hover:text-accent transition-colors mb-12">
                        <ArrowLeft size={14} className="mr-2" /> MIR Publishing Library
                    </Link>

                    <div className="flex items-center gap-4 text-xs font-bold text-brand-950 mb-8 tracking-widest uppercase">
                        <span>{insight.category_slug.replace('-', ' ')}</span>
                        <span className="w-1 h-1 rounded-full bg-accent"></span>
                        <span className="text-brand-500 font-medium tracking-wide flex items-center gap-1.5"><Clock size={12} /> 8 Min Read</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-brand-950 tracking-tight leading-tight mb-8">
                        {insight.title}
                    </h1>

                    <div className="h-px bg-brand-200 mb-8"></div>

                    <div className="flex flex-wrap items-center justify-between gap-6 pb-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-brand-950 rounded-full flex flex-shrink-0 items-center justify-center text-white font-display font-semibold">
                                M
                            </div>
                            <div>
                                <p className="font-semibold text-brand-950 text-sm">MIR Executive Research</p>
                                <p className="text-brand-500 text-xs font-serif italic">Published: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-900 border border-brand-200 px-4 py-2 hover:bg-brand-100 transition-colors">
                                <Share2 size={14} /> Share
                            </button>
                            <button className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-900 border border-brand-200 px-4 py-2 hover:bg-brand-100 transition-colors">
                                <Download size={14} /> PDF
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Publication Content */}
            <section className="py-24">
                <div className="container-content relative">

                    {/* Main Article Body */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="prose prose-lg prose-slate prose-headings:font-display prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline max-w-none text-brand-800 font-serif leading-loose"
                    >
                        {/* Drop cap for first paragraph to look editorial */}
                        <div className="font-serif text-[1.1rem]">
                            <p className="first-letter:text-6xl first-letter:font-display first-letter:font-semibold first-letter:text-brand-950 first-letter:float-left first-letter:pr-3 first-letter:leading-none">
                                {insight.content}
                            </p>

                            <h2 className="text-3xl text-brand-950 mt-16 mb-6">The Strategic Imperative</h2>
                            <p>
                                In navigating the complexities introduced by rapid market shifts, organizations must move beyond reactive methodologies. The fundamental premise of our research indicates that structural efficiency is not a byproduct of scale, but rather a deliberate architectural decision forged in data predictability.
                            </p>

                            <blockquote className="border-l-4 border-accent pl-6 py-2 my-12 bg-brand-50 p-6 italic text-xl text-brand-900">
                                "Growth without systemic integration is merely organized chaos waiting to collapse under its own logistical weight."
                            </blockquote>

                            <h3 className="text-2xl text-brand-950 mt-12 mb-6">Quantitative Markers</h3>
                            <p>
                                The ensuing analysis details the precise transition points where legacy structures break down. By modeling cross-industry logistical failures, we have isolated three critical junctures requiring immediate executive oversight.
                            </p>
                            <ul className="list-disc pl-6 space-y-3 marker:text-accent font-sans text-base">
                                <li><strong className="text-brand-950 font-semibold">Endpoint Redundancy:</strong> Eliminating overlapping data siloes.</li>
                                <li><strong className="text-brand-950 font-semibold">Yield Compression:</strong> Protecting margins against accelerating inflation metrics.</li>
                                <li><strong className="text-brand-950 font-semibold">Human Cap Optimization:</strong> Redeploying analytical labor to strategic tasks.</li>
                            </ul>
                        </div>
                    </motion.div>

                    <div className="h-px bg-brand-200 my-16"></div>

                    {/* Author Block */}
                    <div className="bg-brand-50 p-10 border border-brand-200">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-20 h-20 bg-brand-950 rounded-full flex flex-shrink-0 items-center justify-center text-white font-display text-2xl font-semibold">
                                M
                            </div>
                            <div>
                                <h4 className="font-display text-xl font-semibold text-brand-950 mb-2">MIR Research Institute</h4>
                                <p className="text-brand-600 font-serif mb-4 leading-relaxed">
                                    The think tank and analytical engine behind MIR Enterprises. Providing executive boards with the proprietary intelligence required to structure unassailable market dominance.
                                </p>
                                <Link to="/about/our-idea" className="link-editorial text-sm font-semibold tracking-wide uppercase text-brand-950">Learn About Our Vision</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default InsightDetail;
