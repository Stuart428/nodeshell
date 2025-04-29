import type { command } from "../../console";
export const clear: command = {
  name: "clear",
  run: (params) => {
    console.clear();
  },
};
