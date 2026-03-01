import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import SignatureCardStack from '@/components/SignatureCardStack';
import AutomationDemo from '@/components/AutomationDemo';
import Process from '@/components/Process';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />
      <Problem />
      <SignatureCardStack />
      <AutomationDemo />
      <Process />
      <FinalCTA />
      <Footer />
    </main>
  );
}
