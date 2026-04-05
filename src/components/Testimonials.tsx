import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Arjun K.',
            role: 'Startup Founder',
            quote: 'Rajeshkanna built my business website in just 3 days! The design was clean, professional, and exactly what I needed. Highly recommended for anyone looking for an affordable web developer.',
            rating: 5,
            initials: 'AK',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            name: 'Priya M.',
            role: 'Graphic Designer',
            quote: 'I wanted a portfolio that truly represents my work, and Rajeshkanna delivered beyond my expectations. The animations, responsiveness, and SEO are top-notch. My portfolio now gets more leads!',
            rating: 5,
            initials: 'PM',
            gradient: 'from-pink-500 to-rose-500',
        },
        {
            name: 'Dr. Suresh R.',
            role: 'Dental Clinic Owner',
            quote: 'Our clinic website looks amazing and loads super fast. Patients can now book appointments online easily. The WhatsApp integration was a great addition. Very professional experience!',
            rating: 5,
            initials: 'SR',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            name: 'Meena L.',
            role: 'Restaurant Owner',
            quote: 'The café website Rajeshkanna built for us is beautiful. Our customers love the online menu. The project was delivered on time and the support after delivery is excellent.',
            rating: 5,
            initials: 'ML',
            gradient: 'from-orange-500 to-amber-500',
        },
        {
            name: 'Vikram S.',
            role: 'Real Estate Agent',
            quote: 'My property listing website is exactly what I wanted — professional, fast, and easy to navigate. Rajeshkanna understood my requirements perfectly and delivered a premium result at an affordable price.',
            rating: 5,
            initials: 'VS',
            gradient: 'from-purple-500 to-violet-500',
        },
    ];

    return (
        <section id="testimonials" className="section-padding bg-muted/30">
            <div className="section-container">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 text-sm font-semibold rounded-full mb-4">
                        Client Reviews
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
                        What Clients Say
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Don't take my word for it — here's what my clients have to say about working with me
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className={`glass-card hover-lift group relative overflow-hidden ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                                }`}
                        >
                            <CardContent className="p-5 sm:p-6">
                                {/* Quote Icon */}
                                <Quote className="h-8 w-8 text-primary/15 mb-3" />

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-foreground leading-relaxed mb-5 text-sm">
                                    "{testimonial.quote}"
                                </p>

                                {/* Client */}
                                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                                        <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Note */}
                <p className="text-center text-muted-foreground text-xs mt-8 italic">
                    * Sample testimonials showcasing typical client experiences
                </p>
            </div>
        </section>
    );
};

export default Testimonials;
