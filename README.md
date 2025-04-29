_Node Shell_
To use simply call console_start from console.ts

_How do i register commands?_

```typescript
import type { command } from "../../console";
export const echo: command = {
  name: "echo", // this is the name of the command so if i changed this to echo1 i would have to do echo1 "Hello, World"
  run: (params) => {
    // code goes here
    // params is a array of strings so params[0] would be the string in this command: echo "Hello, World!"
    console.log(params[0]);
  },
};
```

Then in register.ts

```typescript
import type { command } from "../console";
//command imports (import the var from your file with the command)
import { echo } from "./echo/echo";
import { clear } from "./clear/clear";
// Command list simply add the imported command var to the table
export const commands: command[] = [echo, clear];
```
