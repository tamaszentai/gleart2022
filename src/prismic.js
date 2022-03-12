import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
  endpoint: "gleart",
  clientConfig: { defaultParams: { routes: [{ type: "home", path: "/" }] } },
});
