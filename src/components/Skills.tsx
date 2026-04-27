import { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface SkillGroup {
  title: string;
  summary: string;
  skills: Skill[];
}

const technicalGroups: SkillGroup[] = [
  {
    title: 'Backend & APIs',
    summary: 'Java, Spring, REST APIs, and service architecture.',
    skills: [
      { name: 'Java', icon: 'openjdk', color: '#ED8B00' },
      { name: 'Spring Boot', icon: 'springboot', color: '#6DB33F' },
      { name: 'Spring Framework', icon: 'spring', color: '#6DB33F' },
      { name: 'Node.js', icon: 'nodedotjs', color: '#5FA04E' },
      { name: 'Express', icon: 'express', color: '#353535' },
      { name: 'REST API', icon: 'openapiinitiative', color: '#6BA539' },
      { name: 'Microservices', icon: 'kubernetes', color: '#326CE5' },
      { name: 'Tomcat', icon: 'apachetomcat', color: '#F8DC75' },
    ],
  },
  {
    title: 'Frontend',
    summary: 'Responsive React interfaces with modern UI tooling.',
    skills: [
      { name: 'React', icon: 'react', color: '#61DAFB' },
      { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
      { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
      { name: 'HTML', icon: 'html5', color: '#E34F26' },
      { name: 'CSS', icon: 'css', color: '#1572B6' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#06B6D4' },
      { name: 'Bootstrap', icon: 'bootstrap', color: '#7952B3' },
      { name: 'Framer', icon: 'framer', color: '#0055FF' },
      { name: 'jQuery', icon: 'jquery', color: '#0769AD' },
      { name: 'Vite', icon: 'vite', color: '#646CFF' },
      { name: 'Responsive Design', icon: 'googlechrome', color: '#4285F4' },
    ],
  },
  {
    title: 'Databases & Cloud',
    summary: 'Data storage, deployment, and managed platforms.',
    skills: [
      { name: 'MySQL', icon: 'mysql', color: '#4479A1' },
      { name: 'PostgreSQL', icon: 'postgresql', color: '#4169E1' },
      { name: 'MongoDB', icon: 'mongodb', color: '#47A248' },
      { name: 'Supabase', icon: 'supabase', color: '#3FCF8E' },
      { name: 'Firebase', icon: 'firebase', color: '#DD2C00' },
      { name: 'Docker', icon: 'docker', color: '#2496ED' },
      { name: 'AWS', icon: 'amazonaws', color: '#FF9900' },
      { name: 'Vercel', icon: 'vercel', color: '#1A1A1A' },
    ],
  },
  {
    title: 'Tools & Workflow',
    summary: 'Version control, API testing, issue tracking, and IDEs.',
    skills: [
      { name: 'Git', icon: 'git', color: '#F05032' },
      { name: 'GitHub', icon: 'github', color: '#181717' },
      { name: 'Postman', icon: 'postman', color: '#FF6C37' },
      { name: 'Jira', icon: 'jira', color: '#0052CC' },
      { name: 'Eclipse/STS', icon: 'eclipseide', color: '#2C2255' },
      { name: 'Agile', icon: 'scrumalliance', color: '#009FDA' },
      { name: 'Advanced Excel', icon: 'microsoftexcel', color: '#217346' },
    ],
  },
  {
    title: 'Programming Foundations',
    summary: 'Problem solving, language fundamentals, and CS basics.',
    skills: [
      { name: 'OOPS', icon: 'cplusplus', color: '#00599C' },
      { name: 'Data Structures', icon: 'leetcode', color: '#FFA116' },
    ],
  },
];

const aiGroups: SkillGroup[] = [
  {
    title: 'AI Development',
    summary: 'Assistants and research tools for coding and planning.',
    skills: [
      { name: 'ChatGPT', icon: 'openai', color: '#10A37F' },
      { name: 'Claude', icon: 'anthropic', color: '#D4A574' },
      { name: 'Google Gemini', icon: 'googlegemini', color: '#8E75B2' },
      { name: 'GitHub Copilot', icon: 'githubcopilot', color: '#2B3137' },
      { name: 'Cursor AI', icon: 'cursor', color: '#00D4AA' },
      { name: 'Perplexity AI', icon: 'perplexity', color: '#1FB8CD' },
      { name: 'Codex', icon: 'openai', color: '#10A37F' },
      { name: 'Gemini CLI', icon: 'googlegemini', color: '#8E75B2' },
    ],
  },
  {
    title: 'Creative AI',
    summary: 'Image, video, and voice tools for creative output.',
    skills: [
      { name: 'Midjourney', icon: 'midjourney', color: '#1A1A1A' },
      { name: 'DALL-E', icon: 'openai', color: '#FF6B35' },
      { name: 'Runway', icon: 'runway', color: '#1A1A1A' },
      { name: 'ElevenLabs', icon: 'elevenlabs', color: '#1A1A1A' },
    ],
  },
  {
    title: 'AI Platforms & Models',
    summary: 'Model ecosystems and local AI tooling.',
    skills: [
      { name: 'Microsoft Copilot', icon: 'microsoft', color: '#5E5E5E' },
      { name: 'Meta AI', icon: 'meta', color: '#0081FB' },
      { name: 'Mistral AI', icon: 'mistral', color: '#FF7000' },
      { name: 'Ollama', icon: 'ollama', color: '#000000' },
      { name: 'GLM', icon: 'glm', color: '#2563EB' },
      { name: 'GROK', icon: 'x', color: '#000000' },
    ],
  },
];

const SkillIcon = ({ skill }: { skill: Skill }) => {
  const [failed, setFailed] = useState(false);
  const initial = skill.name.charAt(0).toUpperCase();

  if (failed) {
    return (
      <span className="skill-icon-fallback" style={{ background: skill.color }}>
        {initial}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color.replace('#', '')}`}
      alt=""
      width={18}
      height={18}
      loading="lazy"
      className="skill-icon"
      onError={() => setFailed(true)}
    />
  );
};

const SkillPill = ({ skill }: { skill: Skill }) => (
  <li className="skill-pill">
    <SkillIcon skill={skill} />
    <span className="skill-label">{skill.name}</span>
  </li>
);

const SkillGroupCard = ({ group }: { group: SkillGroup }) => (
  <article className="skill-group-card">
    <div className="skill-group-top">
      <div>
        <h3 className="skill-group-title">{group.title}</h3>
        <p className="skill-group-summary">{group.summary}</p>
      </div>
      <span className="skill-count">{group.skills.length}</span>
    </div>

    <ul className="skill-list" aria-label={`${group.title} skills`}>
      {group.skills.map((skill) => (
        <SkillPill key={`${group.title}-${skill.name}`} skill={skill} />
      ))}
    </ul>
  </article>
);

const countSkills = (groups: SkillGroup[]) =>
  groups.reduce((total, group) => total + group.skills.length, 0);

const Skills = () => {
  const technicalSkillCount = countSkills(technicalGroups);
  const aiSkillCount = countSkills(aiGroups);

  return (
    <>
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <div className="skills-header">
            <p className="skills-eyebrow">What I Work With</p>
            <h2 className="skills-title">Skills</h2>
            <p className="skills-subtitle">
              Core technologies, tools, and engineering practices I use to build full-stack products.
            </p>
            <div className="skills-metrics" aria-label="Technical skills overview">
              <span className="skills-metric">
                <strong>{technicalSkillCount}</strong> technical skills
              </span>
              <span className="skills-metric">
                <strong>{technicalGroups.length}</strong> focus areas
              </span>
            </div>
          </div>

          <div className="skills-grid">
            {technicalGroups.map((group) => (
              <SkillGroupCard key={group.title} group={group} />
            ))}
          </div>
        </div>
      </section>

      <section id="ai-tools" className="skills-section skills-section-alt">
        <div className="skills-container">
          <div className="skills-header">
            <p className="skills-eyebrow">Powered By Intelligence</p>
            <h2 className="skills-title">
              AI Tools <span className="text-gradient">I Use</span>
            </h2>
            <p className="skills-subtitle">
              AI platforms and assistants I use for faster development, research, and creative workflows.
            </p>
            <div className="skills-metrics" aria-label="AI tools overview">
              <span className="skills-metric">
                <strong>{aiSkillCount}</strong> AI tools
              </span>
              <span className="skills-metric">
                <strong>{aiGroups.length}</strong> tool groups
              </span>
            </div>
          </div>

          <div className="skills-grid skills-grid-ai">
            {aiGroups.map((group) => (
              <SkillGroupCard key={group.title} group={group} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
