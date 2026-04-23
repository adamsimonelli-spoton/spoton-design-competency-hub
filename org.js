// ============================================================
//  org.js — SpotOn Design Org seeder
//  Runs after seed.js on every page load.
//  • Removes fictional demo profiles (Jordan / Marcus / Elena / Tyler)
//  • Adds/refreshes real org members
//  Bump ORG_VERSION to force-refresh names/roles/reporting on all browsers.
// ============================================================
(function () {
  var ORG_VERSION = 4;

  // ── Real org members ─────────────────────────────────────────────────────────
  // Reporting structure follows the design org chart (April 2026).
  // managerId references another entry's id in this list.
  // userRole:  'admin' | 'manager' | 'employee'
  // isManager: true if this person has direct reports in the app
  var orgProfiles = [
    // ── Tier 1 ──────────────────────────────────────────────────────────────────
    { id: 'p_nicole_001',     name: 'Nicole Chavez',     role: 'VP of Product Design',       userRole: 'admin',    isManager: true,  managerId: null,              created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },

    // ── Tier 2 — Nicole's directs ────────────────────────────────────────────────
    { id: 'p_cam_001',        name: 'Cam Cheline',       role: 'Product Design Manager',      userRole: 'manager',  isManager: true,  managerId: 'p_nicole_001',    created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },
    { id: 'p_marina_001',     name: 'Marina Beric',      role: 'Director of Product Design',  userRole: 'manager',  isManager: true,  managerId: 'p_nicole_001',    created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },
    { id: 'p_julia_001',      name: 'Julia Church',      role: 'Principal Design Strategist', userRole: 'employee', isManager: false, managerId: 'p_nicole_001',    created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },
    { id: 'p_paulina_001',    name: 'Paulina de Aragon', role: 'Principal Product Designer',  userRole: 'employee', isManager: false, managerId: 'p_nicole_001',    created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },
    { id: 'p_mario_001',      name: 'Mario Ayerbe',      role: 'Product Design Manager',      userRole: 'manager',  isManager: true,  managerId: 'p_nicole_001',    created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },
    { id: 'p_adam_001',       name: 'Adam Simonelli',    role: 'Product Design Manager',      userRole: 'admin',    isManager: true,  managerId: 'p_nicole_001',    created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },

    // ── Tier 3+ — Cam's reports ──────────────────────────────────────────────────
    { id: 'p_achelko_001',    name: 'Aleksandra Chełkowski', role: 'Product Designer',        userRole: 'employee', isManager: false, managerId: 'p_cam_001',       created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },
    { id: 'p_kgale_001',      name: 'Kirsten Gale',          role: 'Senior Product Designer', userRole: 'employee', isManager: false, managerId: 'p_cam_001',       created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },

    // ── Marina's reports ─────────────────────────────────────────────────────────
    { id: 'p_fnocedal_001',   name: 'Fernanda Nocedal',      role: 'Product Designer',        userRole: 'employee', isManager: false, managerId: 'p_marina_001',    created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },
    { id: 'p_bjura_001',      name: 'Barbara Jura',          role: 'Senior Product Designer', userRole: 'employee', isManager: false, managerId: 'p_marina_001',    created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },

    // ── Marina's additional reports (Mark + Shannon moved from Julia) ───────────
    { id: 'p_mbanzhoff_001',  name: 'Mark Banzhoff',         role: 'Product Designer',        userRole: 'employee', isManager: false, managerId: 'p_marina_001',    created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },
    { id: 'p_sling_001',      name: 'Shannon Ling',          role: 'Senior Product Designer', userRole: 'employee', isManager: false, managerId: 'p_marina_001',    created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },

    // ── Mario's reports ──────────────────────────────────────────────────────────
    { id: 'p_martinpech_001', name: 'Martin Pech',           role: 'Senior Product Designer', userRole: 'employee', isManager: false, managerId: 'p_mario_001',     created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },
    { id: 'p_jalvarez_001',   name: 'Jonas Alvarez',         role: 'Product Designer',        userRole: 'employee', isManager: false, managerId: 'p_mario_001',     created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },
    { id: 'p_akarlinska_001', name: 'Anna Karlińska',        role: 'Senior Product Designer', userRole: 'employee', isManager: false, managerId: 'p_mario_001',     created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },

    // ── Adam's reports ───────────────────────────────────────────────────────────
    { id: 'p_pfisher_001',    name: 'Paige Fisher',          role: 'Senior Product Designer', userRole: 'employee', isManager: false, managerId: 'p_adam_001',      created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },
    { id: 'p_briejames_001',  name: 'Brie James',            role: 'UX Researcher',           userRole: 'employee', isManager: false, managerId: 'p_adam_001',      created: '2026-01-01T09:00:00.000Z', photo: null, pin: null },
    { id: 'p_gvazquez_001',   name: 'Gaby Vazquez',          role: 'Product Designer',        userRole: 'employee', isManager: false, managerId: 'p_adam_001',      created: '2026-01-01T09:00:00.000Z', photo: null, pin: null }
  ];

  // ── Fictional demo profiles to remove ────────────────────────────────────────
  var fictionalIds = ['p_jordan_001', 'p_marcus_001', 'p_elena_001', 'p_tyler_001'];

  // ── Step 1: Remove fictional profiles + all their data keys ──────────────────
  var existing = JSON.parse(localStorage.getItem('dch_profiles') || '[]');
  var profilesChanged = false;
  existing = existing.filter(function (p) {
    if (fictionalIds.indexOf(p.id) !== -1) {
      Object.keys(localStorage)
        .filter(function (k) { return k.indexOf(p.id) !== -1; })
        .forEach(function (k) { localStorage.removeItem(k); });
      profilesChanged = true;
      return false;
    }
    return true;
  });

  // Tell seed.js never to re-add them
  var deletedProfiles = JSON.parse(localStorage.getItem('dch_deleted_profiles') || '[]');
  var deletedChanged = false;
  fictionalIds.forEach(function (id) {
    if (deletedProfiles.indexOf(id) === -1) {
      deletedProfiles.push(id);
      deletedChanged = true;
    }
  });
  if (deletedChanged) localStorage.setItem('dch_deleted_profiles', JSON.stringify(deletedProfiles));

  // ── Step 2: Add / refresh org profiles ───────────────────────────────────────
  var storedOrgVersion = parseInt(localStorage.getItem('dch_org_version') || '0', 10);
  var existingIds = existing.map(function (p) { return p.id; });

  // ── Step 2a: Remove duplicate name shadows ────────────────────────────────────
  // If a profile exists with the same name as an org member but a DIFFERENT id,
  // it's a manually-created duplicate — remove it to avoid confusion.
  var orgIds = orgProfiles.map(function (p) { return p.id; });
  var orgNames = orgProfiles.map(function (p) { return p.name.toLowerCase(); });
  existing = existing.filter(function (p) {
    if (orgIds.indexOf(p.id) !== -1) return true; // is an org profile, keep
    var lc = p.name ? p.name.toLowerCase() : '';
    if (orgNames.indexOf(lc) !== -1) {
      // Shadow duplicate — delete its data keys too
      Object.keys(localStorage)
        .filter(function (k) { return k.indexOf(p.id) !== -1; })
        .forEach(function (k) { localStorage.removeItem(k); });
      profilesChanged = true;
      return false;
    }
    return true;
  });
  existingIds = existing.map(function (p) { return p.id; });

  orgProfiles.forEach(function (p) {
    var idx = existingIds.indexOf(p.id);
    var isUserDeleted = deletedProfiles.indexOf(p.id) !== -1;

    if (idx === -1 && !isUserDeleted) {
      // New org member — add them
      existing.push(p);
      profilesChanged = true;
    } else if (idx !== -1 && storedOrgVersion < ORG_VERSION) {
      // ORG_VERSION bumped — refresh name/role/reporting but keep personal data
      existing[idx] = {
        id:        p.id,
        name:      p.name,
        role:      p.role,
        userRole:  p.userRole,
        isManager: p.isManager,
        managerId: p.managerId,
        created:   existing[idx].created || p.created,
        // Preserve anything the user/admin set manually
        photo:     existing[idx].photo   !== undefined ? existing[idx].photo   : null,
        pin:       existing[idx].pin     !== undefined ? existing[idx].pin     : null
      };
      profilesChanged = true;
    }
  });

  if (profilesChanged) localStorage.setItem('dch_profiles', JSON.stringify(existing));
  if (storedOrgVersion < ORG_VERSION) localStorage.setItem('dch_org_version', String(ORG_VERSION));
})();
