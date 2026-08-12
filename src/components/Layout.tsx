import { Outlet } from 'react-router-dom'
import { DisclosureBar } from './chrome/DisclosureBar'
import { Header } from './chrome/Header'
import { Footer } from './chrome/Footer'
import { MobileTabBar } from './chrome/MobileTabBar'
import { AgeGate } from './chrome/AgeGate'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col pt-9">
      <DisclosureBar />
      <AgeGate />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileTabBar />
    </div>
  )
}
