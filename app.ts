import { removeDuplicates } from "./src/remove-duplications/";
import { isEmpty } from "./src/javascript/easy/isObjectEmpty";

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

console.log(`is ${[1, 2, 3, 4]} empty:`, isEmpty([1, 2, 3, 4]));
console.log(
  `is ${{ name: "Ala Eddine", age: 30 }} empty:`,
  isEmpty({ name: "Ala Eddine", age: 30 }),
);
