<p align="right"><b>English</b> · <a href="README.fr.md">Français</a></p>

<p align="center"><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/"><img src="assets/banner.png" alt="Night-time lights: eight use cases — Tunisia" width="100%"></a></p>

<p align="center"><img src="assets/flag.png" alt="Flag — Tunisia" height="54"><br><b>Tunisia</b> · 2014–2025</p>

<p align="center">Turning satellite night-time lights into evidence for <b>Tunisia</b> — <b>eight use cases</b> for statistics and public policy: economic dynamics, regional growth, GDP nowcasting, shocks and resilience, inequality and electrification, industrial zones, seasonal tourism, urbanisation — with a <b>public dashboard</b> and an <b>AI agent</b> that answers only from the published figures.</p>

<p align="center">
  <a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/"><img src="https://img.shields.io/badge/dashboard-live-00704A?logo=githubpages&logoColor=white" alt="Open the live dashboard"></a>
  <a href="https://colab.research.google.com/github/datainnov4africa-web/NTL_Tunisia_Project/blob/main/notebooks/NTL_8_use_cases_EN.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open in Colab"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-3F7FC7" alt="MIT"></a>
  <a href="README.fr.md"><img src="https://img.shields.io/badge/languages-FR%20%7C%20EN-F5C242" alt="FR | EN"></a>
  <a href="docs/methodology.md"><img src="https://img.shields.io/badge/data-VIIRS%20%C2%B7%20Black%20Marble-0B121B?logo=nasa&logoColor=white" alt="VIIRS"></a>
  <a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#assistant"><img src="https://img.shields.io/badge/AI%20agent-Groq%20%7C%20Gemini%20%7C%20Ollama-6E40C9" alt="AI agent"></a>
  <a href="CHANGELOG.md"><img src="https://img.shields.io/badge/updated-2026--10--24-555" alt="updated"></a>
</p>

<p align="center"><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/"><img src="https://img.shields.io/badge/OPEN%20THE%20LIVE%20DASHBOARD-%E2%96%B6-00704A?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Open the live dashboard" height="42"></a>&nbsp;&nbsp;<a href="https://colab.research.google.com/github/datainnov4africa-web/NTL_Tunisia_Project/blob/main/notebooks/NTL_8_use_cases_EN.ipynb"><img src="https://img.shields.io/badge/RUN%20THE%20NOTEBOOK%20IN%20COLAB-%E2%96%B6-3F7FC7?style=for-the-badge&logo=googlecolab&logoColor=white" alt="Run the notebook in Colab" height="42"></a></p>

<p align="center"><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/"><b>https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/</b></a></p>


## 🌍 12 years of night lights in Tunisia

<table>
<tr>
<td width="50%" align="center"><img src="assets/timelapse.gif" alt="Yearly night-time lights, 2014–2025, with regional boundaries." width="100%"><br><sub>Yearly night-time lights, 2014–2025, with regional boundaries.</sub></td>
<td width="50%" align="center"><img src="assets/before_after.gif" alt="Before / after: night-time lights in 2014 and 2025." width="100%"><br><sub>Before / after: night-time lights in 2014 and 2025.</sub></td>
</tr>
</table>


## ✨ At a glance

<sub>Key figures of the run, 2014–2025. Each comes with its confidence level and method on the dashboard.</sub>

<table>
<tr>
<td align="center" width="25%"><h3>+6.0%</h3><b>Annual growth of light</b><br><sub>2014–2025, robust slope (Theil–Sen)</sub></td>
<td align="center" width="25%"><h3>+4.1%</h3><b>Last 12 months vs previous 12</b><br><sub>seasonally adjusted series, up to 12/2025</sub></td>
<td align="center" width="25%"><h3>—</h3><b>Light–GDP elasticity</b><br><sub>GDP unavailable</sub></td>
<td align="center" width="25%"><h3>0.27</h3><b>Gini of light per capita</b><br><sub>ADM2 units, 2025</sub></td>
</tr>
<tr>
<td align="center" width="25%"><h3>66k</h3><b>People in the dark</b><br><sub>12% of the inhabited population, 2025</sub></td>
<td align="center" width="25%"><h3>10%</h3><b>Share of the top region</b><br><sub>Sfax, 2025</sub></td>
<td align="center" width="25%"><h3>125</h3><b>Industrial clusters</b><br><sub>25% of national light</sub></td>
<td align="center" width="25%"><h3>23</h3><b>Tourist zones</b><br><sub>max. summer excess +29% (Djerba Ajim (Médenine))</sub></td>
</tr>
<tr>
<td align="center" width="25%"><h3>+9.1%</h3><b>Lit area</b><br><sub>annual growth; population +0.9%/yr</sub></td>
</tr>
</table>


## ⚡ A shock, seen from space

<p align="center"><img src="assets/shock.gif" alt="National seasonally adjusted monthly series — COVID-19. Trough: −9.0% (11/2020)." width="100%"><br><sub>National seasonally adjusted monthly series — COVID-19. Trough: −9.0% (11/2020).</sub></p>


## 🧭 Eight use cases

<sub>Each card opens the matching page of the live dashboard.</sub>

<table>
<tr>
<td width="50%" valign="top">
<a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#time"><img src="assets/uc1.png" alt="Use case 1 — Time dynamics" width="100%"></a>
<h3>📈 1 · Time dynamics</h3>
<p><b>Question</b> — <i>Is activity accelerating or slowing down, net of seasonality?</i></p>
<p><b>Finding</b> — Between 2014 and 2025, night-time light in Tunisia changed by +6.0% per year (95% CI: +5.0% to +6.5%). Over the last 12 months, the seasonally adjusted level is +4.1% relative to the previous 12 months.</p>
<p><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#time">Open the page →</a></p></td>
<td width="50%" valign="top">
<h3>🗺️ 2 · Regional growth and convergence</h3>
<p><b>Question</b> — <i>Which regions take off, which fall behind?</i></p>
<p><b>Finding</b> — Of 264 ADM2 units, 239 show significant growth, 23 are stagnating and 2 are declining. Light remains concentrated: Sfax accounts for 10% of national light.</p>
<p><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#regions">Open the page →</a></p></td>
</tr>
<tr>
<td width="50%" valign="top">
<h3>💹 3 · Light–GDP relationship</h3>
<p><b>Question</b> — <i>Can growth be estimated before its release, and regional GDP?</i></p>
<p><b>Finding</b> — Validation: Out-of-sample tracking of official growth (correlation / MAE (pp) = n/a / n/a). Uncertainty: 95% CI of the elasticity: n/a to n/a; 80% and 95% prediction intervals.</p>
<p><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#time">Open the page →</a></p></td>
<td width="50%" valign="top">
<a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#shocks"><img src="assets/uc4.png" alt="Use case 4 — Shocks and resilience" width="100%"></a>
<h3>⚡ 4 · Shocks and resilience</h3>
<p><b>Question</b> — <i>How deep was a shock, and how fast the recovery?</i></p>
<p><b>Finding</b> — The most pronounced shock in the seasonally adjusted series is “COVID-19”: trough of -9.0% (11/2020), return to the pre-shock level after 10 months.</p>
<p><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#shocks">Open the page →</a></p></td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#inequality"><img src="assets/uc5.png" alt="Use case 5 — Inequality and electrification" width="100%"></a>
<h3>⚖️ 5 · Inequality and electrification</h3>
<p><b>Question</b> — <i>Where do people without electricity live?</i></p>
<p><b>Finding</b> — The Gini coefficient of light per capita (ADM2) is 0.27 in 2025 (no significant change since 2014). About 0.07 million people live in inhabited areas with no detectable light (12% of the inhabited population).</p>
<p><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#inequality">Open the page →</a></p></td>
<td width="50%" valign="top">
<a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#industry"><img src="assets/uc6.png" alt="Use case 6 — Industrial zones" width="100%"></a>
<h3>🏭 6 · Industrial zones</h3>
<p><b>Question</b> — <i>Where is industry, and is its activity growing?</i></p>
<p><b>Finding</b> — 125 industrial clusters detected from concordant satellite signals: 27 heavy industry, 37 business parks & logistics, 30 oil & gas sites and 31 isolated sites to verify. They emit 25.2% of national light (latest year); their light changes by +2.8% per year.</p>
<p><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#industry">Open the page →</a></p></td>
</tr>
<tr>
<td width="50%" valign="top">
<h3>🏖️ 7 · Seasonal tourism</h3>
<p><b>Question</b> — <i>Which areas live from tourism, and how does the season evolve?</i></p>
<p><b>Finding</b> — 23 of 264 units show a net summer light excess of at least 10%: Djerba Ajim (Médenine), Djerba Midoun (Médenine), Zarzis (Médenine), Djerba Houmet Souk (Médenine). The median net excess reaches +29% in the most touristic zone.</p>
<p><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#tourism">Open the page →</a></p></td>
<td width="50%" valign="top">
<h3>🏙️ 8 · Urbanisation signals</h3>
<p><b>Question</b> — <i>Where do cities spread, where do villages get electrified, and where does population grow without light?</i></p>
<p><b>Finding</b> — National lit area: +9.1% per year; population: +0.9% per year. Classes (ADM2): Electrified urbanisation 190, Unlit growth 38, Stable or declining 29, Balanced growth 7.</p>
<p><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#urban">Open the page →</a></p></td>
</tr>
<tr>
<td width="50%" valign="top"><h3>🤖 AI agent</h3><p><i>Ask the results in plain language — every number is cited.</i></p><p><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#assistant">Open the page →</a></p></td>
</tr>
</table>


## 📊 The dashboard

<sub>Bilingual (FR/EN), works offline-first from static files, light & dark themes, mobile-ready.</sub>

<table><tr><td width="76%"><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/"><img src="assets/dashboard_tour.gif" alt="The dashboard" width="100%"></a></td><td width="24%"><img src="assets/screen_mobile.png" alt="mobile" width="100%"></td></tr></table>


<details>
<summary><b>Screenshots</b> (9)</summary>
<br>

<table>
<tr><td width="33%" align="center"><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#overview"><img src="assets/screen_overview.png" alt="overview" width="100%"></a><br><sub><code>#overview</code></sub></td><td width="33%" align="center"><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#map"><img src="assets/screen_map.png" alt="map" width="100%"></a><br><sub><code>#map</code></sub></td><td width="33%" align="center"><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#time"><img src="assets/screen_time.png" alt="time" width="100%"></a><br><sub><code>#time</code></sub></td></tr>
<tr><td width="33%" align="center"><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#regions"><img src="assets/screen_regions.png" alt="regions" width="100%"></a><br><sub><code>#regions</code></sub></td><td width="33%" align="center"><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#shocks"><img src="assets/screen_shocks.png" alt="shocks" width="100%"></a><br><sub><code>#shocks</code></sub></td><td width="33%" align="center"><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#inequality"><img src="assets/screen_inequality.png" alt="inequality" width="100%"></a><br><sub><code>#inequality</code></sub></td></tr>
<tr><td width="33%" align="center"><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#industry"><img src="assets/screen_industry.png" alt="industry" width="100%"></a><br><sub><code>#industry</code></sub></td><td width="33%" align="center"><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#tourism"><img src="assets/screen_tourism.png" alt="tourism" width="100%"></a><br><sub><code>#tourism</code></sub></td><td width="33%" align="center"><a href="https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#urban"><img src="assets/screen_urban.png" alt="urban" width="100%"></a><br><sub><code>#urban</code></sub></td></tr>
</table>
</details>


## 🤖 The AI agent

- **Grounded.** The agent only answers from the numbered facts exported with the dashboard (`agent_context.json`, F01, F02…): the same facts in the notebook and on the website.
- **Cited.** Every quantitative sentence cites its fact, e.g. `[F12]`; citations link to the dashboard page they come from, and unknown citations are removed.
- **A real agent with six tools.** It plans, calls tools by *function calling* and chains several steps: 🔎 `search_facts`, 🏆 `rank_units`, 📍 `unit_profile`, ⚖️ `compare_units`, 📈 `make_chart` (charts drawn in the conversation) and 🗺️ `map_action` (it drives the dashboard map: year, swipe comparison, zoom, layers). Each step is shown; tool results are cited as `[D2]`.
- **Briefs in one click.** Policy brief, country profile or parliamentary answer — structured, sourced, exportable as Markdown or PDF.
- **Your choice of model.** Groq (`openai/gpt-oss-120b` by default), Google Gemini or a local Ollama model, with streamed answers; without any model, an offline planner runs the same tools.
- **Guard-rails.** Read-only tools, at most five tool calls per question, data never treated as instructions (prompt-injection resistant), rate limiting.
- **Keys stay with you.** On the website, a visitor's API key stays in their own browser and is sent only to the chosen provider; in the notebook keys come from Colab Secrets. No key is ever published.


## 🛠️ How it works

```mermaid
flowchart LR
  A["🛰️ Satellites<br/>VIIRS · Black Marble<br/>Sentinel-5P · MODIS"]
  A2["📚 Open data<br/>GHSL · WorldPop<br/>OSM · World Bank"]
  B["🌍 Earth Engine<br/>zonal stats"]
  C["📓 Notebook<br/>cleaning · STL<br/>econometrics"]
  D["🧭 8 use<br/>cases"]
  E["📦 Exports<br/>JSON · CSV<br/>GeoJSON · PNG"]
  F["📊 Dashboard<br/>FR/EN"]
  G["🤖 AI agent<br/>cited facts"]
  H["🚀 GitHub<br/>Pages"]
  A --> B
  A2 --> B
  B --> C --> D --> E
  E --> F --> H
  E --> G --> H
  classDef green fill:#00704A,stroke:#00553A,color:#fff
  classDef gold fill:#F5C242,stroke:#b8901f,color:#05080d
  classDef blue fill:#3F7FC7,stroke:#2b5f99,color:#fff
  class A,A2,B blue
  class C,D,E green
  class F,G,H gold
```


## 🚀 Quick start

1. **Open the notebook in Colab** — [NTL_8_use_cases_EN.ipynb](https://colab.research.google.com/github/datainnov4africa-web/NTL_Tunisia_Project/blob/main/notebooks/NTL_8_use_cases_EN.ipynb).
2. **Set the country** — in section 2, `ISO3 = "TUN"` (any ISO 3166-1 alpha-3 code) and the period; `SYNTHETIC_TEST = True` runs everything without Earth Engine.
3. **Run all** — *Runtime → Run all*. The dashboard is exported to `dashboard/` and, with `PUBLISH = True`, published to GitHub Pages in one call.

> [!TIP]
> Keys and tokens go in **Colab Secrets** (🔑 icon): `GITHUB_TOKEN` (fine-grained, this repository only: *Contents*, *Pages* — plus *Administration* to create the repository and set its description), and optionally `GROQ_API_KEY` or `GEMINI_API_KEY`. An Earth Engine Cloud project is needed for real countries.


## 🛰️ Data sources

| Dataset | Provider · Earth Engine ID | Used for | Reference |
|---|---|---|---|
| **VIIRS VNL V2 (annual)** | NOAA/EOG · `NOAA/VIIRS/DNB/ANNUAL_V21`, `ANNUAL_V22` | annual levels, maps, inequality | Elvidge, C. D. et al. (2021). Annual time series of global VIIRS nighttime lights. *Remote Sensing* 13(5). |
| **VIIRS DNB monthly (VCMSLCFG)** | NOAA/EOG · `NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG` | monthly series, seasonality, shocks, tourism | Elvidge, C. D. et al. (2017). VIIRS night-time lights. *Int. J. Remote Sensing* 38(21). |
| **Black Marble VNP46A2 (daily)** | NASA · `NASA/VIIRS/002/VNP46A2` | daily shock index | Román, M. O. et al. (2018). NASA's Black Marble nighttime lights product suite. *RSE* 210. |
| **DMSP-OLS / harmonised DMSP–VIIRS** | NOAA NGDC · Li et al. (sat-io) | long series since 1992 (GDP elasticity) | Li, X. et al. (2020). A harmonized global nighttime light dataset 1992–2018. *Scientific Data* 7, 168. |
| **GHSL R2023A (POP, SMOD, BUILT-S)** | European Commission JRC · `JRC/GHSL/P2023A/*` | population, urban/rural, non-residential built-up | Schiavina, M. et al. (2023); Pesaresi, M. et al. (2023). GHSL R2023A. JRC. |
| **WorldPop** | WorldPop · `WorldPop/GP/100m/pop` | population (alternative) | WorldPop (2018). Global High Resolution Population Denominators. |
| **Sentinel-5P TROPOMI NO₂ / SO₂** | ESA Copernicus · `COPERNICUS/S5P/OFFL/L3_NO2`, `L3_SO2` | activity cross-check, industrial signals | Veefkind, J. P. et al. (2012). TROPOMI on the ESA Sentinel-5 Precursor. *RSE* 120. |
| **MODIS LST (MOD11A2)** | NASA · `MODIS/061/MOD11A2` | surface heat of industrial sites | Wan, Z. (2014). New refinements and validation of the MODIS LST products. *RSE* 140. |
| **OpenStreetMap** | OpenStreetMap contributors · Overpass API | industrial-area reference list | © OpenStreetMap contributors, ODbL. |
| **World Bank WDI** | World Bank · `NY.GDP.MKTP.KD`, `NV.IND.TOTL.KD`, `EG.ELC.ACCS.ZS`… | real GDP, industry value added, electricity access | World Bank (2026). World Development Indicators. |
| **geoBoundaries / FAO GAUL** | William & Mary geoLab · FAO | administrative boundaries | Runfola, D. et al. (2020). geoBoundaries. *PLoS ONE* 15(4). |


## 📐 Methodology & quality standards

Full methodology: [docs/methodology.md](docs/methodology.md) · quality report: [docs/QUALITY.md](docs/QUALITY.md).

- **UN Fundamental Principles of Official Statistics** — relevance, impartiality, professional standards, transparency of sources and methods, open access to the results.
- **Data Quality Assessment Framework (DQAF)** — integrity, methodological soundness, accuracy and reliability, serviceability, accessibility.
- **GSBPM** — every notebook section maps to a phase of the Generic Statistical Business Process Model.
- **FAIR** — findable (stable URLs, citation file), accessible (open formats), interoperable (CSV, JSON, GeoJSON), reusable (licence, provenance in `manifest.json`).
- **Experimental statistics** — night-light estimates complement, and never replace, official statistics; they are labelled *experimental* with their uncertainty.


| Use case | Status | Confidence | Validation |
|---|---|---|---|
| 📈 1 · Time dynamics | `Experimental` | high | p-value = < 0.0001 |
| 🗺️ 2 · Regional growth and convergence | `Experimental` | medium | Spearman ρ = 0.10 |
| 💹 3 · Light–GDP relationship | `Experimental` | None | correlation / MAE (pp) = n/a / n/a |
| ⚡ 4 · Shocks and resilience | `Experimental` | medium | trough (main shock) = -9.0% — yes |
| ⚖️ 5 · Inequality and electrification | `Experimental` | medium | mean gap (pp) = n/a |
| 🏭 6 · Industrial zones | `Experimental` | low | precision / recall / F1 = 65% / 23% / 0.33 |
| 🏖️ 7 · Seasonal tourism | `Experimental` | low | r = not available |
| 🏙️ 8 · Urbanisation signals | `Experimental` | low | Spearman ρ = 0.34 |


## 🗂️ Repository structure

```text
.
├── assets/          # images & animations generated from the data
├── dashboard/       # → the live site is on the gh-pages branch
├── docs/            # methodology and quality report (EN/FR)
├── .github/         # issue and pull-request templates
├── notebooks/       # the Colab notebook(s)
├── src/             # analysis package
├── src_en/          # analysis package (English messages)
├── CHANGELOG.md     # release notes
├── CITATION.cff     # how to cite
├── CONTRIBUTING.md  # how to contribute
├── LICENSE          # MIT (code)
├── README.fr.md     # French version
└── README.md        # this page (English)
```


## 🔐 Security

- Tokens and API keys are **never** written to disk, printed, logged, committed or published; publication uses the GitHub REST API with an in-memory token and redacts every error message.
- Use a **fine-grained token** limited to this repository, with an expiry date; revoke it when it is no longer needed.
- Every file is scanned for token patterns before each push; the publication is cancelled if one is found.
- The site is static (no server, no database); the AI assistant runs in the visitor's browser.


## 📝 How to cite

See [`CITATION.cff`](CITATION.cff) (GitHub shows a *Cite this repository* button), or:

```bibtex
@software{ntl_tun_2026,
  author  = {{African Development Bank} and {Data Innovation for Africa (DI4A)}},
  title   = {Night-time lights: eight use cases — Tunisia — statistics & public policy, public dashboard and AI agent},
  year    = {2026},
  version = {2.1.0},
  url     = {https://github.com/datainnov4africa-web/NTL_Tunisia_Project}
}
```


## ⚖️ License

© AfDB-DI4A (African Development Bank — Data Innovation for Africa). **Any reuse of the results, maps, charts or images must state the source: “Source: AfDB-DI4A”.** Code: [MIT](LICENSE). Derived data and images follow the licence of each source dataset (for example, EOG VIIRS products, GHSL, WorldPop, geoBoundaries and World Bank WDI are distributed under CC BY 4.0, OpenStreetMap under ODbL) — see each source's licence before reuse.


## 🙏 Acknowledgements

Developed by the **African Development Bank (AfDB)** and **Data Innovation for Africa (DI4A)**. Night-time lights by the Earth Observation Group (Payne Institute, Colorado School of Mines) and NASA Black Marble, processed with Google Earth Engine.


---
<p align="center"><sub>Generated by the notebook on 2026-10-24 · version 2.1.0 · <a href="https://github.com/datainnov4africa-web/NTL_Tunisia_Project">datainnov4africa-web/NTL_Tunisia_Project</a></sub></p>
