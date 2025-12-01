// types/news.ts
export interface UserForNewsEmail {
    email: string;
    name?: string | null;
    country?: string | null;
    investmentGoals?: string | null;
    riskTolerance?: string | null;
    preferredIndustry?: string | null;
    [key: string]: any;
}

export interface MarketNewsArticle {
    id?: string | number;
    datetime?: number | string;
    headline?: string;
    summary?: string;
    source?: string;
    url?: string;
    image?: string;
    related?: string;
    [key: string]: any;
}
