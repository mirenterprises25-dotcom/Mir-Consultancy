import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-brand-100' : 'bg-transparent py-8'
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Editorial Logo */}
                <Link to="/" className={`text-2xl md:text-3xl font-display font-semibold tracking-tight flex items-center gap-2 ${isScrolled ? 'text-brand-950' : 'text-brand-950'} transition-colors duration-300`}>
                    MIR <span className="text-brand-500 font-serif italic font-light tracking-wide text-xl mt-1">Consulting</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-10">
                    <div className="group relative">
                        <button className="flex items-center gap-1 text-[13px] tracking-widest uppercase font-semibold text-brand-900 link-editorial py-2">
                            Industries <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 opacity-50" />
                        </button>
                        <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <div className="bg-white border text-left border-brand-100 shadow-2xl p-6 w-[280px] flex flex-col gap-3">
                                <span className="eyebrow text-[10px] mb-2">Sectors</span>
                                <Link to="/industries/restaurants-fast-food" className="text-brand-700 hover:text-accent font-medium text-sm transition-colors">Restaurants & Fast Food</Link>
                                <Link to="/industries/hotels-hospitality" className="text-brand-700 hover:text-accent font-medium text-sm transition-colors">Hotels & Hospitality</Link>
                                <Link to="/industries/retail-grocery" className="text-brand-700 hover:text-accent font-medium text-sm transition-colors">Retail & Grocery</Link>
                                <Link to="/industries/tourism-businesses" className="text-brand-700 hover:text-accent font-medium text-sm transition-colors">Tourism Businesses</Link>
                                <div className="h-px bg-brand-100 my-2"></div>
                                <Link to="/industries/future-industry" className="text-brand-950 hover:text-accent font-semibold text-sm transition-colors flex items-center justify-between">
                                    Future Industry <span>&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <button className="flex items-center gap-1 text-[13px] tracking-widest uppercase font-semibold text-brand-900 link-editorial py-2">
                            Capabilities <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 opacity-50" />
                        </button>
                        <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <div className="bg-white border text-left border-brand-100 shadow-2xl p-6 w-[320px] flex flex-col gap-3">
                                <span className="eyebrow text-[10px] mb-2">Practice Areas</span>
                                <Link to="/capabilities/operations-optimization" className="text-brand-700 hover:text-accent font-medium text-sm transition-colors">Operations Optimization</Link>
                                <Link to="/capabilities/data-analytics-bi" className="text-brand-700 hover:text-accent font-medium text-sm transition-colors">Data Analytics & BI</Link>
                                <Link to="/capabilities/business-expansion-strategy" className="text-brand-700 hover:text-accent font-medium text-sm transition-colors">Business Expansion Strategy</Link>
                                <Link to="/capabilities/digital-transformation" className="text-brand-700 hover:text-accent font-medium text-sm transition-colors">Digital Transformation</Link>
                                <Link to="/capabilities/custom-applications" className="text-brand-700 hover:text-accent font-medium text-sm transition-colors">Custom Applications</Link>
                            </div>
                        </div>
                    </div>

                    <Link to="/insights" className="text-[13px] tracking-widest uppercase font-semibold text-brand-900 link-editorial py-2">
                        Insights
                    </Link>

                    <Link to="/about/our-idea" className="text-[13px] tracking-widest uppercase font-semibold text-brand-900 link-editorial py-2">
                        The Firm
                    </Link>

                    <Link to="/about/leadership" className="ml-4 border border-brand-950 text-brand-950 hover:bg-brand-950 hover:text-white transition-colors duration-300 px-6 py-2.5 text-xs tracking-widest font-semibold uppercase">
                        Leadership
                    </Link>
                </nav>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden text-brand-950 focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden absolute top-full left-0 w-full bg-white border-b border-brand-100 shadow-2xl"
                    >
                        <div className="flex flex-col px-6 py-8 gap-6 max-h-[80vh] overflow-y-auto">
                            <div>
                                <span className="eyebrow mb-3">Industries</span>
                                <div className="flex flex-col gap-3 pl-2 border-l border-brand-100">
                                    <Link to="/industries/restaurants-fast-food" className="text-brand-700 text-lg font-serif">Restaurants & Fast Food</Link>
                                    <Link to="/industries/hotels-hospitality" className="text-brand-700 text-lg font-serif">Hotels & Hospitality</Link>
                                    <Link to="/industries/retail-grocery" className="text-brand-700 text-lg font-serif">Retail & Grocery</Link>
                                    <Link to="/industries/tourism-businesses" className="text-brand-700 text-lg font-serif">Tourism Businesses</Link>
                                </div>
                            </div>

                            <div>
                                <span className="eyebrow mb-3">Practice Areas</span>
                                <div className="flex flex-col gap-3 pl-2 border-l border-brand-100">
                                    <Link to="/capabilities/operations-optimization" className="text-brand-700 text-lg font-serif">Operations Optimization</Link>
                                    <Link to="/capabilities/digital-transformation" className="text-brand-700 text-lg font-serif">Digital Transformation</Link>
                                    <Link to="/capabilities/business-expansion-strategy" className="text-brand-700 text-lg font-serif">Business Expansion</Link>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-brand-100 flex flex-col gap-4">
                                <Link to="/insights" className="text-brand-950 text-xl font-display font-semibold tracking-tight">Our Insights &rarr;</Link>
                                <Link to="/about/our-idea" className="text-brand-950 text-xl font-display font-semibold tracking-tight">The Firm &rarr;</Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
