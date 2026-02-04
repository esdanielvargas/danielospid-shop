import { Footer, Header, Main, TopBar } from "@/components";

export default function MainLayout() {
  return (
    <div className="w-full min-h-dvh bg-sky-100">
      <TopBar />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}