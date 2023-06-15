import React from 'react'
import HeaderLanding from '../../components/Header/HeadearLanding'
import LandingPageJumbotron from './Jumbotron/LandingPageJumbotron'
import Section3LandingPage from './Section3LandingPage/Section3LandingPage'
import TestimoniCarousel from './TestimoniCarousel/TestimoniCarousel'
import MiniCardLanding from '../../components/MiniCardLanding/MiniCardLanding'
import DownloadApp from './DownloadApp/DownloadApp'
import FooterLanding from '../../components/FooterLanding/FooterLanding'

const MainsLanding = () => {
  return (
    <div style={{ backgroundColor: "var(--Neutral-White-100)" }}>
    <HeaderLanding />
    <LandingPageJumbotron />
    <Section3LandingPage />
    <div className="mb-5 mt-5">
      <TestimoniCarousel />
    </div>
    <div className="mb-5 mt-5">
      <MiniCardLanding />
    </div>
    <DownloadApp />
    <div style={{ marginTop: "20vh" }}>
      <FooterLanding />
    </div>
  </div>
  )
}

export default MainsLanding