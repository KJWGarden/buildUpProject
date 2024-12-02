import Content from "@/components/content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
  return (
    <main className="w-full h-screen flex">
      <div className="fixed top-0 w-full">
        <Header />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <Content />
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}
