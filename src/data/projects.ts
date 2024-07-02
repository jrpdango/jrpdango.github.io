import techs from "./techs";

const projects = [
    {
        name: "Gittop",
        description: "An open-source tool for sharing private repository contents without having to make the repo itself public.",
        sourceCodeUrl: "https://github.com/jrpdango/gittop",
        demoUrl: "https://jrpdango.github.io/gittop/display?repo=gittop-demo&owner=jrpdango&token=wooyEsK5JWrChsKfwpLDqMK4w4zDiCpew6fDgSjDr2DDlsOeJsK6Ix0Awq85w4l-FU3Cq8KKRgTDuy56w749LC7CnsO-wq09M8OGeiczCnHDujcNwqfDvWjDucO_fH_Cq8O2wrXCiMO9DWrDksKkHT3CmsKfdMOMFMKRwojDm8OAWWMdfsKLVsOaAMKxBkwYwrt7w5oeelPCgC7Cn17Cq8O9AyTDtsKMw6JZwpVxXsKFfcOv",
        type: "personal"
    },
    {
        name: "JP Counter",
        description: "A simple CLI tracker I use to count correct/wrong answers when studying vocabulary. Keeps data in an SQLite database and automatically syncs to its GitHub repository.",
        sourceCodeUrl: "https://jrpdango.github.io/gittop/display?repo=jp-counter&owner=jrpdango&token=wosvwqbCi0FoWXBvU2TCjCTDh8KmBsOZwr3DuMKcPm7DjgrClBJ9w4cow793TCwBwqsQcnoVB8OaJcKAwpdWey_CrBozQVPCvMKEw6nDqGhmwqVbwr3Cmg42w4BTAcKxw4_CuMKCAcK4cDrDiMKcN3LDsyJ7w4nCmSHDl8K1fAbCtErDuMKVw6ltw5rDusKCfQ_Dg8O0EMOxwrgJw6DDkGbDpcKUwp4CwqDDvWUUwpbCgcKXZw",
        type: "personal"
    },
    {
        name: "miru",
        description: "A mobile MyAnimeList client demo I made to easily access a list of shows I've watched or plan to watch.",
        sourceCodeUrl: "https://jrpdango.github.io/gittop/display?repo=miru&owner=jrpdango&token=ccKPw54wAMKbw7tYASfCqHjDjMKracK7wrnDnQfDtmHCjyIpwpMhbsKoEg5EwrkKYMK7wpDCjMO5wrnDrsO3U8Ktw5A0GjPDjCI8dsKgIsOkKDckInfDq8Kqw7TCgC8Fw5TDgsKxKcOUw4NCV8KTwoTCgyUmCcOUwrXCm8OfworCt2YTw5XCosOvwqBiwo3CqMOKamcgC8KxwoEqMGY8NMO3w4FyAQLCujo1w7nCvsKac2gZEQ",
        type: "personal"
    },
    {
        name: "Unit Monitoring System",
        description: "Real estate unit and user management system available on desktop, Android, and iOS.",
        myRole: "Work with multiple scrum teams on different platforms: desktop front-end + back-end, Android client.",
        techUsed: [
            techs.nodedotjs,
            techs.mysql,
            techs.mongodb,
            techs.express,
            techs.vuedotjs,
            techs.tailwindcss,
            techs.graphql,
            techs.gnubash,
            techs.rockylinux,
            techs.jetpackcompose,
            techs.javascript,
            techs.kotlin
        ],
        type: "work"
    },
    {
        name: "Doc Ayn",
        description: "Placeholder text",
        sourceCodeUrl: "",
        type: "work"
    },
];

export default projects;