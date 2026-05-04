// ============================================================
//  placeholder.js — Realistic seed data for all org members
//  • Only runs once (versioned via dch_placeholder_v)
//  • Never overwrites a profile that already has assessment data
//  • Bump PLACEHOLDER_VERSION to re-seed on next page load
// ============================================================
(function () {
  var PLACEHOLDER_VERSION = 1;
  if (parseInt(localStorage.getItem('dch_placeholder_v') || '0') >= PLACEHOLDER_VERSION) return;

  var L='Learner', C='Contributor', I='Independent', E='Expert';

  // Skill ID arrays (must match app.js _JS / _PM / _CO / _IN order)
  var JS = ['job_skills_1','job_skills_2','job_skills_3','job_skills_4','job_skills_5','job_skills_6','job_skills_7','job_skills_8','job_skills_9','job_skills_10','job_skills_11','job_skills_12','job_skills_13','job_skills_14','job_skills_15','job_skills_16','job_skills_17','job_skills_18','job_skills_19','job_skills_20','job_skills_21','job_skills_22','job_skills_23','job_skills_24'];
  var PM = ['project_management_1','project_management_2','project_management_3','project_management_4','project_management_5'];
  var CO = ['collaboration_1','collaboration_2','collaboration_3','collaboration_4','collaboration_5','collaboration_6','collaboration_7','collaboration_8','collaboration_9','collaboration_10'];
  var IN = ['influence_1','influence_2','influence_3','influence_4','influence_5','influence_6','influence_7','influence_8','influence_9'];

  var EVIDENCE = {
    Learner:     'Still developing this skill; benefits from support and guidance.',
    Contributor: 'Applying this consistently with solid results; continues to grow.',
    Independent: 'Executes independently with high quality; a reliable strength.',
    Expert:      'Clear standout strength — sets the standard for the team.'
  };

  function seed(id, js, pm, co, inf, ratings, accomplishments, improvements) {
    // Skills — skip if already populated
    var existing = JSON.parse(localStorage.getItem('dch_data_' + id) || '{}');
    if (!existing.assessments || Object.keys(existing.assessments).length === 0) {
      var assessments = {};
      var date = '2026-01-15T00:00:00.000Z';
      var ids = JS.concat(PM, CO, IN);
      var levels = js.concat(pm, co, inf);
      ids.forEach(function (sid, i) {
        var lv = levels[i];
        if (lv) {
          assessments[sid] = { managerLevel: lv, selfLevel: lv, evidence: EVIDENCE[lv] || '', goals: '', lastUpdated: date };
        }
      });
      existing.assessments = assessments;
      localStorage.setItem('dch_data_' + id, JSON.stringify(existing));
    }
    // Performance review — skip if already populated
    if (!localStorage.getItem('dch_review_' + id) && ratings) {
      var cats = Object.keys(ratings);
      var avg = cats.reduce(function (s, k) { return s + ratings[k]; }, 0) / cats.length;
      localStorage.setItem('dch_review_' + id, JSON.stringify({
        year: '2025',
        manager: {
          totalWeightedAvg: Math.round(avg * 1000) / 1000,
          ratings: ratings,
          accomplishments: accomplishments || [],
          improvements: improvements || []
        }
      }));
    }
  }

  // ══════════════════════════════════════════════════════════════════════════════
  //  PRODUCT DESIGNERS
  // ══════════════════════════════════════════════════════════════════════════════

  // Gaby Vazquez — PD, Adam's team. Strong visual craft, developing in research.
  seed('p_gvazquez_001',
    [C,C,L,C,L,L,C,C,C,C,C,I,C,L,L,I,I,C,C,L,I,C,C,C], // DS ×24
    [C,C,C,C,L],                                           // PM ×5
    [C,I,C,C,I,C,C,C,L,L],                                // Co ×10
    [L,C,L,L,I,L,L,L,C],                                  // In ×9
    { technical:3, quality:3, accountability:3, we_lead:3, we_deliver:3, we_learn:4, we_care:4 },
    [{ headline: 'Delivered polished screens on the Merchant Portal redesign', bullets: [
      'Produced high-fidelity work that required minimal revision cycles.',
      'Earned recognition from PM for strong visual quality and responsiveness.'
    ]}],
    [{ headline: 'Develop stronger research fluency', bullets: [
      'Push to lead at least one moderated study independently this half.'
    ]}]
  );

  // Aleksandra Chełkowski — PD, Cam's team. Systems thinker, developing in facilitation.
  seed('p_achelko_001',
    [C,L,L,L,C,L,C,L,L,C,C,C,C,L,C,C,I,C,C,C,C,C,C,I], // DS ×24
    [C,C,L,C,C],                                           // PM ×5
    [I,C,C,C,I,C,C,C,L,C],                                // Co ×10
    [C,C,L,C,I,L,L,C,C],                                  // In ×9
    { technical:3, quality:3, accountability:3, we_lead:3, we_deliver:3, we_learn:3, we_care:4 },
    [{ headline: 'Elevated component quality on the POS surface', bullets: [
      'Adopted design system patterns consistently and surfaced gaps to the DS team.',
      'Handoffs consistently well-annotated and implementation-ready.'
    ]}],
    [{ headline: 'Build facilitation and workshop skills', bullets: [
      'Co-facilitate one design workshop with a senior designer this quarter.'
    ]}]
  );

  // Fernanda Nocedal — PD, Marina's team. Newer to role, broad learning phase.
  seed('p_fnocedal_001',
    [C,L,L,L,L,L,C,L,L,C,C,C,L,L,L,C,I,C,L,L,C,C,L,C], // DS ×24
    [C,C,L,L,L],                                           // PM ×5
    [C,C,C,C,I,C,C,L,L,L],                                // Co ×10
    [L,C,L,L,C,L,L,L,C],                                  // In ×9
    { technical:3, quality:3, accountability:3, we_lead:3, we_deliver:3, we_learn:3, we_care:3 },
    [{ headline: 'Ramped quickly and shipped first features with solid quality', bullets: [
      'Delivered two features in her first quarter with minimal rework.',
      'Received positive feedback from engineering on handoff clarity.'
    ]}],
    [{ headline: 'Strengthen research and synthesis skills', bullets: [
      'Lead one discovery task end-to-end this half with manager support.'
    ]}]
  );

  // Mark Banzhoff — PD, Marina's team. Detail-oriented, strong quality focus.
  seed('p_mbanzhoff_001',
    [C,C,L,C,L,C,C,C,L,C,C,C,C,L,L,C,I,C,C,L,I,C,C,C], // DS ×24
    [C,C,C,C,C],                                           // PM ×5
    [C,I,C,I,I,C,C,C,L,C],                                // Co ×10
    [C,C,L,C,I,L,L,C,C],                                  // In ×9
    { technical:3, quality:4, accountability:3, we_lead:3, we_deliver:4, we_learn:3, we_care:3 },
    [{ headline: 'Consistently high-quality visual execution', bullets: [
      'Zero design QA issues across three consecutive sprint cycles.',
      'Proactively flagged a UI inconsistency in the design system and proposed a fix.'
    ]}],
    [{ headline: 'Grow strategic thinking and communication', bullets: [
      'Push beyond delivery into shaping the "why" behind design decisions in reviews.'
    ]}]
  );

  // Jonas Alvarez — PD, Mario's team. Strong prototyper, developing in strategy.
  seed('p_jalvarez_001',
    [C,L,L,L,C,L,C,C,C,C,C,C,L,L,L,C,I,C,C,L,I,C,C,I], // DS ×24
    [C,C,C,C,C],                                           // PM ×5
    [C,C,C,C,I,C,C,C,C,L],                                // Co ×10
    [L,C,L,L,I,L,L,L,C],                                  // In ×9
    { technical:3, quality:3, accountability:3, we_lead:3, we_deliver:3, we_learn:4, we_care:3 },
    [{ headline: 'Strong prototype work accelerated alignment on key flows', bullets: [
      'Prototypes drove faster stakeholder sign-off — reduced review cycles on KDS redesign.',
      'Demonstrated strong Figma variables fluency ahead of his tenure level.'
    ]}],
    [{ headline: 'Develop systems thinking and strategic framing', bullets: [
      'Begin connecting individual features to the larger end-to-end experience.'
    ]}]
  );

  // ══════════════════════════════════════════════════════════════════════════════
  //  SENIOR PRODUCT DESIGNERS
  // ══════════════════════════════════════════════════════════════════════════════

  // Paige Fisher — Senior PD, Adam's team. High performer, approaching principal.
  seed('p_pfisher_001',
    [I,C,C,I,C,C,I,I,C,I,I,I,I,C,C,I,E,I,I,I,I,I,C,I], // DS ×24
    [I,I,I,I,C],                                           // PM ×5
    [I,I,I,I,I,I,I,I,C,C],                                // Co ×10
    [C,I,C,I,I,C,C,I,I],                                  // In ×9
    { technical:4, quality:4, accountability:4, we_lead:4, we_deliver:4, we_learn:4, we_care:4 },
    [{ headline: 'Set the craft bar for the team', bullets: [
      'Elevated visual quality on the Payments surface — referenced by peers as the team standard.',
      'Took ownership of complex flows without being asked and shipped with exceptional quality.'
    ]},{ headline: 'Strong cross-functional partnerships', bullets: [
      'Built trusted relationships with PM and engineering leads; cited by stakeholders as a reliable design partner.',
      'Proactively identified and resolved handoff gaps before build, reducing eng-design rework by ~30%.'
    ]}],
    [{ headline: 'Expand strategic and leadership contribution', bullets: [
      'Begin shaping design direction upstream and mentoring junior designers on craft.'
    ]}]
  );

  // Kirsten Gale — Senior PD, Cam's team. Strong facilitator, developing in influence.
  seed('p_kgale_001',
    [I,C,C,C,I,C,I,I,I,I,I,I,I,C,C,I,I,I,I,I,I,I,C,I], // DS ×24
    [I,I,C,I,C],                                           // PM ×5
    [I,I,I,I,I,C,I,I,C,C],                                // Co ×10
    [C,I,C,C,I,C,C,I,I],                                  // In ×9
    { technical:4, quality:4, accountability:4, we_lead:4, we_deliver:4, we_learn:4, we_care:3 },
    [{ headline: 'Led the most impactful discovery workshops of the year', bullets: [
      'Ran two cross-functional design sprints that surfaced key opportunities and got exec alignment.',
      'Peers consistently cited Kirsten as the go-to facilitator for ambiguous problems.'
    ]},{ headline: 'Owned end-to-end experience mapping for onboarding', bullets: [
      'Produced a service blueprint now used as the source of truth for three teams.'
    ]}],
    [{ headline: 'Deepen team care and relationship building', bullets: [
      'Invest in 1:1 peer relationships; currently seen as capable but sometimes distant in team settings.'
    ]}]
  );

  // Barbara Jura — Senior PD, Marina's team. Detail-oriented, strong delivery.
  seed('p_bjura_001',
    [I,C,C,C,C,C,I,C,C,I,I,I,I,C,C,I,E,I,I,C,I,I,I,C], // DS ×24
    [I,I,I,I,C],                                           // PM ×5
    [I,I,I,I,I,I,I,I,C,C],                                // Co ×10
    [C,I,C,C,I,C,L,I,I],                                  // In ×9
    { technical:4, quality:4, accountability:3, we_lead:3, we_deliver:4, we_learn:3, we_care:4 },
    [{ headline: 'Raised design quality bar on the Reservations surface', bullets: [
      'Shipped three major features with near-zero design QA issues.',
      'Figma files cited as the most organized and well-structured on the team.'
    ]},{ headline: 'Strong engineering partnership', bullets: [
      'Consistently praised by engineers for thorough specs and responsiveness during build.'
    ]}],
    [{ headline: 'Increase accountability for end-to-end outcomes', bullets: [
      'Push beyond delivery craft into proactively flagging risks and owning outcomes, not just outputs.'
    ]}]
  );

  // Shannon Ling — Senior PD, Marina's team. Well-rounded, exceptional collaborator.
  seed('p_sling_001',
    [I,C,C,C,I,C,I,I,I,I,I,I,I,C,C,I,I,I,C,I,I,I,I,I], // DS ×24
    [I,I,C,I,I],                                           // PM ×5
    [I,I,I,I,I,I,I,I,C,I],                                // Co ×10
    [C,I,I,C,I,C,C,I,I],                                  // In ×9
    { technical:4, quality:4, accountability:4, we_lead:4, we_deliver:4, we_learn:3, we_care:5 },
    [{ headline: 'Most consistent performer on Marina\'s team', bullets: [
      'Delivered across every sprint without exception — zero missed deadlines in 2025.',
      'Trusted by PMs to own complex work independently from kickoff through delivery.'
    ]},{ headline: 'Outstanding teammate and culture contributor', bullets: [
      'Consistently cited in peer feedback as positive, collaborative, and lifting the team.',
      'Led informal design critique rotation and kept the team aligned during a high-pressure stretch.'
    ]}],
    [{ headline: 'Push into expert territory', bullets: [
      'Currently meeting expectations broadly — identify one discipline to go deep on and exceed expectations.'
    ]}]
  );

  // Martin Pech — Senior PD, Mario's team. Expert visual craft, developing in influence.
  seed('p_martinpech_001',
    [I,C,C,C,C,C,I,C,C,I,I,I,I,C,C,I,E,I,I,I,I,I,I,I], // DS ×24
    [I,I,I,I,C],                                           // PM ×5
    [C,I,I,I,I,C,I,I,C,C],                                // Co ×10
    [C,C,C,C,I,C,L,C,I],                                  // In ×9
    { technical:4, quality:4, accountability:3, we_lead:3, we_deliver:4, we_learn:4, we_care:3 },
    [{ headline: 'Expert-level visual execution on the POS redesign', bullets: [
      'Produced the most polished high-fidelity work on the team — referenced as a quality benchmark.',
      'Resolved a complex interaction pattern in Figma that three other designers had struggled with.'
    ]},{ headline: 'Strong knowledge sharing', bullets: [
      'Led two internal craft sessions on Figma prototyping; well-received by the team.'
    ]}],
    [{ headline: 'Build strategic voice and cross-team influence', bullets: [
      'Begin contributing to design direction, not just execution. Push design rationale into reviews more frequently and confidently.'
    ]}]
  );

  // Anna Karlińska — Senior PD, Mario's team. Strong systems thinker, approaching principal.
  seed('p_akarlinska_001',
    [I,C,C,I,I,C,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,C,I], // DS ×24
    [I,I,I,I,I],                                           // PM ×5
    [I,I,I,I,I,I,I,I,I,C],                                // Co ×10
    [I,I,C,I,I,C,C,I,I],                                  // In ×9
    { technical:4, quality:4, accountability:4, we_lead:4, we_deliver:4, we_learn:5, we_care:4 },
    [{ headline: 'Delivered the most strategically ambitious work on Mario\'s team', bullets: [
      'Led end-to-end experience mapping for the loyalty surface — scope and quality rated as principal-level by peers.',
      'Connected individual feature work to platform-level patterns in a way that influenced roadmap prioritization.'
    ]},{ headline: 'Exceptional growth mindset', bullets: [
      'Completed two external design courses and brought learnings back to the team in formal sessions.',
      'Highest self-directed learning activity on the team.'
    ]}],
    [{ headline: 'Stretch into formal mentorship and org-level visibility', bullets: [
      'Begin mentoring a PD on the team. Your strategic thinking is not yet visible outside Mario\'s squad — raise your voice in cross-team forums.'
    ]}]
  );

  // ══════════════════════════════════════════════════════════════════════════════
  //  UX RESEARCHER
  // ══════════════════════════════════════════════════════════════════════════════

  // Brie James — UX Researcher, Adam's team. Expert researcher, developing visual craft.
  // Note: UX Researcher role has N (no expectation) for several visual/craft skills —
  // assessments are still set for context but will show — in the team heatmap.
  seed('p_briejames_001',
    [I,I,I,I,I,I,I,I,I,I,I,C,I,L,C,L,C,C,C,L,C,C,L,I], // DS ×24
    [I,C,I,C,C],                                           // PM ×5
    [I,I,I,I,I,I,I,I,C,C],                                // Co ×10
    [C,I,I,C,I,C,L,I,I],                                  // In ×9
    { technical:4, quality:4, accountability:4, we_lead:3, we_deliver:4, we_learn:4, we_care:4 },
    [{ headline: 'Delivered highest-impact research of the year', bullets: [
      'Ran 6 moderated studies that directly shaped the Merchant Dashboard roadmap.',
      'Synthesis output cited by PM leadership as the clearest research-to-decision documentation on the team.'
    ]},{ headline: 'Elevated the team\'s research quality and practices', bullets: [
      'Introduced structured synthesis templates now used across two squads.',
      'Mentored two designers on research methodology; both ran solo interviews for the first time.'
    ]}],
    [{ headline: 'Expand strategic influence and design partnership', bullets: [
      'Push research findings further upstream into product strategy conversations. Partner with design earlier to shape concepts, not just validate them.'
    ]}]
  );

  // ══════════════════════════════════════════════════════════════════════════════
  //  PRINCIPALS
  // ══════════════════════════════════════════════════════════════════════════════

  // Paulina de Aragon — Principal PD, Nicole's direct.
  seed('p_paulina_001',
    [E,I,I,I,I,I,E,I,I,E,I,I,E,I,I,E,E,E,E,E,E,E,I,E], // DS ×24
    [E,I,I,I,I],                                           // PM ×5
    [E,E,E,E,E,E,E,E,I,I],                                // Co ×10
    [I,E,I,I,E,I,I,E,E],                                  // In ×9
    { technical:5, quality:5, accountability:4, we_lead:4, we_deliver:5, we_learn:5, we_care:4 },
    [{ headline: 'Defined design direction for SpotOn\'s most complex surface', bullets: [
      'Owned the Handheld POS design system end-to-end — zero inconsistencies across 40+ screens.',
      'Created a design language framework adopted by three other product areas.'
    ]},{ headline: 'Raised the craft and strategic bar for the design org', bullets: [
      'Principal-level impact: her patterns and frameworks are referenced across squads.',
      'Directly influenced roadmap prioritization through design-led research on three occasions.'
    ]}],
    [{ headline: 'Increase organizational visibility', bullets: [
      'Begin presenting strategic recommendations at leadership level — current impact is under-visible outside the design org.'
    ]}]
  );

  // Julia Church — Principal Design Strategist, Nicole's direct.
  seed('p_julia_001',
    [E,I,I,E,I,E,E,E,E,E,I,I,E,E,E,E,I,I,I,E,I,I,I,E], // DS ×24
    [E,I,I,I,I],                                           // PM ×5
    [E,E,E,E,E,E,E,E,I,I],                                // Co ×10
    [E,E,I,E,E,I,I,E,E],                                  // In ×9
    { technical:5, quality:5, accountability:5, we_lead:5, we_deliver:4, we_learn:5, we_care:5 },
    [{ headline: 'Defined the multi-year design strategy for the Product organization', bullets: [
      'Delivered a 3-year vision document adopted at the exec level, now shaping hiring, prioritization, and product investment.',
      'Facilitated a two-day executive design strategy workshop — rated the highest-value session of the year by participants.'
    ]},{ headline: 'Exceptional cross-functional leadership', bullets: [
      'Partnered with Product and Engineering VPs to align on a shared design systems investment.',
      'Cited by Nicole as the most strategically impactful contributor in the org.'
    ]}],
    [{ headline: 'Delivery pace', bullets: [
      'Strategic work is exceptional but at times slow to materialize into artifacts. Set clearer output milestones to maintain exec confidence.'
    ]}]
  );

  // ══════════════════════════════════════════════════════════════════════════════
  //  MANAGERS
  // ══════════════════════════════════════════════════════════════════════════════

  // Cam Cheline — Product Design Manager, Nicole's direct.
  seed('p_cam_001',
    [I,I,C,I,I,I,E,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I,I], // DS ×24
    [E,I,E,I,I],                                           // PM ×5
    [E,E,E,E,E,E,E,E,I,I],                                // Co ×10
    [I,I,I,I,E,I,I,I,I],                                  // In ×9
    { technical:4, quality:4, accountability:4, we_lead:4, we_deliver:4, we_learn:4, we_care:4, engagement:4, team_performance:3, feedback_coaching:4 },
    [{ headline: 'Built a cohesive, high-performing team during a period of change', bullets: [
      'Onboarded two new designers and brought them to full productivity within 60 days.',
      'Team retained at 100% — direct reports cite growth clarity and support as key retention factors.'
    ]},{ headline: 'Strong design quality across KDS and POS surfaces', bullets: [
      'Team shipped 12 features with a combined design QA error rate under 2%.',
      'Direct review of all handoffs before development credited with raising the engineering partnership bar.'
    ]}],
    [{ headline: 'Deepen team performance management', bullets: [
      'Development gaps in mid-tenured reports are going unaddressed. Raise coaching frequency and specificity of feedback.'
    ]}]
  );

  // Mario Ayerbe — Product Design Manager, Nicole's direct.
  seed('p_mario_001',
    [I,I,C,I,I,I,E,I,I,I,I,I,I,I,I,I,E,I,I,I,I,I,I,I], // DS ×24
    [E,I,I,I,I],                                           // PM ×5
    [E,E,E,E,E,I,E,E,I,I],                                // Co ×10
    [I,I,I,I,E,I,I,I,I],                                  // In ×9
    { technical:4, quality:4, accountability:4, we_lead:4, we_deliver:5, we_learn:4, we_care:4, engagement:4, team_performance:4, feedback_coaching:4 },
    [{ headline: 'Highest delivery output of any design manager in 2025', bullets: [
      'Team shipped 18 features — most in the design org — with no quality regression.',
      'Introduced a sprint scoping process that eliminated last-minute scope changes.'
    ]},{ headline: 'Strong people manager with a track record of promotions', bullets: [
      'Two direct reports promoted this year — both cited Mario\'s coaching as the primary driver.',
      'Most consistent 1:1s and career development check-ins across the management team.'
    ]}],
    [{ headline: 'Build strategic influence at the org level', bullets: [
      'Mario is exceptional at execution but not yet shaping design direction org-wide. Contribute to cross-manager initiatives and design org strategy conversations.'
    ]}]
  );

  // Marina Beric — Director of Product Design, Nicole's direct.
  seed('p_marina_001',
    [E,E,I,E,I,E,E,E,I,E,E,I,E,E,I,E,E,E,E,E,I,E,I,E], // DS ×24
    [E,E,E,E,E],                                           // PM ×5
    [E,E,E,E,E,E,E,E,E,I],                                // Co ×10
    [E,E,E,E,E,E,I,E,E],                                  // In ×9
    { technical:5, quality:5, accountability:5, we_lead:5, we_deliver:5, we_learn:5, we_care:4, engagement:4, team_performance:5, feedback_coaching:5 },
    [{ headline: 'Led the most organizationally transformative design initiative of the year', bullets: [
      'Restructured the design team to align with new product pillars — executed with zero attrition and immediate velocity gains.',
      'Defined and socialized a new design maturity model now used across the product org.'
    ]},{ headline: 'Exceptional people leadership and retention', bullets: [
      '100% team retention in a year where competing offers were frequent.',
      'Two senior designers publicly credited Marina\'s coaching with their decision to stay and grow at SpotOn.',
      'Three direct reports described her feedback as the most impactful of their careers.'
    ]}],
    [{ headline: 'Deepen informal connection with the team', bullets: [
      'Marina leads with exceptional clarity and accountability. Small investments in informal relationship-building would increase trust further.'
    ]}]
  );

  localStorage.setItem('dch_placeholder_v', String(PLACEHOLDER_VERSION));
})();
