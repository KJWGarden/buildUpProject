import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
  return (
    <main className="w-full h-full flex">
      <Header />
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}
