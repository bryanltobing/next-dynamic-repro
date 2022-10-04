import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

// this will error
const Header = dynamic(
  () => import('../components/header').then((comps) => comps.Header),
  { suspense: true }
)

// uncomment this, this will not error
// const Header = dynamic(() => import('../components/header'), { suspense: true })

const AboutPage = () => {
  return (
    <div>
      <Suspense fallback={'Loading...'}>
        <Header />
      </Suspense>

      <main>main content</main>
    </div>
  )
}

export default AboutPage
