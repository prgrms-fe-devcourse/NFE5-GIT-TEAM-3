import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


const types = {
  isObject:true,
  isArray:true,
  isNull:true,
  isString:true,
  isUndefined:true,
}

const lib = {
  getNode:true,
  attr:true,
  css:true,
  insertLast:true,
}

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...types,
        ...lib
      },
    },
    rules:{
      "no-unused-vars":"off"
    }
  },
]);