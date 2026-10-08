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
    siGoogleplay,
    siAppstore,
    siMongodb,
    siWordpress,
    siTauri,
    siNuxt,
    siFastify,
    siDotnet,
    siDocker,
    siRedis,
    siJavascript,
    siAseprite,
} from "simple-icons";
import { Code, Play, Internet } from "@iconoir/vue";
import { Project } from "../types";
import attictoursThumbnail from "../assets/projects/attictours.webp";
import docaynThumbnail from "../assets/projects/docayn.webp";
import gittopThumbnail from "../assets/projects/gittop-full.webp";
import gittopTransparentThumbnail from "../assets/projects/gittop-full-transparent.webp";
import humbleresumeThumbnail from "../assets/projects/humbleresume.webp";
import jpCounterThumbnail from "../assets/projects/jp-counter.webp";
import midiThumbnail from "../assets/projects/midi.webp";
import marumaroThumbnail from "../assets/projects/marumaro.webp";
import orbaluxThumbnail from "../assets/projects/orbalux.webp";
import pageSummarizerThumbnail from "../assets/projects/page-summarizer.webp";
import wecourtsThumbnail from "../assets/projects/wecourts.webp";
import smolJumpThumbnail from "../assets/projects/smol-jump.webp";

const projects: Project[] = [
    {
        name: "Gittop",
        description:
            "A tool for sharing private repository contents without having to make the repo itself public. When I first made this, I was so determined to not make my repos public because I was very shy and protective about my code. I've since gotten confident enough to be an open-source contributor so this isn't that big of a deal anymore, but I still find it useful for sharing code with people without having to give access to the entire repository.",
        thumbnail: {
            forLight: gittopThumbnail,
            forDark: gittopTransparentThumbnail,
        },
        hasBlurredBackground: false,
        urls: [
            {
                href: "https://github.com/jrpdango/gittop",
                label: "View Source Code",
                icon: Code,
            },
            {
                href: "https://jrpdango.github.io/gittop/display?repo=gittop-demo&owner=jrpdango&token=QMO_wqrCr3YuZXXDsGxQKwfCrsOhwozCl8OSw6Z3wo3CisKCwqbDvMO4KjvDtRDDu8KHwo_CvcKTw7XCv1LDusOjw7REZWvDrsOQLcOZwpJdw6tWRxIVw5EKw6nDmiYjwpXDrsOcw7nCkCnCncOmwrB9w7DCuMKpw4LCoALCtUDCk8ODFMO_WyTCuMOFXnfDlWdIw73Dg8K2CsOxQFfCvmPCq8KIw7rCtFlSw4cGGMKhwqjDk0pKwopCVh8SdA",
                label: "Try Live Demo",
                icon: Play,
            },
        ],
        type: "personal",
        techsUsed: [siReact, siNodedotjs, siJavascript],
    },
    {
        name: "marumaro",
        description:
            "A mobile MyAnimeList client app for viewing and updating your favorite anime and manga lists. This was an older project that I ended up revisiting much later on, and I'm proud of how it turned out. I do enjoy my anime and manga, and sometimes I find it a bit of a hassle to have to go to MyAnimeList to update my statuses every time. This makes it more convenient, plus I'd like to think that the me of the past would be pretty happy to see the app finally cleaned up after all these years.",
        thumbnail: {
            forDark: marumaroThumbnail,
        },
        urls: [
            {
                href: "https://github.com/jrpdango/marumaro",
                label: "View Source Code",
                icon: Code,
            },
        ],
        type: "personal",
        techsUsed: [siFlutter, siDart, siMyanimelist],
    },

    {
        name: "HumbleResume",
        description:
            "A simple Markdown-based resume builder with real-time previews and PDF export support. I wanted to practice working with Tauri instead of something like Electron, so I thought it'd be fun to try and make something practical. Still needs some ironing out, but I do use it to keep my resume updated.",
        thumbnail: {
            forDark: humbleresumeThumbnail,
        },
        hasBlurredBackground: true,
        urls: [
            {
                href: "https://github.com/jrpdango/humbleresume",
                label: "View Source Code",
                icon: Code,
            },
        ],
        type: "personal",
        techsUsed: [siVuedotjs, siTauri],
    },
    {
        name: "Smol Jump",
        description:
            "A tiny pixel art endless runner game I made for a friend's birthday. Has some cool effects like a day/night cycle and lighting adjustments. I had fun drawing custom sprites and made the sound effects myself. Maybe this is a sign to learn how to make music too?",
        thumbnail: {
            forDark: smolJumpThumbnail,
        },
        urls: [
            {
                href: "https://github.com/jrpdango/smol-jump",
                label: "View Source Code",
                icon: Code,
            },
        ],
        type: "personal",
        techsUsed: [siFlutter, siDart, siAseprite],
    },
    {
        name: "JP Counter",
        description:
            "A simple CLI tracker I use to count correct/wrong answers when I'm studying vocabulary for languages. Keeps data in an SQLite database and automatically syncs to its GitHub repository.",
        thumbnail: {
            forDark: jpCounterThumbnail,
        },
        urls: [
            {
                href: "https://jrpdango.github.io/gittop/display?repo=jp-counter&owner=jrpdango&token=w5dGwrnCocO7wpzDusO1KWYbegPDjMKaFwHCnCIxw5LDsAAPw41VwoTCpABfw6jDixDCv3LDmwpWwpE_EFzChcKXWRTCpcOvBsKow65la8OUwoHDqjgNw7YkaDfCl8Kow5XCoMONQkDCi2vCuz8ZbcK2L8OCwoNQCjbCnT9GLmrCg8KVVcKoP3XDgGNXwpRWGwXCncOKdTE-w6zDgMKywpnDpkDDucOawovCocKfwr_Dh8KgAWQ",
                label: "View Source Code",
                icon: Code,
            },
        ],
        type: "personal",
        techsUsed: [siRust, siGnubash, siSqlite, siUbuntu],
    },
    {
        name: "Page Summarizer",
        description:
            "A proof of concept backend app for summarizing a page with AI.",
        thumbnail: {
            forDark: pageSummarizerThumbnail,
        },
        urls: [
            {
                href: "https://github.com/jrpdango/page-summarizer/tree/main",
                label: "View Source Code",
                icon: Code,
            },
        ],
        type: "personal",
        techsUsed: [siNodedotjs, siExpress, siSqlite, siPuppeteer, siJest],
    },
    {
        name: "WeCourts",
        description:
            "A padel tournament platform featuring the WPPR player rating system, with global tournament discovery, registration, scheduling, and more. My core responsibilities included improving and maintaining the user and admin frontend, managing the backend's public and private API endpoints, as well as handling CI & infrastructure.",
        thumbnail: {
            forDark: wecourtsThumbnail,
        },
        type: "professional",
        techsUsed: [
            siNodedotjs,
            siReact,
            siExpress,
            siFastify,
            siPostgresql,
            siSupabase,
            siRedis,
        ],
        urls: [
            {
                href: "https://wecourts.com/",
                label: "Visit Site",
                icon: Internet,
            },
        ],
    },
    {
        name: "Orbalux",
        description:
            "A cloud-native SaaS platform for real-time environmental and operational data monitoring, built for offshore and industrial environments. I headed development of the landing page and have contributed to the main dashboard functionality.",
        thumbnail: {
            forDark: orbaluxThumbnail,
        },
        hasBlurredBackground: false,
        type: "professional",
        techsUsed: [siVuedotjs, siTypescript, siNuxt, siDotnet, siDocker],
        urls: [
            {
                href: "https://orbalux.com/",
                label: "Visit Site",
                icon: Internet,
            },
        ],
    },
    {
        name: "MIDI",
        description:
            "A medical and life science product development company covering the full product lifecycle, from research and design through engineering and commercialization. This was my first professional Wordpress project, so there was a bit of a learning curve for the CMS at first. Eventually got the hang of things and built the homepage and the templates for all the others.",
        thumbnail: {
            forDark: midiThumbnail,
        },
        hasBlurredBackground: false,
        type: "professional",
        techsUsed: [siTypescript, siPhp, siWordpress],
        urls: [
            {
                href: "https://midipd.com/",
                label: "Visit Site",
                icon: Internet,
            },
        ],
    },
    {
        name: "Doc Ayn",
        description:
            "A women's health mobile app that helps book OB-GYN appointments and monitor periods and pregnancy, with medication reminders. I took over this project from a previous iOS developer, and added feature parity with the Android version (and dare I say, improved it). This is where I most learned to work with Swift, building UI/UX, together with using Firebase as a backend for scheduling jobs, data storage, etc.",
        thumbnail: {
            forDark: docaynThumbnail,
        },
        hasBlurredBackground: false,
        type: "professional",
        techsUsed: [siAndroid, siIos, siKotlin, siSwift, siFirebase],
        urls: [
            {
                href: "https://play.google.com/store/apps/details?id=com.docayn.app",
                label: "Open in Play Store",
                svgPath: siGoogleplay.path,
            },
            {
                href: "https://apps.apple.com/ph/app/doc-ayn/id6472990989",
                label: "Open in App Store",
                svgPath: siAppstore.path,
            },
        ],
    },
    {
        name: "Attic Tours",
        description:
            "An admin dashboard for managing a travel agency's internal users and branches, plus customers' Japan and Korea visa applications. The site linked above is the public one, which I didn't build, but sadly I can't just link the admin dashboard here. That said, I helped out with the frontend, but mostly I took charge of the backend for this project, and managed most of the API endpoints.",
        thumbnail: {
            forDark: attictoursThumbnail,
        },
        hasBlurredBackground: false,
        type: "professional",
        techsUsed: [siVuedotjs, siNestjs, siMongodb],
        urls: [
            {
                href: "https://attictours.asia",
                label: "Visit Company Site",
                icon: Internet,
            },
        ],
    },
];

export default projects;
