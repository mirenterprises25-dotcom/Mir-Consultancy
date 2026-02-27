// Since the project is now fully static, we fetch JSON files directly from the public/data folder.

const fetchStaticData = async (filename: string) => {
    // We use the base path for GitHub pages compatibility (relative to root)
    const baseUrl = import.meta.env.BASE_URL || '/';
    const response = await fetch(`${baseUrl}data/${filename}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${filename}`);
    }
    const data = await response.json();
    // Simulate axios response structure to avoid changing all React components
    return { data };
};

export const getIndustries = () => fetchStaticData('industries.json');
export const getIndustryBySlug = (slug: string) => fetchStaticData(`industry_${slug}.json`);

export const getCapabilities = () => fetchStaticData('capabilities.json');
export const getCapabilityBySlug = (slug: string) => fetchStaticData(`capability_${slug}.json`);

export const getInsightsByCategory = (categorySlug: string) => fetchStaticData(`insights_category_${categorySlug}.json`);
export const getInsightBySlug = (slug: string) => fetchStaticData(`insight_${slug}.json`);

export const getPageBySlug = (slug: string) => fetchStaticData(`page_${slug}.json`);

export const getLeadership = () => fetchStaticData('leadership.json');

// We leave a dummy export default if any component imported 'api' directly (though they shouldn't)
export default {
    get: async (url: string) => { console.warn('Direct api.get called with', url); return { data: null }; }
};
