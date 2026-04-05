import {
    Zap, DollarSign, Palette, Globe,
    Server, Search, Smartphone, MessageCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseMe = () => {
    const reasons = [
        {
            icon: Zap,
            title: 'Fast Delivery',
            description: 'Get your website ready in just 2–5 days',
            gradient: 'from-yellow-400 to-amber-500',
        },
        {
            icon: DollarSign,
            title: 'Affordable Pricing',
            description: 'Premium quality at budget-friendly prices',
            gradient: 'from-green-400 to-emerald-500',
        },
        {
            icon: Palette,
            title: 'Clean & Professional UI',
            description: 'Modern designs that impress every visitor',
            gradient: 'from-pink-400 to-rose-500',
        },
        {
            icon: Globe,
            title: 'Custom Domain Setup',
            description: 'Your own .com or .in domain — fully configured',
            gradient: 'from-blue-400 to-cyan-500',
        },
        {
            icon: Server,
            title: 'Free Hosting for 1 Year',
            description: 'No extra cost for hosting — included free',
            gradient: 'from-purple-400 to-violet-500',
        },
        {
            icon: Search,
            title: 'SEO Optimized',
            description: 'Rank higher on Google from day one',
            gradient: 'from-teal-400 to-emerald-500',
        },
        {
            icon: Smartphone,
            title: 'Mobile-Friendly Design',
            description: 'Looks perfect on all devices & screen sizes',
            gradient: 'from-indigo-400 to-blue-500',
        },
        {
            icon: MessageCircle,
            title: 'WhatsApp Support',
            description: 'One-click support — I\'m always just a message away',
            gradient: 'from-green-500 to-green-600',
        },
    ];

    return (
        <section id="why-choose-me" className="section-padding bg-muted/30">
            <div className="section-container">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 text-sm font-semibold rounded-full mb-4">
                        Trust & Quality
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
                        Why Choose Me
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Here's what makes working with me different — and better
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                    {reasons.map((reason, index) => (
                        <Card
                            key={index}
                            className="glass-card hover-lift group text-center"
                        >
                            <CardContent className="p-5 sm:p-6">
                                <div className={`inline-flex p-3.5 rounded-2xl bg-gradient-to-br ${reason.gradient} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <reason.icon className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {reason.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {reason.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;
