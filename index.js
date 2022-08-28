#!/usr/bin/env -S deno run --allow-env --allow-read --allow-net
import figlet from 'https://x.nest.land/deno-figlet@0.0.5/mod.js'
import { getLocalTime } from './utils.js'

while (true) {
    const time = getLocalTime()

    
    // await textCB(time, "roman", null, (myAwesomeFiglet) => {
    //     console.log(myAwesomeFiglet)
    // })
    const p = new Promise(resolve => setTimeout(()=> {console.clear(); resolve()}, 1000));

    await p
    console.log(await figlet(time, "roman"))
}
