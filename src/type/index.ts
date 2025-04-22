import { LucideIcon } from "lucide-react";

export interface Props {
    data?: Section;
}

export interface Section {
    id: string;
    componentName: string;
    title?: string;
    subTitle?: string;
    imgURL?: string;
    bgURL?: string;
    description?: string;
    customizeDescription?: string;
    buttonText?: string;
    buttonUrl?: string;
    sectionList: SectionList[];
    sectionType: EComponentType;
    index: number;
    shopId?: string;
    shopLayoutId?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface SectionList {
    id: string;
    title?: string;
    subTitle?: string;
    imgURL?: string;
    bgURL?: string;
    icon?: LucideIcon;
    description?: string;
    customizeDescription?: string;
    buttonText?: string;
    buttonUrl?: string;
    booleanValue?: boolean;
    sectionId: string;
    createdAt: Date;
    updatedAt: Date;
}

export enum EComponentType {
    HEADER = "HEADER",
    BANNER = "BANNER",
    HERO = "HERO",
    NAVIGATION = "NAVIGATION",
    FEATURES = "FEATURES",
    FAQ = "FAQ",
    BLOG = "BLOG",
    TESTIMONIALS = "TESTIMONIALS",
    TIMELINE = "TIMELINE",
    PRICING = "PRICING",
    CTA = "CTA",
    CONTACT = "CONTACT",
    FOOTER = "FOOTER",
    OTHER = "OTHER",
}
