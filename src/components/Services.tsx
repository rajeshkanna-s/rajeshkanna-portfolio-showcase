import {
    Globe, Layout, Rocket, Settings, Server, Search,
    Mail, RefreshCw, Palette
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
    const services = [
        {
            icon: Layout,
            title: 'Portfolio Websites',
            description: 'Stunning personal portfolios that showcase your work and attract opportunities',
            color: 'from-pink-500 to-rose-500',
        },
        {
            icon: Globe,
            title: 'Business / Company Websites',
            description: 'Professional websites that build credibility and drive growth for your business',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Rocket,
            title: 'Landing Pages',
            description: 'High-converting landing pages designed to capture leads and boost sales',
            color: 'from-purple-500 to-indigo-500',
        },
        {
            icon: Settings,
            title: 'Custom Domain Setup',
            description: 'Get your own .com, .in, or custom domain — fully configured and ready',
            color: 'from-amber-500 to-orange-500',
        },
        {
            icon: Server,
            title: 'Hosting & Deployment',
            description: 'Fast, reliable hosting setup with SSL certificates and CDN for speed',
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: Search,
            title: 'SEO Optimization',
            description: 'On-page SEO to help your website rank higher on Google search results',
            color: 'from-teal-500 to-cyan-500',
        },
        {
            icon: Mail,
            title: 'Contact Form & Email',
            description: 'Professional contact forms with email integration — never miss a lead',
            color: 'from-red-500 to-pink-500',
        },
        {
            icon: RefreshCw,
            title: 'Website Redesign',
            description: 'Transform your outdated website into a modern, high-performing one',
            color: 'from-violet-500 to-purple-500',
        },
        {
            icon: Palette,
            title: 'Brand Identity Setup',
            description: 'Cohesive brand pages with logo placement, colors, and typography',
            color: 'from-fuchsia-500 to-pink-500',
        },
    ];

    return (
        <section id="services" className="section-padding bg-muted/30">
            <div className="section-container">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 text-sm font-semibold rounded-full mb-4">
                        What I Offer
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
                        My Services
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        From design to deployment — I handle everything so you can focus on your business
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="glass-card hover-lift group cursor-pointer overflow-hidden relative"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                            <CardContent className="p-5 sm:p-6">
                                <div className="flex flex-col items-start space-y-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
