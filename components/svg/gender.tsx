import * as React from "react"
import { SVGProps } from "react"

const GenderSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 61.132 61.132"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M27.482 34.031v12.317h-6.92a3.084 3.084 0 0 0 0 6.168h6.92v5.531a3.084 3.084 0 0 0 6.168 0v-5.531h6.92a3.084 3.084 0 0 0 0-6.168h-6.92V34.031c7.993-1.458 14.072-8.467 14.072-16.874C47.723 7.697 40.026 0 30.566 0c-9.46 0-17.157 7.697-17.157 17.157 0 8.407 6.08 15.416 14.073 16.874zm3.084-27.862c6.059 0 10.988 4.929 10.988 10.988s-4.929 10.988-10.988 10.988-10.988-4.929-10.988-10.988S24.507 6.169 30.566 6.169z" />
  </svg>
)

export default GenderSvg
