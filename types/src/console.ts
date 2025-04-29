// src/index.ts
import * as readline from "readline";
import { commands } from "./commands/registry";
export type command = {
  name: string;
  run: (params: string[]) => void;
};
import os from "os";
const username = os.userInfo().username;
const hostname = os.hostname();
const promptstr: string = `${username}@${hostname}# `;
// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function parseCommand(input: string): { command: string; params: string[] } {
  const regex = /"([^"]+)"|\S+/g;
  const matches = input.match(regex) || [];

  const cleaned = matches.map((token) => {
    if (token.startsWith('"') && token.endsWith('"')) {
      return token.slice(1, -1); // remove the surrounding quotes
    }
    return token;
  });

  const command = cleaned[0] || "";
  const params = cleaned.slice(1);

  return { command, params };
}

export function prompt(): void {
  rl.question(promptstr, (command) => {
    let command_out = parseCommand(command).command;
    let params_out = parseCommand(command).params;
    for (let i = 0; i < commands.length; i++) {
      const command_point = commands[i];
      if (command_point.name === command_out) {
        command_point.run(params_out);
        break; // Stop after finding the first match
      }
    }
    rl.close(); // Always close the interface
  });
}

export function console_start(): void {
  rl.question(promptstr, (command) => {
    let command_out = parseCommand(command).command;
    let params_out = parseCommand(command).params;
    if (command_out == "exit") {
      rl.close();
      process.exit();
    }
    for (let i = 0; i < commands.length; i++) {
      const command_point = commands[i];
      if (command_point.name === command_out) {
        command_point.run(params_out);
        break; // Stop after finding the first match
      }
    }
    console_start();

    // Always close the interface
  });
}
