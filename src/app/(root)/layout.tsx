import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full">
      <TopBar />
      <Navbar />
      {children}
      <Footer/>
    </main>
  );
}
