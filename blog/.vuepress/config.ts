import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  title: "Neuro-sama Mods",
  description: "Made for the Swarm by Kaz.",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["meta", { name: "application-name", content: "Xiaohan Zou" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Xiaohan Zou" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  bundler: viteBundler(),

  theme: gungnirTheme({
    repo: "knettidev/neuro-mods",
    docsDir: "blog",
    docsBranch: "master",
    navbarTitle: "Home",

    // personal information
    personalInfo: {
      name: "Neuro-sama Mods",
      avatar: "/img/avatar.jpg",
      description: "Made for the Swarm by Kaz.",
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/6.png",
        mask: "rgba(40, 57, 101, .4)"
      }
    ],

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      readingTime: false,
      giscus: {
        repo: "This-is-an-Apple/blog-giscus-comments",
        repoId: "R_kgDOGl2SjQ",
        category: "Announcements",
        categoryId: "DIC_kwDOGl2Sjc4CAcxK",
        darkTheme: "https://blog.zxh.io/styles/giscus-dark.css"
      },
      mdPlus: {
        all: true
      },
      ga: "G-HCQSX53XFG",
      ba: "75381d210789d3eaf855fa16246860cc",
      rss: {
        siteURL: "https://blog.zxh.io",
        copyright: "Renovamen 2018-2022"
      }
    },

    navbar: [
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag"
      },
    ],

    footer: `
      &copy; Kaz 2023
      <br>
      Background by <a href="https://www.pixiv.net/en/users/25170019" target="_blank">Rune</a>
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
});
