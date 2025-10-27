import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import DetailedFeatures from '../components/DetailedFeatures';
import AiFeature from '../components/AiFeature';
import TargetAudience from '../components/TargetAudience';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Main() {
  return (
    <>
      <div className="bg-gradient-to-b from-slate-900 to-brand-blue text-gray-200">
        <main>
          <Hero />
          <ProblemSolution />
          <DetailedFeatures />
          <AiFeature />
          <TargetAudience />
          <CTA />
        </main>
      </div>
    </>
  );
}
