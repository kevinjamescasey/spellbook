import React, { useState } from "react"
import { Script } from "gatsby"
import Layout from "../components/layout";



//       <Script src="https://www.paypal.com/sdk/js?client-id=BAABqUPqknFT7WLv2g3LSdY1mgMy8EorBeWW36m6FzYdBZXlPDMiqz9jz6ybtibBw_rAbc7gSFwA3d5--Y&components=hosted-buttons&enable-funding=venmo&currency=USD" />
//       <div id="paypal-container-WWDG83AC654TW"></div>
//       <Script>{`
//   paypal.HostedButtons({
//     hostedButtonId: "WWDG83AC654TW",
//   }).render("#paypal-container-WWDG83AC654TW")
// `}
//       </Script>


const PayPal = () => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Layout>
      <Script
        src="https://www.paypal.com/sdk/js?client-id=BAABqUPqknFT7WLv2g3LSdY1mgMy8EorBeWW36m6FzYdBZXlPDMiqz9jz6ybtibBw_rAbc7gSFwA3d5--Y&components=hosted-buttons&enable-funding=venmo&currency=USD"

        onLoad={() => {setLoaded(true)}}>
      </Script>

      {loaded && <Script id="render-paypal">{`

paypal.HostedButtons({
      hostedButtonId: "WWDG83AC654TW"
    })
    .render("#paypal-container-WWDG83AC654TW")

  `}</Script>}
<div className="grid place-content-center"><div id="paypal-container-WWDG83AC654TW" /></div>

    </Layout>
  )

}

export default PayPal
