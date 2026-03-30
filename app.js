/* ===================================================
   SpotOn Design Growth Hub — Application
   =================================================== */
console.log('[DCH] app.js v33 loaded');

// ============ ICON SYSTEM ============
const LUCIDE_PATHS = {
  'layout-dashboard': '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="3" y="15" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/>',
  'layers':       '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  'heart':        '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  'target':       '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  'bar-chart-2':  '<line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/>',
  'store':        '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2 2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/>',
  'book-open':    '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  'users':        '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'sprout':       '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 1 1.9 4c0 2.5-1 3.7-2.5 4.7-1-1.5-1.5-3.3-1.3-5.2.2-1.5.8-3.1 1.9-3.5z"/>',
  'hammer':       '<path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14l3-2.5"/>',
  'zap':          '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  'trophy':       '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  'graduation-cap':'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  'book':         '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>',
  'file-text':    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  'video':        '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  'wrench':       '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  'pencil':       '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>',
  'trash-2':      '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
  'search':       '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
  'plus':         '<path d="M5 12h14"/><path d="M12 5v14"/>',
  'external-link':'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  'upload':       '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
  'download':     '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  'sparkles':     '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>',
  'trending-up':  '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'chevron-right':'<path d="m9 18 6-6-6-6"/>',
  'alert-triangle':'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
};
function icon(name, size = 16, color = 'currentColor', extraStyle = '') {
  const paths = LUCIDE_PATHS[name] || '';
  if (!paths) return '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;flex-shrink:0${extraStyle ? ';' + extraStyle : ''}">${paths}</svg>`;
}

// ============ CONSTANTS ============
const LEVEL_CONFIG = {
  Unknown:     { emoji: '?',  iconName: 'search',  color: '#94A3B8', bg: '#F1F5F9', cls: 'level-unknown',     order: 0 },
  Learner:     { emoji: '🌱', iconName: 'sprout',  color: '#10B981', bg: '#D1FAE5', cls: 'level-learner',     order: 1 },
  Contributor: { emoji: '🛠️', iconName: 'hammer',  color: '#3B82F6', bg: '#DBEAFE', cls: 'level-contributor', order: 2 },
  Independent: { emoji: '🚀', iconName: 'zap',     color: '#8B5CF6', bg: '#EDE9FE', cls: 'level-independent', order: 3 },
  Expert:      { emoji: '🏆', iconName: 'trophy',  color: '#BE185D', bg: '#FCE7F3', cls: 'level-expert',      order: 4 },
};
const LEVELS = ['Unknown', 'Learner', 'Contributor', 'Independent', 'Expert'];

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
  article: { icon: '📄', iconName: 'file-text',      label: 'Article', tagColor: '#1D4ED8', tagBg: '#DBEAFE' },
  video:   { icon: '▶️', iconName: 'video',           label: 'Video',   tagColor: 'var(--red)',   tagBg: '#FEE2E2' },
  course:  { icon: '🎓', iconName: 'graduation-cap',  label: 'Course',  tagColor: 'var(--green)', tagBg: '#D1FAE5' },
  book:    { icon: '📚', iconName: 'book',             label: 'Book',    tagColor: '#7C3AED', tagBg: '#EDE9FE' },
  tool:    { icon: '🔧', iconName: 'wrench',           label: 'Tool',    tagColor: '#D97706', tagBg: '#FEF3C7' },
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

const EOY_CAT_INSIGHTS = {
  technical:        { strength: 'Your technical expertise is a clear asset — you bring depth that raises the bar.',         growth: 'Sharpening your technical skills in your core discipline would strengthen your overall impact.' },
  quality:          { strength: 'Your work is consistently well-crafted and reliable — people know what to expect from you.', growth: 'There\'s an opportunity to raise the consistency and polish of your deliverables.' },
  accountability:   { strength: 'You own your outcomes — your manager trusts you to drive results without being asked twice.',  growth: 'Taking more initiative to follow through and deliver results independently would make a big difference.' },
  we_lead:          { strength: 'You lead with ownership and integrity — you set the tone others want to follow.',             growth: 'Stepping up with more ownership and acting with greater consistency would have a meaningful impact.' },
  we_deliver:       { strength: 'You execute and deliver — the team counts on you to follow through.',                        growth: 'Improving your ability to execute consistently and close out commitments is the key growth opportunity.' },
  we_learn:         { strength: 'You\'re always growing — you adapt quickly and bring fresh thinking to the work.',           growth: 'Leaning into learning and being more open to change would accelerate your development.' },
  we_care:          { strength: 'Your care for your teammates creates a positive ripple effect on the whole team.',           growth: 'Being more intentional about how you show up for and support your teammates would go a long way.' },
  engagement:       { strength: 'Your team feels safe, recognized, and motivated — you\'re building the right culture.',     growth: 'Investing more in creating psychological safety and recognition within your team would make a real difference.' },
  team_performance: { strength: 'You get results from your team — you delegate well and stay on top of team health.',        growth: 'There\'s an opportunity to delegate more effectively and raise the bar on how you manage team performance.' },
  feedback_coaching:{ strength: 'Your people grow because of you — your coaching and feedback genuinely move the needle.',   growth: 'Being more consistent and intentional with feedback and coaching would unlock a lot of potential in your team.' },
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
      totalWeightedAvg: 3.875,
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
      name: 'Manager',
      totalWeightedAvg: 3.562,
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
  importModal: false,
  importStep: 1,
  importTypes: ['skill-matrix', 'perf-review'],
  importFiles: {},
  importPreview: null,
  aiSuggestModal: null,
  aiSuggestions: [],
  deleteConfirm: null,
  clearConfirm: null,
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
  if (el) v.notes = el.tagName === 'TEXTAREA' ? el.value : el.innerHTML;
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
  // Clear every localStorage key that belongs to this profile
  Object.keys(localStorage).filter(k => k.includes(id)).forEach(k => localStorage.removeItem(k));
  // Track deliberately-deleted IDs so seed.js won't re-add seed profiles
  const deleted = JSON.parse(localStorage.getItem('dch_deleted_profiles') || '[]');
  if (!deleted.includes(id)) { deleted.push(id); localStorage.setItem('dch_deleted_profiles', JSON.stringify(deleted)); }
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
// Convert stored value (plain text or HTML) to innerHTML-safe content for contenteditable
function toRteHtml(val) {
  if (!val) return '';
  if (/<[a-z][^>]*>/i.test(val)) return val; // already HTML
  return escHtml(val).replace(/\n/g, '<br>');
}
// Render a rich text editor widget
function rte(id, val, onInputExpr, placeholder, minHeight = '120px') {
  const b = (cmd, label, title) =>
    `<button class="rte-btn" title="${title}" onmousedown="event.preventDefault();document.execCommand('${cmd}')">${label}</button>`;
  return `
    <div class="rte-wrap">
      <div class="rte-toolbar">
        ${b('bold',   '<b>B</b>',   'Bold')}
        ${b('italic', '<i>I</i>',   'Italic')}
        <div class="rte-divider"></div>
        ${b('insertUnorderedList', '&#8226;&nbsp;&#8212;', 'Bullet list')}
        ${b('insertOrderedList',   '1.', 'Numbered list')}
      </div>
      <div class="rte-body" id="${id}" contenteditable="true"
           data-placeholder="${placeholder}"
           style="min-height:${minHeight}"
           oninput="${onInputExpr}"
           onblur="${onInputExpr}"
      >${toRteHtml(val)}</div>
    </div>
  `;
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
  // Check for imported expected levels first
  try {
    const custom = JSON.parse(localStorage.getItem('dch_expected_' + state.profile) || 'null');
    if (custom && custom[skillId]) return custom[skillId];
  } catch(e) {}
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
  return `<span class="level-badge ${lc.cls}" style="${size}">${icon(lc.iconName, 11, lc.color)} ${level}</span>`;
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
    ${!hasAssessments ? `<div class="radar-card-subtitle" style="margin-bottom:8px">Complete assessments to see your skill shape</div><div style="text-align:center;margin-bottom:10px"><button class="btn btn-secondary" style="font-size:12px;padding:6px 14px" onclick="openImportModal('skill-matrix')">${icon('upload',13)} Import skills</button></div>` : ''}
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
      ${rated.length === 0 ? `<div class="radar-card-subtitle" style="margin-bottom:8px">Rate your core values to see your shape</div><div style="text-align:center;margin-bottom:10px"><button class="btn btn-secondary" style="font-size:12px;padding:6px 14px" onclick="navigate('values')">Rate values →</button></div>` : ''}
      <div class="radar-chart-wrap" style="${rated.length === 0 ? 'opacity:.35;filter:grayscale(1)' : ''}">
        ${renderValuesRadarChart(290)}
      </div>
    </div>
  `;
}

// ============ NOTE CTA ============
function renderNoteInputCard() {
  return `<button class="note-cta-btn btn btn-primary" onclick="openNoteInput()">Log an Update</button>`;
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
    const newEvidence = existing.evidence
      ? existing.evidence + `<p>${escHtml(noteEntry)}</p>`
      : `<p>${escHtml(noteEntry)}</p>`;
    const newImages = [...(existing.evidenceImages || []), ..._noteModalImages];
    saveAssessment(m.skillId, { ...existing, evidence: newEvidence, evidenceImages: newImages });
  });
  cvMatches.filter(c => c.selected).forEach(cv => {
    const v = getValueRating(cv.id);
    v.notes = v.notes ? v.notes + `<p>${escHtml(noteEntry)}</p>` : `<p>${escHtml(noteEntry)}</p>`;
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

  const allUnknown = skillsWithManager.filter(s => assessments[s.id].managerLevel === 'Unknown');

  const allGaps = currentProfile?.role ? skillsWithManager.filter(s => {
    const exp = getExpectedLevelForSkill(s.id);
    if (assessments[s.id].managerLevel === 'Unknown') return false;
    return exp && getLevelOrder(assessments[s.id].managerLevel) < getLevelOrder(exp);
  }) : [];

  const allOverperforming = currentProfile?.role ? skillsWithManager.filter(s => {
    const exp = getExpectedLevelForSkill(s.id);
    if (assessments[s.id].managerLevel === 'Unknown') return false;
    return exp && getLevelOrder(assessments[s.id].managerLevel) > getLevelOrder(exp);
  }) : [];

  const growthAreas = (currentProfile?.role
    ? allGaps
    : assessedSkills.filter(s => assessments[s.id].managerLevel === 'Learner')
  ).slice().sort((a, b) => {
    const gapOf = s => {
      if (assessments[s.id].managerLevel === 'Unknown') return 0;
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
  const PERSONAS = {
    overachiever: { label: 'The Overachiever', emoji: '🚀', tagline: 'Consistently punching above the role bar', body: "Your scores across the board exceed what's expected at your level. You're not playing to the rubric — you're setting a new standard for it. The question now is how to parlay this into the next level, not just validation of where you are." },
    craftsperson:  { label: 'The Craftsperson',  emoji: '✏️', tagline: 'Where taste meets tenacity',           body: "Your design craft scores are exceptional — the care you put into quality, detail, and interaction shows up clearly in your work. You're building a reputation on output. The next unlock is pairing that craft with stronger strategic narrative so the work lands at every level of the org." },
    strategist:    { label: 'The Strategist',     emoji: '💡', tagline: 'Thinking a level ahead',               body: "You see the bigger picture before most people in the room. Your systems thinking and influence scores are ahead of the curve. The opportunity is in bringing your execution craft up to match — the ideas are there, and the output to back them up will make you unstoppable." },
    multiplier:    { label: 'The Multiplier',     emoji: '🤝', tagline: 'Makes the work better for everyone around them', body: "Cross-functional collaboration, communication, and influence are your standout traits. You make teams faster, alignment easier, and feedback land better. The growth edge is going deeper — investing in craft or strategic depth to match the influence you already carry." },
    rocketship:    { label: 'The Rocketship',     emoji: '🔥', tagline: 'Early days. Steep trajectory.',        body: "You're still building your foundation — and that's actually a good thing. Every skill you unlock compounds. There are more development areas than strengths right now, but the pattern here is momentum, not deficit. Keep the velocity up. The ceiling is high." },
    specialist:    { label: 'The Specialist',     emoji: '🎯', tagline: 'World-class in a lane, building out from there', body: "You have one or two areas of clear mastery that stand significantly above the rest. You're the go-to person in those areas — and for good reason. The growth opportunity is lateral: developing adjacent skills so your expertise becomes more versatile and your impact wider." },
    steadyHand:    { label: 'The Steady Hand',    emoji: '🧭', tagline: 'The reliable core of the team',       body: "Your skills land right where they should — consistently, dependably, without drama. You deliver what's needed and teams know they can count on you. The opportunity ahead is choosing where to push: which skill becomes your breakout, and what would it take to get there?" },
    connector:     { label: 'The Connector',      emoji: '🔗', tagline: 'Bridging design and the broader business', body: "You move easily between design and the business context around it. Communication and stakeholder influence are clear strengths. Strong connectors who also have a craft or strategy specialty become rare and irreplaceable — that's the next chapter." },
    architect:     { label: 'The Architect',      emoji: '🏗️', tagline: 'Building the structures others design within', body: "Systems thinking, scalability, and design infrastructure are where you shine. You're not just solving problems — you're building the frameworks others use to solve them. The growth edge is often in making that complexity visible and compelling to those outside the system." },
    emerging:      { label: 'The Emerging',       emoji: '🌱', tagline: 'Signal is strong — still finding the shape', body: "Some skills are landing well; others are developing. What stands out is the breadth of what you're already engaged with at an early stage. This phase determines trajectory. Stay curious, make the most of every project, and the picture will sharpen fast." },
  };

  let persona = null;
  if (assessedSkills.length >= 4 && topCat) {
    const t = topCat.cat;
    if (gapRatio > 0.5) {
      persona = PERSONAS.rocketship;
    } else if (allOverperforming.length >= Math.max(3, allGaps.length * 2) && gapRatio < 0.25) {
      persona = PERSONAS.overachiever;
    } else if (expertCount >= 2 && gapRatio > 0.3) {
      persona = PERSONAS.specialist;
    } else if (t === 'Design Skills') {
      persona = PERSONAS.craftsperson;
    } else if (t === 'Influence' && topCat.avg >= 3.5) {
      persona = PERSONAS.strategist;
    } else if (t === 'Collaboration') {
      persona = PERSONAS.multiplier;
    } else if (t === 'Project Management') {
      persona = PERSONAS.connector;
    } else if (topCat.avg >= 4 && expertCount >= 2) {
      persona = PERSONAS.architect;
    } else if (gapRatio < 0.15) {
      persona = PERSONAS.steadyHand;
    } else {
      persona = PERSONAS.emerging;
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
      insightBullets.push(`Strategic growth edge — your manager calls out a tendency to weigh aesthetics and feasibility over user advocacy. At the manager level, pushing harder for the user when PM or engineering pressure mounts is the mark of the next tier.`);
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
        <h1>Welcome back, ${escHtml((currentProfile?.name || 'Designer').split(' ')[0])}</h1>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0">
        ${renderNoteInputCard()}
      </div>
    </div>

    <!-- DASHBOARD GRID: 2/3 left + 1/3 right -->
    <div style="display:grid;grid-template-columns:2fr 1fr;gap:16px;align-items:start">

      <!-- LEFT COL (2/3): Insights + Charts -->
      <div style="display:flex;flex-direction:column;gap:16px;min-width:0">

        <!-- Metric tiles -->
        ${hasAssessments && currentProfile?.role ? `
          <div class="analysis-counts-row">
            <div class="skill-snapshot-card">
              <div class="skill-snapshot-stats">
                <button class="skill-snapshot-stat" onclick="navigate('review');setReviewFilter('gap')">
                  <span class="skill-snapshot-label">Below Target</span>
                  <span class="skill-snapshot-num" style="color:var(--red)">${allGaps.length}</span>
                </button>
                <div class="skill-snapshot-divider"></div>
                <button class="skill-snapshot-stat" onclick="navigate('review');setReviewFilter('strength')">
                  <span class="skill-snapshot-label">Above Target</span>
                  <span class="skill-snapshot-num" style="color:var(--green)">${allOverperforming.length}</span>
                </button>
                <div class="skill-snapshot-divider"></div>
                <button class="skill-snapshot-stat" onclick="navigate('review');setReviewFilter('unknown')">
                  <span class="skill-snapshot-label">Not Assessed</span>
                  <span class="skill-snapshot-num" style="color:#94A3B8">${allUnknown.length}</span>
                </button>
              </div>
            </div>
            ${(() => {
              const _firstName = (currentProfile?.name || '').split(' ')[0].toLowerCase();
              const _saved = (() => { try { return JSON.parse(localStorage.getItem('dch_review_' + state.profile)); } catch(e) { return null; } })();
              const er = _saved || null;
              if (!er) return '';
              const avgNum = er.manager.totalWeightedAvg != null
                ? er.manager.totalWeightedAvg
                : (Object.values(er.manager.ratings).reduce((a,b)=>a+b,0) / Object.values(er.manager.ratings).length);
              const avg = er.manager.totalWeightedAvg != null ? avgNum.toFixed(3) : avgNum.toFixed(1);
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
              <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px">Start assessing skills to see your insights here</div>
              <button class="btn btn-secondary" style="font-size:12px;padding:6px 14px" onclick="openImportModal('skill-matrix')">${icon('upload',13)} Import skills</button>
            </div>
          ` : `
            <div style="display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap">
              ${persona ? `
                <div class="analysis-persona" style="flex:0 0 300px;margin-bottom:0">
                  <div class="analysis-persona-top">
                    <div style="flex:1">
                      <div class="analysis-persona-label">${escHtml(persona.label)}</div>
                      <div class="analysis-persona-tagline">"${escHtml(persona.tagline)}"</div>
                    </div>
                    <span class="analysis-persona-emoji">${persona.emoji}</span>
                  </div>
                  <div class="analysis-persona-body">${escHtml(persona.body)}</div>
                </div>
              ` : ''}
              ${insightBullets.length > 0 ? `
                <div class="analysis-narrative-blocks" style="flex:1;min-width:220px">
                  ${insightBullets.map(b => {
                    const dashIdx = b.indexOf(' — ');
                    if (dashIdx !== -1) {
                      return `<div class="analysis-narrative-block"><div class="analysis-narrative-heading">${escHtml(b.slice(0, dashIdx))}</div><div class="analysis-narrative-body">${escHtml(b.slice(dashIdx + 3))}</div></div>`;
                    }
                    const commaIdx = b.indexOf(', ');
                    if (commaIdx !== -1) {
                      return `<div class="analysis-narrative-block"><div class="analysis-narrative-heading">${escHtml(b.slice(0, commaIdx))}</div><div class="analysis-narrative-body">${escHtml(b.slice(commaIdx + 2))}</div></div>`;
                    }
                    return `<div class="analysis-narrative-block"><div class="analysis-narrative-body">${escHtml(b)}</div></div>`;
                  }).join('')}
                </div>
              ` : (!persona ? '<div style="font-size:12px;color:var(--text-muted)">No insights yet</div>' : '')}
            </div>
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
                const isUnknown = assessments[s.id].managerLevel === 'Unknown';
                const isGap = !isUnknown && mgrOrder < expOrder;
                const isOver = !isUnknown && mgrOrder > expOrder;
                const gapDiff = isGap ? expOrder - mgrOrder : isOver ? mgrOrder - expOrder : 0;
                const gapHtml = isGap
                  ? `<span class="review-gap-badge review-gap-under-${Math.min(gapDiff,3)}">−${gapDiff}</span>`
                  : isOver
                  ? `<span class="review-gap-badge review-gap-over-${Math.min(gapDiff,3)}">+${gapDiff}</span>`
                  : `<span style="color:var(--text-muted);font-size:12px">—</span>`;
                return `<div class="growth-table-row" onclick="navigate('skill','${s.id}')">
                  <span class="growth-col-skill">${escHtml(s.name)}</span>
                  <span class="growth-col-level"><span class="level-badge ${lc.cls}">${icon(lc.iconName, 11, lc.color)} ${assessments[s.id].managerLevel}</span></span>
                  <span class="growth-col-gap">${gapHtml}</span>
                </div>`;
              }).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Star charts side by side -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px">
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
                <div style="padding-bottom:14px">
                  ${subHeader('Growth Themes')}
                  ${themes.length ? `
                    <div class="dash-quick-wins-list">
                      ${themes.map(t => `
                        <div class="dash-qw-item" onclick="navigate('goals')">
                          <div class="dash-qw-body">
                            <div class="dash-qw-title">${escHtml(t.theme)}</div>
                          </div>
                          <svg class="dash-qw-arrow" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"/></svg>
                        </div>`).join('')}
                    </div>` : `<div style="font-size:13px;color:var(--text-muted)">No growth themes created yet.</div>`}
                </div>
                <div style="${themes.length ? 'padding-top:14px' : ''}">
                  ${subHeader('Personal Goals')}
                  ${personalGoals.length === 0
                    ? `<div style="font-size:13px;color:var(--text-muted)">No personal goals created yet.</div>`
                    : `<div style="display:flex;flex-direction:column;gap:14px">
                        ${personalGoals.map(g => {
                          const sc = GOAL_STATUS_CONFIG[g.status || 'not_started'] || GOAL_STATUS_CONFIG['not_started'];
                          const pct = statusPct[g.status] ?? 0;
                          return `
                            <div onclick="navigate('goals')" style="cursor:pointer" onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
                              <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:5px">
                                <span style="font-size:12px;color:var(--text);font-weight:500;flex:1;min-width:0;line-height:1.5">${escHtml(g.goal)}</span>
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

  const legendOpen = !!state.skillLegendOpen;
  const legendLevels = [
    { level: 'Learner',     desc: 'Gaining and growing knowledge and skillsets. Actively demonstrating curiosity and open to trying new things.' },
    { level: 'Contributor', desc: 'Adds knowledge or skills to projects. Able to execute requests in a timely and high quality manner.' },
    { level: 'Independent', desc: 'Knowledgeable and skilled in topic. Able to execute without guidance. Able to demonstrate initiative and move forward autonomously.' },
    { level: 'Expert',      desc: 'Comprehensive knowledge of topic. Training team and raising the bar. Demonstrating leadership. Fully Autonomous.' },
  ];

  return `
    <div class="filter-bar">
      ${categories.map(cat => `
        <button class="filter-btn ${state.category === cat ? 'active' : ''}" onclick="setCategory('${escHtml(cat)}')">${cat === 'all' ? 'All Skills' : escHtml(cat)}</button>
      `).join('')}
    </div>

    <!-- Level guide legend -->
    <div style="margin-bottom:16px">
      <button onclick="state.skillLegendOpen=!state.skillLegendOpen;render()"
        style="display:inline-flex;align-items:center;gap:5px;background:none;border:none;cursor:pointer;font-size:12px;font-weight:600;color:var(--text-muted);padding:0;letter-spacing:.01em">
        ${icon('info', 13, 'var(--text-muted)')}
        Level guide
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style="transition:transform .2s;${legendOpen ? 'transform:rotate(180deg)' : ''}">
          <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>
        </svg>
      </button>
      ${legendOpen ? `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px">
          ${legendLevels.map(({ level, desc }) => {
            const lc = LEVEL_CONFIG[level];
            return `
              <div style="display:flex;gap:10px;align-items:flex-start;background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:10px 12px">
                <span class="level-badge ${lc.cls}" style="font-size:10px;padding:3px 8px;white-space:nowrap;flex-shrink:0;margin-top:1px">${lc.emoji} ${level}</span>
                <span style="font-size:12px;color:var(--text-secondary);line-height:1.5">${escHtml(desc)}</span>
              </div>
            `;
          }).join('')}
        </div>
      ` : ''}
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
                  ${mgrLevel ? `<span class="level-badge ${lc.cls}" style="font-size:10px;padding:4px 8px">${icon(lc.iconName, 10, lc.color)} ${mgrLevel}</span>` : '<span class="not-assessed">Not assessed</span>'}
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
              return LEVELS.filter(l => l !== 'Unknown').map(level => {
                const tlc = LEVEL_CONFIG[level];
                const isExpected = expectedLevel === level;
                return `<button class="tab-btn ${level === activeLevel ? 'active' : ''} ${tlc.cls}" onclick="setLevelTab('${level}')">${icon(tlc.iconName, 12, tlc.color)} <span>${level}</span>${isExpected ? '<span class="tab-expected-badge">expected</span>' : ''}</button>`;
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
              ${rte('evidence-input', assessment.evidence || '', `debounceAssessmentField('${skill.id}','evidence',this.innerHTML)`, 'Describe specific examples from your work that demonstrate this skill...', '160px')}
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
              ${rte('goals-input', assessment.goals || '', `debounceAssessmentField('${skill.id}','goals',this.innerHTML)`, 'Goals, action items, things to work on…', '100px')}
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
                      <div class="resource-type-icon resource-type-${r.type}">${icon(rt.iconName, 15, rt.tagColor)}</div>
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
                <th>Type</th>
                <th>Skill</th>
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
                    <td><span class="resource-type-tag" style="color:${rt.tagColor};background:${rt.tagBg}">${rt.label}</span></td>
                    <td><button onclick="event.stopPropagation();navigate('skill','${skill.id}')" style="background:none;border:none;cursor:pointer;font-size:13px;font-weight:400;color:var(--text-secondary);padding:0;text-align:left;line-height:1.4;font-family:inherit">${escHtml(skill.name)}</button></td>
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
              <th>Type</th>
              <th>Core Value</th>
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
                  <td><span class="resource-type-tag" style="color:${rt.tagColor};background:${rt.tagBg}">${rt.label}</span></td>
                  <td><button onclick="event.stopPropagation();navigate('value','${cv.id}')" style="background:none;border:none;cursor:pointer;font-size:13px;font-weight:400;color:var(--text-secondary);padding:0;text-align:left;line-height:1.4;font-family:inherit">${escHtml(cv.label.split('.')[0].trim())}</button></td>
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
  {
    icon: '🧑‍🏫',
    title: 'Mentor a junior designer for one quarter',
    desc: 'Structured mentorship sharpens your coaching, communication, and leadership skills while multiplying your impact.',
    relatedIds: ['influence_6', 'influence_7', 'collaboration_8', 'collaboration_2'],
    tips: [
      'Set a clear goal for the quarter upfront — "finish X project" or "get comfortable with Y skill" — so both of you know what success looks like.',
      'Give feedback on process, not just output. Ask "how did you decide that?" before "here\'s what I\'d change."',
      'Share your own mistakes openly — mentees learn more from your failures than your wins.',
    ],
    framework: { name: 'SBI Feedback Model', desc: 'Situation (when/where), Behavior (what you observed), Impact (what it caused). Keeps feedback specific, non-personal, and actionable — and trains the mentee to self-evaluate using the same lens over time.' },
    resources: [
      { title: 'The Coaching Habit', author: 'Michael Bungay Stanier', type: 'Book', url: 'https://boxofcrayons.com/the-coaching-habit-book/' },
      { title: 'Radical Candor', author: 'Kim Scott', type: 'Book', url: 'https://www.radicalcandor.com/' },
    ],
  },
  {
    icon: '♿',
    title: 'Conduct an accessibility audit on a live product',
    desc: 'Reviewing real screens for WCAG issues builds inclusive design habits, attention to detail, and cross-functional credibility.',
    relatedIds: ['job_skills_19', 'job_skills_14', 'job_skills_22', 'job_skills_12'],
    tips: [
      'Start with a keyboard-only walkthrough — if you can\'t complete a core flow with only Tab and Enter, it\'s a blocker.',
      'Use a contrast checker on every text/background combo, including disabled states and placeholder text.',
      'Document findings with severity ratings (critical / serious / moderate) and share with engineering as a prioritized ticket list, not just a design file.',
    ],
    framework: { name: 'WCAG 2.1 POUR', desc: 'Four principles: Perceivable (info is presentable to all senses), Operable (UI is navigable by all input methods), Understandable (content is readable and predictable), Robust (works with assistive technologies). Use as a checklist framework, not just a compliance target.' },
    resources: [
      { title: 'WebAIM Contrast Checker', type: 'Tool', url: 'https://webaim.org/resources/contrastchecker/' },
      { title: 'Deque University — Accessibility', type: 'Course', url: 'https://dequeuniversity.com/' },
    ],
  },
  {
    icon: '📐',
    title: 'Prototype and test a high-stakes interaction',
    desc: 'Building a high-fidelity prototype and running it through a usability test closes loops across craft, research, and handoff.',
    relatedIds: ['job_skills_14', 'job_skills_2', 'job_skills_3', 'job_skills_21'],
    tips: [
      'Prototype the riskiest assumption first — the thing you\'re least sure about — not the part you\'re most excited about.',
      'Test with 5 participants. You\'ll find 80% of usability issues. More sessions rarely change the direction of findings.',
      'Write your test script before finishing the prototype — if you can\'t write the tasks, the design isn\'t clear enough yet.',
    ],
    framework: { name: 'Prototype Fidelity Ladder', desc: 'Match fidelity to the question: paper for flow, wireframes for layout, Figma prototype for interaction, coded prototype for edge cases. Over-fidelity wastes time; under-fidelity misses real problems. Choose the lowest fidelity that can answer your question.' },
    resources: [
      { title: 'Rocket Surgery Made Easy', author: 'Steve Krug', type: 'Book', url: 'https://www.sensible.com/rocket-surgery-made-easy.html' },
      { title: 'Maze — Usability Testing', type: 'Tool', url: 'https://maze.co/' },
    ],
  },
  {
    icon: '🗣️',
    title: 'Request and act on structured peer feedback',
    desc: 'Proactively seeking feedback from colleagues builds self-awareness, psychological safety, and a culture of openness.',
    relatedIds: ['collaboration_2', 'collaboration_4', 'collaboration_8', 'influence_9'],
    tips: [
      'Ask for feedback on a specific piece of work, not your performance in general — specific inputs produce specific, useful outputs.',
      'After receiving feedback, summarize what you heard back to the giver before reacting — it closes interpretation gaps immediately.',
      'Close the loop: tell people what you did with their feedback. It makes them more likely to give honest input next time.',
    ],
    framework: { name: 'Feedforward (not Feedback)', desc: 'Ask colleagues "What\'s one thing I could do differently on the next project to be more effective?" instead of "How did I do?" Feedforward is future-oriented, less threatening, and produces actionable suggestions rather than evaluative judgments.' },
    resources: [
      { title: 'Thanks for the Feedback', author: 'Stone & Heen', type: 'Book', url: 'https://www.stoneandheen.com/thanks-feedback' },
      { title: 'How to Ask for Feedback', author: 'HBR', type: 'Article', url: 'https://hbr.org/2014/12/how-to-ask-for-feedback-that-will-actually-help-you' },
    ],
  },
  {
    icon: '🤖',
    title: 'Integrate an AI tool into your design workflow',
    desc: 'Experimenting with AI for research synthesis, copy, or ideation builds adaptability and positions you as a forward-thinking designer.',
    relatedIds: ['job_skills_24', 'job_skills_7', 'job_skills_5', 'project_management_5'],
    tips: [
      'Pick one repeatable task — like writing usability test summaries or generating copy variants — and use AI exclusively for it for two weeks.',
      'Document what it gets right and wrong. The skill isn\'t prompting — it\'s knowing when to trust the output and when to override it.',
      'Share what you learn with your team. Being the person who figured something out early compounds — it builds influence and credibility fast.',
    ],
    framework: { name: 'AI as Thought Partner', desc: 'Treat AI outputs as a first draft and a prompt for your own thinking, not a final answer. Use it to generate options you\'d evaluate, not conclusions you\'d ship. The judgment layer — knowing what\'s good — is the human skill that compounds.' },
    resources: [
      { title: 'AI for Designers — NN/g Guide', type: 'Article', url: 'https://www.nngroup.com/articles/ai-design-tools/' },
      { title: 'Prompting Fundamentals', author: 'OpenAI', type: 'Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
    ],
  },
  {
    icon: '📣',
    title: 'Share a case study with the broader team',
    desc: 'Writing and presenting a project story strengthens communication, storytelling, and visibility across the org simultaneously.',
    relatedIds: ['influence_1', 'influence_2', 'influence_8', 'collaboration_4'],
    tips: [
      'Structure it as: problem → process → decision → outcome. Skip the part where you explain every tool you used.',
      'Include one thing that didn\'t work and why — it makes the story credible and models intellectual honesty for the team.',
      'End with what you\'d do differently. It signals growth mindset and gives the audience something concrete to take away.',
    ],
    framework: { name: 'STAR Case Study Format', desc: 'Situation (context and constraints), Task (what you were responsible for), Action (what you specifically decided and why), Result (measurable outcome). Keeps case studies from becoming project timelines and keeps focus on your judgment and impact.' },
    resources: [
      { title: 'Writing Case Studies That Don\'t Suck', author: 'UX Collective', type: 'Article', url: 'https://uxdesign.cc/writing-a-case-study-that-doesnt-suck-b9a3e6a6c4f4' },
    ],
  },
  {
    icon: '🔍',
    title: 'Audit your design handoff process',
    desc: 'A handoff audit surfaces gaps in annotation, spec accuracy, and dev collaboration — improving quality and trust across functions.',
    relatedIds: ['job_skills_22', 'job_skills_20', 'job_skills_23', 'collaboration_3'],
    tips: [
      'Ask an engineer to walk you through the last file you handed off — watch where they get confused without you explaining it.',
      'Check every interactive state: hover, focus, error, empty, loading. Missing states are the most common handoff gap.',
      'Add a "design decisions" section to your files — one sentence per major choice explaining the why, not just the what.',
    ],
    framework: { name: 'Handoff Readiness Checklist', desc: 'Before declaring a file ready: all specs annotated, all states covered, all assets exported, all decisions documented, at least one walkthrough done with an engineer. Each item missed creates at least one follow-up conversation later — usually at the worst possible time.' },
    resources: [
      { title: 'Design Handoff Best Practices', author: 'Figma', type: 'Guide', url: 'https://www.figma.com/best-practices/design-handoff/' },
      { title: 'Zeroheight — Design System Docs', type: 'Tool', url: 'https://zeroheight.com/' },
    ],
  },
];

function computeQuickWins(allEntries, minScore = 1) {
  const ids = new Set(allEntries.map(e => e.skill.id));
  const scored = CROSS_SKILL_ACTIVITIES.map(a => {
    const matchingIds = a.relatedIds.filter(id => ids.has(id));
    const matchingNames = matchingIds.map(id => SKILLS_DATA.skills.find(s => s.id === id)?.name).filter(Boolean);
    return { ...a, matchingIds, matchingNames, score: matchingIds.length };
  }).filter(a => a.score >= minScore).sort((a, b) => b.score - a.score);
  return scored.slice(0, 5).map(a => ({ kind: 'activity', ...a }));
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
  const btnBase = 'width:28px;height:28px;border-radius:6px;border:1px solid var(--border);background:var(--surface);display:flex;align-items:center;justify-content:center;transition:opacity .15s';
  return `
    <div style="margin-bottom:24px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <span style="font-size:16px;font-weight:700;color:var(--text)">Quick Wins</span>
        <div style="display:flex;align-items:center;gap:4px">
          <button id="qw-arrow-left" onclick="scrollQuickWins(-1)" disabled style="${btnBase};opacity:.35;cursor:not-allowed;color:var(--text-muted)">${icon('chevron-left',14)}</button>
          <button id="qw-arrow-right" onclick="scrollQuickWins(1)" style="${btnBase};cursor:pointer;color:var(--text-muted)">${icon('chevron-right',14)}</button>
        </div>
      </div>
      <div id="quick-wins-carousel" onscroll="onQuickWinsScroll(this)" style="display:flex;gap:10px;overflow-x:auto;padding-bottom:6px;scrollbar-width:none;-ms-overflow-style:none">
        ${quickWins.map((w, i) => renderQuickWinCard(w, i)).join('')}
      </div>
    </div>
  `;
}

function onQuickWinsScroll(el) {
  // Show scrollbar while scrolling, hide after pause
  el.classList.add('qw-scrolling');
  clearTimeout(el._scrollTimer);
  el._scrollTimer = setTimeout(() => el.classList.remove('qw-scrolling'), 800);
  // Update arrow disabled states
  const atStart = el.scrollLeft < 2;
  const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
  const L = document.getElementById('qw-arrow-left');
  const R = document.getElementById('qw-arrow-right');
  if (L) { L.disabled = atStart; L.style.opacity = atStart ? '.35' : '1'; L.style.cursor = atStart ? 'not-allowed' : 'pointer'; }
  if (R) { R.disabled = atEnd;   R.style.opacity = atEnd   ? '.35' : '1'; R.style.cursor = atEnd   ? 'not-allowed' : 'pointer'; }
}

function scrollQuickWins(dir) {
  const el = document.getElementById('quick-wins-carousel');
  if (el) el.scrollBy({ left: dir * 280, behavior: 'smooth' });
}

function renderQuickWinCard(w, idx) {
  const typeLabel = w.kind === 'resource'
    ? `<span style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--text-muted)">${(RESOURCE_TYPES[w.resourceType]?.label || 'Resource').toUpperCase()}</span>`
    : '';

  return `
    <div class="quick-win-card" onclick="openQuickWinModal(${idx})">
      <div style="flex:1;min-width:0">
        ${typeLabel ? `<div style="margin-bottom:4px">${typeLabel}</div>` : ''}
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:4px">
          <div style="font-size:13.5px;font-weight:600;color:var(--text);line-height:1.4">${escHtml(w.title)}</div>
          <span style="font-size:13px;color:var(--primary);opacity:.4;transition:opacity .12s;flex-shrink:0;margin-top:1px">→</span>
        </div>
        <div style="font-size:12px;color:var(--text-muted);line-height:1.5">${escHtml(w.desc)}</div>
      </div>
      <div class="qw-covers-badge" data-skills="${escHtml(w.matchingNames.join(' · '))}" onmouseenter="showQwTooltip(event,this)" onmouseleave="hideQwTooltip()" style="margin-top:12px;font-size:12px;color:var(--text-muted);cursor:default"><strong style="color:var(--text)">${w.score}</strong> skill${w.score !== 1 ? 's' : ''} covered</div>
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
      return exp && a?.managerLevel && a.managerLevel !== 'Unknown' && getLevelOrder(a.managerLevel) < getLevelOrder(exp);
    });
  } else if (state.reviewFilter === 'strength') {
    allSkills = allSkills.filter(s => {
      const a = d.assessments[s.id];
      const exp = getExpectedLevelForSkill(s.id);
      return exp && a?.managerLevel && getLevelOrder(a.managerLevel) > getLevelOrder(exp);
    });
  } else if (state.reviewFilter === 'unknown') {
    allSkills = allSkills.filter(s => d.assessments[s.id]?.managerLevel === 'Unknown');
  }
  if (state.reviewCats.length) allSkills = allSkills.filter(s => state.reviewCats.includes(s.category));
  if (state.reviewLevels.length) allSkills = allSkills.filter(s => state.reviewLevels.includes(d.assessments[s.id]?.managerLevel));
  if (state.reviewHasNotes) allSkills = allSkills.filter(s => !!d.assessments[s.id]?.evidence);
  if (state.reviewHasGoals) allSkills = allSkills.filter(s => !!d.assessments[s.id]?.goals);

  const totalAssessed = allSkills.filter(s => d.assessments[s.id]?.managerLevel).length;

  return `
    <div class="review-header">
      <div>
        <h1>${escHtml(currentProfile?.name || 'Designer')}</h1>
      </div>
      <div class="review-actions">
        <div style="display:flex;gap:8px;align-items:center">
          <button class="btn btn-secondary" onclick="state.clearConfirm='skills';render()" style="font-size:13px;display:flex;align-items:center;gap:6px;white-space:nowrap;color:#DC2626;border-color:#DC2626">${icon('trash-2',14,'#DC2626')} Clear all</button>
          <button class="btn btn-secondary" onclick="openImportModal('skill-matrix')" style="font-size:13px;display:flex;align-items:center;gap:6px;white-space:nowrap">${icon('upload',14)} Import</button>
          <button class="btn btn-secondary" onclick="exportReviewCSV()" style="font-size:13px;display:flex;align-items:center;gap:6px;white-space:nowrap">${icon('download',14)} Export</button>
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
                checkRow('Unknown', state.reviewFilter === 'unknown', "setReviewFilter('unknown')"),
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
                const isGap = expectedLevel && a.managerLevel && a.managerLevel !== 'Unknown' && mgrOrder < expOrder;
                const isOver = expectedLevel && a.managerLevel && a.managerLevel !== 'Unknown' && mgrOrder > expOrder;
                const gapDiff = isGap ? expOrder - mgrOrder : isOver ? mgrOrder - expOrder : 0;
                return `
                  <tr>
                    <td>
                      <div class="review-skill-name" onclick="navigate('skill','${skill.id}')">${escHtml(skill.name)}</div>
                    </td>
                    <td>
                      <div style="position:relative;display:inline-flex;align-items:center">
                        ${mgrLc ? `<span style="position:absolute;left:7px;top:50%;transform:translateY(-50%);pointer-events:none;z-index:1;display:flex;align-items:center">${icon(mgrLc.iconName, 11, mgrLc.color)}</span>` : ''}
                        <select class="review-level-select ${mgrLc ? mgrLc.cls : ''}" style="${mgrLc ? 'padding-left:22px' : ''}" onchange="setReviewLevel('${skill.id}',this.value)">
                          <option value="">—</option>
                          ${LEVELS.map(l => `<option value="${l}" ${a.managerLevel === l ? 'selected' : ''}>${l}</option>`).join('')}
                        </select>
                      </div>
                    </td>
                    <td>
                      ${expLc ? `<span class="level-badge ${expLc.cls}">${icon(expLc.iconName, 11, expLc.color)} ${expectedLevel}</span>` : '<span style="color:var(--text-muted);font-size:12px">—</span>'}
                    </td>
                    <td style="text-align:center">
                      ${isGap ? `<span class="review-gap-badge review-gap-under-${gapDiff}">−${gapDiff}</span>` : isOver ? `<span class="review-gap-badge review-gap-over-${gapDiff}">+${gapDiff}</span>` : (a.managerLevel && a.managerLevel !== 'Unknown' ? `<span class="review-gap-badge review-gap-met">0</span>` : '<span style="color:var(--text-muted);font-size:12px">—</span>')}
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
          <div class="modal-title" style="margin-bottom:4px">Welcome to Growth Hub</div>
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
      <div class="modal" style="width:540px;max-width:95vw;max-height:90vh;display:flex;flex-direction:column;padding:0;overflow:hidden">

        <!-- Fixed header -->
        <div style="padding:24px 24px 16px;flex-shrink:0;border-bottom:1px solid var(--border)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
            <div class="modal-title" style="margin-bottom:0">Manage Team</div>
            <button onclick="closeTeamModal()" style="background:none;border:none;cursor:pointer;font-size:18px;color:var(--text-muted);padding:4px">✕</button>
          </div>
          <div class="modal-subtitle" style="margin:0">Add team members and assign roles to set expected skill levels.</div>
        </div>

        <!-- Scrollable body -->
        <div style="flex:1;overflow-y:auto;padding:20px 24px">
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
            <button class="btn btn-secondary btn-sm" onclick="createProfileFromTeam()" style="white-space:nowrap;flex-shrink:0">+ Add another</button>
          </div>
          <label style="display:flex;align-items:center;gap:8px;margin-top:10px;cursor:pointer">
            <input type="checkbox" id="new-profile-manager-team" style="width:15px;height:15px;accent-color:var(--primary);cursor:pointer" />
            <span style="font-size:12px;color:var(--text-secondary)">Manager — can switch profiles and manage team</span>
          </label>
        </div>

        <!-- Sticky footer -->
        <div style="flex-shrink:0;padding:16px 24px;border-top:1px solid var(--border);background:var(--surface);display:flex;justify-content:flex-end;gap:8px">
          <button class="btn btn-secondary" onclick="closeTeamModal()">Cancel</button>
          <button class="btn btn-primary" onclick="saveTeamRoles()">Save</button>
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
  // Auto-create any pending new member if a name is filled in
  const pendingName = document.getElementById('new-profile-name')?.value?.trim();
  if (pendingName) {
    const role = document.getElementById('new-profile-role')?.value?.trim();
    const isManager = document.getElementById('new-profile-manager-team')?.checked || false;
    addProfile(pendingName, role, isManager);
  }
  // Save edits to existing members
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
        <div class="outreach-compact-progress">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
            <span style="font-size:13px;color:var(--text-secondary)">Q${q} touchpoints</span>
            <span style="font-size:13px;font-weight:600;color:${allTouchpointsThisQ >= goal ? 'var(--green)' : 'var(--text)'}">${allTouchpointsThisQ} / ${goal}</span>
          </div>
          <div class="outreach-progress-track" style="margin:0">
            <div class="outreach-progress-fill${pct >= 100 ? ' complete' : ''}" style="width:${pct}%"></div>
          </div>
        </div>
        <div class="outreach-widget-compact-footer" style="display:flex;align-items:center;justify-content:space-between;margin-top:8px">
          <div style="font-size:13px;font-weight:600;color:${hveOk ? 'var(--green)' : 'var(--text-muted)'}">
            ${hveOk ? '✓ HVE done!' : `<span style="display:inline-flex;align-items:center;gap:5px">${icon('alert-triangle', 13, 'var(--text-muted)')} HVE due this month</span>`}
          </div>
          <button class="btn btn-secondary btn-sm" onclick="openOutreachModal(null)">Log Outreach</button>
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
          <div class="skill-snapshot-label" style="margin-bottom:6px">Touchpoints Q${q}</div>
          <div class="outreach-tile-value">${allTouchpointsThisQ}<span style="font-size:14px;color:var(--text-muted);font-weight:500"> / ${goal}</span></div>
          <div class="outreach-progress-track" style="margin-top:8px">
            <div class="outreach-progress-fill${pct >= 100 ? ' complete' : ''}" style="width:${pct}%"></div>
          </div>
        </div>
        <div class="outreach-tile${hveThisMonth >= 1 ? ' tile-ok' : ' tile-due'}">
          <div class="skill-snapshot-label" style="margin-bottom:6px">HVE check-ins this month</div>
          <div class="outreach-tile-value">${hveThisMonth}</div>
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;${hveThisMonth >= 1 ? 'color:var(--green)' : 'color:var(--red)'}">
            ${hveThisMonth >= 1
              ? `${icon('check-circle', 13, 'var(--green)')} Done this month`
              : `${icon('alert-circle', 13, 'var(--red)')} Required — not done yet`}
          </div>
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
                    <button class="btn-icon-sm" onclick="openOutreachModal('${e.id}')" title="Edit">${icon('pencil', 14)}</button>
                    <button class="btn-icon-sm" onclick="deleteOutreachEntry('${e.id}')" title="Delete">${icon('trash-2', 14)}</button>
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
        <h1>${escHtml(currentProfile?.name || 'Designer')}</h1>
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
            const CV_COLOR_MAP = {'var(--red)':'%23D82123','#EA580C':'%23EA580C','#2563EB':'%232563EB','var(--green)':'%2310B981','#7C3AED':'%237C3AED'};
            const cvChevron = rc ? (CV_COLOR_MAP[rc.color] || '%2394A3B8') : '%2394A3B8';
            const cvChevronUrl = `url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2710%27 height=%276%27 viewBox=%270 0 10 6%27%3E%3Cpath d=%27M1 1l4 4 4-4%27 stroke=%27${cvChevron}%27 stroke-width=%271.5%27 fill=%27none%27 stroke-linecap=%27round%27/%3E%3C/svg%3E')`;
            return `
              <tr>
                <td>
                  <div class="review-skill-name" onclick="navigate('value','${cv.id}')">
                    ${escHtml(cv.label)}
                  </div>
                </td>
                <td>
                  <select class="review-level-select" style="${rc ? `color:${rc.color};background:${rc.bg};border-color:${rc.color};font-weight:600;` : ''}appearance:none;-webkit-appearance:none;background-image:${cvChevronUrl};background-repeat:no-repeat;background-position:right 7px center" onchange="setValueManagerRating('${cv.id}',this.value)">
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
              <label class="form-label">Evidence &amp; Examples</label>
              ${rte(`cv-notes-${cv.id}`, v.notes || '', `debounceSaveValueNotes('${cv.id}',this.innerHTML)`, 'Add notes, examples, or evidence for this core value…', '160px')}
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
                        <div class="resource-type-icon resource-type-${r.type}">${icon(rt.iconName, 15, rt.tagColor)}</div>
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
        ${isEditable ? `<div style="display:flex;gap:8px;align-items:center">
          ${sectionId === 'personal' ? `<button class="btn btn-ai btn-sm" onclick="openAISuggest('personal-goal')">${icon('sparkles',13)} Suggest</button>` : ''}
          <button class="btn btn-secondary btn-sm" onclick="openAddGoalModal('${sectionId}')">+ Add Goal</button>
        </div>` : ''}
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
        <button onclick="state.detailNotesEditing=true;render()" class="btn btn-secondary btn-sm">${notes ? 'Edit' : '+ Add'}</button>
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
          <button onclick="${findFn}" class="btn btn-ai btn-sm">${icon('sparkles',12)} Find with AI</button>
          <button onclick="state.designGoalAddMode = isManual ? null : 'manual'; render()" class="btn btn-secondary btn-sm">+ Add</button>
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

      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:4px">
        <h1 style="font-size:22px;font-weight:800;color:var(--text);line-height:1.3;margin:0;flex:1">${escHtml(g.goal)}</h1>
        <div style="display:flex;gap:8px;flex-shrink:0;align-items:center">
          <button class="btn btn-secondary btn-sm" onclick="openEditPersonalGoalFromDetail('${g.id}')" style="white-space:nowrap">${icon('pencil',13)} Edit</button>
          <button class="btn btn-secondary btn-sm" onclick="deletePersonalGoalFromDetail('${g.id}')" style="white-space:nowrap;color:#DC2626;border-color:#FECACA">${icon('trash-2',13)} Delete</button>
        </div>
      </div>
      ${g.timeFrame ? `<div style="font-size:13px;color:var(--text-muted);margin-bottom:20px">${escHtml(g.timeFrame)}</div>` : '<div style="margin-bottom:20px"></div>'}

      <div style="display:flex;align-items:center;gap:10px;margin-bottom:24px">
        <span style="font-size:12px;font-weight:600;color:var(--text-muted)">Status</span>
        <select class="review-level-select" style="color:${sc.color};background:${sc.bg};border-color:${sc.color};font-weight:600" onchange="saveGoalStatusFromDetail('${g.id}',this.value)">
          ${Object.entries(GOAL_STATUS_CONFIG).map(([k,v]) => `<option value="${k}" ${(g.status||'not_started')===k?'selected':''}>${v.label}</option>`).join('')}
        </select>
      </div>

      <div class="sidebar-panel" style="margin-bottom:24px">
        <div class="panel-header"><span class="panel-title">KPI / How I'll Contribute</span></div>
        <div class="panel-body"><div style="font-size:14px;color:var(--text-secondary);line-height:1.6">${escHtml(g.kpi || '—')}</div></div>
      </div>

      ${detailNotesPanel(g.notes || '', "savePersonalGoalNote(document.getElementById('detail-notes-input').value)")}

      <div class="sidebar-panel">
        <div class="panel-header">
          <span class="panel-title">Evidence</span>
          <div style="display:flex;gap:8px">
            <button onclick="findPersonalGoalEvidence('${g.id}')" class="btn btn-ai btn-sm">${icon('sparkles',12)} Find with AI</button>
            <button onclick="state.designGoalAddMode=state.designGoalAddMode==='manual'?null:'manual';render()" class="btn btn-secondary btn-sm">+ Add</button>
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
      ${state.goalModal ? renderGoalModal() : ''}
      ${state.deleteConfirm ? renderDeleteConfirmModal() : ''}
    </div>`;
}

function openEditPersonalGoalFromDetail(goalId) {
  const goals = getPersonalGoals();
  const idx = goals.findIndex(g => g.id === goalId);
  if (idx === -1) return;
  const g = goals[idx];
  state.goalModal = { sectionId: 'personal', isEdit: true, idx, goal: g.goal, kpi: g.kpi || '', timeFrame: g.timeFrame || '', status: g.status || 'not_started', notes: g.notes || '' };
  render();
  setTimeout(updateSmartPanel, 0);
}
function deletePersonalGoalFromDetail(goalId) {
  const goals = getPersonalGoals();
  const g = goals.find(g => g.id === goalId);
  state.deleteConfirm = { type: 'personal-goal', id: goalId, label: g?.goal || 'this goal' };
  render();
}
function confirmDeletePersonalGoal(goalId) {
  const goals = getPersonalGoals();
  const idx = goals.findIndex(g => g.id === goalId);
  if (idx === -1) return;
  goals.splice(idx, 1);
  savePersonalGoals(goals);
  state.deleteConfirm = null;
  state.view = 'goals';
  state.personalGoalId = null;
  render();
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
        <div style="display:flex;flex-direction:column;gap:6px;flex:1">
          ${list.map(i => `<div style="font-size:13px;color:var(--text-secondary);line-height:1.5">${escHtml(i)}</div>`).join('')}
        </div>
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
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:24px">
        <h1 style="font-size:22px;font-weight:800;color:var(--text);margin:0">${escHtml(t.theme)}</h1>
        <div style="display:flex;gap:8px;flex-shrink:0">
          <button class="btn btn-secondary btn-sm" onclick="openGrowthThemeModal('${t.id}')" style="white-space:nowrap">${icon('pencil',13)} Edit</button>
          <button class="btn btn-secondary btn-sm" onclick="deleteGrowthThemeFromDetail('${t.id}')" style="white-space:nowrap;color:#DC2626;border-color:#FECACA">${icon('trash-2',13)} Delete</button>
        </div>
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
            <button onclick="findGrowthThemeEvidence('${t.id}')" class="btn btn-ai btn-sm">${icon('sparkles',12)} Find with AI</button>
            <button onclick="state.designGoalAddMode=state.designGoalAddMode==='manual'?null:'manual';render()" class="btn btn-secondary btn-sm">+ Add</button>
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
      ${state.growthThemeModal === t.id ? renderGrowthThemeModal() : ''}
      ${state.deleteConfirm ? renderDeleteConfirmModal() : ''}
    </div>
  `;
}

function renderGrowthThemes() {
  const d = getData();
  const themes = d.growthThemes || [];

  const sectionHeader = `
    <div class="goals-section-header">
      <div>
        <div class="goals-section-title">Growth Themes</div>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="btn btn-ai btn-sm" onclick="openAISuggest('growth-theme')">${icon('sparkles',13)} Suggest</button>
        <button class="btn btn-secondary btn-sm" onclick="addGrowthTheme()">+ Add Theme</button>
      </div>
    </div>`;

  if (!themes.length) return `
    <div class="goals-section">
      ${sectionHeader}
      <div class="goals-empty">No themes added yet. <button class="goals-empty-add" onclick="addGrowthTheme()">Add one →</button></div>
    </div>
  `;

  const base = typeof d.growthThemeScore === 'number' ? d.growthThemeScore : null;

  return `
    <div class="goals-section">
      ${sectionHeader}
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px">
        ${themes.map(t => {
          const today = base !== null ? base.toFixed(1) : null;
          const best  = base !== null ? (base + 0.50).toFixed(2) : null;
          const count = (d.growthThemeEvidence?.[t.id] || []).length;
          const preview = (t.today || [])[0] || '';
          return `
            <div class="growth-theme-tile" style="position:relative" onclick="navigateToGrowthTheme('${t.id}')">
              <div style="position:absolute;top:10px;right:10px;display:flex;gap:4px;z-index:1">
                <button onclick="event.stopPropagation();openGrowthThemeModal('${t.id}')" class="tile-action-btn" title="Edit">
                  <svg width="13" height="13" viewBox="0 0 256 256" fill="currentColor"><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31l83.67-83.66,3.48,13.9-29.19,29.19a8,8,0,0,0,11.31,11.31l32-32a8,8,0,0,0,2.11-7.6l-6.06-24.19L227.31,96A16,16,0,0,0,227.31,73.37ZM48,208V163.31L136,75.31,180.69,120,92.69,208Z"/></svg>
                </button>
                <button onclick="event.stopPropagation();deleteGrowthTheme('${t.id}')" class="tile-action-btn tile-action-btn--delete" title="Delete">✕</button>
              </div>
              <div style="margin-bottom:8px;padding-right:52px">
                <div class="goals-goal-name" style="font-size:14px">${escHtml(t.theme)}</div>
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
            <button onclick="findDesignGoalEvidence('${g.id}')" class="btn btn-ai btn-sm">${icon('sparkles',12)} Find with AI</button>
            <button onclick="state.designGoalAddMode=state.designGoalAddMode==='manual'?null:'manual';render()" class="btn btn-secondary btn-sm">+ Add</button>
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
              <button onclick="findDesignGoalEvidence('${g.id}')" class="btn btn-ai btn-sm">${icon('sparkles',12)} Find with AI</button>
              <button onclick="state.designGoalAddMode = state.designGoalAddMode === 'manual' ? null : 'manual'; render()" class="btn btn-secondary btn-sm">+ Add</button>
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
          <div style="margin:20px 0 14px;font-size:16px;font-weight:700;color:var(--text)">Growth Trajectory</div>
          ${field('today',   'Today',  t.today,  3)}
          ${field('better',  'Better', t.better, 3)}
          ${field('best',    'Best',   t.best,   3)}
          <div style="margin:20px 0 14px;font-size:16px;font-weight:700;color:var(--text)">Supporting Context</div>
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

function deleteGrowthTheme(id) {
  const d = getData();
  const t = (d.growthThemes || []).find(t => t.id === id);
  state.deleteConfirm = { type: 'growth-theme', id, label: t?.theme || 'this growth theme' };
  render();
}
function confirmDeleteGrowthTheme(id) {
  const d = getData();
  d.growthThemes = (d.growthThemes || []).filter(t => t.id !== id);
  saveData(d);
  state.deleteConfirm = null;
  render();
}
function deleteGrowthThemeFromDetail(id) {
  const d = getData();
  const t = (d.growthThemes || []).find(t => t.id === id);
  state.deleteConfirm = { type: 'growth-theme-detail', id, label: t?.theme || 'this growth theme' };
  render();
}
function confirmDeleteGrowthThemeFromDetail(id) {
  const d = getData();
  d.growthThemes = (d.growthThemes || []).filter(t => t.id !== id);
  saveData(d);
  state.deleteConfirm = null;
  state.view = 'goals';
  state.growthThemeId = null;
  render();
}
function addGrowthTheme() {
  const d = getData();
  const id = 'gt_' + Date.now();
  if (!d.growthThemes) d.growthThemes = [];
  d.growthThemes.push({ id, theme: '', today: [], better: [], best: [] });
  saveData(d);
  state.growthThemeModal = id;
  render();
}
// ============ AI GOAL SUGGESTIONS ============
function openAISuggest(type) {
  state.aiSuggestModal = type;
  state.aiSuggestions = generateAISuggestions(type);
  render();
}
function closeAISuggest() { state.aiSuggestModal = null; state.aiSuggestions = []; render(); }

function generateAISuggestions(type) {
  const d = getData();
  const assessments = d.assessments || {};
  const suggestions = [];

  if (type === 'growth-theme') {
    const existingTitles = new Set((d.growthThemes || []).map(t => t.theme.toLowerCase()));

    // 1. Skill gap categories
    const catGaps = {};
    SKILLS_DATA.skills.forEach(skill => {
      const a = assessments[skill.id];
      if (!a || !a.managerLevel || a.managerLevel === 'Unknown') return;
      const exp = getExpectedLevelForSkill(skill.id);
      if (exp && getLevelOrder(a.managerLevel) < getLevelOrder(exp)) {
        if (!catGaps[skill.category]) catGaps[skill.category] = [];
        catGaps[skill.category].push(skill.name);
      }
    });
    Object.entries(catGaps).sort((a, b) => b[1].length - a[1].length).slice(0, 2).forEach(([cat, names]) => {
      const title = `Elevate My ${cat}`;
      if (!existingTitles.has(title.toLowerCase()))
        suggestions.push({
          title, tag: 'Skill Gap', tagColor: '#DC2626', tagBg: '#FEF2F2',
          rationale: `${names.length} skill${names.length > 1 ? 's' : ''} below target — including ${names.slice(0,2).join(' and ')}`,
          today:  [`Applying ${cat} at a basic level, sometimes needing guidance on complex problems`],
          better: [`Consistently delivering high-quality ${cat} work independently across varied contexts`],
          best:   [`Setting the standard for ${cat} across the team; elevating others' thinking and practice`],
        });
    });

    // 2. Evidence text patterns
    const evidenceTexts = Object.values(assessments).map(a => a.evidence || '').filter(t => t.length > 20);
    const themeHints = [
      { rx: /stakeholder|partner|collaborat|align/i,   title: 'Deepen Cross-Functional Influence', rationale: 'Your assessment notes mention collaboration and stakeholder work',
        today: ['Building relationships within my immediate team and navigating basic stakeholder needs'], better: ['Proactively aligning with PMs, engineers, and leadership to shape product direction'], best: ['Trusted design voice across the org; influencing strategy and multiplying team impact'] },
      { rx: /system|scale|pattern|component|library/i, title: 'Grow Design Systems Thinking', rationale: 'Notes across assessments reference systems-level design work',
        today: ['Using existing design system components; contributing small isolated patterns'], better: ['Designing reusable systems and documenting patterns adopted across multiple teams'], best: ["Architecting scalable design systems that define the product's visual and interaction language"] },
      { rx: /research|user.*insight|test|interview/i,  title: 'Build a Research-Led Practice', rationale: 'Multiple assessments reference user research and insights',
        today: ['Conducting basic usability tests and gathering user feedback when explicitly planned'], better: ['Proactively integrating research into every design process; synthesizing insights into clear direction'], best: ['Building a culture of continuous discovery; coaching others in research methods and mindset'] },
      { rx: /mentor|coach|lead.*team|present|facilitat/i, title: 'Develop Design Leadership', rationale: 'Evidence shows emerging leadership and mentoring activity',
        today: ['Occasionally mentoring peers informally; presenting work clearly in team settings'], better: ['Actively developing others, facilitating team rituals, and influencing design culture'], best: ["Leading the design org's growth; shaping team structure, culture, and craft standards"] },
      { rx: /data|metric|measur|analytic|outcome/i,    title: 'Strengthen Data-Informed Design', rationale: 'Notes suggest growing capability with metrics and outcomes',
        today: ['Referencing data when available; learning to connect design decisions to measurable outcomes'], better: ['Defining success metrics for every project and using data to validate and iterate on designs'], best: ['Championing data-informed design across the org; teaching others to connect craft to outcomes'] },
    ];
    themeHints.forEach(({ rx, title, rationale, today, better, best }) => {
      if (suggestions.length < 5 && !existingTitles.has(title.toLowerCase()) && evidenceTexts.some(t => rx.test(t)))
        suggestions.push({ title, rationale, today, better, best, tag: 'From Your Notes', tagColor: '#0369A1', tagBg: '#F0F9FF' });
    });

    // 3. Generic high-value fallbacks
    const generics = [
      { title: 'Sharpen Strategic Communication', rationale: 'Frame and present design decisions persuasively to senior stakeholders',
        today: ['Presenting design rationale clearly; building comfort with executive audiences'], better: ['Framing design decisions in business terms; confidently influencing senior stakeholders'], best: ['Shaping narrative around design value at the org level; a trusted voice in strategic planning'] },
      { title: 'Scale Impact Across the Org', rationale: "Move from individual delivery toward multiplying your team's effectiveness",
        today: ['Delivering strong individual work; starting to document and share learnings with the team'], better: ['Multiplying team effectiveness through mentorship, shared systems, and process improvements'], best: ["Driving org-wide design quality and culture; others' success is a direct result of your influence"] },
      { title: 'Master End-to-End Product Thinking', rationale: 'Develop a holistic view from discovery through delivery and measurement',
        today: ['Designing within a defined scope; growing awareness of upstream and downstream context'], better: ['Owning the full design arc from discovery through delivery; connecting decisions to outcomes'], best: ['Setting the product vision across multiple domains; a strategic partner to PMs and leadership'] },
      { title: 'Build a Feedback-Rich Design Culture', rationale: 'Create regular critique habits that raise the quality bar for the whole team',
        today: ['Participating in critiques; sharing feedback in one-on-ones and informal settings'], better: ['Facilitating structured design reviews; building team habits around quality and feedback'], best: ['Creating a self-sustaining culture of craft excellence and continuous improvement across the org'] },
      { title: 'Advance Facilitation & Workshop Skills', rationale: 'Lead alignment sessions, design sprints, and cross-team workshops with confidence',
        today: ['Leading small team meetings and basic alignment sessions with some prep'], better: ['Facilitating complex cross-functional workshops and design sprints with clear outcomes'], best: ['Designing and leading high-stakes org-wide alignment sessions; a go-to facilitator for hard problems'] },
    ];
    generics.forEach(g => {
      if (suggestions.length < 6 && !existingTitles.has(g.title.toLowerCase()))
        suggestions.push({ ...g, tag: 'High Impact', tagColor: '#7C3AED', tagBg: '#F5F3FF' });
    });

  } else if (type === 'personal-goal') {
    // 1. From growth themes
    (d.growthThemes || []).slice(0, 2).forEach(t => {
      if (!t.theme) return;
      const better = (t.better || [])[0];
      suggestions.push({
        goal: `Demonstrate measurable progress on "${t.theme}"`,
        kpi: better ? better : 'Ship at least one concrete project that directly reflects this theme',
        timeFrame: 'Q2 2026',
        rationale: `Converts your growth theme into an actionable goal`,
        tag: 'Growth Theme', tagColor: '#7C3AED', tagBg: '#F5F3FF'
      });
    });

    // 2. Top skill gaps
    const gapSkills = [];
    SKILLS_DATA.skills.forEach(skill => {
      const a = assessments[skill.id];
      if (!a || !a.managerLevel || a.managerLevel === 'Unknown') return;
      const exp = getExpectedLevelForSkill(skill.id);
      if (exp && getLevelOrder(a.managerLevel) < getLevelOrder(exp)) gapSkills.push({ name: skill.name, exp });
    });
    gapSkills.slice(0, 2).forEach(({ name, exp }) => {
      suggestions.push({
        goal: `Reach ${exp} level in ${name}`,
        kpi: `Deliver 2+ projects demonstrating ${exp}-level capability and document the evidence`,
        timeFrame: 'H1 2026',
        rationale: 'This skill is currently below your target level',
        tag: 'Skill Gap', tagColor: '#DC2626', tagBg: '#FEF2F2'
      });
    });

    // 3. Generic growth goals
    const existingGoals = new Set((d.personalGoals || []).map(g => g.goal.toLowerCase().slice(0, 30)));
    const generics = [
      { goal: 'Lead a design sprint or workshop end-to-end', kpi: 'Facilitate one structured session with cross-functional stakeholders and synthesize outcomes into design direction', timeFrame: 'Q2 2026', rationale: 'Builds facilitation, alignment, and leadership skills simultaneously', tag: 'Leadership', tagColor: '#0369A1', tagBg: '#F0F9FF' },
      { goal: 'Establish a regular habit of design documentation', kpi: 'Publish at least 4 project write-ups or design decision docs that are shared with the broader team', timeFrame: 'Q2 2026', rationale: 'Increases visibility of your work and builds a portfolio of decisions', tag: 'Craft', tagColor: '#059669', tagBg: '#F0FDF4' },
      { goal: 'Contribute a reusable pattern to the design system', kpi: 'Ship at least one documented, reviewed, and reusable component or pattern to the shared design system', timeFrame: 'Q3 2026', rationale: 'Scales your design impact beyond individual project work', tag: 'Impact', tagColor: '#D97706', tagBg: '#FFFBEB' },
      { goal: 'Develop a mentoring relationship with a junior designer', kpi: 'Meet bi-weekly and provide structured feedback on at least 3 of their projects over the next quarter', timeFrame: 'H1 2026', rationale: 'Deepens your craft through teaching and develops your leadership', tag: 'Leadership', tagColor: '#0369A1', tagBg: '#F0F9FF' },
    ];
    generics.forEach(g => {
      if (suggestions.length < 6 && !existingGoals.has(g.goal.toLowerCase().slice(0, 30)))
        suggestions.push(g);
    });
  }

  return suggestions.slice(0, 6);
}

function applyGrowthThemeSuggestion(idx) {
  const s = state.aiSuggestions[idx];
  if (!s) return;
  closeAISuggest();
  const d = getData();
  const id = 'gt_' + Date.now();
  if (!d.growthThemes) d.growthThemes = [];
  d.growthThemes.push({ id, theme: s.title, today: s.today || [], better: s.better || [], best: s.best || [] });
  if (s.rationale) {
    if (!d.growthThemeNotes) d.growthThemeNotes = {};
    d.growthThemeNotes[id] = s.rationale;
  }
  saveData(d);
  state.growthThemeModal = id;
  render();
}

function applyPersonalGoalSuggestion(idx) {
  const s = state.aiSuggestions[idx];
  if (!s) return;
  closeAISuggest();
  state.goalModal = { sectionId: 'personal', isEdit: false, idx: null, goal: s.goal, kpi: s.kpi, timeFrame: s.timeFrame, status: 'not_started', notes: s.rationale || '' };
  render();
  setTimeout(updateSmartPanel, 0);
}

function renderDeleteConfirmModal() {
  const m = state.deleteConfirm;
  if (!m) return '';
  const isTheme = m.type === 'growth-theme' || m.type === 'growth-theme-detail';
  const itemName = isTheme ? 'growth theme' : 'goal';
  const confirmFn = m.type === 'growth-theme'        ? `confirmDeleteGrowthTheme('${m.id}')`
                  : m.type === 'growth-theme-detail'  ? `confirmDeleteGrowthThemeFromDetail('${m.id}')`
                  : `confirmDeletePersonalGoal('${m.id}')`;
  return `
    <div class="modal-overlay" onclick="if(event.target===this){state.deleteConfirm=null;render()}" style="z-index:1200">
      <div class="modal-box" onclick="event.stopPropagation()" style="max-width:420px">
        <div class="insight-modal-header" style="border-bottom:1px solid var(--border)">
          <div style="flex:1">
            <div class="insight-modal-title" style="display:flex;align-items:center;gap:8px">
              <span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:8px;background:#FEF2F2;color:#DC2626">${icon('trash-2',15,'#DC2626')}</span>
              Delete ${itemName}
            </div>
          </div>
          <button class="insight-modal-close" onclick="state.deleteConfirm=null;render()" style="align-self:flex-start">✕</button>
        </div>
        <div style="padding:20px 24px">
          <p style="font-size:14px;color:var(--text-secondary);line-height:1.6;margin:0 0 4px">Are you sure you want to delete</p>
          <p style="font-size:14px;font-weight:700;color:var(--text);line-height:1.5;margin:0 0 20px">"${escHtml(m.label)}"?</p>
          <p style="font-size:12.5px;color:var(--text-muted);margin:0 0 24px">This can't be undone. All associated evidence and notes will also be removed.</p>
          <div style="display:flex;gap:10px;justify-content:flex-end">
            <button class="btn btn-secondary btn-sm" onclick="state.deleteConfirm=null;render()">Cancel</button>
            <button class="btn btn-sm" style="background:#DC2626;color:#fff;border-color:#DC2626;font-weight:600" onclick="${confirmFn}">${icon('trash-2',13,'#fff')} Delete</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAISuggestModal() {
  const type = state.aiSuggestModal;
  const suggestions = state.aiSuggestions;
  const isTheme = type === 'growth-theme';
  const title = isTheme ? 'Suggested Growth Themes' : 'Suggested Personal Goals';
  const sub = 'Based on your skill assessments, notes, and feedback across the app.';

  return `
    <div class="modal-overlay" onclick="if(event.target===this)closeAISuggest()" style="z-index:1100">
      <div class="modal-box" onclick="event.stopPropagation()" style="max-width:680px;max-height:90vh;overflow-y:auto">
        <div class="insight-modal-header" style="border-bottom:1px solid var(--border)">
          <div style="flex:1">
            <div class="insight-modal-title" style="display:flex;align-items:center;gap:8px">
              <span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:8px;background:#F5F3FF;color:#7C3AED">${icon('sparkles',15,'#7C3AED')}</span>
              ${escHtml(title)}
            </div>
            <div style="font-size:12px;color:var(--text-muted);margin-top:4px">${sub}</div>
          </div>
          <button class="insight-modal-close" onclick="closeAISuggest()" style="align-self:flex-start">✕</button>
        </div>
        <div style="padding:20px 24px">
          ${suggestions.length === 0 ? `<div style="text-align:center;padding:32px;color:var(--text-muted);font-size:14px">No suggestions available yet — add more skill assessments and notes to improve results.</div>` : `
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px">
            ${suggestions.map((s, i) => `
              <div class="ai-suggestion-card" onclick="${isTheme ? `applyGrowthThemeSuggestion(${i})` : `applyPersonalGoalSuggestion(${i})`}">
                <span class="ai-suggest-tag" style="color:${s.tagColor};background:${s.tagBg}">${escHtml(s.tag)}</span>
                <div class="ai-suggest-title">${escHtml(isTheme ? s.title : s.goal)}</div>
                ${!isTheme && s.kpi ? `<div class="ai-suggest-rationale" style="font-size:11px;color:var(--text-secondary);margin-top:2px">KPI: ${escHtml(s.kpi)}</div>` : ''}
                <div class="ai-suggest-rationale"><span style="font-weight:700;color:var(--text-secondary)">Notes: </span>${escHtml(s.rationale)}</div>
                <div style="margin-top:8px;font-size:12px;font-weight:600;color:var(--primary)">Use this →</div>
              </div>`).join('')}
          </div>`}
        </div>
      </div>
    </div>
  `;
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
  let hasError = false;
  ['gtm-today', 'gtm-better', 'gtm-best'].forEach(elId => {
    const el = document.getElementById(elId);
    if (!el) return;
    if (!el.value.trim()) { el.style.borderColor = 'var(--red)'; hasError = true; }
    else el.style.borderColor = '';
  });
  if (hasError) return;
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
        <h1>${escHtml(currentProfile?.name || 'Designer')}</h1>
      </div>
    </div>

    ${renderGrowthThemes()}
    ${renderGoalSection('personal', 'Personal Goals', '', personalGoals, true)}
    ${renderDesignTeamGoals()}

    ${state.growthThemeModal ? renderGrowthThemeModal() : ''}
    ${state.growthThemeLevelModal ? renderGrowthThemeLevelModal() : ''}
    ${state.goalModal ? renderGoalModal() : ''}
    ${state.goalNotesModal ? renderGoalNotesModal() : ''}
    ${state.aiSuggestModal ? renderAISuggestModal() : ''}
    ${state.deleteConfirm ? renderDeleteConfirmModal() : ''}
  `;
}

function saveGrowthPlanField(field, value) {
  const d = getData();
  if (!d.growthPlan) d.growthPlan = {};
  d.growthPlan[field] = value;
  saveData(d);
}

function renderGrowthPlan() {
  const d = getData();
  const gp = d.growthPlan || {};

  const TA_BASE = 'width:100%;border:none;outline:none;resize:none;font-size:13px;color:var(--text);line-height:1.6;font-family:inherit;background:transparent;';

  const sectionNum = (n) =>
    `<div style="font-size:13px;font-weight:700;color:var(--primary);margin-bottom:6px">0${n}</div>`;
  const sectionTitle = (t) =>
    `<div style="font-size:20px;font-weight:800;color:var(--text);margin-bottom:8px">${t}</div>`;
  const sectionDesc = (t) =>
    `<div style="font-size:14px;color:var(--text-muted);font-style:italic;line-height:1.65;margin-bottom:22px">${t}</div>`;

  const sweetCard = (field, label, placeholder, bg, border, labelColor) => `
    <div style="background:${bg};border:1.5px solid ${border};border-radius:10px;padding:16px 18px">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:${labelColor};margin-bottom:10px">${label}</div>
      ${rte(`gp-${field}`, gp[field] || '', `saveGrowthPlanField('${field}',this.innerHTML)`, placeholder, '86px')}
    </div>`;

  const headlineRow = (n, field, placeholder) => `
    <div style="display:flex;align-items:center;gap:14px;padding:14px 0;${n < 3 ? 'border-bottom:1px solid var(--border)' : ''}">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--primary-light);border:1.5px solid rgba(99,102,241,.3);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:var(--primary);flex-shrink:0">${n}</div>
      <input oninput="saveGrowthPlanField('${field}',this.value)" placeholder="${placeholder}" value="${escHtml(gp[field] || '')}"
        style="flex:1;border:none;outline:none;font-size:13px;color:var(--text);background:transparent;font-family:inherit;padding:2px 0" />
    </div>`;

  const supportCell = (field, placeholder) =>
    rte(`gp-${field}`, gp[field] || '', `saveGrowthPlanField('${field}',this.innerHTML)`, placeholder, '74px');

  return `
    <div style="max-width:800px">

      <!-- Page header -->
      <div style="margin-bottom:32px">
        <h1 style="font-size:24px;font-weight:800;color:var(--text);margin:0 0 8px">Growth plan</h1>
        <div style="font-size:13.5px;color:var(--text-muted);line-height:1.6;max-width:560px">Write honestly, update it when things shift, and bring this to your next 1:1.</div>
      </div>

      <!-- 01 Your sweet spot -->
      <div style="margin-bottom:40px">
        ${sectionNum(1)}
        ${sectionTitle('Your sweet spot')}
        ${sectionDesc("There are things you're good at, things you love, and things you want to drop. Where do they overlap? That overlap is where you do your best work.")}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
          ${sweetCard('loveDoing',   'What I love doing',          "The work you'd do even if no one asked…",    '#EFF6FF', '#BFDBFE', '#3B82F6')}
          ${sweetCard('goodAt',      "What I'm good at",           'Where you do your best work effortlessly…',  '#F0FDF4', '#BBF7D0', '#22C55E')}
        </div>
        ${sweetCard('leaveBehind', 'What I want to leave behind', 'Work you want to stop or do less of…',        '#FFF7ED', '#FED7AA', '#F97316')}
      </div>

      <!-- 02 Three career headlines -->
      <div style="margin-bottom:40px">
        ${sectionNum(2)}
        ${sectionTitle('Three career headlines')}
        ${sectionDesc("Imagine a colleague writing about your work one year from now. What would their three headlines be? Write them as if they already happened — specific, ambitious, real.")}
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:0 18px">
          ${headlineRow(1, 'headline1', 'e.g. Shipped the feature that reduced support tickets by 30%…')}
          ${headlineRow(2, 'headline2', 'e.g. Became the go-to designer for end-to-end hospitality workflows…')}
          ${headlineRow(3, 'headline3', "What's the third thing you want to be known for this year?")}
        </div>
      </div>

      <!-- 03 Strengths and growth areas -->
      <div style="margin-bottom:40px">
        ${sectionNum(3)}
        ${sectionTitle('Defining your strengths and growth areas')}
        ${sectionDesc("Think about the skills you need to reach those headlines. Which are genuine strengths? Which need investment? Which just need to hold steady? Be specific — this is for you and your manager, not for scoring.")}
        ${rte('gp-strengthsGrowth', gp.strengthsGrowth || '', `saveGrowthPlanField('strengthsGrowth',this.innerHTML)`, 'Where are you strong? Where do you want to grow? What do you just need to stabilise?', '120px')}
      </div>

      <!-- 04 What I need to get there -->
      <div style="margin-bottom:40px">
        ${sectionNum(4)}
        ${sectionTitle('What I need to get there')}
        ${sectionDesc("What do you need from yourself, and from your manager — now, soon, and further out? Be honest about where you need support.")}
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;overflow:hidden">
          <!-- Column headers -->
          <div style="display:grid;grid-template-columns:90px 1fr 1fr;border-bottom:1px solid var(--border);padding:10px 16px 10px 18px;gap:12px">
            <div></div>
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);text-align:center">From Myself</div>
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);text-align:center">From My Manager</div>
          </div>
          <!-- Now -->
          <div style="display:grid;grid-template-columns:90px 1fr 1fr;border-bottom:1px solid var(--border);padding:14px 16px 14px 18px;gap:12px;align-items:start">
            <div><div style="font-size:13px;font-weight:700;color:var(--text)">Now</div><div style="font-size:11px;color:var(--text-muted)">0–6 mo</div></div>
            ${supportCell('supportNow_self',    'What can you do independently right now?')}
            ${supportCell('supportNow_manager', 'What do you need from your manager now?')}
          </div>
          <!-- Near -->
          <div style="display:grid;grid-template-columns:90px 1fr 1fr;border-bottom:1px solid var(--border);padding:14px 16px 14px 18px;gap:12px;align-items:start">
            <div><div style="font-size:13px;font-weight:700;color:var(--text)">Near</div><div style="font-size:11px;color:var(--text-muted)">6–12 mo</div></div>
            ${supportCell('supportNear_self',    'What will you take on in the next year?')}
            ${supportCell('supportNear_manager', 'What support do you need over the next year?')}
          </div>
          <!-- Far -->
          <div style="display:grid;grid-template-columns:90px 1fr 1fr;padding:14px 16px 14px 18px;gap:12px;align-items:start">
            <div><div style="font-size:13px;font-weight:700;color:var(--text)">Far</div><div style="font-size:11px;color:var(--text-muted)">1 yr+</div></div>
            ${supportCell('supportFar_self',    'Longer-term ambitions…')}
            ${supportCell('supportFar_manager', 'What will you need further out?')}
          </div>
        </div>
      </div>

      <!-- 05 Your 1:1 relationship -->
      <div style="margin-bottom:48px">
        ${sectionNum(5)}
        ${sectionTitle('Your 1:1 relationship')}
        ${sectionDesc("Great designers don't happen by accident. Well-run 1:1s are one of the highest-leverage tools a PD team has. Use this space to be intentional about yours.")}
        <div style="background:#F8FAFC;border:1px solid var(--border);border-radius:10px;padding:16px 20px;margin-bottom:14px">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin-bottom:12px">Good 1:1s answer questions like</div>
          <ul style="margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:8px">
            ${[
              'How is my work landing?',
              'What should I do more of / less of?',
              'Where am I growing? Where am I stuck?',
              'What skills should I be developing next?',
              "What's blocking me that you can help remove?"
            ].map(q => `
              <li style="display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--text-secondary);line-height:1.5">
                <span style="width:5px;height:5px;border-radius:50%;background:var(--text-muted);flex-shrink:0;margin-top:6px"></span>
                ${escHtml(q)}
              </li>`).join('')}
          </ul>
        </div>
        ${rte('gp-oneOnOne', gp.oneOnOne || '', `saveGrowthPlanField('oneOnOne',this.innerHTML)`, "What does a good 1:1 look like for you? What do you need from your manager that you're not currently getting? What cadence and channel works best?", '100px')}
      </div>

    </div>
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
  let hasError = false;
  [['gm-goal', goal], ['gm-kpi', kpi], ['gm-timeframe', tf]].forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!val) { el.style.borderColor = 'var(--red)'; hasError = true; }
    else el.style.borderColor = '';
  });
  if (hasError) return;
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
  } else if (view === 'growth-plan') {
    state.view = 'growth-plan';
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
    case 'growth-plan': return 'Growth Plan';
    case 'personal-goal': return 'Personal Goals';
    case 'design-goal':   return '2026 Design Team Goals';
    case 'growth-theme':  return 'Growth Themes';
    case 'eoy': return 'Performance Review';
    case 'outreach': return 'Merchant Outreach';
    default: return 'Design Growth Hub';
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
        <img src="brand-logo.svg" alt="SpotOn" style="height:22px;width:auto;display:block;margin-bottom:6px" />
        <div style="font-size:14px;font-weight:600;color:#93C5FD;letter-spacing:.04em">Design Growth Hub</div>
      </div>

      <div class="sidebar-profile">
        <div class="profile-label">Current Profile</div>
        <div class="profile-selector ${state.profileDropdownOpen ? 'open' : ''}" onclick="toggleProfileDropdown()">
            ${avatarHtml(currentProfile, 36, 13)}
            <div style="flex:1;min-width:0">
              <div class="profile-name">${escHtml(currentProfile?.name || 'Select Profile')}</div>
              ${currentProfile?.role ? `<div style="font-size:10px;color:#93C5FD;opacity:.9;margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escHtml(shortRole(currentProfile.role))}</div>` : ''}
            </div>
            <span class="chevron" style="transition:transform .2s;flex-shrink:0;${state.profileDropdownOpen ? 'transform:rotate(180deg)' : ''}">▼</span>
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
          <span class="nav-icon">${icon('layout-dashboard', 18)}</span>
          <span>Dashboard</span>
        </button>

        <button class="nav-item ${state.view === 'review' || state.view === 'skill' ? 'active' : ''}" onclick="navigate('review')">
          <span class="nav-icon">${icon('layers', 18)}</span>
          <span>Skills</span>
        </button>

        <button class="nav-item ${['goals','personal-goal','design-goal','growth-theme'].includes(state.view) ? 'active' : ''}" onclick="navigate('goals')">
          <span class="nav-icon">${icon('target', 18)}</span>
          <span>Goals</span>
        </button>

        <button class="nav-item ${state.view === 'growth-plan' ? 'active' : ''}" onclick="navigate('growth-plan')">
          <span class="nav-icon">${icon('trending-up', 18)}</span>
          <span>Growth Plan</span>
        </button>

        <button class="nav-item ${state.view === 'values' || state.view === 'value' ? 'active' : ''}" onclick="navigate('values')">
          <span class="nav-icon">${icon('heart', 18)}</span>
          <span>Core Values</span>
        </button>

        <button class="nav-item ${state.view === 'eoy' ? 'active' : ''}" onclick="navigate('eoy')">
          <span class="nav-icon">${icon('bar-chart-2', 18)}</span>
          <span>Performance Review</span>
        </button>

        <button class="nav-item ${state.view === 'outreach' ? 'active' : ''}" onclick="navigate('outreach')">
          <span class="nav-icon">${icon('store', 18)}</span>
          <span>Merchant Outreach</span>
        </button>

        <button class="nav-item ${state.view === 'resources' ? 'active' : ''}" onclick="navigate('resources')" style="margin-top:12px">
          <span class="nav-icon">${icon('book-open', 18)}</span>
          <span>Resources</span>
        </button>
      </nav>

      <div class="sidebar-footer">
        <button class="nav-item" onclick="manageTeam()" style="width:100%">
            <span class="nav-icon">${icon('users', 18)}</span>
            <span style="font-size:12.5px">Manage Team</span>
          </button>
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
        ${state.view === 'growth-plan' ? renderGrowthPlan() : ''}
        ${state.view === 'growth-theme' ? renderGrowthThemeDetail() : ''}
        ${state.view === 'personal-goal' ? renderPersonalGoalDetail() : ''}
        ${state.view === 'design-goal' ? renderDesignGoalDetail() : ''}
      </div>
    </div>

    ${renderNoteInputModal()}
    ${renderOutreachModal()}
    ${renderImportModal()}
    ${state.pinModal ? renderPinModal() : ''}
    ${state.clearConfirm ? renderClearConfirmModal() : ''}

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

// ============ IMPORT DOCUMENTS MODAL ============

function openImportModal(type) {
  state.importModal = true;
  state.importStep = 1;
  state.importTypes = type ? [type] : [];
  state.importFiles = {};
  state.importPreview = null;
  window._importFiles = {};
  render();
}

function closeImportModal() {
  state.importModal = false;
  window._importFiles = {};
  render();
}

function toggleImportType(type) {
  const i = state.importTypes.indexOf(type);
  if (i === -1) state.importTypes.push(type);
  else if (state.importTypes.length > 1) state.importTypes.splice(i, 1);
  render();
}

function importGoToUpload() {
  if (state.importTypes.length === 0) return;
  state.importStep = 2;
  render();
}

function handleImportDrop(event, type) {
  event.preventDefault();
  event.currentTarget.classList.remove('import-dz-over');
  const file = event.dataTransfer.files[0];
  if (!file) return;
  if (!window._importFiles) window._importFiles = {};
  window._importFiles[type] = file;
  state.importFiles = { ...state.importFiles, [type]: { name: file.name, size: file.size } };
  render();
}

function handleImportFileSelect(event, type) {
  const file = event.target.files[0];
  if (!file) return;
  if (!window._importFiles) window._importFiles = {};
  window._importFiles[type] = file;
  state.importFiles = { ...state.importFiles, [type]: { name: file.name, size: file.size } };
  render();
}

function removeImportFile(type) {
  const files = { ...state.importFiles };
  delete files[type];
  state.importFiles = files;
  if (window._importFiles) delete window._importFiles[type];
  render();
}

function canAdvanceToProcess() {
  return Object.keys(state.importFiles).length > 0;
}

async function startImportProcessing() {
  if (!canAdvanceToProcess()) return;
  state.importTypes = Object.keys(state.importFiles);
  console.log('[DCH] startImportProcessing, importTypes:', state.importTypes, 'importFiles:', Object.keys(state.importFiles));
  state.importStep = 2;
  render();
  // Parse skill matrix file if present
  let parsedMatrix = null;
  const smFile = window._importFiles?.['skill-matrix'];
  if (smFile) parsedMatrix = await parseSkillMatrixFile(smFile);
  // Parse performance review PDF if present
  let parsedReview = null;
  const prFile = window._importFiles?.['perf-review'];
  if (prFile) parsedReview = await parsePerfReviewPDF(prFile);
  await new Promise(r => setTimeout(r, 2800));
  state.importPreview = generateImportPreview(parsedMatrix, parsedReview);
  state.importStep = 3;
  render();
}

function seededRnd(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function normalizeLevel(val) {
  if (val === null || val === undefined || val === '') return 'Unknown';
  const s = String(val).trim().toLowerCase();
  if (!s) return 'Unknown';
  if (s === '0' || s === 'unknown' || s === 'n/a' || s === '-' || s === 'none') return 'Unknown';
  if (s === '1' || s === 'learner' || s.includes('learn') || s === 'l1') return 'Learner';
  if (s === '2' || s === 'contributor' || s.includes('contrib') || s === 'l2' || s.includes('develop')) return 'Contributor';
  if (s === '3' || s === 'independent' || s.includes('indep') || s === 'l3' || s.includes('profic') || s.includes('intermedi')) return 'Independent';
  if (s === '4' || s === 'expert' || s.includes('expert') || s === 'l4' || s.includes('advanc') || s.includes('senior')) return 'Expert';
  return 'Unknown'; // Non-empty but unrecognized → Unknown
}

function matchSkillByName(name) {
  if (!name) return null;
  const n = String(name).toLowerCase().trim();
  if (!n || n.length < 4) return null;
  // Exact match
  const exact = SKILLS_DATA.skills.find(s => s.name.toLowerCase() === n);
  if (exact) return exact;
  // Substring match
  const sub1 = SKILLS_DATA.skills.find(s => s.name.toLowerCase().includes(n));
  if (sub1) return sub1;
  const sub2 = SKILLS_DATA.skills.find(s => n.includes(s.name.toLowerCase()));
  if (sub2) return sub2;
  // Word-overlap fallback with prefix matching (handles "Interprets" vs "interpret", "Executes" vs "execute" etc.)
  const STOP = new Set(['and','the','for','with','from','that','this','into','when','their','have','been','will','able','they','our','its','can','how']);
  const sig = w => w.length > 3 && !STOP.has(w);
  // Two words match if equal OR share a common 5-char prefix (handles conjugation/pluralization)
  const wordMatch = (a, b) => a === b || (a.length >= 5 && b.length >= 5 && a.slice(0,5) === b.slice(0,5));
  const nWords = n.split(/\W+/).filter(sig);
  if (nWords.length < 2) return null;
  let bestMatch = null, bestScore = 0;
  for (const s of SKILLS_DATA.skills) {
    const sWords = s.name.toLowerCase().split(/\W+/).filter(sig);
    const overlap = sWords.filter(sw => nWords.some(nw => wordMatch(nw, sw))).length;
    const score = overlap / Math.max(sWords.length, nWords.length);
    if (score >= 0.55 && score > bestScore) { bestScore = score; bestMatch = s; }
  }
  return bestMatch;
}

async function parseSkillMatrixFile(file) {
  return new Promise((resolve) => {
    console.log('[parseSkillMatrix] called, XLSX defined:', typeof XLSX !== 'undefined', 'file:', file?.name);
    if (typeof XLSX === 'undefined') { console.warn('[parseSkillMatrix] XLSX not loaded!'); resolve(null); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const wb = XLSX.read(data, { type: 'array' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

        // Find header row — look for any column matching "manager" + "assess"
        let headerRow = -1, mgrCol = -1, roleCol = -1, skillCol = 0;
        for (let r = 0; r < Math.min(rows.length, 20); r++) {
          for (let c = 0; c < rows[r].length; c++) {
            const cell = String(rows[r][c]).trim();
            if (/(manager|mgr)[\s']*s?[\s]*assess/i.test(cell)) {
              headerRow = r; mgrCol = c; break;
            }
          }
          if (headerRow !== -1) break;
        }

        // If still not found, try a looser pass (any cell containing both "manager" and "assess")
        if (headerRow === -1) {
          for (let r = 0; r < Math.min(rows.length, 20); r++) {
            for (let c = 0; c < rows[r].length; c++) {
              const cell = String(rows[r][c]).toLowerCase();
              if (cell.includes('manager') && cell.includes('assess')) {
                headerRow = r; mgrCol = c; break;
              }
            }
            if (headerRow !== -1) break;
          }
        }

        if (headerRow === -1 || mgrCol === -1) { resolve(null); return; }

        const headerCells = rows[headerRow].map(c => String(c).trim().toLowerCase());

        // Find "Role" / "Expected" column
        for (let c = 0; c < headerCells.length; c++) {
          if (/^role$/.test(headerCells[c]) || /expected/i.test(headerCells[c])) {
            roleCol = c; break;
          }
        }
        if (roleCol === -1) roleCol = 2; // fall back to column C

        // Detect skill name column: exact header match only (avoids "EXCEEDING COMPETENCY" matching "competency")
        skillCol = -1;
        for (let c = 0; c < headerCells.length; c++) {
          if (/^(skills?|competenc(y|ies)|abilit(y|ies)|name)$/i.test(headerCells[c])) {
            skillCol = c; break;
          }
        }

        // If no header match, find column with most long text strings (skill names are always >15 chars)
        if (skillCol === -1) {
          let bestCol = 0, bestCount = 0;
          for (let c = 0; c < Math.min(headerCells.length, 6); c++) {
            if (c === mgrCol || c === roleCol) continue;
            let count = 0;
            for (let r = headerRow + 1; r < rows.length; r++) {
              if (String(rows[r][c] || '').trim().length > 15) count++;
            }
            console.log('[parseSkillMatrix] column', c, 'long-text count:', count);
            if (count > bestCount) { bestCount = count; bestCol = c; }
          }
          skillCol = bestCol;
        }

        console.log('[parseSkillMatrix] headerRow:', headerRow, 'mgrCol:', mgrCol, 'roleCol:', roleCol, 'skillCol:', skillCol);
        console.log('[parseSkillMatrix] Header cells:', rows[headerRow]);
        // Log first 8 data rows to see actual CSV structure
        console.log('[parseSkillMatrix] First 8 data rows (skillCol=' + skillCol + '):');
        for (let r = headerRow + 1; r < Math.min(rows.length, headerRow + 9); r++) {
          const row = rows[r];
          const nameVal = row[skillCol];
          const matched = matchSkillByName(nameVal);
          console.log(`  row ${r}: col0=${JSON.stringify(row[0])} col1=${JSON.stringify(row[1])} skillCol[${skillCol}]=${JSON.stringify(nameVal)} → match:${matched ? matched.id : 'null'} | mgrVal=${JSON.stringify(row[mgrCol])}`);
        }

        const skills = {}, expectedLevels = {};
        for (let r = headerRow + 1; r < rows.length; r++) {
          const row = rows[r];
          const skillName = row[skillCol];
          if (!skillName || String(skillName).trim() === '') continue;
          const skill = matchSkillByName(skillName);
          if (!skill) continue;
          const rawMgr = row[mgrCol];
          const selfLvl = normalizeLevel(rawMgr);
          const expLvl  = normalizeLevel(row[roleCol]);
          if (selfLvl === 'Unknown' || selfLvl === null) {
            console.log(`[parseSkillMatrix] row ${r} skill="${skillName}" rawMgr=${JSON.stringify(rawMgr)} → selfLvl=${selfLvl}`);
          }
          skills[skill.id] = { selfLevel: selfLvl, managerLevel: selfLvl, notes: '', evidence: '', lastUpdated: new Date().toISOString() };
          if (expLvl && expLvl !== 'Unknown') expectedLevels[skill.id] = expLvl;
        }
        console.log('[parseSkillMatrix] Total skills parsed:', Object.keys(skills).length);
        resolve(Object.keys(skills).length > 0 ? { skills, expectedLevels } : null);
      } catch(err) { console.error('[parseSkillMatrix]', err); resolve(null); }
    };
    reader.onerror = () => resolve(null);
    reader.readAsArrayBuffer(file);
  });
}

// ============ PERF REVIEW PDF PARSER ============
const PERF_RATING_KEYWORDS = [
  'truly outstanding',
  'exceeds expectations',
  'meets expectations',
  'partially meets expectations',
  'partially meets',
  'does not meet expectations',
  'does not meet',
];
const PERF_RATING_VALUES = {
  'truly outstanding': 5,
  'exceeds expectations': 4,
  'meets expectations': 3,
  'partially meets expectations': 2,
  'partially meets': 2,
  'does not meet expectations': 1,
  'does not meet': 1,
};
const PERF_CATS = ['technical','quality','accountability','we_lead','we_deliver','we_learn','we_care','engagement','team_performance','feedback_coaching'];

function parseColumnText(rawCol) {
  const lower = rawCol.replace(/\r?\n/g, ' ').replace(/\s{2,}/g, ' ').toLowerCase();
  const ratings = {};
  for (const [cat, anchors] of Object.entries(PERF_CAT_ANCHORS)) {
    for (const anchor of anchors) {
      const idx = lower.indexOf(anchor);
      if (idx !== -1) {
        const r = findRatingAt(lower, idx);
        if (r !== null) { ratings[cat] = r; break; }
      }
    }
    if (!ratings[cat]) ratings[cat] = 3;
  }
  const twaMatch = lower.match(/total\s+weighted\s+average\s*[:\s]+(\d+\.\d+)/);
  const totalWeightedAvg = twaMatch ? parseFloat(twaMatch[1]) : null;
  // Position-based section extraction — avoids [^\n]* consuming content when OCR has no newlines
  const extractSection = (startWord, endWord, skipSentences = 2) => {
    const idx = lower.indexOf(startWord);
    if (idx === -1) return [];
    // Skip past header by counting sentence-ending periods
    let pos = idx, dots = 0;
    while (pos < lower.length && dots < skipSentences) { if (lower[pos] === '.') dots++; pos++; }
    const endIdx = endWord ? lower.indexOf(endWord, pos) : lower.length;
    const body = lower.slice(pos, endIdx > pos ? endIdx : lower.length).trim();
    if (body.length < 20) return [];
    return body
      .split(/\.\s+/)
      .map(s => s.replace(/\s+/g, ' ').trim())
      .filter(s => s.length > 25 && s.length < 800)
      .slice(0, 30);
  };
  const accomplishments = extractSection('accomplishments', 'areas for', 2);
  const improvements    = extractSection('areas for', null, 1);
  // Debug: log what was found to help diagnose issues
  const engagementIdx = lower.indexOf('employee engagement');
  const psyIdx = lower.indexOf('psychological safety');
  const tpIdx  = lower.indexOf('promote team performance');
  const raIdx  = lower.search(/recognition.{0,15}accomplishments/i);
  console.log('[DCH] parseColumnText debug:', {
    engagement_idx: engagementIdx,
    psy_idx: psyIdx,
    psy_window: psyIdx >= 0 ? lower.slice(psyIdx, psyIdx + 700) : 'NOT FOUND',
    tp_idx: tpIdx,
    tp_window: tpIdx >= 0 ? lower.slice(tpIdx, tpIdx + 700) : 'NOT FOUND',
    ra_idx: raIdx,
    ra_chunk: raIdx >= 0 ? lower.slice(raIdx, raIdx + 300) : 'NOT FOUND',
    accomplishments_count: accomplishments.length,
    improvements_count: improvements.length,
    ratings_found: Object.keys(ratings).filter(k => ratings[k] !== 3).length + ' / ' + Object.keys(ratings).length,
    ratings,
  });
  return { ratings, totalWeightedAvg, accomplishments, improvements };
}

function parseSplitPerfReviewText(selfRaw, mgrRaw) {
  const self = parseColumnText(selfRaw);
  const mgr  = parseColumnText(mgrRaw);
  const yearMatch = (selfRaw + mgrRaw).match(/20(\d\d)/);
  const year = yearMatch ? yearMatch[0] : new Date().getFullYear().toString();
  const wrapBullets = (bullets, fallback) =>
    bullets.length ? [{ headline: fallback, bullets }] : [{ headline: fallback, bullets: [] }];
  return {
    year,
    self: {
      totalWeightedAvg: self.totalWeightedAvg,
      ratings: self.ratings,
      accomplishments: wrapBullets(self.accomplishments, 'Key contributions'),
      improvements:    wrapBullets(self.improvements,    'Development areas'),
    },
    manager: {
      name: 'Manager',
      totalWeightedAvg: mgr.totalWeightedAvg,
      ratings: mgr.ratings,
      accomplishments: wrapBullets(mgr.accomplishments, 'Key contributions'),
      improvements:    wrapBullets(mgr.improvements,    'Development areas'),
    },
  };
}

async function parsePerfReviewPDF(file) {
  try {
    const isImage = /\.(png|jpe?g)$/i.test(file.name) || file.type.startsWith('image/');
    if (isImage) {
      if (!window.Tesseract) { console.warn('[DCH] Tesseract.js not loaded'); return null; }
      // Single OCR pass; use word bounding boxes to split left (self) vs right (manager) column.
      // More reliable than canvas-splitting because it uses actual character positions.
      const { data } = await Tesseract.recognize(file, 'eng', { logger: () => {} });
      const words = data.words || [];
      if (words.length > 0) {
        const maxX = words.reduce((m, w) => Math.max(m, w.bbox.x1), 0);
        const midX = maxX * 0.5;
        // Reconstruct line-aware text from word bboxes (words on same line → space, new line → \n)
        const wordsToText = (ws) => {
          ws.sort((a, b) => a.bbox.y0 !== b.bbox.y0 ? a.bbox.y0 - b.bbox.y0 : a.bbox.x0 - b.bbox.x0);
          let out = '', prevY = -1;
          for (const w of ws) {
            out += (prevY < 0 ? '' : (w.bbox.y0 - prevY > 15 ? '\n' : ' ')) + w.text;
            prevY = w.bbox.y0;
          }
          return out;
        };
        const selfText = wordsToText(words.filter(w => (w.bbox.x0 + w.bbox.x1) / 2 < midX));
        const mgrText  = wordsToText(words.filter(w => (w.bbox.x0 + w.bbox.x1) / 2 >= midX));
        console.log('[DCH] Word-split: left', selfText.length, 'right', mgrText.length, 'midX', midX);
        return parseSplitPerfReviewText(selfText, mgrText);
      }
      // Fallback: full text single-column parse
      return parsePerfReviewText(data.text);
    }
    // PDF path — split items by x-coordinate into left (self) and right (manager) columns
    if (!window.pdfjsLib) { console.warn('[DCH] pdf.js not loaded'); return null; }
    const buffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
    let selfText = '', mgrText = '';
    for (let p = 1; p <= pdf.numPages; p++) {
      const page = await pdf.getPage(p);
      const viewport = page.getViewport({ scale: 1 });
      const midX = viewport.width / 2;
      const content = await page.getTextContent();
      const left  = content.items.filter(i => i.transform[4] <  midX).sort((a, b) => b.transform[5] - a.transform[5]);
      const right = content.items.filter(i => i.transform[4] >= midX).sort((a, b) => b.transform[5] - a.transform[5]);
      selfText += left.map(i => i.str).join(' ') + '\n';
      mgrText  += right.map(i => i.str).join(' ') + '\n';
    }
    console.log('[DCH] PDF self len:', selfText.length, 'mgr len:', mgrText.length);
    return parseSplitPerfReviewText(selfText, mgrText);
  } catch(e) {
    console.warn('[DCH] parsePerfReviewPDF error:', e);
    return null;
  }
}

// Anchors for each perf category — first match in section wins
const PERF_CAT_ANCHORS = {
  technical:         ['technical expertise', 'specialized knowledge and skills', 'technical requirement'],
  quality:           ['quality of your work products', 'quality of work products', 'quality work products'],
  accountability:    ['accountable for results', 'accountability', 'achieve expected outcomes independently'],
  we_lead:           ['we lead:', 'we: lead', 'we anticipate, prioritize', 'core value - we lead'],
  we_deliver:        ['we deliver:', 'we: deliver', 'create solutions, not excuses', 'core value - we deliver'],
  we_learn:          ['we learn:', 'we: learn', 'take risks to find better', 'core value - we learn'],
  we_care:           ['we care:', 'we: care', 'hospitality mindset', 'core value - we care'],
  engagement:        ['psychological safety', 'promote cultures of psychological safety', 'employee engagement', 'psychological safety and recognition', 'retention issues are addressed', 'promote engagement'],
  team_performance:  ['promote team performance', 'team performance', 'delegate to their teams'],
  feedback_coaching: ['feedback and coaching', 'feedback & coaching', 'provide regular feedback'],
};

// Find the rating keyword that appears EARLIEST in the text within `lookahead` chars.
// Falls back to Workday-style numeric badge "(N)" if keyword text is misread by OCR.
function findRatingAt(lower, startPos, lookahead = 700) {
  const chunk = lower.slice(startPos, startPos + lookahead);
  let bestPos = Infinity, bestVal = null;
  for (const kw of PERF_RATING_KEYWORDS) {
    const ki = chunk.indexOf(kw);
    if (ki !== -1 && ki < bestPos) { bestPos = ki; bestVal = PERF_RATING_VALUES[kw]; }
  }
  if (bestVal !== null) return bestVal;
  // Fallback: match Workday numeric badge "(N)" where N is 1–5 (rating scale)
  const numMatch = chunk.match(/\(([1-5])\)/);
  if (numMatch) return parseInt(numMatch[1]);
  return null;
}

// For each category, collect every position where an anchor phrase appears (sorted asc).
// 1st occurrence → self rating, 2nd occurrence → manager rating.
// This works for both column-by-column AND interleaved OCR output.
function extractBothRatings(lower) {
  const self = {}, mgr = {};
  for (const [cat, anchors] of Object.entries(PERF_CAT_ANCHORS)) {
    // Collect all positions of any anchor for this category
    const positions = [];
    for (const anchor of anchors) {
      let search = 0;
      while (true) {
        const idx = lower.indexOf(anchor, search);
        if (idx === -1) break;
        positions.push(idx);
        search = idx + anchor.length;
      }
    }
    if (positions.length === 0) continue;
    positions.sort((a, b) => a - b);

    // 1st occurrence → self
    const selfRating = findRatingAt(lower, positions[0]);
    if (selfRating !== null) self[cat] = selfRating;

    // 2nd occurrence → manager (fall back to self if only one occurrence)
    if (positions.length >= 2) {
      const mgrRating = findRatingAt(lower, positions[1]);
      if (mgrRating !== null) mgr[cat] = mgrRating;
    } else {
      if (selfRating !== null) mgr[cat] = selfRating;
    }
  }
  return { self, mgr };
}

function parsePerfReviewText(rawText) {
  const text = rawText;
  // Normalize OCR whitespace — Tesseract can split badge text (e.g. "Exceeds\nExpectations")
  // across lines, which would prevent keyword matching. Collapse all whitespace to single spaces.
  const lower = text.replace(/\r?\n/g, ' ').replace(/\s{2,}/g, ' ').toLowerCase();

  // Extract all "Total Weighted Average" values
  const twaPattern = /total\s+weighted\s+average\s*[:\s]+(\d+\.\d+)/gi;
  const twaMatches = [];
  let m;
  while ((m = twaPattern.exec(lower)) !== null) twaMatches.push(parseFloat(m[1]));

  // Dual-occurrence anchor extraction (handles both interleaved and column-by-column OCR)
  let { self: selfRatings, mgr: mgrRatings } = extractBothRatings(lower);

  // Fallback: positional scan if < 5 categories found
  const positionalRatings = [];
  let pos = 0;
  while (pos < lower.length) {
    let found = false;
    for (const kw of PERF_RATING_KEYWORDS) {
      if (lower.startsWith(kw, pos)) { positionalRatings.push(PERF_RATING_VALUES[kw]); pos += kw.length; found = true; break; }
    }
    if (!found) pos++;
  }
  console.log('[DCH] selfRatings:', selfRatings, 'mgrRatings:', mgrRatings, 'positional:', positionalRatings, 'TWA:', twaMatches);

  if (Object.keys(selfRatings).length < 5) {
    if (positionalRatings.length < 10) return null;
    PERF_CATS.forEach((cat, i) => { selfRatings[cat] = positionalRatings[i] ?? 3; });
    PERF_CATS.forEach((cat, i) => { mgrRatings[cat]  = positionalRatings[positionalRatings.length >= 20 ? i + 10 : i] ?? 3; });
  }

  // Fill any missing categories with 3
  PERF_CATS.forEach(cat => { if (!selfRatings[cat]) selfRatings[cat] = 3; if (!mgrRatings[cat]) mgrRatings[cat] = 3; });

  // Extract year
  const yearMatch = rawText.match(/20(\d\d)/);
  const year = yearMatch ? yearMatch[0] : new Date().getFullYear().toString();

  // Try to extract bullet text sections for accomplishments / improvements
  const extractSection = (pattern) => {
    const match = rawText.match(pattern);
    if (!match || !match[1]) return [];
    const chunk = match[1];
    const lines = chunk.split(/\n|(?:•|–|-)(?=\s)/).map(l => l.trim()).filter(l => l.length > 20 && l.length < 600);
    if (!lines.length) return [];
    const groups = [];
    let cur = null;
    lines.forEach(line => {
      if (!cur || line.length > 80) {
        cur = { headline: line.substring(0, 120), bullets: [] };
        groups.push(cur);
      } else {
        cur.bullets.push(line);
      }
    });
    return groups.slice(0, 4);
  };

  const mid = Math.floor(rawText.length / 2);
  const selfText = rawText.slice(0, mid);
  const mgrText  = rawText.slice(mid);

  const selfAccomplishments = extractSection(/recognition\s*&\s*accomplishments[^\n]*([\s\S]{10,2000}?)(?:areas for improvement|areas of improvement|$)/i) ||
    [{ headline: 'Recognition & Accomplishments', bullets: [] }];
  const selfImprovements = extractSection(/areas for (?:improvement|development)[^\n]*([\s\S]{10,1000}?)(?:$)/i) ||
    [{ headline: 'Areas for Development', bullets: [] }];

  // For manager text section, look in second half
  const mgrRawText = mgrText;
  const mgrAccomplishments = extractSection.call(null, /recognition\s*&\s*accomplishments[^\n]*([\s\S]{10,2000}?)(?:areas for improvement|areas of improvement|$)/i) ||
    [{ headline: 'Recognition & Accomplishments', bullets: [] }];
  const mgrImprovements = extractSection.call(null, /areas for (?:improvement|development)[^\n]*([\s\S]{10,1000}?)(?:$)/i) ||
    [{ headline: 'Areas for Development', bullets: [] }];

  return {
    year,
    self: {
      totalWeightedAvg: twaMatches[0] ?? null,
      ratings: selfRatings,
      accomplishments: selfAccomplishments.length ? selfAccomplishments : [{ headline: 'Key contributions', bullets: [] }],
      improvements: selfImprovements.length ? selfImprovements : [{ headline: 'Development areas', bullets: [] }],
    },
    manager: {
      name: 'Manager',
      totalWeightedAvg: twaMatches[1] ?? null,
      ratings: mgrRatings,
      accomplishments: mgrAccomplishments.length ? mgrAccomplishments : [{ headline: 'Key contributions', bullets: [] }],
      improvements: mgrImprovements.length ? mgrImprovements : [{ headline: 'Development areas', bullets: [] }],
    },
  };
}

function generateImportPreview(parsedMatrix, parsedReview = null) {
  const profiles = getProfiles();
  const currentProfile = profiles.find(p => p.id === state.profile);
  const nameHash = (currentProfile?.name || 'User').split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const result = {};

  if (state.importTypes.includes('skill-matrix')) {
    if (parsedMatrix?.skills && Object.keys(parsedMatrix.skills).length > 0) {
      result.skills = parsedMatrix.skills;
      if (parsedMatrix.expectedLevels && Object.keys(parsedMatrix.expectedLevels).length > 0) {
        result.expectedLevels = parsedMatrix.expectedLevels;
      }
    } else {
      // Parsing failed — flag it so the preview can show a warning
      result.skillParseError = true;
    }
  }

  if (state.importTypes.includes('perf-review')) {
    if (parsedReview) {
      result.review = parsedReview;
    } else {
      result.reviewParseError = true;
    }
  }

  return result;
}

function applyImportedData() {
  if (!state.importPreview) return;
  const d = getData();

  if (state.importPreview.skills) {
    // Full replace — imported file is the source of truth
    d.assessments = { ...state.importPreview.skills };
  }

  if (state.importPreview.review) {
    // Full replace
    localStorage.setItem('dch_review_' + state.profile, JSON.stringify(state.importPreview.review));
  }

  if (state.importPreview.expectedLevels) {
    // Full replace
    localStorage.setItem('dch_expected_' + state.profile, JSON.stringify(state.importPreview.expectedLevels));
  }

  saveData(d);
  state.importStep = 4;
  render();
  setTimeout(() => closeImportModal(), 2000);
}

function confirmClearSkills() {
  const d = getData();
  d.assessments = {};
  saveData(d);
  localStorage.removeItem('dch_expected_' + state.profile);
  state.clearConfirm = null;
  render();
}
function confirmClearReview() {
  localStorage.removeItem('dch_review_' + state.profile);
  state.clearConfirm = null;
  render();
}
function renderClearConfirmModal() {
  const m = state.clearConfirm;
  if (!m) return '';
  const isSkills = m === 'skills';
  const label = isSkills ? 'skill assessments' : 'performance review';
  const confirmFn = isSkills ? 'confirmClearSkills()' : 'confirmClearReview()';
  return `
    <div class="modal-overlay" onclick="if(event.target===this){state.clearConfirm=null;render()}" style="z-index:1200">
      <div class="modal-box" onclick="event.stopPropagation()" style="max-width:420px">
        <div class="insight-modal-header" style="border-bottom:1px solid var(--border)">
          <div style="flex:1">
            <div class="insight-modal-title" style="display:flex;align-items:center;gap:8px">
              <span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:8px;background:#FEF2F2;color:#DC2626">${icon('trash-2',15,'#DC2626')}</span>
              Clear all ${label}
            </div>
          </div>
          <button class="insight-modal-close" onclick="state.clearConfirm=null;render()" style="align-self:flex-start">✕</button>
        </div>
        <div style="padding:20px 24px">
          <p style="font-size:14px;color:var(--text-secondary);line-height:1.6;margin:0 0 12px">This will permanently delete all ${label} for this profile.</p>
          <p style="font-size:12.5px;color:var(--text-muted);margin:0 0 24px">This can't be undone. You can re-import data at any time.</p>
          <div style="display:flex;gap:10px;justify-content:flex-end">
            <button class="btn btn-secondary btn-sm" onclick="state.clearConfirm=null;render()">Cancel</button>
            <button class="btn btn-sm" style="background:#DC2626;color:#fff;border-color:#DC2626;font-weight:600" onclick="${confirmFn}">${icon('trash-2',13,'#fff')} Clear all</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderImportModal() {
  if (!state.importModal) return '';
  const closeable = state.importStep !== 2 && state.importStep !== 4;
  return `
    <div class="import-modal-overlay" onclick="if(event.target===this && ${closeable})closeImportModal()">
      <div class="import-modal">
        ${state.importStep === 4 ? `
          <div style="text-align:center;padding:48px 32px">
            ${icon('check-circle', 52, 'var(--green)')}
            <div style="font-size:20px;font-weight:700;color:var(--text);margin-top:16px">Profile updated!</div>
            <div style="font-size:14px;color:var(--text-secondary);margin-top:8px">
              ${state.importPreview?.skills ? `${Object.keys(state.importPreview.skills).length} skills imported.` : ''}
              ${state.importPreview?.review ? ' Performance review data added.' : ''}
            </div>
          </div>
        ` : `
          <div class="import-modal-header">
            <div>
              <div class="import-modal-title">Import Documents</div>
              <div class="import-step-indicator">
                ${[1,2,3].map(n => `<span class="import-step-dot ${n < state.importStep ? 'done' : n === state.importStep ? 'active' : ''}"></span>`).join('')}
                <span style="font-size:12px;color:var(--text-muted)">Step ${Math.min(state.importStep,3)} of 3</span>
              </div>
            </div>
            ${closeable ? `<button class="import-close-btn" onclick="closeImportModal()">✕</button>` : ''}
          </div>
          <div class="import-modal-body">
            ${state.importStep === 1 ? renderImportStep1() : ''}
            ${state.importStep === 2 ? renderImportStep2() : ''}
            ${state.importStep === 3 ? renderImportStep3() : ''}
          </div>
        `}
      </div>
    </div>
  `;
}

function renderImportStep1() {
  const allTypes = [
    { id: 'skill-matrix', label: 'Skill Matrix',        iconName: 'layers' },
    { id: 'perf-review',  label: 'Performance Review',  iconName: 'bar-chart-2' },
  ];
  const types = state.importTypes.length === 1
    ? allTypes.filter(t => state.importTypes.includes(t.id))
    : allTypes;
  return `
    <div>
      <h2 class="import-step-heading">Upload your documents</h2>
      <p class="import-step-sub">${types.length > 1 ? 'Upload one or both. ' : ''}We'll extract the data and update your profile automatically. Accepts PDF, XLSX, CSV, PNG, or JPG.</p>
      <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:28px">
        ${types.map(({ id, label, iconName: iName }) => {
          const file = state.importFiles[id];
          return `
            <div>
              <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin-bottom:6px">${label}</div>
              ${file ? `
                <div class="import-file-uploaded">
                  ${icon('check-circle', 16, 'var(--green)')}
                  <span style="font-size:13px;color:var(--text);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escHtml(file.name)}</span>
                  <button style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:12px;padding:0;flex-shrink:0" onclick="removeImportFile('${id}')">Remove</button>
                </div>
              ` : `
                <div class="import-dropzone"
                     ondragover="event.preventDefault();event.currentTarget.classList.add('import-dz-over')"
                     ondragleave="event.currentTarget.classList.remove('import-dz-over')"
                     ondrop="handleImportDrop(event,'${id}')"
                     onclick="document.getElementById('import-file-${id}').click()">
                  <input type="file" id="import-file-${id}" style="display:none"
                         accept=".pdf,.xlsx,.csv,.png,.jpg,.jpeg"
                         onchange="handleImportFileSelect(event,'${id}')">
                  ${icon(iName, 28, 'var(--text-muted)')}
                  <div style="font-size:13px;color:var(--text-secondary);margin-top:10px">
                    Drag & drop or <span style="color:var(--primary);font-weight:600">browse files</span>
                  </div>
                  <div style="font-size:11px;color:var(--text-muted);margin-top:4px">PDF, XLSX, CSV, PNG, JPG</div>
                </div>
              `}
            </div>
          `;
        }).join('')}
      </div>
      ${types.some(t => t.id === 'skill-matrix') ? `
        <div style="background:#F8FAFC;border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:20px">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin-bottom:10px">Skill Matrix Format Guide</div>
          <div style="font-size:12px;color:var(--text);line-height:1.6">
            <div style="margin-bottom:8px">Your file needs these columns — headers are flexible but must match these patterns:</div>
            <table style="width:100%;border-collapse:collapse;font-size:12px">
              <thead>
                <tr style="border-bottom:1px solid var(--border)">
                  <th style="text-align:left;padding:4px 8px 6px 0;color:var(--text-muted);font-weight:600">Column</th>
                  <th style="text-align:left;padding:4px 8px 6px;color:var(--text-muted);font-weight:600">Accepted headers</th>
                  <th style="text-align:left;padding:4px 0 6px;color:var(--text-muted);font-weight:600">Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid #F1F5F9">
                  <td style="padding:5px 8px 5px 0;font-weight:600">Skill name</td>
                  <td style="padding:5px 8px;color:#475569">Skill, Skills, Competency, Competencies, Ability, Abilities, Name</td>
                  <td style="padding:5px 0"><span style="background:#DCFCE7;color:#166534;border-radius:4px;padding:2px 6px;font-size:11px;font-weight:600">Yes</span></td>
                </tr>
                <tr style="border-bottom:1px solid #F1F5F9">
                  <td style="padding:5px 8px 5px 0;font-weight:600">Manager rating</td>
                  <td style="padding:5px 8px;color:#475569">Must contain both <em>Manager</em> and <em>Assess</em> (e.g. "Manager Assessment")</td>
                  <td style="padding:5px 0"><span style="background:#DCFCE7;color:#166534;border-radius:4px;padding:2px 6px;font-size:11px;font-weight:600">Yes</span></td>
                </tr>
                <tr>
                  <td style="padding:5px 8px 5px 0;font-weight:600">Expected level</td>
                  <td style="padding:5px 8px;color:#475569">Role, Expected, or any header containing <em>Expected</em></td>
                  <td style="padding:5px 0"><span style="background:#DCFCE7;color:#166534;border-radius:4px;padding:2px 6px;font-size:11px;font-weight:600">Yes</span></td>
                </tr>
              </tbody>
            </table>
            <div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border)">
              <span style="font-weight:600">Valid level values:</span>
              <span style="color:#475569"> Learner (or 1), Contributor (or 2), Independent (or 3), Expert (or 4), Unknown (or 0, blank, N/A)</span>
            </div>
          </div>
        </div>
      ` : ''}
      <div style="display:flex;justify-content:flex-end">
        <button class="btn btn-primary" onclick="startImportProcessing()" ${!canAdvanceToProcess() ? 'disabled' : ''}>Analyze Documents →</button>
      </div>
    </div>
  `;
}

function renderImportStep2() {
  return `
    <div style="text-align:center;padding:44px 24px">
      <div class="import-spinner"></div>
      <div style="font-size:16px;font-weight:600;color:var(--text);margin-top:20px">Analyzing your documents...</div>
      <div class="import-processing-msgs" style="margin-top:10px">
        <span>Reading document structure</span>
        <span>Extracting skill assessments</span>
        <span>Mapping to competency framework</span>
        <span>Calculating performance insights</span>
        <span>Finalizing your profile</span>
      </div>
    </div>
  `;
}

function renderImportStep3() {
  const preview = state.importPreview;
  if (!preview) return '';

  const skillCount = preview.skills ? Object.keys(preview.skills).length : 0;
  const sampleSkills = preview.skills
    ? SKILLS_DATA.skills.slice(0, 5).map(s => ({ name: s.name, level: preview.skills[s.id]?.managerLevel || 'Contributor' }))
    : [];
  const mgrAvg = preview.review
    ? (preview.review.manager.totalWeightedAvg != null
        ? preview.review.manager.totalWeightedAvg.toFixed(3)
        : (Object.values(preview.review.manager.ratings).reduce((a,b)=>a+b,0) / Object.values(preview.review.manager.ratings).length).toFixed(1))
    : null;

  return `
    <div>
      <h2 class="import-step-heading">Here's what we found</h2>
      <p class="import-step-sub">Review the extracted data before applying it to your profile.</p>
      <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:28px;max-height:300px;overflow-y:auto">
        ${preview.skillParseError ? `
          <div class="import-preview-section" style="border-color:#FCA5A5;background:#FFF5F5">
            <div class="import-preview-section-header" style="color:#DC2626">${icon('alert-triangle',14,'#DC2626')} Skill Matrix — could not read file</div>
            <div style="font-size:13px;color:#7F1D1D;margin-top:4px">
              The file format wasn't recognized. Make sure the spreadsheet has a column header containing "Manager Assessment" and skill names in a separate column. No data will be imported.
            </div>
          </div>
        ` : skillCount > 0 ? `
          <div class="import-preview-section">
            <div class="import-preview-section-header">${icon('layers',14,'var(--primary)')} Skill Matrix — ${skillCount} skills detected</div>
            ${sampleSkills.map(s => {
              const lc = LEVEL_CONFIG[s.level] || LEVEL_CONFIG.Contributor;
              return `<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border)">
                <span style="font-size:13px;color:var(--text)">${escHtml(s.name)}</span>
                <span class="level-badge ${lc.cls}" style="font-size:10px;padding:3px 7px">${icon(lc.iconName,10,lc.color)} ${s.level}</span>
              </div>`;
            }).join('')}
            ${skillCount > 5 ? `<div style="font-size:12px;color:var(--text-muted);padding-top:6px">+ ${skillCount - 5} more skills</div>` : ''}
          </div>
        ` : ''}
        ${preview.review ? `
          <div class="import-preview-section">
            <div class="import-preview-section-header">${icon('bar-chart-2',14,'var(--primary)')} Performance Review ${preview.review.year} — Total Weighted Avg ${mgrAvg}</div>
            <div style="font-size:13px;color:var(--text-secondary)">
              <div style="font-weight:600;color:var(--text);margin-bottom:4px">${escHtml(preview.review.manager.accomplishments[0]?.headline || '')}</div>
              Ratings imported for all 10 performance categories. Self and manager perspectives included.
            </div>
          </div>
        ` : ''}
        ${preview.reviewParseError ? `
          <div class="import-preview-section" style="border-color:#FCA5A5;background:#FFF5F5">
            <div class="import-preview-section-header" style="color:#DC2626">${icon('alert-triangle',14,'#DC2626')} Performance Review — could not read file</div>
            <div style="font-size:13px;color:#7F1D1D;margin-top:4px">The file format wasn't recognized. Make sure you're uploading a PDF exported from your review system (e.g. Workday). The file must contain rating labels like "Meets Expectations" and a "Total Weighted Average."</div>
          </div>
        ` : ''}
      </div>
      <div style="display:flex;justify-content:space-between">
        <button class="btn btn-secondary" onclick="state.importStep=1;render()">← Back</button>
        <button class="btn btn-primary" onclick="applyImportedData()">Apply to Profile →</button>
      </div>
    </div>
  `;
}

function openQuickWinModal(idx) { state.quickWinModal = idx; render(); }
function closeQuickWinModal() { state.quickWinModal = null; render(); }


// ============ EOY REVIEW VIEW ============
function saveEoyReview(updater) {
  const key = 'dch_review_' + state.profile;
  let r;
  try { r = JSON.parse(localStorage.getItem(key)); } catch(e) {}
  if (!r) r = { year: new Date().getFullYear().toString(), self: { totalWeightedAvg: null, ratings: {}, accomplishments: [], improvements: [] }, manager: { name: 'Manager', totalWeightedAvg: null, ratings: {}, accomplishments: [], improvements: [] } };
  if (!r.self) r.self = { totalWeightedAvg: null, ratings: {}, accomplishments: [], improvements: [] };
  if (!r.manager) r.manager = { name: 'Manager', totalWeightedAvg: null, ratings: {}, accomplishments: [], improvements: [] };
  updater(r);
  localStorage.setItem(key, JSON.stringify(r));
}
function saveEoyYear(val) { saveEoyReview(r => r.year = val); }
function saveEoyScore(who, val) { saveEoyReview(r => r[who].totalWeightedAvg = (val !== '' && val != null) ? parseFloat(val) : null); }
function saveEoyRating(cat, who, val) { saveEoyReview(r => { if (!r[who].ratings) r[who].ratings = {}; if (val) r[who].ratings[cat] = parseInt(val); else delete r[who].ratings[cat]; }); render(); }
function styleRatingSelect(el, val) {
  const n = parseInt(val);
  const rc = n ? EOY_RATING_CONFIG[n] : null;
  el.style.background = rc ? rc.bg : 'var(--surface)';
  el.style.color = rc ? rc.color : 'var(--text-muted)';
  el.style.borderColor = rc ? rc.border : 'var(--border)';
  el.style.fontWeight = rc ? '700' : '400';
}
function saveEoyText(field, who, val) { saveEoyReview(r => { r[who][field] = val ? [{ headline: val, bullets: [] }] : []; }); }
function saveEoyHtml(field, who, html) { saveEoyReview(r => { r[who][field + '_html'] = html || ''; }); }
function getEoyHtml(review, who, field) {
  const html = review?.[who]?.[field + '_html'];
  if (html != null) return html;
  // fall back: convert old array format to basic HTML
  const items = review?.[who]?.[field];
  if (!items || !items.length) return '';
  return items.map(i => [i.headline, ...(i.bullets || [])].filter(Boolean).map(t => `<p>${escHtml(t)}</p>`).join('')).join('');
}
function getEoyText(review, who, field) {
  const items = review?.[who]?.[field];
  if (!items || !items.length) return '';
  return items.map(i => [i.headline, ...(i.bullets || [])].filter(Boolean).join('\n')).join('\n\n');
}
function eoyRteCmd(cmd, val) {
  document.execCommand(cmd, false, val || null);
}

function renderEOYReview() {
  const key = 'dch_review_' + state.profile;
  let review;
  try { review = JSON.parse(localStorage.getItem(key)); } catch(e) {}
  review = review || null;

  const r = review || { year: new Date().getFullYear().toString(), self: { totalWeightedAvg: null, ratings: {}, accomplishments: [], improvements: [] }, manager: { name: 'Manager', totalWeightedAvg: null, ratings: {}, accomplishments: [], improvements: [] } };

  const selfRatings = r.self?.ratings || {};
  const mgrRatings = r.manager?.ratings || {};
  const selfTWA = r.self?.totalWeightedAvg != null ? r.self.totalWeightedAvg : '';
  const mgrTWA = r.manager?.totalWeightedAvg != null ? r.manager.totalWeightedAvg : '';
  const selfAccomplish = escHtml(getEoyText(r, 'self', 'accomplishments'));
  const mgrAccomplish = escHtml(getEoyText(r, 'manager', 'accomplishments'));
  const selfImprove = escHtml(getEoyText(r, 'self', 'improvements'));
  const mgrImprove = escHtml(getEoyText(r, 'manager', 'improvements'));

  const ratingSelectStyle = (val) => {
    const n = parseInt(val);
    const rc = n ? EOY_RATING_CONFIG[n] : null;
    return rc
      ? `background:${rc.bg};color:${rc.color};border-color:${rc.border};font-weight:700;`
      : 'background:var(--surface);color:var(--text-muted);border-color:var(--border);font-weight:400;';
  };
  const ratingSelect = (catId, who, currentVal) => {
    const opts = ['<option value="">\u2014</option>'].concat([1,2,3,4,5].map(n => {
      const rc = EOY_RATING_CONFIG[n];
      return '<option value="' + n + '"' + (parseInt(currentVal) === n ? ' selected' : '') + '>' + n + ' \u2013 ' + rc.label + '</option>';
    })).join('');
    return '<select onchange="saveEoyRating(\'' + catId + '\',\'' + who + '\',this.value);styleRatingSelect(this,this.value)" style="font-size:12px;padding:5px 8px;border:1px solid;border-radius:6px;width:100%;max-width:210px;transition:background .15s,color .15s,border-color .15s;' + ratingSelectStyle(currentVal) + '">' + opts + '</select>';
  };

  let rowNum = 0;
  const tableRows = EOY_CATEGORY_GROUPS.map((group, gi) => {
    const groupHeader = '<div style="padding:8px 16px;background:var(--bg);' + (gi > 0 ? 'border-top:2px solid var(--border);' : '') + 'font-size:10px;font-weight:700;color:var(--text-secondary);letter-spacing:.07em;text-transform:uppercase">' + escHtml(group.label) + '</div>';
    const catRows = group.categories.map((cat, ci) => {
      rowNum++;
      const isLast = ci === group.categories.length - 1;
      const sv = parseInt(selfRatings[cat.id]);
      const mv = parseInt(mgrRatings[cat.id]);
      const hasGap = sv && mv;
      const gap = hasGap ? sv - mv : null;
      let gapCell;
      if (gap === null) {
        gapCell = '<span style="color:var(--text-muted);font-size:13px">—</span>';
      } else if (gap === 0) {
        gapCell = '<span title="Aligned" style="display:inline-block;padding:2px 7px;border-radius:20px;font-size:12px;font-weight:700;color:#6B7280;background:#F3F4F6;border:1px solid #E5E7EB">0</span>';
      } else {
        const isOver = gap > 0; // self rated higher than manager
        const gapColor = isOver ? '#D97706' : '#059669';
        const gapBg = isOver ? '#FFFBEB' : '#F0FDF4';
        const gapBorder = isOver ? '#FDE68A' : '#BBF7D0';
        const label = (isOver ? '+' : '') + gap;
        gapCell = '<span title="' + (isOver ? 'You rated yourself higher' : 'Manager rated you higher') + '" style="display:inline-block;padding:2px 7px;border-radius:20px;font-size:12px;font-weight:700;color:' + gapColor + ';background:' + gapBg + ';border:1px solid ' + gapBorder + '">' + label + '</span>';
      }
      return '<div style="display:grid;grid-template-columns:1fr 220px 220px 72px;align-items:center;padding:10px 16px;' + (!isLast ? 'border-bottom:1px solid var(--border);' : '') + '">' +
        '<div style="display:flex;gap:10px;align-items:flex-start">' +
          '<span style="font-size:12px;font-weight:700;color:var(--text-muted);min-width:22px;padding-top:2px">(' + rowNum + ')</span>' +
          '<div>' +
            '<div style="font-size:13px;font-weight:600;color:var(--text)">' + escHtml(cat.label) + '</div>' +
            '<div style="font-size:11px;color:var(--text-muted);margin-top:2px;line-height:1.4">' + escHtml(cat.desc) + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="padding-right:8px">' + ratingSelect(cat.id, 'self', selfRatings[cat.id]) + '</div>' +
        '<div>' + ratingSelect(cat.id, 'manager', mgrRatings[cat.id]) + '</div>' +
        '<div style="text-align:center">' + gapCell + '</div>' +
      '</div>';
    }).join('');
    return groupHeader + catRows;
  }).join('');

  const selfAccomplishHtml = getEoyHtml(r, 'self', 'accomplishments');
  const mgrAccomplishHtml  = getEoyHtml(r, 'manager', 'accomplishments');
  const selfImproveHtml    = getEoyHtml(r, 'self', 'improvements');
  const mgrImproveHtml     = getEoyHtml(r, 'manager', 'improvements');

  const rteToolbar = (field, who) => `
    <div style="display:flex;gap:2px;padding:6px 8px;border-bottom:1px solid var(--border);background:var(--bg);flex-wrap:wrap">
      <button onmousedown="event.preventDefault();eoyRteCmd('bold')"           title="Bold"           style="width:28px;height:28px;border:1px solid var(--border);border-radius:4px;background:var(--surface);cursor:pointer;font-size:13px;font-weight:700;color:var(--text);display:flex;align-items:center;justify-content:center">B</button>
      <button onmousedown="event.preventDefault();eoyRteCmd('italic')"         title="Italic"         style="width:28px;height:28px;border:1px solid var(--border);border-radius:4px;background:var(--surface);cursor:pointer;font-size:13px;font-style:italic;color:var(--text);display:flex;align-items:center;justify-content:center">I</button>
      <button onmousedown="event.preventDefault();eoyRteCmd('underline')"      title="Underline"      style="width:28px;height:28px;border:1px solid var(--border);border-radius:4px;background:var(--surface);cursor:pointer;font-size:13px;text-decoration:underline;color:var(--text);display:flex;align-items:center;justify-content:center">U</button>
      <div style="width:1px;background:var(--border);margin:2px 3px"></div>
      <button onmousedown="event.preventDefault();eoyRteCmd('insertUnorderedList')" title="Bullet list"   style="width:28px;height:28px;border:1px solid var(--border);border-radius:4px;background:var(--surface);cursor:pointer;font-size:14px;color:var(--text);display:flex;align-items:center;justify-content:center">≡</button>
      <button onmousedown="event.preventDefault();eoyRteCmd('insertOrderedList')"   title="Numbered list" style="width:28px;height:28px;border:1px solid var(--border);border-radius:4px;background:var(--surface);cursor:pointer;font-size:11px;font-weight:700;color:var(--text);display:flex;align-items:center;justify-content:center">1.</button>
      <div style="width:1px;background:var(--border);margin:2px 3px"></div>
      <button onmousedown="event.preventDefault();eoyRteCmd('removeFormat')"   title="Clear formatting" style="width:28px;height:28px;border:1px solid var(--border);border-radius:4px;background:var(--surface);cursor:pointer;font-size:11px;color:var(--text-muted);display:flex;align-items:center;justify-content:center">✕</button>
    </div>`;

  const rteEditor = (field, who, html, placeholder) => {
    const id = `eoy-rte-${who}-${field}`;
    const isEmpty = !html || html.replace(/<[^>]*>/g,'').trim().length === 0;
    return `
      <div style="border:1px solid var(--border);border-radius:8px;overflow:hidden;background:var(--surface)">
        ${rteToolbar(field, who)}
        <div id="${id}" contenteditable="true"
          onblur="saveEoyHtml('${field}','${who}',this.innerHTML)"
          onfocus="this.classList.remove('rte-empty')"
          onkeydown="if(this.textContent.trim().length>0||event.key!='Enter')this.classList.remove('rte-empty')"
          class="eoy-rte${isEmpty ? ' rte-empty' : ''}"
          data-placeholder="${placeholder}"
          style="min-height:240px;padding:14px 16px;font-size:13.5px;line-height:1.75;color:var(--text);outline:none;overflow-y:auto"
        >${html}</div>
      </div>`;
  };

  // ---- Manager insights ----
  const allCats = EOY_CATEGORY_GROUPS.flatMap(g => g.categories);
  const goingWellCats  = allCats.filter(c => parseInt(mgrRatings[c.id]) >= 4);
  const toWorkOnCats   = allCats.filter(c => parseInt(mgrRatings[c.id]) > 0 && parseInt(mgrRatings[c.id]) <= 3);
  const hasMgrRatings  = Object.values(mgrRatings).some(v => v);
  const hasMgrText     = mgrAccomplishHtml || mgrImproveHtml;
  const hasAnyMgrData  = hasMgrRatings || hasMgrText;

  const stripHtml = (html) => (html || '').replace(/<[^>]*>/g, ' ').replace(/\s{2,}/g, ' ').trim();
  const textExcerpt = (html, max = 180) => {
    const plain = stripHtml(html);
    if (!plain) return '';
    return plain.length > max ? plain.slice(0, max).replace(/\s+\S*$/, '') + '…' : plain;
  };

  const insightBullets = (cats, isStrength) => cats.slice(0, 5).map(c => {
    const n = parseInt(mgrRatings[c.id]);
    const rc = EOY_RATING_CONFIG[n];
    const insight = EOY_CAT_INSIGHTS[c.id];
    const text = insight ? (isStrength ? insight.strength : insight.growth) : c.label;
    return `<li style="padding:6px 0" class="insight-bullet">
        <div style="font-size:12px;font-weight:700;color:#1F2937;margin-bottom:2px">${escHtml(c.label)}</div>
        <div style="font-size:12.5px;color:#4B5563;line-height:1.55">${text}</div>
    </li>`;
  }).join('');

  const insightTile = (title, dotColor, tileBorderColor, cats, textHtml, emptyMsg, isStrength) => {
    const hasCats = cats.length > 0;
    const excerpt = textExcerpt(textHtml);
    return `
      <div style="background:var(--surface);border:1px solid var(--border);border-left:3px solid ${tileBorderColor};border-radius:var(--radius);padding:16px 18px;box-shadow:var(--shadow-sm)">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:${tileBorderColor};margin-bottom:10px">${title}</div>
        ${hasCats ? `<ul style="list-style:none;padding:0;margin:0 0 ${excerpt ? '12px' : '0'}">${insightBullets(cats, isStrength)}</ul>` : ''}
        ${excerpt ? `<p style="font-size:12px;color:var(--text-muted);line-height:1.6;margin:0;border-top:${hasCats ? '1px solid var(--border)' : 'none'};padding-top:${hasCats ? '10px' : '0'}">${escHtml(excerpt)}</p>` : ''}
        ${!hasCats && !excerpt ? `<p style="font-size:13px;color:var(--text-muted);margin:0">${emptyMsg}</p>` : ''}
      </div>`;
  };

  const managerInsights = hasAnyMgrData ? `
    <div style="margin-bottom:28px">
      <div class="review-cat-title" style="margin-bottom:12px">Manager Insights</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
        ${insightTile('Strengths',    '#059669', '#059669', goingWellCats, mgrAccomplishHtml, 'No categories rated 4–5 yet.', true)}
        ${insightTile('Growth Areas', '#D97706', '#D97706', toWorkOnCats,  mgrImproveHtml,    'No categories rated 1–3 yet.', false)}
      </div>
    </div>` : '';

  return `
    <div style="max-width:960px">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:12px">
          <h2 style="font-size:22px;font-weight:800;color:var(--text);margin:0">Performance Review</h2>
          <select onchange="saveEoyYear(this.value)" style="font-size:14px;font-weight:600;padding:4px 8px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text)">
            ${[2026,2025,2024,2023].map(y => `<option value="${y}" ${r.year === String(y) ? 'selected' : ''}>${y}</option>`).join('')}
          </select>
        </div>
        <button class="btn btn-secondary" onclick="state.clearConfirm='review';render()" style="font-size:13px;display:flex;align-items:center;gap:6px;white-space:nowrap;color:#DC2626;border-color:#DC2626">${icon('trash-2',14,'#DC2626')} Clear all</button>
      </div>

      ${managerInsights}

      <!-- TWA score inputs -->
      <div style="margin-bottom:24px">
        <div class="review-cat-title" style="margin-bottom:12px">Total Weighted Average</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
          <div class="analysis-card" style="margin:0">
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--primary);margin-bottom:8px">Self</div>
            <input type="number" step="0.001" min="1" max="5" value="${selfTWA}" onblur="saveEoyScore('self',this.value)" placeholder="e.g. 3.5" style="width:100%;font-size:28px;font-weight:800;color:var(--text);border:none;border-bottom:2px solid var(--border);outline:none;background:transparent;padding:4px 0" />
          </div>
          <div class="analysis-card" style="margin:0">
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#5B21B6;margin-bottom:8px">Manager</div>
            <input type="number" step="0.001" min="1" max="5" value="${mgrTWA}" onblur="saveEoyScore('manager',this.value)" placeholder="e.g. 3.5" style="width:100%;font-size:28px;font-weight:800;color:var(--text);border:none;border-bottom:2px solid var(--border);outline:none;background:transparent;padding:4px 0" />
          </div>
        </div>
      </div>

      <!-- Ratings table -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);margin-bottom:24px;overflow:hidden;box-shadow:var(--shadow-sm)">
        <div style="display:grid;grid-template-columns:1fr 220px 220px 72px;padding:8px 16px;background:var(--bg);border-bottom:2px solid var(--border)">
          <span style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em">Category</span>
          <span style="font-size:11px;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:.05em">Self Rating</span>
          <span style="font-size:11px;font-weight:700;color:#5B21B6;text-transform:uppercase;letter-spacing:.05em">Manager Rating</span>
          <span style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;text-align:center">Gap</span>
        </div>
        ${tableRows}
      </div>

      <!-- Item 11: Recognition & Accomplishments -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);margin-bottom:16px;overflow:hidden;box-shadow:var(--shadow-sm)">
        <div style="padding:14px 20px;border-bottom:1px solid var(--border)">
          <div style="font-size:15px;font-weight:700;color:var(--text)"><span style="color:var(--text-muted);font-weight:600;margin-right:8px">(11)</span>Recognition &amp; Accomplishments</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr">
          <div style="padding:16px 20px;border-right:1px solid var(--border)">
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--primary);margin-bottom:10px">Self</div>
            ${rteEditor('accomplishments','self',selfAccomplishHtml,'Share your proudest accomplishments...')}
          </div>
          <div style="padding:16px 20px">
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#7C3AED;margin-bottom:10px">Manager</div>
            ${rteEditor('accomplishments','manager',mgrAccomplishHtml,'Paste manager feedback on accomplishments...')}
          </div>
        </div>
      </div>

      <!-- Item 12: Areas for Development -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);margin-bottom:32px;overflow:hidden;box-shadow:var(--shadow-sm)">
        <div style="padding:14px 20px;border-bottom:1px solid var(--border)">
          <div style="font-size:15px;font-weight:700;color:var(--text)"><span style="color:var(--text-muted);font-weight:600;margin-right:8px">(12)</span>Areas for Development</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr">
          <div style="padding:16px 20px;border-right:1px solid var(--border)">
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--primary);margin-bottom:10px">Self</div>
            ${rteEditor('improvements','self',selfImproveHtml,'Paste your areas for development...')}
          </div>
          <div style="padding:16px 20px">
            <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#7C3AED;margin-bottom:10px">Manager</div>
            ${rteEditor('improvements','manager',mgrImproveHtml,'Paste manager feedback on development areas...')}
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
