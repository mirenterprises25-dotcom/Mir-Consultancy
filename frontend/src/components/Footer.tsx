import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-brand-950 text-white mt-24">
            <div className="container-custom pt-24 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">

                    {/* Logo & Vision (Left massive block) */}
                    <div className="md:col-span-12 lg:col-span-5 pr-0 lg:pr-12">
                        <Link to="/" className="text-3xl font-display font-semibold tracking-tight block mb-6">
                            MIR <span className="font-serif italic font-light text-brand-300">Consulting</span>
                        </Link>
                        <p className="text-brand-300 font-serif text-lg leading-relaxed mb-8 max-w-md">
                            Navigating strategic complexity. We partner with visionary leadership to orchestrate structural transformations that forge long-term institutional value.
                        </p>
                        <div className="inline-block border border-brand-800 px-6 py-3">
                            <span className="text-[10px] tracking-[0.2em] text-accent uppercase block mb-1">Ecosystem Base</span>
                            <span className="text-sm font-medium tracking-wider text-white">A Entity of MIR Enterprises.</span>
                        </div>
                    </div>

                    {/* Vertical Divider (hidden on mobile) */}
                    <div className="hidden lg:block lg:col-span-1 border-l border-brand-800 h-full"></div>

                    {/* Practices */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <h4 className="eyebrow text-white mb-8">Capabilities</h4>
                        <ul className="space-y-4">
                            <li><Link to="/capabilities/operations-optimization" className="text-brand-400 hover:text-accent transition-colors text-sm font-medium tracking-wide">Operations Optimization</Link></li>
                            <li><Link to="/capabilities/data-analytics-bi" className="text-brand-400 hover:text-accent transition-colors text-sm font-medium tracking-wide">Data Analytics & BI</Link></li>
                            <li><Link to="/capabilities/business-expansion-strategy" className="text-brand-400 hover:text-accent transition-colors text-sm font-medium tracking-wide">Business Expansion</Link></li>
                            <li><Link to="/capabilities/digital-transformation" className="text-brand-400 hover:text-accent transition-colors text-sm font-medium tracking-wide">Digital Transformation</Link></li>
                            <li><Link to="/capabilities/custom-applications" className="text-brand-400 hover:text-accent transition-colors text-sm font-medium tracking-wide">Custom Applications</Link></li>
                        </ul>
                    </div>

                    {/* Firm & Insights */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <h4 className="eyebrow text-white mb-8">The Firm</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about/leadership" className="text-brand-400 hover:text-white transition-colors text-sm font-medium tracking-wide">Leadership</Link></li>
                            <li><Link to="/about/our-idea" className="text-brand-400 hover:text-white transition-colors text-sm font-medium tracking-wide">Strategic Vision</Link></li>
                            <li><Link to="/about/company-future" className="text-brand-400 hover:text-white transition-colors text-sm font-medium tracking-wide">Future Trajectory</Link></li>
                            <li><Link to="/insights" className="text-brand-400 hover:text-white transition-colors text-sm font-medium tracking-wide">Global Perspectives</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Footer Bottom Line */}
                <div className="pt-8 border-t border-brand-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <p className="text-brand-500 text-sm font-medium">
                        &copy; {new Date().getFullYear()} MIR Consulting. All rights reserved.
                    </p>
                    <div className="flex flex-wrap gap-8 text-sm font-medium">
                        <Link to="#" className="text-brand-500 hover:text-white transition-colors tracking-wide">Privacy Policy</Link>
                        <Link to="#" className="text-brand-500 hover:text-white transition-colors tracking-wide">Terms of Use</Link>
                        <Link to="#" className="text-brand-500 hover:text-white transition-colors tracking-wide">Cookie Preferences</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
