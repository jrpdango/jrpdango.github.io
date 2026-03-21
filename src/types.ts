import type { SimpleIcon } from "simple-icons";

type ThemedImageSource = {
    forDark: string;
    forLight?: string;
};

type Project = {
    name: string;
    description: string;
    thumbnail: ThemedImageSource;
    hasBlurredBackground?: boolean;
    sourceCodeUrl?: string;
    demoUrl?: string;
    liveSiteUrl?: string;
    companySiteUrl?: string;
    type: "professional" | "personal";
    techsUsed?: SimpleIcon[];
};

export type { ThemedImageSource, Project, SimpleIcon };
