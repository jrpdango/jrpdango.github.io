type Tech = {
    name: string;
    slug: string;
};

type ThemedImageSource = {
    forDark: string;
    forLight?: string;
};

type Project = {
    name: string;
    description: string;
    thumbnail: ThemedImageSource;
    sourceCodeUrl?: string;
    demoUrl?: string;
    type: "professional" | "personal";
    techsUsed?: Tech[];
};

export type { Tech, ThemedImageSource, Project };
