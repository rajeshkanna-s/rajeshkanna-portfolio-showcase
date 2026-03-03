import { ExternalLink, Briefcase, User, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FreelancePortfolio = () => {
    const businessProjects = [
        { title: 'Taste & Table', industry: 'Café & Restaurant', url: 'https://tastetable.netlify.app/', color: 'from-orange-400 to-red-500' },
        { title: 'Lex & Co', industry: 'Law Firm', url: 'https://lex-co.netlify.app/', color: 'from-slate-500 to-gray-700' },
        { title: 'BrightSmilo', industry: 'Dental Clinic', url: 'https://brightsmilo.netlify.app/', color: 'from-cyan-400 to-blue-500' },
        { title: 'PulseFit', industry: 'Gym & Fitness', url: 'https://pulse-fits.netlify.app/', color: 'from-red-500 to-pink-500' },
        { title: 'HomeeServ', industry: 'Home Services', url: 'https://homeeserv.netlify.app/', color: 'from-green-400 to-emerald-500' },
        { title: 'The Empire', industry: 'Real Estate', url: 'https://the-empire.netlify.app/', color: 'from-amber-500 to-yellow-600' },
        { title: 'ContentWriter', industry: 'Content Agency', url: 'https://contwriter.netlify.app/', color: 'from-violet-500 to-purple-600' },
        { title: 'Real Estate PJ', industry: 'Real Estate', url: 'https://realestatepj.netlify.app/', color: 'from-emerald-500 to-teal-600' },
        { title: 'Energetic Canvas', industry: 'Creative Studio', url: 'https://energetic-canvas.netlify.app/', color: 'from-pink-400 to-fuchsia-500' },
        { title: 'MuseBeauty', industry: 'Beauty Salon', url: 'https://musebeauty.netlify.app/', color: 'from-rose-400 to-pink-500' },
        { title: 'La Bella Casa', industry: 'Interior Design', url: 'https://labellacasa.netlify.app/', color: 'from-yellow-400 to-amber-500' },
        { title: 'Loves Connect', industry: 'Matchmaking', url: 'https://loves-connect.netlify.app/', color: 'from-red-400 to-rose-500' },
    ];

    const professionalProjects = [
        { title: 'Priya Designer', industry: 'Graphic Designer', url: 'https://priya-designer.netlify.app/', color: 'from-pink-500 to-purple-500' },
        { title: 'EnsCraft Studio', industry: 'Creative Studio', url: 'https://enscraft-stu.netlify.app/', color: 'from-indigo-500 to-blue-600' },
        { title: 'Growth Engine', industry: 'Consultant', url: 'https://growth-engine-studio.netlify.app/', color: 'from-green-500 to-teal-500' },
        { title: 'Arjun Professional', industry: 'Professional', url: 'https://arjunprof.netlify.app/', color: 'from-blue-500 to-cyan-500' },
        { title: 'SkillShine Rahul', industry: 'Student Portfolio', url: 'https://skill-shine-rahul.netlify.app/', color: 'from-amber-500 to-orange-500' },
        { title: 'Designer Page', industry: 'UX/UI Designer', url: 'https://designerpage.netlify.app/', color: 'from-rose-500 to-red-500' },
        { title: 'Frontee Developer', industry: 'Web Developer', url: 'https://frontee-developer.netlify.app/', color: 'from-cyan-500 to-blue-500' },
        { title: 'Frame Photographer', industry: 'Photographer', url: 'https://frame-photographer.netlify.app/', color: 'from-gray-600 to-slate-700' },
        { title: 'DevCoder', industry: 'Developer', url: 'https://devcoder.netlify.app/', color: 'from-emerald-500 to-green-600' },
    ];

    const toolProjects = [
        { title: 'Expense Tracker', industry: 'Finance Tool', url: 'https://exptkr.netlify.app/', color: 'from-green-500 to-emerald-600' },
        { title: 'RestoBills', industry: 'Restaurant Billing', url: 'https://restobills.netlify.app/', color: 'from-orange-500 to-red-500' },
    ];

    const ProjectCard = ({ project }: { project: { title: string; industry: string; url: string; color: string } }) => (
        <Card className="glass-card hover-lift group overflow-hidden">
            {/* Live Site Preview */}
            <div
                className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer"
                style={{ height: '320px' }}
                onClick={() => window.open(project.url, '_blank')}
            >
                <iframe
                    src={project.url}
                    title={project.title}
                    className="absolute top-0 left-0 border-0 pointer-events-none"
                    style={{
                        width: '1280px',
                        height: '900px',
                        transform: 'scale(0.45)',
                        transformOrigin: 'top left',
                    }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                />
                {/* Overlay for click handling */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-all duration-300 z-10"></div>

                {/* Industry badge */}
                <div className="absolute top-3 right-3 z-20">
                    <span className={`px-3 py-1.5 bg-gradient-to-r ${project.color} text-white text-xs font-semibold rounded-full shadow-lg`}>
                        {project.industry}
                    </span>
                </div>
            </div>

            {/* Card Footer */}
            <CardContent className="p-4 sm:p-5">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-0.5">{project.industry}</p>
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-primary hover:text-white transition-all font-semibold"
                        onClick={(e) => { e.stopPropagation(); window.open(project.url, '_blank'); }}
                    >
                        <ExternalLink className="h-4 w-4 mr-1.5" />
                        View Site
                    </Button>
                </div>
            </CardContent>
        </Card>
    );

    const SectionHeader = ({ icon: Icon, title, count }: { icon: typeof Briefcase; title: string; count: number }) => (
        <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-gradient-primary rounded-xl">
                <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h3>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">{count}</span>
        </div>
    );

    return (
        <section id="freelance-portfolio" className="section-padding bg-gradient-to-b from-background to-accent/30">
            <div className="section-container">
                {/* Section Title */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-block px-4 py-1.5 bg-pink-100 dark:bg-pink-800/50 text-pink-600 dark:text-pink-300 text-sm font-semibold rounded-full mb-4">
                        My Freelance Work
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
                        Websites I've Built for Clients
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        30+ premium websites delivered to businesses and professionals across India
                    </p>
                </div>

                {/* ===== Business Portfolio ===== */}
                <div className="mb-16">
                    <SectionHeader icon={Briefcase} title="Business Portfolio" count={businessProjects.length} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {businessProjects.map((project, index) => (
                            <ProjectCard key={`biz-${index}`} project={project} />
                        ))}
                    </div>
                </div>

                {/* ===== Professional Portfolio ===== */}
                <div className="mb-16">
                    <SectionHeader icon={User} title="Professional Portfolio" count={professionalProjects.length} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {professionalProjects.map((project, index) => (
                            <ProjectCard key={`prof-${index}`} project={project} />
                        ))}
                    </div>
                </div>

                {/* ===== Business Tools ===== */}
                <div className="mb-10">
                    <SectionHeader icon={Wrench} title="Business Tools" count={toolProjects.length} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {toolProjects.map((project, index) => (
                            <ProjectCard key={`tool-${index}`} project={project} />
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-10 sm:mt-14">
                    <Card className="glass-card">
                        <CardContent className="p-4 sm:p-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gradient mb-1">30+</div>
                                    <div className="text-muted-foreground text-sm">Websites Delivered</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gradient mb-1">15+</div>
                                    <div className="text-muted-foreground text-sm">Industries Covered</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gradient mb-1">2-5</div>
                                    <div className="text-muted-foreground text-sm">Days Delivery</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gradient mb-1">100%</div>
                                    <div className="text-muted-foreground text-sm">Client Satisfaction</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default FreelancePortfolio;
