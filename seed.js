(function () {
  var seed = {
    "dch_profiles": [
      { "name": "Jordan Kim",      "role": "Product Designer",           "id": "p_jordan_001",    "created": "2026-01-10T09:00:00.000Z", "isManager": false },
      { "name": "Marcus Webb",     "role": "Senior Product Designer",    "id": "p_marcus_001",    "created": "2025-09-15T09:00:00.000Z", "isManager": false },
      { "name": "Elena Santos",    "role": "Principal Product Designer",  "id": "p_elena_001",     "created": "2025-06-01T09:00:00.000Z", "isManager": true },
      { "name": "Tyler Chen",      "role": "UX Researcher",              "id": "p_tyler_001",     "created": "2025-11-03T09:00:00.000Z", "isManager": false }
    ],
    "dch_current_profile": "p_elena_001",

    // ── JORDAN KIM — Product Designer (early career, ~2 years) ────────────────
    "dch_data_p_jordan_001": {
      "assessments": {
        "job_skills_1":  { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Applies HCD principles when guided; needs to do it more proactively", "goals": "Shadow senior designers during discovery phases. Read 'The Design of Everyday Things' and apply concepts to current sprint.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_2":  { "managerLevel": "Contributor",  "selfLevel": "Learner",      "evidence": "Has participated in moderated interviews but not led one independently yet", "goals": "Lead 2 user interviews solo this quarter with manager observation.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_3":  { "managerLevel": "Learner",      "selfLevel": "Learner",      "evidence": "Still learning screener structure — tends to write leading questions", "goals": "Review 3 existing screeners and identify bias. Write a new screener for upcoming study.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_7":  { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Presentations are clear but sometimes bury the headline. Working on 'so what' framing.", "goals": "Practice pyramid principle structure in next 2 readouts.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_10": { "managerLevel": "Learner",      "selfLevel": "Contributor",  "evidence": "Knows the principles but doesn't always apply them without prompting in reviews", "goals": "Call out at least one principle by name in each weekly design critique.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_11": { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Good annotations on screens but rationale docs are sparse", "goals": "Add a 'design rationale' section to every Figma spec this quarter.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_12": { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Strong visual instincts — one of the highlights. Icons, color, and layout feel polished for experience level.", "goals": "Push toward motion and micro-interaction polish in Q2.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_16": { "managerLevel": "Contributor",  "selfLevel": "Independent",  "evidence": "Flows are logical but don't yet account for edge cases or error states reliably", "goals": "Add error states and edge cases to every user flow before handing off.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_17": { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Strong visual polish — components are tight, spacing is consistent", "goals": "", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_18": { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Files get messy mid-sprint. Needs a more consistent naming convention.", "goals": "Adopt team naming standards before end of January. Do a file audit monthly.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_19": { "managerLevel": "Learner",      "selfLevel": "Learner",      "evidence": "Hasn't applied WCAG consistently — color contrast misses in 2 recent designs", "goals": "Complete accessibility fundamentals course and get Figma a11y plugin set up.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_21": { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Prototypes are functional but mostly click-through. Hasn't explored variables or interactions yet.", "goals": "Build one mid-fidelity interactive prototype using Figma variables this quarter.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_22": { "managerLevel": "Contributor",  "selfLevel": "Independent",  "evidence": "Gets along well with engineers but specs sometimes missing mobile states", "goals": "Do a post-dev review with an engineer after each build to catch handoff gaps.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_24": { "managerLevel": "Independent",  "selfLevel": "Expert",       "evidence": "Actively experimenting with AI tools — brought AI image gen and v0 exploration to the team", "goals": "", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "project_management_2": { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Participates in sprint ceremonies but doesn't yet proactively flag blockers early", "goals": "Raise blockers in standup before they become delays.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "project_management_4": { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Tends to underestimate complexity — missed a deadline in Q4 due to scope creep", "goals": "Practice breaking work into smaller tasks with time estimates before starting each feature.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "project_management_5": { "managerLevel": "Learner",      "selfLevel": "Contributor",  "evidence": "Still learning how to prioritize competing asks from PMs", "goals": "Build a personal task priority matrix and review with manager weekly.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "collaboration_2":  { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Gives thoughtful written feedback in Figma comments. Strong in async communication.", "goals": "", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "collaboration_4":  { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Tends to go quiet in larger group settings. More confident 1:1.", "goals": "Share at least one insight or question in each weekly design review.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "collaboration_5":  { "managerLevel": "Independent",  "selfLevel": "Expert",       "evidence": "Always engaged and participates fully in design jams and critiques", "goals": "", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "collaboration_7":  { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Starting to share learnings in Slack — needs to do this more proactively", "goals": "Post one learning or resource in #design-team channel every 2 weeks.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "influence_5":  { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Strong customer empathy — always asking about user impact in sprint planning", "goals": "", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "influence_9":  { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Consistently advocates for the user perspective even when pushed back on by PMs", "goals": "", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_4":  { "managerLevel": "Learner",      "selfLevel": "Learner",      "evidence": "Has synthesized notes from sessions but hasn't led a full analysis cycle independently", "goals": "Shadow Tyler on the next synthesis sprint. Practice affinity mapping on upcoming study.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_5":  { "managerLevel": "Learner",      "selfLevel": "Contributor",  "evidence": "Has participated in design jams as an attendee — hasn't facilitated yet", "goals": "Co-facilitate one internal workshop with a senior designer this quarter.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_6":  { "managerLevel": "Learner",      "selfLevel": "Learner",      "evidence": "Limited exposure to quant data. Relies on PM to interpret analytics.", "goals": "Complete the internal data literacy module. Start reviewing analytics dashboards weekly.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_8":  { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Participated in 2 design sprints — good energy and contribution. Not yet leading sessions.", "goals": "Plan and run one team brainstorm session in Q2.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_9":  { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Applies design thinking basics but doesn't yet flex between methods situationally", "goals": "Read 'Sprint' by Jake Knapp. Apply double-diamond framing to next feature kick-off.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_13": { "managerLevel": "Learner",      "selfLevel": "Contributor",  "evidence": "Designs well within feature scope but hasn't yet connected work to upstream/downstream systems", "goals": "Map the end-to-end merchant flow for the feature you're currently working on.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_14": { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Uses design system components correctly. Hasn't contributed new patterns yet.", "goals": "Identify one repeating UI pattern in your work and propose it as a component candidate.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_15": { "managerLevel": "Learner",      "selfLevel": "Learner",      "evidence": "Too early in career for formal design strategy. Focus is on delivery and craft for now.", "goals": "Attend 2 roadmap planning sessions as an observer this half.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_20": { "managerLevel": "Learner",      "selfLevel": "Learner",      "evidence": "Consumes the design system well but hasn't contributed to it yet", "goals": "Join one design system working session this quarter.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "job_skills_23": { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Specs exist for all screens but often missing mobile breakpoints and edge state annotations", "goals": "Add a checklist to your Figma template: mobile, empty state, error state, loading state.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "project_management_1": { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Follows the team's design process well but doesn't yet proactively shape or improve it", "goals": "", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "project_management_3": { "managerLevel": "Learner",      "selfLevel": "Contributor",  "evidence": "Scoping is a known growth area — tends to take on work without fully breaking it down first", "goals": "Before starting any new feature, write a scope doc with acceptance criteria and get sign-off.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "collaboration_1":  { "managerLevel": "Learner",      "selfLevel": "Contributor",  "evidence": "Still building cross-functional relationships and confidence. Mostly operates within the design team.", "goals": "Set up a monthly coffee chat with someone in engineering or PM.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "collaboration_3":  { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Interacts with stakeholders in reviews but hasn't yet managed stakeholder relationships independently", "goals": "Own the design communication for one stakeholder in an upcoming project.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "collaboration_6":  { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Handling first challenging sprint well — good attitude through a tough feedback cycle", "goals": "", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "collaboration_8":  { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Operates mostly within their squad. Cross-team work is limited so far.", "goals": "Attend one design review from another squad this quarter.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "collaboration_9":  { "managerLevel": "Learner",      "selfLevel": "Contributor",  "evidence": "Too early to suggest process changes — still internalizing the existing process", "goals": "", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "collaboration_10": { "managerLevel": "Learner",      "selfLevel": "Learner",      "evidence": "Still finding their footing on the team. Not yet in a position to drive team culture.", "goals": "", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "influence_1":  { "managerLevel": "Learner",      "selfLevel": "Contributor",  "evidence": "Has voiced a design perspective in 1:1 settings. Needs to build confidence to advocate in group settings.", "goals": "Raise one design concern in a group sprint planning or stakeholder session this quarter.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "influence_2":  { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Starting to engage with design community online. Attended one local UXPA event.", "goals": "Follow 5 design practitioners. Share one external resource with the team per month.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "influence_3":  { "managerLevel": "Learner",      "selfLevel": "Contributor",  "evidence": "Occasionally shares articles in Slack but hasn't led a learning session yet", "goals": "Present one design concept or case study to the team this half.", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "influence_4":  { "managerLevel": "Learner",      "selfLevel": "Learner",      "evidence": "Still building identity on the team. Team culture contribution will come naturally with time.", "goals": "", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "influence_6":  { "managerLevel": "Learner",      "selfLevel": "Learner",      "evidence": "Strategic thinking is a long-term development area. Focus right now is on craft and delivery.", "goals": "", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "influence_7":  { "managerLevel": "Learner",      "selfLevel": "Learner",      "evidence": "Too early in career to be a formal mentor. Focus is on being a great mentee first.", "goals": "", "lastUpdated": "2026-02-01T00:00:00.000Z" },
        "influence_8":  { "managerLevel": "Contributor",  "selfLevel": "Contributor",  "evidence": "Communication is clear but still tentative — often frames opinions as questions", "goals": "Practice stating design decisions with rationale first before inviting feedback.", "lastUpdated": "2026-02-01T00:00:00.000Z" }
      },
      "customResources": {},
      "coreValues": {
        "empathy":  { "managerRating": 4, "notes": "Jordan's natural empathy shines through in their design work — consistently advocates for user needs. Still developing the skill of de-escalating tension in cross-functional settings." },
        "teamwork": { "managerRating": 3, "notes": "Meets expectations for their level. Still finding their footing on the team. Shows up reliably but not yet driving collaborative initiatives independently." },
        "agility":  { "managerRating": 4, "notes": "One of Jordan's standout traits — adapts quickly, asks great questions, and has a strong growth mindset. Eager to try new approaches and learn from mistakes." },
        "humility": { "managerRating": 5, "notes": "Exceptional self-awareness for someone at this stage of their career. Actively seeks feedback, acknowledges knowledge gaps openly, and never lets ego get in the way of learning." }
      },
      "personalGoals": [
        { "id": "pg_jordan_1", "goal": "Lead 2 moderated user interviews independently without manager observation by end of Q2", "kpi": "2 solo interviews completed and debriefed with the team", "timeFrame": "Q2 2026", "status": "in_progress", "notes": "First solo session scheduled for April 8. Marcus has agreed to review the discussion guide beforehand." },
        { "id": "pg_jordan_2", "goal": "Achieve WCAG 2.1 AA compliance on all new designs by auditing each screen before handoff", "kpi": "Zero color contrast or focus-order violations flagged in dev QA for 3 consecutive sprints", "timeFrame": "Q2 2026", "status": "in_progress", "notes": "Completed the Figma accessibility plugin setup. Started checking contrast ratios in the current payments redesign." },
        { "id": "pg_jordan_3", "goal": "Propose and shepherd at least one new UI pattern into the design system by end of Q2", "kpi": "Component proposal submitted, reviewed, and merged into the design system library", "timeFrame": "Q2 2026", "status": "not_started", "notes": "Identified a candidate: the inline validation pattern used across multiple forms. Needs to write up the proposal doc." }
      ],
      "growthThemeScore": 3.2,
      "growthThemes": [
        {
          "id": "gt_jordan_1",
          "theme": "Research Independence",
          "today": "Participates in research sessions but relies on senior guidance for screener design, discussion guides, and synthesis. Often observes rather than leads.",
          "better": "Independently plans and leads moderated studies end-to-end. Synthesizes findings into actionable insights and presents them to the team without coaching.",
          "best": "Drives the research agenda for a full product area. Mentors others on methodology and contributes to raising the team's research standards.",
          "indicators": ["Solo study completion rate", "Synthesis doc quality", "Insight-to-decision traceability"],
          "dependencies": ["Participant recruitment access", "Dovetail license", "Manager availability for review sign-off"],
          "collaborators": ["Tyler Chen (UX Research)", "Design Manager", "PM"]
        },
        {
          "id": "gt_jordan_2",
          "theme": "Craft & Accessibility",
          "today": "Visual execution is strong but accessibility is applied inconsistently — contrast misses and missing focus states still appear at handoff.",
          "better": "Accessibility is a built-in checkpoint before every handoff. Zero violations in dev QA for 3+ consecutive sprints. Proactively catches issues in design reviews.",
          "best": "Leads accessibility culture on the team. Reviews others' work for a11y issues, contributes patterns to the design system, and sets the standard for inclusive design.",
          "indicators": ["A11y violations in dev QA", "Design system contribution count", "Component reuse rate"],
          "dependencies": ["Figma accessibility plugin", "Engineering QA process", "Design system maturity"],
          "collaborators": ["Marcus Webb", "Engineering", "Design system team"]
        },
        {
          "id": "gt_jordan_3",
          "theme": "Group Communication",
          "today": "Communicates confidently in 1:1 and small group settings but tends to go quiet in larger cross-functional reviews. Frames opinions as questions rather than positions.",
          "better": "Consistently shares a design perspective in group settings. States design rationale with confidence and invites critique rather than avoiding it.",
          "best": "A trusted voice in cross-functional rooms. Facilitates discussions, advocates for the user when challenged, and models clear, confident communication for peers.",
          "indicators": ["Critique participation rate", "Cross-functional presentation count", "Peer feedback quality"],
          "dependencies": ["Team psychological safety", "Meeting cadence and structure"],
          "collaborators": ["Design team", "PM", "Cross-functional partners"]
        }
      ]
    },
    "dch_outreach_p_jordan_001": {
      "hveMerchant": "Sunrise Deli",
      "entries": [
        { "date": "2026-01-22", "merchant": "Sunrise Deli",    "type": "hve",     "notes": "First HVE check-in. Owner walked through how they use Express for takeout orders. Frustrated with the tip flow on the customer-facing receipt.", "dovetailUrl": "https://dovetail.com/projects/sunrise-deli-hve", "id": "ot_jordan_001" },
        { "date": "2026-02-18", "merchant": "Vinyl District",  "type": "general", "notes": "General outreach — new merchant onboarding observation. Took notes on confusion in the first-time setup flow.", "dovetailUrl": "", "id": "ot_jordan_002" }
      ]
    },

    // ── MARCUS WEBB — Senior UX Designer (~5 years) ────────────────────────────
    "dch_data_p_marcus_001": {
      "assessments": {
        "job_skills_1":  { "managerLevel": "Expert",       "selfLevel": "Expert",       "evidence": "Frames problems structurally before briefs exist. Ran the Q1 discovery sprint for the reporting module.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_2":  { "managerLevel": "Expert",       "selfLevel": "Independent",  "evidence": "Fluent in qual and quant research. Led 3 moderated studies last half.", "goals": "Get more reps with diary studies and longitudinal research methods.", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_3":  { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Screeners are clean and unbiased. Could push further on recruiting criteria precision.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_7":  { "managerLevel": "Expert",       "selfLevel": "Expert",       "evidence": "Consistently strong storytelling — readouts land well with execs. Great at the 'so what'.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_8":  { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Ran a cross-functional ideation session in Q4 — good energy but ran over time", "goals": "Tighten facilitation timing. Try a '1-2-4-all' format next workshop.", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_10": { "managerLevel": "Expert",       "selfLevel": "Independent",  "evidence": "Design principles are consistently applied and cited in reviews. Pushes the team to do the same.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_11": { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Rationale docs are solid. Could be more concise for async consumption.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_12": { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Solid craft. Sometimes priorities speed over visual refinement — intentional tradeoff.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_13": { "managerLevel": "Expert",       "selfLevel": "Expert",       "evidence": "Thinks across systems — mapped the entire merchant lifecycle as a shared resource for the team", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_15": { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Has a strong point of view on strategy — growing into a more formal voice in product roadmap discussions", "goals": "Participate in at least 2 quarterly planning sessions as a design voice.", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_16": { "managerLevel": "Expert",       "selfLevel": "Expert",       "evidence": "IA work on the nav restructure was excellent. Engineers and PMs reference his flows.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_17": { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Clean, consistent work. Not his top skill but above bar.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_18": { "managerLevel": "Expert",       "selfLevel": "Expert",       "evidence": "Files are impeccably organized. Sets the standard the team references.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_19": { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "WCAG 2.1 AA compliance built into workflow. Could push further into ARIA and screen reader testing.", "goals": "Run a screen reader audit on one feature per quarter.", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_20": { "managerLevel": "Independent",  "selfLevel": "Expert",       "evidence": "Active contributor to the design system — proposed and shipped 4 new components this year", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_21": { "managerLevel": "Expert",       "selfLevel": "Expert",       "evidence": "Prototypes are highly interactive — uses variables, conditionals, and smart animate. Used in usability testing.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_22": { "managerLevel": "Expert",       "selfLevel": "Expert",       "evidence": "Engineering partnership is a standout. Zero handoff confusion in last 3 sprints.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_24": { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Uses Cursor and AI-assisted prototyping. Shares findings in team channels.", "goals": "Prototype one feature using code-based tooling (v0 or similar) this half.", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "project_management_1": { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Runs discovery and delivery phases smoothly. Strong process instincts.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "project_management_2": { "managerLevel": "Expert",      "selfLevel": "Independent", "evidence": "Agile rhythm is second nature. Could mentor more junior designers on sprint hygiene.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "project_management_4": { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Consistent delivery. Occasionally underestimates review rounds needed with stakeholders.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "project_management_5": { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Tier prioritization framework used as model for the whole team.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "collaboration_1":  { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Strong cross-functional partner. Engineering and PM trust his judgment.", "goals": "Take a more formal lead role in Q2 discovery sprint.", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "collaboration_2":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Feedback is direct, specific, and kind. Others actively seek his critique.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "collaboration_3":  { "managerLevel": "Expert",      "selfLevel": "Independent", "evidence": "Builds stakeholder trust quickly. Strong with engineering, still developing exec presence.", "goals": "Present design strategy directly to VPs in Q2.", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "collaboration_4":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Asks the best questions in the room. Naturally draws out quieter voices.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "collaboration_7":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Runs bi-weekly knowledge share sessions. Proactively documents learnings in Notion.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "collaboration_9":  { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Proposed improvements to design review process that reduced meeting time by 30%.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "influence_1":  { "managerLevel": "Expert",       "selfLevel": "Independent", "evidence": "Vocal design advocate across the org. Regularly presents design perspective in all-hands.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "influence_3":  { "managerLevel": "Expert",       "selfLevel": "Expert",      "evidence": "Wrote the internal guide on research-to-design handoff. Used by 3 other teams.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "influence_5":  { "managerLevel": "Expert",       "selfLevel": "Expert",      "evidence": "Every design decision is explicitly tied to a user need. Models this behavior for the team.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "influence_7":  { "managerLevel": "Independent",  "selfLevel": "Independent", "evidence": "Informally mentoring Jordan — doing well but not structured yet", "goals": "Set up a formal bi-weekly mentorship cadence with Jordan this quarter.", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "influence_8":  { "managerLevel": "Expert",       "selfLevel": "Independent", "evidence": "Communicates with conviction. Rare that he is challenged without good reason.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "influence_9":  { "managerLevel": "Expert",       "selfLevel": "Expert",      "evidence": "Won the Customer-Centric award Q3 2025. A consistent model for the team.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_4":  { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Leads synthesis on mixed-method studies. Clear frameworks and clean outputs.", "goals": "Explore longitudinal analysis — hasn't done a diary study synthesis yet.", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_5":  { "managerLevel": "Expert",       "selfLevel": "Expert",       "evidence": "Workshop design is a standout. Runs tight sessions with clear outcomes — teams come back for more.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_6":  { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Comfortable reading and presenting quant data. Partners well with data team.", "goals": "Get more hands-on with SQL for self-serve analytics.", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_9":  { "managerLevel": "Expert",       "selfLevel": "Independent",  "evidence": "Design thinking is embedded in how he approaches every problem. Coaches junior designers on it.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_14": { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Proposes new patterns thoughtfully — balances component reuse with new design needs.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "job_skills_23": { "managerLevel": "Expert",       "selfLevel": "Expert",       "evidence": "Specs are impeccable — annotations, states, mobile, edge cases all covered. Engineers rarely have questions.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "project_management_3": { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Scopes projects well. Occasionally needs to revisit estimates when research adds complexity.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "collaboration_5":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Always present and engaged in critiques. Gives the most actionable feedback in the room.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "collaboration_6":  { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Steady under pressure. Handled the Q3 pivot gracefully and kept the team focused.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "collaboration_8":  { "managerLevel": "Expert",      "selfLevel": "Independent", "evidence": "Well-connected across product, eng, and data. First person others call for cross-team collaboration.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "collaboration_10": { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Contributes to team culture through knowledge shares and mentorship. Not formally leading it yet.", "goals": "Propose one team ritual or norm improvement this quarter.", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "influence_2":  { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Active on LinkedIn and in Slack communities. Thinking about speaking at a local event.", "goals": "Apply to speak at a design meetup or virtual conference this year.", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "influence_4":  { "managerLevel": "Independent",  "selfLevel": "Independent",  "evidence": "Contributes to psychological safety on the team — creates space for others to share openly.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" },
        "influence_6":  { "managerLevel": "Expert",       "selfLevel": "Expert",       "evidence": "Has strong strategic instincts — regularly connects design decisions to business outcomes in exec reviews.", "goals": "", "lastUpdated": "2026-01-15T00:00:00.000Z" }
      },
      "customResources": {},
      "coreValues": {
        "empathy":  { "managerRating": 3, "notes": "Marcus is professional and considerate in his interactions. Meets expectations consistently. Opportunity to be more proactive about inclusive practices during high-pressure moments." },
        "teamwork": { "managerRating": 4, "notes": "A go-to collaborator across product and engineering. Well-connected org-wide. Known as the first call when cross-team collaboration is needed." },
        "agility":  { "managerRating": 3, "notes": "Solid and dependable. Marcus executes well within established processes. Growth area is proposing change — tends to optimize existing approaches rather than challenge them." },
        "humility": { "managerRating": 3, "notes": "Demonstrates appropriate humility and shares credit fairly. Can occasionally be resistant to feedback on established patterns. Working on openness when his approaches are challenged." }
      },
      "personalGoals": [
        { "id": "pg_marcus_1", "goal": "Present a design strategy recommendation directly to VP-level stakeholders during Q2 planning", "kpi": "At least one VP-level design presentation delivered with documented follow-up actions", "timeFrame": "Q2 2026", "status": "in_progress", "notes": "Scheduled to present the navigation restructure rationale to the VP of Product in April. Prepping the deck now with Elena's feedback." },
        { "id": "pg_marcus_2", "goal": "Formalize bi-weekly mentorship cadence with Jordan Kim with a defined growth agenda", "kpi": "6 mentorship sessions completed by end of Q2 with a written growth plan for Jordan on file", "timeFrame": "Q2 2026", "status": "in_progress", "notes": "First session held March 18. Agreed on focus areas: research methods and stakeholder communication. Calendar invites sent through June." },
        { "id": "pg_marcus_3", "goal": "Apply to speak at one design conference or industry meetup before end of Q3", "kpi": "At least one conference talk submission submitted; acceptance or rejection documented", "timeFrame": "Q2 2026", "status": "not_started", "notes": "Shortlisted Config 2026 and UX London. Topic idea: the research-to-design handoff system he built with Tyler." }
      ],
      "growthThemeScore": 3.5,
      "growthThemes": [
        {
          "id": "gt_marcus_1",
          "theme": "Executive Communication",
          "today": "Communicates design work effectively within the design team but rarely presents to VP-level or above independently. Tends to over-explain rather than leading with impact.",
          "better": "Delivers crisp, outcome-focused presentations to VP-level stakeholders. Frames design decisions in business terms and handles pushback with confidence.",
          "best": "A trusted design voice at the leadership table. Proactively shapes strategy conversations and elevates design's perceived value across the org.",
          "indicators": ["VP-level presentation count", "Post-presentation follow-up action rate", "Design influence on roadmap decisions"],
          "dependencies": ["Access to leadership forums", "Elena's sponsorship", "CPO/VP availability"],
          "collaborators": ["Elena Santos", "VP of Product", "CPO", "PMM"]
        },
        {
          "id": "gt_marcus_2",
          "theme": "Systems Thinking",
          "today": "Designs excellent individual features but doesn't consistently connect work to upstream/downstream systems or org-wide patterns. Relies on existing frameworks rather than questioning them.",
          "better": "Regularly maps how feature designs affect broader product flows. Proposes system-level improvements and identifies when an existing pattern needs to evolve.",
          "best": "Drives the product design system strategy. Sees the full ecosystem and proactively closes gaps between product areas, platforms, and user journeys.",
          "indicators": ["Cross-product patterns documented", "Design system contributions", "Pattern reuse rate across squads"],
          "dependencies": ["Design system maturity", "Cross-squad visibility", "PM alignment on system investment"],
          "collaborators": ["Design system team", "Engineering", "Tyler Chen", "Other product designers"]
        },
        {
          "id": "gt_marcus_3",
          "theme": "Mentorship & Coaching",
          "today": "Provides helpful ad hoc feedback to junior designers but mentorship is reactive. No formal cadence or structured growth plan with mentees.",
          "better": "Runs a consistent bi-weekly mentorship cadence with a defined agenda. Tracks growth against a written development plan and adjusts coaching based on outcomes.",
          "best": "A sought-after mentor across the design org. Builds others' capabilities systematically and creates lasting growth that shows in the work and careers of people they've coached.",
          "indicators": ["Mentorship session consistency", "Mentee skill growth trajectory", "Written growth plan on file"],
          "dependencies": ["Protected time for mentorship", "Mentee engagement and availability"],
          "collaborators": ["Jordan Kim", "Elena Santos", "HRBP"]
        }
      ]
    },
    "dch_outreach_p_marcus_001": {
      "hveMerchant": "Metro Fitness",
      "entries": [
        { "date": "2026-01-14", "merchant": "Metro Fitness",      "type": "hve",     "notes": "Monthly check-in. Owner highlighted that the membership billing flow is confusing for their front desk staff. Logging a follow-up study.", "dovetailUrl": "https://dovetail.com/projects/metro-fitness-hve-q1", "id": "ot_marcus_001" },
        { "date": "2026-02-06", "merchant": "Anchor Brewing Co",  "type": "general", "notes": "Sat in on a Zoom with their ops manager. Express is their primary POS for taproom sales. Explored pain points around split transactions.", "dovetailUrl": "", "id": "ot_marcus_002" },
        { "date": "2026-02-20", "merchant": "Metro Fitness",      "type": "hve",     "notes": "Follow-up HVE — brought in a quick prototype of a simplified billing summary screen. Positive reaction. Capturing feedback in Dovetail.", "dovetailUrl": "https://dovetail.com/projects/metro-fitness-hve-q1", "id": "ot_marcus_003" },
        { "date": "2026-03-10", "merchant": "The Nook Bookstore", "type": "general", "notes": "New merchant reachout. Walked through their first week on Express. Questions about inventory integration.", "dovetailUrl": "", "id": "ot_marcus_004" }
      ]
    },

    // ── ELENA SANTOS — Lead Product Designer (~7 years) ───────────────────────
    "dch_data_p_elena_001": {
      "assessments": {
        "job_skills_1":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Sets the HCD standard for the org. Ran a company-wide design thinking workshop attended by 60 people.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_2":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Mentors the team on research methods. Has a published internal playbook.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_3":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Screeners are used as team templates. Trains others on bias identification.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_5":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Led 8 workshops across product and ops teams in 2025. Facilitates with clear outcomes.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_7":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Executive presence in readouts is exceptional. Insights land and drive decisions.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_10": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Authored the team's design principles document. Coaches others on application.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_11": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Rationale is always documented and referenced in PRDs. Sets the bar.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_12": { "managerLevel": "Expert", "selfLevel": "Independent", "evidence": "Strong visual sensibility. Prefers to focus energy on strategy but craft is excellent.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_13": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Owns the product-level systems map. Instrumental in aligning 4 teams on a shared navigation model.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_15": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Design strategy input directly shapes Q2 roadmap. Seat at the table with CPO.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_16": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "IA work is organization-wide referenced. Owns the global navigation architecture.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_17": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Sets visual quality bar for the product. Does regular design quality reviews.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_18": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "File hygiene standards she introduced are now required for all project kicks.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_19": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "WCAG 2.2 and inclusive design lead for the product. Runs quarterly a11y audits.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_20": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Core contributor to the design system. Owns the token and component governance process.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_21": { "managerLevel": "Expert", "selfLevel": "Independent", "evidence": "Prototyping is solid — prefers to delegate high-fidelity proto work to seniors while maintaining quality oversight.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_22": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Engineering collaboration is a model for the team. Zero escalations in the last year.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_24": { "managerLevel": "Expert", "selfLevel": "Independent", "evidence": "Runs monthly AI in design lunch-and-learns. Actively integrating tools into team workflow.", "goals": "Develop a team-wide AI tools policy and onboarding guide.", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "project_management_1": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Process excellence is a signature strength. Introduced double diamond hybrid used org-wide.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "project_management_2": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Runs sprint rhythms across 2 squads simultaneously. Zero missed sprint reviews.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "project_management_3": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Scoping accuracy is exceptional — estimates within 10% consistently.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "project_management_4": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Never misses deadlines. Sets the delivery culture tone for the design team.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "project_management_5": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Prioritization framework she built is now used by the entire design org.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "collaboration_1":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Leads cross-functional teams with authority and trust. First call for any product-wide alignment.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "collaboration_2":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Feedback culture she's built in the team has measurably improved output quality.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "collaboration_3":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Go-to person for exec and board-level design presentations. Trusted by leadership.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "collaboration_4":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Creates psychological safety in every room she's in. Teams share openly with her.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "collaboration_6":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Navigated a major org reorg with grace — kept team motivated through significant uncertainty.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "collaboration_7":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Hosts design all-hands, runs the internal design newsletter, maintains team wiki.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "collaboration_9":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Introduced retrospective format that's now used by the whole product org.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "influence_1":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Design advocacy at the exec level is a core strength. Has direct line to CPO.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "influence_2":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Speaks at 2-3 design conferences per year. Active mentor on ADPList.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "influence_3":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Produced 3 internal case studies used for team onboarding and design leadership training.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "influence_4":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Team culture NPS under her leadership is consistently highest in the product org.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "influence_5":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "User advocacy is embedded in everything she does. Won Customer-Centric award in 2024 and 2025.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "influence_6":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Drives strategic product conversations with conviction. CPO relies on her design perspective.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "influence_7":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Mentors 3 designers formally. Her mentees have been promoted at a 2x rate vs peers.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "influence_8":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Communicates with authority and warmth. Room listens when she speaks.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "influence_9":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Customer-centricity is her north star. Cited in 4 different team OKRs as a driver.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_4":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Leads org-level synthesis initiatives. Wrote the mixed-methods analysis guide used across 3 teams.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_6":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Partners with analytics to define KPIs for design outcomes. Fluent in quant storytelling.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_8":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Workshop design is a signature skill. Facilitation style is consistently cited in team retrospectives.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_9":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Brings design thinking into every stage — from problem definition to org strategy.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_14": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Owns the component governance process. Ensures patterns are documented, versioned, and adopted.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "job_skills_23": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Documentation standards she introduced are now the team template. Zero spec-related eng escalations.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "collaboration_5":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Runs the design critique program. Attendance and quality have doubled under her leadership.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "collaboration_8":  { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Cross-functional relationships span the entire org — product, eng, data, and ops all partner with her.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" },
        "collaboration_10": { "managerLevel": "Expert", "selfLevel": "Expert", "evidence": "Actively builds team culture — runs team rituals, celebrates wins, models psychological safety.", "goals": "", "lastUpdated": "2025-12-01T00:00:00.000Z" }
      },
      "customResources": {},
      "coreValues": {
        "empathy":  { "managerRating": 5, "notes": "Elena sets the standard. Her ability to hold space for different perspectives — especially in difficult cross-functional moments — is exceptional. Others model their behavior on hers." },
        "teamwork": { "managerRating": 5, "notes": "Creates sustainable bridges across the org. The critique program she built has become a model for how design and product collaborate. Elevates everyone around her." },
        "agility":  { "managerRating": 5, "notes": "Proactively drives change rather than reacting to it. Consistently proposes breakthrough approaches and brings the team along without losing buy-in." },
        "humility": { "managerRating": 4, "notes": "Elena shares credit generously and lifts others up. Rated 4 rather than 5 because at the Principal level, stepping back occasionally to let others lead is still a growth edge." }
      },
      "personalGoals": [
        { "id": "pg_elena_1", "goal": "Develop and publish a team-wide AI tools policy and onboarding guide by end of Q2", "kpi": "Policy document ratified by design leadership and onboarding guide used in at least one new-hire ramp", "timeFrame": "Q2 2026", "status": "in_progress", "notes": "First draft in progress. Collecting input from Marcus and Tyler on current AI tool usage. Targeting a team review in May." },
        { "id": "pg_elena_2", "goal": "Co-own the Q2 product roadmap with the CPO by contributing design strategy inputs to all major initiative briefs", "kpi": "Design strategy documented and signed off for 100% of Q2 roadmap initiatives before kickoff", "timeFrame": "Q2 2026", "status": "on_track", "notes": "Already embedded in 4 of 5 Q2 initiative briefs. Final brief (payments overhaul) brief session scheduled for April 2." },
        { "id": "pg_elena_3", "goal": "Run a design maturity assessment across the full product org and publish findings with recommended roadmap", "kpi": "Assessment completed with at least 80% participation from design-adjacent stakeholders; findings deck presented to CPO", "timeFrame": "Q2 2026", "status": "not_started", "notes": "Researching existing frameworks — looking at InVision's Design Maturity Model and Nielsen Norman's scale as starting points." }
      ],
      "growthThemeScore": 3.6,
      "growthThemes": [
        {
          "id": "gt_elena_1",
          "theme": "Org-Level Design Influence",
          "today": "Highly influential within the design team and with direct product partners. Strategic design voice is established at the team level but not yet consistently felt at the exec level.",
          "better": "Regularly shapes product strategy at the CPO level. Design perspectives are sought out — not just responded to — in major roadmap and investment decisions.",
          "best": "Design is embedded in the company's strategic language. Elena is a named voice in exec forums and design maturity across the org has measurably improved.",
          "indicators": ["Design-first initiative count", "Roadmap decisions citing design input", "CPO forum participation rate"],
          "dependencies": ["CPO sponsorship", "Company strategy stability", "Cross-functional trust in design"],
          "collaborators": ["CPO", "Product VPs", "HRBP", "ELT"]
        },
        {
          "id": "gt_elena_2",
          "theme": "Team & Org Development",
          "today": "Builds strong individual relationships and coaches well 1:1. Team capacity is growing, but a formal development operating system is still ad hoc.",
          "better": "A consistent team development cadence is in place. Growth reviews happen on schedule, skill gaps are tracked, and designers have clear visibility into advancement.",
          "best": "The design team is a talent magnet. Elena's development system produces promotions, strong retention, and designers who raise the bar org-wide.",
          "indicators": ["Team retention rate", "Promotion velocity", "Design team health survey scores"],
          "dependencies": ["Headcount investment", "Compensation alignment", "Leadership support"],
          "collaborators": ["HRBP", "ELT", "Design leads", "Recruiting"]
        },
        {
          "id": "gt_elena_3",
          "theme": "Scaling Design Process",
          "today": "Has introduced several high-impact frameworks but adoption is uneven. Some areas still operate without design process clarity.",
          "better": "Design process frameworks are documented, adopted across all squads, and iterated on based on feedback. New designers ramp into a clear, predictable way of working.",
          "best": "SpotOn's design process is a competitive advantage. External practitioners reference it and Elena is recognized for having built something replicable and scalable.",
          "indicators": ["Squad process adoption rate", "Time-to-ramp for new designers", "Process doc usage analytics"],
          "dependencies": ["Engineering and PM buy-in", "Tool stability (Figma, Jira)", "Leadership prioritization"],
          "collaborators": ["Engineering leads", "PM", "Design team", "Ops"]
        }
      ]
    },
    "dch_outreach_p_elena_001": {
      "hveMerchant": "Bloom Florist",
      "entries": [
        { "date": "2026-01-08",  "merchant": "Bloom Florist",     "type": "hve",     "notes": "Kick-off HVE relationship. Owner is a power user — daily reports, high transaction volume. Primary concern is the end-of-day reconciliation flow.", "dovetailUrl": "https://dovetail.com/projects/bloom-florist-hve", "id": "ot_elena_001" },
        { "date": "2026-01-24",  "merchant": "Court Street Café", "type": "general", "notes": "Outreach call with manager. They use Express exclusively for mobile orders. Big pain point: customer-facing digital receipts.", "dovetailUrl": "", "id": "ot_elena_002" },
        { "date": "2026-02-10",  "merchant": "Bloom Florist",     "type": "hve",     "notes": "Monthly HVE check-in. Reviewed reconciliation prototype — very positive. Owner volunteered to be a beta tester for the new flow.", "dovetailUrl": "https://dovetail.com/projects/bloom-florist-hve", "id": "ot_elena_003" },
        { "date": "2026-02-27",  "merchant": "Summit Hardware",   "type": "general", "notes": "Shadowed front-desk staff during a Saturday rush. High card-present volume. Observed 3 timeout errors — logging as bug report.", "dovetailUrl": "https://dovetail.com/projects/summit-hardware-obs", "id": "ot_elena_004" },
        { "date": "2026-03-12",  "merchant": "Bloom Florist",     "type": "hve",     "notes": "Q1 wrap-up conversation. Owner satisfied with progress on reconciliation. New ask: better bulk refund tooling for event season.", "dovetailUrl": "https://dovetail.com/projects/bloom-florist-hve", "id": "ot_elena_005" }
      ]
    },

    // ── TYLER CHEN — UX Researcher (~3 years) ─────────────────────────────────
    "dch_data_p_tyler_001": {
      "assessments": {
        "job_skills_1":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Deep HCD fluency. Trains the design team on problem framing and JTBD.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_2":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "This is the core strength. Runs studies independently, end to end. 12 studies shipped in 2025.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_3":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Screeners are airtight. Recruiting criteria precise and replicable.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_4":  { "managerLevel": "Expert",      "selfLevel": "Independent", "evidence": "Quant synthesis is strong. Still growing confidence presenting to data-heavy audiences.", "goals": "Take the internal data storytelling workshop in Q2.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_5":  { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Runs effective synthesis workshops. Facilitation timing and energy management still developing.", "goals": "Facilitate 2 cross-functional workshops this half with a clear agenda and outcome.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_7":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Insight storytelling is a top skill. Readouts are clear, visual, and drive action.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_9":  { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Solid design thinking applied to research problems. Opportunity to embed more in ideation phases.", "goals": "Join one ideation sprint per quarter as embedded researcher.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_10": { "managerLevel": "Independent", "selfLevel": "Contributor",  "evidence": "Understands principles but defers to designers on application — room to advocate more during reviews.", "goals": "Bring a principle-based lens to at least 2 design critique sessions this quarter.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_11": { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Research rationale documentation is best-in-class. All studies have a clear methods brief.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_12": { "managerLevel": "Contributor", "selfLevel": "Learner",     "evidence": "Not a primary responsibility but creating visual artifacts for presentations is growing skill", "goals": "Complete Figma fundamentals course. Use design system components in next research readout deck.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_16": { "managerLevel": "Independent", "selfLevel": "Contributor",  "evidence": "Contributes meaningfully to IA discussions — brings user mental model perspective", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_19": { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Has run accessible usability studies with assistive technology users — strong practice.", "goals": "Partner with design on an inclusive research panel this quarter.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_21": { "managerLevel": "Contributor", "selfLevel": "Contributor",  "evidence": "Uses basic prototypes for testing — not building them, using what designers create.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_24": { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Using AI for synthesis and affinity mapping — significantly faster turnaround on insights.", "goals": "Document AI research workflow for team adoption.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "project_management_1": { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Research process is incredibly structured — timelines, recruiting, synthesis, readout all run like clockwork.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "project_management_2": { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Agile integration growing — learning how to time research to feed sprint planning.", "goals": "Map research timelines to sprint cadences for Q2.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "project_management_4": { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Extremely reliable on delivery. Zero missed research deadlines in 2025.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "collaboration_1":  { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Strong cross-functional research partner. PMs request Tyler on all major initiatives.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "collaboration_2":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Research feedback is incisive and well-received. Designers value his perspective.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "collaboration_4":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Exceptional listener — this is what makes his interviews so insightful.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "collaboration_5":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Always engaged in design critiques — brings the user lens that grounds the conversation.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "collaboration_7":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Runs a monthly research insights roundup. Highly attended across product and design.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "collaboration_10": { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Starting to embed in teams outside of core product — good momentum.", "goals": "Establish quarterly research sync with the ops team.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "influence_2":  { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Active in the local UX research community. Presented at a UXPA virtual event in Oct 2025.", "goals": "Submit to speak at a research conference in 2026.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "influence_5":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "The most user-centric voice in the room, always. Keeps every conversation grounded in human truth.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "influence_8":  { "managerLevel": "Independent", "selfLevel": "Contributor",  "evidence": "Growing confidence presenting to senior stakeholders. Still sometimes over-hedges findings.", "goals": "State research conclusions with more confidence — less 'it seems like' and more 'users told us'.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "influence_9":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Customer centricity is in Tyler's DNA. The whole team looks to him to keep the user visible.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_6":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "The strongest quant voice on the team. Partners with data eng to build research-informed dashboards.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_8":  { "managerLevel": "Independent", "selfLevel": "Contributor",  "evidence": "Facilitates synthesis sessions well but doesn't yet design full workshop experiences independently", "goals": "Lead one end-to-end design sprint facilitation this quarter.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_13": { "managerLevel": "Independent", "selfLevel": "Contributor",  "evidence": "Understands the broader system from a user journey perspective. Still building fluency with technical system maps.", "goals": "Map the end-to-end merchant research journey for the HVE program.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_14": { "managerLevel": "Contributor", "selfLevel": "Learner",      "evidence": "Not a primary responsibility. Occasionally contributes to pattern definitions through research insight.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_15": { "managerLevel": "Independent", "selfLevel": "Contributor",  "evidence": "Research strategy is growing — starting to proactively propose studies that connect to roadmap priorities", "goals": "Present a quarterly research agenda to the product team aligned to OKRs.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_17": { "managerLevel": "Learner",     "selfLevel": "Learner",      "evidence": "Not in scope for a researcher role. Visual polish is handled by design team.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_18": { "managerLevel": "Contributor", "selfLevel": "Contributor",  "evidence": "Research files are well-organized in Dovetail. Figma file hygiene is less relevant to role.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_20": { "managerLevel": "Learner",     "selfLevel": "Learner",      "evidence": "Design system contribution is outside the researcher role scope.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_22": { "managerLevel": "Independent", "selfLevel": "Independent",  "evidence": "Good working relationship with engineering. Shares research findings in eng planning sessions.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "job_skills_23": { "managerLevel": "Expert",      "selfLevel": "Independent",  "evidence": "Research documentation is best-in-class — methods briefs, study reports, and synthesis decks are thorough.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "project_management_3": { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Research projects are always well-scoped with clear timelines and recruiting plans.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "project_management_5": { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Prioritizes research pipeline thoughtfully — balances foundational and tactical studies.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "collaboration_3":  { "managerLevel": "Independent", "selfLevel": "Contributor",  "evidence": "Stakeholder management is growing — PMs trust Tyler but exec-level relationships are still forming.", "goals": "Present research findings directly to a VP-level stakeholder this half.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "collaboration_6":  { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Handles ambiguous research timelines with composure. Stayed calm through a major study scope change in Q3.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "collaboration_8":  { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Embedding in more teams — recently started a regular research sync with the ops squad.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "collaboration_9":  { "managerLevel": "Contributor", "selfLevel": "Contributor",  "evidence": "Has suggested process improvements to research intake flow. Still early in influencing broader team process.", "goals": "Propose one improvement to the design-research handoff process this quarter.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "influence_1":  { "managerLevel": "Independent", "selfLevel": "Contributor",  "evidence": "Advocates for research-informed decisions — growing voice in product planning. Still developing org-wide presence.", "goals": "Present research impact metrics in a quarterly design all-hands.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "influence_3":  { "managerLevel": "Expert",      "selfLevel": "Expert",      "evidence": "Teaches research methods to the entire design team. Runs onboarding sessions for new designers.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "influence_4":  { "managerLevel": "Independent", "selfLevel": "Independent", "evidence": "Positive team culture presence — known for intellectual curiosity and bringing out the best in others.", "goals": "", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "influence_6":  { "managerLevel": "Independent", "selfLevel": "Contributor",  "evidence": "Strategic thinking is developing — starting to connect research to business strategy more explicitly.", "goals": "Read 'Continuous Discovery Habits' and apply the opportunity solution tree framework to Q2 research.", "lastUpdated": "2026-01-20T00:00:00.000Z" },
        "influence_7":  { "managerLevel": "Contributor", "selfLevel": "Contributor",  "evidence": "Informally helps junior researchers. No formal mentorship structure in place yet.", "goals": "Set up a recurring mentorship session with the new research coordinator this quarter.", "lastUpdated": "2026-01-20T00:00:00.000Z" }
      },
      "customResources": {},
      "coreValues": {
        "empathy":  { "managerRating": 5, "notes": "Empathy is core to Tyler's craft. Their research practice is built on genuinely understanding people — and that carries into how they show up for teammates and stakeholders." },
        "teamwork": { "managerRating": 4, "notes": "Strong cross-functional connector. Embedding with more product squads this quarter. Next step is formalizing the research-design collaboration model they've been piloting." },
        "agility":  { "managerRating": 4, "notes": "Adapts research scope and methods fluidly as product strategy shifts. Handled a major study scope change in Q3 without losing momentum or team confidence." },
        "humility": { "managerRating": 5, "notes": "One of Tyler's defining qualities. Actively seeks feedback on their methods, owns mistakes openly, and creates psychological safety that makes others more willing to share." }
      },
      "personalGoals": [
        { "id": "pg_tyler_1", "goal": "Present research impact metrics at the Q2 design all-hands to demonstrate the value of the research program", "kpi": "Impact metrics deck presented; at least 3 product decisions cited as research-influenced in the presentation", "timeFrame": "Q2 2026", "status": "in_progress", "notes": "Pulling together study-to-decision data from the last 4 quarters. Working with Elena to get a slot on the June all-hands agenda." },
        { "id": "pg_tyler_2", "goal": "Establish a formal research-design collaboration model and document it as a team operating agreement", "kpi": "Collaboration model documented, reviewed by design leads, and adopted by at least 2 product squads", "timeFrame": "Q2 2026", "status": "in_progress", "notes": "Piloting the model with Marcus's squad this sprint. Weekly 30-min research sync seems to be working well — capturing the structure for the broader doc." },
        { "id": "pg_tyler_3", "goal": "Submit a talk proposal to a UX research conference in 2026", "kpi": "At least one proposal submitted; topic approved by manager before submission", "timeFrame": "Q2 2026", "status": "not_started", "notes": "Topic ideas: AI-assisted synthesis workflow or the HVE research program design. Targeting UXPA International 2026 deadline in May." }
      ],
      "growthThemeScore": 3.8,
      "growthThemes": [
        {
          "id": "gt_tyler_1",
          "theme": "Research-to-Decision Impact",
          "today": "Delivers high-quality research outputs but the path from insight to product decision is often unclear. Impact is felt but not formally tracked or attributed.",
          "better": "Consistently links research findings to specific product decisions. Tracks influence metrics; stakeholders can name studies that changed what they built.",
          "best": "Research is embedded in the product decision-making culture. Tyler's impact is measurable, cited in leadership reviews, and used to justify the research investment.",
          "indicators": ["Research-influenced decision count", "Study citation rate in roadmap reviews", "Insight-to-action turnaround time"],
          "dependencies": ["PM trust in research", "Data infrastructure access", "Study timeline feasibility"],
          "collaborators": ["Elena Santos", "PM", "Data Analytics", "Product leads"]
        },
        {
          "id": "gt_tyler_2",
          "theme": "Quantitative Research Fluency",
          "today": "Highly skilled in qualitative methods. Comfortable reading analytics but relies on data scientists or PMs to design and interpret quantitative studies.",
          "better": "Designs and independently interprets mixed-methods studies. Knows when to pair qual with quant and comfortably discusses statistical significance.",
          "best": "A fully mixed-methods researcher. Designs studies combining qual depth with quant rigor and shapes the product analytics strategy.",
          "indicators": ["Mixed-method study count", "Analytics self-serve usage", "Statistical confidence in reports"],
          "dependencies": ["Data infrastructure access", "Analytics team partnership", "Tool availability"],
          "collaborators": ["Data Analytics", "Engineering", "PM", "Elena Santos"]
        },
        {
          "id": "gt_tyler_3",
          "theme": "Stakeholder Storytelling",
          "today": "Research readouts are thorough but sometimes too detailed for exec audiences. Key takeaways get buried in evidence.",
          "better": "Delivers crisp, insight-led readouts tailored to the audience. Leads with 'so what' and leaves stakeholders with clear, actionable implications.",
          "best": "A master research communicator. Research stories inspire urgency and clarity in leadership and are referenced as models long after the study ends.",
          "indicators": ["Exec readout feedback scores", "Action rate on insights", "Research deck reuse across teams"],
          "dependencies": ["Executive accessibility", "Meeting slots for research readouts"],
          "collaborators": ["Elena Santos", "CPO/VPs", "PM", "Design team"]
        }
      ]
    },
    "dch_outreach_p_tyler_001": {
      "hveMerchant": "Harbor Coffee",
      "entries": [
        { "date": "2026-01-30", "merchant": "Harbor Coffee",   "type": "hve",     "notes": "HVE check-in. Multi-location owner. Main frustration: no bulk reporting across all 3 locations. Recorded full session in Dovetail.", "dovetailUrl": "https://dovetail.com/projects/harbor-coffee-hve-q1", "id": "ot_tyler_001" },
        { "date": "2026-02-25", "merchant": "Harbor Coffee",   "type": "hve",     "notes": "Follow-up. Showed early concept of a multi-location dashboard. Owner very engaged — wants to join beta program.", "dovetailUrl": "https://dovetail.com/projects/harbor-coffee-hve-q1", "id": "ot_tyler_002" },
        { "date": "2026-03-08", "merchant": "Park Ave Yoga",   "type": "general", "notes": "General outreach — semi-annual check-in. They've increased Express usage for class booking. Asked about a waitlist feature.", "dovetailUrl": "", "id": "ot_tyler_003" }
      ]
    }
  };

  // Seed version — bump this when seed data changes to force a refresh of example profiles
  var SEED_VERSION = 15;
  var storedVersion = parseInt(localStorage.getItem('dch_seed_version') || '0', 10);
  var exampleIds = ['p_jordan_001', 'p_marcus_001', 'p_elena_001', 'p_tyler_001'];

  // IDs that have been deliberately removed from the seed — purge from any browser
  var removedIds = ['p_1773410375907', 'p_paige_001'];

  // Merge profiles — add missing ones, update examples if seed is newer, remove purged IDs
  var existingProfiles = JSON.parse(localStorage.getItem('dch_profiles') || '[]');
  // Remove purged profiles and clean up their data keys
  existingProfiles = existingProfiles.filter(function(p) {
    if (removedIds.indexOf(p.id) !== -1) {
      Object.keys(localStorage).filter(function(k) { return k.indexOf(p.id) !== -1; }).forEach(function(k) { localStorage.removeItem(k); });
      return false;
    }
    return true;
  });
  var existingIds = existingProfiles.map(function(p) { return p.id; });
  var newProfiles = seed['dch_profiles'].filter(function(p) { return existingIds.indexOf(p.id) === -1; });
  var merged = existingProfiles.map(function(p) {
    var isExample = exampleIds.indexOf(p.id) !== -1;
    if (isExample && storedVersion < SEED_VERSION) {
      // Replace with seed version to pick up role/name changes
      return seed['dch_profiles'].find(function(s) { return s.id === p.id; }) || p;
    }
    return p;
  }).concat(newProfiles);
  // If the current active profile was removed, switch to first available
  var currentId = localStorage.getItem('dch_current_profile');
  if (currentId && removedIds.indexOf(currentId) !== -1) {
    localStorage.setItem('dch_current_profile', merged.length > 0 ? merged[0].id : '');
  }
  localStorage.setItem('dch_profiles', JSON.stringify(merged));

  Object.entries(seed).forEach(function(entry) {
    var key = entry[0], val = entry[1];
    if (key === 'dch_profiles') return; // already handled above
    if (key === 'dch_current_profile' && localStorage.getItem(key)) return; // don't override active session

    // For example profile data keys, re-seed if seed version is newer
    var isExampleKey = exampleIds.some(function(id) { return key.indexOf(id) !== -1; });
    if (isExampleKey && storedVersion < SEED_VERSION) {
      localStorage.setItem(key, typeof val === 'string' ? val : JSON.stringify(val));
    } else if (!localStorage.getItem(key)) {
      localStorage.setItem(key, typeof val === 'string' ? val : JSON.stringify(val));
    }
  });

  // Migrate goals + coreValues for any profile that already has data but is missing these fields
  var cvSeedMap = {
    'p_jordan_001':    seed['dch_data_p_jordan_001'].coreValues,
    'p_marcus_001':    seed['dch_data_p_marcus_001'].coreValues,
    'p_elena_001':     seed['dch_data_p_elena_001'].coreValues,
    'p_tyler_001':     seed['dch_data_p_tyler_001'].coreValues,
  };
  Object.keys(cvSeedMap).forEach(function(pid) {
    var dataKey = 'dch_data_' + pid;
    var raw = localStorage.getItem(dataKey);
    if (!raw) return;
    var data = JSON.parse(raw);
    var changed = false;
    if (!data.coreValues || Object.keys(data.coreValues).length === 0) {
      data.coreValues = cvSeedMap[pid];
      changed = true;
    }
    if (changed) localStorage.setItem(dataKey, JSON.stringify(data));
  });

  localStorage.setItem('dch_seed_version', String(SEED_VERSION));
})();
