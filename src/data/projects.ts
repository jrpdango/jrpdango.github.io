import {
    siReact,
    siNodedotjs,
    siJavascript,
    siHtml5,
    siCss,
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
        sourceCodeUrl: "https://github.com/jrpdango/gittop",
        demoUrl:
            "https://jrpdango.github.io/gittop/display?repo=gittop-demo&owner=jrpdango&token=QMO_wqrCr3YuZXXDsGxQKwfCrsOhwozCl8OSw6Z3wo3CisKCwqbDvMO4KjvDtRDDu8KHwo_CvcKTw7XCv1LDusOjw7REZWvDrsOQLcOZwpJdw6tWRxIVw5EKw6nDmiYjwpXDrsOcw7nCkCnCncOmwrB9w7DCuMKpw4LCoALCtUDCk8ODFMO_WyTCuMOFXnfDlWdIw73Dg8K2CsOxQFfCvmPCq8KIw7rCtFlSw4cGGMKhwqjDk0pKwopCVh8SdA",
        type: "personal",
        techsUsed: [siReact, siNodedotjs, siJavascript, siHtml5, siCss],
    },
    {
        name: "JP Counter",
        description:
            "A simple CLI tracker I use to count correct/wrong answers when studying vocabulary. Keeps data in an SQLite database and automatically syncs to its GitHub repository.",
        thumbnail: {
            forDark: "/jp-counter.png",
        },
        sourceCodeUrl:
            "https://jrpdango.github.io/gittop/display?repo=jp-counter&owner=jrpdango&token=w5dGwrnCocO7wpzDusO1KWYbegPDjMKaFwHCnCIxw5LDsAAPw41VwoTCpABfw6jDixDCv3LDmwpWwpE_EFzChcKXWRTCpcOvBsKow65la8OUwoHDqjgNw7YkaDfCl8Kow5XCoMONQkDCi2vCuz8ZbcK2L8OCwoNQCjbCnT9GLmrCg8KVVcKoP3XDgGNXwpRWGwXCncOKdTE-w6zDgMKywpnDpkDDucOawovCocKfwr_Dh8KgAWQ",
        type: "personal",
        techsUsed: [siRust, siGnubash, siSqlite, siUbuntu],
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
        name: "Page Summarizer",
        description:
            "A proof of concept backend app for summarizing a page with AI. Contains an explanation and reasoning of tech used.",
        thumbnail: {
            forDark: "/page-summarizer.png",
        },
        sourceCodeUrl: "https://github.com/jrpdango/page-summarizer/tree/main",
        type: "personal",
        techsUsed: [
            siVuedotjs,
            siNodedotjs,
            siJavascript,
            siHtml5,
            siCss,
            siExpress,
            siSqlite,
            siPuppeteer,
            siJest,
        ],
    },
    {
        name: "MIDI",
        description:
            "A website for MIDI, a medical & life science development company.",
        thumbnail: {
            forDark: "",
        },
        type: "professional",
        techsUsed: [siJavascript, siPhp],
    },
];

export default projects;
