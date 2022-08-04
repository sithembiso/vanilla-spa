import list from "./List.js";
import newItem from "./New.js";
import notFound from "./404.js";


/**
 * Routes matching
 */
export const routes = {
  "/": list,
  "/new": newItem,
  "/404": notFound
};
