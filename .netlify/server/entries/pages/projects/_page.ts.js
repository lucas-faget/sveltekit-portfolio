import { P as PUBLIC_ASSETS_BASE_URL, a as PUBLIC_ICONS_PATH, b as PUBLIC_LOGOS_PATH, c as PUBLIC_LANGUAGES_PATH, d as PUBLIC_SCREENSHOTS_PATH } from "../../../chunks/public.js";
const projects = [
  {
    name: "Movue",
    title: "Movie database",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
    websiteUrl: "https://movue.lucas-faget.com",
    githubRepository: "https://github.com/lucas-faget/nuxt-movue",
    languages: [
      {
        name: "Vue.js",
        imageFile: "vuejs.svg"
      },
      {
        name: "Typescript",
        imageFile: "typescript.svg"
      }
    ],
    screenshots: [
      "movue_1.png",
      "movue_2.png"
    ]
  },
  {
    name: "Chess",
    title: "Play chess",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
    websiteUrl: "https://chess.lucas-faget.com",
    githubRepository: "https://github.com/lucas-faget/vue-chess",
    languages: [
      {
        name: "Vue.js",
        imageFile: "vuejs.svg"
      },
      {
        name: "Typescript",
        imageFile: "typescript.svg"
      },
      {
        name: "Three.js",
        imageFile: "threejs.svg"
      }
    ],
    screenshots: [
      "chess_1.png",
      "chess_2.png"
    ]
  },
  {
    name: "Healthy",
    title: "Food database",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
    githubRepository: "https://github.com/lucas-faget/laravel-svelte-healthy",
    languages: [
      {
        name: "Laravel",
        imageFile: "laravel.svg"
      },
      {
        name: "Svelte",
        imageFile: "svelte.svg"
      },
      {
        name: "Typescript",
        imageFile: "typescript.svg"
      },
      {
        name: "PostgreSQL",
        imageFile: "postgresql.svg"
      },
      {
        name: "Docker",
        imageFile: "docker.svg"
      }
    ],
    screenshots: [
      "healthy_1.png",
      "healthy_2.png",
      "healthy_3.png",
      "healthy_4.png"
    ]
  },
  {
    name: "Networth",
    title: "Social network",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
    githubRepository: "https://github.com/lucas-faget/symfony-vue-networth",
    languages: [
      {
        name: "Symfony",
        imageFile: "symfony.svg"
      },
      {
        name: "Vue.js",
        imageFile: "vuejs.svg"
      },
      {
        name: "Typescript",
        imageFile: "typescript.svg"
      },
      {
        name: "MySQL",
        imageFile: "mysql.svg"
      },
      {
        name: "Docker",
        imageFile: "docker.svg"
      }
    ],
    screenshots: [
      "networth_1.png",
      "networth_2.png"
    ]
  },
  {
    name: "Sokoban",
    title: "Play sokoban",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
    websiteUrl: "https://sokoban.lucas-faget.com",
    githubRepository: "https://github.com/lucas-faget/svelte-sokoban",
    languages: [
      {
        name: "Svelte",
        imageFile: "svelte.svg"
      },
      {
        name: "Typescript",
        imageFile: "typescript.svg"
      }
    ],
    screenshots: [
      "sokoban_1.png",
      "sokoban_2.png"
    ]
  }
];
const data = {
  projects
};
const load = () => {
  return {
    assetsBaseUrl: PUBLIC_ASSETS_BASE_URL,
    iconsPath: PUBLIC_ICONS_PATH,
    logosPath: PUBLIC_LOGOS_PATH,
    languagesPath: PUBLIC_LANGUAGES_PATH,
    screenshotsPath: PUBLIC_SCREENSHOTS_PATH,
    json: data
  };
};
export {
  load
};
