import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Settings, BarChart, TrendingUp, Cpu } from 'lucide-react';
import { useRef } from 'react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={className}
    >
        {children}
    </motion.div>
);

const Home = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Parallax effects
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <div className="flex flex-col w-full overflow-hidden bg-brand-50">

            {/* 1. Hero Section: Confident Positioning Statement */}
            <section ref={heroRef} className="relative min-h-[90vh] flex items-center bg-brand-950 text-white overflow-hidden pt-20">

                {/* Abstract Data-Inspired Background (Subtle) */}
                <motion.div
                    style={{ y: yBg }}
                    className="absolute inset-0 opacity-10 pointer-events-none"
                >
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-accent-light to-transparent rounded-full blur-[150px] transform translate-x-1/3 -translate-y-1/3"></div>
                    {/* Subtle grid lines mimicking data structures */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                </motion.div>

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            >
                                <span className="eyebrow mb-6">Strategic Advisory</span>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold leading-[1.1] mb-8 tracking-tight">
                                    Navigating Complexity.<br />
                                    <span className="font-light italic text-brand-300">Driving Excellence.</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-brand-400 font-serif leading-relaxed max-w-2xl mb-12">
                                    We partner with visionary enterprise leaders to orchestrate structural transformations, optimize global operations, and pioneer high-yield digital integration.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6">
                                    <Link to="/about/our-idea" className="btn-accent text-white group relative overflow-hidden">
                                        <span className="relative z-10 flex items-center gap-3 tracking-wide">
                                            Discover Corporate Vision <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>
                                    <Link to="/insights" className="btn-outline-dark tracking-wide">
                                        Read Elite Perspectives
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right side abstract graphic / stat box */}
                        <div className="hidden lg:block lg:col-span-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="border border-brand-800 bg-brand-900/50 backdrop-blur-sm p-10 relative"
                            >
                                <div className="absolute top-0 left-0 w-2 h-2 bg-accent -translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 bg-accent translate-x-1/2 translate-y-1/2"></div>

                                <p className="text-sm font-semibold tracking-widest text-brand-400 uppercase mb-8">The MIR Mandate</p>
                                <p className="text-2xl font-serif text-brand-200 leading-snug italic mb-10">
                                    "True value is conceptualized in the boardroom but realized in the relentless optimization of systemic data capabilities."
                                </p>
                                <div className="h-px w-full bg-brand-800 mb-6"></div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-800 rounded-full flex items-center justify-center">
                                        <span className="font-display font-bold text-accent">M</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white tracking-wide">Managing Partners</p>
                                        <p className="text-xs text-brand-500">MIR Enterprises Ecosystem</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Industries Served (Asymmetrical Grid) */}
            <section className="py-32 bg-white relative">
                <div className="container-custom">
                    <FadeIn className="max-w-3xl mb-24">
                        <span className="eyebrow">Sector Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-display font-semibold text-brand-950 mb-8">Where deep vertical expertise meets cross-industry execution.</h2>
                        <p className="text-xl text-brand-600 font-serif leading-relaxed">
                            We do not believe in generic methodologies. Our consulting practice focuses on high-impact sectors where our proprietary data models and seasoned partners can dictate the margin between market participation and market dominance.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12 lg:gap-x-20">
                        {/* Left Column */}
                        <div className="md:col-span-5 md:mt-24 flex flex-col gap-16 md:gap-32">
                            {[
                                { title: "Restaurants & Fast Food", slug: "restaurants-fast-food", num: "01", desc: "Scaling high-volume operations and pioneering automated supply chains for global QSR dominance." },
                                { title: "Retail & Grocery", slug: "retail-grocery", num: "03", desc: "Restructuring stagnant legacy retail into hyper-agile omnichannel distribution networks." },
                            ].map((ind, i) => (
                                <FadeIn key={i}>
                                    <Link to={`/industries/${ind.slug}`} className="group block">
                                        <div className="flex items-baseline gap-4 mb-4">
                                            <span className="text-sm font-bold text-brand-400 group-hover:text-accent transition-colors">{ind.num}</span>
                                            <h3 className="text-2xl lg:text-3xl font-display font-semibold text-brand-900 group-hover:text-brand-950 transition-colors">{ind.title}</h3>
                                        </div>
                                        <div className="pl-9">
                                            <p className="text-brand-600 font-serif leading-relaxed mb-6">{ind.desc}</p>
                                            <span className="link-editorial text-sm font-semibold tracking-wide uppercase">Sector Analysis &rarr;</span>
                                        </div>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>

                        {/* Right Column (Offset) */}
                        <div className="md:col-span-7 flex flex-col gap-16 md:gap-32">
                            {[
                                { title: "Hotels & Hospitality", slug: "hotels-hospitality", num: "02", desc: "Elevating portfolio yields through aggressively optimized property management intelligence and high-tier patron retention architectures." },
                                { title: "Tourism Businesses", slug: "tourism-businesses", num: "04", desc: "Engineering destination logistics to handle massive scale while maintaining premium brand parity." },
                            ].map((ind, i) => (
                                <FadeIn key={i}>
                                    <Link to={`/industries/${ind.slug}`} className="group block bg-brand-50 p-10 md:p-14 hover:bg-brand-100 transition-colors duration-500">
                                        <div className="flex items-baseline gap-4 mb-6">
                                            <span className="text-sm font-bold text-accent">{ind.num}</span>
                                            <h3 className="text-2xl lg:text-3xl font-display font-semibold text-brand-900">{ind.title}</h3>
                                        </div>
                                        <p className="text-brand-700 font-serif text-lg leading-relaxed mb-10">{ind.desc}</p>
                                        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-950 group-hover:text-accent transition-colors">
                                            Sector Analysis <ArrowRight size={16} />
                                        </span>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Consulting Capabilities (Methodology Style) */}
            <section className="py-32 bg-brand-950 text-white relative">
                {/* Subtle structural lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-800 to-transparent"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-900/50 hidden lg:block"></div>

                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8 border-b border-brand-800 pb-12">
                        <div className="max-w-2xl">
                            <span className="eyebrow text-brand-400">Consulting Frameworks</span>
                            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">Execution requires ruthless structural clarity.</h2>
                        </div>
                        <Link to="/about/our-idea" className="text-sm tracking-wide uppercase font-semibold link-editorial text-brand-300">
                            View Firm Methodology
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {[
                            { title: "Operations Optimization", slug: "operations-optimization", icon: <Settings strokeWidth={1.5} size={32} />, desc: "Radical supply chain restructuring to drive cost efficiencies and operational velocity." },
                            { title: "Data Analytics & BI", slug: "data-analytics-bi", icon: <BarChart strokeWidth={1.5} size={32} />, desc: "Deploying proprietary machine learning models to synthesize immense datasets into board-level strategy." },
                            { title: "Business Expansion", slug: "business-expansion-strategy", icon: <TrendingUp strokeWidth={1.5} size={32} />, desc: "Aggressive Go-to-Market sequencing, M&A due diligence, and global portfolio scaling." },
                            { title: "Digital Transformation", slug: "digital-transformation", icon: <Cpu strokeWidth={1.5} size={32} />, desc: "Systemic modernization of legacy architectures into agile, cloud-native enterprise ecosystems." },
                        ].map((cap, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <Link to={`/capabilities/${cap.slug}`} className="group block h-full">
                                    <div className="text-brand-500 mb-8 group-hover:text-accent group-hover:-translate-y-2 transition-all duration-300">
                                        {cap.icon}
                                    </div>
                                    <h4 className="text-xl font-display font-medium text-white mb-4 pr-4">{cap.title}</h4>
                                    <p className="text-brand-400 text-sm leading-relaxed mb-8">{cap.desc}</p>
                                    <div className="w-8 h-px bg-brand-700 group-hover:w-full group-hover:bg-accent transition-all duration-500"></div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Thought Leadership (Editorial Journal Layout) */}
            <section className="py-32 bg-brand-50">
                <div className="container-custom">
                    <FadeIn className="text-center max-w-2xl mx-auto mb-20">
                        <span className="eyebrow">Global Perspectives</span>
                        <h2 className="text-4xl md:text-5xl font-display font-semibold text-brand-950 mb-6">Institutional Intelligence.</h2>
                        <p className="text-lg text-brand-600 font-serif">Deep-dive research, market thesis publications, and operational case studies authored by MIR Partners.</p>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Featured Large Journal Article */}
                        <FadeIn className="lg:col-span-2">
                            <Link to="/insights/revitalizing-global-retail" className="block group bg-white border border-brand-200 h-full overflow-hidden hover:shadow-xl transition-shadow duration-500">
                                <div className="h-72 bg-brand-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-brand-950 opacity-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                                    {/* Mock graph pattern */}
                                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                                    <div className="absolute top-6 left-6 bg-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-brand-950">
                                        Case Study
                                    </div>
                                </div>
                                <div className="p-10 md:p-14">
                                    <div className="flex items-center gap-4 text-xs font-semibold text-brand-500 mb-4 tracking-wider uppercase">
                                        <span>Strategy</span>
                                        <span className="w-1 h-1 rounded-full bg-accent"></span>
                                        <span>8 Min Read</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-display font-semibold text-brand-950 leading-tight mb-6 group-hover:text-accent transition-colors">
                                        Revitalizing a Global Retail Chain: Navigating Omnichannel Complexity
                                    </h3>
                                    <p className="text-lg text-brand-600 font-serif leading-relaxed mb-10">
                                        How our dedicated task force utilized behavioral data modeling to increase enterprise foot traffic by 40% while simultaneously reducing overhead logistical bloat.
                                    </p>
                                    <span className="link-editorial text-brand-900 font-semibold tracking-wide uppercase text-sm">Read the Full Publication</span>
                                </div>
                            </Link>
                        </FadeIn>

                        {/* Smaller Supplemental Articles */}
                        <div className="flex flex-col gap-8">
                            <FadeIn delay={0.2} className="h-full">
                                <Link to="/insights/future-hospitality-tech" className="block group bg-white border border-brand-200 h-full p-8 hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 text-[10px] font-bold text-brand-500 mb-4 tracking-widest uppercase">
                                            <span className="text-accent">Article</span>
                                            <span className="w-1 h-1 rounded-full bg-brand-300"></span>
                                            <span>Technology</span>
                                        </div>
                                        <h4 className="text-xl font-display font-semibold text-brand-950 leading-snug mb-4 group-hover:text-accent transition-colors">
                                            The Yield of Automation: Future Hospitality Frameworks
                                        </h4>
                                        <p className="text-brand-600 text-sm font-serif leading-relaxed mb-8">
                                            Evaluating the risk-reward matrix of implementing AI-driven guest lifecycle platforms versus standard legacy CRM structures.
                                        </p>
                                    </div>
                                    <span className="link-editorial text-brand-900 font-semibold tracking-wide uppercase text-[11px] self-start">Read Analysis</span>
                                </Link>
                            </FadeIn>

                            <FadeIn delay={0.3} className="h-full">
                                <Link to="/insights" className="block group bg-brand-900 border border-brand-800 h-full p-8 hover:bg-brand-950 transition-colors duration-500 flex flex-col justify-center items-center text-center">
                                    <div className="w-12 h-12 rounded-full border border-brand-700 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                                        <ArrowRight size={20} className="text-brand-300 group-hover:text-white" />
                                    </div>
                                    <h4 className="text-xl font-display font-medium text-white mb-2">Access the Journal</h4>
                                    <p className="text-brand-400 text-sm">Browse our entire library of executive insights and industry primers.</p>
                                </Link>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Leadership Credibility / Final CTA */}
            <section className="py-32 bg-white border-t border-brand-100">
                <div className="container-content text-center">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-display font-semibold text-brand-950 mb-8 leading-tight">
                            Built on Intellectual Rigor.<br /> Focused on Corporate Results.
                        </h2>
                        <p className="text-xl text-brand-600 font-serif leading-relaxed max-w-2xl mx-auto mb-14">
                            MIR Consulting is the advisory cornerstone of the MIR Holding ecosystem. We invite tier-1 organizations seeking exponential, structural growth to engage our managing partners.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <Link to="/about/leadership" className="btn-primary w-full sm:w-auto">
                                Engage Leadership
                            </Link>
                            <span className="text-brand-400 text-sm italic font-serif">or</span>
                            <Link to="/about/our-idea" className="btn-outline w-full sm:w-auto">
                                Explore the Holding Vision
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

        </div>
    );
};

export default Home;
