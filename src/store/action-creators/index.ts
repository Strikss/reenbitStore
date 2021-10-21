import * as productsAC from "./productsAC";
import { filterByName } from "./productsAC";

export default { ...productsAC, ...filterByName };
