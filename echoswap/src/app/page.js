import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Login from "@/components/Login";

export default function Home() {
  return (
    <div className="bg-[#CAF0F8] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-bold text-[#03045E]">Welcome to EchoSwap</h1>
        <p className="text-lg text-[#0077B6] mt-2">A platform for energy resource sharing.</p>
        <Login />
      </main>
      <Footer />
    </div>
  );
}
