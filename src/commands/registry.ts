import type { command } from "../console";
//command imports
import { echo } from "./echo/echo";
import { clear } from "./clear/clear";
// Command list
export const commands: command[] = [echo, clear];
