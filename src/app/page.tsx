import { Features } from "@/components/Features";
import { Header } from "@/components/Header";

export default function Home() {
    return (
        <main className="bg-primary h-screen overflow-scroll">
            <Header />
            <Features />
        </main>
    );
}
