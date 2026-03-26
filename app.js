/* ===================================================
   SpotOn Design Competency Hub — Application
   =================================================== */

// ============ CONSTANTS ============
const LEVEL_CONFIG = {
  Learner:     { emoji: '🌱', color: '#10B981', bg: '#D1FAE5', cls: 'level-learner',     order: 1 },
  Contributor: { emoji: '🛠️', color: '#3B82F6', bg: '#DBEAFE', cls: 'level-contributor', order: 2 },
  Independent: { emoji: '🚀', color: '#8B5CF6', bg: '#EDE9FE', cls: 'level-independent', order: 3 },
  Expert:      { emoji: '🏆', color: '#BE185D', bg: '#FCE7F3', cls: 'level-expert',      order: 4 },
};
const LEVELS = ['Learner', 'Contributor', 'Independent', 'Expert'];

const CATEGORY_CONFIG = {
  'Design Skills':           { color: '#6366F1', bg: '#EEF2FF', icon: '🎨' },
  'Project Management':   { color: '#EC4899', bg: '#FDF2F8', icon: '📋' },
  'Collaboration':        { color: '#14B8A6', bg: '#F0FDFA', icon: '🤝' },
  'Influence':            { color: '#F97316', bg: '#FFF7ED', icon: '✨' },
};

const SKILL_ICONS = {
  job_skills_1:  '🧭',  job_skills_2:  '🔬',  job_skills_3:  '📋',
  job_skills_4:  '🎙️', job_skills_5:  '🔍',  job_skills_6:  '📊',
  job_skills_7:  '💡',  job_skills_8:  '🗓️', job_skills_9:  '🎯',
  job_skills_10: '⚖️', job_skills_11: '🗺️', job_skills_12: '✏️',
  job_skills_13: '🔄',  job_skills_14: '📐',  job_skills_15: '🏗️',
  job_skills_16: '↗️',  job_skills_17: '🖼️', job_skills_18: '📁',
  job_skills_19: '♿',  job_skills_20: '🔩',  job_skills_21: '▶️',
  job_skills_22: '📤',  job_skills_23: '✅',  job_skills_24: '🤖',
  project_management_1: '🔁', project_management_2: '📌',
  project_management_3: '🗂️', project_management_4: '⏰',
  project_management_5: '🎚️',
  collaboration_1:  '🤲', collaboration_2:  '💬', collaboration_3:  '🤝',
  collaboration_4:  '📢', collaboration_5:  '🧠', collaboration_6:  '🌐',
  collaboration_7:  '🧩', collaboration_8:  '🙋', collaboration_9:  '📜',
  collaboration_10: '🤜',
  influence_1: '🎤', influence_2: '🌍', influence_3: '📈',
  influence_4: '🎨', influence_5: '⭐', influence_6: '👨‍🏫',
  influence_7: '👥', influence_8: '💭', influence_9: '👤',
};

function renderSkillIllustration(skill) {
  const cc = CATEGORY_CONFIG[skill.category] || { color: '#6366F1', bg: '#EEF2FF' };
  const icon = SKILL_ICONS[skill.id] || '✨';
  const n = parseInt(skill.id.split('_').pop()) || 1;
  const c = cc.color;
  const bg = cc.bg;
  // Deterministic positions from skill number
  const p = (base, spread, salt) => base + ((n * 37 + salt * 19) % spread);
  return `
    <div class="skill-card-illustration" style="background:${bg}">
      <svg width="100%" height="100%" viewBox="0 0 280 88" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0">
        <circle cx="${p(200,70,1)}" cy="${p(-10,35,2)}" r="${p(55,35,3)}" fill="${c}" opacity="0.13"/>
        <circle cx="${p(10,80,4)}"  cy="${p(30,40,5)}" r="${p(40,30,6)}" fill="${c}" opacity="0.09"/>
        <circle cx="${p(90,70,7)}"  cy="${p(50,30,8)}" r="${p(20,25,9)}" fill="${c}" opacity="0.11"/>
        <circle cx="${p(150,80,10)}" cy="${p(55,25,11)}" r="${p(15,20,12)}" fill="${c}" opacity="0.07"/>
      </svg>
      <span class="skill-card-icon">${icon}</span>
    </div>
  `;
}

// ============ CORE VALUES DATA ============
const CORE_VALUES_DATA = [
  {
    id: 'empathy',
    label: 'Be the Client',
    emoji: '💛',
    color: '#0891B2',
    bg: '#ECFEFF',
    rubric: {
      1: 'Demonstrates lack of emotional intelligence and empathy that negatively affects the team. Actively avoids inclusive practices and dismisses perspectives different from their own. Creates additional tension in difficult situations and damages relationships.',
      2: 'Demonstrates limited emotional intelligence and empathy that impacts team dynamics. Inconsistently practices inclusion and struggles to consider perspectives beyond their own. Shows difficulty handling challenging situations and often strains relationships.',
      3: 'Demonstrates expected emotional intelligence and empathy in most situations. Supports inclusive practices and considers key perspectives during standard situations. Shows ability to manage typical difficult situations while maintaining relationships.',
      4: 'Demonstrates strong emotional intelligence and empathy that influences team behavior. Actively promotes inclusive practices that consider multiple perspectives, especially during challenging situations. Shows strong ability to de-escalate complex situations while strengthening relationships.',
      5: 'Demonstrates exceptional emotional intelligence and empathy that sets the standard for others. Champions inclusive practices that consider all perspectives, especially during challenging situations. Shows remarkable ability to de-escalate complex situations while maintaining relationships.',
    },
  },
  {
    id: 'teamwork',
    label: 'One for All. All for One.',
    emoji: '🤝',
    color: '#7C3AED',
    bg: '#F5F3FF',
    rubric: {
      1: 'Shows poor leadership that disrupts collaborative environments and hinders team outcomes. Fails to build connections across functions and damages existing partnerships. Creates or reinforces silos that block cross-functional effectiveness. Ignores inclusive practices and discourages diverse contributions.',
      2: 'Demonstrates inconsistent leadership in collaborative environments that impacts team outcomes. Struggles to maintain connections across functions and rarely develops new partnerships. Shows limited ability to work across silos and often creates functional barriers.',
      3: 'Shows adequate leadership in maintaining collaborative environments that meet team outcomes. Maintains established connections across functions and supports existing organizational partnerships. Follows standard processes to work across silos and maintain cross-functional effectiveness.',
      4: 'Demonstrates strong leadership in fostering collaborative environments that drive successful team outcomes. Actively builds connections across functions, developing partnerships that improve organizational performance. Implements effective solutions to reduce silos and enhance cross-functional cooperation.',
      5: 'Exemplifies exceptional leadership in fostering collaborative environments that drive outstanding team outcomes. Proactively builds bridges across functions, creating sustainable partnerships that elevate organizational performance. Creates innovative solutions to break down silos and improve cross-functional effectiveness.',
    },
  },
  {
    id: 'agility',
    label: 'Learn, Question, Transform, Repeat.',
    emoji: '⚡',
    color: '#059669',
    bg: '#ECFDF5',
    rubric: {
      1: 'Rarely identifies opportunities and fails to implement basic initiatives successfully. Demonstrates poor understanding of change management principles and lacks strategic thinking. Proposes impractical solutions that create unnecessary disruption and team conflict.',
      2: 'Inconsistently identifies opportunities and struggles to implement initiatives effectively. Shows limited understanding of change management with minimal strategic consideration. Proposes solutions that may disrupt processes or lack team support.',
      3: 'Identifies routine opportunities for improvement and implements standard initiatives adequately. Demonstrates basic understanding of change management through conventional approaches. Proposes practical solutions that work within existing processes and maintains team cooperation.',
      4: 'Regularly identifies opportunities for improvement and successfully implements new initiatives with strong skill. Shows clear understanding of change management through effective questioning and planning. Successfully addresses resistance through constructive dialogue and collaboration.',
      5: 'Proactively identifies opportunities for innovation and actively drives implementation of complex initiatives with exceptional skill and influence. Demonstrates sophisticated understanding of change management principles. Consistently proposes breakthrough solutions that challenge status quo while maintaining team buy-in.',
    },
  },
  {
    id: 'humility',
    label: 'Think Big. Act Small.',
    emoji: '🙏',
    color: '#D97706',
    bg: '#FFFBEB',
    rubric: {
      1: 'Creates negative team dynamics through self-promoting behavior. Dismisses others\' input and takes credit for team achievements. Refuses to acknowledge mistakes or accept constructive feedback.',
      2: 'Inconsistently demonstrates humility and occasionally displays defensive behavior. Sometimes dismisses others\' perspectives or takes credit for team efforts. Reluctant to admit mistakes or accept feedback for improvement.',
      3: 'Shows appropriate humility and works cooperatively with team members. Accepts feedback when given and shares credit appropriately. Demonstrates awareness of own strengths and limitations.',
      4: 'Regularly demonstrates humility and strong collaborative spirit. Seeks input from others before making decisions and readily shares credit for successes. Acknowledges mistakes openly and uses feedback to improve performance.',
      5: 'Consistently demonstrates genuine humility while delivering exceptional results. Creates an environment where others shine by stepping back to elevate their contributions and successes. Shows remarkable self-awareness by openly acknowledging own limitations and actively seeking feedback for growth.',
    },
  },
];

// ============ GOALS DATA ============
const GOAL_STATUS_CONFIG = {
  'not_started': { label: 'Not Started', color: '#94A3B8', bg: '#F8FAFC', border: '#E2E8F0' },
  'in_progress':  { label: 'In Progress', color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE' },
  'on_track':     { label: 'On Track',    color: 'var(--green)', bg: '#F0FDF4', border: '#BBF7D0' },
  'at_risk':      { label: 'At Risk',     color: '#EA580C', bg: '#FFF7ED', border: '#FED7AA' },
  'completed':    { label: 'Completed',   color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
};

const DESIGN_TEAM_GOALS = [
  {
    id: 'dtg_1',
    goal: 'Grow hospitality revenue by 25%',
    kpi: 'Each team member will connect with three merchants per quarter, to gain industry knowledge and product understanding, then document their findings in a centralized database.',
    timeFrame: 'Quarterly',
    evidenceSources: ['outreach'],
    evidenceSkills: [],
  },
  {
    id: 'dtg_2',
    goal: 'Grow revenue retention to 95%',
    kpi: 'Domain teams will define quarterly executive summaries of friction points, supported by quantitative data and projected success metrics, then track the implemented improvements.',
    timeFrame: 'Quarterly',
    evidenceSources: ['skills'],
    evidenceSkills: ['job_skills_1','job_skills_2','job_skills_4','job_skills_6','job_skills_7','job_skills_15'],
  },
  {
    id: 'dtg_3',
    goal: 'Achieve product market fit with high value express merchants',
    kpi: 'Design teams will co-create and maintain ecosystem-wide personas to support our human-centered knowledge of who we are building for.',
    timeFrame: 'Bi-Annually',
    evidenceSources: ['outreach', 'skills'],
    evidenceSkills: ['job_skills_1','job_skills_2','job_skills_4','job_skills_9','influence_5','influence_9'],
  },
];


const CV_RATING_CONFIG = {
  1: { label: 'Unsatisfactory',      short: 'Unsatisfactory',      color: 'var(--red)',   bg: '#FEF2F2', border: '#FECACA' },
  2: { label: 'Needs Development',   short: 'Needs Development',   color: '#EA580C', bg: '#FFF7ED', border: '#FED7AA' },
  3: { label: 'Meets Expectations',  short: 'Meets Expectations',  color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE' },
  4: { label: 'Exceeds Expectations',short: 'Exceeds Expectations',color: 'var(--green)', bg: '#F0FDF4', border: '#BBF7D0' },
  5: { label: 'Truly Outstanding',   short: 'Truly Outstanding',   color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
};

const RESOURCE_TYPES = {
  article: { icon: '📄', label: 'Article', tagColor: '#1D4ED8', tagBg: '#DBEAFE' },
  video:   { icon: '▶️', label: 'Video',   tagColor: 'var(--red)',   tagBg: '#FEE2E2' },
  course:  { icon: '🎓', label: 'Course',  tagColor: 'var(--green)', tagBg: '#D1FAE5' },
  book:    { icon: '📚', label: 'Book',    tagColor: '#7C3AED', tagBg: '#EDE9FE' },
  tool:    { icon: '🔧', label: 'Tool',    tagColor: '#D97706', tagBg: '#FEF3C7' },
};

// Pre-curated resources per skill ID
const CURATED_RESOURCES = {
  job_skills_1: [
    { id: 'c1', title: "10 Usability Heuristics for UI Design", type: "article", url: "https://www.nngroup.com/articles/ten-usability-heuristics/", desc: "The foundational NN/g reference for heuristic evaluation" },
    { id: 'c2', title: "Don't Make Me Think, Revisited", type: "book", url: "", desc: "Steve Krug's essential guide to web usability" },
    { id: 'c3', title: "Jobs To Be Done Framework", type: "article", url: "https://hbr.org/2016/09/know-your-customers-jobs-to-be-done", desc: "HBR overview of the JTBD framework" },
    { id: 'c4', title: "The Secrets of HCD — IDEO's Human-Centered Design Explained", type: "video", url: "https://www.youtube.com/watch?v=musmgKEPY2o", desc: "IDEO's introduction to human-centered design thinking" },
  ],
  job_skills_2: [
    { id: 'c1', title: "Just Enough Research", type: "book", url: "", desc: "Erika Hall's practical guide to research methods" },
    { id: 'c2', title: "When to Use Which UX Research Methods", type: "article", url: "https://www.nngroup.com/articles/which-ux-research-methods/", desc: "NN/g guide to selecting the right method" },
    { id: 'c3', title: "UX Research Cheat Sheet", type: "article", url: "https://www.nngroup.com/articles/ux-research-cheat-sheet/", desc: "Quick reference for 20+ research methods" },
    { id: 'c4', title: "How to Run User Research with No Time, No Money, and No Clue", type: "video", url: "https://www.youtube.com/watch?v=_ZBKX-6Gz6A", desc: "Practical lean research techniques from UX practitioners" },
  ],
  job_skills_3: [
    { id: 'c1', title: "How to Write a Discussion Guide", type: "article", url: "https://www.nngroup.com/articles/discussion-guide/", desc: "Step-by-step guide to writing effective discussion guides" },
    { id: 'c2', title: "Avoiding Leading Questions in User Research", type: "article", url: "https://www.nngroup.com/articles/leading-questions/", desc: "How to write objective, unbiased interview questions" },
    { id: 'c3', title: "User Interview Techniques — NN/g Video", type: "video", url: "https://www.youtube.com/watch?v=Qq3OiHQ-HCU", desc: "NN/g walkthrough of structuring and writing interview guides" },
  ],
  job_skills_4: [
    { id: 'c1', title: "Moderating Usability Studies", type: "article", url: "https://www.nngroup.com/articles/moderation-usability-studies/", desc: "NN/g guide to effective facilitation" },
    { id: 'c2', title: "User Interviews: How, When and Why to Conduct Them", type: "article", url: "https://www.nngroup.com/articles/user-interviews/", desc: "Complete guide to running user interviews" },
    { id: 'c3', title: "How to Conduct User Interviews (Full Session)", type: "video", url: "https://www.youtube.com/watch?v=5tVbFfGDQCk", desc: "Live demo of a user interview with facilitation commentary" },
  ],
  job_skills_7: [
    { id: 'c1', title: "Affinity Diagramming for Collaborative Synthesis", type: "article", url: "https://www.nngroup.com/articles/affinity-diagram/", desc: "How to synthesize qualitative research using affinity maps" },
    { id: 'c2', title: "How to Synthesize UX Research Findings", type: "video", url: "https://www.youtube.com/watch?v=uuQsHbFBXpM", desc: "Step-by-step walkthrough of turning raw data into insights" },
  ],
  job_skills_8: [
    { id: 'c1', title: "Design Sprint (Google Ventures)", type: "book", url: "https://www.thesprintbook.com/", desc: "The definitive guide to the 5-day design sprint" },
    { id: 'c2', title: "MURAL Facilitation Superpowers Guide", type: "tool", url: "https://www.mural.co/blog/facilitation-guide", desc: "Remote facilitation techniques and best practices" },
    { id: 'c3', title: "How to Run a Design Sprint", type: "video", url: "https://www.youtube.com/watch?v=K2vSQPh6MCE", desc: "Google Ventures walkthrough of the design sprint process" },
  ],
  job_skills_10: [
    { id: 'c1', title: "Creating Good Design Principles", type: "article", url: "https://www.nngroup.com/articles/design-principles/", desc: "How to write actionable, memorable design principles" },
    { id: 'c2', title: "What Makes a Great Design Principle?", type: "video", url: "https://www.youtube.com/watch?v=Ds5WF5YMBHM", desc: "Workshop talk on crafting principles that actually guide decisions" },
  ],
  job_skills_11: [
    { id: 'c1', title: "Journey Mapping 101", type: "article", url: "https://www.nngroup.com/articles/journey-mapping-101/", desc: "NN/g comprehensive guide to customer journey maps" },
    { id: 'c2', title: "Personas Make Users Memorable", type: "article", url: "https://www.nngroup.com/articles/persona/", desc: "Evidence-based approach to persona development" },
    { id: 'c3', title: "How to Create a Customer Journey Map", type: "video", url: "https://www.youtube.com/watch?v=mSxpVRo3BLg", desc: "NN/g video guide to building journey maps from research" },
  ],
  job_skills_13: [
    { id: 'c1', title: "Service Design: From Insight to Implementation", type: "book", url: "", desc: "Andy Polaine, Lavrans Løvlie & Ben Reason" },
    { id: 'c2', title: "Introduction to Service Design", type: "video", url: "https://www.youtube.com/watch?v=0CLZX3mMIxs", desc: "Overview of service design concepts and tools" },
  ],
  job_skills_17: [
    { id: 'c1', title: "Refactoring UI", type: "book", url: "https://www.refactoringui.com/", desc: "Adam Wathan & Steve Schoger — practical visual design for developers/designers" },
    { id: 'c2', title: "Laws of UX", type: "article", url: "https://lawsofux.com/", desc: "Key principles of UX design backed by psychology" },
    { id: 'c3', title: "Figma UI Design Tutorial — Full Course", type: "video", url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8", desc: "Comprehensive Figma walkthrough for UI design" },
    { id: 'c4', title: "The Gestalt Principles of Design", type: "video", url: "https://www.youtube.com/watch?v=ZK86XQ1sFlo", desc: "Visual explainer of Gestalt principles applied to UI" },
  ],
  job_skills_19: [
    { id: 'c1', title: "WCAG 2.1 Guidelines Overview", type: "article", url: "https://www.w3.org/WAI/WCAG21/quickref/", desc: "Official W3C accessibility reference" },
    { id: 'c2', title: "Stark Accessibility Plugin (Figma)", type: "tool", url: "https://www.figma.com/community/plugin/732603254453395948/stark", desc: "Check contrast and accessibility directly in Figma" },
    { id: 'c3', title: "Designing for Accessibility — Google I/O", type: "video", url: "https://www.youtube.com/watch?v=cOmehxAU_4s", desc: "Practical accessibility techniques from Google designers" },
  ],
  job_skills_20: [
    { id: 'c1', title: "Design Systems by Alla Kholmatova", type: "book", url: "", desc: "Comprehensive guide to building and maintaining design systems" },
    { id: 'c2', title: "Brad Frost's Atomic Design", type: "article", url: "https://bradfrost.com/blog/post/atomic-web-design/", desc: "The foundational methodology for component-based design" },
    { id: 'c3', title: "Building a Design System from Scratch", type: "video", url: "https://www.youtube.com/watch?v=dnEMuAX3BGk", desc: "End-to-end walkthrough of creating a scalable design system" },
  ],
  job_skills_24: [
    { id: 'c1', title: "AI for Designers — How to Use AI Tools in Your Workflow", type: "article", url: "https://www.nngroup.com/articles/ai-design-tools/", desc: "NN/g guide to incorporating AI into design practice" },
    { id: 'c2', title: "Figma AI Features Overview", type: "tool", url: "https://www.figma.com/ai/", desc: "AI-powered features in Figma" },
    { id: 'c3', title: "AI & the Future of UX Design", type: "video", url: "https://www.youtube.com/watch?v=3kHgHQMYXeY", desc: "How AI is reshaping design workflows and roles" },
  ],
  project_management_1: [
    { id: 'c1', title: "The Scrum Guide", type: "article", url: "https://scrumguides.org/", desc: "Free official guide to the Scrum framework" },
    { id: 'c2', title: "Agile for Designers", type: "article", url: "https://www.nngroup.com/articles/agile-design/", desc: "How UX fits into Agile delivery" },
    { id: 'c3', title: "Agile Product Ownership in a Nutshell", type: "video", url: "https://www.youtube.com/watch?v=502ILHjX9EE", desc: "Crisp, visual explainer of Agile and Scrum roles" },
  ],
  project_management_2: [
    { id: 'c1', title: "How to Prioritize Features Using the RICE Framework", type: "article", url: "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/", desc: "Scoring model for prioritizing work by impact and effort" },
    { id: 'c2', title: "Prioritization Methods for UX", type: "video", url: "https://www.youtube.com/watch?v=J0bN5jLKhAg", desc: "Overview of common prioritization frameworks for design teams" },
  ],
  collaboration_2: [
    { id: 'c1', title: "Discussing Design — Improving Communication and Collaboration Through Critique", type: "book", url: "", desc: "Adam Connor & Aaron Irizarry — the definitive guide to design critique" },
    { id: 'c2', title: "Radical Candor", type: "book", url: "https://www.radicalcandor.com/", desc: "Kim Scott's framework for honest, caring feedback" },
    { id: 'c3', title: "How to Give and Receive Design Feedback", type: "video", url: "https://www.youtube.com/watch?v=bFOXEpjp4OM", desc: "Practical guide to running effective design critiques" },
  ],
  collaboration_4: [
    { id: 'c1', title: "Crucial Conversations", type: "book", url: "", desc: "Tools for talking when stakes are high" },
    { id: 'c2', title: "How to Have Difficult Conversations", type: "video", url: "https://www.youtube.com/watch?v=q7iRBB4LgaM", desc: "TED-style talk on navigating hard conversations at work" },
  ],
  collaboration_6: [
    { id: 'c1', title: "Cross-Functional Collaboration in Product Teams", type: "video", url: "https://www.youtube.com/watch?v=ckHMREMtBzU", desc: "How designers, PMs and engineers collaborate effectively" },
  ],
  influence_1: [
    { id: 'c1', title: "Presenting Design Work — How to Get Buy-In", type: "article", url: "https://www.smashingmagazine.com/2020/11/presenting-design-getting-buy-in/", desc: "Strategies for presenting design to stakeholders" },
    { id: 'c2', title: "Storytelling in Design", type: "article", url: "https://uxdesign.cc/storytelling-in-ux-design-8e50e8a6efa8", desc: "How to use narrative to present design decisions" },
    { id: 'c3', title: "How to Present UX Work to Stakeholders", type: "video", url: "https://www.youtube.com/watch?v=7MCSfGp2bPE", desc: "Techniques for framing and presenting design decisions persuasively" },
  ],
  influence_5: [
    { id: 'c1', title: "SpotOn Values Deep-Dive", type: "article", url: "", desc: "Internal reference for SpotOn's four core values" },
  ],
  influence_6: [
    { id: 'c1', title: "Org Design for Design Orgs", type: "book", url: "", desc: "Peter Merholz & Kristin Skinner — how design teams are structured and led" },
    { id: 'c2', title: "Creative Confidence", type: "book", url: "", desc: "Tom & David Kelley — unleashing the creative potential in people" },
    { id: 'c3', title: "How to Build a Design Culture", type: "video", url: "https://www.youtube.com/watch?v=3oFVy0hGkos", desc: "IDEO talk on fostering design thinking across an organization" },
  ],
  influence_8: [
    { id: 'c1', title: "How to Develop a Design Philosophy", type: "article", url: "https://uxdesign.cc/developing-a-design-philosophy-b0ff27f73c01", desc: "Framework for articulating your design point of view" },
    { id: 'c2', title: "Finding Your Design Voice — Conference Talk", type: "video", url: "https://www.youtube.com/watch?v=9uOMectkCCs", desc: "How senior designers develop and communicate a distinct POV" },
  ],
  influence_9: [
    { id: 'c1', title: "Advocating for Users: How Designers Can Make Their Voice Heard", type: "article", url: "https://www.nngroup.com/articles/user-advocacy/", desc: "Strategies for championing user needs within organizations" },
    { id: 'c2', title: "Design Leadership and Influence", type: "video", url: "https://www.youtube.com/watch?v=mOzFAqJRRkY", desc: "How to grow your influence as a designer without a management title" },
  ],
};

// ============ SKILL KEYWORDS (for note-to-skill matching) ============
const SKILL_KEYWORDS = {
  job_skills_1:  ['human-centered', 'heuristic', 'usability', 'user needs', 'ux principles', 'design thinking', 'problem statement', 'jtbd', 'jobs to be done', 'user advocacy'],
  job_skills_2:  ['user research', 'research methods', 'discovery', 'research plan', 'usability testing', 'ran a study', 'research approach', 'user study'],
  job_skills_3:  ['discussion guide', 'interview guide', 'research script', 'moderator guide', 'screener', 'discussion questions'],
  job_skills_4:  ['user interview', 'facilitated a session', 'moderated', 'usability session', 'ran a study', 'led a session', 'conducted research'],
  job_skills_5:  ['recruiting', 'recruit participants', 'research recruiting', 'screener'],
  job_skills_6:  ['quantitative', 'data analysis', 'metrics', 'analytics', 'sql', 'statistics', 'data-driven', 'funnel'],
  job_skills_7:  ['synthesis', 'affinity', 'research findings', 'themes', 'synthesized', 'research synthesis', 'insight themes'],
  job_skills_8:  ['workshop', 'design sprint', 'facilitated', 'facilitating', 'session planning', 'design review', 'critique session', 'led a review', 'ran a review', 'ran a workshop', 'led a workshop', 'led a design review'],
  job_skills_9:  ['success metric', 'kpi', 'measure success', 'design metrics', 'north star', 'outcome metric'],
  job_skills_10: ['design principles', 'design philosophy', 'design vision', 'guiding principles'],
  job_skills_11: ['journey map', 'persona', 'service blueprint', 'customer journey', 'experience map', 'user flow map'],
  job_skills_12: ['wireframe', 'prototype', 'sketching', 'lo-fi', 'low-fidelity', 'mockup', 'rapid prototype'],
  job_skills_13: ['service design', 'end-to-end', 'cross-channel', 'service ecosystem'],
  job_skills_14: ['interaction design', 'motion design', 'micro-interaction', 'animation', 'transition'],
  job_skills_15: ['information architecture', 'navigation design', 'sitemap', 'content structure', 'ia'],
  job_skills_16: ['content design', 'ux writing', 'microcopy', 'wrote copy', 'writing content'],
  job_skills_17: ['visual design', 'ui design', 'typography', 'color', 'layout', 'figma', 'composition', 'visual hierarchy'],
  job_skills_18: ['handoff', 'developer handoff', 'redline', 'specs', 'implementation support', 'working with engineers'],
  job_skills_19: ['accessibility', 'wcag', 'a11y', 'inclusive design', 'screen reader', 'accessible'],
  job_skills_20: ['design system', 'component library', 'tokens', 'pattern library', 'atomic design'],
  job_skills_21: ['product strategy', 'roadmap vision', 'strategic design', 'design strategy'],
  job_skills_22: ['portfolio', 'case study', 'storytelling', 'presenting work', 'design narrative'],
  job_skills_23: ['self-management', 'time management', 'organization', 'prioritized my work', 'managed my time'],
  job_skills_24: ['ai', 'artificial intelligence', 'machine learning', 'automation', 'ai tool', 'ai-assisted', 'chatgpt', 'copilot'],
  project_management_1: ['agile', 'scrum', 'sprint planning', 'backlog', 'jira', 'story points'],
  project_management_2: ['prioritization', 'prioritized', 'rice framework', 'roadmap planning', 'backlog grooming'],
  project_management_3: ['project plan', 'timeline', 'scope', 'manage project', 'project management', 'project tracking'],
  project_management_4: ['deadline', 'on time', 'shipped', 'delivered on time', 'launched', 'delivery'],
  project_management_5: ['tradeoff', 'trade-off', 'constraint', 'balance scope', 'scope creep'],
  collaboration_1:  ['stakeholder', 'aligned', 'alignment', 'buy-in', 'got buy-in', 'partnered with'],
  collaboration_2:  ['feedback', 'critique', 'design review', 'crit', 'design crit', 'review session', 'gave feedback', 'received feedback', 'design feedback', 'led a review', 'best review'],
  collaboration_3:  ['cross-functional', 'team collaboration', 'working with the team', 'collaborated'],
  collaboration_4:  ['difficult conversation', 'conflict', 'disagreement', 'pushback', 'tension'],
  collaboration_5:  ['facilitated', 'facilitating', 'ran a workshop', 'led a workshop', 'ideation session'],
  collaboration_6:  ['worked with engineering', 'worked with product', 'product manager', 'pm feedback', 'partnered with pm', 'engineer', 'cross-functional team'],
  collaboration_7:  ['decision', 'decision-making', 'consensus', 'aligned the team', 'drove a decision'],
  collaboration_8:  ['mentored', 'coaching', 'growing', 'develop someone', 'supported a designer', 'junior designer'],
  collaboration_9:  ['documented', 'documentation', 'wrote up', 'process doc', 'design brief'],
  collaboration_10: ['helped the team', 'supported', 'team player', 'contributed to'],
  influence_1:  ['presented', 'presentation', 'present my work', 'stakeholder presentation', 'design review', 'pitched', 'demo', 'showed my work', 'got feedback from', 'got positive feedback', 'positive feedback', 'best one'],
  influence_2:  ['org-wide', 'design culture', 'influence', 'built credibility', 'design maturity'],
  influence_3:  ['business impact', 'data-informed', 'roi', 'business case', 'metrics-driven', 'impact'],
  influence_4:  ['brand', 'design language', 'creative direction', 'visual identity'],
  influence_5:  ['spoton values', 'company values', 'core values'],
  influence_6:  ['leadership', 'led the team', 'mentoring', 'managing designers', 'growing others', 'developing the team'],
  influence_7:  ['conference', 'thought leadership', 'speaking', 'industry event', 'community'],
  influence_8:  ['design philosophy', 'point of view', 'pov', 'design voice', 'design opinion'],
  influence_9:  ['user advocate', 'advocate for users', 'champion user needs', 'user voice', 'defended user'],
};

function matchNoteToSkills(text) {
  const lower = text.toLowerCase();
  const results = [];
  for (const skill of SKILLS_DATA.skills) {
    const keywords = SKILL_KEYWORDS[skill.id] || [];
    const matched = [];
    for (const kw of keywords) {
      if (lower.includes(kw.toLowerCase())) matched.push(kw);
    }
    if (matched.length > 0) {
      const score = matched.reduce((s, kw) => s + Math.min(kw.split(' ').length, 3), 0);
      results.push({ skillId: skill.id, skillName: skill.name, category: skill.category, matched, score });
    }
  }
  return results.sort((a, b) => b.score - a.score).slice(0, 8);
}

// ============ ROLES DATA ============
// Expected levels per role per skill (null = not applicable for this role)
const L='Learner',C='Contributor',I='Independent',E='Expert',N=null;

// Helper to build a role skills map from ordered arrays
function _r(track, ids, vals) {
  const skills = {};
  ids.forEach((id,i) => { if (id) skills[id] = vals[i] === undefined ? null : vals[i]; });
  return { track, skills };
}

// All 48 skill IDs in order
const _JS = ['job_skills_1','job_skills_2','job_skills_3','job_skills_4','job_skills_5','job_skills_6','job_skills_7','job_skills_8','job_skills_9','job_skills_10','job_skills_11','job_skills_12','job_skills_13','job_skills_14','job_skills_15','job_skills_16','job_skills_17','job_skills_18','job_skills_19','job_skills_20','job_skills_21','job_skills_22','job_skills_23','job_skills_24'];
const _PM = ['project_management_1','project_management_2','project_management_3','project_management_4','project_management_5'];
const _CO = ['collaboration_1','collaboration_2','collaboration_3','collaboration_4','collaboration_5','collaboration_6','collaboration_7','collaboration_8','collaboration_9','collaboration_10'];
const _IN = ['influence_1','influence_2','influence_3','influence_4','influence_5','influence_6','influence_7','influence_8','influence_9'];

function _role(track, js, pm, co, inf) {
  const skills = {};
  _JS.forEach((id,i) => { skills[id] = js[i] !== undefined ? js[i] : null; });
  _PM.forEach((id,i) => { skills[id] = pm[i] !== undefined ? pm[i] : null; });
  _CO.forEach((id,i) => { skills[id] = co[i] !== undefined ? co[i] : null; });
  _IN.forEach((id,i) => { skills[id] = inf[i] !== undefined ? inf[i] : null; });
  return { track, skills };
}

const ROLES_DATA = {
  // ── PRODUCT DESIGN ──────────────────────────────────────────────────────────
  'Associate Product Designer': _role('Product Design',
    [C,L,L,L,C,L,L,L,L,L,L,L,L,L,L,C,C,L,C,C,C,C,C,L],
    [C,N,N,L,L],
    [N,L,L,I,C,L,L,L,L,C],
    [L,C,L,C,L,N,N,L,I]
  ),
  'Product Designer': _role('Product Design',
    [I,C,C,L,I,L,C,L,L,C,C,C,C,L,C,I,I,C,I,C,I,I,I,L],
    [I,L,L,I,C],
    [N,C,L,I,I,C,L,C,C,I],
    [C,C,C,C,I,L,L,C,I]
  ),
  'Senior Product Designer': _role('Product Design',
    [E,C,I,C,E,C,I,C,C,I,I,I,I,C,C,I,I,I,I,I,E,I,E,C],
    [I,C,C,E,C],
    [C,I,C,E,E,I,C,I,I,I],
    [I,I,C,C,I,C,L,I,E]
  ),
  'Principal Product Designer': _role('Product Design',
    [E,C,I,C,E,C,I,E,E,E,E,E,E,C,I,E,E,E,E,E,E,E,E,C],
    [E,I,I,E,C],
    [I,E,I,E,E,E,C,I,I,E],
    [E,E,E,C,I,C,C,E,E]
  ),
  'Product Design Manager': _role('Product Design',
    [E,I,I,I,E,C,I,I,I,E,E,E,E,I,I,E,E,E,E,E,E,E,E,C],
    [E,I,I,E,I],
    [I,E,I,E,E,I,C,I,E,E],
    [E,I,I,C,E,I,I,I,E]
  ),
  'Director of Product Design': _role('Product Design',
    [E,I,I,I,E,I,E,E,E,E,E,E,E,E,I,E,E,E,E,E,E,E,E,C],
    [E,E,E,E,I],
    [E,E,E,E,E,E,I,E,E,E],
    [E,I,E,C,E,I,I,E,E]
  ),
  'Senior Director of Product Design': _role('Product Design',
    [E,I,I,I,E,I,E,E,E,E,E,E,E,E,I,E,E,N,E,E,E,E,E,C],
    [E,E,E,E,E],
    [E,E,E,E,E,E,E,E,E,E],
    [E,E,E,C,E,E,E,E,E]
  ),
  'VP of Product Design': _role('Product Design',
    [E,E,I,I,E,I,E,E,E,E,E,E,E,E,I,E,E,N,E,E,E,E,E,I],
    [E,E,E,E,E],
    [E,E,E,E,E,E,E,E,E,E],
    [E,E,E,C,E,E,E,E,E]
  ),

  // ── DESIGN STRATEGY ─────────────────────────────────────────────────────────
  'Associate Design Strategist': _role('Design Strategy',
    [C,L,L,L,C,C,L,L,L,L,L,L,L,L,C,N,N,N,N,N,N,N,N,L],
    [C,N,N,L,L],
    [N,L,L,I,C,L,L,L,L,C],
    [L,C,L,C,L,N,N,L,I]
  ),
  'Design Strategist': _role('Design Strategy',
    [C,C,C,L,I,I,C,L,L,C,C,C,C,L,I,N,N,N,N,N,N,N,N,L],
    [I,L,L,I,C],
    [N,C,L,I,I,C,C,C,C,I],
    [C,C,C,C,I,L,L,C,I]
  ),
  'Senior Design Strategist': _role('Design Strategy',
    [C,C,I,C,E,E,I,C,C,I,I,I,I,C,E,N,N,N,N,N,N,N,N,L],
    [I,C,C,E,C],
    [C,I,C,E,E,I,I,I,I,I],
    [I,I,I,C,I,C,C,I,E]
  ),
  'Principal Design Strategist': _role('Design Strategy',
    [I,C,I,C,E,E,I,I,I,E,E,E,E,C,E,N,N,N,N,N,N,N,N,C],
    [E,I,I,E,C],
    [I,E,I,E,E,E,E,I,I,E],
    [E,E,E,C,I,I,I,E,E]
  ),

  // ── UX RESEARCH ─────────────────────────────────────────────────────────────
  'Associate UX Researcher': _role('UX Research',
    [C,C,C,C,C,C,C,L,L,L,L,N,L,L,L,N,N,N,N,N,N,N,C,L],
    [C,N,N,L,L],
    [N,L,L,I,C,L,L,L,L,C],
    [L,C,L,C,L,N,N,L,I]
  ),
  'UX Researcher': _role('UX Research',
    [I,I,I,I,I,I,I,L,L,C,C,N,C,L,C,N,N,N,N,N,N,N,I,L],
    [I,L,L,I,C],
    [N,C,L,I,I,C,L,C,C,I],
    [C,C,C,C,I,L,L,C,I]
  ),
  'Senior UX Researcher': _role('UX Research',
    [E,E,E,E,E,I,E,C,C,C,I,N,I,C,C,N,N,N,N,N,N,N,E,L],
    [I,C,C,E,C],
    [C,I,C,E,E,I,C,I,I,I],
    [I,I,C,C,I,C,L,I,E]
  ),
  'Principal UX Researcher': _role('UX Research',
    [E,E,E,E,E,E,E,I,I,C,E,N,E,C,I,N,N,N,N,N,N,N,E,C],
    [E,I,I,E,C],
    [I,E,I,E,E,I,C,I,I,E],
    [E,E,E,C,I,C,C,E,E]
  ),
  'UX Research Manager': _role('UX Research',
    [E,E,E,E,E,E,E,I,I,E,E,N,E,I,I,N,N,N,N,N,N,N,E,C],
    [E,I,I,E,I],
    [I,E,I,E,E,I,C,I,E,E],
    [E,I,I,C,E,I,I,I,E]
  ),
  'Director of UX Research': _role('UX Research',
    [E,E,E,E,E,E,E,E,E,E,E,N,E,I,I,N,N,N,N,N,N,N,E,C],
    [E,E,E,E,I],
    [E,E,E,E,E,E,I,E,E,E],
    [E,I,E,C,E,I,I,E,E]
  ),
  'Senior Director of UX Research': _role('UX Research',
    [E,E,E,E,E,E,E,E,E,E,E,N,E,E,I,N,N,N,N,N,N,N,E,C],
    [E,E,E,E,E],
    [E,E,E,E,E,E,E,E,E,E],
    [E,E,E,C,E,E,E,E,E]
  ),

  // ── CONTENT STRATEGY ────────────────────────────────────────────────────────
  'Associate Content Strategist': _role('Content Strategy',
    [C,L,L,L,C,C,L,L,L,N,L,N,L,N,C,L,N,N,C,N,N,C,C,L],
    [C,N,N,L,L],
    [N,L,L,I,C,L,L,L,L,C],
    [L,C,L,C,L,N,N,L,I]
  ),
  'Content Strategist': _role('Content Strategy',
    [C,C,C,L,I,I,C,L,L,N,C,N,C,N,I,C,N,N,I,N,N,I,I,L],
    [I,L,L,I,C],
    [N,C,L,I,I,C,L,C,C,I],
    [C,C,C,C,I,L,L,C,I]
  ),
  'Senior Content Strategist': _role('Content Strategy',
    [C,C,I,C,E,E,I,C,C,N,I,N,I,N,E,I,N,N,I,N,N,I,E,L],
    [I,C,C,E,C],
    [C,I,C,E,E,I,C,I,I,I],
    [I,I,I,C,I,C,L,I,E]
  ),
  'Principal Content Strategist': _role('Content Strategy',
    [I,C,I,C,E,E,I,I,I,N,E,N,E,N,E,E,N,N,E,N,N,E,E,C],
    [E,I,I,E,C],
    [I,E,I,E,E,I,C,I,I,E],
    [E,E,E,C,I,C,C,E,E]
  ),
  'Content Strategy Manager': _role('Content Strategy',
    [E,I,I,I,E,E,I,I,I,N,E,N,E,N,E,E,N,N,E,N,N,E,E,C],
    [N,N,N,N,N],
    [I,E,I,E,E,I,C,I,E,E],
    [E,I,I,C,E,I,I,I,E]
  ),
  'Director of Content Strategy': _role('Content Strategy',
    [E,I,I,I,E,E,E,E,E,N,E,N,E,N,E,E,N,N,E,N,N,E,E,C],
    [N,N,N,N,N],
    [E,E,E,E,E,E,I,E,E,E],
    [E,I,E,C,E,I,I,E,E]
  ),
  'Senior Director of Content Strategy': _role('Content Strategy',
    [E,I,I,I,E,E,E,E,E,N,E,N,E,N,E,E,N,N,E,N,N,E,E,C],
    [N,N,N,N,N],
    [E,E,E,E,E,E,E,E,E,E],
    [E,E,E,C,E,E,E,E,E]
  ),
};

const ROLE_TRACKS = {
  'Product Design': ['Associate Product Designer','Product Designer','Senior Product Designer','Principal Product Designer','Product Design Manager','Director of Product Design','Senior Director of Product Design','VP of Product Design'],
  'Design Strategy': ['Associate Design Strategist','Design Strategist','Senior Design Strategist','Principal Design Strategist'],
  'UX Research': ['Associate UX Researcher','UX Researcher','Senior UX Researcher','Principal UX Researcher','UX Research Manager','Director of UX Research','Senior Director of UX Research'],
  'Content Strategy': ['Associate Content Strategist','Content Strategist','Senior Content Strategist','Principal Content Strategist','Content Strategy Manager','Director of Content Strategy','Senior Director of Content Strategy'],
};

// ============ EOY REVIEW DATA ============
const EOY_RATING_CONFIG = {
  1: { label: 'Does Not Meet',       short: 'Does Not Meet',  color: 'var(--red)',   bg: '#FEF2F2', border: '#FECACA' },
  2: { label: 'Partially Meets',     short: 'Partially Meets',color: '#EA580C', bg: '#FFF7ED', border: '#FED7AA' },
  3: { label: 'Meets Expectations',  short: 'Meets',          color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE' },
  4: { label: 'Exceeds Expectations',short: 'Exceeds',        color: 'var(--green)', bg: '#F0FDF4', border: '#BBF7D0' },
  5: { label: 'Truly Outstanding',   short: 'Outstanding',    color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
};

const EOY_CATEGORY_GROUPS = [
  {
    label: 'Performance',
    categories: [
      { id: 'technical',      label: 'Technical Expertise',        desc: 'Specialized knowledge and skills required to perform your job.' },
      { id: 'quality',        label: 'Quality of Work Products',   desc: 'Work products that meet expectations, are generally free of errors, and display department-specific expertise.' },
      { id: 'accountability', label: 'Accountability for Results', desc: 'Intrinsic drive to achieve expected outcomes independently, applying feedback, iterating, and improving.' },
    ],
  },
  {
    label: 'Core Values',
    categories: [
      { id: 'we_lead',    label: 'WE LEAD',    desc: 'Demonstrate ownership, follow through, and integrity in your work.' },
      { id: 'we_deliver', label: 'WE DELIVER', desc: 'Execute and deliver results effectively.' },
      { id: 'we_learn',   label: 'WE LEARN',   desc: 'Embrace continuous learning, adaptability, and innovation.' },
      { id: 'we_care',    label: 'WE CARE',    desc: 'Demonstrate care and teamwork in interactions.' },
    ],
  },
  {
    label: 'People Leadership',
    categories: [
      { id: 'engagement',        label: 'Team Engagement',    desc: 'Promote cultures of psychological safety and recognition.' },
      { id: 'team_performance',  label: 'Team Performance',   desc: 'Delegate to teams, achieve expected productivity, and maintain awareness of team health.' },
      { id: 'feedback_coaching', label: 'Feedback & Coaching',desc: 'Provide regular feedback and support employee success and potential.' },
    ],
  },
];

// Keyed by lowercase first name of the profile. 'adam' holds real data; others are mock.
const EOY_REVIEWS = {
  'adam': {
    year: '2025',
    self: {
      ratings: { technical:3, quality:3, accountability:4, we_lead:4, we_deliver:4, we_learn:3, we_care:5, engagement:5, team_performance:4, feedback_coaching:4 },
      accomplishments: [
        { headline: 'Delivered high-impact launches quickly and set a new bar for speed + partnership', bullets: [
          'Launched Profit Partner in record-breaking time, establishing a new internal standard for fast, high-quality design delivery and tight cross-functional collaboration.',
          'Launched Rapid Fund by stepping in during a designer transition and driving the work to completion.',
          'PM publicly recognized: "spearheaded the beautiful designs," navigated tight timelines with creativity and focus, stayed open to healthy debate, and never lost sight of customer experience.',
        ]},
        { headline: 'Created scalable frameworks that increased clarity, velocity, and team leverage', bullets: [
          'Built a tiered design scope involvement framework to define level of design effort upfront.',
          'Leadership feedback was extremely positive; the framework is now actively used to ship roadmap items without dedicated Design resourcing.',
          'Enabled quick approvals (e.g. Reprint Order Chits) while maintaining quality standards.',
          'TeamWork reskin: framework helped right-size effort — Engineering ran with it while Design signed off, saving weeks of design effort.',
        ]},
        { headline: 'Recognized for exceptional customer-first leadership', bullets: [
          'Received the Customer Centric Award at the offsite — recognized across the full group for consistently putting users first.',
          'Continued to anchor design choices and team conversations around real customer outcomes, even under timeline pressure.',
        ]},
        { headline: 'Demonstrated standout people leadership, especially during high churn', bullets: [
          'Multiple designers unprompted called out strong people management, genuine investment in their growth, and maintaining momentum during a period of high churn.',
          'Described as a "calm in the storm" leader who provides clarity, stability, and forward motion while protecting psychological safety.',
        ]},
        { headline: 'Raised the quality bar for team direction, goals, and facilitation', bullets: [
          'Produced the strongest, most well-phrased goals across all of DLT — recognized for speed and clarity.',
          'Ran a high-impact OOUX session with Jordan and the team; PM specifically called it out as excellent.',
        ]},
        { headline: 'Led effectively outside immediate domain', bullets: [
          'Led and supported work beyond direct expertise, including Content Strategy, without losing velocity or quality.',
          'Provided structure and clarity while empowering domain experts to execute.',
        ]},
      ],
      improvements: [
        { headline: 'Deepen interaction design + accessibility mastery', bullets: [
          'Finish accessibility training and apply it more systematically in workflows.',
          'Introduce lightweight accessibility checkpoints earlier in design; share patterns/guidance so inclusive decisions scale beyond individual projects.',
        ]},
        { headline: 'Increase speed of delivery', bullets: [
          'Keep pushing ways to shorten cycles and reduce friction so the org ships faster.',
          'Expand reuse of proven patterns, tighten decision loops, and extend the tier framework to other areas of Product Design (e.g. Research).',
        ]},
        { headline: 'Leverage AI to boost productivity and rethink how we work', bullets: [
          'Continue exploring AI-assisted workflows for design, research, and planning.',
          'Pilot repeatable AI use cases (synthesis, early IA/OOUX drafts, spec/handoff acceleration) and document learnings for the broader design team.',
        ]},
        { headline: 'Strengthen data self-service + feedback signal loops', bullets: [
          'Build a more reliable way to access simple product health views and customer signals.',
          'Partner with Analytics on dashboards tied to key journeys; deepen relationships with Support/Sales to create a consistent qualitative feedback loop.',
        ]},
      ],
    },
    manager: {
      name: 'Nicole',
      ratings: { technical:3, quality:3, accountability:4, we_lead:4, we_deliver:3, we_learn:3, we_care:5, engagement:5, team_performance:3, feedback_coaching:3 },
      accomplishments: [
        { headline: 'Built an exceptionally supportive, psychologically safe team environment', bullets: [
          'Repeatedly described as one of the best managers teammates have worked with.',
          'Creates a collaborative, inclusive environment where people feel valued, supported, and not alone in their work.',
          'Designers highlighted his empathy, encouragement, and consistent follow-through, leading to increased confidence and engagement across the team.',
        ]},
        { headline: 'Delivered high-impact product outcomes through strong problem solving', bullets: [
          'Played a critical role in major product wins, including the Profit Assist redesign — which would not have happened without his involvement.',
          'Consistently asks strategic, intent-driven questions ("What is the outcome?") that broaden thinking and elevate team discourse.',
          'Willingness to jump in, problem-solve, and plug gaps has made him a reliable force in getting work across the finish line.',
        ]},
        { headline: 'Demonstrated structured, competency-based coaching', bullets: [
          'Several designers called out his coaching as clear, intentional, and development-oriented.',
          'Provides structure without being prescriptive, guides rather than dictates, and approaches growth as a shared effort.',
          'Thoughtful use of collaboration (e.g. looping in Paulina) strengthened learning, alignment, and quality of feedback around research and craft.',
        ]},
        { headline: 'Modeled strong leadership behaviors for peers', bullets: [
          'Leadership style — soft but intentional — has become a model others learn from.',
          'Takes control of meetings when needed, creates space for others to contribute, and advocates for strong practices like research.',
          'Humility, openness to peer feedback, and willingness to ask for help reinforce trust and raise the leadership bar across the org.',
        ]},
      ],
      improvements: [
        { headline: 'Strengthen advocacy for the user over aesthetics and internal constraints', bullets: [
          'Occasionally leans more toward design aesthetics or internal feasibility than deep user empathy.',
          'Growth will come from more consistently meeting merchants where they are and advocating harder when designs risk being diluted by PM or engineering constraints.',
          'His voice is trusted — using it more forcefully will elevate quality.',
        ]},
        { headline: 'Increase decisiveness and urgency in execution', bullets: [
          'Reliable, but at times hesitant when faster turnaround is needed.',
          'Collaborators noted reluctance around 24-48 hour cycles, even though he ultimately delivers.',
          'Modeling greater comfort with speed — especially when the risk is low — will help teams move faster.',
        ]},
        { headline: 'Clarify expectations and guidance in emerging areas (e.g., AI, change management)', bullets: [
          'Designers want clearer, tighter guidance as new tools and processes emerge.',
          'This includes when and how to use AI, as well as stronger follow-through during organizational change.',
          'In 2026, pair empathy with clearer guardrails and more explicit expectations.',
        ]},
      ],
    },
  },

  // ---- MOCK DATA FOR TEAM PROFILES ----

  'elena': {
    year: '2025',
    self: {
      ratings: { technical:4, quality:5, accountability:3, we_lead:3, we_deliver:4, we_learn:4, we_care:4, engagement:4, team_performance:3, feedback_coaching:3 },
      accomplishments: [
        { headline: 'Elevated visual craft standards across multiple product areas', bullets: [
          'Redesigned the onboarding flow with a motion-forward approach that reduced drop-off by 18% in usability testing.',
          'Introduced a consistent iconography system adopted by three other product teams without additional design effort.',
          'Consistently praised by engineers for pixel-precise specs that reduced implementation back-and-forth.',
        ]},
        { headline: 'Drove end-to-end ownership of the Reporting dashboard redesign', bullets: [
          'Took a fragmented, inconsistent dashboard from concept to ship in under 6 weeks despite scope changes.',
          'Balanced stakeholder requests with user needs, pushing back effectively on feature additions that would have hurt clarity.',
          'PM noted: "Elena was the calm center of a chaotic project — she kept quality high when everything else was on fire."',
        ]},
        { headline: 'Strengthened design handoff practices for the broader team', bullets: [
          'Built a shared Figma annotation template now used as the team default.',
          'Ran a 30-minute lunch-and-learn on component documentation that generated immediate adoption.',
        ]},
      ],
      improvements: [
        { headline: 'Build influence and visibility with senior stakeholders', bullets: [
          'Continue developing comfort presenting to VP-level audiences — the work is strong, but framing it for business impact will amplify reach.',
          'Practice narrating design rationale in terms of outcomes, not just craft decisions.',
        ]},
        { headline: 'Expand systems thinking beyond visual layer', bullets: [
          'Deepen involvement in IA and flow architecture early in projects, not just after structure is set.',
          'Partner with PMs earlier to shape problem framing before diving into solutions.',
        ]},
        { headline: 'Take on more formal mentorship responsibilities', bullets: [
          'Your craft expertise is a team asset — formalizing knowledge-sharing through structured critiques or pairing sessions would compound impact.',
          'Consider owning a craft competency area (e.g., motion, visual systems) as a team resource.',
        ]},
      ],
    },
    manager: {
      name: 'David',
      ratings: { technical:4, quality:4, accountability:3, we_lead:2, we_deliver:4, we_learn:3, we_care:4, engagement:4, team_performance:3, feedback_coaching:2 },
      accomplishments: [
        { headline: 'Consistently produced some of the highest-quality visual work on the team', bullets: [
          'Elena\'s design output sets a visible quality bar — detailed, intentional, and clearly user-centered.',
          'Cross-functional partners frequently cite her work as a reference point when discussing what "good" looks like.',
          'Handles ambiguity at the execution layer exceptionally well — given a direction, she always finds the best path.',
        ]},
        { headline: 'Reliable delivery partner in high-stakes projects', bullets: [
          'Delivered the Reporting dashboard end-to-end with minimal guidance — proactive, accountable, and calm under pressure.',
          'One of the few designers I trust to own a workstream completely when bandwidth is limited.',
        ]},
      ],
      improvements: [
        { headline: 'Develop a stronger strategic voice in project shaping', bullets: [
          'Elena\'s instincts are strong, but she tends to wait to be invited into strategy conversations rather than inserting herself.',
          'The next growth level requires proactively shaping the problem space, not just executing within it.',
          'Begin scheduling time with PMs at project kickoff, not after scoping is done.',
        ]},
        { headline: 'Grow comfort with ambiguity at a higher altitude', bullets: [
          'When the brief is clear, Elena thrives. When it\'s not, she sometimes stalls.',
          'In 2026, practice making a first move with explicit assumptions rather than waiting for the problem to crystallize.',
        ]},
        { headline: 'Invest in peer relationships across functions', bullets: [
          'Elena works well with her immediate pod but has limited visibility with stakeholders outside her team.',
          'Building relationships with Engineering leads and Product leadership will unlock more influence and trust.',
        ]},
      ],
    },
  },

  'marcus': {
    year: '2025',
    self: {
      ratings: { technical:5, quality:4, accountability:5, we_lead:3, we_deliver:5, we_learn:4, we_care:3, engagement:4, team_performance:3, feedback_coaching:3 },
      accomplishments: [
        { headline: 'Built and shipped the Design System v2 foundation used by the entire product org', bullets: [
          'Led the token architecture migration from scratch, unblocking 4 product teams from a fragmented component dependency.',
          'Coordinated with 6 engineers across 2 squads to align on implementation without slowing any active sprint.',
          'Reduced design-to-dev handoff friction by an estimated 30% based on team retrospective feedback.',
        ]},
        { headline: 'Defined interaction patterns that became org-wide standards', bullets: [
          'Authored the form validation and error state guidelines now embedded in the component library.',
          'Presented at a cross-functional design review — work was adopted without modification, which is rare.',
        ]},
        { headline: 'Shipped 3 high-complexity features on time despite mid-cycle scope changes', bullets: [
          'Inventory redesign, Bulk Actions overhaul, and the new Analytics entry point all shipped within original timelines.',
          'Navigated stakeholder changes and engineering constraints by maintaining tight feedback loops and clear scope documentation.',
        ]},
      ],
      improvements: [
        { headline: 'Invest more in team relationship-building', bullets: [
          'Strong individual output but sometimes operates in isolation — more proactive collaboration would amplify impact.',
          'Share work earlier and more often, even when not finished, to invite input and catch blind spots.',
        ]},
        { headline: 'Develop facilitation and workshop leadership skills', bullets: [
          'The next tier of influence involves bringing others along, not just producing the best artifact.',
          'Lead at least one discovery workshop per quarter to build comfort with collaborative problem-solving.',
        ]},
        { headline: 'Balance precision with speed', bullets: [
          'Marcus sometimes spends extra cycles on details that don\'t move the needle. Learning when "good enough" unlocks the next step is a key senior skill.',
          'Timebox exploration phases and time-cap polish iterations on lower-priority workstreams.',
        ]},
      ],
    },
    manager: {
      name: 'Nicole',
      ratings: { technical:5, quality:4, accountability:4, we_lead:3, we_deliver:4, we_learn:4, we_care:3, engagement:3, team_performance:3, feedback_coaching:3 },
      accomplishments: [
        { headline: 'Strongest systems thinker on the team — a force multiplier when fully engaged', bullets: [
          'The Design System v2 initiative would not have happened at this quality or speed without Marcus.',
          'He sees structural problems three steps ahead and builds solutions that outlast the immediate need.',
          'Cross-functional credibility with Engineering is among the highest I\'ve seen for a designer at this level.',
        ]},
        { headline: 'Consistent, reliable delivery without hand-holding', bullets: [
          'I never have to follow up on Marcus\' work — he manages his own quality bar and usually exceeds it.',
          'Sets and keeps commitments even when external factors shift.',
        ]},
      ],
      improvements: [
        { headline: 'Show up more fully as a team contributor, not just an individual producer', bullets: [
          'Marcus\' biggest unlock in 2026 is making his expertise more available to others — through pairing, critique, or just being present in team conversations.',
          'Currently his impact ceiling is limited to his own workstreams; expanding influence requires more visible collaboration.',
        ]},
        { headline: 'Grow warmth and approachability in cross-functional relationships', bullets: [
          'Task-oriented and highly effective, but can read as distant in ambiguous or emotionally charged situations.',
          'The most effective senior ICs build trust beyond outputs — lean into relationship investment.',
        ]},
      ],
    },
  },

  'priya': {
    year: '2025',
    self: {
      ratings: { technical:3, quality:4, accountability:4, we_lead:3, we_deliver:3, we_learn:5, we_care:5, engagement:5, team_performance:4, feedback_coaching:4 },
      accomplishments: [
        { headline: 'Led the most rigorous generative research initiative the team has run', bullets: [
          'Designed and ran a 3-month longitudinal study with 24 participants across 4 merchant segments.',
          'Synthesized findings into a merchant mental model framework now used as the baseline for roadmap decisions.',
          'Research directly influenced two roadmap pivots, saving an estimated 6 weeks of build work on features that wouldn\'t have landed.',
        ]},
        { headline: 'Championed a user-first culture in cross-functional planning', bullets: [
          'Brought customer evidence into every product review meeting, consistently raising the quality of decision-making.',
          'PM leadership recognized the shift in team conversations: "Priya has made user data a first-class input, not an afterthought."',
        ]},
        { headline: 'Mentored two junior designers through their first end-to-end research projects', bullets: [
          'Structured a research apprenticeship model that gave juniors hands-on experience with moderation and synthesis.',
          'Both mentees ran independent studies by Q4, doubling team research throughput.',
        ]},
      ],
      improvements: [
        { headline: 'Build executive presence and strategic narrative skills', bullets: [
          'Research impact is clear at the team level but not always visible to senior leadership.',
          'Invest in packaging insights for VP-level consumption — more visual, more opinionated, less hedged.',
          'Practice presenting "so what" before "what we found."',
        ]},
        { headline: 'Accelerate from insight to recommendation', bullets: [
          'Synthesis is thorough but sometimes slow — the window where insights drive decisions is short.',
          'Introduce faster read-out formats (1-pagers, async video walkthroughs) to increase agility.',
        ]},
        { headline: 'Deepen product design craft to complement research expertise', bullets: [
          'Strengthening wireframing and interaction design skills will make Priya\'s research recommendations land more concretely.',
          'Partner with an IC designer on one project to build shared intuition for design constraints.',
        ]},
      ],
    },
    manager: {
      name: 'Lisa',
      ratings: { technical:3, quality:3, accountability:4, we_lead:3, we_deliver:3, we_learn:5, we_care:5, engagement:4, team_performance:4, feedback_coaching:3 },
      accomplishments: [
        { headline: 'Transformed the team\'s relationship with user research in 2025', bullets: [
          'Priya fundamentally shifted how we make product decisions — from intuition-led to evidence-led.',
          'Her longitudinal study work is the most rigorous we\'ve produced, and it\'s already preventing expensive mistakes.',
          'Cross-functional partners seek her out proactively, which is a rare sign of true research impact.',
        ]},
        { headline: 'A genuine team builder who invests in others without being asked', bullets: [
          'Both junior researchers she mentored grew measurably faster under her guidance than their previous trajectories suggested.',
          'Priya creates a team culture of curiosity and rigor that is contagious.',
        ]},
      ],
      improvements: [
        { headline: 'Translate research depth into faster, sharper executive storytelling', bullets: [
          'Priya\'s insights are rich, but they sometimes arrive after the decision window has closed.',
          'The skill to develop in 2026 is "minimum viable insight" — enough signal, fast enough, to influence the decision in the room.',
        ]},
        { headline: 'Grow scope of influence beyond the research function', bullets: [
          'Priya is highly respected within the design org but less visible in cross-functional leadership settings.',
          'Owning a strategic narrative — not just research outputs — would unlock a path to senior individual contributor.',
        ]},
      ],
    },
  },

  'jordan': {
    year: '2025',
    self: {
      ratings: { technical:3, quality:3, accountability:4, we_lead:3, we_deliver:3, we_learn:4, we_care:5, engagement:4, team_performance:3, feedback_coaching:3 },
      accomplishments: [
        { headline: 'Grew significantly in end-to-end design ownership across two product areas', bullets: [
          'Took the Checkout flow redesign from problem brief through handoff with increasing independence over the year.',
          'By Q3, required minimal check-ins to deliver well-structured, thoughtful work that reflected user needs.',
          'Engineering gave direct positive feedback on the clarity of specs and design intent documentation.',
        ]},
        { headline: 'Built strong collaborative relationships with PM and Engineering counterparts', bullets: [
          'Consistently described by cross-functional partners as easy to work with, communicative, and reliable.',
          'Created a shared working rhythm with Engineering that reduced mid-sprint surprises.',
          'PM cited Jordan as "the designer I most want on a complex feature because I know they\'ll flag problems early."',
        ]},
        { headline: 'Stepped up during team capacity crunch to absorb additional scope', bullets: [
          'Covered design needs on the Mobile Notifications project while primary designer was on leave.',
          'Delivered at a higher quality level than expected given the context switch and compressed timeline.',
        ]},
      ],
      improvements: [
        { headline: 'Develop stronger visual and interaction design craft', bullets: [
          'Core competency gap to close in 2026 — consistently polished, principle-grounded visual execution.',
          'Audit work against design principles before reviews; invest time in studying craft details of best-in-class products.',
          'Consider dedicating time each week to deliberate craft practice outside of project deliverables.',
        ]},
        { headline: 'Build confidence presenting and defending design decisions', bullets: [
          'Jordan sometimes defers too quickly when stakeholders push back, even when the design is right.',
          'Practice framing rationale clearly before reviews so pushback feels like a prompt to explain, not a reason to change.',
          'Strength of conviction in the room will grow faster with more repetitions in low-stakes settings.',
        ]},
        { headline: 'Increase speed from brief to first concept', bullets: [
          'Stronger upfront synthesis of constraints and user needs will shorten the ramp to first draft.',
          'Build a personal pattern library and reduce time spent re-solving common design problems from scratch.',
        ]},
      ],
    },
    manager: {
      name: 'Adam',
      ratings: { technical:2, quality:3, accountability:4, we_lead:2, we_deliver:3, we_learn:4, we_care:5, engagement:4, team_performance:3, feedback_coaching:2 },
      accomplishments: [
        { headline: 'A collaborative, accountable team member who makes cross-functional work better', bullets: [
          'Jordan is consistently praised by PMs and engineers — not just for outputs, but for how they show up in the process.',
          'Follows through on commitments, communicates proactively, and rarely drops balls.',
          'The care and attention they bring to relationships is a genuine asset for team culture.',
        ]},
        { headline: 'Demonstrated meaningful growth in ownership and independence this year', bullets: [
          'Early in the year, Jordan needed structured guidance on scope and problem framing. By Q4, they were navigating projects with much more autonomy.',
          'The trajectory is strong — each project they take on, the ceiling gets a bit higher.',
        ]},
      ],
      improvements: [
        { headline: 'Close the craft gap — this is the primary focus for 2026', bullets: [
          'Collaboration and reliability are real strengths, but visual and interaction design quality needs to reach a consistently higher level.',
          'Invest deliberately in craft outside of project work — reference analysis, redesign challenges, critique participation.',
          'The promotion path to Mid-level requires demonstrable craft mastery alongside the soft skills already present.',
        ]},
        { headline: 'Build point of view and design conviction', bullets: [
          'Jordan is too quick to accommodate feedback without interrogating whether it improves the design.',
          'In 2026, the goal is to develop a reliable, defensible voice — "here\'s my recommendation and why" rather than "what do you prefer?"',
        ]},
        { headline: 'Grow comfort with ambiguity and incomplete briefs', bullets: [
          'Currently most effective when requirements are clear. The next tier requires making confident first moves with partial information.',
          'Practice making and documenting assumptions explicitly at the start of every project.',
        ]},
      ],
    },
  },

  'sarah': {
    year: '2025',
    self: {
      ratings: { technical:3, quality:4, accountability:4, we_lead:4, we_deliver:4, we_learn:3, we_care:4, engagement:5, team_performance:4, feedback_coaching:4 },
      accomplishments: [
        { headline: 'Drove alignment across a complex, multi-team initiative through strong communication', bullets: [
          'Ran biweekly design reviews for the Platform Unification project with stakeholders across 4 product teams.',
          'Created a decision log and shared design rationale document adopted as the project\'s source of truth.',
          'Reduced duplicate work and misaligned assumptions by creating structured visibility into design direction.',
        ]},
        { headline: 'Delivered the Help Center redesign that became a measurable business win', bullets: [
          'Redesigned search and navigation architecture, contributing to a 22% reduction in support ticket volume.',
          'Worked closely with Support and Content teams to map the full customer journey before touching layouts.',
          'Received a company-wide shout-out at the quarterly all-hands from the Support VP.',
        ]},
        { headline: 'Grew into a visible, trusted voice for the design org', bullets: [
          'Invited to represent Design in two executive strategy sessions — one of the few ICs included in those conversations.',
          'Described by Product leadership as "someone who makes every room she\'s in more productive."',
        ]},
      ],
      improvements: [
        { headline: 'Accelerate technical depth in interaction design and prototyping', bullets: [
          'High-fidelity prototyping and motion design are growth areas that would make ideas more testable earlier.',
          'Invest in Figma advanced prototyping and explore tools like Principle or Framer for higher-fidelity explorations.',
          'Technical depth would complement strong communication skills and make Sarah a more complete senior IC.',
        ]},
        { headline: 'Increase velocity on solo design work', bullets: [
          'Thrives in collaborative, high-communication contexts but sometimes moves slower when working independently.',
          'Building personal systems for solo workstreams (templates, starting points, decision frameworks) will compress cycles.',
        ]},
        { headline: 'Invest in continuous learning beyond current comfort zone', bullets: [
          'The learning cadence has plateaued — actively seek out new methods, domains, and challenges.',
          'A structured quarterly learning goal (read, apply, share) would keep the growth rate ahead of scope expansion.',
        ]},
      ],
    },
    manager: {
      name: 'David',
      ratings: { technical:3, quality:4, accountability:4, we_lead:4, we_deliver:3, we_learn:3, we_care:4, engagement:5, team_performance:4, feedback_coaching:4 },
      accomplishments: [
        { headline: 'One of the strongest communicators in the design org — a genuine force multiplier', bullets: [
          'Sarah doesn\'t just design well — she makes the work legible and trustworthy to every audience.',
          'Her influence in cross-functional settings is unusual at her level; she moves rooms.',
          'The Platform Unification project would have fractured without her coordination.',
        ]},
        { headline: 'Built and maintained stakeholder trust at scale', bullets: [
          'Multiple PMs and Engineering leads listed Sarah as the designer they most want on complex, high-visibility work.',
          'She earns trust quickly and holds it — follow-through is consistent and communication is always clear.',
        ]},
        { headline: 'Delivered measurable business impact through the Help Center redesign', bullets: [
          'Rare ability to connect design decisions to business outcomes and then actually achieve them.',
          'This is the type of result that gets noticed at the leadership level.',
        ]},
      ],
      improvements: [
        { headline: 'Close the technical craft gap to match communication and leadership strengths', bullets: [
          'Sarah\'s strategic and communication abilities are senior-level. Her technical design execution is still catching up.',
          'In 2026, the path to Staff IC requires demonstrating that the craft can carry without a strong collaborator.',
          'Prioritize at least one project where technical depth is the primary constraint to stretch against.',
        ]},
        { headline: 'Increase comfort and speed with independent execution', bullets: [
          'Most effective in collaborative, well-scoped environments. Higher-altitude roles will require solo velocity.',
          'Practice reducing check-ins on lower-stakes projects to build independence and decision-making muscle.',
        ]},
      ],
    },
  },
};

// ============ STATE ============
let state = {
  view: 'home',
  skillId: null,
  category: 'all',
  search: '',
  profile: null,
  levelTab: 'Learner',
  cvLevelTab: 3,
  reviewFilter: 'all',
  reviewCats: [],
  reviewLevels: [],
  reviewHasNotes: false,
  reviewHasGoals: false,
  reviewFilterOpen: false,
  reviewOpenDropdown: '',
  profileDropdownOpen: false,
  resourcesCats: [],
  resourcesTypes: [],
  resourcesOpenDropdown: '',
  prevView: 'review',
  valueId: null,
  addResourceOpen: false,
  cvAddResourceOpen: false,
  eoyTextTab: 'self',
  tableSort: {},
  growthThemeModal: null,
  growthThemeId: null,
  growthThemeLevelModal: null,
  designGoalModal: null,
  designGoalAddMode: null,   // 'manual' | 'ai' | null
  designGoalSuggestions: [],  // suggested items from AI scan
  radarLayers: ['manager', 'expected'],
  quickWinModal: null,
  noteText: '',
  noteInputOpen: false,
  notePreview: null,
  noteSuccess: null,
  noteAddSkillSearch: '',
  noteAddSkillOpen: false,
  outreachModal: null,
  outreachTypeFilter: '',
  outreachToast: null,
  goalModal: null,
  goalNotesModal: null,
  pinModal: null,
  unlockedProfiles: [],
  personalGoalId: null,
  designGoalId: null,
  detailNotesEditing: false,
};

// ============ STORAGE ============
function getStorageKey() { return `dch_data_${state.profile}`; }
function getData() {
  const raw = localStorage.getItem(getStorageKey());
  const base = raw ? JSON.parse(raw) : {};
  return { assessments: {}, customResources: {}, cvCustomResources: {}, coreValues: {}, goalContributions: {}, personalGoals: [], productGoals: [], growthThemes: [], designGoalEvidence: {}, growthThemeEvidence: {}, personalGoalEvidence: {}, growthThemeNotes: {}, ...base };
}
function saveData(data) {
  localStorage.setItem(getStorageKey(), JSON.stringify(data));
}
function getAssessment(skillId) {
  const d = getData();
  return d.assessments[skillId] || { selfLevel: null, managerLevel: null, evidence: '', goals: '', lastUpdated: null };
}
function saveAssessment(skillId, assessment) {
  const d = getData();
  d.assessments[skillId] = { ...assessment, lastUpdated: new Date().toISOString() };
  saveData(d);
}
function getResources(skillId) {
  const curated = (CURATED_RESOURCES[skillId] || []).map(r => ({ ...r, curated: true }));
  const d = getData();
  const custom = (d.customResources[skillId] || []).map(r => ({ ...r, curated: false }));
  return [...curated, ...custom];
}
function addCustomResource(skillId, resource) {
  const d = getData();
  if (!d.customResources[skillId]) d.customResources[skillId] = [];
  d.customResources[skillId].push({ ...resource, id: `u_${Date.now()}` });
  saveData(d);
}
function deleteCustomResource(skillId, resourceId) {
  const d = getData();
  if (d.customResources[skillId]) {
    d.customResources[skillId] = d.customResources[skillId].filter(r => r.id !== resourceId);
    saveData(d);
  }
}

const CURATED_CV_RESOURCES = {
  empathy: [
    { id: 'cv_e1', title: 'The Importance of Empathy in UX Design', type: 'article', url: 'https://www.nngroup.com/articles/sympathy-vs-empathy-ux/', desc: 'NN/g on the difference between sympathy and empathy in design practice' },
    { id: 'cv_e2', title: 'Empathy Mapping: A Guide to Getting Inside Your Users\' Heads', type: 'article', url: 'https://www.nngroup.com/articles/empathy-mapping/', desc: 'How to run an empathy mapping workshop' },
    { id: 'cv_e3', title: 'Just Enough Research by Erika Hall', type: 'book', url: 'https://abookapart.com/products/just-enough-research', desc: 'Practical guide to understanding users and stakeholders' },
  ],
  teamwork: [
    { id: 'cv_t1', title: 'The Five Dysfunctions of a Team', type: 'book', url: 'https://www.tablegroup.com/product/dysfunctions/', desc: 'Patrick Lencioni\'s model for building trust and collaboration' },
    { id: 'cv_t2', title: 'Collaborative Design: Working with Stakeholders', type: 'article', url: 'https://www.smashingmagazine.com/2020/06/collaborative-design-stakeholders/', desc: 'Strategies for inclusive, cross-functional design work' },
    { id: 'cv_t3', title: 'How to Facilitate Design Critiques', type: 'article', url: 'https://www.invisionapp.com/inside-design/run-design-critique/', desc: 'Running critiques that are constructive and inclusive' },
  ],
  agility: [
    { id: 'cv_a1', title: 'Lean UX by Jeff Gothelf', type: 'book', url: 'https://www.oreilly.com/library/view/lean-ux-3rd/9781098116293/', desc: 'Applying lean and agile principles to UX design' },
    { id: 'cv_a2', title: 'Embracing Change: Design in Agile Teams', type: 'article', url: 'https://www.smashingmagazine.com/2021/02/agile-ux-design/', desc: 'How designers thrive in agile environments' },
    { id: 'cv_a3', title: 'A Mindset for Iteration', type: 'video', url: 'https://www.youtube.com/watch?v=Xh-8I4kAcTk', desc: 'Short talk on building a culture of learning and adapting' },
  ],
  humility: [
    { id: 'cv_h1', title: 'Ego Is the Enemy by Ryan Holiday', type: 'book', url: 'https://ryanholiday.net/ego-is-the-enemy/', desc: 'How ego holds us back from growth and collaboration' },
    { id: 'cv_h2', title: 'The Design of Everyday Things — Preface', type: 'book', url: 'https://www.basicbooks.com/titles/don-norman/the-design-of-everyday-things/9780465050659/', desc: 'Don Norman on humility in the design process' },
    { id: 'cv_h3', title: 'Receiving Feedback Gracefully', type: 'article', url: 'https://www.ideo.com/journal/receiving-feedback-is-a-skill', desc: 'Practical techniques for turning critique into growth' },
  ],
};

function getCVResources(valueId) {
  const curated = (CURATED_CV_RESOURCES[valueId] || []).map(r => ({ ...r, curated: true }));
  const d = getData();
  const custom = (d.cvCustomResources[valueId] || []).map(r => ({ ...r, curated: false }));
  return [...curated, ...custom];
}
function addCVCustomResource(valueId, resource) {
  const d = getData();
  if (!d.cvCustomResources[valueId]) d.cvCustomResources[valueId] = [];
  d.cvCustomResources[valueId].push({ ...resource, id: `cv_u_${Date.now()}` });
  saveData(d);
}
function deleteCVCustomResource(valueId, resourceId) {
  const d = getData();
  if (d.cvCustomResources[valueId]) {
    d.cvCustomResources[valueId] = d.cvCustomResources[valueId].filter(r => r.id !== resourceId);
    saveData(d);
  }
}

function getValueRating(valueId) {
  const d = getData();
  return d.coreValues[valueId] || { managerRating: null, notes: '' };
}
function saveValueRating(valueId, data) {
  const d = getData();
  d.coreValues[valueId] = { ...data };
  saveData(d);
}
function setValueManagerRating(valueId, rating) {
  const v = getValueRating(valueId);
  v.managerRating = rating ? Number(rating) : null;
  saveValueRating(valueId, v);
  // re-render the whole values table so select styling updates
  const content = document.getElementById('content');
  if (content && state.view === 'values') content.innerHTML = renderCoreValues();
}
function setValueManagerRatingAndRerender(valueId, rating) {
  const v = getValueRating(valueId);
  v.managerRating = rating ? Number(rating) : null;
  saveValueRating(valueId, v);
  const content = document.getElementById('content');
  if (content) content.innerHTML = renderCoreValueDetail();
}
function setValueRatingFromDetail(valueId, rating) {
  const v = getValueRating(valueId);
  v.managerRating = rating ? Number(rating) : null;
  v.lastUpdated = new Date().toISOString();
  saveValueRating(valueId, v);
  const content = document.getElementById('content');
  if (content) content.innerHTML = renderCoreValueDetail();
}
function openValueNotesModal(valueId) {
  // Reuse the notes modal by opening the value detail page
  navigate('value', valueId);
}
function saveValueNotes(valueId) {
  const v = getValueRating(valueId);
  const el = document.getElementById(`cv-notes-${valueId}`);
  if (el) v.notes = el.value;
  saveValueRating(valueId, v);
  const ind = document.getElementById(`cv-saved-${valueId}`);
  if (ind) { ind.style.opacity = '1'; setTimeout(() => { ind.style.opacity = '0'; }, 1500); }
  // refresh table if on list view
  if (state.view === 'values') {
    const content = document.getElementById('content');
    if (content) content.innerHTML = renderCoreValues();
  }
}

// ============ GOALS STORAGE ============
function getGoalContribution(goalId) {
  return getData().goalContributions[goalId] || { status: 'not_started', notes: '' };
}
function saveGoalContribution(goalId, data) {
  const d = getData();
  d.goalContributions[goalId] = data;
  saveData(d);
}
function getPersonalGoals() { return getData().personalGoals; }
function getProductGoals()  { return getData().productGoals; }
function savePersonalGoals(goals) { const d = getData(); d.personalGoals = goals; saveData(d); }
function saveProductGoals(goals)  { const d = getData(); d.productGoals = goals; saveData(d); }

// ============ MERCHANT OUTREACH STORAGE ============
function getOutreachStorageKey() { return `dch_outreach_${state.profile}`; }
function getOutreachData() {
  const raw = localStorage.getItem(getOutreachStorageKey());
  return raw ? JSON.parse(raw) : { hveMerchant: '', entries: [] };
}
function saveOutreachData(data) {
  localStorage.setItem(getOutreachStorageKey(), JSON.stringify(data));
}

// ============ PROFILES ============
function getProfiles() {
  return JSON.parse(localStorage.getItem('dch_profiles') || '[]');
}
function saveProfiles(profiles) {
  localStorage.setItem('dch_profiles', JSON.stringify(profiles));
}
function addProfile(name, role, isManager = false, pin) {
  const profiles = getProfiles();
  const profile = { name, role, id: `p_${Date.now()}`, created: new Date().toISOString(), photo: null, isManager, pin: pin || null };
  profiles.push(profile);
  saveProfiles(profiles);
  return profile;
}
function currentIsManager() {
  const profiles = getProfiles();
  const p = profiles.find(x => x.id === state.profile);
  return !!(p?.isManager);
}
function setProfilePhoto(id, dataUrl) {
  const profiles = getProfiles();
  const p = profiles.find(x => x.id === id);
  if (p) { p.photo = dataUrl; saveProfiles(profiles); }
}
function avatarHtml(p, size = 36, fontSize = 13) {
  if (p?.photo) {
    return `<div class="profile-avatar" style="width:${size}px;height:${size}px;padding:0;overflow:hidden;flex-shrink:0"><img src="${p.photo}" style="width:100%;height:100%;object-fit:cover;border-radius:50%" /></div>`;
  }
  return `<div class="profile-avatar" style="width:${size}px;height:${size}px;font-size:${fontSize}px;flex-shrink:0;background:linear-gradient(135deg,#6366F1,#8B5CF6)">${getInitials(p?.name || '?')}</div>`;
}
function deleteProfile(id) {
  const profiles = getProfiles().filter(p => p.id !== id);
  saveProfiles(profiles);
  localStorage.removeItem(`dch_data_${id}`);
}
function setCurrentProfile(id) {
  state.profile = id;
  localStorage.setItem('dch_current_profile', id);
}

// ============ UTILITIES ============
function getSkillById(id) {
  return SKILLS_DATA.skills.find(s => s.id === id);
}
function getCategories() { return SKILLS_DATA.categories; }
function getSkillsByCategory(category) {
  return category === 'all' ? SKILLS_DATA.skills : SKILLS_DATA.skills.filter(s => s.category === category);
}
function catCls(category) {
  return (category || '').toLowerCase().replace(/[^a-z]/g, '-');
}
function levelCls(level) {
  return (level || '').toLowerCase();
}
function getInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function escHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
const EXTERNAL_LINK_ICON = `<svg width="11" height="11" viewBox="0 0 256 256" fill="currentColor" style="flex-shrink:0;opacity:.55;margin-left:4px;vertical-align:middle;position:relative;top:-1px" aria-hidden="true"><path d="M224,104a8,8,0,0,1-16,0V59.32l-82.34,82.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"/></svg>`;
function getAntiPatternForLevel(skill, level) {
  if (!skill?.anti_patterns) return null;
  const levels = ['Learner','Contributor','Independent','Expert'];
  const idx = levels.indexOf(level);
  if (idx === -1) return null;
  const next = levels[idx + 1];
  const rx = new RegExp(`${level}:\\s*(.+?)(?=${next ? next + ':' : '$'})`, 's');
  const m = skill.anti_patterns.match(rx);
  return m ? m[1].trim() : null;
}

function shortRole(role) {
  if (!role) return '';
  return role.replace(/\bSenior\b/g, 'Sr.').replace(/\bManager\b/g, 'Mgr');
}
function getAssessedCount() {
  const d = getData();
  return Object.values(d.assessments).filter(a => a.managerLevel).length;
}
function getDataForProfile(profileId) {
  const raw = localStorage.getItem(`dch_data_${profileId}`);
  const base = raw ? JSON.parse(raw) : {};
  return { assessments: {}, customResources: {}, cvCustomResources: {}, coreValues: {}, goalContributions: {}, personalGoals: [], productGoals: [], growthThemes: [], designGoalEvidence: {}, growthThemeEvidence: {}, personalGoalEvidence: {}, growthThemeNotes: {}, ...base };
}
function getExpectedLevelForSkillAndRole(skillId, role) {
  if (!role) return null;
  const rd = ROLES_DATA[role];
  return rd ? (rd.skills[skillId] || null) : null;
}
function getLevelOrder(level) { return (LEVEL_CONFIG[level] || {}).order || 0; }
function getExpectedLevelForSkill(skillId) {
  const profiles = getProfiles();
  const prof = profiles.find(p => p.id === state.profile);
  if (!prof?.role) return null;
  const rd = ROLES_DATA[prof.role];
  if (!rd) return null;
  return rd.skills[skillId] || null;
}
function updateProfileRole(profileId, role) {
  const profiles = getProfiles();
  const p = profiles.find(p => p.id === profileId);
  if (p) { p.role = role; saveProfiles(profiles); }
}
function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = dateStr.includes('T') ? new Date(dateStr) : new Date(dateStr + 'T12:00:00');
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ============ RENDER HELPERS ============
function levelBadge(level, opts = {}) {
  if (!level) return `<span class="not-assessed">${opts.emptyLabel || 'Not assessed'}</span>`;
  const lc = LEVEL_CONFIG[level];
  if (!lc) return '';
  const size = opts.small ? 'font-size:10px;padding:4px 8px;' : '';
  return `<span class="level-badge ${lc.cls}" style="${size}">${lc.emoji} ${level}</span>`;
}
function catBadge(category) {
  const cc = CATEGORY_CONFIG[category] || {};
  return `<span class="cat-badge" style="background:${cc.bg || '#EEF2FF'};color:${cc.color || '#6366F1'}">${escHtml(category)}</span>`;
}

// ============ HOME VIEW ============
const RADAR_COLORS = { manager: '#6366F1', expected: '#F59E0B' };
const RADAR_LAYER_OPTIONS = [
  { id: 'manager',  label: 'Assessment', color: '#6366F1' },
  { id: 'expected', label: 'Expected',   color: '#F59E0B' },
];

function showRadarTooltip(e, text) {
  let tt = document.getElementById('radar-tooltip');
  if (!tt) {
    tt = document.createElement('div');
    tt.id = 'radar-tooltip';
    tt.style.cssText = 'position:fixed;background:#1e293b;color:#f1f5f9;padding:5px 10px;border-radius:6px;font-size:12px;font-weight:500;pointer-events:none;z-index:9999;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,.25);transition:opacity .1s';
    document.body.appendChild(tt);
  }
  tt.textContent = text;
  tt.style.opacity = '1';
  tt.style.left = (e.clientX + 14) + 'px';
  tt.style.top = (e.clientY - 32) + 'px';
}
function hideRadarTooltip() {
  const tt = document.getElementById('radar-tooltip');
  if (tt) tt.style.opacity = '0';
}

function toggleRadarLayer(layer) {
  const layers = state.radarLayers;
  const idx = layers.indexOf(layer);
  if (idx > -1) {
    state.radarLayers = layers.filter(l => l !== layer);
  } else {
    state.radarLayers = [...layers, layer];
  }
  const el = document.getElementById('radar-card');
  if (el) el.innerHTML = renderRadarCardInner();
}

function renderRadarChart(size, layers) {
  if (!Array.isArray(layers)) layers = [layers || 'self'];
  const cx = size / 2, cy = size / 2;
  const maxR = size / 2 - 36;
  const categories = getCategories();
  const n = categories.length;
  const d = getData();
  const assessments = d.assessments;

  function catScores(levelKey) {
    return categories.map(cat => {
      const catSkills = SKILLS_DATA.skills.filter(s => s.category === cat);
      const assessed = catSkills.filter(s => assessments[s.id]?.[levelKey]);
      if (!assessed.length) return 0;
      return assessed.reduce((sum, s) => sum + getLevelOrder(assessments[s.id][levelKey]), 0) / assessed.length / 4;
    });
  }

  function expectedScores() {
    return categories.map(cat => {
      const catSkills = SKILLS_DATA.skills.filter(s => s.category === cat);
      const withExp = catSkills.filter(s => { const e = getExpectedLevelForSkill(s.id); return e !== null && e !== undefined; });
      if (!withExp.length) return 0;
      return withExp.reduce((sum, s) => sum + getLevelOrder(getExpectedLevelForSkill(s.id)), 0) / withExp.length / 4;
    });
  }

  function pt(i, r) {
    const angle = (2 * Math.PI * i / n) - Math.PI / 2;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  }

  const gridHTML = [0.25, 0.5, 0.75, 1.0].map(lvl => {
    return `<circle cx="${cx}" cy="${cy}" r="${maxR * lvl}" fill="none" stroke="${lvl === 1 ? '#CBD5E1' : '#E2E8F0'}" stroke-width="${lvl === 1 ? 1.5 : 1}" stroke-dasharray="${lvl < 1 ? '3,3' : ''}"/>`;
  }).join('');

  const axesHTML = categories.map((_, i) => {
    const p = pt(i, maxR);
    return `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="#E2E8F0" stroke-width="1"/>`;
  }).join('');

  function renderPoly(scores, color, fillOp, strokeW) {
    const pts = scores.map((s, i) => { const r = maxR * Math.max(s, 0.04); const p = pt(i, r); return `${p.x},${p.y}`; }).join(' ');
    return `<polygon points="${pts}" fill="${color}" fill-opacity="${fillOp}" stroke="${color}" stroke-width="${strokeW}" stroke-linejoin="round"/>`;
  }

  function renderDots(scores, color, clickFn, tooltips) {
    return scores.map((s, i) => {
      const r = maxR * Math.max(s, 0.04); const p = pt(i, r);
      const click = clickFn ? ` onclick="${clickFn(i)}"` : '';
      const tip = tooltips?.[i] ? ` onmouseenter='showRadarTooltip(event,${JSON.stringify(tooltips[i])})' onmouseleave='hideRadarTooltip()'` : '';
      return `<circle cx="${p.x}" cy="${p.y}" r="${clickFn ? 6 : 4}" fill="${color}" stroke="white" stroke-width="1.5" style="cursor:pointer"${click}${tip}/>`;
    }).join('');
  }

  const catLabels = { 'Project Management': 'Proj Mgmt' };
  const labelsHTML = categories.map((cat, i) => {
    const angle = (2 * Math.PI * i / n) - Math.PI / 2;
    const sinA = Math.sin(angle), cosA = Math.cos(angle);
    // Top/bottom: push pill further out along the axis so it clears the chart ring
    // Left/right: keep on the ring but shift pill down to clear the horizontal axis line
    const isTopBottom = Math.abs(sinA) > 0.7;
    const labelR = isTopBottom ? maxR + 16 : maxR;
    const lx = cx + labelR * cosA;
    const ly = cy + labelR * sinA + (isTopBottom ? 0 : 20);
    const label = catLabels[cat] || cat;
    const pillW = Math.max(label.length * 5.5 + 14, 28);
    const pillH = 15;
    const pillX = (lx - pillW / 2).toFixed(1);
    const pillY = (ly - pillH / 2).toFixed(1);
    return `<g style="cursor:pointer" onclick="navigateToSkillCategory('${escHtml(cat)}')">
      <rect x="${pillX}" y="${pillY}" width="${pillW.toFixed(1)}" height="${pillH}" rx="7" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="1"/>
      <text x="${lx.toFixed(1)}" y="${(ly + 3.5).toFixed(1)}" text-anchor="middle" fill="#334155" font-size="9" font-weight="600" font-family="-apple-system,BlinkMacSystemFont,'Inter','Segoe UI',sans-serif">${label}</text>
    </g>`;
  }).join('');

  // Build shapes — render in back-to-front order: expected, manager, self
  const renderOrder = ['expected', 'manager', 'self'].filter(l => layers.includes(l));
  const multi = renderOrder.length > 1;
  const fillOp = multi ? 0.08 : 0.13;
  const strokeW = multi ? 1.5 : 2;

  const LEVEL_NAMES = ['Learner', 'Contributor', 'Independent', 'Expert'];
  function catTooltips(levelKey, suffix) {
    return categories.map(cat => {
      const catSkills = SKILLS_DATA.skills.filter(s => s.category === cat);
      const assessed = catSkills.filter(s => assessments[s.id]?.[levelKey]);
      if (!assessed.length) return `${cat}: Not assessed`;
      const avg = assessed.reduce((sum, s) => sum + getLevelOrder(assessments[s.id][levelKey]), 0) / assessed.length;
      const lvl = LEVEL_NAMES[Math.round(avg) - 1] || '—';
      return suffix ? `${cat} (${suffix}): ${lvl}` : `${cat}: ${lvl}`;
    });
  }
  function expectedTooltips() {
    return categories.map(cat => {
      const catSkills = SKILLS_DATA.skills.filter(s => s.category === cat);
      const withExp = catSkills.filter(s => { const e = getExpectedLevelForSkill(s.id); return e != null; });
      if (!withExp.length) return `${cat} (Expected): —`;
      const avg = withExp.reduce((sum, s) => sum + getLevelOrder(getExpectedLevelForSkill(s.id)), 0) / withExp.length;
      const lvl = LEVEL_NAMES[Math.round(avg) - 1] || '—';
      return `${cat} (Expected): ${lvl}`;
    });
  }

  let shapesHTML = '', dotsHTML = '';
  const scoreMap = {
    manager:  () => catScores('managerLevel'),
    expected: () => expectedScores(),
  };
  const tooltipMap = {
    manager:  () => catTooltips('managerLevel'),
    expected: () => expectedTooltips(),
  };
  const catClickFn = i => `navigateToSkillCategory('${escHtml(categories[i])}')`;
  renderOrder.forEach(layer => {
    const scores = scoreMap[layer]();
    const color = RADAR_COLORS[layer];
    const tips = tooltipMap[layer]?.() || [];
    shapesHTML += renderPoly(scores, color, fillOp, strokeW);
    dotsHTML += renderDots(scores, color, catClickFn, tips);
  });

  return `<svg viewBox="0 0 ${size} ${size}" overflow="visible" style="width:100%;height:auto;display:block">
    ${gridHTML}${axesHTML}${shapesHTML}${dotsHTML}${labelsHTML}
  </svg>`;
}

function renderRadarCardInner() {
  const layers = state.radarLayers || ['manager', 'expected'];
  const hasAssessments = getAssessedCount() > 0;
  return `
    <div class="radar-card-header">
      <div class="radar-card-title">Skills</div>
      <button class="section-link" onclick="navigate('review')">View all →</button>
    </div>
    ${!hasAssessments ? '<div class="radar-card-subtitle" style="margin-bottom:8px">Complete assessments to see your skill shape</div>' : ''}
    <div class="radar-chart-wrap" style="${!hasAssessments ? 'opacity:.35;filter:grayscale(1)' : ''}">
      ${renderRadarChart(290, layers)}
    </div>
    <div class="radar-toggle" style="justify-content:center;margin-top:10px">
      ${RADAR_LAYER_OPTIONS.map(opt => {
        const active = layers.includes(opt.id);
        const style = active
          ? `background:${opt.color};color:white;border-color:${opt.color};`
          : `--btn-hover-color:${opt.color};`;
        return `<button class="radar-toggle-btn${active ? ' active' : ''}" style="${style}" onclick="toggleRadarLayer('${opt.id}')">${escHtml(opt.label)}</button>`;
      }).join('')}
    </div>
  `;
}

function renderValuesRadarChart(size) {
  const cx = size / 2, cy = size / 2;
  const maxR = size / 2 - 36;
  const n = CORE_VALUES_DATA.length;
  const color = '#0891B2';

  function pt(i, r) {
    const angle = (2 * Math.PI * i / n) - Math.PI / 2;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  }

  const gridHTML = [0.2, 0.4, 0.6, 0.8, 1.0].map(lvl => {
    return `<circle cx="${cx}" cy="${cy}" r="${maxR * lvl}" fill="none" stroke="${lvl === 1 ? '#CBD5E1' : '#E2E8F0'}" stroke-width="${lvl === 1 ? 1.5 : 1}" stroke-dasharray="${lvl < 1 ? '3,3' : ''}"/>`;
  }).join('');

  const axesHTML = CORE_VALUES_DATA.map((_, i) => {
    const p = pt(i, maxR);
    return `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="#E2E8F0" stroke-width="1"/>`;
  }).join('');

  const scores = CORE_VALUES_DATA.map(cv => {
    const r = getValueRating(cv.id).managerRating;
    return r ? r / 5 : 0;
  });
  const hasAny = scores.some(s => s > 0);

  const pts = scores.map((s, i) => { const r = maxR * Math.max(s, 0.04); const p = pt(i, r); return `${p.x},${p.y}`; }).join(' ');
  const polyHTML = `<polygon points="${pts}" fill="${color}" fill-opacity="0.12" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>`;
  const dotsHTML = scores.map((s, i) => {
    const r = maxR * Math.max(s, 0.04); const p = pt(i, r);
    const cv = CORE_VALUES_DATA[i];
    const rating = getValueRating(cv.id).managerRating;
    const ratingLabel = rating ? (CV_RATING_CONFIG[rating]?.label || rating + '/5') : 'Not rated';
    const tipText = `${cv.label.split('.')[0].trim()}: ${ratingLabel}`;
    return `<circle cx="${p.x}" cy="${p.y}" r="6" fill="${color}" stroke="white" stroke-width="1.5" style="cursor:pointer" onclick="navigate('value','${cv.id}')" onmouseenter='showRadarTooltip(event,${JSON.stringify(tipText)})' onmouseleave='hideRadarTooltip()'/>`;
  }).join('');

  const labelsHTML = CORE_VALUES_DATA.map((cv, i) => {
    const angle = (2 * Math.PI * i / n) - Math.PI / 2;
    const sinA = Math.sin(angle), cosA = Math.cos(angle);
    const isTopBottom = Math.abs(sinA) > 0.7;
    const labelR = isTopBottom ? maxR + 16 : maxR;
    const lx = cx + labelR * cosA;
    const ly = cy + labelR * sinA + (isTopBottom ? 0 : 20);
    // Use first phrase only (up to first period) for compact chart label
    const chartLabel = cv.label.split('.')[0].replace(/,$/, '').trim();
    const pillW = Math.max(chartLabel.length * 5.5 + 14, 28);
    const pillH = 15;
    const pillX = (lx - pillW / 2).toFixed(1);
    const pillY = (ly - pillH / 2).toFixed(1);
    return `<g style="cursor:pointer" onclick="navigate('value','${cv.id}')">
      <rect x="${pillX}" y="${pillY}" width="${pillW.toFixed(1)}" height="${pillH}" rx="7" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="1"/>
      <text x="${lx.toFixed(1)}" y="${(ly + 3.5).toFixed(1)}" text-anchor="middle" fill="#334155" font-size="9" font-weight="600" font-family="-apple-system,BlinkMacSystemFont,'Inter','Segoe UI',sans-serif">${escHtml(chartLabel)}</text>
    </g>`;
  }).join('');

  return `<svg viewBox="0 0 ${size} ${size}" overflow="visible" style="width:100%;height:auto;display:block${!hasAny ? ';opacity:.35;filter:grayscale(1)' : ''}">
    ${gridHTML}${axesHTML}${polyHTML}${dotsHTML}${labelsHTML}
  </svg>`;
}

function renderValuesRadarCard() {
  const rated = CORE_VALUES_DATA.filter(cv => getValueRating(cv.id).managerRating);
  return `
    <div class="radar-card">
      <div class="radar-card-header">
        <div class="radar-card-title">Core Values</div>
        <button class="section-link" onclick="navigate('values')">View all →</button>
      </div>
      ${rated.length === 0 ? '<div class="radar-card-subtitle" style="margin-bottom:8px">Rate your core values to see your shape</div>' : ''}
      <div class="radar-chart-wrap" style="${rated.length === 0 ? 'opacity:.35;filter:grayscale(1)' : ''}">
        ${renderValuesRadarChart(290)}
      </div>
    </div>
  `;
}

// ============ NOTE CTA ============
function renderNoteInputCard() {
  return `<button class="note-cta-btn btn btn-primary" onclick="openNoteInput()">Log a Growth Update</button>`;
}

function openNoteInput() {
  state.noteInputOpen = true;
  state.notePreview = null;
  render();
  setTimeout(() => document.getElementById('note-modal-input')?.focus(), 50);
}

function closeNoteInput() {
  state.noteInputOpen = false;
  state.notePreview = null;
  state.noteText = '';
  state.noteAddSkillSearch = '';
  _noteModalImages = [];
  closeNoteAddSkillDropdown();
  render();
}

function submitNoteInput() {
  const el = document.getElementById('note-modal-input');
  const text = (el ? el.value : state.noteText).trim();
  if (!text) return;
  state.noteText = text;
  const matches = matchNoteToSkills(text);
  const cvSuggestions = suggestCoreValuesFromEvidence(text).map(cv => ({ ...cv, selected: true }));
  state.notePreview = { text, matches: matches.map(m => ({ ...m, selected: true })), cvMatches: cvSuggestions };
  render();
}

function backToNoteInput() {
  state.notePreview = null;
  state.noteAddSkillSearch = '';
  closeNoteAddSkillDropdown();
  render();
  setTimeout(() => document.getElementById('note-modal-input')?.focus(), 50);
}

function closeNotePreview() {
  state.notePreview = null;
  state.noteAddSkillSearch = '';
  state.noteAddSkillOpen = false;
  render();
}

function toggleNoteSkill(idx) {
  if (!state.notePreview) return;
  state.notePreview.matches[idx].selected = !state.notePreview.matches[idx].selected;
  render();
}
function toggleNoteCv(idx) {
  if (!state.notePreview) return;
  state.notePreview.cvMatches[idx].selected = !state.notePreview.cvMatches[idx].selected;
  render();
}

function addSkillToNote(skillId) {
  if (!state.notePreview) return;
  closeNoteAddSkillDropdown();
  state.noteAddSkillSearch = '';
  const inp = document.getElementById('note-add-skill-input');
  if (inp) inp.value = '';
  if (state.notePreview.matches.some(m => m.skillId === skillId)) return;
  const skill = getSkillById(skillId);
  if (!skill) return;
  state.notePreview.matches.push({ skillId: skill.id, skillName: skill.name, category: skill.category, matched: ['manual'], score: 0, selected: true });
  render();
}

let _noteModalImages = [];

function handleNoteModalImageUpload(input) {
  const files = Array.from(input.files);
  files.forEach(file => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      _noteModalImages.push({ id: 'img_' + Date.now() + '_' + Math.random().toString(36).slice(2), dataUrl: e.target.result, name: file.name });
      renderNoteModalImageGrid();
    };
    reader.readAsDataURL(file);
  });
  input.value = '';
}

function removeNoteModalImage(id) {
  _noteModalImages = _noteModalImages.filter(img => img.id !== id);
  renderNoteModalImageGrid();
}

function renderNoteModalImageGrid() {
  const container = document.getElementById('note-modal-image-grid');
  if (!container) return;
  container.innerHTML = _noteModalImages.length === 0 ? '' : `
    <div class="notes-image-grid" style="margin-top:8px">
      ${_noteModalImages.map(img => `
        <div class="notes-image-thumb">
          <img src="${img.dataUrl}" alt="${escHtml(img.name)}" onclick="openNoteModalLightbox('${img.id}')" />
          <button class="notes-image-remove" onclick="removeNoteModalImage('${img.id}')">✕</button>
        </div>`).join('')}
    </div>`;
}

function openNoteModalLightbox(id) {
  const img = _noteModalImages.find(i => i.id === id);
  if (!img) return;
  const lb = document.createElement('div');
  lb.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:zoom-out';
  lb.onclick = () => lb.remove();
  lb.innerHTML = `<img src="${img.dataUrl}" style="max-width:90vw;max-height:90vh;border-radius:8px;box-shadow:0 24px 64px rgba(0,0,0,.6)" />`;
  document.body.appendChild(lb);
}

function saveNotePreview() {
  if (!state.notePreview) return;
  const { text, matches, cvMatches = [] } = state.notePreview;
  const selected = matches.filter(m => m.selected);
  if (selected.length === 0 && cvMatches.filter(c => c.selected).length === 0) return;
  const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const noteEntry = `[${date}] ${text}`;
  selected.forEach(m => {
    const existing = getAssessment(m.skillId);
    const newEvidence = existing.evidence ? `${existing.evidence}\n\n${noteEntry}` : noteEntry;
    const newImages = [...(existing.evidenceImages || []), ..._noteModalImages];
    saveAssessment(m.skillId, { ...existing, evidence: newEvidence, evidenceImages: newImages });
  });
  cvMatches.filter(c => c.selected).forEach(cv => {
    const v = getValueRating(cv.id);
    v.notes = v.notes ? v.notes + '\n\n' + noteEntry : noteEntry;
    saveValueRating(cv.id, v);
  });
  _noteModalImages = [];
  state.noteSuccess = { skillNames: selected.map(m => m.skillName), skillIds: selected.map(m => m.skillId) };
  state.noteInputOpen = false;
  state.notePreview = null;
  state.noteText = '';
  state.noteAddSkillSearch = '';
  state.noteAddSkillOpen = false;
  closeNoteAddSkillDropdown();
  render();
  setTimeout(() => { state.noteSuccess = null; render(); }, 6000);
}

function renderNoteInputModal() {
  if (!state.noteInputOpen) return '';
  const isPreview = !!state.notePreview;
  const { text = '', matches = [], cvMatches = [] } = state.notePreview || {};
  const selectedCount = matches.filter(m => m.selected).length;
  const selectedCvCount = cvMatches.filter(c => c.selected).length;
  const totalSelected = selectedCount + selectedCvCount;

  const writeStep = `
    <div class="insight-modal-body">
      <textarea
        class="note-cta-textarea"
        id="note-modal-input"
        placeholder="e.g. I just led my first design review and got great feedback from the PM — he said it was the best one he'd ever been in."
        oninput="state.noteText = this.value"
      >${escHtml(state.noteText)}</textarea>
      <div id="note-modal-image-grid"></div>
      <label class="notes-upload-zone" style="margin-top:8px">
        <input type="file" accept="image/*" multiple style="display:none" onchange="handleNoteModalImageUpload(this)" />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        <span>Upload image</span>
      </label>
      <p style="font-size:11.5px;color:var(--text-muted);margin:0;line-height:1.5">We'll analyze your note and suggest which skills to update. You can review before saving.</p>
    </div>
    <div class="note-preview-footer">
      <button class="btn btn-secondary" onclick="closeNoteInput()">Cancel</button>
      <button class="btn btn-primary" onclick="submitNoteInput()">Analyze & Preview →</button>
    </div>
  `;

  const previewStep = `
    <div class="insight-modal-body">
      <div class="insight-section">
        <div class="insight-section-label">📝 Your note</div>
        <div class="note-preview-text">${escHtml(text)}</div>
      </div>
      <div class="insight-section">
        <div class="insight-section-label">🎯 Skills to update — select or deselect</div>
        ${matches.length === 0 ? `
          <div style="text-align:center;padding:16px 0;color:var(--text-muted);font-size:13px">
            <div style="font-size:24px;margin-bottom:8px">🤔</div>
            No skills matched. Search below to add skills manually.
          </div>
        ` : `
          <div class="note-skills-list">
            ${matches.map((m, idx) => {
              const cc = CATEGORY_CONFIG[m.category] || { color: '#6366F1', bg: '#EEF2FF' };
              return `
                <button class="note-skill-row ${m.selected ? 'selected' : ''}" onclick="toggleNoteSkill(${idx})">
                  <div class="note-skill-check">
                    ${m.selected ? '<svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' : ''}
                  </div>
                  <div class="note-skill-info">
                    <div class="note-skill-name">${escHtml(m.skillName)}</div>
                    <span class="note-skill-cat" style="background:${cc.bg};color:${cc.color}">${escHtml(m.category)}</span>
                  </div>
                  <div class="note-skill-field">→ Evidence</div>
                </button>
              `;
            }).join('')}
          </div>
        `}
      </div>
      ${cvMatches.length > 0 ? `
      <div class="insight-section">
        <div class="insight-section-label">⭐ Core values demonstrated — select or deselect</div>
        <div class="note-skills-list">
          ${cvMatches.map((cv, idx) => `
            <button class="note-skill-row ${cv.selected ? 'selected' : ''}" onclick="toggleNoteCv(${idx})">
              <div class="note-skill-check">
                ${cv.selected ? '<svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' : ''}
              </div>
              <div class="note-skill-info">
                <div class="note-skill-name">${escHtml(cv.label)}</div>
                <span class="note-skill-cat" style="background:${cv.bg};color:${cv.color}">Core Value</span>
              </div>
              <div class="note-skill-field">→ Notes</div>
            </button>
          `).join('')}
        </div>
      </div>
      ` : ''}
      <div class="insight-section">
        <div class="insight-section-label">➕ Add a skill or core value</div>
        <div class="note-add-skill-wrapper" id="note-add-skill-wrapper">
          <input
            type="text"
            class="note-add-skill-input"
            id="note-add-skill-input"
            placeholder="Search all skills…"
            value="${escHtml(state.noteAddSkillSearch)}"
            oninput="state.noteAddSkillSearch = this.value; paintNoteAddSkillDropdown()"
            onclick="paintNoteAddSkillDropdown()"
            onblur="setTimeout(closeNoteAddSkillDropdown, 150)"
            autocomplete="off"
          />
        </div>
      </div>
    </div>
    <div class="note-preview-footer">
      <button class="btn btn-secondary note-back-btn" onclick="backToNoteInput()">← Edit note</button>
      <div style="display:flex;gap:8px">
        <button class="btn btn-secondary" onclick="closeNoteInput()">Cancel</button>
        ${totalSelected > 0 ? `<button class="btn btn-primary" onclick="saveNotePreview()">Save${selectedCount > 0 ? ` to ${selectedCount} skill${selectedCount !== 1 ? 's' : ''}` : ''}${selectedCount > 0 && selectedCvCount > 0 ? ' +' : ''}${selectedCvCount > 0 ? ` ${selectedCvCount} value${selectedCvCount !== 1 ? 's' : ''}` : ''}</button>` : ''}
      </div>
    </div>
  `;

  return `
    <div class="insight-modal-overlay" onclick="if(event.target===this)closeNoteInput()">
      <div class="insight-modal note-input-modal">
        <div class="insight-modal-header">
          <div style="flex:1;min-width:0">
            <div class="insight-modal-title">${isPreview ? 'Review & save your note' : 'What did you work on or get feedback about?'}</div>
          </div>
          <button class="insight-modal-close" onclick="closeNoteInput()">✕</button>
        </div>
        ${isPreview ? previewStep : writeStep}
      </div>
    </div>
  `;
}

function addCvToNote(cvId) {
  if (!state.notePreview) return;
  closeNoteAddSkillDropdown();
  state.noteAddSkillSearch = '';
  const inp = document.getElementById('note-add-skill-input');
  if (inp) inp.value = '';
  if (!state.notePreview.cvMatches) state.notePreview.cvMatches = [];
  if (state.notePreview.cvMatches.some(c => c.id === cvId)) return;
  const cv = CORE_VALUES_DATA.find(c => c.id === cvId);
  if (!cv) return;
  state.notePreview.cvMatches.push({ ...cv, selected: true });
  render();
}

function paintNoteAddSkillDropdown() {
  const inp = document.getElementById('note-add-skill-input');
  if (!inp) return;
  const old = document.getElementById('note-add-skill-dropdown');
  if (old) old.remove();
  const existingSkillIds = new Set((state.notePreview?.matches || []).map(m => m.skillId));
  const existingCvIds = new Set((state.notePreview?.cvMatches || []).map(c => c.id));
  const search = state.noteAddSkillSearch.toLowerCase();
  const filteredSkills = SKILLS_DATA.skills
    .filter(s => !existingSkillIds.has(s.id) && (!search || s.name.toLowerCase().includes(search) || s.category.toLowerCase().includes(search)))
    .slice(0, 6);
  const filteredCvs = CORE_VALUES_DATA
    .filter(cv => !existingCvIds.has(cv.id) && (!search || cv.label.toLowerCase().includes(search)))
    .slice(0, 4);
  const rect = inp.getBoundingClientRect();
  const dd = document.createElement('div');
  dd.className = 'note-add-skill-dropdown';
  dd.id = 'note-add-skill-dropdown';
  dd.style.cssText = `position:fixed;top:${rect.bottom + 4}px;left:${rect.left}px;width:${rect.width}px;`;
  if (filteredSkills.length === 0 && filteredCvs.length === 0) {
    dd.innerHTML = `<div style="padding:12px;font-size:13px;color:var(--text-muted);text-align:center">No matches found</div>`;
  } else {
    const skillRows = filteredSkills.map(s => {
      const cc = CATEGORY_CONFIG[s.category] || { color: '#6366F1', bg: '#EEF2FF' };
      return `<button class="note-add-skill-item" onmousedown="addSkillToNote('${s.id}')"><span class="note-add-skill-item-name">${escHtml(s.name)}</span><span class="note-skill-cat" style="background:${cc.bg};color:${cc.color};flex-shrink:0">${escHtml(s.category)}</span></button>`;
    }).join('');
    const cvRows = filteredCvs.map(cv =>
      `<button class="note-add-skill-item" onmousedown="addCvToNote('${cv.id}')"><span class="note-add-skill-item-name">${escHtml(cv.label)}</span><span class="note-skill-cat" style="background:${cv.bg};color:${cv.color};flex-shrink:0">Core Value</span></button>`
    ).join('');
    const divider = filteredSkills.length > 0 && filteredCvs.length > 0
      ? `<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);padding:8px 12px 4px">Core Values</div>`
      : '';
    dd.innerHTML = skillRows + divider + cvRows;
  }
  document.body.appendChild(dd);
}

function closeNoteAddSkillDropdown() {
  const dd = document.getElementById('note-add-skill-dropdown');
  if (dd) dd.remove();
  state.noteAddSkillOpen = false;
}

function renderNoteSuccessToast() {
  if (!state.noteSuccess) return '';
  const { skillNames, skillIds } = state.noteSuccess;
  const chips = skillNames.map((name, i) =>
    `<button class="note-success-skill-chip" onclick="state.noteSuccess=null;navigate('skill','${skillIds[i]}')">${escHtml(name)}</button>`
  ).join('');
  return `
    <div class="note-success-toast">
      <span style="font-size:20px;flex-shrink:0">✅</span>
      <div style="flex:1;min-width:0">
        <div class="note-success-title">Note saved!</div>
        <div class="note-success-chips">${chips}</div>
      </div>
      <button class="insight-modal-close" onclick="state.noteSuccess=null;render()" style="margin-top:0">✕</button>
    </div>
  `;
}

// ============ MANAGER DASHBOARD ============
function renderManagerHome() {
  const profiles = getProfiles();
  const totalSkills = SKILLS_DATA.skills.length;

  // Build per-member stats
  const memberStats = profiles.map(p => {
    const d = getDataForProfile(p.id);
    const assessments = d.assessments || {};
    const assessed = Object.values(assessments).filter(a => a.managerLevel).length;
    const pct = totalSkills > 0 ? Math.round((assessed / totalSkills) * 100) : 0;

    // Gaps + overperforming
    let gaps = 0, over = 0;
    if (p.role) {
      SKILLS_DATA.skills.forEach(s => {
        const a = assessments[s.id];
        if (!a?.managerLevel) return;
        const exp = getExpectedLevelForSkillAndRole(s.id, p.role);
        if (!exp) return;
        const diff = getLevelOrder(a.managerLevel) - getLevelOrder(exp);
        if (diff < 0) gaps++;
        else if (diff > 0) over++;
      });
    }

    // Top gap skill
    let topGap = null;
    if (p.role) {
      const gapSkills = SKILLS_DATA.skills.filter(s => {
        const a = assessments[s.id];
        if (!a?.managerLevel) return false;
        const exp = getExpectedLevelForSkillAndRole(s.id, p.role);
        return exp && getLevelOrder(a.managerLevel) < getLevelOrder(exp);
      }).sort((a, b) => {
        const da = getLevelOrder(getExpectedLevelForSkillAndRole(a.id, p.role)) - getLevelOrder((assessments[a.id]||{}).managerLevel);
        const db = getLevelOrder(getExpectedLevelForSkillAndRole(b.id, p.role)) - getLevelOrder((assessments[b.id]||{}).managerLevel);
        return db - da;
      });
      topGap = gapSkills[0]?.name || null;
    }

    // Most recent update
    const lastUpdated = Object.values(assessments)
      .map(a => a.lastUpdated).filter(Boolean).sort().reverse()[0] || null;

    return { p, assessed, pct, gaps, over, topGap, lastUpdated };
  });

  // Team-wide aggregated skill gaps
  const skillGapCounts = {};
  profiles.forEach(p => {
    if (!p.role) return;
    const assessments = getDataForProfile(p.id).assessments || {};
    SKILLS_DATA.skills.forEach(s => {
      const a = assessments[s.id];
      if (!a?.managerLevel) return;
      const exp = getExpectedLevelForSkillAndRole(s.id, p.role);
      if (exp && getLevelOrder(a.managerLevel) < getLevelOrder(exp)) {
        skillGapCounts[s.id] = (skillGapCounts[s.id] || 0) + 1;
      }
    });
  });
  const topTeamGaps = Object.entries(skillGapCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id, count]) => ({ skill: SKILLS_DATA.skills.find(s => s.id === id), count }))
    .filter(x => x.skill);

  const totalAssessed = memberStats.reduce((s, m) => s + m.assessed, 0);
  const totalPossible = profiles.length * totalSkills;
  const totalGaps = memberStats.reduce((s, m) => s + m.gaps, 0);
  const avgPct = profiles.length > 0 ? Math.round(memberStats.reduce((s, m) => s + m.pct, 0) / profiles.length) : 0;

  return `
    <div class="home-header">
      <div class="home-header-text">
        <h1>Team Overview</h1>
        <p>${profiles.length} team member${profiles.length !== 1 ? 's' : ''} · ${avgPct}% assessed across the team</p>
      </div>
      <button class="btn btn-secondary btn-sm" onclick="manageTeam()" style="align-self:center">Manage Team</button>
    </div>

    <!-- SUMMARY TILES -->
    <div class="analysis-counts-row" style="margin-bottom:24px">
      <div class="analysis-count-chip" style="cursor:default">
        <span class="analysis-count-num">${profiles.length}</span>
        <span class="analysis-count-label">team members</span>
      </div>
      <div class="analysis-count-chip analysis-count-gap" style="cursor:default">
        <span class="analysis-count-num">${totalGaps}</span>
        <span class="analysis-count-label">total skill gaps</span>
      </div>
      <div class="analysis-count-chip analysis-count-over" style="cursor:default">
        <span class="analysis-count-num">${avgPct}%</span>
        <span class="analysis-count-label">avg assessed</span>
      </div>
    </div>

    <div class="dashboard-top-grid">
      <!-- LEFT: member cards -->
      <div>
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin-bottom:12px">Team Members</div>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${memberStats.map(({ p, assessed, pct, gaps, over, topGap, lastUpdated }) => `
            <div onclick="selectProfile('${p.id}')" style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;cursor:pointer;transition:border-color .15s,box-shadow .15s;display:flex;flex-direction:column;gap:10px"
              onmouseover="this.style.borderColor='var(--primary)';this.style.boxShadow='0 0 0 3px var(--primary-light)'"
              onmouseout="this.style.borderColor='var(--border)';this.style.boxShadow='none'">
              <div style="display:flex;align-items:center;gap:10px">
                ${avatarHtml(p, 36, 13)}
                <div style="flex:1;min-width:0">
                  <div style="font-size:13px;font-weight:700;color:var(--text)">${escHtml(p.name)}</div>
                  <div style="font-size:11px;color:var(--text-muted)">${escHtml(shortRole(p.role) || 'No role')}</div>
                </div>
                <div style="text-align:right;flex-shrink:0">
                  <div style="font-size:16px;font-weight:800;color:var(--primary);line-height:1">${pct}%</div>
                  <div style="font-size:10px;color:var(--text-muted)">assessed</div>
                </div>
              </div>
              <div style="height:5px;background:var(--border);border-radius:99px;overflow:hidden">
                <div style="height:100%;width:${pct}%;background:var(--primary);border-radius:99px;transition:width .4s"></div>
              </div>
              <div style="display:flex;gap:16px">
                ${gaps > 0 ? `<span style="font-size:11px;color:#B45309;font-weight:600">${gaps} gap${gaps !== 1 ? 's' : ''}</span>` : ''}
                ${over > 0 ? `<span style="font-size:11px;color:var(--green);font-weight:600">${over} overperforming</span>` : ''}
                ${topGap ? `<span style="font-size:11px;color:var(--text-muted)">Top gap: ${escHtml(topGap)}</span>` : ''}
                ${lastUpdated ? `<span style="font-size:11px;color:var(--text-muted);margin-left:auto">Updated ${formatDate(lastUpdated)}</span>` : ''}
              </div>
            </div>
          `).join('')}
          ${profiles.length === 0 ? `<div style="text-align:center;color:var(--text-muted);font-size:13px;padding:32px 0">No team members yet.<br><button onclick="manageTeam()" style="color:var(--primary);background:none;border:none;cursor:pointer;font-weight:600;font-size:13px;margin-top:8px">+ Add team members</button></div>` : ''}
        </div>
      </div>

      <!-- RIGHT: team skill gaps -->
      <div class="dashboard-stats-col">
        <div class="analysis-card">
          <div class="analysis-card-header">
            <div class="analysis-card-title">Team Skill Gaps</div>
            <div style="font-size:11px;color:var(--text-muted)">Most common gaps across team</div>
          </div>
          ${topTeamGaps.length === 0 ? `
            <div class="analysis-empty">
              <div style="font-size:28px;margin-bottom:8px">✅</div>
              <div style="font-size:13px;font-weight:600;color:var(--text-secondary);margin-bottom:4px">No gaps found</div>
              <div style="font-size:12px;color:var(--text-muted)">Assess more skills to surface gaps</div>
            </div>
          ` : `
            <div style="display:flex;flex-direction:column;gap:0">
              ${topTeamGaps.map(({ skill, count }, i) => `
                <div style="display:flex;align-items:center;gap:12px;padding:10px 0;${i > 0 ? 'border-top:1px solid var(--border)' : ''}">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:2px">${escHtml(skill.name)}</div>
                    <div style="font-size:11px;color:var(--text-muted)">${escHtml(skill.category)}</div>
                  </div>
                  <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
                    <div style="display:flex;gap:3px">
                      ${Array.from({length: profiles.length}).map((_, i) => `
                        <div style="width:8px;height:8px;border-radius:50%;background:${i < count ? '#EF4444' : 'var(--border)'}"></div>
                      `).join('')}
                    </div>
                    <span style="font-size:12px;font-weight:700;color:#B45309">${count}/${profiles.length}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- Quick view: who needs attention -->
        ${memberStats.some(m => m.gaps > 0) ? `
          <div class="analysis-card" style="margin-top:16px">
            <div class="analysis-card-header">
              <div class="analysis-card-title">Needs Attention</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:0">
              ${memberStats.filter(m => m.gaps > 0).sort((a,b) => b.gaps - a.gaps).map(({ p, gaps, topGap }, i, arr) => `
                <div onclick="selectProfile('${p.id}')" style="display:flex;align-items:center;gap:10px;padding:9px 0;cursor:pointer;${i > 0 ? 'border-top:1px solid var(--border)' : ''}"
                  onmouseover="this.querySelector('.attn-name').style.color='var(--primary)'"
                  onmouseout="this.querySelector('.attn-name').style.color='var(--text)'">
                  ${avatarHtml(p, 28, 10)}
                  <div style="flex:1;min-width:0">
                    <div class="attn-name" style="font-size:13px;font-weight:600;color:var(--text);transition:color .15s">${escHtml(p.name)}</div>
                    ${topGap ? `<div style="font-size:11px;color:var(--text-muted)">Top gap: ${escHtml(topGap)}</div>` : ''}
                  </div>
                  <span style="font-size:12px;font-weight:700;color:#B45309;flex-shrink:0">${gaps} gap${gaps !== 1 ? 's' : ''}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function renderHome() {
  const d = getData();
  const totalSkills = SKILLS_DATA.skills.length;
  const assessedCount = getAssessedCount();
  const assessments = d.assessments;
  const profiles = getProfiles();
  const currentProfile = profiles.find(p => p.id === state.profile);
  const categories = getCategories();

  const catProgress = categories.map(cat => {
    const catSkills = SKILLS_DATA.skills.filter(s => s.category === cat);
    const catAssessed = catSkills.filter(s => assessments[s.id]?.managerLevel).length;
    return { cat, total: catSkills.length, assessed: catAssessed };
  });

  const levelsCount = { Learner: 0, Contributor: 0, Independent: 0, Expert: 0 };
  Object.values(assessments).forEach(a => { if (a.managerLevel && levelsCount[a.managerLevel] !== undefined) levelsCount[a.managerLevel]++; });
  const atTargetOrAbove = Object.values(assessments).filter(a => getLevelOrder(a.managerLevel) >= 3).length;

  const roleInfo = currentProfile?.role ? `
    <div style="display:inline-flex;align-items:center;gap:8px;background:var(--primary-light);border:1px solid rgba(99,102,241,.2);border-radius:20px;padding:4px 12px;font-size:12px;font-weight:600;color:var(--primary);margin-top:8px">
      <span>🎯</span><span>${escHtml(shortRole(currentProfile.role))}</span>
    </div>
  ` : `
    <div style="margin-top:8px">
      <button class="btn btn-secondary btn-sm" onclick="manageTeam()" style="font-size:11px">+ Assign a role</button>
    </div>
  `;

  const hasAssessments = assessedCount > 0;

  // === SKILL INSIGHTS ANALYSIS ===
  const assessedSkills = SKILLS_DATA.skills.filter(s => assessments[s.id]?.managerLevel);
  const skillsWithManager = assessedSkills;

  const allGaps = currentProfile?.role ? skillsWithManager.filter(s => {
    const exp = getExpectedLevelForSkill(s.id);
    return exp && getLevelOrder(assessments[s.id].managerLevel) < getLevelOrder(exp);
  }) : [];

  const allOverperforming = currentProfile?.role ? skillsWithManager.filter(s => {
    const exp = getExpectedLevelForSkill(s.id);
    return exp && getLevelOrder(assessments[s.id].managerLevel) > getLevelOrder(exp);
  }) : [];

  const growthAreas = (currentProfile?.role
    ? allGaps
    : assessedSkills.filter(s => assessments[s.id].managerLevel === 'Learner')
  ).slice().sort((a, b) => {
    const gapOf = s => {
      const exp = getExpectedLevelForSkill(s.id);
      return exp ? Math.max(getLevelOrder(exp) - getLevelOrder(assessments[s.id].managerLevel), 0) : 0;
    };
    return gapOf(b) - gapOf(a);
  }).slice(0, 5);

  // Category averages for persona + narrative
  const _catScores = {}, _catCounts = {};
  for (const s of assessedSkills) {
    const order = getLevelOrder(assessments[s.id].managerLevel);
    _catScores[s.category] = (_catScores[s.category] || 0) + order;
    _catCounts[s.category] = (_catCounts[s.category] || 0) + 1;
  }
  const catAvgList = Object.keys(_catScores)
    .map(cat => ({ cat, avg: _catScores[cat] / _catCounts[cat], count: _catCounts[cat] }))
    .sort((a, b) => b.avg - a.avg);
  const topCat = catAvgList[0];
  const expertCount = assessedSkills.filter(s => assessments[s.id].managerLevel === 'Expert').length;
  const gapRatio = assessedSkills.length > 0 ? allGaps.length / assessedSkills.length : 0;

  // Persona
  let persona = null;
  if (assessedSkills.length >= 4 && topCat) {
    const t = topCat.cat;
    if (gapRatio > 0.5) {
      persona = { label: 'The Hungry Climber', emoji: '🧗', desc: 'Ambitious and eager — lots of runway ahead' };
    } else if (allOverperforming.length > 0 && allOverperforming.length >= allGaps.length && topCat.avg >= 3) {
      persona = { label: 'The Overachiever', emoji: '🚀', desc: 'Consistently punching above the role bar' };
    } else if (t === 'Design Skills' && expertCount >= 2) {
      persona = { label: 'The Craft Purist', emoji: '🎯', desc: 'Deep expertise in the design fundamentals' };
    } else if (t === 'Design Skills') {
      persona = { label: 'The Design Craftsperson', emoji: '✏️', desc: 'Grounded in solid, reliable execution' };
    } else if (t === 'Influence') {
      persona = { label: 'The Strategic Voice', emoji: '💡', desc: 'Shapes direction and moves rooms' };
    } else if (t === 'Collaboration') {
      persona = { label: 'The Force Multiplier', emoji: '🤝', desc: 'Makes every team around them better' };
    } else if (t === 'Project Management') {
      persona = { label: 'The Steady Hand', emoji: '🧭', desc: 'Reliable, organized, always delivering' };
    } else {
      persona = { label: 'The Well-Rounded Designer', emoji: '⭐', desc: 'Balanced across the full design spectrum' };
    }
  }

  // Natural language insight bullets — EOY review insights lead, skill-based as fallback
  const insightBullets = [];

  // EOY Performance Review — thematic cross-referenced insights (surfaced first, only for the profile the review belongs to)
  const profileFirstName = (currentProfile?.name || '').split(' ')[0].toLowerCase();
  const eoyReview = EOY_REVIEWS[profileFirstName] || null;
  if (eoyReview && assessedSkills.length >= 4) {
    const allEoyCats = EOY_CATEGORY_GROUPS.flatMap(g => g.categories);
    const mgrR = eoyReview.manager.ratings;
    const selfR = eoyReview.self.ratings;
    const mgrName = eoyReview.manager.name;

    // Theme 1: Cross-reference review standouts with top skill category
    const outstandingByMgr = allEoyCats.filter(cat => mgrR[cat.id] === 5);
    if (outstandingByMgr.length > 0 && topCat) {
      const reviewLabels = outstandingByMgr.map(c => c.label).join(' and ');
      const skillAligned = topCat.cat === 'Collaboration' && outstandingByMgr.some(c => ['we_care','engagement'].includes(c.id));
      if (skillAligned) {
        insightBullets.push(`People leadership is your most confirmed strength — ${mgrName} rated ${reviewLabels} Truly Outstanding, and Collaboration leads your skill categories. Two independent sources pointing the same direction.`);
      } else {
        insightBullets.push(`Standout confirmed — ${mgrName} rated ${reviewLabels} Truly Outstanding, aligning with your top skill area.`);
      }
    }

    // Theme 2: Perception gap where self > manager in key areas
    const perceptionGaps = allEoyCats.filter(cat =>
      selfR[cat.id] - mgrR[cat.id] >= 1 && ['team_performance','feedback_coaching','we_deliver'].includes(cat.id)
    );
    if (perceptionGaps.length >= 2) {
      insightBullets.push(`Perception gap to close — you rate ${perceptionGaps.map(c => c.label).join(', ')} higher than ${mgrName} does. This is a signal to make your impact more visible, or to have a direct conversation about where expectations differ.`);
    }

    // Theme 3: User advocacy as growth edge
    if (eoyReview.manager.improvements.some(i => /user|merchant|customer|empathy/i.test(i.headline))) {
      insightBullets.push(`Strategic growth edge — ${mgrName} calls out a tendency to weigh aesthetics and feasibility over user advocacy. At the manager level, pushing harder for the user when PM or engineering pressure mounts is the mark of the next tier.`);
    }

    // Theme 4: Speed as a shared, high-signal priority
    const selfSpeed = eoyReview.self.improvements.some(i => /speed|faster|velocity|cycle/i.test(i.headline));
    const mgrSpeed = eoyReview.manager.improvements.some(i => /decisiv|speed|urgency|faster|turnaround/i.test(i.headline));
    if (selfSpeed && mgrSpeed) {
      insightBullets.push(`High-signal priority — speed and decisiveness appear in both your self-assessment and ${mgrName}'s feedback independently. When two sources flag the same theme without coordination, it earns the top of your focus list.`);
    }
  }

  // Skill-based bullets — used as fallback or to pad if no review data
  // Fill up to at least 3 bullets with skill-based insights
  if (assessedSkills.length >= 4 && topCat) {
    // Bullet: top category strength
    if (insightBullets.length < 3) {
      const topCatStrong = assessedSkills
        .filter(s => s.category === topCat.cat && ['Expert', 'Independent'].includes(assessments[s.id].managerLevel))
        .slice(0, 2);
      if (topCat.avg >= 3 && topCatStrong.length > 0) {
        insightBullets.push(`Strongest in ${topCat.cat} — ${topCatStrong.map(s => s.name).join(' and ')} stand out.`);
      } else if (topCat.avg >= 2.5) {
        insightBullets.push(`${topCat.cat} is the most consistent area, performing solidly across the board.`);
      } else {
        insightBullets.push(`Still building depth overall — ${topCat.cat} shows the most progress so far.`);
      }
    }

    // Bullet: gap or overperforming summary
    if (insightBullets.length < 3 && currentProfile?.role) {
      if (allGaps.length > 0) {
        const gapCats = {};
        allGaps.forEach(s => { gapCats[s.category] = (gapCats[s.category] || 0) + 1; });
        const [topGapCat, topGapCount] = Object.entries(gapCats).sort((a, b) => b[1] - a[1])[0];
        if (topGapCount >= 3) {
          insightBullets.push(`${topGapCat} is the main gap area — ${topGapCount} skills below the ${shortRole(currentProfile.role)} bar.`);
        } else {
          insightBullets.push(`${allGaps.length} skill${allGaps.length !== 1 ? 's' : ''} below role expectations — spread across categories rather than one weak spot.`);
        }
      } else if (allOverperforming.length >= 2) {
        insightBullets.push(`Exceeding the ${shortRole(currentProfile.role)} bar in ${allOverperforming.length} skills — ready for stretch assignments.`);
      } else {
        insightBullets.push(`On track with ${shortRole(currentProfile.role)} expectations — no major gaps showing.`);
      }
    }

    // Bullet: category breadth / weakest category
    if (insightBullets.length < 3) {
      const catAvgs = catProgress.map(({ cat }) => {
        const catSkills = assessedSkills.filter(s => s.category === cat);
        if (catSkills.length === 0) return null;
        const avg = catSkills.reduce((sum, s) => sum + getLevelOrder(assessments[s.id].managerLevel), 0) / catSkills.length;
        return { cat, avg };
      }).filter(Boolean).sort((a, b) => a.avg - b.avg);
      const weakestCat = catAvgs[0];
      const strongestCat = catAvgs[catAvgs.length - 1];
      if (weakestCat && strongestCat && weakestCat.cat !== topCat.cat) {
        insightBullets.push(`Biggest growth opportunity is in ${weakestCat.cat} — this is where focused effort will have the most impact.`);
      } else if (strongestCat) {
        insightBullets.push(`Skills are broadly developed across all four categories — ${strongestCat.cat} leads the way.`);
      }
    }

    // Bullet: specific high or low skill callout as final fallback
    if (insightBullets.length < 3) {
      const topSkill = assessedSkills
        .filter(s => assessments[s.id].managerLevel === 'Expert')
        .slice(0, 1)[0];
      const lowSkill = assessedSkills
        .filter(s => assessments[s.id].managerLevel === 'Learner')
        .slice(0, 1)[0];
      if (topSkill) {
        insightBullets.push(`${topSkill.name} is a standout strength — already at Expert level.`);
      } else if (lowSkill) {
        insightBullets.push(`${lowSkill.name} is the earliest-stage skill — a natural focus area for development.`);
      } else {
        insightBullets.push(`${assessedSkills.length} of ${SKILLS_DATA.skills.length} skills assessed — keep going to sharpen the picture.`);
      }
    }
  }

  // Cap at 4
  insightBullets.splice(4);

  return `
    <div class="home-header">
      <div class="home-header-text">
        <h1>Welcome back, ${escHtml((currentProfile?.name || 'Designer').split(' ')[0])}${currentProfile?.role ? ` <span style="font-size:13px;font-weight:600;color:var(--primary);background:var(--primary-light);border:1px solid rgba(99,102,241,.2);border-radius:20px;padding:4px 8px;vertical-align:middle;position:relative;top:-2px;margin-left:16px">${escHtml(shortRole(currentProfile.role))}</span>` : ''}</h1>
        <p>Track your design skill growth and prepare for your next performance review.</p>
      </div>
      ${renderNoteInputCard()}
    </div>

    <!-- DASHBOARD GRID: 2/3 left + 1/3 right -->
    <div style="display:grid;grid-template-columns:2fr 1fr;gap:16px;align-items:start">

      <!-- LEFT COL (2/3): Insights + Charts -->
      <div style="display:flex;flex-direction:column;gap:16px;min-width:0">

        <!-- Metric tiles -->
        ${hasAssessments && currentProfile?.role ? `
          <div class="analysis-counts-row">
            <button class="analysis-count-chip analysis-count-gap" onclick="navigate('review');setReviewFilter('gap')">
              <span class="analysis-count-label">skill gap${allGaps.length !== 1 ? 's' : ''}</span>
              <span class="analysis-count-num">${allGaps.length}</span>
            </button>
            <button class="analysis-count-chip analysis-count-over" onclick="navigate('review');setReviewFilter('strength')">
              <span class="analysis-count-label">overperforming</span>
              <span class="analysis-count-num">${allOverperforming.length}</span>
            </button>
            ${(() => {
              const _firstName = (currentProfile?.name || '').split(' ')[0].toLowerCase();
              const er = EOY_REVIEWS[_firstName] || null;
              if (!er) return '';
              const vals = Object.values(er.manager.ratings);
              const avgNum = vals.reduce((a, b) => a + b, 0) / vals.length;
              const avg = avgNum.toFixed(1);
              const fullStars = Math.round(avgNum);
              const stars = Array.from({length: 5}, (_, i) =>
                `<span style="color:${i < fullStars ? '#F59E0B' : '#CBD5E1'};font-size:11px;line-height:1">★</span>`
              ).join('');
              return `<button class="analysis-count-chip analysis-count-review" onclick="navigate('eoy')">
                <span class="analysis-count-label">Review Score</span>
                <span class="analysis-count-num">${avg}</span>
                <div style="display:flex;gap:1px;margin-top:2px">${stars}</div>
              </button>`;
            })()}
          </div>
        ` : ''}

        <!-- Skill Insights -->
        <div class="analysis-card">
          <div class="analysis-card-header">
            <div class="analysis-card-title">Skill Insights</div>
          </div>
          ${!hasAssessments ? `
            <div class="analysis-empty">
              <div style="font-size:28px;margin-bottom:8px">📊</div>
              <div style="font-size:13px;font-weight:600;color:var(--text-secondary);margin-bottom:4px">No assessments yet</div>
              <div style="font-size:12px;color:var(--text-muted)">Start assessing skills to see your insights here</div>
            </div>
          ` : `
            ${persona ? `
              <div class="analysis-persona">
                <span class="analysis-persona-emoji">${persona.emoji}</span>
                <div>
                  <div class="analysis-persona-label">${escHtml(persona.label)}</div>
                  <div class="analysis-persona-desc">${escHtml(persona.desc)}</div>
                </div>
              </div>
            ` : ''}
            ${insightBullets.length > 0 ? `
              <ul class="analysis-narrative-list">
                ${insightBullets.map(b => {
                  const dashIdx = b.indexOf(' — ');
                  if (dashIdx !== -1) {
                    return `<li class="analysis-narrative-item"><span class="analysis-dot"></span><span><strong>${escHtml(b.slice(0, dashIdx))}</strong> — ${escHtml(b.slice(dashIdx + 3))}</span></li>`;
                  }
                  const commaIdx = b.indexOf(', ');
                  if (commaIdx !== -1) {
                    return `<li class="analysis-narrative-item"><span class="analysis-dot"></span><span><strong>${escHtml(b.slice(0, commaIdx))}</strong>, ${escHtml(b.slice(commaIdx + 2))}</span></li>`;
                  }
                  return `<li class="analysis-narrative-item"><span class="analysis-dot"></span><span>${escHtml(b)}</span></li>`;
                }).join('')}
              </ul>
            ` : '<div style="font-size:12px;color:var(--text-muted)">No insights yet</div>'}
          `}
        </div>

        <!-- Growth Opportunities -->
        ${growthAreas.length > 0 ? `
          <div class="analysis-card">
            <div class="analysis-card-header">
              <div class="analysis-card-title">Growth Opportunities</div>
            </div>
            <div class="growth-table">
              <div class="growth-table-header">
                <span class="growth-col-skill">Skill</span>
                <span class="growth-col-level">Current</span>
                <span class="growth-col-gap">Gap</span>
              </div>
              ${growthAreas.map(s => {
                const lc = LEVEL_CONFIG[assessments[s.id].managerLevel];
                const exp = getExpectedLevelForSkill(s.id);
                const mgrOrder = getLevelOrder(assessments[s.id].managerLevel);
                const expOrder = exp ? getLevelOrder(exp) : mgrOrder;
                const isGap = mgrOrder < expOrder;
                const isOver = mgrOrder > expOrder;
                const gapDiff = isGap ? expOrder - mgrOrder : isOver ? mgrOrder - expOrder : 0;
                const gapHtml = isGap
                  ? `<span class="review-gap-badge review-gap-under-${Math.min(gapDiff,3)}">−${gapDiff}</span>`
                  : isOver
                  ? `<span class="review-gap-badge review-gap-over-${Math.min(gapDiff,3)}">+${gapDiff}</span>`
                  : `<span style="color:var(--text-muted);font-size:12px">—</span>`;
                return `<div class="growth-table-row" onclick="navigate('skill','${s.id}')">
                  <span class="growth-col-skill">${escHtml(s.name)}</span>
                  <span class="growth-col-level"><span class="level-badge ${lc.cls}">${lc.emoji} ${assessments[s.id].managerLevel}</span></span>
                  <span class="growth-col-gap">${gapHtml}</span>
                </div>`;
              }).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Star charts side by side -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
          <div class="radar-card" id="radar-card">
            ${renderRadarCardInner()}
          </div>
          ${renderValuesRadarCard()}
        </div>
      </div>

      <!-- RIGHT RAIL (1/3): Goal Progress + Merchant Outreach -->
      <div style="display:flex;flex-direction:column;gap:16px;min-width:0">
        ${(() => {
          const d = getData();
          const themes = d.growthThemes || [];
          const personalGoals = getPersonalGoals();
          const statusPct = { completed: 100, on_track: 75, in_progress: 40, at_risk: 20, not_started: 0 };
          const subHeader = (label) => `<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin-bottom:8px">${label}</div>`;
          return `
            <div class="dash-module">
              <div class="dash-module-header">
                <span class="section-title">Goals</span>
                <button class="section-link" onclick="navigate('goals')">View all →</button>
              </div>
              <div style="display:flex;flex-direction:column;gap:0">
                ${themes.length ? `
                  <div style="padding-bottom:14px">
                    ${subHeader('Growth Themes')}
                    <div style="display:flex;flex-direction:column;gap:6px">
                      ${themes.map(t => `
                        <div onclick="navigate('goals')" style="cursor:pointer;display:flex;align-items:baseline;gap:7px;padding:3px 0" onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
                          <span style="font-size:16px;line-height:1;color:var(--text-muted);flex-shrink:0">•</span>
                          <span style="font-size:12px;font-weight:500;color:var(--text)">${escHtml(t.theme)}</span>
                        </div>`).join('')}
                    </div>
                  </div>` : ''}
                <div style="${themes.length ? 'border-top:1px solid var(--border);padding-top:14px' : ''}">
                  ${subHeader('Personal Goals')}
                  ${personalGoals.length === 0
                    ? `<div style="font-size:13px;color:var(--text-muted)">No personal goals created yet.</div>`
                    : `<div style="display:flex;flex-direction:column;gap:10px">
                        ${personalGoals.map(g => {
                          const sc = GOAL_STATUS_CONFIG[g.status || 'not_started'] || GOAL_STATUS_CONFIG['not_started'];
                          const pct = statusPct[g.status] ?? 0;
                          return `
                            <div onclick="navigate('goals')" style="cursor:pointer" onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
                              <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:5px">
                                <span style="font-size:12px;color:var(--text);font-weight:500;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escHtml(g.goal)}</span>
                                <span style="font-size:10px;font-weight:700;padding:2px 7px;border-radius:99px;background:${sc.bg};color:${sc.color};white-space:nowrap;flex-shrink:0">${sc.label}</span>
                              </div>
                              <div style="height:5px;background:var(--border);border-radius:99px;overflow:hidden">
                                <div style="height:100%;width:${pct}%;background:${sc.color};border-radius:99px;transition:width .4s ease"></div>
                              </div>
                            </div>`;
                        }).join('')}
                      </div>`
                  }
                </div>
              </div>
            </div>`;
        })()}
        <div class="dash-module" style="padding:0;overflow:hidden">
          ${renderOutreachWidget()}
        </div>

        <!-- Quick Wins -->
        ${(() => {
          const wins = getQuickWins().slice(0, 3);
          return `
            <div class="dash-module">
              <div class="dash-module-header">
                <span class="section-title">Quick Wins</span>
                <button class="section-link" onclick="navigate('review')">View all →</button>
              </div>
              ${wins.length === 0 ? `
                <div class="dash-empty-state">No quick wins yet — assess more skills to get recommendations.</div>
              ` : `
                <div class="dash-quick-wins-list">
                  ${wins.map((w, i) => `
                    <div class="dash-qw-item" onclick="openQuickWinModal(${i})">

                      <div class="dash-qw-body">
                        <div class="dash-qw-title">${escHtml(w.title)}</div>
                        <div class="dash-qw-meta">${w.matchingNames.length} skill${w.matchingNames.length !== 1 ? 's' : ''} addressed</div>
                      </div>
                      <svg class="dash-qw-arrow" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"/></svg>
                    </div>
                  `).join('')}
                </div>
              `}
            </div>
          `;
        })()}
      </div>

    </div>
  `;
}

// ============ SKILLS GRID VIEW ============
function renderSkills() {
  const categories = ['all', ...getCategories()];
  const filtered = SKILLS_DATA.skills.filter(s => {
    const catMatch = state.category === 'all' || s.category === state.category;
    const searchMatch = !state.search || s.name.toLowerCase().includes(state.search.toLowerCase()) || s.category.toLowerCase().includes(state.search.toLowerCase());
    return catMatch && searchMatch;
  });
  const d = getData();

  return `
    <div class="filter-bar">
      ${categories.map(cat => `
        <button class="filter-btn ${state.category === cat ? 'active' : ''}" onclick="setCategory('${escHtml(cat)}')">${cat === 'all' ? 'All Skills' : escHtml(cat)}</button>
      `).join('')}
    </div>
    ${filtered.length === 0 ? `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <div class="empty-state-title">No skills found</div>
        <div class="empty-state-text">Try adjusting your search or filter.</div>
      </div>
    ` : `
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:12px">${filtered.length} skill${filtered.length !== 1 ? 's' : ''}</div>
      <div class="skills-grid">
        ${filtered.map(skill => {
          const assessment = d.assessments[skill.id];
          const mgrLevel = assessment?.managerLevel;
          const lc = mgrLevel ? LEVEL_CONFIG[mgrLevel] : null;
          const cc = CATEGORY_CONFIG[skill.category] || {};
          return `
            <div class="skill-card" onclick="navigate('skill','${skill.id}')">
              ${renderSkillIllustration(skill)}
              <div class="skill-card-body">
                <div class="skill-card-top">
                  <div class="skill-number">${escHtml(skill.category)}</div>
                  ${mgrLevel ? `<span class="level-badge ${lc.cls}" style="font-size:10px;padding:4px 8px">${lc.emoji} ${mgrLevel}</span>` : '<span class="not-assessed">Not assessed</span>'}
                </div>
                <h3>${escHtml(skill.name)}</h3>
                ${assessment?.evidence ? '<div class="skill-card-footer"><span style="font-size:10px;color:var(--green)">📝 Has notes</span></div>' : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `}
  `;
}

// ============ SKILL DETAIL VIEW ============
function renderAssessDropdown(skillId, which, selectedLevel, expectedLevel) {
  const options = [
    `<option value="">— Not assessed —</option>`,
    ...LEVELS.map(level => {
      const llc = LEVEL_CONFIG[level];
      const isExpected = expectedLevel === level;
      return `<option value="${level}" ${selectedLevel === level ? 'selected' : ''}>${llc.emoji} ${level}${isExpected ? ' (expected)' : ''}</option>`;
    })
  ].join('');
  return `<select class="assess-dropdown" onchange="set${which}Level('${skillId}',this.value)">${options}</select>`;
}

function renderSkillDetail() {
  const skill = getSkillById(state.skillId);
  if (!skill) return '<div class="empty-state"><div class="empty-state-icon">❓</div><div class="empty-state-title">Skill not found</div></div>';

  const assessment = getAssessment(skill.id);
  const resources = getResources(skill.id);
  const activeLevel = state.levelTab;
  const levelData = skill.levels.find(l => l.level === activeLevel);
  const lc = LEVEL_CONFIG[activeLevel] || {};

  const allSkills = SKILLS_DATA.skills;
  const skillIdx = allSkills.findIndex(s => s.id === skill.id);
  const prevSkill = allSkills[(skillIdx - 1 + allSkills.length) % allSkills.length];
  const nextSkill = allSkills[(skillIdx + 1) % allSkills.length];

  return `
    <div class="breadcrumb">
      ${(() => {
        const prev = state.prevView;
        const dest = prev === 'resources' ? 'resources' : 'review';
        const destLabel = prev === 'resources' ? 'Resources' : 'Skills';
        return `<button class="back-arrow-btn" onclick="navigate('${dest}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          ${destLabel}
        </button>`;
      })()}
      <div class="skill-nav-arrows">
        <button class="skill-nav-btn" onclick="navigate('skill','${prevSkill.id}')" title="${escHtml(prevSkill.name)}">‹ Prev</button>
        <button class="skill-nav-btn" onclick="navigate('skill','${nextSkill.id}')" title="${escHtml(nextSkill.name)}">Next ›</button>
      </div>
    </div>

    <div style="display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-bottom:24px">
      <h1 class="skill-detail-title" style="margin-bottom:0">${escHtml(skill.name)}</h1>
      <span id="skill-last-updated" class="assessment-inline-date" style="flex-shrink:0">${assessment.lastUpdated ? `Last updated ${formatDate(assessment.lastUpdated)}` : ''}</span>
    </div>

    <div class="skill-detail-layout">
      <!-- MAIN CONTENT -->
      <div class="skill-detail-main">

        <!-- ASSESSMENT DROPDOWN -->
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
          <span style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted)">Assessment</span>
          ${renderAssessDropdown(skill.id, 'Manager', assessment.managerLevel, getExpectedLevelForSkill(skill.id))}
          ${(() => {
            const exp = getExpectedLevelForSkill(skill.id);
            const cur = assessment.managerLevel;
            if (!exp || !cur) return '';
            const expIdx = LEVELS.indexOf(exp);
            const curIdx = LEVELS.indexOf(cur);
            if (curIdx < expIdx) return `<div class="skill-gap-callout gap"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg> Below expected level</div>`;
            if (curIdx > expIdx) return `<div class="skill-gap-callout over"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg> Above expected level</div>`;
            return `<div class="skill-gap-callout met"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Meeting expectations</div>`;
          })()}
        </div>
        <!-- LEVEL TABS -->
        <div class="level-tabs">
          <div class="tabs-header">
            ${(() => {
              const expectedLevel = getExpectedLevelForSkill(skill.id);
              return LEVELS.map(level => {
                const tlc = LEVEL_CONFIG[level];
                const isExpected = expectedLevel === level;
                return `<button class="tab-btn ${level === activeLevel ? 'active' : ''} ${tlc.cls}" onclick="setLevelTab('${level}')">${tlc.emoji} <span>${level}</span>${isExpected ? '<span class="tab-expected-badge">expected</span>' : ''}</button>`;
              }).join('');
            })()}
          </div>
          <div class="tab-content ${lc.cls}">
            ${levelData ? `
              <div class="tab-section">
                <div class="tab-section-title">Observable Behaviors</div>
                <ul class="behavior-list">
                  ${levelData.observable_behaviors.map(b => `
                    <li class="behavior-item">
                      <span class="behavior-bullet"></span>
                      <span>${escHtml(b)}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div class="tab-section">
                <div class="tab-section-title">Evidence &amp; Artifacts</div>
                <ul class="behavior-list">
                  ${levelData.evidence_artifacts.map(e => `
                    <li class="behavior-item">
                      <span class="behavior-bullet"></span>
                      <span>${escHtml(e)}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
              ${(() => {
                const ap = getAntiPatternForLevel(skill, activeLevel);
                if (!ap) return '';
                return `<div class="tab-section">
                  <div class="tab-section-title">Common Anti-Patterns</div>
                  <p style="font-size:12.5px;color:var(--text-secondary);line-height:1.6;margin:0">${escHtml(ap)}</p>
                </div>`;
              })()}
              ${levelData.next_level_threshold ? `
                <div class="tab-section">
                  <div class="tab-section-title">Next Level Threshold</div>
                  <p style="font-size:12.5px;color:var(--text-secondary);line-height:1.6;margin:0">${escHtml(levelData.next_level_threshold)}</p>
                </div>
              ` : ''}
            ` : '<div class="empty-state"><div class="empty-state-text">No content available for this level.</div></div>'}
          </div>
        </div>


        ${skill.watch_out ? `
          <div class="watch-out-card">
            <div class="watch-out-title">Pitfalls</div>
            <div class="watch-out-text">${escHtml(skill.watch_out)}</div>
          </div>
        ` : ''}
      </div>

      <!-- SIDEBAR PANELS -->
      <div class="detail-sidebar">

        <!-- NOTES PANEL (above Resources) -->
        <div class="sidebar-panel">
          <div class="panel-header">
            <span class="panel-title">Notes</span>
            ${assessment.lastUpdated ? `<span style="font-size:10px;color:var(--text-muted)">${formatDate(assessment.lastUpdated)}</span>` : ''}
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label class="form-label" for="evidence-input">Evidence &amp; Examples</label>
              <textarea class="form-textarea" id="evidence-input" placeholder="Describe specific examples from your work that demonstrate this skill..." rows="8" oninput="debounceAssessmentField('${skill.id}','evidence',this.value)">${escHtml(assessment.evidence || '')}</textarea>
              <label class="notes-upload-zone" style="margin:8px 0 0">
                <input type="file" accept="image/*" multiple style="display:none" onchange="handleDetailImageUpload(this,'evidence','${skill.id}')" />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <span>Upload image</span>
              </label>
              <div id="evidence-image-grid" class="notes-image-grid" style="margin-top:8px">
                ${(assessment.evidenceImages || []).map(img => `
                  <div class="notes-image-thumb">
                    <img src="${img.dataUrl}" alt="${escHtml(img.name)}" onclick="openDetailImageLightbox('${img.id}','evidence','${skill.id}')" />
                    <button class="notes-image-remove" onclick="removeDetailImage('${img.id}','evidence','${skill.id}')">✕</button>
                  </div>`).join('')}
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="goals-input">Notes</label>
              <textarea class="form-textarea" id="goals-input" placeholder="Goals, action items, things to work on…" rows="5" oninput="debounceAssessmentField('${skill.id}','goals',this.value)">${escHtml(assessment.goals || '')}</textarea>
            </div>
            <div style="height:4px;display:flex;align-items:center;padding:0 0 8px">
              <span class="save-indicator" id="save-indicator">✓ Saved</span>
            </div>
          </div>
        </div>

        <!-- RESOURCES PANEL -->
        <div class="sidebar-panel">
          <div class="panel-header">
            <span class="panel-title">Resources</span>
            <span style="font-size:10px;color:var(--text-muted)">${resources.length} item${resources.length !== 1 ? 's' : ''}</span>
          </div>
          <div class="panel-body">
            ${resources.length > 0 ? `
              <div class="resource-list">
                ${resources.map(r => {
                  const rt = RESOURCE_TYPES[r.type] || RESOURCE_TYPES.article;
                  return `
                    <div class="resource-item ${r.url ? 'resource-item-clickable' : ''}" ${r.url ? `onclick="window.open('${escHtml(r.url)}','_blank','noopener')"` : ''}>
                      <div class="resource-type-icon resource-type-${r.type}">${rt.icon}</div>
                      <div class="resource-info">
                        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
                          <div style="flex:1;min-width:0">
                            <span class="resource-title">${escHtml(r.title)}</span>
                            ${r.desc ? `<div class="resource-desc">${escHtml(r.desc)}</div>` : ''}
                          </div>
                          <span class="resource-type-badge" style="flex-shrink:0">${rt.label}</span>
                        </div>
                      </div>
                      ${!r.curated ? `<button class="resource-delete" onclick="event.stopPropagation();deleteResource('${skill.id}','${r.id}')" title="Remove">✕</button>` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            ` : `<div class="empty-state" style="padding:16px 0;text-align:left"><div style="font-size:12px;color:var(--text-muted)">No resources yet. Add your own below!</div></div>`}

            <button class="add-resource-toggle" onclick="toggleAddResource()">
              ${state.addResourceOpen ? '✕ Close' : '＋ Add Resource'}
            </button>

            <div class="add-resource-form ${state.addResourceOpen ? 'open' : ''}" id="add-resource-form">
              <input class="form-input" id="res-title" placeholder="Title*" />
              <input class="form-input" id="res-url" placeholder="URL (optional)" />
              <input class="form-input" id="res-desc" placeholder="Short description (optional)" />
              <div class="form-row">
                <select class="form-select" id="res-type">
                  ${Object.entries(RESOURCE_TYPES).map(([k,v]) => `<option value="${k}">${v.icon} ${v.label}</option>`).join('')}
                </select>
                <button class="btn btn-primary btn-sm" onclick="submitAddResource('${skill.id}')">Add</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

// ============ RESOURCES VIEW ============
function renderResources() {
  const categories = getCategories();
  const cats = state.resourcesCats;
  const types = state.resourcesTypes;
  const noCatFilter = cats.length === 0;
  const noTypeFilter = types.length === 0;
  const showCVSection = noCatFilter || cats.includes('__cv__');
  const showSkillSections = noCatFilter || cats.some(c => c !== '__cv__');

  // Build skill sections
  const sections = showSkillSections ? categories
    .filter(cat => noCatFilter || cats.includes(cat))
    .map(cat => {
      const skills = SKILLS_DATA.skills.filter(s => s.category === cat);
      const skillsWithResources = skills.map(s => {
        let resources = getResources(s.id);
        if (!noTypeFilter) resources = resources.filter(r => types.includes(r.type));
        return { skill: s, resources };
      }).filter(x => x.resources.length > 0);
      return { cat, skillsWithResources };
    }).filter(s => s.skillsWithResources.length > 0) : [];

  // Build core values section
  const cvSections = showCVSection ? CORE_VALUES_DATA.map(cv => {
    let resources = getCVResources(cv.id);
    if (!noTypeFilter) resources = resources.filter(r => types.includes(r.type));
    return { cv, resources };
  }).filter(x => x.resources.length > 0) : [];

  const skillTotal = sections.reduce((sum, s) => sum + s.skillsWithResources.reduce((a, x) => a + x.resources.length, 0), 0);
  const cvTotal = cvSections.reduce((sum, x) => sum + x.resources.length, 0);
  const totalResources = skillTotal + cvTotal;

  const resourceItemHtml = (r, clickable = false, linkify = false) => {
    const rt = RESOURCE_TYPES[r.type] || RESOURCE_TYPES.article;
    const hasUrl = !!(r.url);
    const typeTag = `<span class="resource-type-tag" style="color:${rt.tagColor};background:${rt.tagBg}">${rt.label}</span>`;
    const ctaIcon = hasUrl ? `<svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" style="flex-shrink:0;color:#4B5563" aria-hidden="true"><path d="M224,104a8,8,0,0,1-16,0V59.32l-82.34,82.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"/></svg>` : `<span style="width:14px;display:inline-block"></span>`;
    return `
      <div class="resource-item${hasUrl ? ' resource-item-clickable' : ''}" ${hasUrl ? `onclick="window.open('${escHtml(r.url)}','_blank','noopener')"` : ''}>
        <div class="resource-info">
          <span class="resource-title">${escHtml(r.title)}</span>
          ${r.desc ? `<div class="resource-desc">${escHtml(r.desc)}</div>` : ''}
        </div>
        ${typeTag}
        ${ctaIcon}
      </div>`;
  };

  return `
    <div class="review-header">
      <div>
        <h1>Resources</h1>
        <p>${totalResources} learning resource${totalResources !== 1 ? 's' : ''}</p>
      </div>
    </div>

    ${(() => {
      const catActive = cats.length > 0;
      const typeActive = types.length > 0;
      const anyActive = catActive || typeActive;
      const chevron = open => `<svg width="10" height="6" viewBox="0 0 10 6" fill="none" style="margin-left:4px;transition:transform .2s;${open ? 'transform:rotate(180deg)' : ''}"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>`;
      const checkRow = (label, checked, onclick) => `
        <button class="review-filter-check-row ${checked ? 'checked' : ''}" onclick="${onclick}">
          <span class="review-filter-checkbox">${checked ? '<svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' : ''}</span>
          <span>${escHtml(label)}</span>
        </button>`;
      const catLabel = catActive ? `Category (${cats.length})` : 'Category';
      const typeLabel = typeActive ? `Type (${types.length})` : 'Type';
      const catOpen = state.resourcesOpenDropdown === 'cat';
      const typeOpen = state.resourcesOpenDropdown === 'type';
      return `
        <div class="review-filter-bar" style="margin-bottom:24px" onclick="closeResourcesDropdowns(event)">
          <div style="position:relative">
            <button class="review-filter-dropdown-btn ${catActive ? 'active' : ''} ${catOpen ? 'open' : ''}" onclick="toggleResourcesDropdown('cat')">
              ${catLabel}${chevron(catOpen)}
            </button>
            ${catOpen ? `<div class="review-filter-dropdown-panel" onclick="event.stopPropagation()">
              <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);padding:8px 12px 4px">Skills</div>
              ${categories.map(cat => checkRow(cat, cats.includes(cat), `toggleResourcesCat('${escHtml(cat)}')`)).join('')}
              <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);padding:8px 12px 4px">Core Values</div>
              ${checkRow('Core Values', cats.includes('__cv__'), "toggleResourcesCat('__cv__')")}
            </div>` : ''}
          </div>
          <div style="position:relative">
            <button class="review-filter-dropdown-btn ${typeActive ? 'active' : ''} ${typeOpen ? 'open' : ''}" onclick="toggleResourcesDropdown('type')">
              ${typeLabel}${chevron(typeOpen)}
            </button>
            ${typeOpen ? `<div class="review-filter-dropdown-panel" onclick="event.stopPropagation()">
              ${Object.entries(RESOURCE_TYPES).map(([k, v]) => checkRow(`${v.icon} ${v.label}`, types.includes(k), `toggleResourcesType('${k}')`)).join('')}
            </div>` : ''}
          </div>
          ${anyActive ? `<button class="review-filter-clear" onclick="clearResourcesFilters()">Clear all</button>` : ''}
        </div>`;
    })()}

    ${sections.map(({ cat, skillsWithResources }) => {
      const allRows = skillsWithResources.flatMap(({ skill, resources }) => resources.map(r => ({ r, skill })));
      return `
        <div class="review-category-section">
          <div class="review-cat-header">
            <span class="review-cat-title">${escHtml(cat)}</span>
            <span class="review-cat-stats">${allRows.length} resource${allRows.length !== 1 ? 's' : ''}</span>
          </div>
          <div class="review-table-wrap">
            <table class="review-table resources-table">
              <thead><tr>
                <th>Resource</th>
                <th>Skill</th>
                <th>Type</th>
                <th></th>
              </tr></thead>
              <tbody>
                ${allRows.map(({ r, skill }) => {
                  const rt = RESOURCE_TYPES[r.type] || RESOURCE_TYPES.article;
                  const hasUrl = !!r.url;
                  return `<tr ${hasUrl ? `onclick="window.open('${escHtml(r.url)}','_blank','noopener')" style="cursor:pointer"` : ''}>
                    <td>
                      <div style="font-size:13px;font-weight:600;color:var(--text);line-height:1.3">${escHtml(r.title)}</div>
                      ${r.desc ? `<div style="font-size:12px;color:var(--text-muted);margin-top:3px;line-height:1.4">${escHtml(r.desc)}</div>` : ''}
                    </td>
                    <td><button onclick="event.stopPropagation();navigate('skill','${skill.id}')" style="background:none;border:none;cursor:pointer;font-size:12px;font-weight:500;color:var(--primary);padding:0;text-align:left;line-height:1.4;font-family:inherit">${escHtml(skill.name)}</button></td>
                    <td><span class="resource-type-tag" style="color:${rt.tagColor};background:${rt.tagBg}">${rt.label}</span></td>
                    <td style="text-align:center">${hasUrl ? `<svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" style="color:var(--text-muted)" aria-hidden="true"><path d="M224,104a8,8,0,0,1-16,0V59.32l-82.34,82.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"/></svg>` : ''}</td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }).join('')}

    ${cvSections.length > 0 ? `
      <div class="review-category-section">
        <div class="review-cat-header">
          <span style="font-size:18px">💛</span>
          <span class="review-cat-title">Core Values</span>
          <span class="review-cat-stats">${cvSections.reduce((s, x) => s + x.resources.length, 0)} resource${cvSections.reduce((s, x) => s + x.resources.length, 0) !== 1 ? 's' : ''}</span>
        </div>
        <div class="review-table-wrap">
          <table class="review-table resources-table">
            <thead><tr>
              <th>Resource</th>
              <th>Core Value</th>
              <th>Type</th>
              <th></th>
            </tr></thead>
            <tbody>
              ${cvSections.flatMap(({ cv, resources }) => resources.map(r => {
                const rt = RESOURCE_TYPES[r.type] || RESOURCE_TYPES.article;
                const hasUrl = !!r.url;
                return `<tr ${hasUrl ? `onclick="window.open('${escHtml(r.url)}','_blank','noopener')" style="cursor:pointer"` : ''}>
                  <td>
                    <div style="font-size:13px;font-weight:600;color:var(--text);line-height:1.3">${escHtml(r.title)}</div>
                    ${r.desc ? `<div style="font-size:12px;color:var(--text-muted);margin-top:3px;line-height:1.4">${escHtml(r.desc)}</div>` : ''}
                  </td>
                  <td><button onclick="event.stopPropagation();navigate('value','${cv.id}')" style="background:none;border:none;cursor:pointer;font-size:12px;font-weight:500;color:var(--primary);padding:0;text-align:left;line-height:1.4;font-family:inherit">${escHtml(cv.label.split('.')[0].trim())}</button></td>
                  <td><span class="resource-type-tag" style="color:${rt.tagColor};background:${rt.tagBg}">${rt.label}</span></td>
                  <td style="text-align:center">${hasUrl ? `<svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" style="color:var(--text-muted)" aria-hidden="true"><path d="M224,104a8,8,0,0,1-16,0V59.32l-82.34,82.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"/></svg>` : ''}</td>
                </tr>`;
              })).join('')}
            </tbody>
          </table>
        </div>
      </div>
    ` : ''}

    ${totalResources === 0 ? `
      <div class="empty-state">
        <div class="empty-state-icon">📚</div>
        <div class="empty-state-title">No resources match your filters</div>
      </div>
    ` : ''}
  `;
}

// ============ LEARNING PLAN — QUICK WINS ============
const CROSS_SKILL_ACTIVITIES = [
  {
    icon: '🎨',
    title: 'Facilitate a design critique',
    desc: 'Running a structured crit builds feedback skills, communication of rationale, and design influence — all in one session.',
    relatedIds: ['collaboration_2', 'influence_1', 'influence_2', 'collaboration_1'],
    tips: [
      'Set a clear agenda before the session: share the design context and ask reviewers to hold feedback until prompted.',
      'Use structured rounds — strengths first, then questions, then suggestions — to keep critique productive and non-defensive.',
      'Follow up with a written summary of key decisions made in the session to build a visible feedback track record.',
    ],
    framework: { name: 'I Like / I Wish / What If', desc: 'A structured critique format that makes feedback feel collaborative rather than evaluative. "I Like" acknowledges what\'s working, "I Wish" surfaces problems without blame, and "What If" opens possibility without prescribing solutions.' },
    resources: [
      { title: 'Design Critique: Improve How You Review Work', type: 'Article', url: 'https://www.nngroup.com/articles/design-critiques/' },
      { title: 'Discussing Design', author: 'Adam Connor & Aaron Irizarry', type: 'Book', url: 'https://www.oreilly.com/library/view/discussing-design/9781491902400/' },
    ],
  },
  {
    icon: '🔬',
    title: 'Lead a user research session',
    desc: 'Plan, run, and synthesize a study yourself — covering interviewing, synthesis, and insight communication in a single effort.',
    relatedIds: ['job_skills_2', 'job_skills_3', 'job_skills_4', 'job_skills_7'],
    tips: [
      'Start with a screener — 10 minutes on finding the right participants saves hours of bad data.',
      'Ask about past behavior, not hypothetical future behavior. "Tell me about the last time you..." beats "Would you ever..."',
      'Synthesize within 24 hours while memory is fresh — use affinity mapping to cluster observations before writing conclusions.',
    ],
    framework: { name: 'Mom Test Interview Format', desc: 'Questions should pass the "Mom Test" — your mom would lie to make you feel good about your idea, but she can\'t lie about her past behavior. Ask about specifics: what they actually did, not what they think they\'d do.' },
    resources: [
      { title: 'Continuous Discovery Habits', author: 'Teresa Torres', type: 'Book', url: 'https://www.producttalk.org/2021/05/continuous-discovery-habits/' },
      { title: 'Dovetail — Research Repository', type: 'Tool', url: 'https://dovetail.com' },
    ],
  },
  {
    icon: '📊',
    title: 'Present a design decision to leadership',
    desc: 'A focused stakeholder presentation develops storytelling, persuasion, and executive communication simultaneously.',
    relatedIds: ['influence_1', 'influence_3', 'influence_5', 'collaboration_3'],
    tips: [
      'Lead with the business or user outcome — not the design solution. Executives care about results, not artifacts.',
      'Prepare for "what if we just..." objections by pre-emptively showing 1–2 alternatives you already evaluated and why you ruled them out.',
      'End with a clear ask — approval, feedback, or a specific decision. Never leave a leadership meeting open-ended.',
    ],
    framework: { name: 'Situation–Complication–Resolution', desc: 'Structure every presentation in three beats: here\'s the context (Situation), here\'s the problem or tension (Complication), here\'s my recommended path forward (Resolution). This mirrors how executives already think about decisions.' },
    resources: [
      { title: 'Resonate', author: 'Nancy Duarte', type: 'Book', url: 'https://www.duarte.com/resources/books/resonate/' },
      { title: 'Storytelling with Data', author: 'Cole Nussbaumer Knaflic', type: 'Book', url: 'https://www.storytellingwithdata.com/books' },
    ],
  },
  {
    icon: '🧩',
    title: 'Contribute a component to the design system',
    desc: 'From spec to documentation, this single effort covers visual design, systems thinking, and cross-team handoffs.',
    relatedIds: ['job_skills_17', 'job_skills_20', 'job_skills_21'],
    tips: [
      'Document variants, states, and usage guidelines before handoff — future contributors will misapply abstract specs without examples.',
      'Socialize with at least one engineer before finalizing to catch implementation edge cases early.',
      'Add a real usage example in the documentation — show it in context, not just in isolation.',
    ],
    framework: { name: 'Atomic Design', desc: 'Structure components as atoms (single elements) → molecules (groups of elements) → organisms (complex UI sections). Makes relationships and reuse patterns explicit, and gives engineers and designers a shared vocabulary.' },
    resources: [
      { title: 'Atomic Design', author: 'Brad Frost', type: 'Book (free)', url: 'https://atomicdesign.bradfrost.com/' },
      { title: 'DesignSystems.com', type: 'Reference', url: 'https://www.designsystems.com/' },
    ],
  },
  {
    icon: '🤝',
    title: 'Lead a cross-functional project kickoff',
    desc: 'Driving alignment across disciplines builds facilitation, scoping, and stakeholder communication at once.',
    relatedIds: ['collaboration_6', 'project_management_1', 'project_management_3', 'collaboration_1'],
    tips: [
      'Send a pre-read 48 hours before with the project brief — don\'t use the kickoff to read it out loud.',
      'Establish decision rights explicitly: who decides, who advises, who executes. Confusion here is the #1 source of follow-up meetings.',
      'Close with next steps and owners written in the room, not added later — commitment is made in the moment.',
    ],
    framework: { name: 'RACI', desc: 'Responsible (does the work), Accountable (owns the outcome), Consulted (input needed), Informed (kept in the loop). Map every major workstream before the kickoff ends so everyone leaves knowing their role.' },
    resources: [
      { title: 'Team Kickoff Play', author: 'Atlassian Team Playbook', type: 'Template', url: 'https://www.atlassian.com/team-playbook/plays/project-kickoff' },
      { title: 'The Art of Facilitation', author: 'Dale Hunter', type: 'Book', url: 'https://www.amazon.com/Art-Facilitation-Essentials-Workshop-Leaders/dp/0787912956' },
    ],
  },
  {
    icon: '📝',
    title: 'Write and share a design principles doc',
    desc: 'Articulating and socializing principles strengthens systems thinking, communication, and organizational influence together.',
    relatedIds: ['influence_6', 'job_skills_10', 'influence_8'],
    tips: [
      'Make each principle a directive, not a value — "Show your work" is actionable, "Transparency" is not.',
      'Include at least one "this means we do X" and one "this means we don\'t do Y" for each principle.',
      'Present the draft to a skeptic before sharing widely — if they can poke holes in it, strengthen it first.',
    ],
    framework: { name: 'Good Principles Are Opinionated', desc: 'A principle everyone agrees with immediately is a platitude, not a principle. If it doesn\'t create tension or make a tradeoff explicit, revise it. The test: would a reasonable person ever argue against it? If not, it\'s not doing useful work.' },
    resources: [
      { title: 'Principles.design', type: 'Reference', url: 'https://principles.design/' },
      { title: 'Design Principles FTW', type: 'Reference', url: 'https://www.designprinciplesftw.com/' },
    ],
  },
  {
    icon: '🗺️',
    title: 'Run a journey mapping workshop',
    desc: 'Collaborative journey mapping develops synthesis, facilitation, and service design thinking in one focused workshop.',
    relatedIds: ['job_skills_11', 'job_skills_13', 'collaboration_1', 'job_skills_7'],
    tips: [
      'Pre-populate the map with known facts and research before the session — blank maps produce blank stares.',
      'Keep lanes to 3–4 maximum: actions, thoughts, feelings, and opportunities. More lanes means less clarity.',
      'Focus the session on one specific moment in the journey, not the full end-to-end experience.',
    ],
    framework: { name: 'Experience Mapping', desc: 'A timeline with four layers: what the user does, thinks, feels, and where opportunities exist. Keeps teams aligned on the human experience rather than system flow. The "feelings" lane is consistently the most revealing one.' },
    resources: [
      { title: 'This Is Service Design Doing', author: 'Adam Lawrence et al.', type: 'Book', url: 'https://www.thisisservicedesigndoing.com/' },
      { title: 'Journey Map Template', author: 'Miro', type: 'Template', url: 'https://miro.com/templates/customer-journey-map/' },
    ],
  },
  {
    icon: '🔄',
    title: 'Run a team retrospective',
    desc: 'Facilitating a retro sharpens feedback skills, team dynamics, and project process thinking simultaneously.',
    relatedIds: ['collaboration_2', 'collaboration_4', 'project_management_3', 'collaboration_1'],
    tips: [
      'Use anonymous input collection (sticky notes, Mentimeter) before group discussion to prevent anchoring bias from the loudest voice.',
      'Timebox each section: 5 min generate, 5 min cluster, 10 min discuss, 5 min action items — total 25 minutes.',
      'Every retro must end with 1–3 action items with named owners and a follow-up date. No action items = no change.',
    ],
    framework: { name: 'Start / Stop / Continue', desc: 'The simplest retro format that works because it creates immediately actionable categories: what should we start doing, what should we stop doing, what is working and should continue. Avoids vague complaints by forcing forward-looking framing.' },
    resources: [
      { title: 'Retromat — Retro Activity Generator', type: 'Tool', url: 'https://retromat.org/' },
      { title: 'Agile Retrospectives', author: 'Esther Derby & Diana Larsen', type: 'Book', url: 'https://pragprog.com/titles/dlret/agile-retrospectives/' },
    ],
  },
  {
    icon: '🎯',
    title: 'Define success metrics for a project',
    desc: 'Setting measurable design goals touches systems thinking, stakeholder alignment, and prioritization at once.',
    relatedIds: ['project_management_2', 'project_management_4', 'influence_3', 'job_skills_10'],
    tips: [
      'For each metric, ask: "What action would we take if this number went up vs. down?" If the answer is the same, it\'s not a useful metric.',
      'Set a primary metric AND a guardrail metric — the guardrail prevents optimizing one number at the cost of another.',
      'Write metrics in the project brief, not after launch — the question reveals scope ambiguity that needs to be resolved early.',
    ],
    framework: { name: 'OKR-style Metrics', desc: 'Define an Objective (qualitative direction: "improve merchant onboarding") + 1–2 Key Results (measurable outcomes: "reduce time-to-first-transaction by 20%"). Avoids activity metrics like "we ran 5 sessions" — the KR must reflect user or business impact.' },
    resources: [
      { title: 'Measure What Matters', author: 'John Doerr', type: 'Book', url: 'https://www.whatmatters.com/the-book' },
      { title: 'Lean Analytics', author: 'Croll & Yoskovitz', type: 'Book', url: 'https://leananalyticsbook.com/' },
    ],
  },
];

function computeQuickWins(allEntries, minScore = 2) {
  const ids = new Set(allEntries.map(e => e.skill.id));
  const scored = CROSS_SKILL_ACTIVITIES.map(a => {
    const matchingIds = a.relatedIds.filter(id => ids.has(id));
    const matchingNames = matchingIds.map(id => SKILLS_DATA.skills.find(s => s.id === id)?.name).filter(Boolean);
    return { ...a, matchingIds, matchingNames, score: matchingIds.length };
  }).filter(a => a.score >= minScore).sort((a, b) => b.score - a.score);
  return scored.slice(0, 3).map(a => ({ kind: 'activity', ...a }));
}

function getQuickWins() {
  const assessments = getData().assessments;

  // Tier 1: skills with an actual gap (below expected level)
  const gapEntries = SKILLS_DATA.skills.map(s => {
    const a = assessments[s.id] || {};
    const exp = getExpectedLevelForSkill(s.id);
    if (!exp || !a.managerLevel) return null;
    const gap = getLevelOrder(a.managerLevel) - getLevelOrder(exp);
    return gap < 0 ? { skill: s, actual: a.managerLevel, expected: exp, gap, assessment: a } : null;
  }).filter(Boolean);

  let wins = computeQuickWins(gapEntries);
  if (wins.length) return wins;

  // Tier 2: any assessed skill below Expert (room to grow even if meeting expectations)
  const growthEntries = SKILLS_DATA.skills.map(s => {
    const a = assessments[s.id] || {};
    if (!a.managerLevel || a.managerLevel === 'Expert') return null;
    return { skill: s, actual: a.managerLevel, expected: 'Expert', gap: getLevelOrder(a.managerLevel) - 4, assessment: a };
  }).filter(Boolean);

  wins = computeQuickWins(growthEntries);
  if (wins.length) return wins;

  // Tier 3: all assessed skills, lower the bar to 1 match (e.g. fully Expert profile)
  const allAssessed = SKILLS_DATA.skills.map(s => {
    const a = assessments[s.id] || {};
    return a.managerLevel ? { skill: s, actual: a.managerLevel, expected: a.managerLevel, gap: 0, assessment: a } : null;
  }).filter(Boolean);

  return computeQuickWins(allAssessed, 1);
}

function renderQuickWinsSection() {
  const quickWins = getQuickWins();
  if (!quickWins.length) return '';
  return `
    <div style="margin-bottom:24px">
      <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:8px">
        <span style="font-size:16px;font-weight:700;color:var(--text)">Quick Wins</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px">
        ${quickWins.map((w, i) => renderQuickWinCard(w, i)).join('')}
      </div>
    </div>
  `;
}

function renderQuickWinCard(w, idx) {
  const typeLabel = w.kind === 'resource'
    ? `<span style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--text-muted);margin-right:8px">${(RESOURCE_TYPES[w.resourceType]?.label || 'Resource').toUpperCase()}</span>`
    : `<span style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--text-muted);margin-right:8px">ACTIVITY</span>`;

  return `
    <div class="quick-win-card" onclick="openQuickWinModal(${idx})">
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
          ${typeLabel}
          <span class="qw-covers-badge" data-skills="${escHtml(w.matchingNames.join(' · '))}" onmouseenter="showQwTooltip(event,this)" onmouseleave="hideQwTooltip()" style="font-size:11px;font-weight:600;color:#5B21B6;background:#F5F3FF;border-radius:20px;padding:4px 8px;cursor:default">Covers ${w.score} skill${w.score !== 1 ? 's' : ''}</span>
        </div>
        <div style="font-size:13.5px;font-weight:600;color:var(--text);margin-bottom:4px">${escHtml(w.title)}</div>
        <div style="font-size:12px;color:var(--text-muted);line-height:1.5">${escHtml(w.desc)}</div>
      </div>
      <span style="font-size:13px;color:var(--primary);opacity:.4;transition:opacity .12s;flex-shrink:0;align-self:center">→</span>
    </div>
  `;
}

// ============ REVIEW VIEW ============
function renderReview() {
  const d = getData();
  const profiles = getProfiles();
  const currentProfile = profiles.find(p => p.id === state.profile);
  const categories = getCategories();

  // Filter skills
  let allSkills = SKILLS_DATA.skills;
  if (state.reviewFilter === 'gap') {
    allSkills = allSkills.filter(s => {
      const a = d.assessments[s.id];
      const exp = getExpectedLevelForSkill(s.id);
      return exp && a?.managerLevel && getLevelOrder(a.managerLevel) < getLevelOrder(exp);
    });
  } else if (state.reviewFilter === 'strength') {
    allSkills = allSkills.filter(s => {
      const a = d.assessments[s.id];
      const exp = getExpectedLevelForSkill(s.id);
      return exp && a?.managerLevel && getLevelOrder(a.managerLevel) > getLevelOrder(exp);
    });
  }
  if (state.reviewCats.length) allSkills = allSkills.filter(s => state.reviewCats.includes(s.category));
  if (state.reviewLevels.length) allSkills = allSkills.filter(s => state.reviewLevels.includes(d.assessments[s.id]?.managerLevel));
  if (state.reviewHasNotes) allSkills = allSkills.filter(s => !!d.assessments[s.id]?.evidence);
  if (state.reviewHasGoals) allSkills = allSkills.filter(s => !!d.assessments[s.id]?.goals);

  const totalAssessed = allSkills.filter(s => d.assessments[s.id]?.managerLevel).length;

  return `
    <div class="review-header">
      <div>
        <h1>${escHtml(currentProfile?.name || 'Designer')}${currentProfile?.role ? ` <span style="font-size:13px;font-weight:600;color:var(--primary);background:var(--primary-light);border:1px solid rgba(99,102,241,.2);border-radius:20px;padding:4px 8px;vertical-align:middle;position:relative;top:-2px;margin-left:16px">${escHtml(shortRole(currentProfile.role))}</span>` : ''}</h1>
        <p>${totalAssessed} skills assessed of ${SKILLS_DATA.skills.length} total</p>
      </div>
      <div class="review-actions">
        <div style="display:flex;gap:8px;align-items:center">
          <button class="aero-icon-btn" onclick="window.print()" aria-label="Print" title="Print">
            <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
              <path d="M214,72H176V40a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8V72H42A18,18,0,0,0,24,90V166a18,18,0,0,0,18,18H64v32a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V184h22a18,18,0,0,0,18-18V90A18,18,0,0,0,214,72ZM96,48h64V72H96ZM176,208H80V160h96Zm48-42a2,2,0,0,1-2,2H184V152a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v16H42a2,2,0,0,1-2-2V90a2,2,0,0,1,2-2H214a2,2,0,0,1,2,2ZM192,108a12,12,0,1,1-12-12A12,12,0,0,1,192,108Z"/>
            </svg>
          </button>
          <button class="aero-icon-btn" onclick="exportReviewCSV()" aria-label="Export" title="Export as CSV">
            <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
              <path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,132.69V40a8,8,0,0,0-16,0v92.69L93.66,106.34a8,8,0,0,0-11.32,11.32Z"/>
            </svg>
          </button>
        </div>
        ${renderNoteInputCard()}
      </div>
    </div>

    ${renderQuickWinsSection()}

    ${(() => {
      const skillsActive = state.reviewCats.length > 0;
      const levelActive = state.reviewLevels.length > 0;
      const gapActive = state.reviewFilter !== 'all';
      const anyActive = skillsActive || levelActive || gapActive;
      const chevron = (open) => `<svg width="10" height="6" viewBox="0 0 10 6" fill="none" style="margin-left:4px;transition:transform .2s;${open ? 'transform:rotate(180deg)' : ''}"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>`;

      const checkRow = (label, checked, onclick) => `
        <button class="review-filter-check-row ${checked ? 'checked' : ''}" onclick="${onclick}">
          <span class="review-filter-checkbox">${checked ? '<svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' : ''}</span>
          <span>${escHtml(label)}</span>
        </button>`;

      function dropdownBtn(id, label, isActive, isOpen, minWidth) {
        return `
          <div style="position:relative">
            <button class="review-filter-dropdown-btn ${isActive ? 'active' : ''} ${isOpen ? 'open' : ''}" onclick="toggleReviewDropdown('${id}')"${minWidth ? ` style="min-width:${minWidth}"` : ''}>
              ${label}
              ${chevron(isOpen)}
            </button>
            ${isOpen ? `<div class="review-filter-dropdown-panel" onclick="event.stopPropagation()">` + (() => {
              if (id === 'skills') return categories.map(cat => checkRow(cat, state.reviewCats.includes(cat), `toggleReviewCat('${escHtml(cat)}')`)).join('');
              if (id === 'level') return LEVELS.slice().reverse().map(l => checkRow(l, state.reviewLevels.includes(l), `toggleReviewLevel('${escHtml(l)}')`)).join('');
              if (id === 'gap') return [
                checkRow('All', state.reviewFilter === 'all', "setReviewFilter('all')"),
                checkRow('Growth Areas', state.reviewFilter === 'gap', "setReviewFilter('gap')"),
                checkRow('Strengths', state.reviewFilter === 'strength', "setReviewFilter('strength')"),
              ].join('');
            })() + `</div>` : ''}
          </div>`;
      }

      return `
      <div class="review-filter-bar" onclick="closeReviewDropdowns(event)">
        ${dropdownBtn('skills', skillsActive ? `Skills (${state.reviewCats.length})` : 'Skills', skillsActive, state.reviewOpenDropdown === 'skills', '112px')}
        ${dropdownBtn('level', levelActive ? `Skill Level (${state.reviewLevels.length})` : 'Skill Level', levelActive, state.reviewOpenDropdown === 'level', '148px')}
        ${dropdownBtn('gap', gapActive ? 'Gap (1)' : 'Gap', gapActive, state.reviewOpenDropdown === 'gap', '90px')}
        ${anyActive ? `<button class="review-filter-clear" onclick="clearReviewFilters()">Clear all</button>` : ''}
      </div>`;
    })()}

    ${categories.map(cat => {
      const catSkills = allSkills.filter(s => s.category === cat);
      if (catSkills.length === 0) return '';
      const cc = CATEGORY_CONFIG[cat] || {};
      const assessedInCat = catSkills.filter(s => d.assessments[s.id]?.managerLevel).length;

      return `
        <div class="review-category-section">
          <div class="review-cat-header">
            <span class="review-cat-title">${escHtml(cat)}</span>
            <span class="review-cat-stats">${assessedInCat}/${catSkills.length} assessed</span>
          </div>
          <div class="review-table-wrap"><table class="review-table">
            <thead>
              <tr>
                <th style="cursor:pointer;user-select:none" onclick="setTableSort('review','name')">Skill${sortIndicator('review','name')}</th>
                <th style="cursor:pointer;user-select:none" onclick="setTableSort('review','assessment')">Assessment${sortIndicator('review','assessment')}</th>
                <th style="cursor:pointer;user-select:none" onclick="setTableSort('review','expected')">Expected${sortIndicator('review','expected')}</th>
                <th style="cursor:pointer;user-select:none" onclick="setTableSort('review','gap')">Gap${sortIndicator('review','gap')}</th>
                <th style="cursor:pointer;user-select:none" onclick="setTableSort('review','updated')">Updated${sortIndicator('review','updated')}</th>
              </tr>
            </thead>
            <tbody>
              ${applySortToRows(catSkills, 'review', {
                name:       s => s.name,
                assessment: s => getLevelOrder(d.assessments[s.id]?.managerLevel) || 0,
                expected:   s => getLevelOrder(getExpectedLevelForSkill(s.id)) || 0,
                gap:        s => { const m = getLevelOrder(d.assessments[s.id]?.managerLevel), e = getLevelOrder(getExpectedLevelForSkill(s.id)); return (e && m) ? m - e : 0; },
                updated:    s => d.assessments[s.id]?.lastUpdated || '',
              }).map(skill => {
                const a = d.assessments[skill.id] || {};
                const expectedLevel = getExpectedLevelForSkill(skill.id);
                const expLc = expectedLevel ? LEVEL_CONFIG[expectedLevel] : null;
                const mgrLc = a.managerLevel ? LEVEL_CONFIG[a.managerLevel] : null;
                const mgrOrder = getLevelOrder(a.managerLevel), expOrder = getLevelOrder(expectedLevel);
                const isGap = expectedLevel && a.managerLevel && mgrOrder < expOrder;
                const isOver = expectedLevel && a.managerLevel && mgrOrder > expOrder;
                const gapDiff = isGap ? expOrder - mgrOrder : isOver ? mgrOrder - expOrder : 0;
                return `
                  <tr>
                    <td>
                      <div class="review-skill-name" onclick="navigate('skill','${skill.id}')">${escHtml(skill.name)}</div>
                    </td>
                    <td>
                      <select class="review-level-select ${mgrLc ? mgrLc.cls : ''}" onchange="setReviewLevel('${skill.id}',this.value)">
                        <option value="">—</option>
                        ${LEVELS.map(l => `<option value="${l}" ${a.managerLevel === l ? 'selected' : ''}>${l}</option>`).join('')}
                      </select>
                    </td>
                    <td>
                      ${expLc ? `<span class="level-badge ${expLc.cls}">${expLc.emoji} ${expectedLevel}</span>` : '<span style="color:var(--text-muted);font-size:12px">—</span>'}
                    </td>
                    <td style="text-align:center">
                      ${isGap ? `<span class="review-gap-badge review-gap-under-${gapDiff}">−${gapDiff}</span>` : isOver ? `<span class="review-gap-badge review-gap-over-${gapDiff}">+${gapDiff}</span>` : '<span style="color:var(--text-muted);font-size:12px">—</span>'}
                    </td>
                    <td><span style="font-size:11px;color:var(--text-muted)">${formatDate(a.lastUpdated) || '—'}</span></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table></div>
        </div>
      `;
    }).join('')}

  <div id="notes-modal" class="notes-modal-overlay" onclick="if(event.target===this)closeNotesModal()">
    <div class="notes-modal-box">
      <div class="notes-modal-header">
        <div>
          <div id="notes-modal-title" class="notes-modal-title"></div>
          <div id="notes-modal-skill" class="notes-modal-skill"></div>
        </div>
        <button class="notes-modal-close" onclick="closeNotesModal()">✕</button>
      </div>
      <textarea id="notes-modal-textarea" class="notes-modal-textarea" placeholder="Write here…"></textarea>
      <div id="notes-modal-images" class="notes-modal-images"></div>
      <label class="notes-upload-zone" id="notes-upload-zone">
        <input type="file" accept="image/*" multiple style="display:none" onchange="handleNotesImageUpload(this)" />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        <span>Upload image</span>
      </label>
      <div class="notes-modal-footer">
        <button class="btn btn-primary btn-sm" onclick="closeNotesModal()">Save & Close</button>
      </div>
    </div>
  </div>
  `;
}

// ============ ROLE SELECT HTML ============
function renderRoleSelect(id, selectedRole, includeBlank) {
  const blank = includeBlank ? `<option value="">— Select a role —</option>` : '';
  const options = Object.entries(ROLE_TRACKS).map(([track, roles]) => `
    <optgroup label="${escHtml(track)}">
      ${roles.map(r => `<option value="${escHtml(r)}" ${selectedRole === r ? 'selected' : ''}>${escHtml(r)}</option>`).join('')}
    </optgroup>
  `).join('');
  return `<select class="modal-input" id="${id}" style="cursor:pointer">${blank}${options}</select>`;
}

// ============ PROFILE MODAL ============
function renderProfileModal() {
  const profiles = getProfiles();
  const isFirstRun = profiles.length === 0;
  return `
    <div class="modal-overlay" id="profile-modal" onclick="if(event.target===this && !${isFirstRun})closeProfileModal()">
      <div class="modal" style="width:420px;max-width:95vw">
        ${isFirstRun ? `
          <div class="modal-title" style="margin-bottom:4px">Welcome to Competency Hub</div>
          <div class="modal-subtitle" style="margin-bottom:20px">Create your profile to get started.</div>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div>
              <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:6px">Your name</label>
              <input class="modal-input" id="new-profile-name" placeholder="e.g. Jamie Chen" style="margin:0" />
            </div>
            <div>
              <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:6px">Role</label>
              ${renderRoleSelect('new-profile-role', '', true)}
            </div>
            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;padding:10px 12px;border:1px solid var(--border);border-radius:8px;background:var(--bg)">
              <input type="checkbox" id="new-profile-manager" style="width:16px;height:16px;accent-color:var(--primary);cursor:pointer" />
              <div>
                <div style="font-size:13px;font-weight:600;color:var(--text)">I'm a manager</div>
                <div style="font-size:11px;color:var(--text-muted);margin-top:1px">Enables team management, switching between profiles, and setting assessments for others</div>
              </div>
            </label>
            <div class="form-field">
              <label class="form-label" style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:6px">PIN (optional)</label>
              <input id="new-profile-pin" class="modal-input" type="password" inputmode="numeric" maxlength="6" placeholder="Leave blank for no PIN" style="margin:0" />
              <div style="font-size:11px;color:var(--text-muted);margin-top:4px">Set a PIN to protect this profile. Others must enter it to view.</div>
            </div>
            <button class="btn btn-primary" onclick="createProfileAndStart()" style="margin-top:4px">Get Started</button>
          </div>
        ` : `
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
            <div class="modal-title" style="margin-bottom:0">Switch Profile</div>
            <button onclick="closeProfileModal()" style="background:none;border:none;cursor:pointer;font-size:18px;color:var(--text-muted);padding:4px">✕</button>
          </div>
          <div class="modal-subtitle">Select a profile to view their assessments.</div>
          <div class="profiles-list">
            ${profiles.map(p => `
              <div class="profile-option ${state.profile === p.id ? 'active' : ''}" onclick="selectProfile('${p.id}')">
                ${avatarHtml(p, 36, 13)}
                <div style="flex:1;min-width:0">
                  <div class="profile-option-name">${escHtml(p.name)}${p.pin ? ' 🔒' : ''}</div>
                  <div class="profile-option-role">${escHtml(shortRole(p.role) || 'No role assigned')}</div>
                </div>
                ${state.profile === p.id ? '<span style="font-size:11px;color:var(--primary);font-weight:600">Active</span>' : ''}
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

// ============ TEAM MODAL ============
function renderTeamModal() {
  const profiles = getProfiles();
  return `
    <div class="modal-overlay" id="team-modal" onclick="if(event.target===this)closeTeamModal()">
      <div class="modal" style="width:540px;max-width:95vw">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
          <div class="modal-title" style="margin-bottom:0">Manage Team</div>
          <button onclick="closeTeamModal()" style="background:none;border:none;cursor:pointer;font-size:18px;color:var(--text-muted);padding:4px">✕</button>
        </div>
        <div class="modal-subtitle">Add team members and assign roles to set expected skill levels.</div>

        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
          ${profiles.map(p => `
            <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm)">
              <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex-shrink:0">
                ${avatarHtml(p, 40, 14)}
                <label for="photo-upload-${p.id}" style="font-size:10px;color:var(--primary);font-weight:600;cursor:pointer;white-space:nowrap">${p.photo ? 'Change' : 'Add photo'}</label>
                <input type="file" id="photo-upload-${p.id}" accept="image/*" style="display:none" onchange="handleProfilePhotoUpload('${p.id}',this)" />
              </div>
              <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:8px">
                <input class="modal-input" style="margin:0;padding:4px 8px;font-size:13px;font-weight:600" id="name-edit-${p.id}" value="${escHtml(p.name)}" placeholder="Name" />
                ${renderRoleSelect('role-select-'+p.id, p.role || '', true)}
              </div>
              <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end;flex-shrink:0">
                <button onclick="deleteProfileFromTeam('${p.id}')" title="Remove member" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:16px;padding:4px;line-height:1">✕</button>
                <button onclick="promptSetProfilePin('${p.id}')" style="background:none;border:none;cursor:pointer;color:var(--primary);font-size:11px;font-weight:600;padding:2px 4px;white-space:nowrap">${p.pin ? '🔒 Change PIN' : 'Set PIN'}</button>
              </div>
            </div>
          `).join('')}
          ${profiles.length === 0 ? `<div style="text-align:center;color:var(--text-muted);font-size:13px;padding:16px 0">No team members yet.</div>` : ''}
        </div>

        <hr class="modal-divider" style="margin-bottom:16px">
        <div style="font-size:12px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.04em;margin-bottom:8px">Add New Member</div>
        <div style="display:flex;gap:8px;align-items:flex-end">
          <div style="flex:1">
            <label class="modal-label">Name</label>
            <input class="modal-input" id="new-profile-name" placeholder="e.g. Jamie Chen" style="margin:0" />
          </div>
          <div style="flex:1">
            <label class="modal-label">Role</label>
            ${renderRoleSelect('new-profile-role', '', true)}
          </div>
          <button class="btn btn-primary btn-sm" onclick="createProfileFromTeam()" style="white-space:nowrap;flex-shrink:0">Add Member</button>
        </div>
        <label style="display:flex;align-items:center;gap:8px;margin-top:10px;cursor:pointer">
          <input type="checkbox" id="new-profile-manager-team" style="width:15px;height:15px;accent-color:var(--primary);cursor:pointer" />
          <span style="font-size:12px;color:var(--text-secondary)">Manager — can switch profiles and manage team</span>
        </label>

        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:24px">
          <button class="btn btn-secondary" onclick="closeTeamModal()">Cancel</button>
          <button class="btn btn-primary" onclick="saveTeamRoles()">Save Changes</button>
        </div>
      </div>
    </div>
  `;
}

function manageTeam() {
  const existing = document.getElementById('team-modal');
  if (existing) existing.remove();
  document.body.insertAdjacentHTML('beforeend', renderTeamModal());
}
function closeTeamModal() {
  const m = document.getElementById('team-modal');
  if (m) m.remove();
}
function saveTeamRoles() {
  const profiles = getProfiles();
  profiles.forEach(p => {
    const nameInput = document.getElementById('name-edit-' + p.id);
    const roleSelect = document.getElementById('role-select-' + p.id);
    const newName = nameInput?.value?.trim();
    if (newName && newName !== p.name) {
      const all = getProfiles();
      const idx = all.findIndex(x => x.id === p.id);
      if (idx !== -1) { all[idx].name = newName; saveProfiles(all); }
    }
    if (roleSelect) updateProfileRole(p.id, roleSelect.value);
  });
  closeTeamModal();
  render();
}
function createProfileFromTeam() {
  const name = document.getElementById('new-profile-name')?.value?.trim();
  const role = document.getElementById('new-profile-role')?.value?.trim();
  const isManager = document.getElementById('new-profile-manager-team')?.checked || false;
  if (!name) { alert('Please enter a name.'); return; }
  addProfile(name, role, isManager);
  manageTeam(); // re-render modal with new member
}
function deleteProfileFromTeam(id) {
  if (!confirm('Remove this team member? All their assessments will be lost.')) return;
  deleteProfile(id);
  manageTeam();
}
function handleProfilePhotoUpload(profileId, input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    setProfilePhoto(profileId, e.target.result);
    manageTeam();
    render();
  };
  reader.readAsDataURL(file);
}

// ============ TOOLTIP ============
function showQwTooltip(e, el) {
  let tip = document.getElementById('qw-tooltip');
  if (!tip) {
    tip = document.createElement('div');
    tip.id = 'qw-tooltip';
    tip.style.cssText = 'position:fixed;z-index:9999;background:#1E293B;color:#fff;font-size:11px;font-weight:500;padding:6px 10px;border-radius:6px;pointer-events:none;max-width:180px;white-space:normal;line-height:1.5;transition:opacity .15s';
    document.body.appendChild(tip);
  }
  tip.textContent = el.dataset.skills;
  tip.style.opacity = '1';
  const r = el.getBoundingClientRect();
  tip.style.left = (r.left + r.width / 2 - tip.offsetWidth / 2) + 'px';
  tip.style.top = (r.top - tip.offsetHeight - 6) + 'px';
}
function hideQwTooltip() {
  const tip = document.getElementById('qw-tooltip');
  if (tip) tip.style.opacity = '0';
}

// ============ MERCHANT OUTREACH HELPERS ============
function getCurrentQuarter() {
  const now = new Date();
  return { year: now.getFullYear(), q: Math.floor(now.getMonth() / 3) + 1 };
}
function getQuarterStart(year, q) { return new Date(year, (q - 1) * 3, 1); }
function getQuarterEnd(year, q)   { return new Date(year, q * 3, 0, 23, 59, 59); }
function getEntriesForQuarter(entries, year, q) {
  const start = getQuarterStart(year, q);
  const end   = getQuarterEnd(year, q);
  return entries.filter(e => { const d = new Date(e.date); return d >= start && d <= end; });
}

function openOutreachModal(id) {
  const od = getOutreachData();
  if (id) {
    const entry = od.entries.find(e => e.id === id);
    if (!entry) return;
    state.outreachModal = { mode: 'edit', id, form: { ...entry } };
  } else {
    const today = new Date().toISOString().split('T')[0];
    state.outreachModal = { mode: 'new', form: { date: today, merchant: '', type: 'general', notes: '', dovetailUrl: '' } };
  }
  render();
}
function closeOutreachModal() { state.outreachModal = null; render(); }
function updateOutreachForm(field, value) {
  if (!state.outreachModal) return;
  state.outreachModal.form[field] = value;
  if (field === 'type') render();
}
function saveOutreach() {
  const m = state.outreachModal;
  if (!m || !m.form.date || !m.form.merchant) return;
  const od = getOutreachData();
  const isEdit = m.mode === 'edit';
  if (isEdit) {
    const idx = od.entries.findIndex(e => e.id === m.id);
    if (idx !== -1) od.entries[idx] = { ...m.form, id: m.id };
  } else {
    od.entries.push({ ...m.form, id: `ot_${Date.now()}` });
  }
  od.entries.sort((a, b) => new Date(b.date) - new Date(a.date));
  saveOutreachData(od);
  state.outreachModal = null;
  state.outreachToast = {
    merchant: m.form.merchant,
    type: m.form.type,
    isEdit
  };
  render();
  setTimeout(() => { state.outreachToast = null; render(); }, 4000);
}
function deleteOutreachEntry(id) {
  if (!confirm('Delete this outreach entry?')) return;
  const od = getOutreachData();
  od.entries = od.entries.filter(e => e.id !== id);
  saveOutreachData(od);
  render();
}
function setHveMerchant(val) {
  const od = getOutreachData();
  od.hveMerchant = val;
  saveOutreachData(od);
}

function renderOutreachWidget() {
  const od = getOutreachData();
  const { year, q } = getCurrentQuarter();
  const quarterEntries = getEntriesForQuarter(od.entries, year, q);
  const allTouchpointsThisQ = quarterEntries.length;
  const goal = 4;
  const pct = Math.min(100, Math.round((allTouchpointsThisQ / goal) * 100));
  const now = new Date();
  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const hveThisMonth = od.entries.filter(e => e.type === 'hve' && new Date(e.date) >= thisMonthStart).length;
  const hveOk = hveThisMonth >= 1;
  const recent = od.entries.slice(0, 3);

  return `
    <div class="outreach-widget outreach-widget-compact">
      <div class="dash-module-header">
        <span class="section-title">Merchant Outreach</span>
        <button class="section-link" onclick="navigate('outreach')">View all →</button>
      </div>
      <div class="outreach-widget-compact-body">
        <div class="outreach-hve-badge${hveOk ? ' ok' : ' due'}" style="border-radius:6px;width:100%;margin-bottom:16px;justify-content:flex-start;padding:8px 12px">
          <span>${hveOk ? '✓' : '!'}</span>
          <span>HVE check-in ${hveOk ? 'done this month' : 'due this month'}</span>
        </div>
        <div class="outreach-compact-progress">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
            <span style="font-size:13px;color:var(--text-secondary)">Q${q} touchpoints</span>
            <span style="font-size:13px;font-weight:600;color:${allTouchpointsThisQ >= goal ? 'var(--green)' : 'var(--text)'}">${allTouchpointsThisQ} / ${goal}</span>
          </div>
          <div class="outreach-progress-track" style="margin:0">
            <div class="outreach-progress-fill${pct >= 100 ? ' complete' : ''}" style="width:${pct}%"></div>
          </div>
        </div>
        <div class="outreach-widget-compact-footer">
          <button class="btn btn-primary btn-sm" onclick="openOutreachModal(null)">+ Log Outreach</button>
        </div>
      </div>
    </div>
  `;
}

function renderOutreachPage() {
  const od = getOutreachData();
  const { year, q } = getCurrentQuarter();
  const quarterEntries = getEntriesForQuarter(od.entries, year, q);
  const allTouchpointsThisQ = quarterEntries.length;
  const hveThisQ = quarterEntries.filter(e => e.type === 'hve').length;
  const goal = 4;
  const pct = Math.min(100, Math.round((allTouchpointsThisQ / goal) * 100));
  const now = new Date();
  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const hveThisMonth = od.entries.filter(e => e.type === 'hve' && new Date(e.date) >= thisMonthStart).length;
  const typeFilter = state.outreachTypeFilter || '';
  const filtered = od.entries.filter(e => !typeFilter || e.type === typeFilter);

  return `
    <div class="outreach-page">
      <div class="outreach-page-header">
        <div>
          <h2 style="margin:0 0 4px;font-size:20px;font-weight:700;color:var(--text)">Merchant Outreach</h2>
          <div style="font-size:13px;color:var(--text-muted)">Goal: 4 touchpoints/quarter · Monthly HVE check-in</div>
        </div>
        <button class="btn btn-primary" onclick="openOutreachModal(null)">+ Log Outreach</button>
      </div>

      <div class="outreach-tiles">
        <div class="outreach-tile">
          <div class="outreach-tile-value">${allTouchpointsThisQ}<span style="font-size:14px;color:var(--text-muted);font-weight:500"> / ${goal}</span></div>
          <div class="outreach-tile-label">Touchpoints Q${q}</div>
          <div class="outreach-progress-track" style="margin-top:8px">
            <div class="outreach-progress-fill${pct >= 100 ? ' complete' : ''}" style="width:${pct}%"></div>
          </div>
        </div>
        <div class="outreach-tile">
          <div class="outreach-tile-value">${hveThisQ}</div>
          <div class="outreach-tile-label">HVE check-ins Q${q}</div>
        </div>
        <div class="outreach-tile${hveThisMonth >= 1 ? ' tile-ok' : ' tile-due'}">
          <div class="outreach-tile-value">${hveThisMonth >= 1 ? '✓' : '!'}</div>
          <div class="outreach-tile-label">HVE this month</div>
        </div>
      </div>

      <div class="filter-bar" style="margin:24px 0 16px">
        <button class="filter-btn ${!typeFilter ? 'active' : ''}" onclick="state.outreachTypeFilter='';render()">All Types</button>
        <button class="filter-btn ${typeFilter === 'general' ? 'active' : ''}" onclick="state.outreachTypeFilter='general';render()">General</button>
        <button class="filter-btn ${typeFilter === 'hve' ? 'active' : ''}" onclick="state.outreachTypeFilter='hve';render()">HVE</button>
      </div>

      ${filtered.length === 0 ? `
        <div class="empty-state" style="margin-top:24px">
          <div class="empty-state-icon">🏪</div>
          <div class="empty-state-title">No outreach logged</div>
          <div class="empty-state-text">Log your first merchant touchpoint to start tracking.</div>
        </div>
      ` : `
        <div class="outreach-card">
          <table class="outreach-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Merchant</th>
                <th>Notes</th>
                <th>Dovetail</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${filtered.map(e => `
                <tr>
                  <td class="outreach-col-date">${formatDate(e.date)}</td>
                  <td class="outreach-col-merchant">
                    <div style="display:flex;align-items:center;gap:8px">
                      <span>${escHtml(e.merchant)}</span>
                      ${e.type === 'hve' ? `<span class="outreach-type-pill hve">HVE</span>` : ''}
                    </div>
                  </td>
                  <td class="outreach-col-notes">${e.notes ? escHtml(e.notes) : '<span style="color:var(--text-muted)">—</span>'}</td>
                  <td class="outreach-col-dovetail">
                    ${e.dovetailUrl
                      ? `<a href="${escHtml(e.dovetailUrl)}" target="_blank" rel="noopener" class="outreach-dovetail-link" title="View in Dovetail">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                          View
                        </a>`
                      : '<span style="color:var(--text-muted)">—</span>'}
                  </td>
                  <td class="outreach-col-actions">
                    <button class="btn-icon-sm" onclick="openOutreachModal('${e.id}')" title="Edit">✏️</button>
                    <button class="btn-icon-sm" onclick="deleteOutreachEntry('${e.id}')" title="Delete">🗑️</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `;
}

function renderOutreachToast() {
  if (!state.outreachToast) return '';
  const { merchant, type, isEdit } = state.outreachToast;
  const label = type === 'hve' ? 'HVE check-in' : 'General outreach';
  const msg = isEdit ? `Updated outreach for ${escHtml(merchant)}` : `${label} logged for ${escHtml(merchant)}`;
  return `
    <div class="note-success-toast" style="display:flex;align-items:center;gap:8px">
      <span style="font-size:18px">✓</span>
      <span>${msg}</span>
      <button onclick="state.outreachToast=null;render()" style="margin-left:auto;background:none;border:none;cursor:pointer;color:inherit;font-size:16px;opacity:.7;padding:0 4px">×</button>
    </div>
  `;
}

function renderOutreachModal() {
  if (!state.outreachModal) return '';
  const m = state.outreachModal;
  const f = m.form;
  const isEdit = m.mode === 'edit';

  return `
    <div class="insight-modal-overlay" onclick="if(event.target===this)closeOutreachModal()">
      <div class="insight-modal outreach-modal">
        <div class="insight-modal-header">
          <div class="insight-modal-title">${isEdit ? 'Edit Outreach Entry' : 'Log Merchant Outreach'}</div>
          <button class="insight-modal-close" onclick="closeOutreachModal()">✕</button>
        </div>
        <div class="insight-modal-body" style="padding-top:8px">
          <div class="form-field">
            <label class="form-label">Date</label>
            <input class="form-input" type="date" value="${escHtml(f.date || '')}" oninput="updateOutreachForm('date',this.value)" />
          </div>
          <div class="form-field">
            <label class="form-label">Merchant Name</label>
            <input class="form-input" type="text" placeholder="e.g. Shake Shack Chicago" value="${escHtml(f.merchant || '')}" oninput="updateOutreachForm('merchant',this.value)" />
          </div>
          <div class="form-field">
            <label class="outreach-checkbox-label">
              <input type="checkbox" ${f.type === 'hve' ? 'checked' : ''} onchange="updateOutreachForm('type',this.checked?'hve':'general')" />
              <span>This is an HVE check-in</span>
            </label>
          </div>
          <div class="form-field">
            <label class="form-label">Notes <span style="color:var(--text-muted);font-weight:400">(optional)</span></label>
            <textarea class="form-input" rows="3" placeholder="What was discussed? Any feedback?" oninput="updateOutreachForm('notes',this.value)">${escHtml(f.notes || '')}</textarea>
          </div>
          <div class="form-field" style="margin-bottom:0">
            <label class="form-label">Dovetail Link <span style="color:var(--text-muted);font-weight:400">(optional)</span></label>
            <input class="form-input" type="url" placeholder="https://dovetailapp.com/projects/..." value="${escHtml(f.dovetailUrl || '')}" oninput="updateOutreachForm('dovetailUrl',this.value)" />
          </div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:8px;padding:16px 24px;border-top:1px solid var(--border)">
          <button class="btn btn-secondary" onclick="closeOutreachModal()">Cancel</button>
          <button class="btn btn-primary" onclick="saveOutreach()">${isEdit ? 'Save Changes' : 'Log Outreach'}</button>
        </div>
      </div>
    </div>
  `;
}


// ============ CORE VALUES PAGE ============
function renderCoreValues() {
  const profiles = getProfiles();
  const currentProfile = profiles.find(p => p.id === state.profile);
  const allRated = CORE_VALUES_DATA.filter(cv => getValueRating(cv.id).managerRating);

  return `
    <div class="review-header">
      <div>
        <h1>${escHtml(currentProfile?.name || 'Designer')}${currentProfile?.role ? ` <span style="font-size:13px;font-weight:600;color:var(--primary);background:var(--primary-light);border:1px solid rgba(99,102,241,.2);border-radius:20px;padding:4px 8px;vertical-align:middle;position:relative;top:-2px;margin-left:16px">${escHtml(shortRole(currentProfile.role))}</span>` : ''}</h1>
        <p>${allRated.length} of ${CORE_VALUES_DATA.length} values rated</p>
      </div>
    </div>

    <div class="review-category-section">
      <div class="review-table-wrap"><table class="review-table cv-table">
        <thead>
          <tr>
            <th style="cursor:pointer;user-select:none" onclick="setTableSort('cv','name')">Core Value${sortIndicator('cv','name')}</th>
            <th style="cursor:pointer;user-select:none" onclick="setTableSort('cv','rating')">Rating${sortIndicator('cv','rating')}</th>
            <th>Notes</th>
            <th style="cursor:pointer;user-select:none" onclick="setTableSort('cv','updated')">Updated${sortIndicator('cv','updated')}</th>
          </tr>
        </thead>
        <tbody>
          ${applySortToRows(CORE_VALUES_DATA, 'cv', {
            name:    cv => cv.label,
            rating:  cv => getValueRating(cv.id).managerRating || 0,
            updated: cv => getValueRating(cv.id).lastUpdated || '',
          }).map(cv => {
            const v = getValueRating(cv.id);
            const rc = v.managerRating ? CV_RATING_CONFIG[v.managerRating] : null;
            return `
              <tr>
                <td>
                  <div class="review-skill-name" onclick="navigate('value','${cv.id}')">
                    ${escHtml(cv.label)}
                  </div>
                </td>
                <td>
                  <select class="review-level-select ${rc ? '' : ''}" style="${rc ? `color:${rc.color};background:${rc.bg};border-color:${rc.color};font-weight:600` : ''}" onchange="setValueManagerRating('${cv.id}',this.value)">
                    <option value="">—</option>
                    ${[1,2,3,4,5].map(n => {
                      const r = CV_RATING_CONFIG[n];
                      return `<option value="${n}" ${v.managerRating === n ? 'selected' : ''}>${r.label}</option>`;
                    }).join('')}
                  </select>
                </td>
                <td>
                  <button class="review-notes-btn" onclick="openValueNotesModal('${cv.id}')">
                    ${v.notes ? `<span class="review-notes-preview-text">${escHtml(v.notes)}</span><span class="review-notes-expand">↗</span>` : '<span class="review-notes-placeholder">Add notes…</span>'}
                  </button>
                </td>
                <td><span style="font-size:11px;color:var(--text-muted)">${v.lastUpdated ? formatDate(v.lastUpdated) : '—'}</span></td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table></div>
    </div>
  `;
}

let _cvNotesTimer = null;
function debounceSaveValueNotes(valueId, value) {
  clearTimeout(_cvNotesTimer);
  _cvNotesTimer = setTimeout(() => autoSaveValueNotes(valueId, value), 1000);
}

function autoSaveValueNotes(valueId, value) {
  const v = getValueRating(valueId);
  v.notes = value;
  v.lastUpdated = new Date().toISOString();
  saveValueRating(valueId, v);
  const el = document.getElementById('cv-last-updated');
  if (el) el.textContent = 'Last updated ' + formatDate(new Date().toISOString());
  const ind = document.getElementById('cv-save-indicator');
  if (ind) { ind.classList.add('visible'); setTimeout(() => ind.classList.remove('visible'), 2000); }
}

function renderCoreValueDetail() {
  const cv = CORE_VALUES_DATA.find(c => c.id === state.valueId);
  if (!cv) return '<div class="page-content">Value not found.</div>';
  const v = getValueRating(cv.id);
  const rc = v.managerRating ? CV_RATING_CONFIG[v.managerRating] : null;

  const idx = CORE_VALUES_DATA.indexOf(cv);
  const prev = CORE_VALUES_DATA[(idx - 1 + CORE_VALUES_DATA.length) % CORE_VALUES_DATA.length];
  const next = CORE_VALUES_DATA[(idx + 1) % CORE_VALUES_DATA.length];

  const activeTab = state.cvLevelTab || 3;
  const activeRc = CV_RATING_CONFIG[activeTab];

  return `
    <div class="breadcrumb">
      <button class="back-arrow-btn" onclick="navigate('values')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        Core Values
      </button>
      <div class="skill-nav-arrows">
        <button class="skill-nav-btn" onclick="navigate('value','${prev.id}')" title="${escHtml(prev.label)}">‹ Prev</button>
        <button class="skill-nav-btn" onclick="navigate('value','${next.id}')" title="${escHtml(next.label)}">Next ›</button>
      </div>
    </div>

    <div style="display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-bottom:24px">
      <h1 class="skill-detail-title" style="margin-bottom:0">${escHtml(cv.label)}</h1>
      <span id="cv-last-updated" class="assessment-inline-date" style="flex-shrink:0">${v.lastUpdated ? `Last updated ${formatDate(v.lastUpdated)}` : ''}</span>
    </div>

    <div class="skill-detail-layout">
      <!-- MAIN CONTENT -->
      <div class="skill-detail-main">

        <!-- RATING DROPDOWN -->
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
          <span style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted)">Assessment</span>
          <select class="assess-dropdown" onchange="setValueRatingFromDetail('${cv.id}',this.value)">
            <option value="">— Not assessed —</option>
            ${[1,2,3,4,5].map(n => {
              const r = CV_RATING_CONFIG[n];
              return `<option value="${n}" ${v.managerRating === n ? 'selected' : ''}>${r.label}</option>`;
            }).join('')}
          </select>
        </div>

        <!-- LEVEL TABS -->
        ${(() => {
          const CV_TAB_SHORT = { 1: 'Unsat.', 2: 'Needs Dev.', 3: 'Meets Exp.', 4: 'Exceeds Exp.', 5: 'Outstanding' };
          return `<div class="level-tabs">
            <div class="tabs-header">
              ${[1,2,3,4,5].map(n => {
                const r = CV_RATING_CONFIG[n];
                return `<button class="tab-btn ${n === activeTab ? 'active' : ''}" style="${n === activeTab ? `background:${r.bg};color:${r.color};border-color:${r.color};--lc:${r.color};--lb:${r.bg}` : ''}" onclick="setCvLevelTab(${n})">
                  <span>${CV_TAB_SHORT[n]}</span>
                </button>`;
              }).join('')}
            </div>
            <div class="tab-content">
              <div class="tab-section">
                <div class="tab-section-title">What it looks like</div>
                <ul class="behavior-list">
                  ${(cv.rubric[activeTab] || '').split(/\.\s+/).filter(s => s.trim()).map(s => `
                    <li class="behavior-item">
                      <span class="behavior-bullet"></span>
                      <span>${escHtml(s.endsWith('.') ? s : s + '.')}</span>
                    </li>`).join('')}
                </ul>
              </div>
            </div>
          </div>`;
        })()}
      </div>

      <!-- SIDEBAR -->
      <div class="detail-sidebar">
        <div class="sidebar-panel">
          <div class="panel-header">
            <span class="panel-title">Notes</span>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label class="form-label" for="cv-notes-${cv.id}">Evidence &amp; Examples</label>
              <textarea class="form-textarea" id="cv-notes-${cv.id}" rows="8" placeholder="Add notes, examples, or evidence for this core value…" oninput="debounceSaveValueNotes('${cv.id}',this.value)">${escHtml(v.notes || '')}</textarea>
            </div>
            <div style="height:4px;display:flex;align-items:center;padding:0 0 8px">
              <span class="save-indicator" id="cv-save-indicator">✓ Saved</span>
            </div>
          </div>
        </div>

        <!-- RESOURCES PANEL -->
        ${(() => {
          const cvResources = getCVResources(cv.id);
          return `
          <div class="sidebar-panel">
            <div class="panel-header">
              <span class="panel-title">Resources</span>
              <span style="font-size:10px;color:var(--text-muted)">${cvResources.length} item${cvResources.length !== 1 ? 's' : ''}</span>
            </div>
            <div class="panel-body">
              ${cvResources.length > 0 ? `
                <div class="resource-list">
                  ${cvResources.map(r => {
                    const rt = RESOURCE_TYPES[r.type] || RESOURCE_TYPES.article;
                    return `
                      <div class="resource-item ${r.url ? 'resource-item-clickable' : ''}" ${r.url ? `onclick="window.open('${escHtml(r.url)}','_blank','noopener')"` : ''}>
                        <div class="resource-type-icon resource-type-${r.type}">${rt.icon}</div>
                        <div class="resource-info">
                          <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
                            <div style="flex:1;min-width:0">
                              <span class="resource-title">${escHtml(r.title)}</span>
                              ${r.desc ? `<div class="resource-desc">${escHtml(r.desc)}</div>` : ''}
                            </div>
                            <span class="resource-type-badge" style="flex-shrink:0">${rt.label}</span>
                          </div>
                        </div>
                        ${!r.curated ? `<button class="resource-delete" onclick="event.stopPropagation();deleteCVResource('${cv.id}','${r.id}')" title="Remove">✕</button>` : ''}
                      </div>
                    `;
                  }).join('')}
                </div>
              ` : `<div class="empty-state" style="padding:16px 0;text-align:left"><div style="font-size:12px;color:var(--text-muted)">No resources yet. Add your own below!</div></div>`}

              <button class="add-resource-toggle" id="cv-add-resource-toggle" onclick="toggleCVAddResource()">
                ${state.cvAddResourceOpen ? '✕ Close' : '＋ Add Resource'}
              </button>

              <div class="add-resource-form ${state.cvAddResourceOpen ? 'open' : ''}" id="cv-add-resource-form">
                <input class="form-input" id="cv-res-title" placeholder="Title*" />
                <input class="form-input" id="cv-res-url" placeholder="URL (optional)" />
                <input class="form-input" id="cv-res-desc" placeholder="Short description (optional)" />
                <div class="form-row">
                  <select class="form-select" id="cv-res-type">
                    ${Object.entries(RESOURCE_TYPES).map(([k, v]) => `<option value="${k}">${v.icon} ${v.label}</option>`).join('')}
                  </select>
                  <button class="btn btn-primary btn-sm" onclick="submitAddCVResource('${cv.id}')">Add</button>
                </div>
              </div>
            </div>
          </div>`;
        })()}
      </div>
    </div>
  `;
}

// ============ GOALS PAGE ============
function goalStatusBadge(status) {
  const sc = GOAL_STATUS_CONFIG[status] || GOAL_STATUS_CONFIG.not_started;
  return `<span style="display:inline-block;font-size:11px;font-weight:600;padding:4px 8px;border-radius:20px;color:${sc.color};background:${sc.bg};border:1px solid ${sc.border};white-space:nowrap">${sc.label}</span>`;
}

function renderGoalSection(sectionId, title, subtitle, goals, isEditable) {
  return `
    <div class="goals-section" id="goals-section-${sectionId}">
      <div class="goals-section-header">
        <div>
          <div class="goals-section-title">${title}</div>
          ${subtitle ? `<div class="goals-section-subtitle">${subtitle}</div>` : ''}
        </div>
        ${isEditable ? `<button class="btn btn-secondary btn-sm" onclick="openAddGoalModal('${sectionId}')">+ Add Goal</button>` : ''}
      </div>
      ${goals.length === 0 ? `
        <div class="goals-empty">No goals added yet. <button class="goals-empty-add" onclick="openAddGoalModal('${sectionId}')">Add one →</button></div>
      ` : `
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px">
          ${goals.map((g, i) => {
            const status = g.status || 'not_started';
            const sc = GOAL_STATUS_CONFIG[status];
            return `
              <div class="growth-theme-tile" style="position:relative" onclick="navigateToPersonalGoal('${g.id}')">
                ${isEditable ? `<button onclick="event.stopPropagation();deleteUserGoal('${sectionId}',${i})" class="evidence-delete" title="Delete" style="position:absolute;top:12px;right:12px">✕</button>` : ''}
                <div class="goals-goal-name" style="font-size:14px;margin-bottom:8px;padding-right:${isEditable ? '20px' : '0'}">${escHtml(g.goal)}</div>
                ${g.timeFrame ? `<div style="font-size:12px;color:var(--text-muted);margin-bottom:12px">${escHtml(g.timeFrame)}</div>` : '<div style="margin-bottom:12px"></div>'}
                <div style="display:flex;align-items:center;justify-content:space-between;margin-top:auto">
                  <select class="review-level-select" style="color:${sc.color};background:${sc.bg};border-color:${sc.color};font-weight:600;font-size:11px;min-width:0;flex-shrink:0" onclick="event.stopPropagation()" onchange="event.stopPropagation();saveGoalStatus('${sectionId}','${g.id}',this.value,${i})">
                    ${Object.entries(GOAL_STATUS_CONFIG).map(([k,v]) => `<option value="${k}" ${status===k?'selected':''}>${v.label}</option>`).join('')}
                  </select>
                  <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" style="color:var(--text-muted);flex-shrink:0"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"/></svg>
                </div>
              </div>`;
          }).join('')}
        </div>
      `}
    </div>
  `;
}

function navigateToGrowthTheme(themeId) {
  state.growthThemeId = themeId;
  state.view = 'growth-theme';
  state.detailNotesEditing = false;
  render();
  window.scrollTo(0, 0);
}

function navigateToPersonalGoal(goalId) {
  state.personalGoalId = goalId;
  state.view = 'personal-goal';
  state.designGoalAddMode = null;
  state.designGoalSuggestions = [];
  render();
  window.scrollTo(0, 0);
}

function savePersonalGoalEvidence(goalId, text, label) {
  if (!text.trim()) return;
  const d = getData();
  if (!d.personalGoalEvidence[goalId]) d.personalGoalEvidence[goalId] = [];
  d.personalGoalEvidence[goalId].push({ id: `pge_${Date.now()}`, label: label || 'Evidence', text: text.trim(), date: new Date().toISOString() });
  saveData(d);
  state.designGoalAddMode = null;
  render();
}

function deletePersonalGoalEvidence(goalId, evidenceId) {
  const d = getData();
  if (!d.personalGoalEvidence?.[goalId]) return;
  d.personalGoalEvidence[goalId] = d.personalGoalEvidence[goalId].filter(e => e.id !== evidenceId);
  saveData(d);
  render();
}

function confirmPersonalGoalSuggestion(goalId, idx) {
  const item = state.designGoalSuggestions[idx];
  if (!item) return;
  const d = getData();
  if (!d.personalGoalEvidence[goalId]) d.personalGoalEvidence[goalId] = [];
  d.personalGoalEvidence[goalId].push({ id: `pge_${Date.now()}`, label: item.label, text: item.text, date: item.date || new Date().toISOString() });
  saveData(d);
  state.designGoalSuggestions.splice(idx, 1);
  render();
}

function findPersonalGoalEvidence(goalId) {
  const goals = getPersonalGoals();
  const g = goals.find(x => x.id === goalId);
  if (!g) return;
  const stopWords = new Set(['a','an','the','and','or','but','in','on','at','to','for','of','with','by','from','as','is','was','are','be','been','being','have','has','had','do','does','did','will','would','could','should','may','might','that','this','these','those','it','its','i','my','we','our','you','your','they','their']);
  const keywords = (g.goal + ' ' + (g.kpi || '')).toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(w => w.length > 3 && !stopWords.has(w));
  const score = (text) => { if (!text) return 0; const t = text.toLowerCase(); return keywords.reduce((s, k) => s + (t.includes(k) ? 1 : 0), 0); };
  const d = getData();
  const candidates = [];
  (d.assessments ? Object.entries(d.assessments) : []).forEach(([sid, a]) => {
    const sk = getSkillById(sid);
    if (a.evidence) candidates.push({ text: a.evidence, label: sk ? sk.name + ' (Assessment)' : 'Assessment', date: a.lastUpdated, score: score(a.evidence) });
    if (a.goals)    candidates.push({ text: a.goals,    label: sk ? sk.name + ' (Goals)'      : 'Goals',      date: a.lastUpdated, score: score(a.goals) });
  });
  (d.personalGoals || []).filter(x => x.id !== goalId).forEach(pg => {
    if (pg.notes) candidates.push({ text: pg.notes, label: pg.goal + ' (Personal Goal)', date: null, score: score(pg.notes + ' ' + pg.goal) });
  });
  state.designGoalSuggestions = candidates.filter(c => c.score > 0).sort((a,b) => b.score - a.score).slice(0, 10);
  if (!state.designGoalSuggestions.length) state.designGoalSuggestions = [{ label: 'No matches found', text: 'No relevant evidence was found. Try adding evidence manually.', date: null, score: 0, noMatch: true }];
  state.designGoalAddMode = 'ai';
  render();
}

// ── Shared detail-page helpers ────────────────────────────────────────────────
function detailEvidenceCard(item, deleteFn) {
  return `
    <div class="evidence-card">
      <div class="evidence-card-header">
        <span class="evidence-card-label">${escHtml(item.label)}</span>
        ${item.tag ? `<span class="evidence-tag">${escHtml(item.tag)}</span>` : ''}
        ${item.date ? `<span class="evidence-date">${formatDate(item.date)}</span>` : ''}
        ${deleteFn ? `<button onclick="${deleteFn}" class="evidence-delete" title="Remove">✕</button>` : ''}
      </div>
      <div class="evidence-card-text">${escHtml(item.text)}</div>
    </div>`;
}

function detailSuggestionCard(item, idx, confirmExpr) {
  // confirmExpr: full JS expression string for the confirm action, e.g. "confirmFoo('id',2)"
  if (item.noMatch) return `<div class="evidence-card" style="color:var(--text-muted);font-size:13px">${escHtml(item.text)}</div>`;
  return `
    <div class="suggestion-card">
      <div class="evidence-card-header">
        <span class="evidence-card-label" style="flex:1">${escHtml(item.label)}</span>
        <span class="suggestion-badge">AI Suggested</span>
        ${item.date ? `<span class="evidence-date">${formatDate(item.date)}</span>` : ''}
      </div>
      <div class="evidence-card-text" style="margin-bottom:10px">${escHtml(item.text)}</div>
      <div style="display:flex;gap:8px">
        <button onclick="${confirmExpr}" class="btn btn-primary btn-sm">Add to Evidence</button>
        <button onclick="dismissDesignGoalSuggestion(${idx})" class="btn btn-secondary btn-sm">Dismiss</button>
      </div>
    </div>`;
}

function detailNotesPanel(notes, saveExpr) {
  // saveExpr: full JS expression called on Save click, e.g.
  //   "savePersonalGoalNote(document.getElementById('detail-notes-input').value)"
  //   "saveGrowthThemeNote('id', document.getElementById('detail-notes-input').value)"
  if (state.detailNotesEditing) {
    return `
      <div class="sidebar-panel" style="margin-bottom:24px">
        <div class="panel-header"><span class="panel-title">Notes</span></div>
        <div class="panel-body">
          <textarea id="detail-notes-input" class="form-input" rows="4" style="resize:vertical;margin-bottom:10px" placeholder="Add your notes…">${escHtml(notes)}</textarea>
          <div style="display:flex;gap:8px">
            <button onclick="${saveExpr}" class="btn btn-primary btn-sm">Save</button>
            <button onclick="state.detailNotesEditing=false;render()" class="btn btn-secondary btn-sm">Cancel</button>
          </div>
        </div>
      </div>`;
  }
  return `
    <div class="sidebar-panel" style="margin-bottom:24px">
      <div class="panel-header">
        <span class="panel-title">Notes</span>
        <button onclick="state.detailNotesEditing=true;render()" style="font-size:12px;font-weight:600;color:var(--primary);background:none;border:none;padding:0;cursor:pointer">${notes ? 'Edit' : '+ Add'}</button>
      </div>
      <div class="panel-body">
        <div style="font-size:14px;color:var(--text-secondary);line-height:1.6">${notes ? escHtml(notes) : '<span style="color:var(--text-muted);font-style:italic">No notes yet</span>'}</div>
      </div>
    </div>`;
}

function detailEvidenceSection(goalId, evidence, addFormId, saveFn, findFn, allItems, manualItems) {
  const isManual = state.designGoalAddMode === 'manual';
  const isAI = state.designGoalAddMode === 'ai';
  return `
    <div class="sidebar-panel">
      <div class="panel-header">
        <span class="panel-title">Evidence</span>
        <div style="display:flex;gap:8px">
          <button onclick="state.designGoalAddMode = isManual ? null : 'manual'; render()" class="btn btn-secondary btn-sm">+ Add</button>
          <button onclick="${findFn}" class="btn-ai-find">✦ Find with AI</button>
        </div>
      </div>
      <div class="panel-body" style="display:flex;flex-direction:column;gap:12px">
        ${isManual ? `
          <div class="evidence-add-form">
            <div class="detail-section-label" style="margin-bottom:8px">Add Evidence</div>
            <input id="${addFormId}-label" class="form-input" placeholder="Source / label" style="margin-bottom:8px" />
            <textarea id="${addFormId}-text" class="form-input" rows="3" placeholder="Describe the evidence…" style="resize:vertical"></textarea>
            <div style="display:flex;gap:8px;margin-top:10px">
              <button onclick="${saveFn}(document.getElementById('${addFormId}-text').value, document.getElementById('${addFormId}-label').value)" class="btn btn-primary btn-sm">Save</button>
              <button onclick="state.designGoalAddMode=null;render()" class="btn btn-secondary btn-sm">Cancel</button>
            </div>
          </div>` : ''}
        ${isAI ? `
          <div class="suggestion-card" style="background:#FFFBEB;border-color:#FDE68A">
            <div style="font-size:12px;font-weight:600;color:#92400E;margin-bottom:4px">✦ AI found ${state.designGoalSuggestions.length} potential match${state.designGoalSuggestions.length !== 1 ? 'es' : ''} from your data</div>
            <div style="font-size:12px;color:#78350F">Review and add anything relevant.</div>
          </div>
          ${state.designGoalSuggestions.length === 0
            ? `<div style="font-size:13px;color:var(--text-muted);font-style:italic">All suggestions reviewed.</div>`
            : state.designGoalSuggestions.map((s, i) => detailSuggestionCard(s, i, `confirmDesignGoalSuggestion('${goalId}',${i})`)).join('')}
          <button onclick="state.designGoalAddMode=null;render()" style="background:none;border:none;color:var(--text-muted);font-size:12px;cursor:pointer;padding:0">Done reviewing</button>
        ` : ''}
        ${(allItems || evidence).length === 0 && !isManual && !isAI
          ? `<div style="font-size:13px;color:var(--text-muted);font-style:italic">No evidence yet. Add manually or use AI to find matches.</div>`
          : (allItems || evidence).map(item => {
              const del = manualItems ? manualItems.find(e => e.text === item.text) : null;
              return detailEvidenceCard(item, del ? `deleteEvidenceItem('${goalId}','${del.id}')` : null);
            }).join('')}
      </div>
    </div>`;
}

function savePersonalGoalNote(notes) {
  const goals = getPersonalGoals();
  const g = goals.find(x => x.id === state.personalGoalId);
  if (!g) return;
  g.notes = notes;
  savePersonalGoals(goals);
  state.detailNotesEditing = false;
  render();
}

function saveDesignGoalNote(notes) {
  const c = getGoalContribution(state.designGoalId);
  c.notes = notes;
  saveGoalContribution(state.designGoalId, c);
  state.detailNotesEditing = false;
  render();
}

function renderPersonalGoalDetail() {
  const goals = getPersonalGoals();
  const d = getData();
  const g = goals.find(x => x.id === state.personalGoalId);
  if (!g) return '<div style="padding:32px">Goal not found.</div>';

  const idx = goals.findIndex(x => x.id === state.personalGoalId);
  const prevGoal = goals[(idx - 1 + goals.length) % goals.length];
  const nextGoal = goals[(idx + 1) % goals.length];

  const sc = GOAL_STATUS_CONFIG[g.status || 'not_started'];
  const evidence = d.personalGoalEvidence?.[g.id] || [];

  return `
    <div style="max-width:900px">
      <div class="breadcrumb">
        <button class="back-arrow-btn" onclick="state.view='goals';state.personalGoalId=null;state.designGoalAddMode=null;state.designGoalSuggestions=[];state.detailNotesEditing=false;render()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Goals
        </button>
        ${goals.length > 1 ? `
        <div class="skill-nav-arrows">
          <button class="skill-nav-btn" onclick="navigateToPersonalGoal('${prevGoal.id}')" title="${escHtml(prevGoal.goal)}">‹ Prev</button>
          <button class="skill-nav-btn" onclick="navigateToPersonalGoal('${nextGoal.id}')" title="${escHtml(nextGoal.goal)}">Next ›</button>
        </div>` : ''}
      </div>

      <div style="display:flex;align-items:flex-start;gap:12px;flex-wrap:wrap;margin-bottom:4px">
        <h1 style="font-size:22px;font-weight:800;color:var(--text);line-height:1.3;margin:0;flex:1;max-width:600px">${escHtml(g.goal)}</h1>
        <select class="review-level-select" style="color:${sc.color};background:${sc.bg};border-color:${sc.color};font-weight:600;flex-shrink:0;margin-top:4px" onchange="saveGoalStatusFromDetail('${g.id}',this.value)">
          ${Object.entries(GOAL_STATUS_CONFIG).map(([k,v]) => `<option value="${k}" ${(g.status||'not_started')===k?'selected':''}>${v.label}</option>`).join('')}
        </select>
      </div>
      ${g.timeFrame ? `<div style="font-size:13px;color:var(--text-muted);margin-bottom:24px">${escHtml(g.timeFrame)}</div>` : '<div style="margin-bottom:24px"></div>'}

      <div class="sidebar-panel" style="margin-bottom:24px">
        <div class="panel-header"><span class="panel-title">KPI / How I'll Contribute</span></div>
        <div class="panel-body"><div style="font-size:14px;color:var(--text-secondary);line-height:1.6">${escHtml(g.kpi || '—')}</div></div>
      </div>

      ${detailNotesPanel(g.notes || '', "savePersonalGoalNote(document.getElementById('detail-notes-input').value)")}

      <div class="sidebar-panel">
        <div class="panel-header">
          <span class="panel-title">Evidence</span>
          <div style="display:flex;gap:8px">
            <button onclick="state.designGoalAddMode=state.designGoalAddMode==='manual'?null:'manual';render()" class="btn btn-secondary btn-sm">+ Add</button>
            <button onclick="findPersonalGoalEvidence('${g.id}')" class="btn-ai-find">✦ Find with AI</button>
          </div>
        </div>
        <div class="panel-body" style="display:flex;flex-direction:column;gap:12px">
          ${state.designGoalAddMode === 'manual' ? `
            <div class="evidence-add-form">
              <div class="detail-section-label" style="margin-bottom:8px">Add Evidence</div>
              <input id="pge-label" class="form-input" placeholder="Source / label" style="margin-bottom:8px" />
              <textarea id="pge-text" class="form-input" rows="3" placeholder="Describe the evidence…" style="resize:vertical"></textarea>
              <div style="display:flex;gap:8px;margin-top:10px">
                <button onclick="savePersonalGoalEvidence('${g.id}',document.getElementById('pge-text').value,document.getElementById('pge-label').value)" class="btn btn-primary btn-sm">Save</button>
                <button onclick="state.designGoalAddMode=null;render()" class="btn btn-secondary btn-sm">Cancel</button>
              </div>
            </div>` : ''}
          ${state.designGoalAddMode === 'ai' ? `
            <div class="suggestion-card">
              <div style="font-size:12px;font-weight:600;color:#92400E;margin-bottom:4px">✦ AI found ${state.designGoalSuggestions.length} potential match${state.designGoalSuggestions.length!==1?'es':''}</div>
              <div style="font-size:12px;color:#78350F">Review and add anything relevant.</div>
            </div>
            ${state.designGoalSuggestions.map((s,i) => detailSuggestionCard(s,i,`confirmPersonalGoalSuggestion('${g.id}',${i})`)).join('')}
            <button onclick="state.designGoalAddMode=null;render()" style="background:none;border:none;color:var(--text-muted);font-size:12px;cursor:pointer;padding:0">Done reviewing</button>
          ` : ''}
          ${evidence.length === 0 && !state.designGoalAddMode
            ? `<div style="font-size:13px;color:var(--text-muted);font-style:italic">No evidence yet. Add manually or use AI to find matches.</div>`
            : evidence.map(item => detailEvidenceCard(item, `deletePersonalGoalEvidence('${g.id}','${item.id}')`)).join('')}
        </div>
      </div>
    </div>`;
}

function saveGoalStatusFromDetail(goalId, status) {
  const goals = getPersonalGoals();
  const idx = goals.findIndex(g => g.id === goalId);
  if (idx === -1) return;
  goals[idx].status = status;
  savePersonalGoals(goals);
  render();
}

function renderGrowthThemeDetail() {
  const d = getData();
  const themes = d.growthThemes || [];
  const t = themes.find(x => x.id === state.growthThemeId);
  if (!t) return '<div style="padding:32px">Theme not found.</div>';

  const base = typeof d.growthThemeScore === 'number' ? d.growthThemeScore : null;
  const s0 = base !== null ? base.toFixed(1) : null;
  const s1 = base !== null ? (base + 0.25).toFixed(2) : null;
  const s2 = base !== null ? (base + 0.50).toFixed(2) : null;

  const scoreCol = (label, score, bg, color, items, howTo) => {
    const list = Array.isArray(items) ? items : (items ? [items] : []);
    const hw = Array.isArray(howTo) ? howTo : [];
    return `
      <div style="background:${bg};border-radius:8px;padding:14px 16px;display:flex;flex-direction:column;box-shadow:var(--shadow-sm)">
        <div style="display:flex;align-items:center;gap:5px;margin-bottom:10px">
          ${score !== null ? `<span style="font-size:16px;font-weight:800;color:${color};line-height:1">${score}</span><span style="font-size:10px;font-weight:600;color:${color};opacity:.6">/5</span>` : ''}
          <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:${color}${score !== null ? ';margin-left:2px' : ''}">${label}</span>
        </div>
        <ul style="margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:5px;flex:1">
          ${list.map(i => `<li style="position:relative;padding-left:13px;font-size:13px;color:var(--text-secondary);line-height:1.5"><span style="position:absolute;left:1px;top:8px;width:5px;height:5px;border-radius:50%;background:${color};opacity:.5"></span>${escHtml(i)}</li>`).join('')}
        </ul>
        ${hw.length ? `<button onclick="openGrowthThemeLevelModal('${t.id}','${label.toLowerCase()}')" style="margin-top:12px;background:none;border:none;padding:0;font-size:12px;font-weight:600;color:var(--primary);cursor:pointer;text-align:left">How to get here →</button>` : ''}
      </div>`;
  };

  const CH = `font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--text-muted);margin-bottom:10px`;
  const bullets = (items) => (items || []).map(i =>
    `<li style="position:relative;padding-left:14px;font-size:13px;color:var(--text-secondary);line-height:1.55;margin-bottom:4px"><span style="position:absolute;left:2px;top:8px;width:5px;height:5px;border-radius:50%;background:var(--text-muted)"></span>${escHtml(i)}</li>`
  ).join('');

  // Evidence section
  const evidence = d.growthThemeEvidence?.[t.id] || [];

  const themeIdx = themes.findIndex(x => x.id === state.growthThemeId);
  const prevTheme = themes[(themeIdx - 1 + themes.length) % themes.length];
  const nextTheme = themes[(themeIdx + 1) % themes.length];

  return `
    <div style="max-width:900px">
      <!-- Back nav + prev/next -->
      <div class="breadcrumb">
        <button class="back-arrow-btn" onclick="state.view='goals';state.growthThemeId=null;render()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Goals
        </button>
        <div class="skill-nav-arrows">
          <button class="skill-nav-btn" onclick="navigateToGrowthTheme('${prevTheme.id}')" title="${escHtml(prevTheme.theme)}">‹ Prev</button>
          <button class="skill-nav-btn" onclick="navigateToGrowthTheme('${nextTheme.id}')" title="${escHtml(nextTheme.theme)}">Next ›</button>
        </div>
      </div>

      <!-- Header -->
      <div style="margin-bottom:24px">
        <h1 style="font-size:22px;font-weight:800;color:var(--text);margin:0">${escHtml(t.theme)}</h1>
      </div>

      <!-- Today / Better / Best -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:24px">
        ${scoreCol('Today',  s0, '#FFFFFF', 'var(--text-muted)', t.today,  t.todayHowTo)}
        ${scoreCol('Better', s1, '#EFF6FF', '#3B82F6',           t.better, t.betterHowTo)}
        ${scoreCol('Best',   s2, '#F0FDF4', 'var(--green)',       t.best,   t.bestHowTo)}
      </div>

      <!-- Indicators / Dependencies / Collaborators -->
      <div class="review-table-wrap" style="overflow:hidden;margin-bottom:24px">
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;padding:16px 20px;gap:24px">
          <div><div style="${CH}">Indicators</div><ul style="margin:0;padding:0;list-style:none">${bullets(t.indicators)}</ul></div>
          <div><div style="${CH}">Dependencies</div><ul style="margin:0;padding:0;list-style:none">${bullets(t.dependencies)}</ul></div>
          <div><div style="${CH}">Collaborators</div><ul style="margin:0;padding:0;list-style:none">${bullets(t.collaborators)}</ul></div>
        </div>
      </div>

      <!-- Notes panel -->
      ${detailNotesPanel(d.growthThemeNotes?.[t.id] || '', `saveGrowthThemeNote('${t.id}', document.getElementById('detail-notes-input').value)`)}

      <!-- Evidence panel -->
      <div class="sidebar-panel">
        <div class="panel-header">
          <span class="panel-title">Evidence</span>
          <div style="display:flex;gap:8px">
            <button onclick="state.designGoalAddMode=state.designGoalAddMode==='manual'?null:'manual';render()" class="btn btn-secondary btn-sm">+ Add</button>
            <button onclick="findGrowthThemeEvidence('${t.id}')" class="btn-ai-find">✦ Find with AI</button>
          </div>
        </div>
        <div class="panel-body" style="display:flex;flex-direction:column;gap:12px">
          ${state.designGoalAddMode === 'manual' ? `
            <div class="evidence-add-form">
              <div class="detail-section-label" style="margin-bottom:8px">Add Evidence</div>
              <input id="gte-label" class="form-input" placeholder="Source / label" style="margin-bottom:8px" />
              <textarea id="gte-text" class="form-input" rows="3" placeholder="Describe the evidence…" style="resize:vertical"></textarea>
              <div style="display:flex;gap:8px;margin-top:10px">
                <button onclick="saveGrowthThemeEvidence('${t.id}',document.getElementById('gte-text').value,document.getElementById('gte-label').value)" class="btn btn-primary btn-sm">Save</button>
                <button onclick="state.designGoalAddMode=null;render()" class="btn btn-secondary btn-sm">Cancel</button>
              </div>
            </div>` : ''}
          ${state.designGoalAddMode === 'ai' ? `
            <div class="suggestion-card" style="background:#FFFBEB;border-color:#FDE68A">
              <div style="font-size:12px;font-weight:600;color:#92400E;margin-bottom:4px">✦ AI found ${state.designGoalSuggestions.length} potential match${state.designGoalSuggestions.length !== 1 ? 'es' : ''}</div>
              <div style="font-size:12px;color:#78350F">Review and add anything relevant to this theme.</div>
            </div>
            ${state.designGoalSuggestions.length === 0
              ? `<div style="font-size:13px;color:var(--text-muted);font-style:italic">All suggestions reviewed.</div>`
              : state.designGoalSuggestions.map((s, i) => detailSuggestionCard(s, i, `confirmGrowthThemeSuggestion('${t.id}',${i})`)).join('')}
            <button onclick="state.designGoalAddMode=null;render()" style="background:none;border:none;color:var(--text-muted);font-size:12px;cursor:pointer;padding:0">Done reviewing</button>
          ` : ''}
          ${evidence.length === 0 && !state.designGoalAddMode
            ? `<div style="font-size:13px;color:var(--text-muted);font-style:italic">No evidence yet. Add manually or use AI to find relevant items.</div>`
            : evidence.map(e => detailEvidenceCard(
                { label: e.label, text: e.text, date: e.date, tag: e.source === 'ai_confirmed' ? 'AI Found' : null },
                `deleteGrowthThemeEvidence('${t.id}','${e.id}')`
              )).join('')}
        </div>
      </div>

      ${state.growthThemeLevelModal ? renderGrowthThemeLevelModal() : ''}
    </div>
  `;
}

function renderGrowthThemes() {
  const d = getData();
  const themes = d.growthThemes || [];
  if (!themes.length) return '';

  const base = typeof d.growthThemeScore === 'number' ? d.growthThemeScore : null;

  return `
    <div class="goals-section">
      <div class="goals-section-header">
        <div>
          <div class="goals-section-title">Growth Themes</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px">
        ${themes.map(t => {
          const today = base !== null ? base.toFixed(1) : null;
          const best  = base !== null ? (base + 0.50).toFixed(2) : null;
          const count = (d.growthThemeEvidence?.[t.id] || []).length;
          const preview = (t.today || [])[0] || '';
          return `
            <div class="growth-theme-tile" onclick="navigateToGrowthTheme('${t.id}')">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:8px">
                <div class="goals-goal-name" style="font-size:14px">${escHtml(t.theme)}</div>
                <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" style="color:var(--text-muted);flex-shrink:0;margin-top:2px"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"/></svg>
              </div>
              ${preview ? `<div style="font-size:12px;color:var(--text-muted);line-height:1.5;margin-bottom:12px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${escHtml(preview)}</div>` : '<div style="margin-bottom:12px"></div>'}
              <div style="display:flex;align-items:center;justify-content:space-between;margin-top:auto">
                ${today !== null ? `<span style="font-size:11px;font-weight:600;color:var(--text-muted)">${today} → ${best}</span>` : '<span></span>'}
                ${count > 0
                  ? `<span style="font-size:11px;font-weight:700;color:var(--primary);background:var(--primary-light);padding:2px 8px;border-radius:20px">${count} piece${count !== 1 ? 's' : ''}</span>`
                  : `<span style="font-size:11px;color:var(--text-muted);font-style:italic">No evidence yet</span>`}
              </div>
            </div>`;
        }).join('')}
      </div>
    </div>
  `;
}

function getDesignGoalEvidence(g) {
  const d = getData();
  const od = getOutreachData();
  const items = [];
  if (g.evidenceSources.includes('outreach')) {
    (od.entries || []).forEach(e => {
      if (e.notes) items.push({ label: e.merchant, text: e.notes, date: e.date, tag: e.type === 'hve' ? 'HVE' : 'Outreach' });
    });
  }
  if (g.evidenceSources.includes('skills')) {
    g.evidenceSkills.forEach(sid => {
      const a = d.assessments[sid];
      if (!a?.evidence) return;
      const skill = SKILLS_DATA.skills.find(s => s.id === sid);
      if (skill) items.push({ label: skill.name, text: a.evidence, date: a.lastUpdated, tag: a.managerLevel || null });
    });
  }
  // Add manually saved evidence
  const d2 = getData();
  (d2.designGoalEvidence?.[g.id] || []).forEach(e => {
    items.push({ label: e.label, text: e.text, date: e.date, tag: e.source === 'ai_confirmed' ? 'AI Found' : 'Manual' });
  });
  return items;
}

function navigateToDesignGoal(goalId) {
  state.designGoalId = goalId;
  state.view = 'design-goal';
  state.designGoalAddMode = null;
  state.designGoalSuggestions = [];
  render();
  window.scrollTo(0, 0);
}

function renderDesignGoalDetail() {
  const g = DESIGN_TEAM_GOALS.find(x => x.id === state.designGoalId);
  if (!g) return '<div style="padding:32px">Goal not found.</div>';

  const gIdx = DESIGN_TEAM_GOALS.findIndex(x => x.id === state.designGoalId);
  const prevGoal = DESIGN_TEAM_GOALS[(gIdx - 1 + DESIGN_TEAM_GOALS.length) % DESIGN_TEAM_GOALS.length];
  const nextGoal = DESIGN_TEAM_GOALS[(gIdx + 1) % DESIGN_TEAM_GOALS.length];

  const d = getData();
  const contrib = getGoalContribution(g.id);
  const sc = GOAL_STATUS_CONFIG[contrib.status || 'not_started'];
  const allItems = getDesignGoalEvidence(g);
  const manualItems = d.designGoalEvidence?.[g.id] || [];

  return `
    <div style="max-width:900px">
      <div class="breadcrumb">
        <button class="back-arrow-btn" onclick="state.view='goals';state.designGoalId=null;state.designGoalAddMode=null;state.designGoalSuggestions=[];state.detailNotesEditing=false;render()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Goals
        </button>
        ${DESIGN_TEAM_GOALS.length > 1 ? `
        <div class="skill-nav-arrows">
          <button class="skill-nav-btn" onclick="navigateToDesignGoal('${prevGoal.id}')" title="${escHtml(prevGoal.goal)}">‹ Prev</button>
          <button class="skill-nav-btn" onclick="navigateToDesignGoal('${nextGoal.id}')" title="${escHtml(nextGoal.goal)}">Next ›</button>
        </div>` : ''}
      </div>

      <!-- Header -->
      <div style="display:flex;align-items:flex-start;gap:12px;flex-wrap:wrap;margin-bottom:4px">
        <h1 style="font-size:22px;font-weight:800;color:var(--text);line-height:1.3;margin:0;flex:1;max-width:600px">${escHtml(g.goal)}</h1>
        <select class="review-level-select" style="color:${sc.color};background:${sc.bg};border-color:${sc.color};font-weight:600;flex-shrink:0;margin-top:4px" onchange="saveDesignGoalStatusFromDetail('${g.id}',this.value)">
          ${Object.entries(GOAL_STATUS_CONFIG).map(([k,v]) => `<option value="${k}" ${(contrib.status||'not_started')===k?'selected':''}>${v.label}</option>`).join('')}
        </select>
      </div>
      ${g.timeFrame ? `<div style="font-size:13px;color:var(--text-muted);margin-bottom:24px">${escHtml(g.timeFrame)}</div>` : '<div style="margin-bottom:24px"></div>'}

      <!-- KPI panel -->
      <div class="sidebar-panel" style="margin-bottom:24px">
        <div class="panel-header"><span class="panel-title">KPI / How I'll Contribute</span></div>
        <div class="panel-body"><div style="font-size:14px;color:var(--text-secondary);line-height:1.6">${escHtml(g.kpi || '—')}</div></div>
      </div>

      <!-- Notes panel -->
      ${detailNotesPanel(contrib.notes || '', "saveDesignGoalNote(document.getElementById('detail-notes-input').value)")}

      <!-- Evidence panel -->
      <div class="sidebar-panel">
        <div class="panel-header">
          <span class="panel-title">Evidence</span>
          <div style="display:flex;gap:8px">
            <button onclick="state.designGoalAddMode=state.designGoalAddMode==='manual'?null:'manual';render()" class="btn btn-secondary btn-sm">+ Add</button>
            <button onclick="findDesignGoalEvidence('${g.id}')" class="btn-ai-find">✦ Find with AI</button>
          </div>
        </div>
        <div class="panel-body" style="display:flex;flex-direction:column;gap:12px">
          ${state.designGoalAddMode === 'manual' ? `
            <div class="evidence-add-form">
              <div class="detail-section-label" style="margin-bottom:8px">Add Evidence</div>
              <input id="dge2-label" class="form-input" placeholder="Source / label" style="margin-bottom:8px" />
              <textarea id="dge2-text" class="form-input" rows="3" placeholder="Describe the evidence…" style="resize:vertical"></textarea>
              <div style="display:flex;gap:8px;margin-top:10px">
                <button onclick="saveDesignGoalEvidence('${g.id}',document.getElementById('dge2-text').value,document.getElementById('dge2-label').value)" class="btn btn-primary btn-sm">Save</button>
                <button onclick="state.designGoalAddMode=null;render()" class="btn btn-secondary btn-sm">Cancel</button>
              </div>
            </div>` : ''}
          ${state.designGoalAddMode === 'ai' ? `
            <div class="suggestion-card" style="background:#FFFBEB;border-color:#FDE68A">
              <div style="font-size:12px;font-weight:600;color:#92400E;margin-bottom:4px">✦ AI found ${state.designGoalSuggestions.length} potential match${state.designGoalSuggestions.length !== 1 ? 'es' : ''} from your data</div>
              <div style="font-size:12px;color:#78350F">Review and add anything relevant.</div>
            </div>
            ${state.designGoalSuggestions.length === 0
              ? `<div style="font-size:13px;color:var(--text-muted);font-style:italic">All suggestions reviewed.</div>`
              : state.designGoalSuggestions.map((s, i) => detailSuggestionCard(s, i, `confirmDesignGoalSuggestion('${g.id}',${i})`)).join('')}
            <button onclick="state.designGoalAddMode=null;render()" style="background:none;border:none;color:var(--text-muted);font-size:12px;cursor:pointer;padding:0">Done reviewing</button>
          ` : ''}
          ${allItems.length === 0 && !state.designGoalAddMode
            ? `<div style="font-size:13px;color:var(--text-muted);font-style:italic">No evidence yet. Add manually or use AI to find matches.</div>`
            : allItems.map(item => {
                const manualMatch = manualItems.find(e => e.text === item.text);
                return detailEvidenceCard(item, manualMatch ? `deleteDesignGoalEvidence('${g.id}','${manualMatch.id}')` : null);
              }).join('')}
        </div>
      </div>
    </div>`;
}

function saveDesignGoalStatusFromDetail(goalId, status) {
  const c = getGoalContribution(goalId);
  c.status = status;
  saveGoalContribution(goalId, c);
  render();
}

function renderDesignTeamGoals() {
  return `
    <div class="goals-section">
      <div class="goals-section-header">
        <div>
          <div class="goals-section-title">2026 Design Team Goals</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px">
        ${DESIGN_TEAM_GOALS.map(g => {
          const count = getDesignGoalEvidence(g).length;
          const contrib = getGoalContribution(g.id);
          const sc = GOAL_STATUS_CONFIG[contrib.status || 'not_started'];
          return `
            <div class="growth-theme-tile" onclick="navigateToDesignGoal('${g.id}')">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:8px">
                <div class="goals-goal-name" style="font-size:14px">${escHtml(g.goal)}</div>
                <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" style="color:var(--text-muted);flex-shrink:0;margin-top:2px"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"/></svg>
              </div>
              ${g.kpi ? `<div style="font-size:12px;color:var(--text-muted);line-height:1.5;margin-bottom:12px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${escHtml(g.kpi)}</div>` : '<div style="margin-bottom:12px"></div>'}
              <div style="display:flex;align-items:center;justify-content:space-between;margin-top:auto">
                <span style="font-size:11px;font-weight:600;color:${sc.color};background:${sc.bg};padding:2px 8px;border-radius:20px;border:1px solid ${sc.color}22">${sc.label}</span>
                ${count > 0
                  ? `<span style="font-size:11px;font-weight:700;color:var(--primary);background:var(--primary-light);padding:2px 8px;border-radius:20px">${count} piece${count !== 1 ? 's' : ''}</span>`
                  : `<span style="font-size:11px;color:var(--text-muted);font-style:italic">No evidence yet</span>`}
              </div>
            </div>`;
        }).join('')}
      </div>
    </div>`;
}

function saveDesignGoalEvidence(goalId, text, label) {
  if (!text.trim()) return;
  const d = getData();
  if (!d.designGoalEvidence) d.designGoalEvidence = {};
  if (!d.designGoalEvidence[goalId]) d.designGoalEvidence[goalId] = [];
  d.designGoalEvidence[goalId].push({
    id: 'dge_' + Date.now(),
    text: text.trim(),
    label: label || 'Manual',
    date: new Date().toISOString().split('T')[0],
    source: 'manual'
  });
  saveData(d);
  state.designGoalAddMode = null;
  render();
}

function deleteDesignGoalEvidence(goalId, evidenceId) {
  const d = getData();
  if (!d.designGoalEvidence?.[goalId]) return;
  d.designGoalEvidence[goalId] = d.designGoalEvidence[goalId].filter(e => e.id !== evidenceId);
  saveData(d);
  render();
}

function confirmDesignGoalSuggestion(goalId, idx) {
  const item = state.designGoalSuggestions[idx];
  if (!item) return;
  const d = getData();
  if (!d.designGoalEvidence) d.designGoalEvidence = {};
  if (!d.designGoalEvidence[goalId]) d.designGoalEvidence[goalId] = [];
  d.designGoalEvidence[goalId].push({
    id: 'dge_' + Date.now() + '_' + idx,
    text: item.text,
    label: item.label,
    date: item.date || new Date().toISOString().split('T')[0],
    source: 'ai_confirmed'
  });
  state.designGoalSuggestions.splice(idx, 1);
  saveData(d);
  render();
}

function dismissDesignGoalSuggestion(idx) {
  state.designGoalSuggestions.splice(idx, 1);
  if (state.designGoalSuggestions.length === 0) state.designGoalAddMode = null;
  render();
}

function saveGrowthThemeNote(themeId, notes) {
  const d = getData();
  if (!d.growthThemeNotes) d.growthThemeNotes = {};
  d.growthThemeNotes[themeId] = notes;
  saveData(d);
  state.detailNotesEditing = false;
  render();
}

function saveGrowthThemeEvidence(themeId, text, label) {
  if (!text.trim()) return;
  const d = getData();
  if (!d.growthThemeEvidence) d.growthThemeEvidence = {};
  if (!d.growthThemeEvidence[themeId]) d.growthThemeEvidence[themeId] = [];
  d.growthThemeEvidence[themeId].push({
    id: 'gte_' + Date.now(),
    text: text.trim(),
    label: label || 'Manual',
    date: new Date().toISOString().split('T')[0],
    source: 'manual'
  });
  saveData(d);
  state.designGoalAddMode = null;
  render();
}

function deleteGrowthThemeEvidence(themeId, evidenceId) {
  const d = getData();
  if (!d.growthThemeEvidence?.[themeId]) return;
  d.growthThemeEvidence[themeId] = d.growthThemeEvidence[themeId].filter(e => e.id !== evidenceId);
  saveData(d);
  render();
}

function confirmGrowthThemeSuggestion(themeId, idx) {
  const item = state.designGoalSuggestions[idx];
  if (!item) return;
  const d = getData();
  if (!d.growthThemeEvidence) d.growthThemeEvidence = {};
  if (!d.growthThemeEvidence[themeId]) d.growthThemeEvidence[themeId] = [];
  d.growthThemeEvidence[themeId].push({
    id: 'gte_' + Date.now() + '_' + idx,
    text: item.text,
    label: item.label,
    date: item.date || new Date().toISOString().split('T')[0],
    source: 'ai_confirmed'
  });
  state.designGoalSuggestions.splice(idx, 1);
  saveData(d);
  render();
}

function findGrowthThemeEvidence(themeId) {
  const d = getData();
  const od = getOutreachData();
  const t = (d.growthThemes || []).find(x => x.id === themeId);
  if (!t) return;

  const stopWords = new Set(['the','a','an','and','or','to','of','in','for','with','on','at','from','that','this','as','is','are','was','were','be','have','has','had','by','how','what','when','where','who','will','we','our','your','their','its','it','not','but','so','if','then','do','did','can','may','more','each','all','per','one','two','three','about','into','through','team','design','product']);
  const srcText = [t.theme, ...(t.today||[]), ...(t.better||[]), ...(t.best||[])].join(' ');
  const keywords = [...srcText.toLowerCase().matchAll(/\b[a-z]{4,}\b/g)]
    .map(m => m[0]).filter(w => !stopWords.has(w));

  const score = (text) => {
    if (!text) return 0;
    const lower = text.toLowerCase();
    return keywords.reduce((n, kw) => n + (lower.includes(kw) ? 1 : 0), 0);
  };

  const alreadyAdded = new Set((d.growthThemeEvidence?.[themeId] || []).map(e => e.text));
  const suggestions = [];

  Object.entries(d.assessments || {}).forEach(([skillId, a]) => {
    if (a.evidence && !alreadyAdded.has(a.evidence) && score(a.evidence) > 0) {
      const skill = SKILLS_DATA.skills.find(x => x.id === skillId);
      suggestions.push({ text: a.evidence, label: skill?.name || skillId, date: a.lastUpdated?.split('T')[0], score: score(a.evidence), source: 'assessment' });
    }
    if (a.goals && !alreadyAdded.has(a.goals) && score(a.goals) > 0) {
      const skill = SKILLS_DATA.skills.find(x => x.id === skillId);
      suggestions.push({ text: a.goals, label: (skill?.name || skillId) + ' (goal)', date: a.lastUpdated?.split('T')[0], score: score(a.goals), source: 'goal_note' });
    }
  });

  (d.personalGoals || []).forEach(g => {
    if (g.notes && !alreadyAdded.has(g.notes) && score(g.notes + ' ' + g.goal) > 0) {
      suggestions.push({ text: g.notes, label: g.goal, date: null, score: score(g.notes + ' ' + g.goal), source: 'personal_goal' });
    }
  });

  (od.entries || []).forEach(e => {
    if (e.notes && !alreadyAdded.has(e.notes) && score(e.notes) > 0) {
      suggestions.push({ text: e.notes, label: e.merchant, date: e.date, score: score(e.notes), source: 'outreach' });
    }
  });

  suggestions.sort((a, b) => b.score - a.score);
  state.designGoalSuggestions = suggestions.slice(0, 10);
  state.designGoalAddMode = 'ai';
  render();
}

function findDesignGoalEvidence(goalId) {
  const g = DESIGN_TEAM_GOALS.find(x => x.id === goalId);
  if (!g) return;
  const d = getData();
  const od = getOutreachData();

  // Build keyword list from goal + kpi text
  const stopWords = new Set(['the','a','an','and','or','to','of','in','for','with','on','at','from','that','this','as','is','are','was','were','be','have','has','had','by','how','what','when','where','who','will','we','our','your','their','its','it','not','but','so','if','then','do','did','can','may','more','each','all','per','one','two','three','about','into','through','team','design','product']);
  const keywords = [...(g.goal + ' ' + (g.kpi || '')).toLowerCase().matchAll(/\b[a-z]{4,}\b/g)]
    .map(m => m[0])
    .filter(w => !stopWords.has(w));

  const score = (text) => {
    if (!text) return 0;
    const lower = text.toLowerCase();
    return keywords.reduce((n, kw) => n + (lower.includes(kw) ? 1 : 0), 0);
  };

  const suggestions = [];
  const alreadyAdded = new Set((d.designGoalEvidence?.[goalId] || []).map(e => e.text));

  // Already auto-found items — these are already shown, skip them
  // Scan assessment evidence not already in auto-found
  const autoFoundTexts = new Set(getDesignGoalEvidence(g).map(i => i.text));

  // Scan ALL assessment evidence
  Object.entries(d.assessments || {}).forEach(([skillId, a]) => {
    if (a.evidence && !autoFoundTexts.has(a.evidence) && !alreadyAdded.has(a.evidence)) {
      const s = score(a.evidence) + score(a.goals);
      if (s > 0) {
        const skill = SKILLS_DATA.skills.find(x => x.id === skillId);
        suggestions.push({ text: a.evidence, label: skill?.name || skillId, date: a.lastUpdated?.split('T')[0], score: s, source: 'assessment' });
      }
    }
    if (a.goals && !autoFoundTexts.has(a.goals) && !alreadyAdded.has(a.goals) && score(a.goals) > 0) {
      const skill = SKILLS_DATA.skills.find(x => x.id === skillId);
      suggestions.push({ text: a.goals, label: (skill?.name || skillId) + ' (goal)', date: a.lastUpdated?.split('T')[0], score: score(a.goals), source: 'goal_note' });
    }
  });

  // Scan personal goals notes
  (d.personalGoals || []).forEach(g2 => {
    if (g2.notes && !autoFoundTexts.has(g2.notes) && !alreadyAdded.has(g2.notes) && score(g2.notes + ' ' + g2.goal) > 0) {
      suggestions.push({ text: g2.notes, label: g2.goal, date: null, score: score(g2.notes + ' ' + g2.goal), source: 'personal_goal' });
    }
  });

  // Scan outreach entries not already surfaced
  (od.entries || []).forEach(e => {
    if (e.notes && !autoFoundTexts.has(e.notes) && !alreadyAdded.has(e.notes) && score(e.notes) > 0) {
      suggestions.push({ text: e.notes, label: e.merchant, date: e.date, score: score(e.notes), source: 'outreach' });
    }
  });

  // Sort by score desc, limit to 10
  suggestions.sort((a, b) => b.score - a.score);
  state.designGoalSuggestions = suggestions.slice(0, 10);
  state.designGoalAddMode = 'ai';
  render();
}

function renderDesignGoalModal() {
  const g = DESIGN_TEAM_GOALS.find(x => x.id === state.designGoalModal);
  if (!g) return '';
  const items = getDesignGoalEvidence(g);
  const d = getData();
  const manualItems = d.designGoalEvidence?.[g.id] || [];

  const evidenceCard = (item, opts = {}) => `
    <div style="padding:12px 14px;background:var(--bg);border-radius:8px;border:1px solid var(--border);position:relative">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
        <span style="font-size:12px;font-weight:700;color:var(--text)">${escHtml(item.label)}</span>
        ${item.tag ? `<span style="font-size:10px;font-weight:600;padding:2px 7px;border-radius:20px;background:var(--primary-light);color:var(--primary)">${escHtml(item.tag)}</span>` : ''}
        ${item.date ? `<span style="font-size:11px;color:var(--text-muted);margin-left:auto">${formatDate(item.date)}</span>` : ''}
        ${opts.deleteId ? `<button onclick="deleteDesignGoalEvidence('${g.id}','${opts.deleteId}')" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:14px;padding:0 4px;line-height:1;margin-left:${item.date ? '8px' : 'auto'}" title="Remove">✕</button>` : ''}
      </div>
      <div style="font-size:13px;color:var(--text-secondary);line-height:1.5">${escHtml(item.text)}</div>
    </div>`;

  const suggestionCard = (item, idx) => `
    <div style="padding:12px 14px;background:#FFFBEB;border-radius:8px;border:1px solid #FDE68A">
      <div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:6px">
        <span style="font-size:12px;font-weight:700;color:var(--text);flex:1">${escHtml(item.label)}</span>
        <span style="font-size:10px;font-weight:600;padding:2px 7px;border-radius:20px;background:#FEF3C7;color:#92400E;white-space:nowrap">AI Suggested</span>
        ${item.date ? `<span style="font-size:11px;color:var(--text-muted);white-space:nowrap">${formatDate(item.date)}</span>` : ''}
      </div>
      <div style="font-size:13px;color:var(--text-secondary);line-height:1.5;margin-bottom:10px">${escHtml(item.text)}</div>
      <div style="display:flex;gap:8px">
        <button onclick="confirmDesignGoalSuggestion('${g.id}',${idx})" style="background:var(--primary);color:#fff;border:none;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;cursor:pointer">Add to Evidence</button>
        <button onclick="dismissDesignGoalSuggestion(${idx})" style="background:none;border:1px solid var(--border);border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;color:var(--text-secondary);cursor:pointer">Dismiss</button>
      </div>
    </div>`;

  return `
    <div class="modal-overlay" onclick="if(event.target===this)closeDesignGoalModal()">
      <div class="modal-box" onclick="event.stopPropagation()" style="max-width:580px;max-height:88vh;overflow-y:auto">
        <div style="position:relative;padding:20px 24px 16px;border-bottom:1px solid var(--border)">
          <div class="insight-modal-title">${escHtml(g.goal)}</div>
          ${g.kpi ? `<div style="font-size:13px;color:var(--text-secondary);line-height:1.5;margin-top:8px">${escHtml(g.kpi)}</div>` : ''}
          <button class="insight-modal-close" onclick="closeDesignGoalModal()" style="position:absolute;top:16px;right:16px">✕</button>
        </div>
        <div style="padding:16px 20px;display:flex;flex-direction:column;gap:12px">
          <!-- Evidence header row -->
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
            <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted)">Evidence</span>
            <div style="display:flex;gap:8px">
              <button onclick="state.designGoalAddMode = state.designGoalAddMode === 'manual' ? null : 'manual'; render()" style="font-size:12px;font-weight:600;color:var(--primary);background:none;border:1px solid var(--border);border-radius:6px;padding:4px 10px;cursor:pointer">+ Add</button>
              <button onclick="findDesignGoalEvidence('${g.id}')" style="font-size:12px;font-weight:600;color:#92400E;background:#FEF3C7;border:none;border-radius:6px;padding:4px 10px;cursor:pointer">✦ Find with AI</button>
            </div>
          </div>

          <!-- Manual add form -->
          ${state.designGoalAddMode === 'manual' ? `
            <div style="background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:14px">
              <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin-bottom:8px">Add Evidence</div>
              <input id="dge-label" class="form-input" placeholder="Source / label (e.g. Merchant visit, Research session)" style="margin-bottom:8px" />
              <textarea id="dge-text" class="form-input" rows="3" placeholder="Describe the evidence…" style="resize:vertical"></textarea>
              <div style="display:flex;gap:8px;margin-top:10px">
                <button onclick="saveDesignGoalEvidence('${g.id}', document.getElementById('dge-text').value, document.getElementById('dge-label').value)" style="background:var(--primary);color:#fff;border:none;border-radius:6px;padding:6px 14px;font-size:12px;font-weight:600;cursor:pointer">Save</button>
                <button onclick="state.designGoalAddMode=null;render()" style="background:none;border:1px solid var(--border);border-radius:6px;padding:6px 14px;font-size:12px;font-weight:600;color:var(--text-secondary);cursor:pointer">Cancel</button>
              </div>
            </div>` : ''}

          <!-- AI suggestions -->
          ${state.designGoalAddMode === 'ai' ? `
            <div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:8px;padding:12px 14px;margin-bottom:4px">
              <div style="font-size:12px;font-weight:600;color:#92400E;margin-bottom:4px">✦ AI found ${state.designGoalSuggestions.length} potential match${state.designGoalSuggestions.length !== 1 ? 'es' : ''} from your data</div>
              <div style="font-size:12px;color:#78350F">Review and add anything that's relevant to this goal.</div>
            </div>
            ${state.designGoalSuggestions.length === 0
              ? `<div style="font-size:13px;color:var(--text-muted);font-style:italic">All suggestions have been reviewed.</div>`
              : state.designGoalSuggestions.map((s, i) => suggestionCard(s, i)).join('')}
            <button onclick="state.designGoalAddMode=null;render()" style="background:none;border:none;color:var(--text-muted);font-size:12px;cursor:pointer;padding:0">Done reviewing</button>
          ` : ''}

          <!-- Evidence items -->
          ${items.length === 0 && state.designGoalAddMode !== 'ai'
            ? `<div style="font-size:13px;color:var(--text-muted);font-style:italic;padding:4px 0">No evidence yet. Add manually or use AI to find relevant items from your assessments and notes.</div>`
            : items.filter(item => item.source !== 'manual' || true).map(item => {
                // find the matching manual entry to get its id for deletion
                const manualMatch = (d.designGoalEvidence?.[g.id] || []).find(e => e.text === item.text);
                return evidenceCard(item, manualMatch ? { deleteId: manualMatch.id } : {});
              }).join('')}
        </div>
      </div>
    </div>`;
}

function renderGrowthThemeModal() {
  const d = getData();
  const t = (d.growthThemes || []).find(x => x.id === state.growthThemeModal);
  if (!t) return '';
  const toText = v => (Array.isArray(v) ? v : v ? [v] : []).join('\n');
  const field = (id, label, val, rows = 3) => `
    <div style="margin-bottom:14px">
      <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin-bottom:6px">${label}</label>
      <textarea id="gtm-${id}" rows="${rows}" style="width:100%;box-sizing:border-box;padding:8px 10px;font-size:13px;font-family:inherit;border:1px solid var(--border);border-radius:6px;resize:vertical;line-height:1.5;color:var(--text);background:var(--surface)">${escHtml(toText(val))}</textarea>
      <div style="font-size:11px;color:var(--text-muted);margin-top:3px">One item per line</div>
    </div>`;
  return `
    <div class="modal-overlay" onclick="if(event.target===this)closeGrowthThemeModal()" style="z-index:1000">
      <div class="modal-box" onclick="event.stopPropagation()" style="max-width:600px;max-height:90vh;overflow-y:auto">
        <div class="insight-modal-header">
          <div class="insight-modal-title">Edit Theme</div>
          <button class="insight-modal-close" onclick="closeGrowthThemeModal()">✕</button>
        </div>
        <div style="padding:20px 24px">
          <div style="margin-bottom:14px">
            <label style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin-bottom:6px">Theme Name</label>
            <input id="gtm-theme" type="text" value="${escHtml(t.theme)}" style="width:100%;box-sizing:border-box;padding:8px 10px;font-size:13px;font-family:inherit;border:1px solid var(--border);border-radius:6px;color:var(--text);background:var(--surface)"/>
          </div>
          <div style="border-top:1px solid var(--border);margin:16px 0 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--primary)">Growth Trajectory</div>
          ${field('today',   'Today',  t.today,  3)}
          ${field('better',  'Better', t.better, 3)}
          ${field('best',    'Best',   t.best,   3)}
          <div style="border-top:1px solid var(--border);margin:16px 0 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--primary)">Supporting Context</div>
          ${field('indicators',   'Indicators',   t.indicators,   3)}
          ${field('dependencies', 'Dependencies', t.dependencies, 3)}
          ${field('collaborators','Collaborators', t.collaborators,2)}
          <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:4px">
            <button onclick="closeGrowthThemeModal()" class="btn btn-secondary">Cancel</button>
            <button onclick="saveGrowthTheme('${escHtml(t.id)}')" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>`;
}

function openGrowthThemeModal(id) { state.growthThemeModal = id; render(); }
function closeGrowthThemeModal() { state.growthThemeModal = null; render(); }
function openGrowthThemeLevelModal(themeId, level) { state.growthThemeLevelModal = { themeId, level }; render(); }
function closeGrowthThemeLevelModal() { state.growthThemeLevelModal = null; render(); }
function renderGrowthThemeLevelModal() {
  const m = state.growthThemeLevelModal;
  if (!m) return '';
  const d = getData();
  const t = (d.growthThemes || []).find(x => x.id === m.themeId);
  if (!t) return '';

  const level = m.level; // 'today', 'better', 'best'
  const howToKey = level + 'HowTo';
  const items = Array.isArray(t[howToKey]) ? t[howToKey] : [];

  const labelMap = { today: 'Today', better: 'Better', best: 'Best' };
  const colorMap = { today: 'var(--text-muted)', better: '#3B82F6', best: 'var(--green)' };
  const bgMap = { today: '#F8FAFC', better: '#EFF6FF', best: '#F0FDF4' };

  const label = labelMap[level] || level;
  const color = colorMap[level] || 'var(--primary)';
  const bg = bgMap[level] || 'var(--surface)';

  return `
    <div class="modal-overlay" onclick="if(event.target===this)closeGrowthThemeLevelModal()" style="z-index:1100">
      <div class="modal-box" onclick="event.stopPropagation()" style="max-width:480px">
        <div style="position:relative;padding:20px 24px 16px;border-bottom:1px solid var(--border)">
          <div class="insight-modal-title">How to get here</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${escHtml(t.theme)} — ${label}</div>
          <button class="insight-modal-close" onclick="closeGrowthThemeLevelModal()" style="position:absolute;top:16px;right:16px">✕</button>
        </div>
        <div style="padding:20px 24px">
          <!-- what this level looks like -->
          <div style="background:${bg};border-radius:8px;padding:12px 16px;margin-bottom:20px">
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:${color};margin-bottom:8px">${label} looks like</div>
            <ul style="margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:5px">
              ${(Array.isArray(t[level]) ? t[level] : []).map(i => `<li style="position:relative;padding-left:13px;font-size:13px;color:var(--text-secondary);line-height:1.5"><span style="position:absolute;left:1px;top:8px;width:5px;height:5px;border-radius:50%;background:${color};opacity:.5"></span>${escHtml(i)}</li>`).join('')}
            </ul>
          </div>
          <!-- how to get there -->
          <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:12px">Actions to get there</div>
          <ul style="margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:10px">
            ${items.map((item, i) => `
              <li style="display:flex;gap:10px;align-items:flex-start">
                <span style="flex-shrink:0;width:20px;height:20px;border-radius:50%;background:${bg};border:1.5px solid ${color};display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:${color};margin-top:1px">${i+1}</span>
                <span style="font-size:13px;color:var(--text-secondary);line-height:1.55">${escHtml(item)}</span>
              </li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}
function openDesignGoalModal(id) { state.designGoalModal = id; render(); }
function closeDesignGoalModal() { state.designGoalModal = null; render(); }
function saveGrowthTheme(id) {
  const parse = elId => document.getElementById(elId)?.value.split('\n').map(s => s.trim()).filter(Boolean) || [];
  const d = getData();
  const idx = (d.growthThemes || []).findIndex(x => x.id === id);
  if (idx === -1) return;
  d.growthThemes[idx] = {
    ...d.growthThemes[idx],
    theme:         document.getElementById('gtm-theme')?.value.trim() || d.growthThemes[idx].theme,
    today:         parse('gtm-today'),
    better:        parse('gtm-better'),
    best:          parse('gtm-best'),
    indicators:    parse('gtm-indicators'),
    dependencies:  parse('gtm-dependencies'),
    collaborators: parse('gtm-collaborators'),
  };
  saveData(d);
  closeGrowthThemeModal();
}

function renderGoals() {
  const profiles = getProfiles();
  const currentProfile = profiles.find(p => p.id === state.profile);
  const personalGoals = getPersonalGoals();

  return `
    <div class="review-header">
      <div>
        <h1>${escHtml(currentProfile?.name || 'Designer')}${currentProfile?.role ? ` <span style="font-size:13px;font-weight:600;color:var(--primary);background:var(--primary-light);border:1px solid rgba(99,102,241,.2);border-radius:20px;padding:4px 8px;vertical-align:middle;position:relative;top:-2px;margin-left:16px">${escHtml(shortRole(currentProfile.role))}</span>` : ''}</h1>
      </div>
    </div>

    ${renderGrowthThemes()}
    ${renderGoalSection('personal', 'Personal Goals', '', personalGoals, true)}
    ${renderDesignTeamGoals()}

    ${state.growthThemeModal ? renderGrowthThemeModal() : ''}
    ${state.growthThemeLevelModal ? renderGrowthThemeLevelModal() : ''}
    ${state.goalModal ? renderGoalModal() : ''}
    ${state.goalNotesModal ? renderGoalNotesModal() : ''}
  `;
}

function evaluateSmartGoal() {
  const goal = (document.getElementById('gm-goal')?.value || '').trim();
  const kpi  = (document.getElementById('gm-kpi')?.value || '').trim();
  const tf   = (document.getElementById('gm-timeframe')?.value || '').trim();
  const combined = goal + ' ' + kpi;
  const actionVerbs = /\b(ship|launch|build|create|design|deliver|complete|achieve|reduce|increase|improve|establish|develop|run|lead|define|implement|present|contribute|grow|hit|reach|publish|release|document|drive|own|close|finish|train|onboard|audit|measure|test|validate|align|facilitate|partner)\b/i;
  const timeRx = /\b(Q[1-4]|quarter|monthly|weekly|by \w+|2026|2027|h1|h2|sprint|annual|year|end of|EOY)\b/i;
  const measureRx = /\d|%|percent|score|rate|nps|metric|kpi|times|weekly|daily|monthly|every|per quarter|each/i;
  return {
    S: { pass: goal.length > 25 && !/^(improve|be better|help|work on|focus on|do more|be more)\b/i.test(goal), tip: 'Be specific — describe a clear, concrete outcome.' },
    M: { pass: measureRx.test(combined),                                                                            tip: 'Add a number, %, or measurable signal (e.g. "3 per quarter", "NPS +5").' },
    A: { pass: actionVerbs.test(goal),                                                                              tip: 'Start with an action verb (e.g. "Ship", "Reduce", "Deliver").' },
    R: { pass: kpi.length > 20,                                                                                     tip: 'Describe how this connects to a team or business outcome in the KPI field.' },
    T: { pass: tf.length > 0 || timeRx.test(combined),                                                             tip: 'Add a time frame (e.g. "by Q2 2026", "monthly").' },
  };
}

function updateSmartPanel() {
  const LABELS = { S: 'Specific', M: 'Measurable', A: 'Actionable', R: 'Relevant', T: 'Time-bound' };
  const results = evaluateSmartGoal();
  ['S','M','A','R','T'].forEach(k => {
    const el = document.getElementById('smart-' + k);
    if (!el) return;
    const r = results[k];
    el.className = 'smart-chip' + (r.pass ? ' smart-pass' : '');
    el.title = r.pass ? '' : r.tip;
    el.querySelector('.smart-label').textContent = LABELS[k];
  });
  // show/hide tip row
  const failing = ['S','M','A','R','T'].filter(k => !results[k].pass);
  const tipEl = document.getElementById('smart-tip-text');
  if (tipEl) {
    if (failing.length === 0) {
      tipEl.textContent = '✓ This looks like a solid SMART goal!';
      tipEl.style.color = 'var(--green)';
    } else {
      const k = failing[0];
      tipEl.textContent = results[k].tip;
      tipEl.style.color = 'var(--text-muted)';
    }
  }
}

function renderGoalModal() {
  const m = state.goalModal;
  return `
    <div class="modal-overlay" onclick="closeGoalModal()">
      <div class="modal-box" onclick="event.stopPropagation()" style="max-width:500px">
        <div class="insight-modal-header">
          <div class="insight-modal-title">${m.isEdit ? 'Edit Goal' : 'Add Goal'}</div>
          <button class="insight-modal-close" onclick="closeGoalModal()">✕</button>
        </div>
        <div style="padding:24px;display:flex;flex-direction:column;gap:16px">
          <div class="form-field" style="margin:0">
            <label class="form-label">Goal</label>
            <input id="gm-goal" class="form-input" placeholder="What do you want to achieve?" value="${escHtml(m.goal||'')}" oninput="updateSmartPanel()" />
          </div>

          <div class="smart-panel">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin-right:4px">SMART</span>
              ${['S','M','A','R','T'].map(k => `<span id="smart-${k}" class="smart-chip"><span class="smart-key">${k}</span><span class="smart-label"></span></span>`).join('')}
            </div>
            <div id="smart-tip-text" style="font-size:11.5px;margin-top:8px;min-height:16px;color:var(--text-muted)"></div>
          </div>

          <div class="form-field" style="margin:0">
            <label class="form-label">KPI / How I'll Contribute</label>
            <textarea id="gm-kpi" class="form-input" rows="3" placeholder="How will you measure success or contribute?" oninput="updateSmartPanel()">${escHtml(m.kpi||'')}</textarea>
          </div>
          <div class="form-field" style="margin:0">
            <label class="form-label">Time Frame</label>
            <input id="gm-timeframe" class="form-input" placeholder="e.g. Q1 2026, Quarterly, Annual" value="${escHtml(m.timeFrame||'')}" oninput="updateSmartPanel()" />
          </div>
          <div class="form-field" style="margin:0">
            <label class="form-label">Status</label>
            <select id="gm-status" class="form-input">
              ${Object.entries(GOAL_STATUS_CONFIG).map(([k,v]) => `<option value="${k}" ${(m.status||'not_started')===k?'selected':''}>${v.label}</option>`).join('')}
            </select>
          </div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:8px;padding:16px 24px;border-top:1px solid var(--border)">
          <button class="btn btn-secondary" onclick="closeGoalModal()">Cancel</button>
          <button class="btn btn-primary" onclick="saveGoalModal()">Save Goal</button>
        </div>
      </div>
    </div>
  `;
}

function renderGoalNotesModal() {
  const m = state.goalNotesModal;
  return `
    <div class="modal-overlay" onclick="closeGoalNotesModal()">
      <div class="modal-box" onclick="event.stopPropagation()" style="max-width:480px">
        <div class="insight-modal-header">
          <div class="insight-modal-title">Notes</div>
          <button class="insight-modal-close" onclick="closeGoalNotesModal()">✕</button>
        </div>
        <div style="padding:24px">
          <div style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:8px">${escHtml(m.goalName)}</div>
          <textarea id="gnm-notes" class="form-input" rows="5" placeholder="How are you contributing to this goal? What progress have you made?">${escHtml(m.notes||'')}</textarea>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:8px;padding:16px 24px;border-top:1px solid var(--border)">
          <button class="btn btn-secondary" onclick="closeGoalNotesModal()">Cancel</button>
          <button class="btn btn-primary" onclick="saveGoalNotesModal()">Save Notes</button>
        </div>
      </div>
    </div>
  `;
}

function openAddGoalModal(sectionId) {
  state.goalModal = { sectionId, isEdit: false, idx: null, goal: '', kpi: '', timeFrame: '', status: 'not_started', notes: '' };
  render();
  setTimeout(updateSmartPanel, 0);
}
function closeGoalModal() { state.goalModal = null; render(); }
function saveGoalModal() {
  const m = state.goalModal;
  const goal  = document.getElementById('gm-goal')?.value.trim();
  const kpi   = document.getElementById('gm-kpi')?.value.trim();
  const tf    = document.getElementById('gm-timeframe')?.value.trim();
  const status= document.getElementById('gm-status')?.value;
  if (!goal) return;
  const newGoal = { id: `g_${Date.now()}`, goal, kpi, timeFrame: tf, status, notes: m.notes || '' };
  if (m.sectionId === 'personal') {
    const goals = getPersonalGoals();
    if (m.isEdit) goals[m.idx] = { ...goals[m.idx], ...newGoal, id: goals[m.idx].id };
    else goals.push(newGoal);
    savePersonalGoals(goals);
  } else {
    const goals = getProductGoals();
    if (m.isEdit) goals[m.idx] = { ...goals[m.idx], ...newGoal, id: goals[m.idx].id };
    else goals.push(newGoal);
    saveProductGoals(goals);
  }
  state.goalModal = null;
  render();
}
function deleteUserGoal(sectionId, idx) {
  if (sectionId === 'personal') {
    const goals = getPersonalGoals(); goals.splice(idx, 1); savePersonalGoals(goals);
  } else {
    const goals = getProductGoals(); goals.splice(idx, 1); saveProductGoals(goals);
  }
  const content = document.getElementById('content');
  if (content) content.innerHTML = renderGoals();
}
function saveGoalStatus(sectionId, goalId, status, idx) {
  if (sectionId === 'design') {
    const c = getGoalContribution(goalId);
    c.status = status;
    saveGoalContribution(goalId, c);
  } else if (sectionId === 'personal') {
    const goals = getPersonalGoals();
    goals[idx].status = status;
    savePersonalGoals(goals);
  } else {
    const goals = getProductGoals();
    goals[idx].status = status;
    saveProductGoals(goals);
  }
  const content = document.getElementById('content');
  if (content) content.innerHTML = renderGoals();
}
function openGoalNotesModal(sectionId, goalId, idx) {
  let goalName = '', notes = '';
  if (sectionId === 'design') {
    const g = DESIGN_TEAM_GOALS.find(x => x.id === goalId);
    goalName = g?.goal || '';
    notes = getGoalContribution(goalId).notes;
  } else if (sectionId === 'personal') {
    const g = getPersonalGoals()[idx];
    goalName = g?.goal || ''; notes = g?.notes || '';
  } else {
    const g = getProductGoals()[idx];
    goalName = g?.goal || ''; notes = g?.notes || '';
  }
  state.goalNotesModal = { sectionId, goalId, idx, goalName, notes };
  render();
}
function closeGoalNotesModal() { state.goalNotesModal = null; render(); }
function saveGoalNotesModal() {
  const m = state.goalNotesModal;
  const notes = document.getElementById('gnm-notes')?.value || '';
  if (m.sectionId === 'design') {
    const c = getGoalContribution(m.goalId);
    c.notes = notes;
    saveGoalContribution(m.goalId, c);
  } else if (m.sectionId === 'personal') {
    const goals = getPersonalGoals();
    goals[m.idx].notes = notes;
    savePersonalGoals(goals);
  } else {
    const goals = getProductGoals();
    goals[m.idx].notes = notes;
    saveProductGoals(goals);
  }
  state.goalNotesModal = null;
  render();
}

// ============ NAVIGATION & STATE ACTIONS ============
function navigate(view, param) {
  if (view === 'skills') {
    state.view = 'skills';
    state.category = param || 'all';
    state.search = '';
    updateTopbarSearch(true);
  } else if (view === 'skill') {
    state.prevView = state.view;
    state.view = 'skill';
    state.skillId = param;
    state.addResourceOpen = false;
    state.cvAddResourceOpen = false;
    // Default to expected level for role, then self-assessed, then Learner
    const a = getAssessment(param);
    const expLevel = getExpectedLevelForSkill(param);
    state.levelTab = expLevel || a.selfLevel || 'Learner';
  } else if (view === 'home') {
    state.view = 'home';
  } else if (view === 'my-dashboard') {
    state.view = 'my-dashboard';
  } else if (view === 'review') {
    state.view = 'review';
    state.reviewFilter = 'all';
    state.reviewCats = [];
    state.reviewLevels = [];
  } else if (view === 'resources') {
    state.view = 'resources';
  } else if (view === 'eoy') {
    state.view = 'eoy';
  } else if (view === 'outreach') {
    state.view = 'outreach';
    state.outreachTypeFilter = '';
  } else if (view === 'values') {
    state.view = 'values';
  } else if (view === 'goals') {
    state.view = 'goals';
    state.growthThemeId = null;
    state.personalGoalId = null;
    state.designGoalId = null;
  } else if (view === 'value') {
    state.prevView = state.view;
    state.view = 'value';
    state.valueId = param;
    const vr = getValueRating(param);
    state.cvLevelTab = vr.managerRating || 3;
  }
  render();
  document.getElementById('content').scrollTop = 0;
}

function navigateToSkillCategory(cat) {
  state.view = 'review';
  state.reviewFilter = 'all';
  state.reviewCats = [cat];
  state.reviewLevels = [];
  render();
  document.getElementById('content').scrollTop = 0;
}
function setCategory(cat) {
  state.category = cat;
  render();
}
function setLevelTab(level) {
  state.levelTab = level;
  render();
}
function setCvLevelTab(n) {
  state.cvLevelTab = n;
  render();
}
function setReviewFilter(f) {
  state.reviewFilter = f;
  render();
}
function toggleReviewCat(cat) {
  const i = state.reviewCats.indexOf(cat);
  if (i === -1) state.reviewCats.push(cat);
  else state.reviewCats.splice(i, 1);
  render();
}
function toggleReviewLevel(level) {
  const i = state.reviewLevels.indexOf(level);
  if (i === -1) state.reviewLevels.push(level);
  else state.reviewLevels.splice(i, 1);
  render();
}
function exportReviewCSV() {
  const profile = currentProfile;
  if (!profile) return;
  const rows = [['Skill', 'Category', 'Assessment', 'Expected', 'Evidence & Examples', 'Notes']];
  SKILLS_DATA.skills.forEach(s => {
    const a = getAssessment(s.id);
    rows.push([
      s.name,
      s.category,
      a.level || '',
      profile.role ? (ROLE_EXPECTATIONS[profile.role]?.[s.id] || '') : '',
      (a.evidence || '').replace(/"/g, '""'),
      (a.goals || '').replace(/"/g, '""')
    ]);
  });
  const csv = rows.map(r => r.map(v => `"${v}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
  a.download = `${profile.name.replace(/\s+/g,'-')}-skills-${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
}

function toggleResourcesCat(cat) {
  const i = state.resourcesCats.indexOf(cat);
  if (i === -1) state.resourcesCats.push(cat); else state.resourcesCats.splice(i, 1);
  render();
}
function toggleResourcesType(type) {
  const i = state.resourcesTypes.indexOf(type);
  if (i === -1) state.resourcesTypes.push(type); else state.resourcesTypes.splice(i, 1);
  render();
}
function clearResourcesFilters() { state.resourcesCats = []; state.resourcesTypes = []; state.resourcesOpenDropdown = ''; render(); }
function toggleResourcesDropdown(id) { state.resourcesOpenDropdown = state.resourcesOpenDropdown === id ? '' : id; render(); }
function closeResourcesDropdowns(e) {
  if (!e.target.closest('.review-filter-dropdown-btn') && !e.target.closest('.review-filter-dropdown-panel')) {
    if (state.resourcesOpenDropdown) { state.resourcesOpenDropdown = ''; render(); }
  }
}
function toggleReviewFilterPanel() {
  state.reviewFilterOpen = !state.reviewFilterOpen;
  render();
}
function toggleReviewHasNotes() {
  state.reviewHasNotes = !state.reviewHasNotes;
  render();
}
function toggleReviewHasGoals() {
  state.reviewHasGoals = !state.reviewHasGoals;
  render();
}
function clearReviewFilters() {
  state.reviewFilter = 'all';
  state.reviewCats = [];
  state.reviewLevels = [];
  state.reviewHasNotes = false;
  state.reviewHasGoals = false;
  state.reviewOpenDropdown = '';
  render();
}
function toggleReviewDropdown(id) {
  state.reviewOpenDropdown = state.reviewOpenDropdown === id ? '' : id;
  render();
}
function closeReviewDropdowns(e) {
  if (!e.target.closest('.review-filter-dropdown-btn') && !e.target.closest('.review-filter-dropdown-panel')) {
    if (state.reviewOpenDropdown) { state.reviewOpenDropdown = ''; render(); }
  }
}
function toggleAddResource() {
  state.addResourceOpen = !state.addResourceOpen;
  const form = document.getElementById('add-resource-form');
  const toggle = document.querySelector('.add-resource-toggle');
  if (form) form.classList.toggle('open', state.addResourceOpen);
  if (toggle) toggle.textContent = state.addResourceOpen ? '✕ Close' : '＋ Add Resource';
}

// ============ ASSESSMENT ACTIONS ============
function setSelfLevel(skillId, level) {
  const a = getAssessment(skillId);
  a.selfLevel = level;
  saveAssessment(skillId, a);
  // Re-render just the radio group
  renderLevelRadios(skillId, 'self', a);
  updateSidebarStats();
}
function clearSelfLevel(skillId) {
  const a = getAssessment(skillId);
  a.selfLevel = null;
  saveAssessment(skillId, a);
  renderLevelRadios(skillId, 'self', a);
  updateSidebarStats();
}
function setManagerLevel(skillId, level) {
  const a = getAssessment(skillId);
  a.managerLevel = level;
  saveAssessment(skillId, a);
  renderLevelRadios(skillId, 'manager', a);
  refreshLastUpdated();
}
function clearManagerLevel(skillId) {
  const a = getAssessment(skillId);
  a.managerLevel = null;
  saveAssessment(skillId, a);
  renderLevelRadios(skillId, 'manager', a);
}
function setExpectedLevel(skillId, level) {
  const a = getAssessment(skillId);
  a.expectedLevel = level;
  saveAssessment(skillId, a);
  renderLevelRadios(skillId, 'expected', a);
}
function clearExpectedLevel(skillId) {
  const a = getAssessment(skillId);
  a.expectedLevel = null;
  saveAssessment(skillId, a);
  renderLevelRadios(skillId, 'expected', a);
}

function renderLevelRadios(skillId, which, assessment) {
  // Just re-render the full detail to keep things consistent
  const content = document.getElementById('content');
  if (content) {
    content.innerHTML = renderSkillDetail();
  }
}

let _notesModalImages = [];

function handleNotesImageUpload(input) {
  const files = Array.from(input.files);
  files.forEach(file => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      _notesModalImages.push({ id: 'img_' + Date.now() + '_' + Math.random().toString(36).slice(2), dataUrl: e.target.result, name: file.name });
      renderNotesModalImageGrid();
    };
    reader.readAsDataURL(file);
  });
  input.value = '';
}

function removeNotesImage(id) {
  _notesModalImages = _notesModalImages.filter(img => img.id !== id);
  renderNotesModalImageGrid();
}

function renderNotesModalImageGrid() {
  const container = document.getElementById('notes-modal-images');
  if (!container) return;
  container.innerHTML = _notesModalImages.length === 0 ? '' : `
    <div class="notes-image-grid">
      ${_notesModalImages.map(img => `
        <div class="notes-image-thumb">
          <img src="${img.dataUrl}" alt="${escHtml(img.name)}" onclick="openImageLightbox('${img.id}')" />
          <button class="notes-image-remove" onclick="removeNotesImage('${img.id}')">✕</button>
        </div>
      `).join('')}
    </div>
  `;
}

function openImageLightbox(id) {
  const img = _notesModalImages.find(i => i.id === id);
  if (!img) return;
  const lb = document.createElement('div');
  lb.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:zoom-out';
  lb.onclick = () => lb.remove();
  lb.innerHTML = `<img src="${img.dataUrl}" style="max-width:90vw;max-height:90vh;border-radius:8px;box-shadow:0 24px 64px rgba(0,0,0,.6)" />`;
  document.body.appendChild(lb);
}

function openNotesModal(skillId, field) {
  const a = getAssessment(skillId);
  const skill = getSkillById(skillId);
  const title = field === 'evidence' ? 'Evidence & Examples' : 'Notes';
  const value = a[field] || '';
  _notesModalImages = [...(a[field + 'Images'] || [])];
  const modal = document.getElementById('notes-modal');
  const titleEl = document.getElementById('notes-modal-title');
  const skillEl = document.getElementById('notes-modal-skill');
  const textarea = document.getElementById('notes-modal-textarea');
  if (!modal) return;
  titleEl.textContent = title;
  skillEl.textContent = skill?.name || '';
  textarea.value = value;
  textarea.dataset.skillId = skillId;
  textarea.dataset.field = field;
  renderNotesModalImageGrid();
  modal.classList.add('open');
  setTimeout(() => textarea.focus(), 50);
}

function closeNotesModal() {
  const modal = document.getElementById('notes-modal');
  const textarea = document.getElementById('notes-modal-textarea');
  if (!modal || !textarea) return;
  const skillId = textarea.dataset.skillId;
  const field = textarea.dataset.field;
  saveReviewField(skillId, field, textarea.value);
  const a = getAssessment(skillId);
  a[field + 'Images'] = _notesModalImages;
  saveAssessment(skillId, a);
  _notesModalImages = [];
  modal.classList.remove('open');
  const content = document.getElementById('content');
  if (content) content.innerHTML = renderReview();
}

function setReviewLevel(skillId, level) {
  const a = getAssessment(skillId);
  a.managerLevel = level || null;
  saveAssessment(skillId, a);
  const content = document.getElementById('content');
  if (content) content.innerHTML = renderReview();
}

function saveReviewField(skillId, field, value) {
  const a = getAssessment(skillId);
  a[field] = value;
  saveAssessment(skillId, a);
}

function handleDetailImageUpload(input, field, skillId) {
  const files = Array.from(input.files);
  const a = getAssessment(skillId);
  const key = field + 'Images';
  if (!a[key]) a[key] = [];
  let pending = files.length;
  if (!pending) return;
  files.forEach(file => {
    if (!file.type.startsWith('image/')) { pending--; return; }
    const reader = new FileReader();
    reader.onload = e => {
      a[key].push({ id: 'img_' + Date.now() + '_' + Math.random().toString(36).slice(2), dataUrl: e.target.result, name: file.name });
      pending--;
      if (pending === 0) {
        saveAssessment(skillId, a);
        refreshDetailImageGrid(field, skillId, a[key]);
      }
    };
    reader.readAsDataURL(file);
  });
  input.value = '';
}

function removeDetailImage(id, field, skillId) {
  const a = getAssessment(skillId);
  const key = field + 'Images';
  a[key] = (a[key] || []).filter(img => img.id !== id);
  saveAssessment(skillId, a);
  refreshDetailImageGrid(field, skillId, a[key]);
}

function refreshDetailImageGrid(field, skillId, images) {
  const grid = document.getElementById(field + '-image-grid');
  if (!grid) return;
  grid.innerHTML = (images || []).map(img => `
    <div class="notes-image-thumb">
      <img src="${img.dataUrl}" alt="${escHtml(img.name)}" onclick="openDetailImageLightbox('${img.id}','${field}','${skillId}')" />
      <button class="notes-image-remove" onclick="removeDetailImage('${img.id}','${field}','${skillId}')">✕</button>
    </div>`).join('');
}

function openDetailImageLightbox(id, field, skillId) {
  const a = getAssessment(skillId);
  const img = (a[field + 'Images'] || []).find(i => i.id === id);
  if (!img) return;
  const lb = document.createElement('div');
  lb.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:zoom-out';
  lb.onclick = () => lb.remove();
  lb.innerHTML = `<img src="${img.dataUrl}" style="max-width:90vw;max-height:90vh;border-radius:8px;box-shadow:0 24px 64px rgba(0,0,0,.6)" />`;
  document.body.appendChild(lb);
}

function saveAssessmentForm(skillId) {
  const a = getAssessment(skillId);
  const evidenceEl = document.getElementById('evidence-input');
  const goalsEl = document.getElementById('goals-input');
  if (evidenceEl) a.evidence = evidenceEl.value;
  if (goalsEl) a.goals = goalsEl.value;
  saveAssessment(skillId, a);

  const indicator = document.getElementById('save-indicator');
  if (indicator) {
    indicator.classList.add('visible');
    setTimeout(() => indicator.classList.remove('visible'), 2500);
  }
}

const CV_KEYWORDS = {
  empathy:  /\b(user|merchant|customer|client|empathy|empathetic|perspective|inclusive|inclusion|listen|understand|feedback|interview|research|care|advocate|feelings|experience|journey|pain point|needs)\b/gi,
  teamwork: /\b(team|collaborat|cross.functional|partner|PM|engineering|stakeholder|alignment|align|together|shared|sync|handoff|review|present|facilitat|workshop|silo|bridge|relationship)\b/gi,
  agility:  /\b(learn|question|change|adapt|pivot|iterate|experiment|new approach|rethink|transform|improve|initiative|opportunit|innovate|challenge|ship|fast|quick|unblock|try)\b/gi,
  humility: /\b(feedback|humble|humility|credit|acknowledge|mistake|wrong|ask|defer|support|help|others|step back|listen|admit|growth|reflect|open to|receptive)\b/gi,
};

function suggestCoreValuesFromEvidence(text) {
  if (!text || text.length < 20) return [];
  return CORE_VALUES_DATA.filter(cv => {
    const rx = CV_KEYWORDS[cv.id];
    if (!rx) return false;
    rx.lastIndex = 0;
    return rx.test(text);
  });
}

function addEvidenceToCoreValue(valueId, skillId) {
  const a = getAssessment(skillId);
  const text = a.evidence || '';
  if (!text) return;
  const v = getValueRating(valueId);
  const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const entry = `[${date}] ${text}`;
  v.notes = v.notes ? v.notes + '\n\n' + entry : entry;
  saveValueRating(valueId, v);
  // Mark this suggestion as used
  const btn = document.getElementById('cv-sug-btn-' + valueId);
  if (btn) { btn.textContent = '✓ Added'; btn.disabled = true; btn.style.opacity = '0.5'; }
}

function dismissCvSuggestion() {
  const el = document.getElementById('cv-evidence-suggestion');
  if (el) el.remove();
}

const _assessmentTimers = {};
function debounceAssessmentField(skillId, field, value) {
  const key = `${skillId}-${field}`;
  clearTimeout(_assessmentTimers[key]);
  _assessmentTimers[key] = setTimeout(() => autoSaveAssessmentField(skillId, field, value), 1000);
}

function autoSaveAssessmentField(skillId, field, value) {
  const a = getAssessment(skillId);
  a[field] = value;
  saveAssessment(skillId, a);
  refreshLastUpdated();
  const indicator = document.getElementById('save-indicator');
  if (indicator) {
    indicator.classList.add('visible');
    setTimeout(() => indicator.classList.remove('visible'), 2000);
  }
  // Suggest core values when saving evidence
  if (field === 'evidence') {
    const suggestions = suggestCoreValuesFromEvidence(value);
    const existing = document.getElementById('cv-evidence-suggestion');
    if (existing) existing.remove();
    if (suggestions.length > 0) {
      const strip = document.createElement('div');
      strip.id = 'cv-evidence-suggestion';
      strip.className = 'cv-evidence-suggestion';
      strip.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <span style="font-size:11.5px;color:var(--text-secondary);flex-shrink:0">This evidence may also reflect:</span>
          ${suggestions.map(cv => `
            <button id="cv-sug-btn-${cv.id}" class="cv-sug-btn" onclick="addEvidenceToCoreValue('${cv.id}','${skillId}')" style="background:${cv.bg};color:${cv.color};border-color:${cv.color}20">
              ${cv.label}
            </button>
          `).join('')}
          <button class="cv-sug-dismiss" onclick="dismissCvSuggestion()">✕</button>
        </div>
      `;
      const uploadZone = document.querySelector('.notes-upload-zone');
      if (uploadZone) uploadZone.parentNode.insertBefore(strip, uploadZone);
    }
  }
}

function refreshLastUpdated() {
  const el = document.getElementById('skill-last-updated');
  if (el) el.textContent = 'Last updated ' + formatDate(new Date().toISOString());
}

function updateSidebarStats() {
  // Update stat cards on home if we're there, otherwise skip
  // (full render on next navigate)
}

// ============ RESOURCE ACTIONS ============
function deleteResource(skillId, resourceId) {
  deleteCustomResource(skillId, resourceId);
  const content = document.getElementById('content');
  if (content) content.innerHTML = renderSkillDetail();
}
function deleteCVResource(valueId, resourceId) {
  deleteCVCustomResource(valueId, resourceId);
  const content = document.getElementById('content');
  if (content) content.innerHTML = renderCoreValueDetail();
}
function toggleCVAddResource() {
  state.cvAddResourceOpen = !state.cvAddResourceOpen;
  const form = document.getElementById('cv-add-resource-form');
  const toggle = document.getElementById('cv-add-resource-toggle');
  if (form) form.classList.toggle('open', state.cvAddResourceOpen);
  if (toggle) toggle.textContent = state.cvAddResourceOpen ? '✕ Close' : '＋ Add Resource';
}
function submitAddCVResource(valueId) {
  const title = document.getElementById('cv-res-title')?.value?.trim();
  const url = document.getElementById('cv-res-url')?.value?.trim();
  const desc = document.getElementById('cv-res-desc')?.value?.trim();
  const type = document.getElementById('cv-res-type')?.value;
  if (!title) { alert('Please enter a title.'); return; }
  addCVCustomResource(valueId, { title, url: url || '', desc: desc || '', type: type || 'article' });
  state.cvAddResourceOpen = false;
  const content = document.getElementById('content');
  if (content) content.innerHTML = renderCoreValueDetail();
}

function submitAddResource(skillId) {
  const title = document.getElementById('res-title')?.value?.trim();
  const url = document.getElementById('res-url')?.value?.trim();
  const desc = document.getElementById('res-desc')?.value?.trim();
  const type = document.getElementById('res-type')?.value;
  if (!title) { alert('Please enter a title.'); return; }
  addCustomResource(skillId, { title, url: url || '', desc: desc || '', type: type || 'article' });
  state.addResourceOpen = false;
  const content = document.getElementById('content');
  if (content) content.innerHTML = renderSkillDetail();
}

// ============ PROFILE ACTIONS ============
function deleteProfile(id) {
  const profiles = getProfiles();
  if (profiles.length <= 1) { alert('You need at least one profile.'); return; }
  // Remove all data associated with this profile
  Object.keys(localStorage).filter(k => k.includes(id)).forEach(k => localStorage.removeItem(k));
  const updated = profiles.filter(p => p.id !== id);
  saveProfiles(updated);
  // If we deleted the active profile, switch to another
  if (state.profile === id) {
    state.profile = updated[0].id;
    localStorage.setItem('dch_current_profile', updated[0].id);
    state.view = 'home';
  }
  render();
}
function selectProfile(id) {
  const profiles = getProfiles();
  const profile = profiles.find(p => p.id === id);
  if (profile && profile.pin && !state.unlockedProfiles.includes(id)) {
    state.pinModal = { profileId: id };
    render();
    return;
  }
  setCurrentProfile(id);
  state.profileDropdownOpen = false;
  state.view = 'home';
  closeProfileModal();
  render();
}
function renderPinModal() {
  const profiles = getProfiles();
  const profile = profiles.find(p => p.id === state.pinModal.profileId);
  const profileName = profile ? escHtml(profile.name) : 'Profile';
  return `
    <div class="modal-overlay" id="pin-modal" onclick="if(event.target===this)closePinModal()" style="z-index:1000">
      <div class="modal" style="width:360px;max-width:95vw;text-align:center">
        <div class="modal-title" style="margin-bottom:4px">Enter PIN</div>
        <div class="modal-subtitle" style="margin-bottom:20px">${profileName}</div>
        <div style="margin-bottom:16px">
          <input
            id="pin-input"
            type="password"
            inputmode="numeric"
            maxlength="6"
            placeholder="••••"
            autofocus
            onkeydown="if(event.key==='Enter')submitPin()"
            style="width:100%;box-sizing:border-box;font-size:24px;text-align:center;letter-spacing:0.3em;padding:12px 16px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--bg);color:var(--text);outline:none"
          />
        </div>
        <div id="pin-error" style="display:none;color:var(--red);font-size:13px;margin-bottom:12px;font-weight:500"></div>
        <div style="display:flex;gap:8px;justify-content:center">
          <button class="btn btn-secondary" onclick="closePinModal()">Cancel</button>
          <button class="btn btn-primary" onclick="submitPin()">Unlock</button>
        </div>
      </div>
    </div>
  `;
}
function closePinModal() {
  state.pinModal = null;
  render();
}
function submitPin() {
  const input = document.getElementById('pin-input');
  if (!input) return;
  const val = input.value.trim();
  const { profileId } = state.pinModal;
  const profiles = getProfiles();
  const profile = profiles.find(p => p.id === profileId);
  if (!profile) return;

  if (val === String(profile.pin)) {
    state.unlockedProfiles.push(profileId);
    state.pinModal = null;
    setCurrentProfile(profileId);
    state.profileDropdownOpen = false;
    state.view = 'home';
    closeProfileModal();
    render();
  } else {
    const err = document.getElementById('pin-error');
    if (err) { err.textContent = 'Incorrect PIN. Try again.'; err.style.display = 'block'; }
    input.value = '';
    input.focus();
  }
}
function setProfilePin(profileId, pin) {
  const profiles = getProfiles();
  const p = profiles.find(x => x.id === profileId);
  if (!p) return;
  p.pin = pin || null;
  localStorage.setItem('dch_profiles', JSON.stringify(profiles));
  state.unlockedProfiles = state.unlockedProfiles.filter(id => id !== profileId);
  render();
}
function promptSetProfilePin(profileId) {
  const val = window.prompt('Enter new PIN (leave blank to remove):');
  if (val === null) return; // cancelled
  const trimmed = val.trim();
  setProfilePin(profileId, trimmed || null);
  manageTeam();
}
function toggleProfileDropdown() {
  state.profileDropdownOpen = !state.profileDropdownOpen;
  render();
}
function createProfileAndStart() {
  const name = document.getElementById('new-profile-name')?.value?.trim();
  const role = document.getElementById('new-profile-role')?.value?.trim();
  const isManager = document.getElementById('new-profile-manager')?.checked || false;
  const pin = document.getElementById('new-profile-pin')?.value?.trim() || null;
  if (!name) { alert('Please enter your name.'); return; }
  const profile = addProfile(name, role, isManager, pin);
  if (pin) state.unlockedProfiles.push(profile.id);
  selectProfile(profile.id);
}
function closeProfileModal() {
  const m = document.getElementById('profile-modal');
  if (m) m.remove();
}
function switchProfile() {
  showProfileModal();
}

function showProfileModal() {
  // Remove existing modal
  const existing = document.getElementById('profile-modal');
  if (existing) existing.remove();
  document.body.insertAdjacentHTML('beforeend', renderProfileModal());
}

// ============ TOPBAR & SEARCH ============
function updateTopbarSearch(show) {
  // Search is always visible; kept for backward compatibility
}
function handleSearch(e) {
  state.search = e.target.value;
  clearTimeout(window._searchTimer);
  window._searchTimer = setTimeout(() => {
    updateSearchDropdown(state.search);
    if (state.view === 'skills') {
      const skillsContainer = document.getElementById('content');
      if (skillsContainer) skillsContainer.innerHTML = renderSkills();
    }
  }, 150);
}
function updateSearchDropdown(query) {
  const dropdown = document.getElementById('search-dropdown');
  if (!dropdown) return;
  if (!query.trim()) {
    dropdown.innerHTML = '';
    dropdown.classList.remove('open');
    return;
  }
  const q = query.toLowerCase();
  const results = SKILLS_DATA.skills.filter(s =>
    s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)
  ).slice(0, 8);
  if (results.length === 0) {
    dropdown.innerHTML = '<div class="search-dropdown-empty">No skills found</div>';
    dropdown.classList.add('open');
    return;
  }
  dropdown.innerHTML = results.map(s => {
    const cc = CATEGORY_CONFIG[s.category] || {};
    return `
      <button class="search-dropdown-item" onmousedown="navigate('skill','${s.id}');closeSearchDropdown()">
        <span class="search-result-icon">${cc.icon || '📌'}</span>
        <div class="search-result-info">
          <div class="search-result-name">${escHtml(s.name)}</div>
          <div class="search-result-cat">${escHtml(s.category)}</div>
        </div>
      </button>
    `;
  }).join('');
  dropdown.classList.add('open');
}
function hideSearchDropdown() {
  setTimeout(() => {
    const dropdown = document.getElementById('search-dropdown');
    if (dropdown) {
      dropdown.innerHTML = '';
      dropdown.classList.remove('open');
    }
  }, 200);
}
function closeSearchDropdown() {
  state.search = '';
  const dropdown = document.getElementById('search-dropdown');
  if (dropdown) {
    dropdown.innerHTML = '';
    dropdown.classList.remove('open');
  }
  const input = document.getElementById('search-input');
  if (input) input.value = '';
}

// ============ MAIN RENDER ============
function getViewTitle() {
  switch (state.view) {
    case 'home': return 'Dashboard';
    case 'skills': return 'Skills Explorer';
    case 'skill': return 'Skills';
    case 'review': return 'Skills';
    case 'values': return 'Core Values';
    case 'value': return 'Core Values';
    case 'goals': return 'Goals';
    case 'personal-goal': return 'Personal Goals';
    case 'design-goal':   return '2026 Design Team Goals';
    case 'growth-theme':  return 'Growth Themes';
    case 'eoy': return 'Performance Review';
    case 'outreach': return 'Merchant Outreach';
    default: return 'Design Competency Hub';
  }
}

function render() {
  const app = document.getElementById('app');
  if (!app) return;

  const profiles = getProfiles();
  const currentProfile = profiles.find(p => p.id === state.profile);
  const isSkillsView = state.view === 'skills';
  const isHomeView = state.view === 'home';

  const d = getData();

  app.innerHTML = `
    <!-- SIDEBAR -->
    <aside id="sidebar">
      <div class="sidebar-brand">
        <div class="brand-logo">SpotOn Design</div>
        <div class="brand-title">Competency Hub</div>
      </div>

      <div class="sidebar-profile">
        <div class="profile-label">Current Profile</div>
        <div class="profile-selector ${state.profileDropdownOpen ? 'open' : ''}" onclick="toggleProfileDropdown()">
            ${avatarHtml(currentProfile, 36, 13)}
            <div class="profile-name">${escHtml(currentProfile?.name || 'Select Profile')}</div>
            <span class="chevron" style="transition:transform .2s;${state.profileDropdownOpen ? 'transform:rotate(180deg)' : ''}">▼</span>
          </div>
          ${state.profileDropdownOpen ? `
            <div class="profile-dropdown">
              ${profiles.map(p => `
                <div class="profile-dropdown-item-wrap" style="display:flex;align-items:center;gap:4px;padding:2px 8px">
                  <button class="profile-dropdown-item ${state.profile === p.id ? 'active' : ''}" style="flex:1;padding:6px 4px" onclick="selectProfile('${p.id}')">
                    ${avatarHtml(p, 26, 10)}
                    <div style="flex:1;min-width:0;text-align:left">
                      <div style="font-size:12.5px;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escHtml(p.name)}${p.pin ? ' 🔒' : ''}</div>
                      <div style="font-size:11px;color:var(--text-muted)">${escHtml(p.role ? shortRole(p.role) : 'No role')}</div>
                    </div>
                    ${state.profile === p.id ? '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" style="flex-shrink:0"><path d="M2 7l4 4 6-6" stroke="var(--primary)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' : ''}
                  </button>
                </div>
              `).join('')}
            </div>
          ` : ''}
      </div>

      <nav class="sidebar-nav">
        <button class="nav-item ${state.view === 'home' ? 'active' : ''}" onclick="navigate('home')">
          <span class="nav-icon">🏠</span>
          <span>Dashboard</span>
        </button>

        <button class="nav-item ${state.view === 'review' || state.view === 'skill' ? 'active' : ''}" onclick="navigate('review')">
          <span class="nav-icon">📋</span>
          <span>Skills</span>
        </button>

        <button class="nav-item ${state.view === 'values' || state.view === 'value' ? 'active' : ''}" onclick="navigate('values')">
          <span class="nav-icon">💛</span>
          <span>Core Values</span>
        </button>

        <button class="nav-item ${['goals','personal-goal','design-goal','growth-theme'].includes(state.view) ? 'active' : ''}" onclick="navigate('goals')">
          <span class="nav-icon">🎯</span>
          <span>Goals</span>
        </button>

        <button class="nav-item ${state.view === 'eoy' ? 'active' : ''}" onclick="navigate('eoy')">
          <span class="nav-icon">📊</span>
          <span>Performance Review</span>
        </button>

        <button class="nav-item ${state.view === 'outreach' ? 'active' : ''}" onclick="navigate('outreach')">
          <span class="nav-icon">🏪</span>
          <span>Merchant Outreach</span>
        </button>

        <div class="nav-section-label" style="margin-top:12px">Learn</div>
        <button class="nav-item ${state.view === 'resources' ? 'active' : ''}" onclick="navigate('resources')">
          <span class="nav-icon">📚</span>
          <span>Resources</span>
        </button>
      </nav>

      <div class="sidebar-footer">
        <button class="nav-item" onclick="manageTeam()" style="width:100%">
            <span class="nav-icon">👥</span>
            <span style="font-size:12.5px">Manage Team</span>
          </button>
        <div class="sidebar-footer-text">
          ${getAssessedCount()} of ${SKILLS_DATA.skills.length} skills assessed
        </div>
      </div>
    </aside>

    <!-- MAIN -->
    <div id="main">
      <div class="topbar">
        <div style="flex:1">
          <div class="topbar-title">${getViewTitle()}</div>
        </div>
        <div class="topbar-search" id="topbar-search-container">
          <span class="search-icon"><svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M229.66,218.34l-50.06-50.07a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.31-11.31ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/></svg></span>
          <input type="text" placeholder="Search skills…" value="${escHtml(state.search)}" oninput="handleSearch(event)" onblur="hideSearchDropdown()" id="search-input" autocomplete="off" />
          <div class="search-dropdown" id="search-dropdown"></div>
        </div>
      </div>
      <div id="content">
        ${state.view === 'home' ? renderHome() : ''}
        ${state.view === 'skills' ? renderSkills() : ''}
        ${state.view === 'skill' ? renderSkillDetail() : ''}
        ${state.view === 'review' ? renderReview() : ''}
        ${state.view === 'resources' ? renderResources() : ''}
        ${state.view === 'eoy' ? renderEOYReview() : ''}
        ${state.view === 'outreach' ? renderOutreachPage() : ''}
        ${state.view === 'values' ? renderCoreValues() : ''}
        ${state.view === 'value' ? renderCoreValueDetail() : ''}
        ${state.view === 'goals' ? renderGoals() : ''}
        ${state.view === 'growth-theme' ? renderGrowthThemeDetail() : ''}
        ${state.view === 'personal-goal' ? renderPersonalGoalDetail() : ''}
        ${state.view === 'design-goal' ? renderDesignGoalDetail() : ''}
      </div>
    </div>

    ${renderNoteInputModal()}
    ${renderOutreachModal()}
    ${state.pinModal ? renderPinModal() : ''}

    ${renderNoteSuccessToast()}
    ${renderOutreachToast()}

    ${state.quickWinModal !== null ? (() => {
      const wins = getQuickWins();
      const w = wins[state.quickWinModal];
      if (!w) return '';
      const typeLabel = w.kind === 'resource'
        ? (RESOURCE_TYPES[w.resourceType]?.label || 'Resource').toUpperCase()
        : 'ACTIVITY';
      const typeColor = w.kind === 'resource' ? 'var(--text-muted)' : '#7C3AED';
      return `
        <div class="insight-modal-overlay" onclick="if(event.target===this)closeQuickWinModal()">
          <div class="insight-modal">
            <div class="insight-modal-header">
              <div style="display:flex;align-items:center;gap:8px;flex:1;min-width:0">
                <div style="width:38px;height:38px;border-radius:10px;background:var(--bg);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">${w.icon}</div>
                <div style="flex:1;min-width:0">
                  <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:${typeColor};margin-bottom:4px">${typeLabel}</div>
                  <div class="insight-modal-title">${escHtml(w.title)}</div>
                </div>
              </div>
              <button class="insight-modal-close" onclick="closeQuickWinModal()">✕</button>
            </div>
            <div class="insight-modal-body">
              <div class="insight-section">
                <div class="insight-section-label">Why this works</div>
                <p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin:0">${escHtml(w.desc)}</p>
              </div>
              <div class="insight-section">
                <div class="insight-section-label">Skills this addresses (${w.matchingNames.length})</div>
                <div style="display:flex;flex-wrap:wrap;gap:8px">
                  ${w.matchingNames.map(n => `<span style="font-size:12px;background:var(--primary-light);color:var(--primary);border:1px solid rgba(99,102,241,.2);border-radius:20px;padding:4px 8px;font-weight:500">${escHtml(n)}</span>`).join('')}
                </div>
              </div>
              ${w.tips ? `
              <div class="insight-section">
                <div class="insight-section-label">How to do it</div>
                <ul class="insight-tactics-list">
                  ${w.tips.map(t => `<li>${escHtml(t)}</li>`).join('')}
                </ul>
              </div>
              ` : ''}
              ${w.framework ? `
              <div class="insight-section">
                <div class="insight-section-label">Framework</div>
                <div class="insight-framework-card">
                  <div class="insight-framework-name">${escHtml(w.framework.name)}</div>
                  <div class="insight-framework-desc">${escHtml(w.framework.desc)}</div>
                </div>
              </div>
              ` : ''}
              ${w.resources && w.resources.length ? `
              <div class="insight-section">
                <div class="insight-section-label">Tools & Resources</div>
                <div class="insight-resources-list">
                  ${w.resources.map(r => `
                    <a href="${escHtml(r.url)}" target="_blank" rel="noopener" class="insight-resource-item">
                      <div class="insight-resource-text">
                        <span class="insight-resource-title">${escHtml(r.title)}</span>
                        ${r.author ? `<span class="insight-resource-author">${escHtml(r.author)}</span>` : ''}
                      </div>
                      <span class="insight-resource-type">${escHtml(r.type)}</span>
                      <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" style="flex-shrink:0;color:#4B5563;margin-left:4px" aria-hidden="true"><path d="M224,104a8,8,0,0,1-16,0V59.32l-82.34,82.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"/></svg>
                    </a>
                  `).join('')}
                </div>
              </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    })() : ''}
  `;
}

function openQuickWinModal(idx) { state.quickWinModal = idx; render(); }
function closeQuickWinModal() { state.quickWinModal = null; render(); }


// ============ EOY REVIEW VIEW ============
function renderEOYReview() {
  const profiles = getProfiles();
  const currentProfile = profiles.find(p => p.id === state.profile);
  const profileFirstName = (currentProfile?.name || '').split(' ')[0].toLowerCase();
  const review = EOY_REVIEWS[profileFirstName] || null;
  if (!review) return `<div style="padding:48px;text-align:center;color:var(--text-muted);font-size:14px">No performance review data available for this profile.</div>`;
  const tab = state.eoyTextTab || 'self';
  const tabData = tab === 'self' ? review.self : review.manager;

  const ratingBadge = (n) => {
    const rc = EOY_RATING_CONFIG[n];
    return `<span style="display:inline-flex;align-items:center;gap:4px;padding:4px 8px;border-radius:20px;font-size:12px;font-weight:600;color:${rc.color};background:${rc.bg};border:1px solid ${rc.border}"><span style="font-size:14px;font-weight:800;line-height:1">${n}</span><span>${rc.short}</span></span>`;
  };

  const deltaChip = (self, mgr) => {
    const diff = self - mgr;
    if (diff === 0) return `<span style="color:var(--text-muted);font-size:12px;font-weight:500">—</span>`;
    if (diff > 0) return `<span style="font-size:11px;font-weight:600;color:#92400E;background:#FFF7ED;border:1px solid #FED7AA;border-radius:20px;padding:4px 8px">Self +${diff}</span>`;
    return `<span style="font-size:11px;font-weight:600;color:#2563EB;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:20px;padding:4px 8px">Mgr +${Math.abs(diff)}</span>`;
  };

  const renderItems = (items) => items.map(item => `
    <div style="margin-bottom:16px">
      <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:8px">• ${escHtml(item.headline)}</div>
      <ul style="margin:0 0 0 8px;padding:0;list-style:none">
        ${item.bullets.map(b => `<li style="position:relative;padding-left:12px;font-size:12.5px;color:var(--text-secondary);line-height:1.65;margin-bottom:4px"><span style="position:absolute;left:0;top:8px;width:4px;height:4px;border-radius:50%;background:var(--text-muted)"></span>${escHtml(b)}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  const allSelfRatings = Object.values(review.self.ratings);
  const allMgrRatings = Object.values(review.manager.ratings);
  const selfAvg = (allSelfRatings.reduce((a, b) => a + b, 0) / allSelfRatings.length).toFixed(1);
  const mgrAvg = (allMgrRatings.reduce((a, b) => a + b, 0) / allMgrRatings.length).toFixed(1);
  const levelCounts = [1,2,3,4,5].map(n => ({ n, count: allMgrRatings.filter(r => r === n).length, ...EOY_RATING_CONFIG[n] }));

  return `
    <div style="max-width:960px">
      <div style="margin-bottom:24px">
        <div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap">
          <h2 style="font-size:22px;font-weight:800;color:var(--text);margin:0">${escHtml(review.year)} Performance Review</h2>
          <span style="font-size:13px;color:var(--text-muted)">${escHtml(currentProfile?.name || '')}${currentProfile?.role ? ' · ' + escHtml(shortRole(currentProfile.role)) : ''}</span>
        </div>
        <div style="display:flex;gap:12px;margin-top:16px;flex-wrap:wrap">
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;padding:14px 20px 12px;gap:2px;background:var(--surface);box-shadow:var(--shadow-sm);min-width:90px">
            <span style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted)">Self</span>
            <span style="font-size:36px;font-weight:800;line-height:1;color:var(--text)">${selfAvg}</span>
            <div style="display:flex;gap:1px;margin-top:2px">${Array.from({length:5},(_,i)=>`<span style="color:${i<Math.round(parseFloat(selfAvg))?'#F59E0B':'#CBD5E1'};font-size:11px;line-height:1">★</span>`).join('')}</div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;padding:14px 20px 12px;gap:2px;background:var(--surface);box-shadow:var(--shadow-sm);min-width:90px">
            <span style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted)">${escHtml(review.manager.name)}</span>
            <span style="font-size:36px;font-weight:800;line-height:1;color:var(--text)">${mgrAvg}</span>
            <div style="display:flex;gap:1px;margin-top:2px">${Array.from({length:5},(_,i)=>`<span style="color:${i<Math.round(parseFloat(mgrAvg))?'#F59E0B':'#CBD5E1'};font-size:11px;line-height:1">★</span>`).join('')}</div>
          </div>
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:8px 16px;flex:1;min-width:0">
            <div style="font-size:10px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">${escHtml(review.manager.name)}'s Take</div>
            <div style="display:flex;gap:24px">
              <div style="flex:1;min-width:0">
                <div style="font-size:10px;font-weight:700;color:var(--green);text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">Strengths</div>
                <ul style="margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:4px">
                  ${review.manager.accomplishments.slice(0,2).map(a => `<li style="font-size:12px;color:var(--text-secondary);line-height:1.45;padding-left:12px;position:relative"><span style="position:absolute;left:0;top:5px;width:5px;height:5px;border-radius:50%;background:#D1D5DB"></span>${escHtml(a.headline)}</li>`).join('')}
                </ul>
              </div>
              <div style="width:1px;background:var(--border);flex-shrink:0"></div>
              <div style="flex:1;min-width:0">
                <div style="font-size:10px;font-weight:700;color:#92400E;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">Growth Areas</div>
                <ul style="margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:4px">
                  ${review.manager.improvements.slice(0,2).map(a => `<li style="font-size:12px;color:var(--text-secondary);line-height:1.45;padding-left:12px;position:relative"><span style="position:absolute;left:0;top:5px;width:5px;height:5px;border-radius:50%;background:#D1D5DB"></span>${escHtml(a.headline)}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);margin-bottom:32px;overflow:hidden;box-shadow:var(--shadow-sm)">
        <div style="display:grid;grid-template-columns:1fr 170px 170px 90px;padding:8px 16px;background:var(--bg);border-bottom:2px solid var(--border)">
          <span style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em">Category</span>
          <span style="font-size:11px;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:.05em">Self</span>
          <span style="font-size:11px;font-weight:700;color:#5B21B6;text-transform:uppercase;letter-spacing:.05em">${escHtml(review.manager.name)}</span>
          <span style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;text-align:center">Delta</span>
        </div>
        ${EOY_CATEGORY_GROUPS.map((group, gi) => `
          <div style="padding:8px 16px;background:var(--bg);${gi > 0 ? 'border-top:1px solid var(--border);' : ''}font-size:10px;font-weight:700;color:var(--text-secondary);letter-spacing:.07em;text-transform:uppercase">${escHtml(group.label)}</div>
          ${group.categories.map((cat, ci) => {
            const selfR = review.self.ratings[cat.id];
            const mgrR = review.manager.ratings[cat.id];
            const isLast = ci === group.categories.length - 1;
            return `<div style="display:grid;grid-template-columns:1fr 170px 170px 90px;align-items:center;padding:12px 16px;${!isLast ? 'border-bottom:1px solid var(--border);' : ''}">
              <div>
                <div style="font-size:13px;font-weight:600;color:var(--text)">${escHtml(cat.label)}</div>
                <div style="font-size:11.5px;color:var(--text-muted);margin-top:4px;line-height:1.4">${escHtml(cat.desc)}</div>
              </div>
              <div>${ratingBadge(selfR)}</div>
              <div>${ratingBadge(mgrR)}</div>
              <div style="text-align:center">${deltaChip(selfR, mgrR)}</div>
            </div>`;
          }).join('')}
        `).join('')}
      </div>

      <!-- Recognition & Accomplishments: side-by-side -->
      <div style="background:var(--surface);border-radius:var(--radius);box-shadow:var(--shadow-sm);margin-bottom:16px;overflow:hidden">
        <div style="padding:16px 24px;border-bottom:1px solid var(--border)">
          <div style="font-size:16px;font-weight:700;color:var(--text)">Recognition &amp; Accomplishments</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr">
          <div style="padding:20px 24px;border-right:1px solid var(--border)">
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--primary);margin-bottom:14px">Self</div>
            ${renderItems(review.self.accomplishments)}
          </div>
          <div style="padding:20px 24px">
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#7C3AED;margin-bottom:14px">${escHtml(review.manager.name)}</div>
            ${renderItems(review.manager.accomplishments)}
          </div>
        </div>
      </div>

      <!-- Areas for Development: side-by-side -->
      <div style="background:var(--surface);border-radius:var(--radius);box-shadow:var(--shadow-sm);margin-bottom:32px;overflow:hidden">
        <div style="padding:16px 24px;border-bottom:1px solid var(--border)">
          <div style="font-size:16px;font-weight:700;color:var(--text)">Areas for Development</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr">
          <div style="padding:20px 24px;border-right:1px solid var(--border)">
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--primary);margin-bottom:14px">Self</div>
            ${renderItems(review.self.improvements)}
          </div>
          <div style="padding:20px 24px">
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#7C3AED;margin-bottom:14px">${escHtml(review.manager.name)}</div>
            ${renderItems(review.manager.improvements)}
          </div>
        </div>
      </div>
    </div>
  `;
}

function setEoyTextTab(tab) { state.eoyTextTab = tab; render(); }

function setTableSort(tableId, field) {
  const cur = state.tableSort[tableId] || { field: null, dir: 'asc' };
  state.tableSort[tableId] = {
    field,
    dir: cur.field === field && cur.dir === 'asc' ? 'desc' : 'asc',
  };
  render();
}
function sortIndicator(tableId, field) {
  const s = state.tableSort[tableId];
  if (!s || s.field !== field) return `<svg width="10" height="12" viewBox="0 0 10 12" fill="none" style="margin-left:4px;opacity:.25;vertical-align:middle"><path d="M5 1v10M2 4l3-3 3 3M2 8l3 3 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  return s.dir === 'asc'
    ? `<svg width="10" height="12" viewBox="0 0 10 12" fill="none" style="margin-left:4px;vertical-align:middle;color:var(--primary)"><path d="M5 11V1M2 4l3-3 3 3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    : `<svg width="10" height="12" viewBox="0 0 10 12" fill="none" style="margin-left:4px;vertical-align:middle;color:var(--primary)"><path d="M5 1v10M2 8l3 3 3-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
function applySortToRows(rows, tableId, getters) {
  const s = state.tableSort[tableId];
  if (!s || !s.field || !getters[s.field]) return rows;
  const get = getters[s.field];
  return [...rows].sort((a, b) => {
    const av = get(a), bv = get(b);
    if (av == null && bv == null) return 0;
    if (av == null) return 1;
    if (bv == null) return -1;
    const cmp = typeof av === 'string' ? av.localeCompare(bv, undefined, { sensitivity: 'base' }) : av - bv;
    return s.dir === 'asc' ? cmp : -cmp;
  });
}

// ============ INIT ============
function init() {
  const lastProfile = localStorage.getItem('dch_current_profile');
  const profiles = getProfiles();

  if (lastProfile && profiles.find(p => p.id === lastProfile)) {
    state.profile = lastProfile;
    render();
  } else if (profiles.length === 1) {
    // Auto-select if only one profile
    setCurrentProfile(profiles[0].id);
    render();
  } else {
    // Show modal over a blank render
    state.profile = 'guest';
    render();
    showProfileModal();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  init();
  document.addEventListener('click', (e) => {
    const inDropdown = e.target.closest('.review-filter-dropdown-btn') || e.target.closest('.review-filter-dropdown-panel');
    if (!inDropdown) {
      let changed = false;
      if (state.reviewOpenDropdown) { state.reviewOpenDropdown = ''; changed = true; }
      if (state.resourcesOpenDropdown) { state.resourcesOpenDropdown = ''; changed = true; }
      if (changed) render();
    }
  });
});
