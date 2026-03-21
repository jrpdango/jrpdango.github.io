import type { SimpleIcon } from "simple-icons";
import type { Component } from "vue";

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
    playStoreUrl?: string;
    appStoreUrl?: string;
    type: "professional" | "personal";
    techsUsed?: SimpleIcon[];
};

type UrlPropKey = Extract<keyof Project, `${string}Url`>;

type UrlConfig = {
    prop: UrlPropKey;
    label: string;
    icon?: Component;
    svgPath?: string;
};

export type { ThemedImageSource, Project, SimpleIcon, UrlPropKey, UrlConfig };
