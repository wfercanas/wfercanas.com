import qs from "qs";

const latestArticlesQuery = qs.stringify(
  {
    sort: ["published:desc"],
    populate: "*",
    fields: ["id", "published", "title"],
  },
  { encodeValuesOnly: true }
);

export { latestArticlesQuery };
