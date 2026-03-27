import Services from '@/components/Services';
import WhyChooseMe from '@/components/WhyChooseMe';
import FreelancePortfolio from '@/components/FreelancePortfolio';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ServicesPage = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <div className="pt-20">
                <Services />
                <WhyChooseMe />
                <FreelancePortfolio />
            </div>
            <Footer />
        </div>
    );
};

export default ServicesPage;
