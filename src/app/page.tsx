import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
    return (
        <main className="bg-background">
            <Header />
            <Features />
            <Footer />
        </main>
    );
}
