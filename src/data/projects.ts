import {
    siReact,
    siNodedotjs,
    siRust,
    siGnubash,
    siSqlite,
    siUbuntu,
    siFlutter,
    siDart,
    siMyanimelist,
    siVuedotjs,
    siExpress,
    siPuppeteer,
    siJest,
    siPhp,
    siTypescript,
    siAndroid,
    siIos,
    siKotlin,
    siSwift,
    siFirebase,
    siPostgresql,
    siSupabase,
    siNestjs,
} from "simple-icons";
import { Project } from "../types";

const projects: Project[] = [
    {
        name: "Gittop",
        description:
            "An open-source tool for sharing private repository contents without having to make the repo itself public.",
        thumbnail: {
            forLight: "/gittop-full.png",
            forDark: "/gittop-full-transparent.png",
        },
        hasBlurredBackground: false,
        sourceCodeUrl: "https://github.com/jrpdango/gittop",
        demoUrl:
            "https://jrpdango.github.io/gittop/display?repo=gittop-demo&owner=jrpdango&token=QMO_wqrCr3YuZXXDsGxQKwfCrsOhwozCl8OSw6Z3wo3CisKCwqbDvMO4KjvDtRDDu8KHwo_CvcKTw7XCv1LDusOjw7REZWvDrsOQLcOZwpJdw6tWRxIVw5EKw6nDmiYjwpXDrsOcw7nCkCnCncOmwrB9w7DCuMKpw4LCoALCtUDCk8ODFMO_WyTCuMOFXnfDlWdIw73Dg8K2CsOxQFfCvmPCq8KIw7rCtFlSw4cGGMKhwqjDk0pKwopCVh8SdA",
        type: "personal",
        techsUsed: [siReact, siNodedotjs],
    },
    {
        name: "miru",
        description:
            "A mobile MyAnimeList client demo I made to easily access a list of shows I've watched or plan to watch.",
        thumbnail: {
            forDark: "/miru.png",
        },
        sourceCodeUrl:
            "https://jrpdango.github.io/gittop/display?repo=miru&owner=jrpdango&token=wqNgw6lHVsOmRGHDmMO2E2osdH9RwrgPNwPDulAxVsOdfkpyY8K9bMKRwr4mwo0FL1rCoMO5w5pkY8OZGMOfw4QwMytMwqZTw5XDk8O5BhfDu1rDkX7DtS_CkMOew4UGwr1gcgTChmIdTcKGwqsOdSY8wrEaw5PCrkUJw7zCjmwEw7_Cj2fClMKDwqY2LDXDmFQrT37CiH1sw7YXf8OsacOobsOJZsKLG8K6",
        type: "personal",
        techsUsed: [siFlutter, siDart, siMyanimelist],
    },
    {
        name: "JP Counter",
        description:
            "A simple CLI tracker I use to count correct/wrong answers when I'm studying vocabulary for languages. Keeps data in an SQLite database and automatically syncs to its GitHub repository.",
        thumbnail: {
            forDark: "/jp-counter.png",
        },
        sourceCodeUrl:
            "https://jrpdango.github.io/gittop/display?repo=jp-counter&owner=jrpdango&token=w5dGwrnCocO7wpzDusO1KWYbegPDjMKaFwHCnCIxw5LDsAAPw41VwoTCpABfw6jDixDCv3LDmwpWwpE_EFzChcKXWRTCpcOvBsKow65la8OUwoHDqjgNw7YkaDfCl8Kow5XCoMONQkDCi2vCuz8ZbcK2L8OCwoNQCjbCnT9GLmrCg8KVVcKoP3XDgGNXwpRWGwXCncOKdTE-w6zDgMKywpnDpkDDucOawovCocKfwr_Dh8KgAWQ",
        type: "personal",
        techsUsed: [siRust, siGnubash, siSqlite, siUbuntu],
    },
    {
        name: "Page Summarizer",
        description:
            "A proof of concept backend app for summarizing a page with AI.",
        thumbnail: {
            forDark: "/page-summarizer.png",
        },
        sourceCodeUrl: "https://github.com/jrpdango/page-summarizer/tree/main",
        type: "personal",
        techsUsed: [siNodedotjs, siExpress, siSqlite, siPuppeteer, siJest],
    },
    {
        name: "WeCourts",
        description:
            "A rating system and global hub for padel players, tournaments, clubs, and more.",
        thumbnail: {
            forDark: "/wecourts.png",
        },
        type: "professional",
        techsUsed: [siNodedotjs, siReact, siExpress, siPostgresql, siSupabase],
        liveSiteUrl: "https://wecourts.com/",
    },
    {
        name: "MIDI",
        description:
            "A website for MIDI, a medical & life science development company.",
        thumbnail: {
            forDark: "/midi.png",
        },
        hasBlurredBackground: false,
        type: "professional",
        techsUsed: [siTypescript, siPhp],
        liveSiteUrl: "https://midipd.com/",
    },
    {
        name: "Doc Ayn",
        description:
            "A women's health mobile app that helps book OB-GYN appointments, as well as monitor periods, pregnancies, and medications.",
        thumbnail: {
            forDark: "/docayn.png",
        },
        hasBlurredBackground: false,
        type: "professional",
        techsUsed: [siAndroid, siIos, siKotlin, siSwift, siFirebase],
        playStoreUrl:
            "https://play.google.com/store/apps/details?id=com.docayn.app",
        appStoreUrl: "https://apps.apple.com/ph/app/doc-ayn/id6472990989",
    },
    {
        name: "Attic Tours",
        description:
            "An admin dashboard system for managing internal users, branches, and customers' Japan and Korea visa applications.",
        thumbnail: {
            forDark: "/attictours.png",
        },
        hasBlurredBackground: false,
        type: "professional",
        techsUsed: [siVuedotjs, siNestjs],
        companySiteUrl: "https://attictours.asia",
    },
];

export default projects;
