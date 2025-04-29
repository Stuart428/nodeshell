import type { command } from "../../console";
export const echo: command = {
  name: "echo",
  run: (params) => {
    console.log(params[0]);
  },
};
