
import type { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default/lib/shared'

/* 继承默认的 Frontmatter */
export interface MyThemeHomePageFrontmatter extends DefaultThemeHomePageFrontmatter {
    educations?: {
        year: number;
        degree: string;
        major: string;
        college: string;
        school: string;
        school_link: string;
    }[];
}
