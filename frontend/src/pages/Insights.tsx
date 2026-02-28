import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getInsightsByCategory } from '../services/api';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

const Insights = () => {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [insights, setInsights] = useState<Record<string, any>[]>([]);
    const [loading, setLoading] = useState(true);

    // Hardcode primary categories to maintain visual stability while waiting for API
    const categories = [
        { title: "All Research", slug: "all" },
        { title: "Case Studies", slug: "case-studies" },
        { title: "Strategic Articles", slug: "articles" },
        { title: "Partner Blogs", slug: "blogs" },
        { title: "Audio Podcasts", slug: "podcasts" },
    ];

    useEffect(() => {
        const fetchInsights = async () => {
            setLoading(true);
            try {
                let allInsights: Record<string, any>[] = [];
                if (activeCategory === 'all') {
                    // Fetch from all categories (simluated by fetching case-studies and articles)
                    const [csData, artData] = await Promise.all([
                        getInsightsByCategory('case-studies'),
                        getInsightsByCategory('articles')
                    ]);
                    allInsights = [...csData.data, ...artData.data];
                } else {
                    const response = await getInsightsByCategory(activeCategory);
                    allInsights = response.data;
                }
                setInsights(allInsights);
            } catch (error) {
                console.error("Error fetching insights:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchInsights();
    }, [activeCategory]);

    return (
        <div className="bg-brand-50 min-h-screen">
            {/* Header */}
            <section className="pt-40 pb-16 bg-brand-950 text-white">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <span className="eyebrow text-brand-400 mb-6">MIR Publishing</span>
                        <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight leading-tight mb-8">
                            Global Perspectives
                        </h1>
                        <p className="text-xl font-serif text-brand-300 leading-relaxed">
                            Institutional publications, operational case studies, and systemic thesis research curated directly from our managing partners.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="border-b border-brand-200 bg-white sticky top-[88px] z-40 shadow-sm">
                <div className="container-custom py-4">
                    <div className="flex space-x-8 overflow-x-auto no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat.slug}
                                onClick={() => setActiveCategory(cat.slug)}
                                className={`whitespace-nowrap text-sm font-semibold tracking-wide uppercase py-2 relative transition-colors duration-300 ${activeCategory === cat.slug ? 'text-brand-950' : 'text-brand-400 hover:text-brand-700'
                                    }`}
                            >
                                {cat.title}
                                {activeCategory === cat.slug && (
                                    <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Insights Grid */}
            <section className="py-24">
                <div className="container-custom">
                    {loading ? (
                        <div className="flex justify-center py-32">
                            <div className="w-8 h-8 rounded-full border-2 border-brand-300 border-t-brand-950 animate-spin"></div>
                        </div>
                    ) : insights.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {insights.map((insight, index) => (
                                <FadeIn key={insight.id} delay={index * 0.1}>
                                    <Link to={`/insights/${insight.slug}`} className="block group bg-white border border-brand-200 h-full overflow-hidden hover:shadow-xl transition-shadow duration-500 flex flex-col">
                                        <div className="h-48 bg-brand-900 relative overflow-hidden flex-shrink-0">
                                            <div className="absolute inset-0 bg-brand-950 opacity-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                                            {/* Subtle graphic pattern */}
                                            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                                            <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-brand-950">
                                                {insight.category_slug.replace('-', ' ')}
                                            </div>
                                        </div>
                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="text-[10px] font-bold tracking-widest uppercase text-brand-500 mb-4">
                                                Strategy • 8 Min Read
                                            </div>
                                            <h3 className="text-2xl font-display font-semibold text-brand-950 leading-snug mb-4 group-hover:text-accent transition-colors">
                                                {insight.title}
                                            </h3>
                                            <p className="text-sm font-serif text-brand-600 leading-relaxed mb-8 flex-grow">
                                                An analysis of systemic implementation and strategic structural evolution.
                                            </p>
                                            <span className="link-editorial text-brand-900 font-semibold tracking-wide uppercase text-xs self-start">Read the Full Publication</span>
                                        </div>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                    ) : (
                        <div className="py-32 text-center text-brand-500 font-serif">
                            No publications available in this category yet.
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Insights;
