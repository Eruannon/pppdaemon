import HeroSection from "@/components/sections/hero-section";
import AboutAdosSection from "@/components/sections/about-ados-section";
import AssessmentProcessSection from "@/components/sections/assessment-process-section";
import WhenToAssessSection from "@/components/sections/when-to-assess-section";
import ForWhomSection from "@/components/sections/for-whom-section";
import ResultsSection from "@/components/sections/results-section";
import SpecialistsSection from "@/components/sections/specialists-section";
import PreparationSection from "@/components/sections/preparation-section";
import AppointmentSection from "@/components/sections/appointment-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 relative">
      <HeroSection />

      
      <section id="about-ados">
        <AboutAdosSection />
      </section>
      <section id="assessment-process">
        <AssessmentProcessSection />
      </section>
      <section id="when-to-assess">
        <WhenToAssessSection />
      </section>
      <section id="for-whom">
        <ForWhomSection />
      </section>
      <section id="results">
        <ResultsSection />
      </section>
      <section id="specialists">
        <SpecialistsSection />
      </section>
      <section id="preparation">
        <PreparationSection />
      </section>
      <section id="appointment">
        <AppointmentSection />
      </section>
    </main>
  );
}
