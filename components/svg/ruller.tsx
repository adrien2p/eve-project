import * as React from "react"
import { SVGProps } from "react";

const RullerSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        {...props}
    >
        <path
            d="M230.4 416.113V46.08c0-20.48-17.067-37.547-37.547-37.547h-61.44c-20.48 0-37.547 17.067-37.547 37.547v372.053c0 2.716.968 4.944 2.634 6.445l58.806 84.009c1.707 1.707 4.267 3.413 6.827 3.413s5.12-1.707 6.827-4.267l57.581-82.259c2.412-1.418 3.859-4.016 3.859-7.341v-.001c.097-.679.1-1.359 0-2.019zM110.933 409.6V136.533H153.6V409.6h-42.667zm102.4-290.133h-102.4V85.333h102.4v34.134zm-42.666 17.066h42.667V409.6h-42.667V136.533zM110.933 46.08c0-11.093 9.387-20.48 20.48-20.48h61.44c11.093 0 20.48 9.387 20.48 20.48v22.187h-102.4V46.08zm51.2 442.88-43.52-62.293h87.04l-43.52 62.293zM392.533 0H307.2c-14.507 0-25.6 11.093-25.6 25.6v465.92c0 11.093 9.387 20.48 20.48 20.48h96.427c11.093 0 19.627-9.387 19.627-20.48V25.6C418.133 11.093 407.04 0 392.533 0zm9.387 491.52c0 1.707-1.707 3.413-3.413 3.413H302.08c-1.707 0-3.413-1.707-3.413-3.413V384h25.6c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533h-25.6v-17.067h42.667c5.12 0 8.533-3.413 8.533-8.533 0-5.12-3.413-8.533-8.533-8.533h-42.667v-17.067h25.6c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533h-25.6V281.6h42.667c5.12 0 8.533-3.413 8.533-8.533 0-5.12-3.413-8.533-8.533-8.533h-42.667v-17.067h25.6c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533h-25.6v-17.067h42.667c5.12 0 8.533-3.413 8.533-8.533 0-5.12-3.413-8.533-8.533-8.533h-42.667V179.2h25.6c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533h-25.6v-17.067h42.667c5.12 0 8.533-3.413 8.533-8.533S346.453 128 341.333 128h-42.667v-17.067h25.6c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533h-25.6V76.8h42.667c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533h-42.667V25.6c0-5.12 3.413-8.533 8.533-8.533h86.187c5.12 0 8.533 3.413 8.533 8.533v465.92z"/>
        <path
            d="M349.867 409.6c-18.773 0-34.133 15.36-34.133 34.133 0 18.773 15.36 34.133 34.133 34.133 18.773 0 34.133-15.36 34.133-34.133 0-18.773-15.36-34.133-34.133-34.133zm0 51.2c-9.387 0-17.067-7.68-17.067-17.067s7.68-17.067 17.067-17.067 17.067 7.68 17.067 17.067-7.681 17.067-17.067 17.067z"/>
    </svg>
)

export default RullerSvg;