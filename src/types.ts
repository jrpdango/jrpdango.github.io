import type { SimpleIcon } from "simple-icons";
import type { Component } from "vue";

type ThemedImageSource = {
    forDark: string;
    forLight?: string;
};

type ProjectUrl = {
    href: string;
    label: string;
    icon?: Component;
    svgPath?: string;
};

type Project = {
    name: string;
    description: string;
    thumbnail: ThemedImageSource;
    hasBlurredBackground?: boolean;
    urls?: ProjectUrl[];
    type: "professional" | "personal";
    techsUsed?: SimpleIcon[];
};

export type { ThemedImageSource, Project, ProjectUrl, SimpleIcon };
