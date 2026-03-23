const SKILLS_DATA = {
  "skills": [
    {
      "id": "job_skills_1",
      "category": "Design Skills",
      "skill_number": 1,
      "name": "Master of Human-Centered Design & UX Principles",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Applies frameworks when prompted",
          "typical_scope": "Single screen or task"
        },
        {
          "level": "Contributor",
          "core_shift": "Connects needs to decisions",
          "typical_scope": "Feature-level"
        },
        {
          "level": "Independent",
          "core_shift": "Frames problems, selects tools",
          "typical_scope": "Workstream or product area"
        },
        {
          "level": "Expert",
          "core_shift": "Elevates team thinking",
          "typical_scope": "Org-wide, systemic"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Understands and can explain Nielsen's 10 usability heuristics with real examples.",
            "Recognizes poor information hierarchy, unclear affordances, and inconsistent patterns in existing product.",
            "Applies JTBD and problem statement frameworks when given a template or guidance.",
            "Can articulate user needs separately from feature requests."
          ],
          "evidence_artifacts": [
            "Named a heuristic violation in a design critique and proposed a fix.",
            "Completed a problem statement or JTBD canvas with mentor review.",
            "Passed a foundational UX knowledge check or onboarding assessment."
          ],
          "next_level_threshold": "Ready for Contributor when they apply HCD principles to scoped work independently — no prompting required — and connect user needs to specific UI decisions."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Applies HCD principles throughout a feature without being reminded.",
            "Surfaces usability risks proactively during design reviews or sprint planning.",
            "Creates user flows, problem statements, and journey maps for defined features without templates.",
            "Balances user clarity with technical and business constraints in design decisions."
          ],
          "evidence_artifacts": [
            "Documented a usability risk in a design review that was acted on before development.",
            "Delivered a feature where user needs were explicitly mapped to design decisions in the spec.",
            "Journey map or problem statement used by PM in a PRD."
          ],
          "next_level_threshold": "Ready for Independent when they frame ambiguous problems structurally — before a brief exists — and select the right HCD tool for each situation without guidance."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Defines the problem space for an initiative using structured discovery (assumption mapping, user research, stakeholder interviews) before solutions are explored.",
            "Selects HCD methods appropriate to the level of risk and ambiguity in a project.",
            "Balances user, business, and technical constraints simultaneously without sacrificing user advocacy.",
            "Identifies when a team is solving the wrong problem and redirects effectively."
          ],
          "evidence_artifacts": [
            "Led a discovery phase that changed the scope or direction of a feature.",
            "Produced a problem framing artifact (opportunity brief, assumption map) adopted in roadmap planning.",
            "Peer or PM cited their problem framing as the reason for a course correction."
          ],
          "next_level_threshold": "Ready for Expert when their thinking consistently elevates others — they coach peers on problem framing, not just execute it themselves."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Coaches other designers on how to frame problems, not just critique solutions.",
            "Drives systemic UX improvements across product areas (e.g., end-to-end flows, cross-feature consistency).",
            "Introduces new frameworks or methods that become team standards.",
            "Recognized internally and externally as a strong practitioner of HCD."
          ],
          "evidence_artifacts": [
            "Led a design critique or workshop format adopted by the team.",
            "A framework or artifact they introduced is now in regular team use.",
            "Mentored a designer who was promoted or visibly leveled up their problem framing."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A designer who can explain HCD principles fluently but doesn't apply them when under delivery pressure is not demonstrating this skill. The test is behavior under constraint, not knowledge in the abstract.",
      "anti_patterns": "Learner: Treating HCD as a checklist rather than a way of thinking — completing a journey map without using it. Contributor: Applying the same framework to every problem regardless of fit. Independent: Over-investing in discovery on low-risk features while under-investing on high-stakes ones. Expert: Creating frameworks so complex peers can't use them."
    },
    {
      "id": "job_skills_2",
      "category": "Design Skills",
      "skill_number": 2,
      "name": "Crafts Effective & Appropriate Research Methodologies",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Knows method types",
          "typical_scope": "Assisted planning"
        },
        {
          "level": "Contributor",
          "core_shift": "Selects method for feature risk",
          "typical_scope": "Single research effort"
        },
        {
          "level": "Independent",
          "core_shift": "Designs multi-method strategy",
          "typical_scope": "Roadmap-aligned"
        },
        {
          "level": "Expert",
          "core_shift": "Evolves research integration",
          "typical_scope": "Org-wide practice"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Distinguishes generative research (understanding) from evaluative research (testing).",
            "Names at least 5 research methods and their appropriate use cases.",
            "Assists in planning a research session with senior oversight.",
            "Understands sample size basics and why recruiting criteria matter."
          ],
          "evidence_artifacts": [
            "Completed a research planning document with a supervisor's guidance.",
            "Correctly identified whether a project needed generative or evaluative methods when asked.",
            "Participated in at least 3 research sessions across 2 different methods."
          ],
          "next_level_threshold": "Ready for Contributor when they can independently select and justify a method for a given feature without guidance."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Selects appropriate research methods based on feature risk, timeline, and uncertainty level.",
            "Plans and executes a full research cycle (recruit, run, synthesize, share) for a feature independently.",
            "Writes research objectives before selecting methods — doesn't start with a method and retrofit goals.",
            "Knows when not to run research and articulates why."
          ],
          "evidence_artifacts": [
            "Delivered a research plan reviewed and approved by a senior designer or researcher without major changes.",
            "Ran a complete usability test or generative interview series independently.",
            "Research method selection documented in a project brief."
          ],
          "next_level_threshold": "Ready for Independent when they proactively design multi-method strategies tied to roadmap priorities and varying uncertainty levels across an initiative."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Designs research strategies that combine methods across a product quarter (e.g., generative interviews in discovery, concept testing mid-cycle, usability testing pre-launch).",
            "Calibrates research rigor to risk level — knows when a 5-person usability test is sufficient and when longitudinal diary studies are warranted.",
            "Advocates for research investment in roadmap and sprint planning conversations.",
            "Identifies gaps in team's research coverage proactively."
          ],
          "evidence_artifacts": [
            "Authored a research strategy for a multi-quarter initiative.",
            "Research plan cited in a PRD or roadmap document as an input to prioritization.",
            "Identified a product risk that was validated or invalidated through a research method they proposed."
          ],
          "next_level_threshold": "Ready for Expert when they improve how research integrates across the full product cycle — not just plan individual studies."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Establishes standards for research rigor, documentation, and repeatability across the team.",
            "Integrates research milestones into product delivery frameworks and sprint cadences.",
            "Builds team capability through templates, training, or coaching.",
            "Identifies systemic gaps in how the organization uses research and drives improvement."
          ],
          "evidence_artifacts": [
            "Research standards or templates they created are in active team use.",
            "Research is now integrated into a delivery process that previously lacked it.",
            "Ran an internal training on research methodology with measurable impact on team output quality."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Defaulting to usability testing because it's familiar — even when generative research is needed — produces polished solutions to the wrong problems. Method selection must follow the question, not comfort.",
      "anti_patterns": "Learner: Planning sessions before defining what they need to learn. Contributor: Running research that answers the question asked rather than the question that matters. Independent: Over-researching to delay commitment. Expert: Establishing rigorous standards that slow the team without proportional insight benefit."
    },
    {
      "id": "job_skills_3",
      "category": "Design Skills",
      "skill_number": 3,
      "name": "Drafts Screeners, Discussion Guides & Materials",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Writes basic questions",
          "typical_scope": "With feedback"
        },
        {
          "level": "Contributor",
          "core_shift": "Creates structured, unbiased guides",
          "typical_scope": "Feature-aligned"
        },
        {
          "level": "Independent",
          "core_shift": "Designs for depth and edge behavior",
          "typical_scope": "Initiative-level"
        },
        {
          "level": "Expert",
          "core_shift": "Sets documentation standards",
          "typical_scope": "Org-wide reuse"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Writes open-ended questions without leading language when given a template.",
            "Distinguishes between a screener question and a discussion guide question.",
            "Understands why warm-up questions matter in interview facilitation.",
            "Drafts a basic screener with the right qualifying criteria."
          ],
          "evidence_artifacts": [
            "Submitted a draft guide that received no major revisions for bias or leading language.",
            "Screener successfully recruited participants who matched the target profile.",
            "Reviewed by a senior designer with only minor wording suggestions."
          ],
          "next_level_threshold": "Ready for Contributor when they produce structured, objective guides that align to research objectives without template dependence."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Creates full discussion guides with clear structure: intro, warm-up, core questions, and wrap-up.",
            "Writes screener criteria that reflect actual user behavior, not demographics alone.",
            "Avoids leading questions, binary answers, and hypothetical framing independently.",
            "Aligns every question back to a specific learning objective."
          ],
          "evidence_artifacts": [
            "Discussion guide used without significant mid-session deviation due to poor question structure.",
            "Screener recruited participants who surfaced meaningful insights (not just edge cases).",
            "PM or researcher reviewed guide and noted it was research-ready without major changes."
          ],
          "next_level_threshold": "Ready for Independent when their guides consistently surface motivations, edge behaviors, and unarticulated needs — not just surface preferences."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Designs guides that surface not just what users do but why — including emotional drivers, workarounds, and decision tradeoffs.",
            "Creates multi-phase discussion guides for longitudinal or complex research.",
            "Adapts question structure to method (interview vs. concept test vs. diary study).",
            "Builds in probing structures that facilitate depth without leading."
          ],
          "evidence_artifacts": [
            "Research session surfaced an insight that changed a product decision — traceable to a well-designed probe.",
            "Multi-phase guide used across a quarter-long research engagement.",
            "Guide reused or adapted by another designer for a related initiative."
          ],
          "next_level_threshold": "Ready for Expert when their templates and approaches are adopted as team standards."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Creates reusable screener and discussion guide templates used across teams.",
            "Establishes a shared library of research materials with clear usage guidance.",
            "Runs workshops or critiques on research material quality.",
            "Defines what 'good' looks like in research documentation across the design org."
          ],
          "evidence_artifacts": [
            "Template library they built is in active use by 2+ designers.",
            "Led an internal workshop on research material quality.",
            "Research documentation standard they authored is referenced in onboarding materials."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A discussion guide that feels complete but asks surface questions produces surface answers. Length is not a proxy for rigor — the test is whether sessions consistently reveal insights that weren't anticipated at the outset.",
      "anti_patterns": "Learner: Writing a script so rigid they can't probe. Contributor: Asking about preferences rather than behaviors — 'Would you use this?' instead of 'Tell me about the last time you tried to do this.' Independent: Designing guides so exploratory that sessions lack direction and synthesis is impossible. Expert: Creating templates so comprehensive they intimidate junior designers."
    },
    {
      "id": "job_skills_4",
      "category": "Design Skills",
      "skill_number": 4,
      "name": "Effectively Facilitates Design Research",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Observes and co-facilitates",
          "typical_scope": "Supported sessions"
        },
        {
          "level": "Contributor",
          "core_shift": "Independently moderates",
          "typical_scope": "Usability and interviews"
        },
        {
          "level": "Independent",
          "core_shift": "Manages complexity, pivots",
          "typical_scope": "Multi-method, edge cases"
        },
        {
          "level": "Expert",
          "core_shift": "Leads high-stakes research",
          "typical_scope": "Executive-visible, mentors others"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Attends research sessions as an observer and takes structured notes.",
            "Co-facilitates portions of a session under senior guidance.",
            "Understands the role of silence in facilitation and avoids filling pauses.",
            "Can summarize key moments from a session immediately after it ends."
          ],
          "evidence_artifacts": [
            "Observer notes cited in final synthesis document.",
            "Co-facilitated at least 2 sessions with senior designer feedback.",
            "Debrief notes submitted within 24 hours of session without prompting."
          ],
          "next_level_threshold": "Ready for Contributor when they can independently moderate a usability session from start to finish — including rapport-building, task introduction, and probing."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Independently moderates usability tests and generative interviews from start to finish.",
            "Builds participant rapport within the first 5 minutes of a session.",
            "Follows the guide while probing naturally when unexpected insights emerge.",
            "Manages difficult participant dynamics (verbose, quiet, leading, over-helpful) without losing session integrity."
          ],
          "evidence_artifacts": [
            "Ran 5+ sessions independently with post-session debrief noting successful facilitation.",
            "No major facilitation issues flagged in observer notes across a research cycle.",
            "Participant completed all required tasks and provided sufficient qualitative data."
          ],
          "next_level_threshold": "Ready for Independent when they can pivot mid-session, manage unexpected participant behaviors, and consistently extract deep insight beyond surface preferences."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Adapts facilitation approach mid-session when a participant reveals an unexpected use case or need.",
            "Extracts deep motivations through layered probing ('Why does that matter?' 'What would you do instead?').",
            "Manages high-complexity participant types: skeptics, domain experts, non-native speakers, users with accessibility needs.",
            "Facilitates remote and in-person sessions with equal effectiveness."
          ],
          "evidence_artifacts": [
            "Mid-session pivot led to an insight cited in a final synthesis document.",
            "Facilitated sessions with 3+ distinct participant types across one research cycle.",
            "Received positive participant feedback in a post-session survey."
          ],
          "next_level_threshold": "Ready for Expert when they lead high-stakes or executive-visible research and actively mentor others in facilitation craft."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Leads research that informs executive decisions or significant product pivots.",
            "Mentors junior designers through facilitation coaching — observes their sessions and provides structured feedback.",
            "Defines facilitation standards and best practices for the team.",
            "Designs new facilitation approaches when existing methods are insufficient for complex research questions."
          ],
          "evidence_artifacts": [
            "Research they facilitated directly cited in a board deck, executive presentation, or strategy document.",
            "Mentored at least 2 designers who improved their facilitation measurably.",
            "Facilitation playbook or guide they authored is in team use."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Facilitation quality directly determines research quality. A designer who reads questions verbatim, doesn't probe, and wraps up 20 minutes early produces data that can't support insight — regardless of how good the guide is.",
      "anti_patterns": "Learner: Being so focused on following the guide that they miss the most interesting thing a participant says. Contributor: Probing too hard on their own hypotheses. Independent: Facilitating efficiently but not deeply — sessions that feel productive but yield thin insights. Expert: Running sessions at a quality bar others can't reach without building pathways for others to develop."
    },
    {
      "id": "job_skills_5",
      "category": "Design Skills",
      "skill_number": 5,
      "name": "Executes Evaluative Discovery Tasks",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Runs simple usability sessions",
          "typical_scope": "Guided"
        },
        {
          "level": "Contributor",
          "core_shift": "Executes and summarizes tests",
          "typical_scope": "Feature-level"
        },
        {
          "level": "Independent",
          "core_shift": "Proactively validates assumptions",
          "typical_scope": "Pre-development"
        },
        {
          "level": "Expert",
          "core_shift": "Establishes validation frameworks",
          "typical_scope": "Cross-team"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Runs a simple moderated usability test with a prepared prototype and task list.",
            "Identifies obvious usability failures (task completion failure, user confusion, error loops).",
            "Distinguishes between a usability problem and a preference.",
            "Documents session observations consistently across participants."
          ],
          "evidence_artifacts": [
            "Completed a usability test with 3+ participants under supervision.",
            "Submitted session notes that were used in final synthesis without major reinterpretation.",
            "Identified at least one design issue confirmed by a senior designer."
          ],
          "next_level_threshold": "Ready for Contributor when they independently execute, summarize, and share evaluative findings without needing a guide or check-in."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Runs complete evaluative research cycles (plan, recruit, execute, summarize, share) independently.",
            "Writes test tasks that are realistic, unbiased, and tied to specific design hypotheses.",
            "Produces a findings summary that distinguishes severity levels (critical, moderate, minor).",
            "Communicates findings in a format accessible to PM and Engineering."
          ],
          "evidence_artifacts": [
            "Evaluative findings deck delivered within one sprint of research completion.",
            "At least one severity-1 finding led to a design change before development.",
            "PM or Engineering cited research in sprint planning to justify scope or priority change."
          ],
          "next_level_threshold": "Ready for Independent when they proactively identify which assumptions need validation before development begins — without being asked."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Identifies the highest-risk assumptions in a feature before a brief is written and proposes a validation approach.",
            "Selects the lightest-weight evaluation method appropriate to the risk level.",
            "Integrates evaluation naturally into the design cycle — not as a gate, but as a continuous check.",
            "Validates concepts at low fidelity to reduce waste before high-fidelity investment."
          ],
          "evidence_artifacts": [
            "Caught a critical assumption failure before development that would have caused a significant rework.",
            "Evaluation integrated into sprint planning as a recurring design team commitment.",
            "Low-fidelity concept test changed a design direction before pixel-level work began."
          ],
          "next_level_threshold": "Ready for Expert when they establish validation frameworks adopted across teams."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Establishes a lightweight validation framework the team uses across initiatives.",
            "Defines when evaluation is required vs. optional based on risk criteria.",
            "Trains team on assumption mapping and lightweight testing methods.",
            "Builds evaluation milestones into the product delivery calendar."
          ],
          "evidence_artifacts": [
            "Validation framework or risk criteria document adopted by product and design teams.",
            "Ran a team training on lightweight evaluation methods.",
            "Evaluation milestones now appear in delivery roadmap templates."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Evaluative research run after decisions are locked is theater, not validation. The value of this skill is in its timing — catching wrong assumptions before they become shipped features.",
      "anti_patterns": "Learner: Running tests with tasks so specific they reveal nothing new. Contributor: Testing only the happy path and missing edge case failures. Independent: Over-engineering evaluation on low-risk features. Expert: Setting up frameworks so process-heavy that teams route around them."
    },
    {
      "id": "job_skills_6",
      "category": "Design Skills",
      "skill_number": 6,
      "name": "Interprets & Utilizes Data to Influence Product Success",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Reviews dashboards when prompted",
          "typical_scope": "Single metric"
        },
        {
          "level": "Contributor",
          "core_shift": "Connects metrics to UX decisions",
          "typical_scope": "Feature-level"
        },
        {
          "level": "Independent",
          "core_shift": "Combines quant and qual signals",
          "typical_scope": "Prioritization and roadmap"
        },
        {
          "level": "Expert",
          "core_shift": "Shapes roadmap with evidence",
          "typical_scope": "Multi-quarter strategy"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Understands core product metrics: conversion rate, task completion, drop-off, error rate, NPS.",
            "Reads a provided analytics dashboard without guidance and identifies the top 2–3 signals.",
            "Can explain why a metric moved directionally, even if unable to pinpoint cause independently.",
            "Asks for data when it would help a design decision."
          ],
          "evidence_artifacts": [
            "Referenced a specific metric in a design review to support a decision.",
            "Correctly interpreted a dashboard screenshot shared by PM without follow-up questions.",
            "Asked for analytics access before starting a feature redesign."
          ],
          "next_level_threshold": "Ready for Contributor when they independently connect product metrics to specific UX improvements without being prompted."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Proactively pulls conversion, drop-off, and engagement data before starting a redesign.",
            "Identifies which screens or flows have the most friction using funnel data.",
            "Presents quantitative evidence alongside qualitative research in readouts.",
            "Uses A/B test results to inform design iteration decisions."
          ],
          "evidence_artifacts": [
            "Design recommendation supported by both metric data and qualitative insight in a delivered readout.",
            "Feature redesign prioritized based on drop-off data they surfaced.",
            "Correctly interpreted an A/B test result and translated it into a design recommendation."
          ],
          "next_level_threshold": "Ready for Independent when they synthesize quantitative and qualitative signals together into a coherent story that guides prioritization — not just report individual metrics."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Synthesizes multiple data sources (analytics, support tickets, NPS verbatims, research findings) into a unified picture of user experience quality.",
            "Identifies leading indicators of engagement or churn that product hasn't named yet.",
            "Uses data to make the case for investment in a problem area during roadmap discussions.",
            "Detects when metrics are misleading or missing context and names it clearly."
          ],
          "evidence_artifacts": [
            "Data synthesis they produced changed a roadmap priority or feature scope.",
            "Identified a leading indicator that PM and Data validated as meaningful.",
            "Flagged a misleading metric in a product review that prevented a wrong decision."
          ],
          "next_level_threshold": "Ready for Expert when they shape multi-quarter roadmap tradeoffs using evidence-backed narratives that influence executive decisions."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Builds evidence-backed narratives that influence executive product strategy.",
            "Defines the right metrics for new product areas where measurement is ambiguous.",
            "Partners with Data Science to define design-relevant instrumentation before launch.",
            "Models for the team how qualitative and quantitative evidence work together, not in competition."
          ],
          "evidence_artifacts": [
            "A data narrative they built was cited in a board deck or exec strategy review.",
            "Defined measurement framework for a new product area adopted by Data and PM.",
            "Instrumentation they defined pre-launch produced actionable post-launch insights."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A designer who cites data to justify a decision they've already made is not doing this skill — they're using data as decoration. The test is whether the data genuinely changed what they designed.",
      "anti_patterns": "Learner: Skipping data review because 'we know the problem.' Contributor: Reporting metrics without interpreting them. Independent: Over-indexing on quantitative data and dismissing qualitative signals that contradict it. Expert: Setting such a high bar for evidence that intuition-based bets are consistently blocked."
    },
    {
      "id": "job_skills_7",
      "category": "Design Skills",
      "skill_number": 7,
      "name": "Synthesizes Research into Insights & Opportunities",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Notices what happened",
          "typical_scope": "Single session, prompted"
        },
        {
          "level": "Contributor",
          "core_shift": "Explains why it matters",
          "typical_scope": "Feature or sprint-level"
        },
        {
          "level": "Independent",
          "core_shift": "Identifies what to do next",
          "typical_scope": "Workstream or product area"
        },
        {
          "level": "Expert",
          "core_shift": "Reframes what we should build",
          "typical_scope": "Multi-quarter, portfolio"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Groups research notes by topic when prompted by a senior designer or researcher.",
            "Identifies surface-level patterns (e.g., 'three participants had trouble with the date picker').",
            "Distinguishes between an observation and an inference.",
            "Understands the difference between a finding and an insight."
          ],
          "evidence_artifacts": [
            "Produced an affinity diagram or tagged notes in Dovetail/Miro during or after a research session.",
            "Submitted a findings summary with at least one clear 'because' statement per observation.",
            "Asked clarifying questions when unsure whether a pattern is signal or noise."
          ],
          "next_level_threshold": "Ready for Contributor when they produce a structured findings summary independently — without a template — and distinguish between surface observations and underlying user motivations."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Produces a clear findings document organized by research question, not by participant.",
            "Writes insights in structured format: 'Users [behavior] because [motivation], which means [design implication].'",
            "Prioritizes findings by frequency and severity.",
            "Connects insights directly to specific design decisions.",
            "Facilitates a readout with PM and Engineering fielding questions on methodology."
          ],
          "evidence_artifacts": [
            "Delivered a research readout deck that non-designers could act on without follow-up.",
            "Findings traceably linked to at least one shipped design change or documented backlog item.",
            "Readout completed within one sprint of research execution without manager prompting."
          ],
          "next_level_threshold": "Ready for Independent when synthesis consistently shapes design direction before work begins — not just validates decisions already made."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Transforms a body of research into a prioritized opportunity space with 3–5 framed problem areas.",
            "Identifies contradictions in the data and surfaces them as design hypotheses.",
            "Facilitates opportunity framing workshops using synthesized research as the input.",
            "Combines qualitative insights with quantitative signals unprompted.",
            "Produces synthesis artifacts that persist beyond a single project."
          ],
          "evidence_artifacts": [
            "Opportunity framing document referenced in a PRD or roadmap planning session.",
            "HMW or insight backlog used as input to a sprint planning or ideation session.",
            "Synthesis artifact reused by at least one other designer on a different initiative."
          ],
          "next_level_threshold": "Ready for Expert when their synthesis consistently reframes what the team should be building — and that reframing sticks across multiple cycles."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Defines a multi-quarter opportunity space from cross-product research influencing multiple teams.",
            "Creates synthesis frameworks the team adopts as standard practice.",
            "Teaches synthesis as a craft — runs workshops on pattern recognition and insight writing.",
            "Knows when research is being misused to justify pre-made decisions and redirects the process."
          ],
          "evidence_artifacts": [
            "A synthesis framework they created is in active use by 2+ designers.",
            "Ran an internal training that raised the bar on team synthesis output quality.",
            "Cited in a product strategy doc as the source of a key insight."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A designer who produces visually polished synthesis artifacts but cannot explain the 'so what' is performing synthesis, not doing it. The test: ask them what the team should build next and why.",
      "anti_patterns": "Learner: Listing every observation without grouping or prioritizing. Contributor: Framing insights as solutions rather than opportunities — constraining ideation too early. Independent: Synthesizing in isolation without looping in PM/Engineering until a readout, reducing buy-in. Expert: Owning synthesis so tightly that others don't develop the skill."
    },
    {
      "id": "job_skills_8",
      "category": "Design Skills",
      "skill_number": 8,
      "name": "Effectively Designs & Plans Workshops",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Supports logistics and setup",
          "typical_scope": "Assisted"
        },
        {
          "level": "Contributor",
          "core_shift": "Designs structured agendas",
          "typical_scope": "Feature or initiative"
        },
        {
          "level": "Independent",
          "core_shift": "Resolves ambiguity, drives decisions",
          "typical_scope": "Cross-functional"
        },
        {
          "level": "Expert",
          "core_shift": "Creates repeatable frameworks",
          "typical_scope": "Org-wide adoption"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Understands the purpose of common workshop formats: How Might We, Crazy 8s, Journey Mapping, Affinity Clustering.",
            "Sets up physical or digital workshop spaces (Miro boards, printed templates, supplies).",
            "Takes structured notes during workshops and organizes outputs after.",
            "Identifies which workshop activity is being used and why."
          ],
          "evidence_artifacts": [
            "Set up a Miro or physical workshop space independently before a session.",
            "Submitted organized workshop notes or output photos within 24 hours.",
            "Correctly named and described 3+ workshop formats when asked."
          ],
          "next_level_threshold": "Ready for Contributor when they independently design a clear agenda with defined objectives, timings, and outputs aligned to a specific desired outcome."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Designs workshop agendas with clear objectives, time boxes, and expected outputs for each activity.",
            "Selects exercises aligned to desired outcomes — ideation sessions look different from alignment sessions.",
            "Prepares facilitator notes, participant instructions, and fallback activities if time runs short.",
            "Communicates the purpose and expected value of the workshop to participants in advance."
          ],
          "evidence_artifacts": [
            "Workshop agenda reviewed by a stakeholder and rated as clear and purposeful.",
            "Workshop produced a usable output (prioritized list, decision, concept set) without requiring a follow-up session.",
            "Participants knew the goal before the session started."
          ],
          "next_level_threshold": "Ready for Independent when workshops consistently resolve ambiguity, surface assumptions, and drive concrete decisions — not just generate ideas."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Designs workshops that move a team from divergent ambiguity to convergent decision — in a single session.",
            "Anticipates stakeholder dynamics and prepares strategies (breakout structures, anonymous input, role-based framing) to surface honest input.",
            "Adapts workshop design in real-time when activities aren't landing.",
            "Uses workshop outputs directly as inputs to the next phase of work."
          ],
          "evidence_artifacts": [
            "Workshop resolved a decision that had been stuck in async for weeks.",
            "Stakeholder tension managed successfully — no participant dominated and quieter voices contributed.",
            "Workshop output directly referenced in a PRD, design brief, or sprint plan."
          ],
          "next_level_threshold": "Ready for Expert when they create repeatable workshop frameworks adopted and run by other designers without their involvement."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Creates reusable workshop frameworks that other designers can run independently.",
            "Coaches designers on facilitation strategy, agenda design, and stakeholder management.",
            "Facilitates executive-visible workshops that shape strategic direction.",
            "Introduces new workshop methods when existing formats are insufficient."
          ],
          "evidence_artifacts": [
            "Workshop framework they designed has been run by 2+ other facilitators successfully.",
            "Ran an executive workshop that influenced a product or strategic decision.",
            "Coached a designer through their first solo workshop facilitation."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A workshop without a defined output is a meeting. If participants leave without a decision, prioritized list, or shared artifact they couldn't have produced alone, the workshop design failed regardless of how energized the room felt.",
      "anti_patterns": "Learner: Spending more time decorating Miro boards than clarifying objectives. Contributor: Running the same format (Crazy 8s, dot voting) for every problem regardless of fit. Independent: Over-engineering workshop design to the point that facilitation becomes performance. Expert: Being the only person who can run their frameworks effectively."
    },
    {
      "id": "job_skills_9",
      "category": "Design Skills",
      "skill_number": 9,
      "name": "Effectively Facilitates Workshops",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Participates and supports",
          "typical_scope": "Prompted"
        },
        {
          "level": "Contributor",
          "core_shift": "Facilitates small groups confidently",
          "typical_scope": "Feature-level sessions"
        },
        {
          "level": "Independent",
          "core_shift": "Leads cross-functional workshops",
          "typical_scope": "Ambiguous, high-stakes"
        },
        {
          "level": "Expert",
          "core_shift": "Shapes product and strategic direction",
          "typical_scope": "Executive-visible sessions"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Participates actively in workshops and supports the lead facilitator when asked.",
            "Manages a single breakout group or activity under guidance.",
            "Keeps time for an activity and signals when to wrap up.",
            "Takes clear notes and organizes outputs for the facilitator."
          ],
          "evidence_artifacts": [
            "Managed a breakout activity with positive feedback from the lead facilitator.",
            "Time-keeping kept at least one activity within the planned window.",
            "Notes submitted after session were used in synthesis without reinterpretation."
          ],
          "next_level_threshold": "Ready for Contributor when they facilitate a small-group session confidently from start to finish — keeping it on track and ensuring balanced participation."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Facilitates sessions of 4–8 people toward a defined output.",
            "Actively draws out quieter participants and manages dominant voices without confrontation.",
            "Keeps conversations productive when they drift off-topic.",
            "Reads group energy and adjusts pace, tone, or activity format accordingly."
          ],
          "evidence_artifacts": [
            "Workshop produced a clear, usable output without a follow-up session needed.",
            "Participant feedback (verbal or written) indicated the session felt well-run.",
            "Dominant voice successfully redirected without damaging the relationship."
          ],
          "next_level_threshold": "Ready for Independent when they lead cross-functional workshops through genuine ambiguity — not just structured activities with clear answers."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Leads workshops across functions (Design, PM, Engineering, Marketing, Operations) toward outcomes.",
            "Manages constructive conflict — surfaces tension productively without shutting it down.",
            "Drives toward decisions even when participants arrive with competing priorities.",
            "Adjusts facilitation style to audience: technical teams need different approaches than executive stakeholders."
          ],
          "evidence_artifacts": [
            "Led a cross-functional workshop that produced a decision or alignment previously unresolved.",
            "Named and navigated a conflict in session — documented in retro notes.",
            "Stakeholders with competing priorities left with shared alignment (validated in follow-up)."
          ],
          "next_level_threshold": "Ready for Expert when they facilitate high-stakes executive sessions that shape product or strategic direction."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Facilitates with executives, board members, or external stakeholders on high-visibility topics.",
            "Creates psychological safety in sessions where organizational power dynamics are present.",
            "Debriefs sessions with the team and improves approach based on what didn't land.",
            "Mentors other facilitators through observation and structured coaching."
          ],
          "evidence_artifacts": [
            "Executive session outcome cited in a strategy doc or roadmap decision.",
            "Ran a post-session debrief that led to a facilitation improvement adopted by the team.",
            "Mentored a designer through a high-stakes facilitation with positive outcome."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A facilitator who fills silence with their own opinions isn't facilitating — they're presenting with extra steps. The measure of facilitation quality is whether the room produced the output, not whether the facilitator did.",
      "anti_patterns": "Learner: Being so focused on the agenda that they miss when a conversation is generating more value than the planned activity. Contributor: Facilitating to the middle — avoiding conflict so thoroughly that nothing is decided. Independent: Managing the process so tightly that authentic dialogue is suppressed. Expert: Being so skilled that others feel they can't facilitate in their presence."
    },
    {
      "id": "job_skills_10",
      "category": "Design Skills",
      "skill_number": 10,
      "name": "Defines Design Principles",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Applies existing principles",
          "typical_scope": "Prompted"
        },
        {
          "level": "Contributor",
          "core_shift": "Articulates principles for initiatives",
          "typical_scope": "Feature or product area"
        },
        {
          "level": "Independent",
          "core_shift": "Authors actionable principles",
          "typical_scope": "Guides teams through tradeoffs"
        },
        {
          "level": "Expert",
          "core_shift": "Establishes enduring principles",
          "typical_scope": "Multi-product, long-term direction"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Understands the team's existing design principles and can explain them with examples.",
            "Applies principles correctly in design critiques when referencing rationale.",
            "Recognizes when a design decision conflicts with a stated principle.",
            "Can explain the difference between a design principle and a design guideline."
          ],
          "evidence_artifacts": [
            "Cited a design principle in a review to justify a decision.",
            "Identified a principle violation in a critique and proposed an alternative.",
            "Correctly explained a principle to a new team member or PM."
          ],
          "next_level_threshold": "Ready for Contributor when they help articulate principles for specific initiatives without a template."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Facilitates a principle-definition session for a new feature or product area.",
            "Writes principles that are specific enough to guide decisions, not so vague they apply everywhere.",
            "Tests principles against real design tradeoffs to ensure they're useful.",
            "Communicates principles to cross-functional partners clearly."
          ],
          "evidence_artifacts": [
            "Set of principles they authored was used to make at least one contentious design decision.",
            "PM or Engineering referenced a principle they defined during a scope discussion.",
            "Principles document reviewed positively by a senior designer or design lead."
          ],
          "next_level_threshold": "Ready for Independent when their principles consistently guide teams through genuine ambiguity and tradeoffs — not just easy decisions."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Authors clear, actionable design principles that hold up under pressure and edge cases.",
            "Uses principles to resolve disputes between competing design directions.",
            "Distinguishes between principles that are aspirational and those that are operational.",
            "Revisits and revises principles when they stop being useful."
          ],
          "evidence_artifacts": [
            "Principle they authored resolved a design standoff that had been unresolved for a sprint.",
            "Principles document updated and versioned at least once based on team feedback.",
            "Cross-functional team cited a principle in a product decision without prompting from the designer."
          ],
          "next_level_threshold": "Ready for Expert when their principles influence multiple product areas and establish long-term design direction."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Establishes design principles that influence product direction across multiple teams and quarters.",
            "Leads the organization in evolving principles as the product matures.",
            "Teaches others how to write and apply effective principles.",
            "Ensures principles are embedded in onboarding, critiques, and design reviews."
          ],
          "evidence_artifacts": [
            "Principles they authored appear in onboarding materials, design system documentation, or brand guidelines.",
            "Led a principles workshop attended by 2+ product teams.",
            "Principles referenced in a product strategy or executive-level conversation."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A design principle that doesn't change how you'd make a decision isn't a principle — it's a platitude. 'Be simple' doesn't tell anyone which of two competing designs to choose. Good principles create useful disagreements.",
      "anti_patterns": "Learner: Treating design principles as decoration for presentations. Contributor: Writing principles so broad they could apply to any product ('Be human,' 'Build for clarity'). Independent: Creating principles that optimize for elegance without accounting for business or technical constraints. Expert: Defining principles in isolation and expecting adoption without buy-in."
    },
    {
      "id": "job_skills_11",
      "category": "Design Skills",
      "skill_number": 11,
      "name": "Executes Journey Mapping & Persona Development",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Assists in mapping exercises",
          "typical_scope": "Prompted"
        },
        {
          "level": "Contributor",
          "core_shift": "Creates maps tied to features",
          "typical_scope": "Design decisions"
        },
        {
          "level": "Independent",
          "core_shift": "Develops end-to-end lifecycle journeys",
          "typical_scope": "Systemic gaps"
        },
        {
          "level": "Expert",
          "core_shift": "Frameworks adopted across teams",
          "typical_scope": "Portfolio-level strategy"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Documents touchpoints, pain points, and emotional states in a journey map exercise with guidance.",
            "Understands the difference between a persona and a user segment.",
            "Can explain what a journey map is for and when it's useful.",
            "Contributes information to an existing persona or journey map."
          ],
          "evidence_artifacts": [
            "Added documented touchpoints to an existing journey map that were validated by a senior designer.",
            "Correctly identified the emotional arc of a user journey when asked.",
            "Distinguished between two different user types in a product discussion."
          ],
          "next_level_threshold": "Ready for Contributor when they independently create journey maps and personas tied to specific features and use those artifacts to inform design decisions."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Creates accurate journey maps for specific flows, including touchpoints, actions, thoughts, emotions, and pain points.",
            "Develops personas grounded in actual research — not assumed demographics.",
            "Connects journey map insights directly to UI and flow decisions.",
            "Keeps artifacts current as product and research evolve."
          ],
          "evidence_artifacts": [
            "Journey map produced for a feature that was referenced in a design spec or PRD.",
            "Persona documented with at least one direct research citation per key attribute.",
            "Design decision traceable to a specific journey stage or pain point they mapped."
          ],
          "next_level_threshold": "Ready for Independent when journey maps reveal systemic gaps that span multiple features or product areas, not just single-flow pain points."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Develops end-to-end lifecycle journey maps spanning onboarding, activation, retention, and churn.",
            "Identifies systemic experience gaps that require cross-team coordination to address.",
            "Creates persona ecosystems (primary, secondary, anti-personas) that reflect real user diversity.",
            "Uses journey maps as alignment tools across PM, Engineering, and Marketing — not just design deliverables."
          ],
          "evidence_artifacts": [
            "Journey map they created revealed a cross-team gap that became a roadmap item.",
            "Lifecycle journey used in a quarterly planning session to inform sequencing.",
            "Persona ecosystem referenced by PM in a PRD as the basis for feature scope decisions."
          ],
          "next_level_threshold": "Ready for Expert when their journey frameworks are adopted across teams and inform portfolio-level strategy."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Creates journey frameworks adopted across multiple teams as standard practice.",
            "Establishes guidelines for when and how to create journey maps and personas.",
            "Informs portfolio-level strategy using cross-product journey insight.",
            "Teaches teams how to create and use journey maps effectively."
          ],
          "evidence_artifacts": [
            "Journey framework they defined is used by 2+ product teams.",
            "Portfolio strategy doc references journey insight they produced.",
            "Led a journey mapping workshop attended by multiple product areas."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A journey map that lives in Figma and is never referenced again was a design exercise, not a design tool. The measure of this skill is not the artifact — it's whether the artifact changes decisions.",
      "anti_patterns": "Learner: Mapping the ideal journey rather than the actual one. Contributor: Creating journey maps that describe what the product does rather than what the user experiences. Independent: Producing comprehensive journey maps that are too detailed to be usable in planning. Expert: Building such sophisticated frameworks that only they can interpret them."
    },
    {
      "id": "job_skills_12",
      "category": "Design Skills",
      "skill_number": 12,
      "name": "Executes Concept Development",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Contributes ideas in sessions",
          "typical_scope": "Prompted"
        },
        {
          "level": "Contributor",
          "core_shift": "Develops multiple viable concepts",
          "typical_scope": "Within constraints"
        },
        {
          "level": "Independent",
          "core_shift": "Creates differentiated, insight-grounded concepts",
          "typical_scope": "Product area"
        },
        {
          "level": "Expert",
          "core_shift": "Defines breakthrough concepts",
          "typical_scope": "Shifts product direction"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Generates ideas during structured ideation exercises (Crazy 8s, How Might We).",
            "Contributes multiple options rather than anchoring on the first idea.",
            "Understands that concepts at this stage should be divergent, not polished.",
            "Can sketch or describe a concept clearly enough for others to evaluate it."
          ],
          "evidence_artifacts": [
            "Contributed at least 5 distinct concepts in a team ideation session.",
            "Concept sketch presented to the team without requiring extensive verbal explanation.",
            "Did not self-edit during divergent ideation (no 'this probably won't work, but...' preambles)."
          ],
          "next_level_threshold": "Ready for Contributor when they independently develop multiple viable concepts with explicit tradeoffs evaluated — not just ideation participation."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Develops 3+ distinct concepts for a design problem, each representing a genuinely different approach.",
            "Evaluates each concept against user needs, technical feasibility, and business goals.",
            "Communicates the core hypothesis of each concept clearly.",
            "Selects and defends a recommended concept with rationale."
          ],
          "evidence_artifacts": [
            "Delivered a concepts deck with 3+ options reviewed positively in a design critique.",
            "PM or Engineering engaged with the concepts meaningfully and asked comparative questions.",
            "Recommended concept was selected and moved forward with clear documentation of tradeoffs."
          ],
          "next_level_threshold": "Ready for Independent when concepts are grounded in user insight and reveal a genuine understanding of the problem space — not just visual variations of the same idea."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Creates concepts that are differentiated by underlying hypothesis, not just visual treatment.",
            "Grounds each concept in a specific user insight or unmet need.",
            "Explores the full opportunity space before committing — considers approaches that challenge current assumptions.",
            "Facilitates concept reviews that generate productive discussion rather than premature alignment."
          ],
          "evidence_artifacts": [
            "A concept they developed challenged the original brief and was accepted as the better direction.",
            "Concept grounded in a specific research insight they can cite directly.",
            "Concept review session produced meaningful debate that improved the final direction."
          ],
          "next_level_threshold": "Ready for Expert when concepts meaningfully shift product direction or positioning — not just improve execution of a known idea."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Defines breakthrough concepts that open new product opportunities or reframe competitive positioning.",
            "Creates concepts at a systems level — considering how a new idea changes adjacent features, flows, and business model.",
            "Knows when to push for a bold concept and when incremental improvement is the right call.",
            "Builds internal and executive support for ambitious concepts through storytelling and evidence."
          ],
          "evidence_artifacts": [
            "A concept they developed was adopted as a major product initiative.",
            "Executive or product leadership cited their concept as a strategic direction.",
            "Concept resulted in a patent application, external publication, or award nomination."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Presenting one concept as 'the answer' removes optionality before stakeholders have seen the space. The purpose of concept development is to expand before contracting — one option is a proposal, not concepting.",
      "anti_patterns": "Learner: Polishing one idea instead of exploring many. Contributor: Creating variations on the same concept rather than genuinely different approaches. Independent: Being so committed to a bold concept that they can't integrate feedback. Expert: Setting a concept quality bar so high that no initiative reaches it without their involvement."
    },
    {
      "id": "job_skills_13",
      "category": "Design Skills",
      "skill_number": 13,
      "name": "Considers the End-to-End Experience When Problem Solving",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Understands upstream/downstream when prompted",
          "typical_scope": "Single screen"
        },
        {
          "level": "Contributor",
          "core_shift": "Designs beyond single screens",
          "typical_scope": "Entry and exit states"
        },
        {
          "level": "Independent",
          "core_shift": "Connects cross-channel and lifecycle experiences",
          "typical_scope": "Onboarding to retention"
        },
        {
          "level": "Expert",
          "core_shift": "Architects holistic service ecosystems",
          "typical_scope": "Cross-product and team"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Understands that screens exist within a flow, and flows exist within a journey.",
            "Can name the screen before and after any screen they're designing when asked.",
            "Recognizes when a design decision will impact other parts of the product.",
            "Considers entry state (how does a user arrive here?) and exit state (where do they go next?) when asked."
          ],
          "evidence_artifacts": [
            "Named upstream and downstream touchpoints for a screen in a design review.",
            "Flagged a downstream impact of a design decision before it was caught by Engineering.",
            "Correctly described the entry states for a feature they were designing."
          ],
          "next_level_threshold": "Ready for Contributor when they proactively design beyond single screens — including entry and exit states — without being prompted."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Designs with awareness of all states in a flow: empty, loading, error, edge cases, and success.",
            "Considers how a user arrives (direct link, notification, search) and how the design should adapt.",
            "Flags dependencies on adjacent features or teams proactively.",
            "Maps the full task completion journey for a feature, not just the primary screen."
          ],
          "evidence_artifacts": [
            "Feature design included all entry states and edge cases before Engineering flagged them.",
            "Flagged a dependency on another team's feature in a design review.",
            "Complete flow map delivered alongside screen designs for a feature."
          ],
          "next_level_threshold": "Ready for Independent when they proactively connect cross-channel and lifecycle experiences — thinking about onboarding through retention, not just feature-level flows."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Designs features with explicit awareness of how they affect the onboarding experience, retention loops, and cross-channel touchpoints (email, push, in-product).",
            "Identifies when a feature optimization creates friction elsewhere in the user lifecycle.",
            "Proactively maps the cross-product journey when starting a new initiative.",
            "Designs for the 'returning user' and 'power user' states, not just the first-time experience."
          ],
          "evidence_artifacts": [
            "Identified a lifecycle friction point that became a separate roadmap item.",
            "Cross-channel design consideration (notification, email, in-product) included unprompted in a feature spec.",
            "Returning user state designed and validated alongside the first-time user experience."
          ],
          "next_level_threshold": "Ready for Expert when they architect holistic service ecosystems across products and teams — not just design holistic features."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Leads holistic experience architecture across multiple product areas and teams.",
            "Identifies systemic experience breaks that no single team owns and drives resolution.",
            "Creates shared frameworks for thinking about cross-product experience consistency.",
            "Influences how the organization measures and talks about end-to-end experience quality."
          ],
          "evidence_artifacts": [
            "Drove resolution of a cross-team experience break that had been unaddressed.",
            "Framework they created is used by multiple product teams to evaluate end-to-end experience.",
            "A metric they proposed to measure holistic experience quality was adopted by the product org."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A designer who delivers a beautiful screen that breaks the flow around it has optimized locally at the expense of the whole. End-to-end thinking isn't a phase of the process — it's a lens that should be active from day one.",
      "anti_patterns": "Learner: Treating handoff as where their responsibility ends. Contributor: Mapping entry and exit states but not the emotional context that surrounds them. Independent: Optimizing the end-to-end flow within their product area without considering cross-product touchpoints. Expert: Designing ecosystem-level architecture that no individual team can execute without their coordination."
    },
    {
      "id": "job_skills_14",
      "category": "Design Skills",
      "skill_number": 14,
      "name": "Defines End-to-End Service Blueprints",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Understands frontstage/backstage concepts",
          "typical_scope": "Prompted"
        },
        {
          "level": "Contributor",
          "core_shift": "Contributes to blueprints for initiatives",
          "typical_scope": "Specific features"
        },
        {
          "level": "Independent",
          "core_shift": "Defines cross-functional blueprints",
          "typical_scope": "Roles, systems, dependencies"
        },
        {
          "level": "Expert",
          "core_shift": "Institutionalizes service design practices",
          "typical_scope": "Org-wide"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Understands the concept of frontstage (what users see) and backstage (what enables it).",
            "Can identify the line of visibility between user actions and internal processes.",
            "Documents their portion of a blueprint when assigned a section.",
            "Asks 'what has to be true behind the scenes for this to work?' when evaluating designs."
          ],
          "evidence_artifacts": [
            "Correctly labeled frontstage and backstage elements in a provided blueprint.",
            "Contributed accurate backstage documentation for a feature they owned.",
            "Asked about a backstage dependency before shipping a frontend change."
          ],
          "next_level_threshold": "Ready for Contributor when they independently contribute meaningful blueprint documentation for a specific initiative."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Documents all layers of a service blueprint: user actions, frontstage, backstage, support processes, and enabling systems.",
            "Coordinates with Engineering, Operations, and Support to validate backstage accuracy.",
            "Uses the blueprint to identify service gaps and failure points.",
            "Keeps blueprints updated as systems change."
          ],
          "evidence_artifacts": [
            "Blueprint validated by Engineering and Operations with no significant inaccuracies.",
            "Service gap identified in a blueprint that became a design or engineering ticket.",
            "Blueprint updated within one sprint of a significant system change."
          ],
          "next_level_threshold": "Ready for Independent when they define blueprints for cross-functional initiatives that clarify roles, systems, and dependencies across teams."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Independently defines cross-functional service blueprints that align multiple teams on shared understanding.",
            "Uses blueprints to facilitate conversations about process ownership and system accountability.",
            "Identifies orphaned processes — things that need to happen but no team owns.",
            "Proposes system or process changes based on blueprint analysis."
          ],
          "evidence_artifacts": [
            "Blueprint used in a cross-team planning session to assign ownership for previously unowned processes.",
            "Orphaned process they identified was assigned and resolved.",
            "Blueprint became the working reference for an initiative across 3+ teams."
          ],
          "next_level_threshold": "Ready for Expert when they institutionalize service design practices across the organization."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Establishes service design as a standard practice in the product delivery process.",
            "Creates blueprint templates and guidance used across teams.",
            "Trains product managers, engineers, and designers on service design fundamentals.",
            "Uses service design to drive organizational change — not just document existing processes."
          ],
          "evidence_artifacts": [
            "Blueprint templates they created are used by 2+ product teams.",
            "Service design training they led resulted in teams independently creating blueprints.",
            "A blueprint-informed recommendation drove an organizational change (process, ownership, tooling)."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A service blueprint that shows only what the design team controls is a flow diagram, not a blueprint. The value of this skill is in mapping what the user can't see — and finding the failure points hidden in the backstage.",
      "anti_patterns": "Learner: Documenting only the happy path frontstage experience. Contributor: Creating accurate blueprints that no one references after the discovery phase. Independent: Building blueprints so complex they require the designer to explain them every time. Expert: Using blueprints as a consulting tool without transferring capability to the teams who need to maintain them."
    },
    {
      "id": "job_skills_15",
      "category": "Design Skills",
      "skill_number": 15,
      "name": "Collaborates on Effective Information Architecture",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Uses established IA patterns correctly",
          "typical_scope": "Single nav or structure"
        },
        {
          "level": "Contributor",
          "core_shift": "Structures content logically within features",
          "typical_scope": "Labeling and hierarchy"
        },
        {
          "level": "Independent",
          "core_shift": "Designs scalable IA models",
          "typical_scope": "Complex systems, growth"
        },
        {
          "level": "Expert",
          "core_shift": "Defines IA standards and governance",
          "typical_scope": "Product ecosystem"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Uses existing navigation structures and IA patterns correctly without creating one-off exceptions.",
            "Understands the difference between top-level navigation, secondary navigation, and contextual navigation.",
            "Checks new content against existing taxonomy before proposing new labels or categories.",
            "Can explain why a labeling decision matters for discoverability."
          ],
          "evidence_artifacts": [
            "Added a new feature to the existing IA without creating an inconsistent exception.",
            "Flagged a labeling inconsistency in a design review.",
            "Correctly placed a new entry point within the existing nav structure with documented rationale."
          ],
          "next_level_threshold": "Ready for Contributor when they independently structure content within scoped features — ensuring labeling clarity, hierarchy, and consistency without guidance."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Structures content and navigation for a feature with clear hierarchy, labeling, and grouping logic.",
            "Tests IA decisions with card sorting or tree testing before committing.",
            "Ensures new content fits the existing IA model before proposing structural changes.",
            "Documents IA decisions so Engineering and Content can implement consistently."
          ],
          "evidence_artifacts": [
            "IA for a feature validated with at least one card sort or tree test.",
            "Engineering implemented navigation correctly without IA-related questions during development.",
            "No significant IA rework required post-launch for a feature they owned."
          ],
          "next_level_threshold": "Ready for Independent when they design scalable IA models for complex systems that anticipate growth and extensibility."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Designs IA models that accommodate future content growth without requiring restructuring.",
            "Identifies when the current IA is reaching a scalability limit and proposes solutions.",
            "Balances user mental models with business categorization in labeling decisions.",
            "Leads IA initiatives across multiple product areas or navigation surfaces."
          ],
          "evidence_artifacts": [
            "IA model they designed accommodated 3+ subsequent feature additions without restructuring.",
            "Identified a scalability risk in the existing IA before it became a user-facing problem.",
            "IA decision documentation they created was adopted as the reference for future development."
          ],
          "next_level_threshold": "Ready for Expert when they define IA standards and governance across the product ecosystem."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Defines IA principles, naming conventions, and governance frameworks for the product ecosystem.",
            "Establishes a process for evaluating new content requests against the IA model.",
            "Trains designers and PMs on IA best practices.",
            "Partners with SEO, Content Strategy, and Engineering to ensure IA is implemented consistently."
          ],
          "evidence_artifacts": [
            "IA governance framework they created is referenced in product planning and content strategy.",
            "Led an IA audit that identified and resolved systemic inconsistencies across the product.",
            "Cross-functional teams (Content, SEO, Eng) reference their IA standards independently."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "An IA that makes sense to the team but not to users is an internal model, not a product. The test of good IA is user behavior — can people find what they're looking for without help?",
      "anti_patterns": "Learner: Adding new navigation items for every new feature without questioning the structure. Contributor: Designing IA that fits today's content perfectly but breaks when two new features are added. Independent: Optimizing IA for the power user mental model while making it harder for new users to orient. Expert: Creating IA governance so rigorous that shipping new features requires a committee."
    },
    {
      "id": "job_skills_16",
      "category": "Design Skills",
      "skill_number": 16,
      "name": "Defines Effective & Efficient User Flows",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Creates happy-path flows",
          "typical_scope": "Simple tasks"
        },
        {
          "level": "Contributor",
          "core_shift": "Includes edge cases and error states",
          "typical_scope": "Feature-level"
        },
        {
          "level": "Independent",
          "core_shift": "Optimizes flows to reduce friction",
          "typical_scope": "Balancing constraints"
        },
        {
          "level": "Expert",
          "core_shift": "Establishes cross-product flow architecture",
          "typical_scope": "Systemic friction"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Maps the primary path through a simple task with correct flow notation.",
            "Understands what decision points, branches, and termination states are.",
            "Can walk through their own flow and identify where a user might get confused.",
            "Distinguishes between a happy path and an error state."
          ],
          "evidence_artifacts": [
            "Delivered a happy-path flow for a simple feature that Engineering could follow without clarification.",
            "Correctly identified one decision point and one error state in a flow they created.",
            "Flow reviewed by a senior designer with minor, not structural, revisions."
          ],
          "next_level_threshold": "Ready for Contributor when they independently create flows that include edge cases, error states, and alternate paths."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Maps all meaningful paths through a flow: happy path, error recovery, empty states, time-outs, and permission edge cases.",
            "Annotates decision points with the logic that drives branching.",
            "Validates flows with Engineering to ensure technical feasibility of every branch.",
            "Identifies redundant steps and proposes simplifications before UI work begins."
          ],
          "evidence_artifacts": [
            "Flow document included all error and edge cases; Engineering flagged zero missing states during development.",
            "Flow simplification proposal accepted by PM — reduced step count before UI design began.",
            "Flow used as the canonical reference for a feature throughout development."
          ],
          "next_level_threshold": "Ready for Independent when they optimize flows to measurably reduce friction and cognitive load while balancing real constraints."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Identifies the highest-friction points in an existing flow using data (drop-off, task completion time, error rates) and redesigns based on evidence.",
            "Reduces cognitive load through progressive disclosure, smart defaults, and step consolidation.",
            "Designs flows that accommodate multi-session tasks, interrupted states, and re-entry points.",
            "Identifies when a flow is solving a symptom rather than the underlying structural problem."
          ],
          "evidence_artifacts": [
            "Flow redesign improved a measurable metric (task completion rate, drop-off reduction, time-on-task).",
            "Multi-session flow handling included in a spec before Engineering asked about it.",
            "Identified a structural flow issue that required a broader architectural change — and made the case for it."
          ],
          "next_level_threshold": "Ready for Expert when they establish cross-product flow architecture standards and identify systemic friction across the product."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Identifies systemic flow inconsistencies across the product and proposes architectural solutions.",
            "Establishes flow documentation standards used across teams.",
            "Leads cross-product flow audits that surface shared patterns and shared problems.",
            "Influences engineering architecture decisions based on flow analysis."
          ],
          "evidence_artifacts": [
            "Cross-product flow audit they led resulted in 2+ teams adopting a shared solution.",
            "Flow documentation standard they created is referenced in new feature specs org-wide.",
            "Engineering architecture decision influenced by flow analysis they presented."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A flow that works in a demo and breaks in production was never fully mapped. The difference between a complete flow and an incomplete one is visible the first time a real user hits an edge case — often in a support ticket.",
      "anti_patterns": "Learner: Mapping only the path they hope users take. Contributor: Including edge cases but not validating that the technical system can actually support them. Independent: Optimizing a flow so aggressively that the result is clever but brittle. Expert: Defining flow standards so detailed that junior designers can't make local decisions without a reference."
    },
    {
      "id": "job_skills_17",
      "category": "Design Skills",
      "skill_number": 17,
      "name": "Executes High-Fidelity, Brand-Aligned Visual Designs",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Applies what exists correctly",
          "typical_scope": "Single screen or component"
        },
        {
          "level": "Contributor",
          "core_shift": "Delivers polished, production-ready UI",
          "typical_scope": "Feature end-to-end"
        },
        {
          "level": "Independent",
          "core_shift": "Elevates cohesion across initiatives",
          "typical_scope": "Product area or platform"
        },
        {
          "level": "Expert",
          "core_shift": "Evolves the visual language itself",
          "typical_scope": "Cross-product, system-level"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Applies correct type scale, spacing tokens, and color variables without deviation.",
            "Uses approved components from the Figma library; does not detach without reason.",
            "Maintains 4.5:1 minimum contrast ratio for all text and interactive elements.",
            "Flags design system gaps rather than improvising inconsistent one-offs."
          ],
          "evidence_artifacts": [
            "Designs pass a Figma accessibility plugin check with no critical failures.",
            "No detached components in delivered files without documented rationale.",
            "Feedback in visual review addressed preference, not system violations."
          ],
          "next_level_threshold": "Ready for Contributor when they consistently deliver work needing zero correction for system compliance and make confident independent decisions about layout and hierarchy."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Delivers complete, production-ready UI including all states: default, hover, focus, disabled, loading, empty, and error.",
            "Makes layout decisions that are defensible — articulates visual reasoning behind spacing, grouping, and hierarchy.",
            "Applies brand guidelines consistently across surfaces without a checklist.",
            "Produces work Engineering can build without redlines or clarification meetings."
          ],
          "evidence_artifacts": [
            "Feature delivered with complete state coverage, verified in a design QA pass post-build.",
            "Zero accessibility regressions flagged in UAT for features they owned.",
            "Engineering stated in a retro that handoff was clear and complete."
          ],
          "next_level_threshold": "Ready for Independent when they proactively consider how their design decisions affect adjacent features and the system as a whole."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Reviews own and peers' work for cross-feature visual consistency before a design review.",
            "Refines micro-interactions and transition behaviors that improve perceived performance.",
            "Identifies when a component needs to evolve and proposes a system-compatible solution.",
            "Designs for responsive breakpoints and edge cases proactively."
          ],
          "evidence_artifacts": [
            "Initiated a design system contribution adopted by the team.",
            "Led a visual QA pass on a major release, documented issues, and tracked resolution.",
            "A visual pattern they established is now used by other designers."
          ],
          "next_level_threshold": "Ready for Expert when they actively shape how the visual language evolves and their quality bar demonstrably raises the output of the team."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Authors visual design principles that guide decision-making across multiple product areas.",
            "Leads initiatives that evolve the design system's visual language (token architecture, component philosophy, motion).",
            "Defines quality standards for visual review used org-wide.",
            "Mentors designers on visual reasoning — teaches 'why it looks right,' not just 'how to make it look right.'"
          ],
          "evidence_artifacts": [
            "Led a major design system visual overhaul or rebrand integration with measurable adoption.",
            "Visual standards document they authored is in active team use.",
            "Work recognized externally for design quality."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "High-fidelity execution is not the same as high visual quality. A designer who perfects a screen solving the wrong problem has executed well here and failed at Skill 1. A designer with good UX instincts but consistently incomplete states is not yet a Contributor — regardless of how polished the primary flow looks.",
      "anti_patterns": "Learner: Over-customizing components to look different rather than working within the system. Contributor: Delivering designs that look complete but have no edge case coverage. Independent: Pushing for visual perfection in low-risk areas while under-investing in high-complexity flows. Expert: Setting a visual bar so high it creates delivery friction and demotivates junior designers."
    },
    {
      "id": "job_skills_18",
      "category": "Design Skills",
      "skill_number": 18,
      "name": "Constructs & Organizes Design Files Effectively & Efficiently",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Uses correct templates and components",
          "typical_scope": "Single file"
        },
        {
          "level": "Contributor",
          "core_shift": "Structures files for phase and collaboration",
          "typical_scope": "Feature or initiative"
        },
        {
          "level": "Independent",
          "core_shift": "Creates scalable multi-designer systems",
          "typical_scope": "Cross-initiative"
        },
        {
          "level": "Expert",
          "core_shift": "Defines org-wide Figma standards",
          "typical_scope": "Governance and branching"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Uses the correct Figma template for the project phase.",
            "Names pages clearly and consistently (e.g., 'Discovery', 'Exploration', 'Handoff').",
            "Uses approved components and tokens; avoids detached components.",
            "Organizes layers with descriptive names — not 'Frame 47' or 'Rectangle 3.'"
          ],
          "evidence_artifacts": [
            "File reviewed by a senior designer with only naming or organization feedback — no structural issues.",
            "No detached components without documented justification.",
            "Layer panel navigable by another designer without verbal explanation."
          ],
          "next_level_threshold": "Ready for Contributor when they independently structure files by phase with clean organization that a teammate can navigate without guidance."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Structures files by phase: Discovery, Exploration, Refinement, Final/Handoff.",
            "Uses auto-layout consistently for all components and responsive frames.",
            "Maintains clean layer naming, component organization, and page structure across a full feature.",
            "Reduces file bloat by archiving explorations rather than leaving them live."
          ],
          "evidence_artifacts": [
            "File handed off to Engineering with zero questions about file structure or layer organization.",
            "Auto-layout applied consistently — no hard-coded sizes on components.",
            "File size and organization reviewed positively in a team file audit."
          ],
          "next_level_threshold": "Ready for Independent when they create scalable file systems for multi-designer collaboration across multiple initiatives."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Designs file architectures that work for 3+ designers working simultaneously without conflicts.",
            "Establishes versioning conventions and documents them for the team.",
            "Creates component libraries or token sets that reduce redundancy across files.",
            "Anticipates how files will be used in handoff and structures accordingly from day one."
          ],
          "evidence_artifacts": [
            "Multi-designer initiative delivered with zero file conflicts or organization-related delays.",
            "Versioning convention they proposed adopted by the team.",
            "Component library they created is in use across 2+ projects."
          ],
          "next_level_threshold": "Ready for Expert when they define org-wide Figma standards, branching practices, and governance models."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Defines Figma file standards, naming conventions, and governance models for the design org.",
            "Establishes branching practices for large-scale file collaboration.",
            "Conducts periodic file audits and drives improvements based on findings.",
            "Trains the team on file organization best practices and maintains documentation."
          ],
          "evidence_artifacts": [
            "Figma standards document they authored is referenced in onboarding.",
            "File audit they led resulted in measurable improvement in handoff quality or collaboration speed.",
            "New designers onboard to the Figma environment successfully using documentation they created."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A Figma file that only the creator can navigate is a liability, not a deliverable. The test: can a designer who had nothing to do with a project open the file and find what they need in under 2 minutes?",
      "anti_patterns": "Learner: Prioritizing design exploration over file organization and 'cleaning up later' (which never happens). Contributor: Over-organizing to the point that the file structure adds work without adding value. Independent: Creating file systems that are perfectly structured but undocumented. Expert: Defining standards so detailed that designers optimize for file hygiene over design quality."
    },
    {
      "id": "job_skills_19",
      "category": "Design Skills",
      "skill_number": 19,
      "name": "Advocates for & Executes Accessible Experiences",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Uses plugins, understands contrast basics",
          "typical_scope": "Component-level"
        },
        {
          "level": "Contributor",
          "core_shift": "Designs accessible patterns by default",
          "typical_scope": "Feature end-to-end"
        },
        {
          "level": "Independent",
          "core_shift": "Identifies risks early, designs inclusively",
          "typical_scope": "Concepting phase"
        },
        {
          "level": "Expert",
          "core_shift": "Embeds accessibility into system and roadmap",
          "typical_scope": "Org-wide standard"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Uses Figma accessibility plugins (Stark, A11y) to check contrast.",
            "Understands WCAG 2.1 AA requirements at a basic level.",
            "Can identify an accessibility failure when it's pointed out.",
            "Asks about keyboard navigation and screen reader behavior when reviewing components."
          ],
          "evidence_artifacts": [
            "No critical accessibility failures in designs reviewed with a plugin check.",
            "Correctly identified a contrast failure in a design critique.",
            "Asked an accessibility-related question in at least one design review or sprint."
          ],
          "next_level_threshold": "Ready for Contributor when they design with accessible color contrast, keyboard flows, and clear error messaging by default — without being reminded."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Designs with accessible contrast, focus states, error messaging, form labeling, and touch target sizes by default.",
            "Considers keyboard navigation order for every interactive flow.",
            "Writes alt text guidance for images and icon labels in handoff documentation.",
            "Reviews designs against WCAG 2.1 AA before marking them ready for development."
          ],
          "evidence_artifacts": [
            "Zero critical accessibility failures flagged in a development accessibility audit for features they owned.",
            "Keyboard flow documented in handoff spec.",
            "Alt text and ARIA label guidance included in at least one handoff without being requested."
          ],
          "next_level_threshold": "Ready for Independent when they identify accessibility risks in early concepting and design inclusive patterns proactively — before reviews."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Identifies accessibility risks at the concept and flow level — before high-fidelity work begins.",
            "Proposes inclusive patterns that work across assistive technology types (screen reader, switch navigation, voice control).",
            "Advocates for accessibility investment in roadmap and sprint planning.",
            "Tests designs with assistive technology or works with users with disabilities in research."
          ],
          "evidence_artifacts": [
            "Accessibility concern raised at concept stage that prevented a rework.",
            "Tested a design with VoiceOver, NVDA, or an equivalent tool and documented findings.",
            "Accessibility investment advocated for in a planning session and approved."
          ],
          "next_level_threshold": "Ready for Expert when they embed accessibility standards into design systems, QA processes, and roadmap prioritization systematically."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Embeds accessibility requirements into design system components — all components meet AA by default.",
            "Establishes accessibility checkpoints in the design-to-development workflow.",
            "Advocates for accessibility as a roadmap priority — not just a QA checklist.",
            "Builds team accessibility capability through training, resources, and critique standards."
          ],
          "evidence_artifacts": [
            "Design system components they contributed all meet WCAG 2.1 AA with documentation.",
            "Accessibility checkpoint integrated into the delivery workflow at their initiative.",
            "Team accessibility knowledge measurably improved after training or resources they created."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Accessibility that's checked at QA is already too late. Reworking a feature for accessibility after development costs 10x what designing it accessibly costs at the start. This skill's value is proportional to how early in the process it's applied.",
      "anti_patterns": "Learner: Checking contrast and calling it done. Contributor: Designing for visual accessibility while ignoring keyboard and screen reader patterns. Independent: Advocating for accessibility research without doing it. Expert: Setting such a high accessibility bar that it creates delivery friction for the team."
    },
    {
      "id": "job_skills_20",
      "category": "Design Skills",
      "skill_number": 20,
      "name": "Utilizes Systems Thinking to Craft & Maintain a Design System",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Uses existing components appropriately",
          "typical_scope": "Component consumer"
        },
        {
          "level": "Contributor",
          "core_shift": "Extends components responsibly",
          "typical_scope": "Documented contributions"
        },
        {
          "level": "Independent",
          "core_shift": "Identifies inconsistencies, proposes improvements",
          "typical_scope": "Scalable system changes"
        },
        {
          "level": "Expert",
          "core_shift": "Governs and evolves system architecture",
          "typical_scope": "Cross-team and platform"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Finds and uses the correct component for a given design need — doesn't create custom alternatives unnecessarily.",
            "Understands the difference between a component, a variant, and a one-off.",
            "Reports missing or broken components to the design system team rather than improvising.",
            "Applies tokens (color, spacing, typography) consistently without overrides."
          ],
          "evidence_artifacts": [
            "Zero custom components created without design system team review.",
            "Filed at least one design system issue or request with a clear description.",
            "Token usage verified in delivered files with no direct hex or pixel overrides without justification."
          ],
          "next_level_threshold": "Ready for Contributor when they extend components responsibly — documenting usage, flagging implications, and getting system team review before contributing."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Proposes component extensions or new variants when existing options don't meet a genuine need.",
            "Documents proposed changes: use case, rationale, props, states, and implementation guidance.",
            "Validates that a new component is not already solved elsewhere in the system before proposing it.",
            "Follows the contribution process and gets design system team sign-off before adding to the library."
          ],
          "evidence_artifacts": [
            "Component contribution reviewed and approved by the design system team.",
            "Contribution documentation sufficient for another designer to use the component correctly.",
            "Did not introduce a duplicate component that already existed in the system."
          ],
          "next_level_threshold": "Ready for Independent when they identify systemic inconsistencies and propose scalable improvements — not just component-level additions."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Identifies patterns of inconsistency across the product and proposes system-level solutions.",
            "Evaluates the downstream impact of system changes before proposing them.",
            "Leads component deprecation or migration efforts with clear communication and timelines.",
            "Balances consistency with flexibility — knows when to standardize and when to allow variation."
          ],
          "evidence_artifacts": [
            "Systemic inconsistency they identified resulted in a design system initiative.",
            "Migration plan they created successfully transitioned teams to an updated component.",
            "Proposed a system change, analyzed the impact, and coordinated the rollout across affected teams."
          ],
          "next_level_threshold": "Ready for Expert when they govern and evolve system architecture across teams and platforms."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Governs the design system — sets contribution standards, reviews submissions, and maintains quality.",
            "Evolves system architecture as the product scales (token reorganization, component hierarchy, multi-platform support).",
            "Facilitates design system roadmap planning with input from product teams.",
            "Builds internal capability — designers know how to use and contribute to the system effectively."
          ],
          "evidence_artifacts": [
            "Design system contribution standards they defined are in active use.",
            "System architecture change they led improved adoption rate or reduced one-off exceptions.",
            "Onboarding materials for the design system they created are referenced by new designers."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A designer who creates a beautiful custom component rather than extending the system hasn't solved the design problem — they've created a maintenance problem. Every one-off is a future inconsistency.",
      "anti_patterns": "Learner: Detaching components for fine-grained control and leaving them detached. Contributor: Contributing components that solve their own problem but create complexity for others. Independent: Identifying systemic issues but proposing solutions too complex for the team to maintain. Expert: Creating a governance process so rigorous it slows contribution to a halt."
    },
    {
      "id": "job_skills_21",
      "category": "Design Skills",
      "skill_number": 21,
      "name": "Executes Interactive Prototypes",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Builds click-through prototypes",
          "typical_scope": "Basic feedback"
        },
        {
          "level": "Contributor",
          "core_shift": "Creates interactive prototypes for testing",
          "typical_scope": "Usability and demos"
        },
        {
          "level": "Independent",
          "core_shift": "Simulates complex logic and states",
          "typical_scope": "De-risk development"
        },
        {
          "level": "Expert",
          "core_shift": "Uses prototyping strategically",
          "typical_scope": "High-risk initiatives and innovation bets"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Creates a basic Figma click-through prototype with hotspots linking key screens.",
            "Understands the purpose of prototyping at different fidelities.",
            "Shares prototypes via link and can walk a stakeholder through them.",
            "Knows when a static prototype is sufficient vs. when interaction is required."
          ],
          "evidence_artifacts": [
            "Prototype shared with a stakeholder or PM for feedback before design review.",
            "Click-through covered the primary path without broken links.",
            "Received feedback on the prototype that improved the design."
          ],
          "next_level_threshold": "Ready for Contributor when they create interactive prototypes that support usability testing and stakeholder demos — not just screen walkthroughs."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Builds prototypes with realistic interactions: transitions, overlays, scroll behavior, and form inputs.",
            "Creates prototypes suitable for moderated usability testing — participant can operate independently.",
            "Simulates micro-interactions that affect comprehension (loading states, success/error feedback).",
            "Uses prototypes in stakeholder reviews to get more meaningful feedback than static designs would produce."
          ],
          "evidence_artifacts": [
            "Prototype used in a usability test where participants completed tasks without facilitator intervention on interaction issues.",
            "Stakeholder review feedback was richer and more specific than comparable static design reviews.",
            "Prototype included at least one non-trivial interaction (conditional logic, animation, overlay)."
          ],
          "next_level_threshold": "Ready for Independent when prototypes simulate complex logic, conditional states, and transitions that meaningfully de-risk development decisions."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Builds high-fidelity prototypes that simulate conditional logic, multi-state flows, and dynamic content.",
            "Uses prototypes to answer specific development questions before engineering begins.",
            "Selects the right prototyping tool for the fidelity required (Figma, ProtoPie, Framer, coded).",
            "Knows when a prototype has reached sufficient fidelity and stops before over-engineering it."
          ],
          "evidence_artifacts": [
            "Prototype answered a specific engineering question that would have required a build-and-test cycle otherwise.",
            "Conditional logic simulated in a prototype prevented a significant development rework.",
            "Used 2+ prototyping tools appropriately for different fidelity requirements."
          ],
          "next_level_threshold": "Ready for Expert when they use prototyping strategically to validate high-risk initiatives and innovation bets."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Uses high-fidelity prototyping strategically to validate bets before significant engineering investment.",
            "Defines when prototyping is the right investment vs. paper sketches or written specs.",
            "Creates prototypes that can be used in executive demos to communicate strategic direction.",
            "Teaches designers when, why, and how to prototype at different levels of fidelity."
          ],
          "evidence_artifacts": [
            "Prototype validated a high-risk bet before engineering investment — or invalidated it, saving significant resources.",
            "Executive demo using prototype they built influenced a product decision.",
            "Led a prototyping workshop or training that raised team capability."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A prototype that requires the designer to narrate every interaction isn't testing the design — it's testing the designer's ability to explain it. Good prototypes work without a handler.",
      "anti_patterns": "Learner: Building prototypes so low-fidelity that participants can't engage with them meaningfully. Contributor: Over-polishing prototypes to the point that they cost as much time as a production build. Independent: Simulating interactions so complex the prototype becomes the design artifact rather than a test vehicle. Expert: Prototyping when a sketch would have answered the question in 1/10th the time."
    },
    {
      "id": "job_skills_22",
      "category": "Design Skills",
      "skill_number": 22,
      "name": "Annotates, Packages & Hands Off Dev-Ready Assets",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Provides basic spacing annotations",
          "typical_scope": "Single screen"
        },
        {
          "level": "Contributor",
          "core_shift": "Documents states, behaviors, component usage",
          "typical_scope": "Feature-level"
        },
        {
          "level": "Independent",
          "core_shift": "Anticipates implementation constraints",
          "typical_scope": "Pre-handoff"
        },
        {
          "level": "Expert",
          "core_shift": "Establishes documentation standards",
          "typical_scope": "Org-wide quality"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Adds spacing, sizing, and color annotations to delivered screens.",
            "Marks which components are from the design system and which are custom.",
            "Organizes handoff files clearly enough for Engineering to find what they need.",
            "Can answer basic engineering questions about a design in a handoff review."
          ],
          "evidence_artifacts": [
            "Engineering implemented a simple feature without scheduling a follow-up clarification meeting.",
            "Annotations included spacing, type styles, and color references.",
            "File organized so Engineering found assets within 5 minutes without asking."
          ],
          "next_level_threshold": "Ready for Contributor when they document all states, behaviors, and component usage clearly for Engineering without gaps."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Documents every interactive state for every component: default, hover, focus, disabled, loading, error, empty, and success.",
            "Annotates interaction behaviors — what triggers what, and how transitions behave.",
            "Specifies component usage: when to use this variant vs. another.",
            "Provides clear guidance on what's a design system component vs. a custom implementation."
          ],
          "evidence_artifacts": [
            "Zero state-related questions from Engineering during development.",
            "Interaction annotation prevented a state implementation error.",
            "Handoff documentation rated clear by Engineering in a retro or 1:1 feedback."
          ],
          "next_level_threshold": "Ready for Independent when they anticipate responsive behavior, loading states, and implementation constraints before handoff — Engineering never has to ask."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Anticipates how designs will behave at different breakpoints and documents responsive rules before engineering asks.",
            "Flags implementation complexity in designs before development starts — proposes design adjustments where high complexity is not worth the UX gain.",
            "Includes API or data consideration notes when relevant.",
            "Produces handoff documentation that reduces build time and rework."
          ],
          "evidence_artifacts": [
            "Engineering cited handoff quality as a reason for on-time delivery in a retro.",
            "Flagged an implementation complexity that led to a design change saving 2+ days of engineering time.",
            "Responsive behavior documented completely before Engineering kickoff."
          ],
          "next_level_threshold": "Ready for Expert when they establish documentation standards that measurably improve build quality and reduce rework across the team."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Establishes handoff documentation standards used across the design team.",
            "Creates templates and checklists that reduce inconsistency in how different designers package work.",
            "Leads engineering partnership initiatives that improve design-to-build quality.",
            "Audits handoff quality periodically and identifies patterns of improvement."
          ],
          "evidence_artifacts": [
            "Handoff standards they created are referenced in design team onboarding.",
            "Engineering partnership initiative they led measurably reduced rework in a quarter.",
            "Handoff quality audit they ran resulted in a documented team improvement."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Handing off a file and handing off a spec are different things. A file shows what the design looks like; a spec explains what it needs to do. Missing that distinction is why implementations diverge from designs.",
      "anti_patterns": "Learner: Annotating only what's visible — not what happens when it's interacted with. Contributor: Documenting states but not the logic that determines which state is shown. Independent: Over-documenting to the point that Engineering can't find the critical information within a reasonable time. Expert: Creating standards so comprehensive that designers spend more time on documentation than on design."
    },
    {
      "id": "job_skills_23",
      "category": "Design Skills",
      "skill_number": 23,
      "name": "Supports User Acceptance Testing (UAT) & QA Implementation",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Participates and identifies obvious discrepancies",
          "typical_scope": "Prompted"
        },
        {
          "level": "Contributor",
          "core_shift": "Systematically reviews builds",
          "typical_scope": "Against design spec"
        },
        {
          "level": "Independent",
          "core_shift": "Ensures design integrity through launch",
          "typical_scope": "Close engineering collaboration"
        },
        {
          "level": "Expert",
          "core_shift": "Improves QA frameworks",
          "typical_scope": "Embeds quality into delivery"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Participates in QA reviews when scheduled and flags obvious visual or interaction discrepancies.",
            "Can compare a build to a design spec and identify differences.",
            "Understands that QA is a design responsibility, not only an Engineering one.",
            "Writes a clear bug description: expected behavior vs. actual behavior, with screen or browser context."
          ],
          "evidence_artifacts": [
            "Filed at least 3 design QA bugs in a sprint with clear reproduction steps.",
            "No QA ticket rejected for insufficient description.",
            "Participated in a scheduled UAT session and delivered notes within 24 hours."
          ],
          "next_level_threshold": "Ready for Contributor when they systematically review builds against designs across a full feature — not just the obvious issues."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Creates a QA checklist for a feature before development handoff.",
            "Reviews builds methodically across all states, breakpoints, and edge cases — not just the happy path.",
            "Prioritizes QA issues by severity: blocking (launch-critical), high (user-visible degradation), low (polish).",
            "Tracks QA issues and follows up with Engineering until resolved."
          ],
          "evidence_artifacts": [
            "QA review caught a severity-1 issue before launch.",
            "Feature shipped with 0 launch-blocking design issues on the QA-covered features.",
            "QA checklist they created was reused by another designer for a parallel feature."
          ],
          "next_level_threshold": "Ready for Independent when they ensure design integrity through launch — collaborating closely with Engineering to resolve issues and making pragmatic tradeoff calls when needed."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Partners with Engineering during QA to explain implementation options for complex states and transitions.",
            "Makes pragmatic tradeoff calls: knows which issues are worth delaying launch and which are not.",
            "Reviews builds across devices and browsers proactively — not just desktop Chrome.",
            "Uses QA findings to improve handoff quality for future features."
          ],
          "evidence_artifacts": [
            "Made a launch/hold decision on a QA issue that the team agreed with in retrospect.",
            "Multi-device QA review caught a platform-specific issue before launch.",
            "Handoff documentation improved as a direct result of patterns found in QA."
          ],
          "next_level_threshold": "Ready for Expert when they improve QA collaboration frameworks and embed quality checkpoints into the delivery process org-wide."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Establishes QA standards and checklists used across the design team.",
            "Integrates design QA checkpoints into the delivery workflow — not as an afterthought but as a defined stage.",
            "Improves engineering collaboration frameworks around design quality.",
            "Uses QA data to identify systemic implementation gaps and address them at a process level."
          ],
          "evidence_artifacts": [
            "QA standards they created are in active use by the team.",
            "Design QA checkpoint integrated into sprint delivery process.",
            "Engineering and Design collaboration improvement they drove measurably reduced post-launch design issues."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A designer who treats QA as someone else's job will see their designs drift in production over time. Design quality is not preserved by handoff — it's preserved by following through.",
      "anti_patterns": "Learner: Only reviewing the screens they personally designed. Contributor: Reviewing everything but only flagging the obvious visual issues, missing interaction and state failures. Independent: Getting so invested in QA perfection that they delay launches for low-severity polish issues. Expert: Creating QA processes so thorough that they create bottlenecks rather than quality."
    },
    {
      "id": "job_skills_24",
      "category": "Design Skills",
      "skill_number": 24,
      "name": "Utilizes AI to Advance & Add Efficiency to Workflow",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Experiments responsibly",
          "typical_scope": "Ideation and summarization"
        },
        {
          "level": "Contributor",
          "core_shift": "Accelerates synthesis and documentation",
          "typical_scope": "Quality-controlled"
        },
        {
          "level": "Independent",
          "core_shift": "Integrates AI into discovery and workflow automation",
          "typical_scope": "Strategic"
        },
        {
          "level": "Expert",
          "core_shift": "Defines responsible AI standards",
          "typical_scope": "Builds team capability"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Uses AI tools for brainstorming, summarizing research notes, or generating copy variants.",
            "Understands the difference between AI-assisted work and AI-generated work — and takes responsibility for both.",
            "Applies critical review to AI outputs before using them in deliverables.",
            "Experiments with new AI tools and shares findings with the team."
          ],
          "evidence_artifacts": [
            "Used an AI tool to accelerate at least one design task and shared how with the team.",
            "AI-generated output reviewed and edited before it was used in a deliverable.",
            "Did not submit unreviewed AI output as their own work."
          ],
          "next_level_threshold": "Ready for Contributor when they use AI to meaningfully accelerate synthesis, documentation, and exploration while maintaining clear quality control."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Uses AI to accelerate research synthesis — summarizing transcripts, clustering themes, and generating insight drafts.",
            "Generates design documentation, annotation drafts, or user story variations with AI and edits to quality.",
            "Creates multiple design exploration directions faster using AI-assisted generation.",
            "Knows which tasks are good candidates for AI assistance and which require direct human judgment."
          ],
          "evidence_artifacts": [
            "Research synthesis time measurably reduced using AI tools on a documented project.",
            "Documentation draft produced with AI reviewed and rated accurate by the team.",
            "Exploration directions expanded using AI assistance that would not have been attempted without it."
          ],
          "next_level_threshold": "Ready for Independent when they integrate AI strategically into discovery, concepting, and workflow automation — not just individual task acceleration."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Integrates AI into the design discovery phase — using generative tools to stress-test assumptions, generate edge cases, and identify blind spots.",
            "Builds repeatable AI-assisted workflows the team can adopt (e.g., research synthesis pipeline, spec generation template).",
            "Uses AI for competitive analysis, trend scanning, and opportunity identification.",
            "Actively assesses the limitations and risks of AI tools being used on their team."
          ],
          "evidence_artifacts": [
            "AI-assisted workflow they created is used by at least one other designer.",
            "AI used in a discovery phase to generate edge cases or assumptions that changed a design decision.",
            "Risk assessment for an AI tool documented and shared with the team."
          ],
          "next_level_threshold": "Ready for Expert when they define responsible AI standards and build team capability around high-leverage, ethical AI usage."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Defines standards for responsible AI use in the design team: what's appropriate, what requires disclosure, and what's off-limits.",
            "Builds team AI capability through workshops, resources, and shared prompt libraries.",
            "Evaluates new AI tools against quality, privacy, and ethics criteria before team adoption.",
            "Advocates for AI investment in tooling and workflow that has measurable ROI for the design function."
          ],
          "evidence_artifacts": [
            "AI usage standards they defined are in active use and referenced in team documentation.",
            "Prompt library or AI workflow resource they created is used by 2+ teammates.",
            "AI tool evaluation they conducted resulted in a team adoption decision with documented rationale."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "AI that produces output a designer submits without review isn't a productivity tool — it's a quality risk. The value of this skill is in the judgment applied to AI outputs, not in the speed of generating them.",
      "anti_patterns": "Learner: Using AI as a shortcut to avoid the hard thinking that design requires. Contributor: Applying AI to every task regardless of whether it adds value. Independent: Building AI workflows that create dependencies without clear ownership when the tool changes. Expert: Setting AI standards so restrictive that the team can't experiment and learn."
    },
    {
      "id": "project_management_1",
      "category": "Project Management",
      "skill_number": 1,
      "name": "Experience in Agile Delivery Methodologies",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Participates in rituals",
          "typical_scope": "Relies on PM for structure"
        },
        {
          "level": "Contributor",
          "core_shift": "Works effectively in sprint cycles",
          "typical_scope": "Breaks work into tickets"
        },
        {
          "level": "Independent",
          "core_shift": "Balances discovery and delivery",
          "typical_scope": "Influences sprint scope"
        },
        {
          "level": "Expert",
          "core_shift": "Improves team-level delivery systems",
          "typical_scope": "Velocity and predictability"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Attends standups, sprint planning, and retros consistently and contributes appropriately.",
            "Understands the purpose of each agile ceremony and doesn't treat them as overhead.",
            "Breaks design work into tasks that fit within a sprint.",
            "Communicates blockers to PM or lead without waiting for them to ask."
          ],
          "evidence_artifacts": [
            "Attended all sprint ceremonies in a quarter without prompting.",
            "Submitted design tickets with effort estimates reviewed as reasonable by the team.",
            "Communicated a blocker before it impacted sprint delivery."
          ],
          "next_level_threshold": "Ready for Contributor when they work effectively within sprint cycles — breaking work into tickets, meeting commitments, and communicating status without check-ins."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Reliably delivers committed sprint work on time or communicates early when it's at risk.",
            "Writes design tickets with clear acceptance criteria, scope, and effort estimates.",
            "Actively participates in sprint planning to size and scope design work.",
            "Adapts to sprint changes (scope additions, deprioritizations) without disruption."
          ],
          "evidence_artifacts": [
            "Sprint completion rate for design tickets above 85% over a quarter.",
            "Tickets they wrote required no significant rework in planning.",
            "Adapted to a scope change mid-sprint and completed the original work."
          ],
          "next_level_threshold": "Ready for Independent when they balance discovery and delivery — managing design's dual-track naturally and negotiating tradeoffs proactively."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Manages discovery work alongside delivery work without creating a bottleneck in either.",
            "Proactively identifies when a sprint needs scope relief to protect design quality.",
            "Influences sprint planning by advocating for design work that reduces future rework.",
            "Proposes process improvements when agile implementation creates friction for design."
          ],
          "evidence_artifacts": [
            "Discovery and delivery work completed in parallel across a full quarter without PM escalation.",
            "Sprint scope negotiation they initiated prevented a quality compromise.",
            "Process improvement they proposed was adopted in a team retro."
          ],
          "next_level_threshold": "Ready for Expert when they improve team-level delivery systems — introducing practices that increase velocity, clarity, and predictability."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Introduces practices that measurably improve design team velocity and delivery predictability.",
            "Defines how design work should be integrated into agile planning across the team.",
            "Coaches other designers on effective sprint planning and ticket writing.",
            "Identifies systemic delivery problems and drives solutions beyond the immediate team."
          ],
          "evidence_artifacts": [
            "Practice they introduced reduced sprint spillover or planning friction measurably.",
            "Design delivery process improvement adopted by the broader product team.",
            "Designer they coached improved their sprint completion rate measurably."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Using agile rituals as compliance theater — attending standups without contributing, estimating without thinking — erodes the team's planning accuracy and trust in design as a delivery partner.",
      "anti_patterns": "Learner: Treating discovery as separate from 'real work' in sprint planning. Contributor: Breaking design into tickets without thinking about dependencies. Independent: Advocating for design quality at the expense of sprint commitments consistently. Expert: Creating process improvements that work for senior designers but create overhead for junior ones."
    },
    {
      "id": "project_management_2",
      "category": "Project Management",
      "skill_number": 2,
      "name": "Supports Design Work Planning (Scoping)",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Estimates with guidance",
          "typical_scope": "Basic effort sizing"
        },
        {
          "level": "Contributor",
          "core_shift": "Scopes feature-level design work",
          "typical_scope": "Identifies dependencies"
        },
        {
          "level": "Independent",
          "core_shift": "Leads estimation for complex initiatives",
          "typical_scope": "Aligns scope to impact"
        },
        {
          "level": "Expert",
          "core_shift": "Establishes planning standards",
          "typical_scope": "Improves forecasting accuracy"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Estimates the effort required for assigned design tasks with PM or lead guidance.",
            "Understands the difference between design effort and implementation effort.",
            "Identifies obvious dependencies (research needed, stakeholder approval) before committing to a timeline.",
            "Flags when scope feels unclear before starting, not after."
          ],
          "evidence_artifacts": [
            "Effort estimates reviewed as reasonable by lead with minor adjustments.",
            "Flagged a dependency before sprint start that would have caused a delay.",
            "Asked clarifying scope questions before committing in at least 3 sprints."
          ],
          "next_level_threshold": "Ready for Contributor when they accurately scope feature-level design work and identify dependencies and risks without guidance."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Independently estimates design effort for a full feature: discovery, concepting, refinement, and handoff.",
            "Identifies risks to scope: ambiguous requirements, external dependencies, stakeholder alignment needs.",
            "Communicates scope changes proactively when new information changes effort estimates.",
            "Negotiates scope with PM when timeline and quality are in conflict."
          ],
          "evidence_artifacts": [
            "Feature delivered within 20% of original estimate without scope change.",
            "Scope risk they identified was added to the project risk register.",
            "Scope negotiation they led resulted in a documented tradeoff decision."
          ],
          "next_level_threshold": "Ready for Independent when they lead estimation for complex, ambiguous initiatives and align scope to strategic impact."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Leads effort estimation for large, multi-sprint initiatives with multiple designers involved.",
            "Breaks complex work into phases with clear milestones and dependencies mapped.",
            "Aligns scope decisions to strategic impact — knows when to invest more and when to minimize.",
            "Uses historical velocity and complexity patterns to improve estimate accuracy."
          ],
          "evidence_artifacts": [
            "Multi-designer initiative delivered within original estimate range.",
            "Scope phasing they proposed adopted by PM and used in roadmap planning.",
            "Estimate accuracy improved measurably on subsequent projects using their approach."
          ],
          "next_level_threshold": "Ready for Expert when they establish planning standards and improve forecasting accuracy across the team."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Establishes scoping and estimation standards for the design team.",
            "Improves forecasting accuracy org-wide by analyzing historical delivery data.",
            "Trains designers on effective estimation techniques.",
            "Influences product planning cycles with design effort visibility."
          ],
          "evidence_artifacts": [
            "Scoping standard they created is referenced in design team planning documentation.",
            "Forecasting accuracy improved measurably after their process was adopted.",
            "PM cited design estimation quality as a planning improvement in a quarterly review."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Optimistic scoping is a form of design debt. When designers consistently underestimate, product teams pad estimates anyway — which erodes trust and removes design from scope discussions.",
      "anti_patterns": "Learner: Estimating based on best-case scenarios without accounting for review cycles or revisions. Contributor: Scoping individual tasks accurately but missing system-level dependencies. Independent: Over-scoping to protect quality, creating friction with PM. Expert: Building such detailed scope models they become the bottleneck for planning."
    },
    {
      "id": "project_management_3",
      "category": "Project Management",
      "skill_number": 3,
      "name": "Supports Roadmapping & Feature Planning (PRDs)",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Reviews PRDs, asks questions",
          "typical_scope": "Single feature"
        },
        {
          "level": "Contributor",
          "core_shift": "Provides meaningful UX input",
          "typical_scope": "Identifies user risks"
        },
        {
          "level": "Independent",
          "core_shift": "Influences roadmap sequencing",
          "typical_scope": "User insight and feasibility"
        },
        {
          "level": "Expert",
          "core_shift": "Shapes multi-quarter roadmap direction",
          "typical_scope": "Design-led opportunity framing"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Reads PRDs before design work begins and asks clarifying questions about user needs and success metrics.",
            "Identifies obvious UX risks or missing user context in a PRD.",
            "Understands how features on the roadmap relate to each other.",
            "Participates in roadmap reviews when included."
          ],
          "evidence_artifacts": [
            "Submitted at least 3 clarifying questions on a PRD before kickoff.",
            "Identified a missing user need in a PRD in writing before work began.",
            "Attended a roadmap review and contributed at least one comment."
          ],
          "next_level_threshold": "Ready for Contributor when they provide meaningful UX input in roadmap discussions and identify user risks proactively."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Provides design perspective in roadmap planning — surfaces user needs, feasibility concerns, and experience risks.",
            "Writes user-centered input into PRDs (problem statement, user story, success criteria from a user perspective).",
            "Advocates for sequencing decisions that reduce user experience debt.",
            "Flags when a planned feature conflicts with user mental models surfaced in research."
          ],
          "evidence_artifacts": [
            "PRD they contributed to includes a user-centered problem statement they authored.",
            "Roadmap sequencing changed based on UX input they provided.",
            "Research finding they surfaced was added to a PRD as a constraint."
          ],
          "next_level_threshold": "Ready for Independent when they influence roadmap sequencing through user insight and feasibility framing — not just commenting on proposals."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Initiates roadmap conversations based on research findings — doesn't wait to be included.",
            "Frames design-led opportunities in business language that resonates with product leadership.",
            "Influences feature sequencing to protect experience integrity across the user lifecycle.",
            "Proposes when design investment upfront reduces downstream engineering rework."
          ],
          "evidence_artifacts": [
            "Roadmap item they proposed based on research was adopted.",
            "Sequencing change they advocated for was implemented and the rationale was cited in a planning doc.",
            "Design-led business case they framed influenced a planning decision."
          ],
          "next_level_threshold": "Ready for Expert when they shape multi-quarter roadmap direction through design-led opportunity framing."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Shapes multi-quarter roadmap direction by translating design research into strategic opportunities.",
            "Partners with product leadership to define what problems the organization should solve over the next year.",
            "Establishes how design input flows into roadmapping processes consistently.",
            "Uses design language to influence executive decisions on product direction."
          ],
          "evidence_artifacts": [
            "A multi-quarter opportunity they framed is reflected in the product roadmap.",
            "Executive cited design research as the basis for a strategic roadmap decision.",
            "Roadmapping process now includes a design input step at their initiative."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A designer who waits to be handed a PRD before engaging is arriving too late. By the time a PRD exists, the most impactful design decisions — what to build, for whom, and why — have already been made.",
      "anti_patterns": "Learner: Reading PRDs to understand the brief rather than to challenge assumptions. Contributor: Surfacing UX risks without proposing solutions. Independent: Influencing roadmap direction without building the stakeholder trust needed for input to land. Expert: Shaping roadmap at such a strategic level that day-to-day feature design work suffers."
    },
    {
      "id": "project_management_4",
      "category": "Project Management",
      "skill_number": 4,
      "name": "Executes Work in a Timely Manner",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Delivers with reminders",
          "typical_scope": "Check-ins needed"
        },
        {
          "level": "Contributor",
          "core_shift": "Consistently meets deadlines",
          "typical_scope": "Communicates status clearly"
        },
        {
          "level": "Independent",
          "core_shift": "Anticipates delays, mitigates risks",
          "typical_scope": "No escalation needed"
        },
        {
          "level": "Expert",
          "core_shift": "Improves team predictability",
          "typical_scope": "Delivery confidence"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Delivers assigned work by the agreed deadline when reminded of timelines.",
            "Asks for help or escalates when work is at risk of missing a deadline.",
            "Keeps PM or lead informed of progress without being asked during high-stakes delivery.",
            "Understands that design delays have downstream impact on Engineering and PM."
          ],
          "evidence_artifacts": [
            "No missed deadlines without advance communication in a quarter.",
            "Proactively communicated a risk before it became a miss.",
            "PM confirmed they knew the status of design work at all times in a given sprint."
          ],
          "next_level_threshold": "Ready for Contributor when they consistently meet deadlines and communicate status clearly without check-ins or reminders."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Reliably delivers committed work on time across sprints.",
            "Communicates status updates proactively — not just when asked.",
            "Identifies when a timeline is unrealistic at the planning stage, not the deadline.",
            "Breaks complex work into smaller milestones to maintain visibility and predictability."
          ],
          "evidence_artifacts": [
            "Sprint completion rate above 85% consistently over a quarter.",
            "Zero surprise deadline misses — all at-risk work flagged with 3+ days notice.",
            "Milestones tracked and visible to PM without requiring check-ins."
          ],
          "next_level_threshold": "Ready for Independent when they anticipate delays, mitigate risks, and adjust plans without manager escalation."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Identifies timeline risks early (ambiguous requirements, pending research, stakeholder availability) and mitigates before they cause delays.",
            "Adjusts scope proactively when a delay is unavoidable — negotiates the right tradeoff.",
            "Manages time across multiple tracks of work simultaneously.",
            "Delivers consistently under pressure without quality decline."
          ],
          "evidence_artifacts": [
            "Risk they identified and mitigated prevented a delivery delay.",
            "Scope negotiation they led resulted in on-time delivery at acceptable quality.",
            "Delivered across 2+ parallel workstreams without a deadline miss."
          ],
          "next_level_threshold": "Ready for Expert when they improve overall team predictability and delivery confidence — not just their own."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Identifies patterns in team delivery failures and proposes systemic solutions.",
            "Introduces tools or practices that improve team-wide timeline visibility.",
            "Coaches designers who struggle with delivery consistency.",
            "Builds trust with product leadership by setting and meeting delivery commitments reliably."
          ],
          "evidence_artifacts": [
            "Team delivery improvement they drove measurably reduced sprint spillover.",
            "Designer they coached improved their delivery consistency.",
            "Product leadership cited design reliability as a planning strength."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Consistent late delivery without communication erodes the team's trust in design as a partner — and removes design from the critical path. Predictability is a professional skill, not a personality trait.",
      "anti_patterns": "Learner: Waiting until a deadline is missed to communicate a problem. Contributor: Hitting deadlines by cutting quality. Independent: Solving timeline problems personally without sharing the approach so others can learn. Expert: Optimizing team delivery so aggressively that it creates pressure culture."
    },
    {
      "id": "project_management_5",
      "category": "Project Management",
      "skill_number": 5,
      "name": "Prioritizes Work Effectively",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Focuses on assigned priorities",
          "typical_scope": "Single workstream"
        },
        {
          "level": "Contributor",
          "core_shift": "Manages workload across tickets",
          "typical_scope": "Communicates tradeoffs"
        },
        {
          "level": "Independent",
          "core_shift": "Makes strategic tradeoff decisions",
          "typical_scope": "Aligns effort to impact"
        },
        {
          "level": "Expert",
          "core_shift": "Guides prioritization across initiatives",
          "typical_scope": "Influences resourcing"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Works on assigned priorities without needing to be redirected.",
            "Asks when priorities are unclear rather than guessing.",
            "Understands that not all design requests are equal — some have higher user and business impact.",
            "Completes higher-priority work before lower-priority work when time-constrained."
          ],
          "evidence_artifacts": [
            "No instances of working on lower-priority tasks while higher-priority work was blocked.",
            "Asked a clarifying prioritization question in at least 2 sprints.",
            "Priority-ordered task list visible in Jira or equivalent tool."
          ],
          "next_level_threshold": "Ready for Contributor when they manage workload effectively across multiple tickets and communicate tradeoffs when capacity is constrained."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Manages design workload across 3+ concurrent tickets without manager direction.",
            "Communicates clearly when new requests would impact existing priorities.",
            "Applies judgment to priority decisions when PM is unavailable.",
            "Identifies and flags low-value work that could be deprioritized without user impact."
          ],
          "evidence_artifacts": [
            "Managed 3+ concurrent design tracks without a dropped commitment.",
            "Surfaced a priority conflict to PM before it caused a delivery issue.",
            "Low-value work they flagged was deprioritized and bandwidth was reallocated."
          ],
          "next_level_threshold": "Ready for Independent when they make strategic tradeoff decisions independently — aligning effort to the highest-impact work without guidance."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Makes independent calls on priority tradeoffs that are later validated by PM.",
            "Aligns personal effort to the highest-impact design work — doesn't distribute evenly regardless of value.",
            "Identifies when design is over-invested in low-leverage work and proposes reallocation.",
            "Uses impact vs. effort frameworks to guide priority conversations with stakeholders."
          ],
          "evidence_artifacts": [
            "Priority decision they made independently was agreed with by PM in retrospect.",
            "Work reallocation they proposed was adopted and improved delivery outcomes.",
            "Impact vs. effort assessment they created was used in a planning session."
          ],
          "next_level_threshold": "Ready for Expert when they guide prioritization across initiatives and influence broader resourcing decisions."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Guides design team prioritization across multiple initiatives and designers.",
            "Advocates for resourcing decisions that align design capacity to strategic priority.",
            "Develops frameworks the team uses to evaluate and communicate priority.",
            "Influences product and design leadership on where design investment creates the most leverage."
          ],
          "evidence_artifacts": [
            "Prioritization framework they created is used in team planning.",
            "Resourcing decision they influenced resulted in better-aligned design investment.",
            "Design leadership cited their prioritization thinking in a planning or strategy document."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Treating all design requests as equal is a failure of prioritization, not a sign of responsiveness. The cost of over-investing in low-impact work is under-investing in high-impact work — and that cost is invisible until a quarter review.",
      "anti_patterns": "Learner: Working on the most interesting task rather than the most important one. Contributor: Prioritizing based on urgency (who's asking loudest) rather than impact. Independent: Prioritizing so aggressively that low-priority work creates upstream debt that surfaces later. Expert: Optimizing team-wide priority at such a macro level that individual designer autonomy is lost."
    },
    {
      "id": "collaboration_1",
      "category": "Collaboration",
      "skill_number": 1,
      "name": "Delegates Work Effectively",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Completes assigned tasks reliably",
          "typical_scope": "Individual contributor"
        },
        {
          "level": "Contributor",
          "core_shift": "Shares work within team",
          "typical_scope": "Feature-level"
        },
        {
          "level": "Independent",
          "core_shift": "Delegates strategically",
          "typical_scope": "Maximizes team strengths"
        },
        {
          "level": "Expert",
          "core_shift": "Develops others through delegation",
          "typical_scope": "Stretch opportunities"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Completes assigned tasks reliably without requiring follow-up.",
            "Understands what they own vs. what others own.",
            "Communicates completion status without being asked.",
            "Accepts re-assigned work gracefully when priorities shift."
          ],
          "evidence_artifacts": [
            "No reassigned tasks dropped without notification.",
            "Completed all assigned tasks in a sprint without requiring follow-up.",
            "Communicated completion before PM or lead asked for a status update."
          ],
          "next_level_threshold": "Ready for Contributor when they appropriately share work within the team and set up handoffs with sufficient context."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Identifies work that can or should be shared with teammates.",
            "Provides sufficient context when handing off work — goals, constraints, and definition of done.",
            "Checks in appropriately on delegated work without micromanaging.",
            "Gives credit for work completed by others openly."
          ],
          "evidence_artifacts": [
            "Handoff document or brief they provided was sufficient for the recipient to complete the work without follow-up.",
            "Teammate completed delegated work to the expected quality level on first pass.",
            "Publicly attributed work to the teammate who completed it in a review or all-hands."
          ],
          "next_level_threshold": "Ready for Independent when they delegate strategically — matching work to the right person to maximize team strengths."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Delegates with awareness of teammate strengths, development goals, and current capacity.",
            "Uses delegation to distribute load during high-volume periods without quality decline.",
            "Calibrates the level of guidance provided based on the recipient's experience.",
            "Follows up with meaningful feedback after delegated work is complete."
          ],
          "evidence_artifacts": [
            "Delegated work resulted in high-quality output that the recipient felt ownership of.",
            "Team capacity managed effectively during a high-volume sprint using strategic delegation.",
            "Feedback provided after delegation was specific enough to improve the recipient's future work."
          ],
          "next_level_threshold": "Ready for Expert when they develop others intentionally through delegation — using stretch assignments as a growth tool."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Delegates stretch work that builds capability in others — not just distributes load.",
            "Creates a development plan (implicit or explicit) through what work they assign.",
            "Mentors teammates through challenging delegated work rather than taking it back.",
            "The team produces work at higher quality because of how they distribute and support it."
          ],
          "evidence_artifacts": [
            "Designer they delegated to grew measurably in a skill as a result.",
            "Stretch assignment they gave a junior designer was completed successfully with coaching.",
            "Team output quality improved as a result of how they structured work distribution."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Delegation without context is assignment. The test of effective delegation is whether the recipient can complete the work to quality without coming back for clarification that should have been in the brief.",
      "anti_patterns": "Learner: Treating all work as 'mine to own' and not sharing capacity. Contributor: Delegating without adequate context and then being surprised by the output. Independent: Delegating based on availability rather than growth potential. Expert: Delegating so much that they become a bottleneck for direction rather than relieving one."
    },
    {
      "id": "collaboration_2",
      "category": "Collaboration",
      "skill_number": 2,
      "name": "Effectively Receives & Addresses Feedback",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Accepts feedback constructively",
          "typical_scope": "Individual"
        },
        {
          "level": "Contributor",
          "core_shift": "Applies feedback to improve quality",
          "typical_scope": "Feature-level"
        },
        {
          "level": "Independent",
          "core_shift": "Seeks diverse feedback proactively",
          "typical_scope": "Integrates thoughtfully"
        },
        {
          "level": "Expert",
          "core_shift": "Builds strong feedback culture",
          "typical_scope": "Across team"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Receives critical feedback without becoming defensive or dismissive.",
            "Asks clarifying questions when feedback is unclear rather than guessing at intent.",
            "Thanks feedback-givers specifically — not generically.",
            "Distinguishes between feedback to act on and feedback to note."
          ],
          "evidence_artifacts": [
            "No defensive reactions to feedback in design critiques observed by lead.",
            "Asked at least one clarifying question in response to vague feedback.",
            "Applied critique feedback visibly in the next design iteration."
          ],
          "next_level_threshold": "Ready for Contributor when they reliably apply feedback to improve quality — feedback leads to observable improvement in the design."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Translates feedback into specific design improvements that can be traced to the critique.",
            "Follows up after incorporating feedback to confirm the issue was resolved.",
            "Distinguishes between taste-based feedback (optional to act on) and user-centered feedback (required).",
            "Documents key design decisions and the feedback that shaped them."
          ],
          "evidence_artifacts": [
            "Design iteration following a critique addressed all flagged issues traceably.",
            "Follow-up confirmation sent to feedback-giver after revisions were made.",
            "Decision log includes at least one entry tied to feedback received."
          ],
          "next_level_threshold": "Ready for Independent when they proactively seek diverse feedback and integrate it thoughtfully — not waiting for scheduled critique cycles."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Actively seeks feedback from PM, Engineering, peers, and stakeholders unprompted — not just at formal review points.",
            "Integrates conflicting feedback thoughtfully — makes a reasoned call and communicates rationale.",
            "Uses feedback patterns over time to identify recurring weaknesses and addresses them proactively.",
            "Gives context to feedback-givers about what kind of feedback is most useful at each design stage."
          ],
          "evidence_artifacts": [
            "Proactively requested feedback outside a scheduled critique in a quarter.",
            "Conflicting feedback integrated with a documented rationale for the decision made.",
            "Recurring feedback pattern identified and addressed in a development plan."
          ],
          "next_level_threshold": "Ready for Expert when they build strong feedback culture across the team — others give and receive feedback more effectively because of their modeling."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Models healthy feedback reception publicly — their behavior makes it safe for others to receive hard feedback.",
            "Runs feedback workshops or critiques that build the team's feedback capability.",
            "Addresses defensive feedback dynamics when they emerge in team settings.",
            "Creates norms for feedback quality — what makes a critique useful, not just kind."
          ],
          "evidence_artifacts": [
            "Team feedback culture improved as measured in a retro or survey.",
            "Ran a critique workshop that produced higher-quality feedback from participants.",
            "Addressed a feedback dynamic in a critique that the team noticed positively."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Nodding at feedback and then not changing the design is not receiving feedback — it's managing the feedback-giver. The test is what changes in the work, not what's said in the moment.",
      "anti_patterns": "Learner: Treating all feedback as equally valid and changing everything even when it contradicts. Contributor: Acting on feedback without evaluating it — producing designs that satisfy reviewers but not users. Independent: Selectively ignoring feedback that doesn't align with their POV without transparent rationale. Expert: Creating such a psychologically safe feedback culture that hard truths stop being spoken."
    },
    {
      "id": "collaboration_3",
      "category": "Collaboration",
      "skill_number": 3,
      "name": "Provides Teammates Trust & Autonomy",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Works well within guidance",
          "typical_scope": "Individual"
        },
        {
          "level": "Contributor",
          "core_shift": "Builds trust within immediate team",
          "typical_scope": "Feature collaboration"
        },
        {
          "level": "Independent",
          "core_shift": "Operates with high autonomy, empowers others",
          "typical_scope": "Team-level"
        },
        {
          "level": "Expert",
          "core_shift": "Creates culture of ownership",
          "typical_scope": "Org-wide accountability"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Completes work without requiring constant check-ins.",
            "Trusts that teammates will complete their work without following up excessively.",
            "Raises concerns about teammate work through appropriate channels — not publicly.",
            "Assumes positive intent when work doesn't meet expectations."
          ],
          "evidence_artifacts": [
            "PM or lead noted they required minimal check-ins in a sprint.",
            "No instances of publicly questioning a teammate's work without prior direct conversation.",
            "Raised a concern about a teammate's work privately before escalating."
          ],
          "next_level_threshold": "Ready for Contributor when they build trust within the immediate team — teammates feel ownership of their work and are not second-guessed."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Allows teammates to make design decisions within their scope without requiring approval.",
            "Provides input as perspective rather than direction when collaborating.",
            "Acknowledges when a teammate's approach is valid even if different from their own.",
            "Creates conditions where teammates feel confident shipping work they own."
          ],
          "evidence_artifacts": [
            "Teammate cited them as someone who empowers rather than directs in a retro or 1:1.",
            "Offered perspective on a teammate's design without overriding their decision.",
            "Teammate shipped work they owned with confidence — not after seeking reassurance."
          ],
          "next_level_threshold": "Ready for Independent when they operate with high autonomy themselves and actively empower others to do the same."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Operates without requiring validation or approval — makes decisions confidently and owns outcomes.",
            "Actively creates conditions for teammates to exercise judgment — not just allows it.",
            "Recognizes when someone is asking for permission they shouldn't need and redirects.",
            "Models the autonomy they want others to have."
          ],
          "evidence_artifacts": [
            "Completed a significant initiative with no escalations to management.",
            "Redirected a teammate who was seeking unnecessary approval — and the teammate shipped confidently.",
            "Peer cited them as someone who models healthy autonomy in a feedback session."
          ],
          "next_level_threshold": "Ready for Expert when they create a culture of ownership and accountability — the team operates with high autonomy even when they're not present."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Creates conditions where the team owns decisions — including ones that aren't perfect.",
            "Addresses over-dependence or approval-seeking in team dynamics directly and constructively.",
            "Designs team processes that distribute decision-making rather than centralizing it.",
            "Is as committed to team accountability as team empowerment."
          ],
          "evidence_artifacts": [
            "Team operates effectively during periods they're unavailable or on leave.",
            "Approval-seeking behavior they addressed decreased visibly in team dynamics.",
            "Decision-making framework they introduced is now used by the team independently."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A designer who technically allows teammates to work independently but signals disapproval whenever they make a different choice is not providing autonomy — they're creating performance anxiety.",
      "anti_patterns": "Learner: Asking for check-ins more than the work requires. Contributor: Trusting teammates in theory but hovering in practice. Independent: Empowering others to make decisions without preparing them to handle the accountability that comes with it. Expert: Creating so much autonomy that accountability disappears with it."
    },
    {
      "id": "collaboration_4",
      "category": "Collaboration",
      "skill_number": 4,
      "name": "Communicates Effectively",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Explains decisions within team",
          "typical_scope": "Individual"
        },
        {
          "level": "Contributor",
          "core_shift": "Articulates tradeoffs to PM and Eng",
          "typical_scope": "Cross-functional"
        },
        {
          "level": "Independent",
          "core_shift": "Tailors communication to varied audiences",
          "typical_scope": "Stakeholders and leadership"
        },
        {
          "level": "Expert",
          "core_shift": "Influences executives through storytelling",
          "typical_scope": "Strategic decisions"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Explains design decisions with rationale — not just 'I thought it looked better.'",
            "Asks questions when a direction or requirement is unclear before starting.",
            "Writes Slack messages and comments clearly enough to avoid follow-up questions.",
            "Presents work in a design critique with context: what's the problem, what did I try, and what's the recommendation."
          ],
          "evidence_artifacts": [
            "Design decision rationale documented in file notes or Slack without being asked.",
            "Critique presentation included problem context, not just the solution.",
            "Zero follow-up questions after a written update they sent in a given sprint."
          ],
          "next_level_threshold": "Ready for Contributor when they articulate tradeoffs to PM and Engineering — explaining why a decision was made and what was considered."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Communicates design tradeoffs clearly to non-designers: 'Option A is faster to build but creates more user confusion; Option B requires more dev effort but is clearer.'",
            "Structures feedback requests to get what they need: 'I'm looking for input on the information hierarchy, not the visual style at this stage.'",
            "Documents design decisions in a format that Engineering can act on without follow-up.",
            "Proactively shares design context with stakeholders before they ask."
          ],
          "evidence_artifacts": [
            "PM cited their communication as a reason design decisions moved quickly.",
            "Engineering asked zero follow-up questions after a written handoff document.",
            "Tradeoff they articulated in a meeting was referenced in a subsequent PM decision."
          ],
          "next_level_threshold": "Ready for Independent when they tailor communication to varied audiences — adjusting format, depth, and framing based on who's in the room."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Adapts communication style fluidly: data-focused with Engineering, narrative-focused with marketing, strategic-focused with leadership.",
            "Structures complex design problems into clear narratives that non-designers can engage with.",
            "Knows when to send a Slack message vs. schedule a meeting vs. write a doc.",
            "Reads the room — adjusts depth and detail in real-time based on audience engagement."
          ],
          "evidence_artifacts": [
            "Presentation to a mixed audience (Eng, PM, Exec) received positive feedback from all groups.",
            "Used 3 different communication formats for the same initiative audience segments.",
            "Adjusted presentation depth in a meeting based on audience and it was noted by a stakeholder."
          ],
          "next_level_threshold": "Ready for Expert when they influence executives through structured storytelling — design thinking shapes strategic decisions."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Crafts narratives that translate design strategy into business outcomes for executive audiences.",
            "Uses storytelling techniques (problem, insight, opportunity, solution) to make complex design rationale compelling.",
            "Builds executive relationships that give design a seat in strategic planning.",
            "Creates communication templates or formats the team uses in high-stakes presentations."
          ],
          "evidence_artifacts": [
            "Executive decision influenced by a presentation or document they created.",
            "Design given a seat in a strategic planning meeting based on trust built through their communication.",
            "Communication template they created is used by other designers in leadership presentations."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A designer who can think clearly but communicate poorly will see their best ideas rejected — not because the ideas were wrong, but because the case wasn't made. Communication is not a soft skill — it's a design delivery skill.",
      "anti_patterns": "Learner: Over-explaining everything (producing a wall of context when a summary is needed) or under-explaining (presenting a design without any rationale). Contributor: Communicating well one-on-one but losing clarity in a group or written format. Independent: Tailoring communication so precisely to each audience that core positions shift based on who they're talking to. Expert: Communicating so skillfully with executives that peers feel excluded from the narrative."
    },
    {
      "id": "collaboration_5",
      "category": "Collaboration",
      "skill_number": 5,
      "name": "Absorbs & Acts on Information with Accountability",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Responds to direction appropriately",
          "typical_scope": "Individual"
        },
        {
          "level": "Contributor",
          "core_shift": "Translates inputs into action reliably",
          "typical_scope": "Feature-level"
        },
        {
          "level": "Independent",
          "core_shift": "Synthesizes competing inputs, clarifies next steps",
          "typical_scope": "Initiative-level"
        },
        {
          "level": "Expert",
          "core_shift": "Brings clarity in high-ambiguity situations",
          "typical_scope": "Team and org-level"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Listens actively in meetings — not just waiting for their turn to speak.",
            "Takes notes on key decisions and action items in meetings they attend.",
            "Follows up on commitments they make in conversations without being prompted.",
            "Asks for information in writing when verbal instructions are complex."
          ],
          "evidence_artifacts": [
            "Commitments made in meetings were completed without follow-up in a quarter.",
            "Notes they took in a meeting were shared with the team and confirmed accurate.",
            "Requested written confirmation of a verbal direction before acting on it."
          ],
          "next_level_threshold": "Ready for Contributor when they reliably translate inputs from meetings, reviews, and feedback into clear action items they complete without follow-up."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Converts meeting outcomes into a clear action list and shares it with relevant stakeholders.",
            "Follows up on assigned actions without being reminded.",
            "Clarifies ambiguous inputs before acting: 'Before I start, I want to confirm I understood this correctly.'",
            "Takes accountability when they misunderstood a direction — doesn't externalize the cause."
          ],
          "evidence_artifacts": [
            "Action list shared after a meeting within 24 hours.",
            "Zero missed actions from a meeting summary they owned in a sprint.",
            "Took accountability for a direction misunderstanding without deflecting to the source of the confusion."
          ],
          "next_level_threshold": "Ready for Independent when they synthesize competing inputs from multiple sources and clarify a clear path forward for the team."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Synthesizes competing inputs from PM, Engineering, and stakeholders into a coherent direction.",
            "Identifies and names when inputs are contradictory — brings the contradiction to the surface rather than choosing quietly.",
            "Creates clarity in a situation where multiple team members have different information.",
            "Follows through on complex, multi-step commitments over extended timeframes."
          ],
          "evidence_artifacts": [
            "Synthesized conflicting stakeholder inputs into a decision document the team aligned on.",
            "Named a contradiction in a planning session that the team had been working around.",
            "Completed a multi-sprint commitment without a missed milestone."
          ],
          "next_level_threshold": "Ready for Expert when they consistently bring clarity in high-information, high-ambiguity situations — the team looks to them to make sense of complexity."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Creates clarity in situations where the team has too much information and no clear direction.",
            "Develops organizational systems (decision logs, RACI, shared context docs) that help the team act on information effectively.",
            "Is the person stakeholders turn to when information is conflicting or unclear.",
            "Models disciplined follow-through that raises the team's accountability standard."
          ],
          "evidence_artifacts": [
            "Organizational system they created (decision log, RACI, shared doc) is used by the team.",
            "Called on to synthesize information in a cross-functional meeting due to established credibility.",
            "Team accountability improved in a measurable way (fewer dropped actions, faster decisions) after their involvement."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Information absorbed but not acted on is noise. The test of this skill is not whether someone understands what they heard — it's whether the right things happened as a result.",
      "anti_patterns": "Learner: Absorbing information but not converting it to action. Contributor: Completing their own actions reliably but not helping the team maintain accountability on shared commitments. Independent: Synthesizing so thoroughly that they create a dependency — the team can't act until they've processed everything. Expert: Creating accountability systems that feel like surveillance rather than support."
    },
    {
      "id": "collaboration_6",
      "category": "Collaboration",
      "skill_number": 6,
      "name": "Develops Cross-Disciplinary Relationships",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Builds rapport within immediate team",
          "typical_scope": "Individual"
        },
        {
          "level": "Contributor",
          "core_shift": "Collaborates with PM and Eng",
          "typical_scope": "Feature-level"
        },
        {
          "level": "Independent",
          "core_shift": "Builds strong cross-department partnerships",
          "typical_scope": "Initiative-level"
        },
        {
          "level": "Expert",
          "core_shift": "Shapes cross-functional culture",
          "typical_scope": "Org-wide"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Builds positive working relationships with direct teammates.",
            "Participates in team social activities and informal moments without being prompted.",
            "Treats Engineering and PM with equal professional respect — no 'us vs. them' dynamic.",
            "Introduces themselves proactively to new team members."
          ],
          "evidence_artifacts": [
            "No interpersonal complaints from teammates in a quarter.",
            "Proactively introduced themselves to 2+ new team members or cross-functional contacts.",
            "Participated in at least one informal team activity."
          ],
          "next_level_threshold": "Ready for Contributor when they collaborate effectively with PM and Engineering — not just coexist."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Proactively includes Engineering in design reviews before designs are finalized.",
            "Develops working rapport with PM — shares design context proactively and asks for product context in return.",
            "Understands the priorities and constraints of Engineering and PM as disciplines, not just stakeholders.",
            "Is known positively by name to cross-functional partners outside their immediate pod."
          ],
          "evidence_artifacts": [
            "Engineering cited them as a collaborative design partner in a retro.",
            "PM proactively shares roadmap context with them outside of scheduled touchpoints.",
            "Cross-functional partner outside their pod referenced working with them positively."
          ],
          "next_level_threshold": "Ready for Independent when they build strong partnerships across departments — proactively, not just when a project requires it."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Builds relationships with Marketing, Sales, Operations, Legal, or Data before a project requires it.",
            "Uses cross-functional relationships to surface insights that improve design decisions.",
            "Is known as a design ambassador — people outside their team seek design input because of their relationship.",
            "Maintains relationships across functions over time, not just during active projects."
          ],
          "evidence_artifacts": [
            "Cross-functional relationship they built surfaced an insight that changed a design decision.",
            "Person outside their immediate team proactively sought their design input.",
            "Maintained at least 3 cross-functional relationships over a quarter without an active shared project."
          ],
          "next_level_threshold": "Ready for Expert when they shape cross-functional culture — how teams collaborate and how design is valued across the organization."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Actively shapes how design is perceived and valued across the organization.",
            "Creates cross-functional rituals (share-outs, joint retros, embedded sessions) that build shared understanding.",
            "Is a bridge between teams with conflicting priorities — trusted by both sides.",
            "Designs are better because of relationships they built, and the team benefits from those relationships too."
          ],
          "evidence_artifacts": [
            "Cross-functional ritual they initiated is ongoing.",
            "Called on to bridge two teams with conflicting priorities — and succeeded.",
            "Team benefited from a cross-functional relationship they built that predated the project."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A designer who is easy to work with inside their pod but unfamiliar to the rest of the organization is leaving value on the table. The best design decisions happen at the intersection of disciplines — and that intersection requires relationships.",
      "anti_patterns": "Learner: Building relationships only when a project requires it. Contributor: Treating cross-functional collaboration as process compliance rather than genuine partnership. Independent: Building relationships so broadly that depth suffers — known by many, deeply trusted by few. Expert: Creating cross-functional rituals that become obligatory rather than valuable."
    },
    {
      "id": "collaboration_7",
      "category": "Collaboration",
      "skill_number": 7,
      "name": "Adaptive When Faced with Ambiguity",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Adjusts when plans change",
          "typical_scope": "Individual"
        },
        {
          "level": "Contributor",
          "core_shift": "Remains productive amid shifting requirements",
          "typical_scope": "Feature-level"
        },
        {
          "level": "Independent",
          "core_shift": "Brings structure and clarity to ambiguous problems",
          "typical_scope": "Initiative-level"
        },
        {
          "level": "Expert",
          "core_shift": "Provides stability in highly ambiguous environments",
          "typical_scope": "Team and org-level"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Accepts scope changes or direction shifts without significant disruption to their work.",
            "Asks clarifying questions when ambiguity is blocking progress rather than guessing.",
            "Stays productive when a project brief is incomplete.",
            "Doesn't require a fully defined brief before beginning exploratory work."
          ],
          "evidence_artifacts": [
            "Adapted to a mid-sprint scope change without a drop in output quality.",
            "Asked a clarifying question that unblocked work rather than waiting for someone to notice the gap.",
            "Started exploratory design work with an incomplete brief and produced useful output."
          ],
          "next_level_threshold": "Ready for Contributor when they remain productive amid shifting requirements — finding ways to make progress even when the full picture isn't clear."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Identifies what's known and unknown at the start of ambiguous work and designs their approach accordingly.",
            "Makes reasonable assumptions and documents them rather than waiting for perfect clarity.",
            "Continues to progress when blocked on one dimension by shifting to another.",
            "Communicates ambiguity to stakeholders with a suggested resolution path."
          ],
          "evidence_artifacts": [
            "Assumption log produced at the start of an ambiguous project that guided the team.",
            "Made a documented assumption that proved correct and kept the project moving.",
            "Proposed a path forward in a meeting where the team was stuck on ambiguity."
          ],
          "next_level_threshold": "Ready for Independent when they bring structure and clarity to ambiguous problems — turning 'we don't know' into 'here's what we should find out first.'"
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Creates frameworks that help teams navigate ambiguous problem spaces (assumption maps, decision trees, prioritized unknowns lists).",
            "Comfortable making high-stakes decisions with incomplete information — and standing behind them.",
            "Prevents ambiguity paralysis by establishing enough structure for the team to move forward.",
            "Names uncertainty clearly to stakeholders without undermining confidence in the path forward."
          ],
          "evidence_artifacts": [
            "Framework they created moved a stuck team forward.",
            "Made a high-stakes design decision with incomplete information — decision validated in retrospect.",
            "Stakeholder presentation acknowledged uncertainty honestly while maintaining confidence in the direction."
          ],
          "next_level_threshold": "Ready for Expert when they provide stability and confidence in highly ambiguous environments — the team is less anxious because they're in the room."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Is the person the team looks to when the situation is most unclear.",
            "Creates organizational clarity during product pivots, leadership changes, or strategic uncertainty.",
            "Remains steady and productive under conditions that destabilize others.",
            "Builds the team's capacity to operate effectively in ambiguity — not just models it."
          ],
          "evidence_artifacts": [
            "Team maintained productivity through a major pivot or restructuring with their support.",
            "Named by teammates as a stabilizing presence in a difficult period.",
            "Ran a workshop or retrospective that helped the team develop their own ambiguity tolerance."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Ambiguity is permanent in product design. A designer who requires clarity before starting will always be behind. The skill is not tolerating ambiguity — it's producing useful work from it.",
      "anti_patterns": "Learner: Freezing when a brief changes rather than adapting. Contributor: Producing work under ambiguity but not communicating assumptions — creating surprises at review. Independent: Creating so much structure around ambiguity that it eliminates the exploration needed for good design. Expert: Being so comfortable with ambiguity that they forget others aren't, and don't give enough structure to teammates who need it."
    },
    {
      "id": "collaboration_8",
      "category": "Collaboration",
      "skill_number": 8,
      "name": "Effectively Requests & Receives Support",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Asks for help when prompted",
          "typical_scope": "Individual"
        },
        {
          "level": "Contributor",
          "core_shift": "Proactively seeks input to unblock work",
          "typical_scope": "Feature-level"
        },
        {
          "level": "Independent",
          "core_shift": "Identifies when collaboration is required",
          "typical_scope": "Engages stakeholders early"
        },
        {
          "level": "Expert",
          "core_shift": "Models healthy support-seeking culture",
          "typical_scope": "Team-wide"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Asks for help before a problem becomes a delay.",
            "Frames requests for support clearly: 'I'm stuck on X because of Y — can you help with Z?'",
            "Accepts help without deflecting or minimizing the need for it.",
            "Follows up with the person who helped them — closes the loop."
          ],
          "evidence_artifacts": [
            "Asked for help before a task was overdue in a quarter.",
            "Help request they made was specific enough for the support-giver to respond without follow-up questions.",
            "Followed up after receiving support with a brief outcome update."
          ],
          "next_level_threshold": "Ready for Contributor when they proactively seek input to unblock work — not waiting until a problem is visible to others."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Proactively identifies when a design decision would benefit from additional input and seeks it out.",
            "Distinguishes between needing validation and needing genuine input — and asks for the right thing.",
            "Uses the network (PM, Eng, peers) appropriately — doesn't always escalate to the same person.",
            "Implements input in a way that's traceable — feedback-givers can see their input had an effect."
          ],
          "evidence_artifacts": [
            "Proactively requested input that changed a design decision.",
            "Used 3+ different people as inputs over a quarter — distributed the support-seeking appropriately.",
            "Feedback-giver confirmed their input was implemented in a subsequent review."
          ],
          "next_level_threshold": "Ready for Independent when they identify early when collaboration is required and engage stakeholders before a problem is obvious."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Identifies when a project needs broader input (cross-functional, research, external) before it becomes urgent.",
            "Brings the right people in at the right phase — not too early (before there's something to react to) or too late (when the decision is effectively made).",
            "Uses support-seeking as a collaboration tool — involves stakeholders in ways that build buy-in.",
            "Makes it easy for others to support them — low-friction requests with clear context and specific asks."
          ],
          "evidence_artifacts": [
            "Stakeholder brought in early enough to shape a decision (not just review a done one).",
            "Cross-functional input sought before a project was visible enough to attract it organically.",
            "Support request resulted in genuine collaboration, not just a review comment."
          ],
          "next_level_threshold": "Ready for Expert when they model healthy support-seeking culture — others are more willing to ask for help because of how they do it."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Creates an environment where asking for help is normalized — not a sign of weakness.",
            "Publicly shares when they've sought support and what changed as a result.",
            "Addresses cultures of 'I should be able to figure this out alone' when they emerge in the team.",
            "Teaches the team how to ask for support in ways that are specific, timely, and easy to respond to."
          ],
          "evidence_artifacts": [
            "Team support-seeking behavior improved — more proactive asks, fewer silent struggles observed.",
            "Publicly modeled asking for help in a meeting or Slack in a way the team noticed positively.",
            "Addressed a teammate's reluctance to seek support and helped them get the input they needed."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Silent struggling is not independence — it's a risk. A designer who doesn't ask for help when they need it creates delays, lower-quality work, and blind spots that reviews can't catch in time.",
      "anti_patterns": "Learner: Waiting until something is visibly broken before asking for help. Contributor: Asking for support without specificity — 'can you look at this?' instead of 'I'm unsure about the hierarchy in this section — does this read as the primary action to you?' Independent: Involving stakeholders so early that work isn't ready to be reacted to. Expert: Modeling support-seeking so visibly that it creates social pressure to always ask for help."
    },
    {
      "id": "collaboration_9",
      "category": "Collaboration",
      "skill_number": 9,
      "name": "Advocates for & Adheres to Team Norms",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Understands team processes",
          "typical_scope": "Individual"
        },
        {
          "level": "Contributor",
          "core_shift": "Consistently follows established norms",
          "typical_scope": "Feature-level"
        },
        {
          "level": "Independent",
          "core_shift": "Reinforces norms constructively with peers",
          "typical_scope": "Team-wide"
        },
        {
          "level": "Expert",
          "core_shift": "Helps evolve and formalize team operating standards",
          "typical_scope": "Org-level"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Understands the team's established norms: how work is reviewed, how files are organized, how decisions are documented.",
            "Follows norms consistently without needing to be reminded.",
            "Asks questions about norms they don't understand rather than ignoring them.",
            "Raises concerns about norms privately rather than violating them publicly."
          ],
          "evidence_artifacts": [
            "No norm violations flagged in a quarter.",
            "Asked a clarifying question about a team process rather than ignoring it.",
            "Raised a concern about a norm through the appropriate channel."
          ],
          "next_level_threshold": "Ready for Contributor when they consistently follow established norms and uphold them as a baseline for their own work."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Models norms visibly — file naming, critique format, decision documentation — in a way others can see and follow.",
            "Maintains norms even under delivery pressure when shortcuts are tempting.",
            "Shares norm context with new team members or cross-functional partners.",
            "Documents new norms when they emerge from team discussion."
          ],
          "evidence_artifacts": [
            "Maintained file organization standards during a high-pressure sprint.",
            "Shared norm context with a new designer without being asked to onboard them.",
            "Documented a newly established team norm in the team wiki or shared doc."
          ],
          "next_level_threshold": "Ready for Independent when they reinforce norms constructively with peers — naming violations without judgment."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Addresses norm violations directly and constructively: 'Hey, I noticed this file doesn't follow our organization standard — want to walk through how we usually do it?'",
            "Distinguishes between norms worth upholding and ones that have become outdated.",
            "Brings norm-evolution discussions to retros rather than unilaterally changing behavior.",
            "Creates accountability without creating a punitive environment."
          ],
          "evidence_artifacts": [
            "Addressed a norm violation with a peer constructively — peer responded positively.",
            "Proposed a norm change in a retro that was adopted.",
            "Maintained accountability for a norm without damaging a relationship."
          ],
          "next_level_threshold": "Ready for Expert when they help evolve and formalize team operating standards — the team operates better because of how they manage and update norms."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Leads the team in evaluating and updating norms as the team and product mature.",
            "Creates documentation that makes norms explicit, accessible, and onboardable.",
            "Identifies when norms are creating friction rather than enabling work and proposes replacements.",
            "Builds a team culture where norms are owned collectively, not enforced by one person."
          ],
          "evidence_artifacts": [
            "Norms documentation they created is referenced in onboarding.",
            "Led a team retro that resulted in a norm update adopted by the full team.",
            "Team norms are followed by the team without requiring enforcement — internalized."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A designer who follows norms only when convenient teaches the team that norms are optional. Consistency under pressure is what makes norms meaningful.",
      "anti_patterns": "Learner: Following norms they agree with and ignoring ones they don't. Contributor: Following norms rigidly even when a situation clearly calls for an exception, without flagging it. Independent: Reinforcing norms in a way that feels policing rather than collaborative. Expert: Creating so many formal norms that the team spends more time maintaining them than using them."
    },
    {
      "id": "collaboration_10",
      "category": "Collaboration",
      "skill_number": 10,
      "name": "Collaborates Well with Other Teams/Roles",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Participates in cross-team efforts",
          "typical_scope": "Prompted"
        },
        {
          "level": "Contributor",
          "core_shift": "Works across functions to deliver features",
          "typical_scope": "Feature-level"
        },
        {
          "level": "Independent",
          "core_shift": "Drives alignment across multiple stakeholders",
          "typical_scope": "Initiative-level"
        },
        {
          "level": "Expert",
          "core_shift": "Establishes collaboration models",
          "typical_scope": "Org-wide delivery"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Participates constructively in cross-team meetings when included.",
            "Understands the role and priorities of Engineering, PM, and other functions they work with regularly.",
            "Shares design context proactively with cross-team partners.",
            "Does not create 'us vs. them' framing in conversation about other disciplines."
          ],
          "evidence_artifacts": [
            "No negative cross-team relationship feedback in a quarter.",
            "Proactively shared design context with a cross-team partner without being asked.",
            "Reframed a 'design vs. engineering' dynamic constructively in a meeting."
          ],
          "next_level_threshold": "Ready for Contributor when they work effectively across functions to deliver features — collaboration is a contribution, not a process compliance step."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Proactively builds working relationships with Engineering leads, PMs, and cross-functional partners.",
            "Includes cross-team partners at the right moments in the design process.",
            "Adapts their communication style to the discipline they're working with.",
            "Navigates disagreements with cross-team partners constructively."
          ],
          "evidence_artifacts": [
            "Cross-team partner cited them as a collaborative partner in a retro or 1:1.",
            "Design review included Engineering input before designs were finalized.",
            "Disagreement with a cross-team partner resolved without escalation."
          ],
          "next_level_threshold": "Ready for Independent when they drive alignment across multiple stakeholders with competing priorities."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Facilitates alignment conversations across teams with competing priorities.",
            "Identifies and names when teams are working at cross-purposes before it creates delivery risk.",
            "Creates shared understanding through artifacts (decision logs, blueprints, shared docs) that persist beyond meetings.",
            "Is sought out by other teams as a design partner, not just a design resource."
          ],
          "evidence_artifacts": [
            "Cross-team alignment they facilitated prevented a delivery conflict.",
            "Named a cross-purpose situation in a cross-team meeting that was validated and addressed.",
            "Cross-functional team sought their design input unprompted before a major decision."
          ],
          "next_level_threshold": "Ready for Expert when they establish collaboration models that improve org-wide delivery."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Creates rituals, frameworks, or processes that improve how design collaborates with other functions org-wide.",
            "Is the design team's ambassador to other functions — represents design thinking accurately and persuasively.",
            "Drives improvements in how cross-functional teams make decisions together.",
            "Builds the team's reputation as a collaborative partner — not just a service function."
          ],
          "evidence_artifacts": [
            "Cross-functional collaboration ritual they created is ongoing and valued.",
            "Another function cited design as a valued strategic partner at an all-hands or leadership review.",
            "Collaboration model they introduced measurably improved delivery speed or decision quality."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Design does not exist in isolation. A designer who does excellent work within their lane but creates friction across teams will limit the impact of every design they ship — because impact requires implementation.",
      "anti_patterns": "Learner: Treating cross-team work as interruptions to 'real' design work. Contributor: Collaborating when required but not building the relationships that make collaboration easier. Independent: Driving alignment so aggressively that cross-team partners feel railroaded rather than aligned. Expert: Creating collaboration models that work for design but create overhead for other functions."
    },
    {
      "id": "influence_1",
      "category": "Influence",
      "skill_number": 1,
      "name": "Effectively Presents Work",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Presents with guidance",
          "typical_scope": "Team-level"
        },
        {
          "level": "Contributor",
          "core_shift": "Articulates rationale and tradeoffs",
          "typical_scope": "Cross-functional"
        },
        {
          "level": "Independent",
          "core_shift": "Persuades using evidence and narrative",
          "typical_scope": "Stakeholder-level"
        },
        {
          "level": "Expert",
          "core_shift": "Shapes strategic decisions",
          "typical_scope": "Executive storytelling"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Presents designs in a critique with context: problem, approach, and recommendation.",
            "Distinguishes between sharing work for feedback and sharing work for approval — and frames accordingly.",
            "Handles basic questions about design decisions with clear rationale.",
            "Avoids saying 'I like it' as a justification — grounds feedback in user needs."
          ],
          "evidence_artifacts": [
            "Critique presentation included problem, exploration, and recommendation without prompting.",
            "Handled 3+ questions in a critique with user-centered rationale.",
            "Received critique feedback that engaged with design decisions — not just surface aesthetics."
          ],
          "next_level_threshold": "Ready for Contributor when they consistently articulate rationale and tradeoffs to PM and Engineering — not just show what they designed."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Structures presentations with a clear narrative: context → insight → options → recommendation → ask.",
            "Proactively communicates what they're not presenting (scope, known gaps) to set accurate expectations.",
            "Addresses questions with specificity — not just restating the design.",
            "Anticipates likely objections and prepares responses before the presentation."
          ],
          "evidence_artifacts": [
            "Cross-functional audience (PM, Eng, Design) engaged in a substantive discussion rather than just reviewing visuals.",
            "Objection anticipated and addressed in the presentation body — didn't surface for the first time in Q&A.",
            "Presentation resulted in a decision or clear next step — not just 'great, let's discuss more.'"
          ],
          "next_level_threshold": "Ready for Independent when they use evidence and narrative to persuade stakeholders — presentations move people, not just inform them."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Uses research, data, and user evidence to build a persuasive case for design decisions.",
            "Tailors the narrative to what the audience cares about — engineering complexity for Eng, user impact for PM, business outcome for leadership.",
            "Makes a specific ask at the end of every presentation.",
            "Follows up presentations with written summaries and decisions captured."
          ],
          "evidence_artifacts": [
            "Stakeholder changed their position based on evidence in a presentation.",
            "Presentation tailored to a leadership audience resulted in a resource or scope decision.",
            "Written summary sent after a presentation with decisions and next steps confirmed accurate."
          ],
          "next_level_threshold": "Ready for Expert when they shape strategic decisions through executive-level storytelling — not just present well in design reviews."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Crafts executive presentations that translate design strategy into business language.",
            "Uses storytelling to make complex problems compelling — stakeholders remember the narrative, not just the slides.",
            "Influences C-suite or board-level decisions through design presentations.",
            "Creates presentation templates or standards the team uses for high-stakes reviews."
          ],
          "evidence_artifacts": [
            "Executive decision influenced by a presentation they led.",
            "Stakeholder cited a narrative from their presentation in a subsequent meeting.",
            "Presentation template they created is used by the team for leadership reviews."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A design presentation that ends with 'any questions?' and silence is not a success — it means the audience wasn't engaged enough to have questions. Good presentations create productive friction.",
      "anti_patterns": "Learner: Presenting work by walking through screens rather than telling a story. Contributor: Presenting rationale but not making an ask — leaving decisions unresolved. Independent: Over-crafting presentations to the point they take more time to produce than the design itself. Expert: Presenting so compellingly that the audience follows the story without critically evaluating the design."
    },
    {
      "id": "influence_2",
      "category": "Influence",
      "skill_number": 2,
      "name": "Involved in Industry/Community",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Engages in external learning",
          "typical_scope": "Individual"
        },
        {
          "level": "Contributor",
          "core_shift": "Shares insights internally",
          "typical_scope": "Team"
        },
        {
          "level": "Independent",
          "core_shift": "Represents team in external forums",
          "typical_scope": "Community"
        },
        {
          "level": "Expert",
          "core_shift": "Builds thought leadership presence",
          "typical_scope": "Industry-wide"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Follows design publications, podcasts, and communities relevant to their work.",
            "Attends design events, conferences, or webinars (virtual or in-person).",
            "Applies external learning to current work — references an article or talk in a design decision.",
            "Participates in internal Slack channels or discussions about industry trends."
          ],
          "evidence_artifacts": [
            "Shared an external resource in team Slack at least once in a quarter.",
            "Referenced an industry trend or article in a design discussion.",
            "Attended at least one external design event in a quarter."
          ],
          "next_level_threshold": "Ready for Contributor when they actively share industry insights with the team — creating value for others from their external learning."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Shares relevant external insights with the team in a structured way (Slack post, team meeting share-out, brief summary doc).",
            "Applies industry knowledge to improve team practices or product decisions.",
            "Connects external trends to internal challenges without being prompted.",
            "Participates in design community discussions (online forums, Discord, Slack communities)."
          ],
          "evidence_artifacts": [
            "Shared an external insight that changed a team decision or practice.",
            "Team discussion where they connected an industry trend to a current product challenge.",
            "Active in at least one external design community."
          ],
          "next_level_threshold": "Ready for Independent when they represent the team in external forums — creating value for the community, not just consuming it."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Speaks at meetups, conferences, or webinars representing their work and team.",
            "Contributes original content to the design community (blog posts, case studies, open-source tools).",
            "Builds a professional network that benefits the team (introductions, partnerships, benchmarking).",
            "Is recognized by name in at least one design community."
          ],
          "evidence_artifacts": [
            "Spoke at or contributed to an external design event or publication.",
            "External content they created received positive community engagement.",
            "Introduced the team to a professional connection that created value."
          ],
          "next_level_threshold": "Ready for Expert when they build a thought leadership presence that elevates the organization's reputation in the design community."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Is sought out as a speaker, panelist, or contributor by external organizations.",
            "Their external presence creates recruiting, partnership, or brand value for SpotOn.",
            "Establishes SpotOn as a known contributor to design practice in their specialty area.",
            "Mentors other designers in how to build community presence and contribute externally."
          ],
          "evidence_artifacts": [
            "Invited to speak or contribute by an external organization (not self-submitted).",
            "External presence cited as a factor in a recruiting conversation.",
            "SpotOn mentioned in a design community context they initiated."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Community involvement that's only consumption — reading, attending, listening — doesn't build presence or create value for the team. The shift happens when a designer starts contributing to the community, not just benefiting from it.",
      "anti_patterns": "Learner: Treating industry learning as a personal benefit rather than a team input. Contributor: Sharing insights without connecting them to actionable team implications. Independent: Building external presence at the expense of internal delivery. Expert: Creating such a high-profile external presence that internal stakeholders feel secondary."
    },
    {
      "id": "influence_3",
      "category": "Influence",
      "skill_number": 3,
      "name": "Contributes to Growth of Practice",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Participates in team initiatives",
          "typical_scope": "Individual"
        },
        {
          "level": "Contributor",
          "core_shift": "Improves processes within immediate team",
          "typical_scope": "Team-level"
        },
        {
          "level": "Independent",
          "core_shift": "Drives meaningful design operations improvements",
          "typical_scope": "Practice-level"
        },
        {
          "level": "Expert",
          "core_shift": "Builds long-term capability frameworks",
          "typical_scope": "Org-wide"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Participates in design team initiatives (critique formats, workshops, retros) when invited.",
            "Offers process improvement suggestions when they see friction.",
            "Volunteers for team responsibilities beyond their immediate project work.",
            "Follows established team practices that improve collective quality."
          ],
          "evidence_artifacts": [
            "Participated in at least 2 design team initiatives in a quarter beyond assigned project work.",
            "Offered a process improvement suggestion in a retro that was discussed.",
            "Volunteered for a team responsibility (note-taking, template maintenance, new hire introduction)."
          ],
          "next_level_threshold": "Ready for Contributor when they improve processes within their immediate team — not just participate in existing ones."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Identifies friction in team processes and proposes concrete improvements.",
            "Implements a process improvement and measures whether it worked.",
            "Maintains a team resource (template, wiki page, shared library) without being asked.",
            "Runs or contributes meaningfully to a design team ritual (critique, share-out, retrospective)."
          ],
          "evidence_artifacts": [
            "Process improvement they proposed was adopted by the team.",
            "Team resource they maintain is referenced by at least 2 teammates.",
            "Ran or co-facilitated a team ritual with positive team feedback."
          ],
          "next_level_threshold": "Ready for Independent when they drive meaningful improvements to design operations — initiatives that improve how the team works, not just individual tasks."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Leads design operations initiatives with meaningful impact: critique format overhaul, design system contribution process, onboarding improvement.",
            "Measures the impact of changes they introduce — not just ships them.",
            "Identifies gaps in team capability and designs interventions to address them.",
            "Partners with design leadership to prioritize practice investment."
          ],
          "evidence_artifacts": [
            "Design ops initiative they led improved a measurable team metric (onboarding time, handoff quality, critique output).",
            "Impact measurement they defined tracked a practice improvement successfully.",
            "Capability gap they identified became a structured team initiative."
          ],
          "next_level_threshold": "Ready for Expert when they build long-term capability frameworks that outlast any individual project or quarter."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Builds capability frameworks (skill rubrics, mentorship structures, learning paths) that improve team quality over time.",
            "Influences how the design organization is structured, resourced, and developed.",
            "Creates practice artifacts that persist and are used after they've moved to other work.",
            "Is cited by teammates as a reason the team is better at their craft."
          ],
          "evidence_artifacts": [
            "Capability framework they created is in active use and referenced in team planning.",
            "Practice artifact they built (playbook, rubric, guide) is referenced in onboarding.",
            "Teammate cited their contribution to team growth in a public forum (retro, all-hands, review)."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A designer who benefits from a strong team practice without investing in it is consuming without contributing. Strong practices require active maintenance — they don't sustain themselves.",
      "anti_patterns": "Learner: Participating in team initiatives without contributing to their improvement. Contributor: Improving processes based on personal preference rather than team need. Independent: Driving practice initiatives so ambitiously that they create overhead without proportional benefit. Expert: Building such comprehensive capability frameworks that the team manages the framework rather than doing design."
    },
    {
      "id": "influence_4",
      "category": "Influence",
      "skill_number": 4,
      "name": "Sets Culture & Tone",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Embodies team values",
          "typical_scope": "Individual"
        },
        {
          "level": "Contributor",
          "core_shift": "Reinforces positive behaviors",
          "typical_scope": "Team-level"
        },
        {
          "level": "Independent",
          "core_shift": "Shapes culture within team",
          "typical_scope": "Team-wide"
        },
        {
          "level": "Expert",
          "core_shift": "Defines culture standards",
          "typical_scope": "Org-wide"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Shows up to team interactions with positivity, curiosity, and generosity — not cynicism.",
            "Gives credit to teammates publicly and specifically.",
            "Handles setbacks (rejected designs, missed sprints, tough feedback) with professionalism.",
            "Does not participate in gossip, negativity, or blame."
          ],
          "evidence_artifacts": [
            "No negative culture feedback from teammates in a quarter.",
            "Publicly credited a teammate for their contribution in a meeting or Slack.",
            "Handled a design rejection professionally — moved forward without residual negativity."
          ],
          "next_level_threshold": "Ready for Contributor when they actively reinforce positive team behaviors — not just embody values personally."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Celebrates teammate wins publicly and specifically.",
            "Addresses negativity or blame in team settings directly and constructively.",
            "Models the behavior they want to see — shows curiosity in critiques, generosity with time, rigor in research.",
            "Creates moments of connection and humanity in a team that can easily become transactional."
          ],
          "evidence_artifacts": [
            "Celebrated a teammate's win in a team-visible way.",
            "Addressed a negative team dynamic constructively and the tone shifted.",
            "Created a team moment (shoutout, retro format, social moment) that was noted positively."
          ],
          "next_level_threshold": "Ready for Independent when they actively shape the culture of the team — others feel its effect without being directly involved with them on a project."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Creates team rituals that reinforce values: how critiques are run, how wins are celebrated, how failures are processed.",
            "Identifies and names culture problems when they emerge — doesn't let them calcify.",
            "Is the person the team looks to for the right tone in difficult moments.",
            "Attracts strong people who want to work with them and on the team they're part of."
          ],
          "evidence_artifacts": [
            "Team ritual they created is ongoing and valued.",
            "Cultural issue they named and addressed improved team dynamics measurably.",
            "Designer joined the team (or stayed on the team) specifically because of the culture they helped create."
          ],
          "next_level_threshold": "Ready for Expert when they define culture standards across the organization — team culture is an output of their values and actions."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Defines what good culture looks like for the design organization and makes it explicit.",
            "Addresses culture problems at a systemic level — not just individual dynamics.",
            "Is cited by designers across the org as someone who makes the culture better.",
            "Influences how culture is evaluated in hiring, performance reviews, and team development."
          ],
          "evidence_artifacts": [
            "Culture definition they contributed to is referenced in team documentation or values conversations.",
            "Systemic culture issue they addressed improved measurably across the org.",
            "New designer cited the culture (which they shaped) as a reason they accepted the offer."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Culture is set by what's tolerated as much as what's celebrated. A designer who does great work individually but tolerates negativity, gossip, or blame in team settings is setting culture — just not the right kind.",
      "anti_patterns": "Learner: Assuming culture is HR's responsibility rather than everyone's. Contributor: Reinforcing positive behaviors in ways that feel performative rather than genuine. Independent: Shaping culture so actively that it feels managed rather than organic. Expert: Defining culture at such a high level of abstraction that it doesn't translate into day-to-day team behavior."
    },
    {
      "id": "influence_5",
      "category": "Influence",
      "skill_number": 5,
      "name": "Embodies SpotOn Values",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Demonstrates alignment in daily work",
          "typical_scope": "Individual"
        },
        {
          "level": "Contributor",
          "core_shift": "Models all four values visibly and consistently",
          "typical_scope": "Daily work and team"
        },
        {
          "level": "Independent",
          "core_shift": "Advocates for values in product and team tradeoffs",
          "typical_scope": "Stakeholder-level"
        },
        {
          "level": "Expert",
          "core_shift": "Ensures values shape strategy and org culture",
          "typical_scope": "Org-wide decisions"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Be the Client: Approaches design work by asking 'what would the restaurant owner, server, or guest experience?' before proposing solutions — keeps the end user's reality present even in internal conversations.",
            "One for All, All for One: Participates in team rituals (critiques, retros, planning) as a contributor, not just an attendee — adds to team outcomes, not just personal output.",
            "Learn, Question, Transform, Repeat: Asks 'why does it work this way?' when encountering existing patterns rather than accepting them uncritically. Applies external learning to current work.",
            "Think Big, Act Small: Handles critical feedback on their work without defensiveness — credits teammates publicly and specifically. Knows the difference between confidence and ego."
          ],
          "evidence_artifacts": [
            "Can explain how each of the four SpotOn values influenced a specific design decision in the past quarter.",
            "Credited a teammate contribution in a public team forum (Slack, all-hands, review).",
            "Referenced a user's real-world context (restaurant ops, guest experience) in a design rationale without being prompted.",
            "Applied an external learning — an article, talk, or observation — to a current design decision and shared how."
          ],
          "next_level_threshold": "Ready for Contributor when all four values are visible in how they work — not just in what they say in interviews or onboarding."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Be the Client: Uses research, user quotes, and field observation to keep the real SpotOn customer — restaurant operators, staff, and guests — present in design decisions. Pushes back when a feature feels internally motivated rather than user-motivated.",
            "One for All, All for One: Proactively includes Engineering and PM in design decisions before they're finalized. Shares context they have that others don't — removes information silos.",
            "Learn, Question, Transform, Repeat: Proposes process or design improvements based on what they've observed or learned. Doesn't stay in the same approach because it worked last time.",
            "Think Big, Act Small: Acknowledges mistakes directly and uses them as visible learning moments — doesn't deflect or minimize. Gives credit before taking it."
          ],
          "evidence_artifacts": [
            "Pushed back on a feature request with a user-centered rationale rooted in actual operator or guest context.",
            "Proactively shared design context with Engineering or PM that prevented a misalignment.",
            "Proposed at least one process improvement in a retro or planning session based on an observed gap.",
            "Acknowledged a design mistake openly in a review or retro and described what they'd do differently."
          ],
          "next_level_threshold": "Ready for Independent when they advocate for values in genuine tradeoffs — when it costs something to hold the value, and they hold it anyway."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Be the Client: Names when a product decision deprioritizes the operator, staff member, or guest experience in service of internal metrics — and proposes an alternative that serves both.",
            "One for All, All for One: Actively breaks down silos — identifies when two teams are working toward conflicting goals and facilitates alignment. Creates cross-functional shared understanding.",
            "Learn, Question, Transform, Repeat: Challenges the team to question long-held assumptions about how the product works. Proposes meaningful changes even when there's organizational resistance.",
            "Think Big, Act Small: Steps back to let others shine — redirects recognition to teammates even when they did the foundational work. Creates space for others to lead."
          ],
          "evidence_artifacts": [
            "Named a user experience harm in a product decision and proposed an alternative that was adopted.",
            "Facilitated alignment between two teams with conflicting approaches — documented outcome.",
            "Challenged a long-held product assumption with evidence, and the team changed course.",
            "Redirected public recognition to a teammate in a meeting or all-hands."
          ],
          "next_level_threshold": "Ready for Expert when values influence is no longer dependent on them being in the room — they've embedded values into how the team makes decisions."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Be the Client: Advocates for user and customer centricity in executive product strategy — ensures that business growth goals are evaluated alongside operator and guest experience impact.",
            "One for All, All for One: Creates organizational structures (cross-functional rituals, shared planning processes, team norms) that break down silos systematically — not just in moments of conflict.",
            "Learn, Question, Transform, Repeat: Drives change management initiatives with sophistication — builds buy-in, anticipates resistance, and turns skeptics into participants. Introduces new practices that outlast their direct involvement.",
            "Think Big, Act Small: Is cited by peers and leadership as someone who elevates others — their presence makes the people around them better, not more dependent."
          ],
          "evidence_artifacts": [
            "Executive decision they influenced demonstrably improved the operator, staff, or guest experience.",
            "Cross-functional ritual or structure they created is ongoing and reduces organizational silos without their facilitation.",
            "Change initiative they led was adopted and is sustained — and they built others' capability to carry it forward.",
            "Multiple teammates cited them as someone who helped them grow or succeed — across a quarter or review cycle."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "SpotOn's values are not a poster — they're a decision filter. The test is behavior when holding a value is costly: when Be the Client means slowing down a release, when Think Big, Act Small means letting someone else present the work, when Learn, Question, Transform, Repeat means admitting the current approach isn't working.",
      "anti_patterns": "Learner: Citing values in presentations without applying them to decisions. Contributor: Modeling 'Think Big, Act Small' (humility) well but not 'Learn, Question, Transform, Repeat' (agility) — or vice versa. Independent: Advocating for 'Be the Client' so forcefully that 'One for All, All for One' (team collaboration) suffers — values working against each other rather than in balance. Expert: Enforcing values at a systemic level in ways that feel punitive rather than developmental."
    },
    {
      "id": "influence_6",
      "category": "Influence",
      "skill_number": 6,
      "name": "Contributes to Coaching & Mentorship",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Open to feedback",
          "typical_scope": "Individual"
        },
        {
          "level": "Contributor",
          "core_shift": "Provides helpful peer feedback",
          "typical_scope": "Peer-level"
        },
        {
          "level": "Independent",
          "core_shift": "Mentors junior designers",
          "typical_scope": "Structured growth"
        },
        {
          "level": "Expert",
          "core_shift": "Develops mentorship systems",
          "typical_scope": "Org-wide capability"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Receives coaching and mentorship graciously — doesn't get defensive.",
            "Shares learnings from their own growth with peers informally.",
            "Gives honest, specific feedback when asked by a peer.",
            "Identifies when a peer could benefit from input they have and offers it."
          ],
          "evidence_artifacts": [
            "Received coaching feedback without defensive response in a quarter.",
            "Offered an unprompted, specific, and actionable insight to a peer.",
            "Peer cited their input as useful in a retro or 1:1."
          ],
          "next_level_threshold": "Ready for Contributor when they provide helpful peer feedback consistently — feedback others actively seek and act on."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Provides structured, specific feedback in critiques that goes beyond 'I like it' or 'I don't like it.'",
            "Gives feedback tied to user needs and design principles — not personal taste.",
            "Creates psychological safety in peer reviews — people are willing to show unfinished work.",
            "Follows up on feedback they've given to see if it had the intended effect."
          ],
          "evidence_artifacts": [
            "Peer applied feedback they gave and the design improved measurably.",
            "New designer showed unfinished work in a critique they facilitated without hesitation.",
            "Feedback they gave was cited in a decision log or design iteration note."
          ],
          "next_level_threshold": "Ready for Independent when they actively mentor junior designers — creating structured growth over time, not just one-off feedback."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Mentors 1–2 junior designers with intentionality — identifies growth areas, sets goals, provides ongoing input.",
            "Creates stretch opportunities for mentees rather than just protecting them from difficult situations.",
            "Adapts mentorship style to the individual — what one person needs differs from another.",
            "Advocates for their mentee's growth with design leadership."
          ],
          "evidence_artifacts": [
            "Mentee they coached visibly improved in a documented skill over a quarter.",
            "Stretch opportunity they created for a mentee was completed successfully.",
            "Advocated for a mentee's promotion or opportunity with leadership."
          ],
          "next_level_threshold": "Ready for Expert when they develop structured mentorship systems that operate beyond their direct involvement."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Creates mentorship structures (pairing programs, growth frameworks, feedback cadences) used across the design team.",
            "Coaches other senior designers on how to mentor effectively.",
            "Identifies systemic capability gaps and designs programs to address them.",
            "Is cited as a reason other designers chose to stay and grow at SpotOn."
          ],
          "evidence_artifacts": [
            "Mentorship program or framework they created is in active use.",
            "Designer they indirectly supported through a system they built grew measurably.",
            "Designer cited their mentorship influence as a reason for staying at the company."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A mentor who gives great advice in one conversation but doesn't create a sustained growth environment is a coach, not a mentor. Mentorship requires investment over time — not just wisdom on demand.",
      "anti_patterns": "Learner: Only seeking mentorship, not giving it. Contributor: Giving feedback that feels like direction rather than development. Independent: Mentoring so intensively that mentees become dependent rather than capable. Expert: Creating mentorship systems so structured they remove the organic human connection that makes mentorship work."
    },
    {
      "id": "influence_7",
      "category": "Influence",
      "skill_number": 7,
      "name": "Comfortable Interviewing & Hiring",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Participates in interviews",
          "typical_scope": "Observer or note-taker"
        },
        {
          "level": "Contributor",
          "core_shift": "Provides thoughtful evaluations",
          "typical_scope": "Structured feedback"
        },
        {
          "level": "Independent",
          "core_shift": "Leads interview loops",
          "typical_scope": "Talent calibration"
        },
        {
          "level": "Expert",
          "core_shift": "Shapes hiring strategy",
          "typical_scope": "Raises talent bar"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Participates in interviews as an observer or co-interviewer when asked.",
            "Takes structured notes during interviews — records specific evidence, not impressions.",
            "Asks questions from a prepared list rather than improvising.",
            "Submits feedback promptly after interviews."
          ],
          "evidence_artifacts": [
            "Submitted interview feedback within 24 hours in a quarter.",
            "Interview notes included specific examples from the candidate, not just adjectives.",
            "No underprepared interviews — question list ready before the session."
          ],
          "next_level_threshold": "Ready for Contributor when they provide thoughtful, structured evaluations that distinguish strong from weak candidates using evidence."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Uses the interview rubric to evaluate candidates consistently.",
            "Writes feedback that includes specific behavioral evidence tied to each criterion.",
            "Distinguishes between 'different from our current approach' and 'below the bar.'",
            "Participates constructively in debriefs — adds perspective without just agreeing with the loudest voice."
          ],
          "evidence_artifacts": [
            "Interview feedback they submitted was referenced in a debrief as particularly useful.",
            "Offered a contrasting perspective in a debrief that added calibration value.",
            "Feedback distinguished between criteria met and criteria not met with specific examples."
          ],
          "next_level_threshold": "Ready for Independent when they lead interview loops and facilitate calibration conversations."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Leads a full interview loop: coordinates interviewers, assigns question coverage, facilitates debrief.",
            "Calibrates across interviewers — identifies when feedback is inconsistent and resolves it.",
            "Identifies when a candidate is being evaluated on cultural fit vs. skill and names the distinction.",
            "Advocates for or against a hire with a specific, documented rationale."
          ],
          "evidence_artifacts": [
            "Led a complete interview loop resulting in a hire decision they stood behind.",
            "Identified and resolved an interviewer calibration issue in a debrief.",
            "Hire/pass recommendation they made was well-reasoned and respected by the panel."
          ],
          "next_level_threshold": "Ready for Expert when they shape hiring strategy and consistently raise the talent bar."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Defines interview rubrics and evaluation criteria that improve consistency across interviewers.",
            "Identifies patterns in who gets hired vs. who doesn't and adjusts process to reduce bias.",
            "Influences the sourcing and hiring strategy for the design team.",
            "Raises the bar by naming when a candidate meets the current bar but wouldn't raise the team's overall capability."
          ],
          "evidence_artifacts": [
            "Rubric or evaluation criteria they designed is in active use.",
            "Identified and addressed an interview bias pattern that improved calibration.",
            "Hiring strategy shift they advocated for improved team capability measurably."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Interviewing with only an impression and no evidence is not an evaluation — it's a vibe check. Every hire is a multi-year investment. The rigor applied to interviews should reflect that.",
      "anti_patterns": "Learner: Asking about a candidate's resume rather than evaluating for rubric criteria. Contributor: Submitting feedback that reinforces the interviewer's impression rather than evaluating against criteria. Independent: Leading calibration sessions where the loudest or most senior voice wins. Expert: Raising the talent bar so aggressively that the team has permanent open positions."
    },
    {
      "id": "influence_8",
      "category": "Influence",
      "skill_number": 8,
      "name": "Possesses Clear Design Philosophy",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "Developing point of view",
          "typical_scope": "Individual"
        },
        {
          "level": "Contributor",
          "core_shift": "Grounds rationale in user needs",
          "typical_scope": "Feature-level"
        },
        {
          "level": "Independent",
          "core_shift": "Consistent philosophy guides decisions",
          "typical_scope": "Team-wide"
        },
        {
          "level": "Expert",
          "core_shift": "Influences org's philosophy of design",
          "typical_scope": "Org-wide direction"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "Can describe their approach to design problems in their own words — not just reference frameworks.",
            "Articulates why they made a design decision in terms of user benefit.",
            "Identifies when two valid design approaches conflict and can explain the tradeoff.",
            "Their work has a consistent quality and approach that teammates recognize."
          ],
          "evidence_artifacts": [
            "Described their design philosophy in a 1:1 or team share-out clearly and in their own words.",
            "Rationale for a design decision tied explicitly to user benefit.",
            "Teammate recognized their work without seeing a name attached to it — consistent style."
          ],
          "next_level_threshold": "Ready for Contributor when they consistently ground rationale in user needs — their philosophy is visible in their work and their words."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "References a consistent set of design beliefs across different projects and contexts.",
            "Articulates the 'why' behind their approach in terms that go beyond the project at hand.",
            "Uses their philosophy to make tradeoff decisions consistently — not situationally.",
            "Shares their design point of view in critiques and team discussions without prompting."
          ],
          "evidence_artifacts": [
            "Design philosophy articulated consistently across 3+ projects in a quarter.",
            "Referenced a design belief to make a tradeoff decision in a documented review.",
            "Volunteered a design philosophy perspective in a team critique."
          ],
          "next_level_threshold": "Ready for Independent when their philosophy is consistent enough to guide decisions across ambiguous situations — others can predict their approach."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Their design philosophy is recognizable to teammates without being stated.",
            "Uses philosophy to navigate ambiguous situations — provides a stable foundation when requirements shift.",
            "Challenges the team with their philosophy: asks questions like 'does this serve the user in a meaningful way?'",
            "Articulates their philosophy to candidates, stakeholders, and new teammates as a way of setting design standards."
          ],
          "evidence_artifacts": [
            "Teammate correctly described their design philosophy without coaching.",
            "Used philosophy to guide a team through an ambiguous decision point.",
            "Articulated philosophy to an executive stakeholder in a way that influenced a product decision."
          ],
          "next_level_threshold": "Ready for Expert when their philosophy influences how the organization thinks about design — their thinking shapes the collective approach."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Their philosophy is embedded in how the design team talks about and evaluates design work.",
            "Influences the language, criteria, and standards the organization uses to evaluate design quality.",
            "Is sought out by product and business leadership for their design philosophy perspective.",
            "New designers onboard to a philosophy in part shaped by them."
          ],
          "evidence_artifacts": [
            "Design language they introduced is now used by the team in reviews and critiques.",
            "Leadership sought their design philosophy perspective in a strategic decision.",
            "New designer cited their philosophy as a reason for joining the team."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "A designer without a clear philosophy makes different decisions every time — which means they can't be coached, can't mentor, and can't be trusted with ambiguity. Philosophy is the foundation of consistent quality.",
      "anti_patterns": "Learner: Borrowing others' philosophies without testing them against real design decisions. Contributor: Having a philosophy but not applying it when it creates friction with stakeholders. Independent: Having such a strong philosophy that it becomes dogma — other valid approaches are dismissed. Expert: Imposing their philosophy so thoroughly that the team loses its own design voice."
    },
    {
      "id": "influence_9",
      "category": "Influence",
      "skill_number": 9,
      "name": "Embodies & Advocates for the Voice of the User",
      "progression_at_a_glance": [
        {
          "level": "Learner",
          "core_shift": "References user needs in discussion",
          "typical_scope": "Individual"
        },
        {
          "level": "Contributor",
          "core_shift": "Brings user evidence into decisions",
          "typical_scope": "Feature-level"
        },
        {
          "level": "Independent",
          "core_shift": "Champions user perspective in tradeoffs",
          "typical_scope": "Stakeholder-level"
        },
        {
          "level": "Expert",
          "core_shift": "Embeds user advocacy into company culture",
          "typical_scope": "Org-wide"
        }
      ],
      "levels": [
        {
          "level": "Learner",
          "observable_behaviors": [
            "References the user perspective in design discussions, even without formal research.",
            "Distinguishes between what users said they want and what they actually need.",
            "Pushes back on feature requests that appear to serve business goals at user expense.",
            "Asks 'what does the user get out of this?' when evaluating a design decision."
          ],
          "evidence_artifacts": [
            "Referenced user perspective in at least 3 design discussions in a quarter.",
            "Identified a business-vs-user tension in a feature request and named it.",
            "Asked a user-centering question in a sprint planning or design review."
          ],
          "next_level_threshold": "Ready for Contributor when they bring actual user evidence — research findings, data, or quotes — into design and product decisions."
        },
        {
          "level": "Contributor",
          "observable_behaviors": [
            "Cites specific research findings, user quotes, or behavioral data in design and product discussions.",
            "Advocates for user needs in sprint planning and roadmap conversations — not just design reviews.",
            "Distinguishes between user needs that are validated and those that are assumed.",
            "Creates shared understanding of who the user is and what they need in cross-functional teams."
          ],
          "evidence_artifacts": [
            "User finding they cited changed a product decision in a quarter.",
            "Research evidence used in a sprint planning or roadmap discussion they participated in.",
            "Correct user quote or finding cited in a PM or Engineering conversation."
          ],
          "next_level_threshold": "Ready for Independent when they champion the user perspective in high-stakes tradeoffs — willing to push back on business or engineering pressure with evidence."
        },
        {
          "level": "Independent",
          "observable_behaviors": [
            "Advocates for the user perspective in executive conversations — where the business pressure is highest.",
            "Names and challenges when a decision clearly harms users in service of a business metric.",
            "Uses user evidence to reframe business decisions from 'what do we want to build' to 'what do users need.'",
            "Is known across product, engineering, and leadership as a reliable advocate for the user."
          ],
          "evidence_artifacts": [
            "Challenged an executive decision based on user evidence — and was heard.",
            "Reframed a business decision using user research that changed the outcome.",
            "Cross-functional partner cited them as the team's user voice in a retro or planning session."
          ],
          "next_level_threshold": "Ready for Expert when they embed user advocacy into company culture — it's no longer dependent on their presence."
        },
        {
          "level": "Expert",
          "observable_behaviors": [
            "Creates organizational mechanisms that keep the user voice present in decisions: research touchpoints in planning, user representation in roadmap reviews, user stories in sprint rituals.",
            "Ensures user advocacy doesn't disappear when they're not in the room.",
            "Teaches other functions (PM, Engineering, Marketing) how to think from the user's perspective.",
            "The company's design decisions are more user-centered at an org level because of their influence."
          ],
          "evidence_artifacts": [
            "Mechanism they introduced keeps user perspective in a planning or review process they don't attend.",
            "Cross-functional team member cited 'thinking like the user' as something they learned from the design team.",
            "Org-level product decision that improved user outcomes was influenced by advocacy they institutionalized."
          ],
          "next_level_threshold": ""
        }
      ],
      "watch_out": "Advocating for the user only when it's convenient isn't advocacy — it's positioning. The test is whether a designer champions the user perspective when it's costly to do so: when business pressure is high, timelines are short, and the user's case requires work to make.",
      "anti_patterns": "Learner: Invoking 'the user' without evidence — 'users want simplicity' as a way to win an argument. Contributor: Bringing user evidence but framing it as design's position rather than the user's actual need. Independent: Advocating so forcefully for users that business and technical realities are dismissed. Expert: Creating user advocacy systems that become bureaucratic checkboxes rather than genuine practices."
    }
  ],
  "role_expectations": "Designer I: Learner → Contributor across most skills. Designer II: Contributor across most; Independent in 2–3 core areas. Senior Designer: Independent across most Design Skills. Staff / Principal: Expert in 3–5 defining skills across categories. Skills measure capability and scope of impact. Core Values measure how we show up.",
  "categories": [
    "Design Skills",
    "Project Management",
    "Collaboration",
    "Influence"
  ]
};
