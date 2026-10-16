/* Night-time lights dashboard — extension pages: Industry (use case 6), Tourism (use case 7), AI assistant.
 * Loaded BEFORE app.js; app.js merges NTL_EXT.pages / NTL_EXT.render / NTL_EXT.files and calls NTL_EXT.init().
 * Same file in the French and English sites: texts are chosen from <html lang>. */
"use strict";
(function () {
  const LANG = document.documentElement.lang === "en" ? "en" : "fr";
  // local copy: the page templates below are built before app.js defines its helpers
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const TX = {
    fr: {
      tabs: { industry: "Industrie", tourism: "Tourisme", assistant: "Assistant IA" },
      conf: "confiance", source: "Source", na: "Donnée non disponible pour ce pays.",
      // industry
      i_title: "Où l'industrie éclaire la nuit",
      i_lede: "Les lumières seules ne distinguent pas une usine d'un centre commercial. Chaque pixel VIIRS (≈ 0,2 km²) est évalué sur six signaux satellitaires indépendants ; les pixels qui en cumulent au moins trois forment des grappes, classées par type et par niveau de confiance.",
      i_k1: "Grappes industrielles", i_k2: "Part de la lumière nationale", i_k3: "Croissance de la lumière industrielle",
      i_k4: "Validation (précision / rappel)", i_k4s: "face à la liste de référence", i_novalid: "pas de liste de référence",
      i_map: "Carte des grappes industrielles", i_map_help: "Couleur = type ; taille du point = lumière émise. Cliquez une grappe pour voir ses six signaux.",
      i_series: "Lumière industrielle par type", i_series_help: "Somme des radiances des grappes, par type et par année.",
      i_va: "Lumière industrielle et valeur ajoutée industrielle", i_va_help: "Les deux séries sont ramenées à 100 la première année commune : on compare des rythmes. Une corrélation élevée des taux de croissance valide la lumière comme indicateur avancé.",
      i_sig: "Les six signaux des principales grappes", i_sig_help: "Part des pixels de la grappe qui remplissent chaque critère (0 à 100 %).",
      i_reg: "Industrie par région", i_val: "Validation", i_unmatched: "Sites de référence non détectés",
      col_region: "Région", col_n: "Grappes", col_area: "Surface (km²)", col_share: "Part de la lumière régionale", col_type: "Type", col_cluster: "Grappe", col_where: "Localisation", col_signals: "Signaux", col_valid: "Validée",
      yes: "oui", no: "non", corr: "corrélation des croissances", idx: "Indice (base 100)", sumrad: "Somme des radiances",
      lightind: "Lumière industrielle", va: "Valeur ajoutée industrielle (Banque mondiale)",
      // tourism
      t_title: "La saison vue du ciel",
      t_lede: "Pour chaque unité, le surcroît estival compare la lumière des mois de pointe à celle des mois d'intersaison de la même année, net de celui des unités comparables de même latitude (nuits courtes, végétation). Ce qui reste est l'afflux touristique.",
      t_k1: "Zones touristiques", t_k2: "Surcroît estival net maximal", t_k3: "Indice de saison, dernière année", t_k4: "Corrélation avec les nuitées",
      t_prof: "Profil saisonnier moyen", t_prof_help: "Lumière de chaque mois divisée par la moyenne annuelle (années 2020–2021 exclues). Les zones touristiques s'envolent en été.",
      t_tour: "Zones touristiques", t_other: "Autres unités",
      t_idx: "Indice de saison touristique", t_idx_help: "Base 100 = année de référence. Les nuitées sont ramenées à la même base pour comparer les rythmes. ☾ = Ramadan chevauchant la saison (≥ 10 jours).",
      t_nights: "Nuitées (même base)", t_rank: "Surcroît estival net par unité", t_rank_help: "Médiane des étés (hors 2020–2021). Le trait pointillé marque le seuil de classement.",
      t_map: "Carte du surcroît estival net", t_threshold: "seuil", t_month: "Mois", t_rel: "Lumière relative (moyenne annuelle = 1)",
      col_net: "Surcroît net", col_p: "p", col_summers: "Étés", col_class: "Classe",
      // assistant
      a_title: "Assistant IA sur les résultats",
      a_lede: "Posez vos questions en langage naturel. L'assistant répond uniquement à partir des faits publiés sur ce tableau de bord et cite ses sources [F12] — cliquez une citation pour ouvrir la page correspondante.",
      a_settings: "Modèle de langage", a_provider: "Fournisseur", a_model: "Modèle", a_key: "Clé d'API", a_host: "Serveur Ollama",
      a_remember: "Mémoriser la clé sur cet appareil", a_test: "Tester la connexion", a_ok: "Connexion réussie", a_models: "modèles disponibles",
      a_local: "Sans modèle (faits bruts)", a_privacy: "La clé reste dans votre navigateur (session, ou appareil si vous cochez la case) et n'est envoyée qu'au fournisseur choisi. Les faits envoyés sont ceux affichés publiquement sur ce site.",
      a_ollama: "Ollama doit autoriser cette origine : lancez <code>OLLAMA_ORIGINS=\"{o}\" ollama serve</code>.",
      a_groq: "Clé gratuite sur <a href=\"https://console.groq.com/keys\" target=\"_blank\" rel=\"noopener\">console.groq.com</a>.",
      a_gemini: "Clé gratuite sur <a href=\"https://aistudio.google.com/apikey\" target=\"_blank\" rel=\"noopener\">aistudio.google.com</a>.",
      a_ask: "Votre question sur les résultats…", a_send: "Envoyer", a_clear: "Nouvelle conversation", a_thinking: "Analyse des faits publiés…",
      a_you: "Vous", a_bot: "Assistant", a_cited: "Faits cités", a_facts: "faits disponibles", a_err: "Le fournisseur {p} a renvoyé une erreur : {e}. Réponse construite à partir des faits.",
      a_hello: "Bonjour ! Je connais les {n} faits publiés pour {c} ({p}). Choisissez une question ci-dessous ou posez la vôtre.",
      a_nokey: "Aucune clé n'est renseignée : je réponds avec les faits les plus pertinents, sans reformulation. Ajoutez une clé Groq ou Gemini (ou un serveur Ollama) pour des réponses rédigées.",
      a_fab: "Demander à l'IA",
      a_local_head: "Voici les résultats les plus pertinents (mode sans modèle de langage) :", a_local_none: "Je ne trouve aucun résultat publié correspondant à cette question.",
    },
    en: {
      tabs: { industry: "Industry", tourism: "Tourism", assistant: "AI assistant" },
      conf: "confidence", source: "Source", na: "Not available for this country.",
      i_title: "Where industry lights up the night",
      i_lede: "Light alone cannot tell a factory from a shopping centre. Each VIIRS pixel (≈ 0.2 km²) is scored on six independent satellite signals; pixels meeting at least three form clusters, classified by type and confidence level.",
      i_k1: "Industrial clusters", i_k2: "Share of national light", i_k3: "Growth of industrial light",
      i_k4: "Validation (precision / recall)", i_k4s: "against the reference list", i_novalid: "no reference list",
      i_map: "Map of industrial clusters", i_map_help: "Colour = type; dot size = light emitted. Click a cluster to see its six signals.",
      i_series: "Industrial light by type", i_series_help: "Sum of radiance of the clusters, by type and year.",
      i_va: "Industrial light and industry value added", i_va_help: "Both series are set to 100 in the first common year: we compare paces. A high correlation of growth rates validates light as a leading indicator.",
      i_sig: "The six signals of the main clusters", i_sig_help: "Share of the cluster's pixels meeting each criterion (0 to 100%).",
      i_reg: "Industry by region", i_val: "Validation", i_unmatched: "Reference sites not detected",
      col_region: "Region", col_n: "Clusters", col_area: "Area (km²)", col_share: "Share of regional light", col_type: "Type", col_cluster: "Cluster", col_where: "Location", col_signals: "Signals", col_valid: "Validated",
      yes: "yes", no: "no", corr: "growth correlation", idx: "Index (base 100)", sumrad: "Sum of radiance",
      lightind: "Industrial light", va: "Industry value added (World Bank)",
      t_title: "The season seen from the sky",
      t_lede: "For each unit, the summer excess compares the light of the peak months with the shoulder months of the same year, net of that of comparable units at the same latitude (short nights, vegetation). What remains is the tourist inflow.",
      t_k1: "Tourist zones", t_k2: "Largest net summer excess", t_k3: "Season index, latest year", t_k4: "Correlation with hotel nights",
      t_prof: "Average seasonal profile", t_prof_help: "Light of each month divided by the annual mean (2020–2021 excluded). Tourist zones soar in summer.",
      t_tour: "Tourist zones", t_other: "Other units",
      t_idx: "Tourist season index", t_idx_help: "Base 100 = reference year. Hotel nights are rebased the same way to compare paces. ☾ = Ramadan overlapping the season (≥ 10 days).",
      t_nights: "Hotel nights (same base)", t_rank: "Net summer excess by unit", t_rank_help: "Median over summers (2020–2021 excluded). The dotted line marks the classification threshold.",
      t_map: "Map of the net summer excess", t_threshold: "threshold", t_month: "Month", t_rel: "Relative light (annual mean = 1)",
      col_net: "Net excess", col_p: "p", col_summers: "Summers", col_class: "Class",
      a_title: "AI assistant on the results",
      a_lede: "Ask your questions in plain language. The assistant answers only from the facts published on this dashboard and cites its sources [F12] — click a citation to open the corresponding page.",
      a_settings: "Language model", a_provider: "Provider", a_model: "Model", a_key: "API key", a_host: "Ollama server",
      a_remember: "Remember the key on this device", a_test: "Test the connection", a_ok: "Connected", a_models: "models available",
      a_local: "No model (raw facts)", a_privacy: "The key stays in your browser (session, or device if you tick the box) and is sent only to the chosen provider. The facts sent are those publicly shown on this site.",
      a_ollama: "Ollama must allow this origin: run <code>OLLAMA_ORIGINS=\"{o}\" ollama serve</code>.",
      a_groq: "Free key at <a href=\"https://console.groq.com/keys\" target=\"_blank\" rel=\"noopener\">console.groq.com</a>.",
      a_gemini: "Free key at <a href=\"https://aistudio.google.com/apikey\" target=\"_blank\" rel=\"noopener\">aistudio.google.com</a>.",
      a_ask: "Your question about the results…", a_send: "Send", a_clear: "New conversation", a_thinking: "Analysing the published facts…",
      a_you: "You", a_bot: "Assistant", a_cited: "Facts cited", a_facts: "facts available", a_err: "Provider {p} returned an error: {e}. Answer built from the facts.",
      a_hello: "Hello! I know the {n} facts published for {c} ({p}). Pick a question below or ask your own.",
      a_nokey: "No key provided: I answer with the most relevant facts, without rewording. Add a Groq or Gemini key (or an Ollama server) for written answers.",
      a_fab: "Ask the AI",
      a_local_head: "Here are the most relevant results (mode without a language model):", a_local_none: "I could not find any published result matching this question.",
    },
  }[LANG];
  const PROV = {
    groq: { label: "Groq", models: ["openai/gpt-oss-120b", "llama-3.3-70b-versatile", "llama-3.1-8b-instant"] },
    gemini: { label: "Google Gemini", models: ["gemini-2.5-flash", "gemini-2.5-flash-lite", "gemini-2.0-flash"] },
    ollama: { label: "Ollama (local)", models: ["qwen2.5:7b", "llama3.1:8b", "mistral:7b"] },
    local: { label: TX.a_local, models: ["facts"] },
  };

  const dd = (k) => (S.d || {})[k];
  const loc = LANG === "fr" ? "fr-FR" : "en-US";
  const fmtPct = (v, d = 0, sign = true) => (isNum(v) ? (sign && v > 0 ? "+" : "") + new Intl.NumberFormat(loc, { maximumFractionDigits: d, minimumFractionDigits: d }).format(100 * v) + (LANG === "fr" ? " %" : "%") : "–");
  const typeColor = (t) => css({ heavy: "--t1", logistics: "--t2", hydro: "--t3", isolated: "--t4" }[t] || "--muted");
  const maps = {};
  function freshMap(id) { if (maps[id]) { try { maps[id].remove(); } catch (e) { /* already gone */ } } maps[id] = newMap(id); return maps[id]; }
  const kpi = (label, value, sub) => `<div class="kpi"><div class="label">${esc(label)}</div><div class="value">${value}</div><div class="sub">${esc(sub || "")}</div></div>`;
  const card = (id, title, help, cls = "chart", src = "") => `<article class="card"><h2>${esc(title)}</h2>${help ? `<p class="help">${esc(help)}</p>` : ""}<div class="${cls}" id="${id}"></div>${src ? `<p class="source">${esc(TX.source)} : ${esc(src)}</p>` : ""}</article>`;

  /* ------------------------------------------------------------------ page skeletons */
  const HTML = {
    industry: `
      <div class="hero hero-ind"><div><div class="hero-eyebrow">${LANG === "fr" ? "CAS D'USAGE 6 · INDUSTRIE" : "USE CASE 6 · INDUSTRY"}</div><h2>${esc(TX.i_title)}</h2><p>${esc(TX.i_lede)}</p></div><div class="chips" id="i-chips"></div></div>
      <div class="kpis" id="i-kpis"></div>
      <article class="card map-card"><h2>${esc(TX.i_map)}</h2><p class="help">${esc(TX.i_map_help)}</p>
        <div class="map-wrap small"><div id="i-map" class="map"></div><div class="map-legend" id="i-legend"></div></div>
        <p class="source">${esc(TX.source)} : VIIRS VNL V2, GHSL BUILT-S, Sentinel-5P NO₂/SO₂, MODIS MOD11A2 ; OpenStreetMap / CARTO.</p></article>
      <div class="grid two">${card("i-series", TX.i_series, TX.i_series_help, "chart", "VIIRS VNL V2")}${card("i-va", TX.i_va, TX.i_va_help, "chart", LANG === "fr" ? "VIIRS ; Banque mondiale NV.IND.TOTL.KD" : "VIIRS; World Bank NV.IND.TOTL.KD")}</div>
      <div class="grid two"><article class="card"><h2>${esc(TX.i_sig)}</h2><p class="help">${esc(TX.i_sig_help)}</p><div class="chart tall" id="i-sig"></div></article>
        <article class="card"><h2>${esc(TX.i_val)}</h2><div id="i-val"></div><h3>${esc(TX.i_reg)}</h3><div class="table-wrap" id="i-reg"></div></article></div>`,
    tourism: `
      <div class="hero hero-tou"><div><div class="hero-eyebrow">${LANG === "fr" ? "CAS D'USAGE 7 · TOURISME" : "USE CASE 7 · TOURISM"}</div><h2>${esc(TX.t_title)}</h2><p>${esc(TX.t_lede)}</p></div></div>
      <div class="kpis" id="t-kpis"></div>
      <div class="grid two">${card("t-prof", TX.t_prof, TX.t_prof_help, "chart", LANG === "fr" ? "VIIRS DNB mensuel" : "VIIRS DNB monthly")}${card("t-idx", TX.t_idx, TX.t_idx_help, "chart", LANG === "fr" ? "VIIRS DNB ; statistiques de nuitées" : "VIIRS DNB; hotel-night statistics")}</div>
      <div class="grid two">${card("t-rank", TX.t_rank, TX.t_rank_help, "chart tall", LANG === "fr" ? "VIIRS DNB mensuel" : "VIIRS DNB monthly")}
        <article class="card map-card"><h2>${esc(TX.t_map)}</h2><div class="map-wrap small"><div id="t-map" class="map"></div><div class="map-legend" id="t-legend"></div></div></article></div>
      <article class="card flush"><div class="table-wrap" id="t-table"></div></article>`,
    assistant: `
      <div class="hero hero-ai"><div><div class="hero-eyebrow">${LANG === "fr" ? "INTELLIGENCE ARTIFICIELLE · GROQ · GEMINI · OLLAMA" : "ARTIFICIAL INTELLIGENCE · GROQ · GEMINI · OLLAMA"}</div><h2>${esc(TX.a_title)}</h2><p>${esc(TX.a_lede)}</p></div><div class="ai-orb" aria-hidden="true"></div></div>
      <div class="ai-grid">
        <aside class="card ai-settings">
          <h2>${esc(TX.a_settings)}</h2>
          <label class="fld">${esc(TX.a_provider)}<select id="ai-prov">${Object.entries(PROV).map(([k, v]) => `<option value="${k}">${esc(v.label)}</option>`).join("")}</select></label>
          <label class="fld" data-show="groq gemini ollama">${esc(TX.a_model)}<input id="ai-model" list="ai-models" autocomplete="off"><datalist id="ai-models"></datalist></label>
          <label class="fld" data-show="groq gemini">${esc(TX.a_key)}<input id="ai-key" type="password" autocomplete="off" spellcheck="false" placeholder="••••••••"></label>
          <label class="fld" data-show="ollama">${esc(TX.a_host)}<input id="ai-host" value="http://localhost:11434"></label>
          <label class="chk" data-show="groq gemini"><input id="ai-remember" type="checkbox"> ${esc(TX.a_remember)}</label>
          <p class="help small" id="ai-hint"></p>
          <button type="button" class="btn ghost" id="ai-test">${esc(TX.a_test)}</button> <span id="ai-status" class="help small"></span>
          <p class="help small">🔒 ${esc(TX.a_privacy)}</p>
          <p class="help small" id="ai-nfacts"></p>
        </aside>
        <section class="card ai-chat">
          <div class="ai-log" id="ai-log" aria-live="polite"></div>
          <div class="ai-sugg" id="ai-sugg"></div>
          <form class="ai-form" id="ai-form"><textarea id="ai-q" rows="2" placeholder="${esc(TX.a_ask)}"></textarea>
            <div class="ai-actions"><button type="button" class="btn ghost" id="ai-clear">${esc(TX.a_clear)}</button><button type="submit" class="btn" id="ai-send">${esc(TX.a_send)} ➤</button></div></form>
        </section>
      </div>`,
  };

  /* ------------------------------------------------------------------ industry */
  function renderIndustry() {
    const I = dd("industry"), el = $("#page-industry");
    if (!I || !I.available) { el.innerHTML = HTML.industry; $("#i-kpis").innerHTML = `<p class="help">${esc(TX.na)}</p>`; return; }
    const c = C(), v = I.validation || {}, yrs = I.years, y1 = yrs[yrs.length - 1];
    $("#i-chips").innerHTML = Object.values(I.signal_labels || {}).map((s) => `<span class="chip">${esc(s)}</span>`).join("");
    $("#i-kpis").innerHTML = [
      kpi(TX.i_k1, F.num(I.n), Object.entries(I.counts).map(([t, n]) => `${(I.type_labels || {})[t] || t} ${n}`).join(" · ")),
      kpi(TX.i_k2, fmtPct(I.share_last, 1, false), String(y1)),
      kpi(TX.i_k3, fmtPct((I.trend || {}).growth, 1), `${yrs[0]}–${y1}`),
      kpi(TX.i_k4, v.available ? `${fmtPct(v.precision, 0, false)} / ${fmtPct(v.recall, 0, false)}` : "–", v.available ? `${TX.i_k4s} (${v.source || ""})` : TX.i_novalid),
    ].join("");
    // map
    const types = Object.keys(I.type_labels || {});
    $("#i-legend").innerHTML = types.map((t) => `<div><span class="sw" style="background:${typeColor(t)}"></span>${esc(I.type_labels[t])}</div>`).join("");
    if (window.L) {
      const mp = freshMap("i-map");
      const R = (dd("meta").rasters || {}).ntl || {}; const last = Object.keys(R).sort().pop();
      if (last) { const ov = overlay(R[last]); if (ov) { ov.setOpacity(0.55); ov.addTo(mp); } }
      if (dd("adm1")) outline(dd("adm1")).addTo(mp);
      const gj = dd("iclusters");
      const mx = Math.max(...(I.top || []).map((r) => r[`sol_${y1}`] || 0), 1);
      if (gj) L.geoJSON(gj, {
        style: (f) => ({ color: typeColor(f.properties.type), weight: 2, fillColor: typeColor(f.properties.type), fillOpacity: 0.55 }),
        onEachFeature: (f, lyr) => {
          const p = f.properties;
          const bars = Object.entries(I.signal_labels || {}).map(([k, lab]) => `<div class="sigrow"><span>${esc(lab)}</span><b style="width:${Math.round(100 * (p[k] || 0))}%;background:${typeColor(p.type)}"></b><em>${fmtPct(p[k] || 0, 0, false)}</em></div>`).join("");
          lyr.bindPopup(`<strong>${esc(p.cluster_id)} · ${esc(p.type_label)}</strong><div class="why">${esc(p.adm2_name || p.adm1_name || "")} — ${F.num(p.area_km2, 2)} km² — <span class="badge ${esc(p.confidence)}">${TX.conf} ${esc(p.confidence)}</span></div>${bars}`, { maxWidth: 320 });
          const ctr = lyr.getBounds().getCenter();
          L.circleMarker(ctr, { radius: 5 + 9 * Math.sqrt((p.sol_last || 0) / mx), color: "#fff", weight: 2, fillColor: typeColor(p.type), fillOpacity: 0.95 })
            .bindTooltip(`${p.cluster_id} · ${p.type_label}`).on("click", () => lyr.openPopup(ctr)).addTo(mp);
        },
      }).addTo(mp);
    }
    // series by type (stacked area, fixed type order)
    const bt = I.by_type || [];
    plot("i-series", types.filter((t) => bt.some((r) => r.type === t)).map((t) => {
      const r = bt.filter((x) => x.type === t);
      return { x: r.map((x) => x.year), y: r.map((x) => x.sol), name: I.type_labels[t], type: "scatter", mode: "lines", stackgroup: "one", line: { color: typeColor(t), width: 1.5 }, hovertemplate: `%{x} · %{y:,.0f}<extra>${esc(I.type_labels[t])}</extra>` };
    }), { yaxis: { title: { text: TX.sumrad } } });
    // industrial light vs value added, both indexed (one axis)
    const vt = I.industry_va_table || [];
    if (vt.length) {
      const b0 = vt[0];
      plot("i-va", [
        { x: vt.map((r) => r.year), y: vt.map((r) => (100 * r.sol) / b0.sol), name: TX.lightind, mode: "lines+markers", line: { color: c.s[0], width: 2 }, marker: { size: 8 } },
        { x: vt.map((r) => r.year), y: vt.map((r) => (100 * r.industry_va_const_usd) / b0.industry_va_const_usd), name: TX.va, mode: "lines+markers", line: { color: c.s[1], width: 2, dash: "dot" }, marker: { size: 8 } },
      ], { yaxis: { title: { text: TX.idx } }, annotations: isNum((I.industry_va || {}).corr_growth) ? [{ xref: "paper", yref: "paper", x: 0.01, y: 0.98, showarrow: false, xanchor: "left", text: `${TX.corr} : ${F.num2(I.industry_va.corr_growth)}`, font: { color: c.ink2 } }] : [] });
    } else plot("i-va", []);
    // signal heatmap of the top clusters
    const top = (I.top || []).slice(0, 12), keys = Object.keys(I.signal_labels || {});
    const gjp = Object.fromEntries(((dd("iclusters") || {}).features || []).map((f) => [f.properties.cluster_id, f.properties]));
    plot("i-sig", top.length ? [{
      type: "heatmap", x: keys.map((k) => I.signal_labels[k]), y: top.map((r) => `${r.cluster_id} · ${r.adm2_name || r.adm1_name || ""}`),
      z: top.map((r) => keys.map((k) => (gjp[r.cluster_id] || {})[k] ?? null)), zmin: 0, zmax: 1, xgap: 2, ygap: 2,
      colorscale: [[0, css("--surface-2")], [1, c.s[0]]], hovertemplate: "%{y}<br>%{x} : %{z:.0%}<extra></extra>", colorbar: { tickformat: ".0%", thickness: 10 },
    }] : [], { margin: { l: 150, r: 10, t: 10, b: 90 }, xaxis: { tickangle: -25 }, yaxis: { autorange: "reversed" } });
    // validation + regions
    $("#i-val").innerHTML = v.available ? `<div class="valgrid"><div><b>${fmtPct(v.precision, 0, false)}</b><span>precision</span></div><div><b>${fmtPct(v.recall, 0, false)}</b><span>recall</span></div><div><b>${F.num2(v.f1)}</b><span>F1</span></div><div><b>${v.n_reference}</b><span>ref.</span></div></div>` +
      `<p class="help">${esc(v.source || "")} — ${LANG === "fr" ? "rayon de correspondance" : "matching radius"} ${v.match_km} km.</p>` +
      ((v.unmatched_reference || []).length ? `<p class="help"><b>${esc(TX.i_unmatched)}</b> : ${(v.unmatched_reference || []).map((r) => esc(r.name || `${r.lon},${r.lat}`)).join(", ")}</p>` : "")
      : `<p class="help">${esc(TX.i_novalid)}</p>`;
    const u = ((I.units || {}).ADM1 || []);
    $("#i-reg").innerHTML = `<table class="data"><thead><tr><th>${TX.col_region}</th><th>${TX.col_n}</th><th>${TX.col_area}</th><th>${TX.col_share}</th></tr></thead><tbody>` +
      u.map((r) => `<tr><td>${esc(r.name)}</td><td>${r.n_clusters}</td><td>${F.num(r.area_km2, 1)}</td><td>${fmtPct(r.ind_share, 1, false)}</td></tr>`).join("") + "</tbody></table>";
  }

  /* ------------------------------------------------------------------ tourism */
  function renderTourism() {
    const T = dd("tourism");
    if (!T || !T.available) { $("#t-kpis").innerHTML = `<p class="help">${esc(TX.na)}</p>`; return; }
    const c = C(), u = T.units || [], tz = u.filter((r) => r.class === "tourist"), idx = T.index || [], v = T.validation || {};
    const last = idx[idx.length - 1] || {};
    $("#t-kpis").innerHTML = [
      kpi(TX.t_k1, `${T.n_tourist} / ${T.n_units}`, `${T.level} · ${LANG === "fr" ? "pointe" : "peak"} ${T.params.peak_months.map((m) => T.months[m - 1]).join("–")}`),
      kpi(TX.t_k2, tz.length ? fmtPct(tz[0].net_gain, 0) : "–", tz.length ? tz[0].name : ""),
      kpi(TX.t_k3, isNum(last.index) ? F.num(last.index) : "–", last.year ? `${last.year} (base ${last.base_year} = 100)` : ""),
      kpi(TX.t_k4, v.available ? F.num2(v.corr) : "–", v.available ? `${v.variable}, ${v.n} ${LANG === "fr" ? "années" : "years"}` : ""),
    ].join("");
    const pr = T.profile || [];
    plot("t-prof", pr.length ? [
      { x: pr.map((r) => T.months[r.month - 1]), y: pr.map((r) => r.other), name: TX.t_other, mode: "lines+markers", line: { color: c.flat, width: 2 }, marker: { size: 8 } },
      { x: pr.map((r) => T.months[r.month - 1]), y: pr.map((r) => r.tourist), name: TX.t_tour, mode: "lines+markers", line: { color: c.s[3], width: 2.5 }, marker: { size: 8 } },
    ] : [], { yaxis: { title: { text: TX.t_rel } } });
    const vt = v.table || [];
    const nb = vt.find((r) => r.year === (idx[0] || {}).base_year) || vt[0];
    const tr = [{ x: idx.map((r) => r.year), y: idx.map((r) => r.index), type: "bar", name: TX.t_idx, marker: { color: c.s[3], line: { width: 0 } },
      text: idx.map((r) => (r.ramadan_days >= 10 ? "☾" : "")), textposition: "outside", hovertemplate: "%{x} · %{y:.0f}<extra></extra>" }];
    if (vt.length && nb) tr.push({ x: vt.map((r) => r.year), y: vt.map((r) => (100 * r[v.variable]) / nb[v.variable]), name: TX.t_nights, mode: "lines+markers", line: { color: c.ink2, width: 2, dash: "dot" }, marker: { size: 8 } });
    plot("t-idx", tr, { yaxis: { title: { text: TX.idx } }, bargap: 0.25 });
    const rk = u.slice(0, 25).reverse();
    plot("t-rank", [{ type: "bar", orientation: "h", y: rk.map((r) => r.name), x: rk.map((r) => 100 * r.net_gain), marker: { color: rk.map((r) => (r.class === "tourist" ? c.s[3] : c.flat)) },
      hovertemplate: "%{y} · %{x:.0f} %<extra></extra>" }], { margin: { l: 130 }, xaxis: { title: { text: TX.col_net + " (%)" } },
      shapes: [{ type: "line", xref: "x", yref: "paper", x0: 100 * T.params.min_excess, x1: 100 * T.params.min_excess, y0: 0, y1: 1, line: { color: c.ink2, dash: "dot", width: 1.5 } }] });
    if (window.L) {
      const gj = dd(T.level === "ADM2" ? "adm2" : "adm1");
      const mp = freshMap("t-map");
      const by = Object.fromEntries(u.map((r) => [r.unit_id, r]));
      const ramp = SEQ_O;
      const col = (g) => (!isNum(g) ? css("--surface-2") : ramp[Math.max(0, Math.min(6, Math.floor((g + 0.05) / 0.08)))]);
      if (gj) L.geoJSON(gj, { style: (f) => { const r = by[f.properties.unit_id] || {}; return { color: r.class === "tourist" ? css("--ink") : "rgba(255,255,255,.7)", weight: r.class === "tourist" ? 2 : 0.7, fillColor: col(r.net_gain), fillOpacity: 0.85 }; },
        onEachFeature: (f, lyr) => { const r = by[f.properties.unit_id] || {}; lyr.bindTooltip(`<b>${esc(r.name || f.properties.name)}</b><br>${TX.col_net} : ${fmtPct(r.net_gain, 0)} · ${esc(r.class_label || "")}`); } }).addTo(mp);
      $("#t-legend").innerHTML = `<div>${esc(TX.col_net)}</div><div class="ramp" style="background:linear-gradient(90deg,${ramp.join(",")})"></div><div class="ticks"><span>−5 %</span><span>+20 %</span><span>+50 %</span></div>`;
    }
    $("#t-table").innerHTML = `<table class="data"><thead><tr><th>${TX.col_region}</th><th>${TX.col_net}</th><th>${TX.col_p}</th><th>${TX.col_summers}</th><th>${TX.col_class}</th><th>${TX.conf}</th></tr></thead><tbody>` +
      u.map((r) => `<tr><td>${esc(r.name)}</td><td>${fmtPct(r.net_gain, 1)}</td><td>${!isNum(r.p_value) ? "–" : r.p_value < 0.001 ? "< " + F.num(0.001, 3) : F.num(r.p_value, 3)}</td><td>${r.n_summers}</td><td>${esc(r.class_label)}</td><td><span class="badge ${esc(r.confidence)}">${esc(r.confidence)}</span></td></tr>`).join("") + "</tbody></table>";
  }

  /* ------------------------------------------------------------------ assistant */
  const AI = { history: [], ctx: null };
  const STOP = new Set("le la les un une des de du d l et ou en a au aux pour par sur dans avec est sont quel quelle quels quelles que qui quoi comment combien ce cette ces il elle on nous vous ils the an of to in on for and or is are what which who how many much does do did this that these those be by with from as at it its".split(" "));
  const UCKW = { 0: "synthese resume message cle confiance recommandation limite summary key message overview", 1: "tendance evolution croissance mensuel desaisonnalise stl saison annee trend growth monthly seasonal", 2: "region district convergence concentration classement herfindahl beta sigma no2 ranking", 3: "pib gdp elasticite elasticity nowcast prevision estimation croissance economique regional", 4: "choc covid crise rupture anomalie recuperation black marble quotidien shock break recovery daily", 5: "inegalite gini theil lorenz noir electricite acces urbain rural inequality dark access electricity", 6: "industrie industriel usine grappe zone torchere hydrocarbure so2 no2 logistique industry cluster factory flare", 7: "tourisme touristique ete estival saison station balneaire nuitees ramadan tourism summer resort season", 9: "methode seuil donnees source viirs dmsp nuage torchere masque limite method threshold data source" };
  const norm = (s) => String(s || "").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "");
  const tok = (s) => (norm(s).match(/[a-z0-9]+/g) || []).filter((w) => w.length > 1 && !STOP.has(w));
  function retrieve(q, k = 14, ranked = false) {
    const facts = AI.ctx.facts;
    if (!ranked && facts.reduce((a, f) => a + f.text.length + f.title.length, 0) <= 22000) return facts;
    const qs = new Set(tok(q)), nq = norm(q);
    const docs = facts.map((f) => new Set(tok(f.title + " " + f.text + " " + (UCKW[f.uc] || ""))));
    const idf = {}; qs.forEach((w) => { idf[w] = Math.log((docs.length + 1) / (1 + docs.filter((d) => d.has(w)).length)) + 1; });
    const sc = facts.map((f, i) => {
      let s = 0; qs.forEach((w) => { if (docs[i].has(w)) s += idf[w]; });
      (f.names || []).forEach((n) => { if (n && nq.includes(norm(n).split(" (")[0])) s += 3; });
      const tt = new Set(tok(f.title)); qs.forEach((w) => { if (tt.has(w)) s += 1.5; });
      if (f.uc === 0 && s > 0) s += 0.5; return s;
    });
    const ord = facts.map((_, i) => i).sort((a, b) => sc[b] - sc[a]).slice(0, k).filter((i) => sc[i] > 0);
    return ranked ? ord.map((i) => facts[i]) : ord.sort((a, b) => a - b).map((i) => facts[i]);
  }
  function systemPrompt(facts) {
    const c = AI.ctx, fr = LANG === "fr";
    const head = fr
      ? `Tu es l'assistant analytique du tableau de bord « Lumières nocturnes et activité économique » pour ${c.country} (${c.period.join("–")}), produit par la Banque africaine de développement et le Centre Big Data du FMI.\nRÈGLES IMPÉRATIVES :\n1. Réponds UNIQUEMENT à partir des FAITS fournis. N'invente aucun chiffre, aucune région, aucune date.\n2. Cite chaque affirmation chiffrée avec l'identifiant du fait entre crochets, par exemple [F12].\n3. Indique le niveau de confiance lorsqu'il est donné et rappelle une limite utile.\n4. Si les faits ne permettent pas de répondre, dis-le et indique quelle page consulter.\n5. Ne présente jamais une estimation comme une statistique officielle.\n6. Réponds dans la langue de la question, de façon concise : 3 à 8 phrases ou une courte liste, chiffres clés en **gras**.\n${c.synthetic ? "ATTENTION : données SYNTHÉTIQUES (pays test) ; rappelle-le.\n" : ""}`
      : `You are the analytical assistant of the "Night-time lights and economic activity" dashboard for ${c.country} (${c.period.join("–")}), produced by the African Development Bank and the IMF Big Data Center.\nMANDATORY RULES:\n1. Answer ONLY from the FACTS provided. Never invent a figure, a region or a date.\n2. Cite every quantitative statement with the fact identifier in square brackets, e.g. [F12].\n3. State the confidence level when given and mention a relevant limitation.\n4. If the facts do not answer the question, say so and point to the page to consult.\n5. Never present an estimate as an official statistic.\n6. Answer in the language of the question, concisely: 3 to 8 sentences or a short list, key figures in **bold**.\n${c.synthetic ? "WARNING: SYNTHETIC data (test country); say so.\n" : ""}`;
    return head + (fr ? "FAITS :\n" : "FACTS:\n") + facts.map((f) => `[${f.id}] (${(c.uc_labels || {})[f.uc] || ""}) ${f.title} : ${f.text}`).join("\n");
  }
  const keyName = (p) => `ntl-ai-key-${p}`;
  const getKey = (p) => { try { return sessionStorage.getItem(keyName(p)) || localStorage.getItem(keyName(p)) || ""; } catch (e) { return ""; } };
  function setKey(p, v, remember) {
    try { sessionStorage.setItem(keyName(p), v); if (remember) localStorage.setItem(keyName(p), v); else localStorage.removeItem(keyName(p)); } catch (e) { /* private mode */ }
  }
  async function listModels(p, key, host) {
    if (p === "groq") { const r = await fetch("https://api.groq.com/openai/v1/models", { headers: { Authorization: `Bearer ${key}` } }); if (!r.ok) throw new Error(r.status); return (await r.json()).data.map((m) => m.id); }
    if (p === "gemini") { const r = await fetch("https://generativelanguage.googleapis.com/v1beta/models", { headers: { "x-goog-api-key": key } }); if (!r.ok) throw new Error(r.status); return (await r.json()).models.filter((m) => (m.supportedGenerationMethods || []).includes("generateContent")).map((m) => m.name.split("/").pop()); }
    if (p === "ollama") { const r = await fetch(host.replace(/\/$/, "") + "/api/tags"); if (!r.ok) throw new Error(r.status); return (await r.json()).models.map((m) => m.name); }
    return ["facts"];
  }
  async function callLLM(p, model, key, host, system, msgs) {
    if (p === "groq") {
      const r = await fetch("https://api.groq.com/openai/v1/chat/completions", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({ model, temperature: 0.2, messages: [{ role: "system", content: system }, ...msgs] }) });
      if (!r.ok) throw new Error(`${r.status} ${(await r.text()).slice(0, 160)}`); return (await r.json()).choices[0].message.content;
    }
    if (p === "gemini") {
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, { method: "POST", headers: { "x-goog-api-key": key, "Content-Type": "application/json" },
        body: JSON.stringify({ systemInstruction: { parts: [{ text: system }] }, contents: msgs.map((m) => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content }] })), generationConfig: { temperature: 0.2 } }) });
      if (!r.ok) throw new Error(`${r.status} ${(await r.text()).slice(0, 160)}`); const j = await r.json(); return (j.candidates[0].content.parts || []).map((x) => x.text || "").join("");
    }
    if (p === "ollama") {
      const r = await fetch(host.replace(/\/$/, "") + "/api/chat", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model, stream: false, options: { temperature: 0.2 }, messages: [{ role: "system", content: system }, ...msgs] }) });
      if (!r.ok) throw new Error(`${r.status}`); return (await r.json()).message.content;
    }
    return null;
  }
  function md(text, known) {
    let h = esc(text), out = [], inList = false;
    h.split("\n").forEach((line) => {
      const s = line.trim(), m = s.match(/^([-*•]|\d+[.)])\s+(.*)/);
      if (m) { if (!inList) { out.push("<ul>"); inList = true; } out.push(`<li>${m[2]}</li>`); return; }
      if (inList) { out.push("</ul>"); inList = false; }
      if (s.startsWith("#")) out.push(`<p><b>${s.replace(/^#+/, "").trim()}</b></p>`); else if (s) out.push(`<p>${s}</p>`);
    });
    if (inList) out.push("</ul>");
    h = out.join("").replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/(^|[^\w*])\*(?!\s)(.+?)(?<!\s)\*(?!\w)/g, "$1<i>$2</i>").replace(/`(.+?)`/g, "<code>$1</code>");
    return h.replace(/\[(F\d{2,3})\]/g, (all, id) => { const f = known[id]; return f ? `<a class="cite" href="#${f.page}" title="${esc(f.title + " — " + f.text)}">${id}</a>` : ""; });
  }
  function bubble(role, html, meta = "") {
    const log = $("#ai-log");
    const d = document.createElement("div"); d.className = `msg ${role}`;
    d.innerHTML = role === "u" ? `<div class="bub">${html}</div>` : `<div class="av" aria-hidden="true">AI</div><div class="bub">${html}${meta ? `<div class="meta">${meta}</div>` : ""}</div>`;
    log.appendChild(d); log.scrollTop = log.scrollHeight; return d;
  }
  function localAnswer(q, facts) {
    const top = retrieve(q, 4, true).filter((f) => facts.includes(f) || true);
    if (!top.length) return TX.a_local_none;
    return TX.a_local_head + "\n" + top.map((f) => `- **${f.title}** — ${f.text} [${f.id}]`).join("\n");
  }
  async function ask(q) {
    q = (q || "").trim(); if (!q) return;
    bubble("u", esc(q));
    const wait = bubble("a", `<span class="dots">${esc(TX.a_thinking)}</span>`);
    const p = $("#ai-prov").value, model = $("#ai-model").value || PROV[p].models[0], key = $("#ai-key").value.trim(), host = $("#ai-host").value.trim();
    const facts = retrieve(q), known = Object.fromEntries(AI.ctx.facts.map((f) => [f.id, f]));
    let text = null, used = p, err = "";
    const t0 = performance.now();
    if (p !== "local" && (key || p === "ollama")) {
      try { text = await callLLM(p, model, key, host, systemPrompt(facts), [...AI.history.slice(-12), { role: "user", content: q }]); }
      catch (e) { err = TX.a_err.replace("{p}", PROV[p].label).replace("{e}", String(e.message || e).replace(key, "•••")); }
    }
    if (text == null) { text = localAnswer(q, facts); used = "local"; }
    text = text.replace(/\[(F\d{2,3})\]/g, (m, id) => (known[id] ? m : "")).replace(/ +([.,])/g, "$1");
    AI.history.push({ role: "user", content: q }, { role: "assistant", content: text });
    const ids = [...new Set((text.match(/\[(F\d{2,3})\]/g) || []).map((s) => s.slice(1, -1)))];
    const cited = ids.length ? `<details><summary>${esc(TX.a_cited)} (${ids.length})</summary><ul>${ids.map((i) => `<li><a class="cite" href="#${known[i].page}">${i}</a> ${esc(known[i].title)}</li>`).join("")}</ul></details>` : "";
    wait.remove();
    bubble("a", (err ? `<div class="warnbox">${esc(err)}</div>` : "") + md(text, known) + cited,
      `${esc(used === "local" ? TX.a_local : PROV[used].label)}${used !== "local" ? " · " + esc(model) : ""} · ${((performance.now() - t0) / 1000).toFixed(1)} s`);
  }
  function syncProvider() {
    const p = $("#ai-prov").value;
    $$("[data-show]").forEach((el) => { el.hidden = !el.dataset.show.split(" ").includes(p); });
    const dl = $("#ai-models"); dl.innerHTML = PROV[p].models.map((m) => `<option value="${m}">`).join("");
    const savedModel = store.get(`ntl-ai-model-${p}`); $("#ai-model").value = savedModel || PROV[p].models[0];
    $("#ai-key").value = getKey(p);
    $("#ai-hint").innerHTML = p === "groq" ? TX.a_groq : p === "gemini" ? TX.a_gemini : p === "ollama" ? TX.a_ollama.replace("{o}", esc(location.origin)) : esc(TX.a_nokey);
    $("#ai-status").textContent = ""; store.set("ntl-ai-provider", p);
  }
  async function renderAssistant() {
    const ctx = dd("agent");
    if (!ctx) { $("#ai-log").innerHTML = `<p class="help">${esc(TX.na)}</p>`; return; }
    AI.ctx = ctx; AI.history = [];
    $("#ai-nfacts").textContent = `📚 ${ctx.facts.length} ${TX.a_facts} · ${ctx.country}`;
    const sel = $("#ai-prov"); sel.value = store.get("ntl-ai-provider") || "groq"; syncProvider();
    sel.onchange = syncProvider;
    $("#ai-key").onchange = () => setKey(sel.value, $("#ai-key").value.trim(), $("#ai-remember").checked);
    $("#ai-remember").onchange = () => setKey(sel.value, $("#ai-key").value.trim(), $("#ai-remember").checked);
    $("#ai-model").onchange = () => store.set(`ntl-ai-model-${sel.value}`, $("#ai-model").value);
    $("#ai-test").onclick = async () => {
      const st = $("#ai-status"); st.textContent = "…";
      try { const ms = await listModels(sel.value, $("#ai-key").value.trim(), $("#ai-host").value.trim());
        $("#ai-models").innerHTML = ms.map((m) => `<option value="${esc(m)}">`).join("");
        const pref = PROV[sel.value].models.find((m) => ms.includes(m)); if (pref && !ms.includes($("#ai-model").value)) $("#ai-model").value = pref;
        st.textContent = `✅ ${TX.a_ok} · ${ms.length} ${TX.a_models}`; }
      catch (e) { st.textContent = `⚠️ ${String(e.message || e).slice(0, 80)}`; }
    };
    $("#ai-log").innerHTML = "";
    bubble("a", md(TX.a_hello.replace("{n}", ctx.facts.length).replace("{c}", ctx.country).replace("{p}", ctx.period.join("–")), {}) + (ctx.synthetic ? `<div class="warnbox">⚠️ ${LANG === "fr" ? "Données synthétiques de test." : "Synthetic test data."}</div>` : ""));
    $("#ai-sugg").innerHTML = (ctx.suggestions || []).map((s) => `<button type="button" class="chip btnchip">${esc(s)}</button>`).join("");
    $$("#ai-sugg button").forEach((b) => { b.onclick = () => ask(b.textContent); });
    $("#ai-form").onsubmit = (e) => { e.preventDefault(); const q = $("#ai-q").value; $("#ai-q").value = ""; ask(q); };
    $("#ai-q").onkeydown = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("#ai-form").requestSubmit(); } };
    $("#ai-clear").onclick = () => { AI.history = []; renderAssistant(); };
    const pending = sessionStorage.getItem("ntl-ai-pending"); if (pending) { sessionStorage.removeItem("ntl-ai-pending"); ask(pending); }
  }

  /* ------------------------------------------------------------------ registration */
  function inject() {
    const q = (sel) => document.querySelector(sel);
    const nav = q(".tabs"), before = nav && nav.querySelector('[data-page="method"]');
    ["industry", "tourism", "assistant"].forEach((p) => {
      const a = document.createElement("a"); a.href = "#" + p; a.dataset.page = p; a.textContent = TX.tabs[p];
      if (p === "assistant") a.className = "tab-ai";
      if (before) nav.insertBefore(a, before); else if (nav) nav.appendChild(a);
      const sec = document.createElement("section"); sec.className = "page"; sec.id = "page-" + p; sec.hidden = true; sec.innerHTML = HTML[p];
      const main = q("#main"), ref = q("#page-method"); if (ref) main.insertBefore(sec, ref); else main.appendChild(sec);
    });
    const UCS = LANG === "fr"
      ? [["📈", "Dynamiques", "Tendance, saisonnalité, séries régionales", "time"], ["🗺️", "Régions", "Croissance, convergence, concentration", "regions"],
         ["💰", "PIB", "Élasticité, prévision immédiate, PIB régional", "time"], ["⚡", "Chocs", "COVID-19, ruptures, récupération", "shocks"],
         ["⚖️", "Inégalités", "Gini, Theil, populations dans le noir", "inequality"], ["🏭", "Industrie", "Grappes industrielles, six signaux", "industry"],
         ["🏖️", "Tourisme", "Surcroît estival, indice de saison", "tourism"]]
      : [["📈", "Dynamics", "Trend, seasonality, regional series", "time"], ["🗺️", "Regions", "Growth, convergence, concentration", "regions"],
         ["💰", "GDP", "Elasticity, nowcast, regional GDP", "time"], ["⚡", "Shocks", "COVID-19, breaks, recovery", "shocks"],
         ["⚖️", "Inequality", "Gini, Theil, people in the dark", "inequality"], ["🏭", "Industry", "Industrial clusters, six signals", "industry"],
         ["🏖️", "Tourism", "Summer excess, season index", "tourism"]];
    const strip = document.createElement("nav"); strip.className = "uc-strip"; strip.setAttribute("aria-label", LANG === "fr" ? "Les sept cas d'usage" : "The seven use cases");
    strip.innerHTML = UCS.map(([ic, t, d, pg], i) => `<a href="#${pg}" class="uc"><span class="uc-n">${i + 1}</span><span class="uc-ic" aria-hidden="true">${ic}</span><b>${t}</b><small>${d}</small></a>`).join("") +
      `<a href="#assistant" class="uc uc-ai"><span class="uc-ic" aria-hidden="true">✦</span><b>${LANG === "fr" ? "Assistant IA" : "AI assistant"}</b><small>Groq · Gemini · Ollama</small></a>`;
    const kp = q("#kpis"); if (kp) kp.parentNode.insertBefore(strip, kp.nextSibling);
    const fab = document.createElement("a"); fab.href = "#assistant"; fab.className = "ai-fab"; fab.innerHTML = `<span aria-hidden="true">✦</span> ${esc(TX.a_fab)}`;
    document.body.appendChild(fab);
    window.addEventListener("hashchange", () => { fab.hidden = location.hash === "#assistant"; });
    fab.hidden = location.hash === "#assistant";
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inject); else inject();

  window.NTL_EXT = {
    pages: ["industry", "tourism", "assistant"],
    files: { industry: "industry.json", tourism: "tourism.json", agent: "agent_context.json", iclusters: "industry_clusters.geojson" },
    render: { industry: renderIndustry, tourism: renderTourism, assistant: renderAssistant },
    fileDesc: LANG === "fr"
      ? { "industry.json": "Zones industrielles : grappes, types, séries, validation", "industry_clusters.geojson": "Polygones des grappes industrielles et leurs six signaux", "tourism.json": "Tourisme : surcroît estival, zones touristiques, indice de saison", "agent_context.json": "Faits numérotés utilisés par l'assistant IA" }
      : { "industry.json": "Industrial zones: clusters, types, series, validation", "industry_clusters.geojson": "Industrial-cluster polygons and their six signals", "tourism.json": "Tourism: summer excess, tourist zones, season index", "agent_context.json": "Numbered facts used by the AI assistant" },
  };
})();
