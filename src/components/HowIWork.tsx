import { Card, CardContent } from '@/components/ui/card';

const HowIWork = () => {
    const steps = [
        {
            number: '01',
            title: 'Discussion',
            description: 'We discuss your requirements, goals, and vision for the website',
            emoji: '💬',
        },
        {
            number: '02',
            title: 'Content Collection',
            description: 'You share your content — text, images, logos, and branding details',
            emoji: '📋',
        },
        {
            number: '03',
            title: 'Design Confirmation',
            description: 'I create a design mockup and get your approval before coding',
            emoji: '🎨',
        },
        {
            number: '04',
            title: 'Development',
            description: 'I build your website with clean code, responsiveness, and SEO',
            emoji: '💻',
        },
        {
            number: '05',
            title: 'Review & Feedback',
            description: 'You review the website and share feedback for any changes',
            emoji: '🔍',
        },
        {
            number: '06',
            title: 'Domain & Hosting',
            description: 'I set up your custom domain and deploy the website live',
            emoji: '🌐',
        },
        {
            number: '07',
            title: 'Final Delivery',
            description: 'Your website goes live! I provide all credentials and access',
            emoji: '🚀',
        },
        {
            number: '08',
            title: 'Support & Updates',
            description: 'Ongoing support and maintenance to keep your site running smoothly',
            emoji: '🛡️',
        },
    ];

    return (
        <section id="process" className="section-padding bg-gradient-to-b from-background to-accent/30">
            <div className="section-container">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-block px-4 py-1.5 bg-pink-100 dark:bg-pink-800/50 text-pink-600 dark:text-pink-300 text-sm font-semibold rounded-full mb-4">
                        My Process
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
                        How I Work
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        A simple, transparent 8-step process from idea to launch — so you know exactly what to expect
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            className="glass-card hover-lift group relative overflow-hidden"
                        >
                            <CardContent className="p-5 sm:p-6 text-center">
                                {/* Step Number */}
                                <div className="absolute top-3 right-3 text-5xl font-black text-primary/5 group-hover:text-primary/10 transition-colors select-none">
                                    {step.number}
                                </div>

                                {/* Emoji */}
                                <div className="text-4xl mb-4">{step.emoji}</div>

                                {/* Step Number Badge */}
                                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-primary text-white text-sm font-bold mb-3">
                                    {index + 1}
                                </div>

                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowIWork;
