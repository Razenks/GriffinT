import AutomationHero from '../components/AutomationMain';
import AutomationSolution from '../components/AutomationSolution';
import AutomationServices from '../components/AutomationServices';
import KeyBenefits from '../components/AutomationBenefits';
import AutomationCTA from '../components/AutomationCTA';

export default function Automation() {
    return (
        <>
            <div className="bg-gradient-to-b from-slate-900 to-brand-blue text-gray-200">
                <main>
                    <AutomationHero />
                    <AutomationSolution />
                    <AutomationServices />
                    <KeyBenefits />
                    <AutomationCTA />
                </main>
            </div>
        </>
    );
}