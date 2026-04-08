import { useEffect, useRef, useState } from 'react';

/* ── Skill item type ── */
interface Skill {
  name: string;
  icon: string;   // Simple Icons slug
  color: string;  // hex color (with #)
}

/* ═══════════════════════════════════════════════
   SECTION 1  —  Technical Skills
   ═══════════════════════════════════════════════ */
const skillRows: Skill[][] = [
  [
    { name: 'Java', icon: 'openjdk', color: '#ED8B00' },
    { name: 'Spring Boot', icon: 'springboot', color: '#6DB33F' },
    { name: 'Spring Framework', icon: 'spring', color: '#6DB33F' },
    { name: 'React', icon: 'react', color: '#61DAFB' },
    { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
    { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
    { name: 'Python', icon: 'python', color: '#3776AB' },
    { name: 'Node.js', icon: 'nodedotjs', color: '#5FA04E' },
    { name: 'Express', icon: 'express', color: '#353535' },
    { name: 'HTML', icon: 'html5', color: '#E34F26' },
    { name: 'CSS', icon: 'css', color: '#1572B6' },
    { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#06B6D4' },
    { name: 'Bootstrap', icon: 'bootstrap', color: '#7952B3' },
    { name: 'Framer', icon: 'framer', color: '#0055FF' },
  ],
  [
    { name: 'MySQL', icon: 'mysql', color: '#4479A1' },
    { name: 'PostgreSQL', icon: 'postgresql', color: '#4169E1' },
    { name: 'MongoDB', icon: 'mongodb', color: '#47A248' },
    { name: 'Docker', icon: 'docker', color: '#2496ED' },
    { name: 'AWS', icon: 'amazonaws', color: '#FF9900' },
    { name: 'Vercel', icon: 'vercel', color: '#1A1A1A' },
    { name: 'Git', icon: 'git', color: '#F05032' },
    { name: 'GitHub', icon: 'github', color: '#181717' },
    { name: 'Postman', icon: 'postman', color: '#FF6C37' },
    { name: 'Jira', icon: 'jira', color: '#0052CC' },
    { name: 'Eclipse/STS', icon: 'eclipseide', color: '#2C2255' },
    { name: 'Tomcat', icon: 'apachetomcat', color: '#F8DC75' },
    { name: 'jQuery', icon: 'jquery', color: '#0769AD' },
    { name: 'Vite', icon: 'vite', color: '#646CFF' },
  ],
  [
    { name: 'REST API', icon: 'openapiinitiative', color: '#6BA539' },
    { name: 'Microservices', icon: 'kubernetes', color: '#326CE5' },
    { name: 'OOPS', icon: 'cplusplus', color: '#00599C' },
    { name: 'Data Structures', icon: 'leetcode', color: '#FFA116' },
    { name: 'Advanced Excel', icon: 'microsoftexcel', color: '#217346' },
    { name: 'Supabase', icon: 'supabase', color: '#3FCF8E' },
    { name: 'Firebase', icon: 'firebase', color: '#DD2C00' },
    { name: 'Responsive Design', icon: 'googlechrome', color: '#4285F4' },
    { name: 'Agile', icon: 'scrumalliance', color: '#009FDA' },
  ],
];

/* ═══════════════════════════════════════════════
   SECTION 2  —  AI & Tech Stack
   ═══════════════════════════════════════════════ */
const aiRows: Skill[][] = [
  [
    { name: 'ChatGPT', icon: 'openai', color: '#10A37F' },
    { name: 'Claude', icon: 'anthropic', color: '#D4A574' },
    { name: 'Google Gemini', icon: 'googlegemini', color: '#8E75B2' },
    { name: 'GitHub Copilot', icon: 'githubcopilot', color: '#2B3137' },
    { name: 'Cursor AI', icon: 'cursor', color: '#00D4AA' },
    { name: 'Midjourney', icon: 'midjourney', color: '#1A1A1A' },
    { name: 'DALL·E', icon: 'openai', color: '#FF6B35' },
    { name: 'Runway', icon: 'runway', color: '#1A1A1A' },
    { name: 'ElevenLabs', icon: 'elevenlabs', color: '#1A1A1A' },
    { name: 'Perplexity AI', icon: 'perplexity', color: '#1FB8CD' },
    { name: 'Microsoft Copilot', icon: 'microsoft', color: '#5E5E5E' },
    { name: 'Meta AI', icon: 'meta', color: '#0081FB' },
    { name: 'Mistral AI', icon: 'mistral', color: '#FF7000' },
    { name: 'Ollama', icon: 'ollama', color: '#000000' },
    { name: 'GLM', icon: 'glm', color: '#2563EB' },
    { name: 'GROK', icon: 'x', color: '#000000' },
    { name: 'Codex', icon: 'openai', color: '#10A37F' },
    { name: 'Gemini CLI', icon: 'googlegemini', color: '#8E75B2' },
  ],
];

/* ═══════════════════════════════════════════════
   Icon with fallback
   ═══════════════════════════════════════════════ */
const SkillIcon = ({ skill }: { skill: Skill }) => {
  const [failed, setFailed] = useState(false);
  const initial = skill.name.charAt(0).toUpperCase();

  if (failed) {
    return (
      <div
        className="marquee-icon-fallback"
        style={{ background: skill.color }}
      >
        {initial}
      </div>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color.replace('#', '')}`}
      alt={skill.name}
      width={20}
      height={20}
      loading="lazy"
      className="marquee-icon"
      onError={() => setFailed(true)}
    />
  );
};

/* ═══════════════════════════════════════════════
   Marquee Row
   ═══════════════════════════════════════════════ */
interface MarqueeRowProps {
  skills: Skill[];
  direction?: 'left' | 'right';
  speed?: number;
}

const MarqueeRow = ({ skills, direction = 'left', speed = 35 }: MarqueeRowProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const pause = () => { el.style.animationPlayState = 'paused'; };
    const play  = () => { el.style.animationPlayState = 'running'; };
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', play);
    return () => {
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', play);
    };
  }, []);

  const doubled = [...skills, ...skills];

  return (
    <div className="marquee-viewport">
      <div
        ref={trackRef}
        className={`marquee-track ${direction === 'right' ? 'marquee-reverse' : 'marquee-forward'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((s, i) => (
          <div key={i} className="marquee-pill group">
            <SkillIcon skill={s} />
            <span className="marquee-label">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   Main Skills Component — two sections
   ═══════════════════════════════════════════════ */
const Skills = () => (
  <>
    {/* ─── Section 1: Technical Skills ─── */}
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <p className="skills-eyebrow">What I Work With</p>
        <h2 className="skills-title">
          Skills
        </h2>
        <p className="skills-subtitle">
          A continuously scrolling showcase of the technologies and frameworks I use daily
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />
        <MarqueeRow skills={skillRows[0]} direction="left"  speed={40} />
        <MarqueeRow skills={skillRows[1]} direction="right" speed={45} />
        <MarqueeRow skills={skillRows[2]} direction="left"  speed={35} />
      </div>
    </section>

    {/* ─── Section 2: AI & Tech Stack ─── */}
    <section id="ai-tools" className="skills-section skills-section-alt">
      <div className="skills-header">
        <p className="skills-eyebrow">Powered By Intelligence</p>
        <h2 className="skills-title">
          Tech Stack & AI — <span className="text-gradient">all in motion.</span>
        </h2>
        <p className="skills-subtitle">
          AI-powered tools I leverage to build faster, smarter, and more creatively
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-fade-left marquee-fade-alt" />
        <div className="marquee-fade-right marquee-fade-alt" />
        <MarqueeRow skills={aiRows[0]} direction="left" speed={30} />
      </div>
    </section>
  </>
);

export default Skills;