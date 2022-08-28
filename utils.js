#!/usr/bin/env -S deno run --allow-env --allow-read
import config from './config/index.js'
import chalk from 'https://deno.land/x/chalk_deno@v4.1.1-deno/source/index.js'

export const getLocalTime = () => {
    const date = new Date()
    const offset = -date.getTimezoneOffset()
    return new Date(date.setMinutes(new Date().getMinutes() + offset)).toISOString().slice(11, 19).replace(/:/g, ' : ')
}