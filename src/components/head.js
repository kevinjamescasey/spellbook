import * as React from "react";
import Seo from './seo'
import { Script } from "gatsby"

const Head = ({title}) => {
    return <>
             <Seo title={title}/>
             <Script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"/>
    </>
}

export default Head
