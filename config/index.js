#!/usr/bin/env -S deno run --allow-env --allow-read
const rawText = await Deno.readTextFile("./config/.config");
export default JSON.parse(rawText);