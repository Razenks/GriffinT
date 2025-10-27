import InfraMain from '../components/InfraMain';
import InfraSolution from '../components/InfraSolution';
import InfraServices from '../components/InfraServices';
import InfraWhyChoose from '../components/InfraWhyChoose';
import InfraCTA from '../components/InfraCTA';

export default function InfraService() {
    return (
        <>
            <div className="bg-gradient-to-b from-slate-900 to-brand-blue text-gray-200">
                <main>
                    <InfraMain />
                    <InfraSolution />
                    <InfraServices />
                    <InfraWhyChoose />
                    <InfraCTA />
                </main>
            </div>
        </>
    );
}