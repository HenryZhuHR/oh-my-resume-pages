
import type { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default/lib/shared'

/* 继承默认的 Frontmatter */
export interface ResumeThemeHomePageFrontmatter extends DefaultThemeHomePageFrontmatter {
    name: string,
    cn_name: string,
    educations?: {
        year: number;
        degree: string;
        major: string;
        college: string;
        school: string;
        school_link: string;
    }[];
}
