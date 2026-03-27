import Services from '@/components/Services';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ServicesPage = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <div className="pt-20">
                <Services />
            </div>
            <Footer />
        </div>
    );
};

export default ServicesPage;
