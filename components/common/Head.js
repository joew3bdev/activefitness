import Head from "next/head";

export default function SeoHead(props) {
  return (
    <Head>
      {props?.children ?? (
        <>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="google-site-verification"
            content="qtIjFjh_6k7fdDrzJjZjTJ3SqGWVW9NCfbFeZ3BsR5E"
          />
          <meta
            name="google-site-verification"
            content="-BMG7jOEPlCtJcrUAr2IQyBrhQT-6c0I6Eh6leSxfW0"
          />
          <title>
            {props?.title ??
              "UAE's # 1 Fitness & Sports Equipment Store | Active Fitness Store"}
          </title>
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Shop A Wide Selection Of Treadmills, Elliptical, Rowing Machine, Spin Bike, etc! ✓ Easy Free Returns ✓ Fast Shipping ✓ Secure Shopping ✓ Cash On Delivery"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@activefitstore" />
          <meta property="og:url" content="https://activefitnessstore.com/" />
          <meta
            property="og:title"
            content="Leading Home Gym Equipment Online Store In UAE"
          />
          <meta
            property="og:description"
            content="Shop A Wide Selection Of Treadmills, Elliptical, Rowing Machine, Spin Bike, etc! ✓ Easy Free Returns ✓ Fast Shipping ✓ Secure Shopping ✓ Cash On Delivery"
          />
          <meta
            property="og:image"
            content="https://assets.activefitnessstore.com/desktop-assets/afs_logo_new_2022.svg"
          />
          <meta
            name="facebook-domain-verification"
            content="21t31rxu63ax38n8kjrg3ubu2p32lr"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://assets.activefitnessstore.com/desktop-assets/images/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://assets.activefitnessstore.com/desktop-assets/images/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://assets.activefitnessstore.com/desktop-assets/images/favicon-96x96.png"
            sizes="96x96"
          />
        </>
      )}
    </Head>
  );
}
