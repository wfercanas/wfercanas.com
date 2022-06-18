import { HomePage } from ".";

export default {
  title: "Pages / Home",
  components: HomePage,
};

export const Home = (args) => {
  return <HomePage {...args} />;
};

Home.args = {
  articles: [
    {
      id: 1,
      attributes: {
        title: "Be a startup again when trying to innovate with a new product",
        published: "2022-06-09",
        coverURL: "/v1655517912/wfercanas.com/sticky-notes_wpowei.jpg",
      },
    },
    {
      id: 2,
      attributes: {
        title: "Be a startup again when trying to innovate with a new product",
        published: "2022-06-09",
        coverURL: "/v1655517912/wfercanas.com/sticky-notes_wpowei.jpg",
      },
    },
    {
      id: 3,
      attributes: {
        title: "Be a startup again when trying to innovate with a new product",
        published: "2022-06-09",
        coverURL: "/v1655517912/wfercanas.com/sticky-notes_wpowei.jpg",
      },
    },
  ],
};
