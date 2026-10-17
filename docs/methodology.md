<p align="right"><a href="methodology.fr.md">Français</a></p>

# Methodology — Tunisia (2014–2025)

## Data and cleaning

VIIRS DNB monthly (VCMSLCFG) and annual VNL V2, harmonised DMSP–VIIRS, daily Black Marble, GHSL/WorldPop, Sentinel-5P NO₂/SO₂, MODIS LST, World Bank. Cleaning: pixels valid if cf_cvg ≥ 2, unit-month kept if ≥ 80% of pixels observed, spikes replaced, background and gas flares masked.

## 📈 Use case 1 — Time dynamics

- **Question** — Is activity accelerating or slowing down, net of seasonality?
- **Data** — VIIRS VCMSLCFG (monthly), VIIRS VNL V2 (annual), Harmonised DMSP–VIIRS (Li et al., 2020)
- **Method** — Robust STL (period 12) on log(sum of lights); Theil–Sen slope and Mann–Kendall test on annual composites; anomaly and break detection.
- **Validation** — Trend significance (Mann–Kendall) and monthly/annual consistency (**p-value = < 0.0001**)
- **Uncertainty** — 95% CI of annual growth: +5.0% to +6.5%
- **Limits** — Cloud cover and short summer nights; light is not value added.
- **Status** — `experimental` · Confidence: high
- **References** — Cleveland et al. (1990) STL; Sen (1968); Elvidge et al. (2017).
- **Dashboard page** — [`#time`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#time)

**Results of this run**

- `F02` Between 2014 and 2025, night-time light in Tunisia changed by +6.0% per year (95% CI: +5.0% to +6.5%). Over the last 12 months, the seasonally adjusted level is +4.1% relative to the previous 12 months. (confidence high: significant trend (p < 0.01; n = 12))
- `F84` Validation: Trend significance (Mann–Kendall) and monthly/annual consistency (p-value = < 0.0001). Uncertainty: 95% CI of annual growth: +5.0% to +6.5% Limitations: Cloud cover and short summer nights; light is not value added. Status: experimental statistic; confidence high.

## 🗺️ Use case 2 — Regional growth and convergence

- **Question** — Which regions take off, which fall behind?
- **Data** — VIIRS VNL V2, GHSL / WorldPop, Sentinel-5P NO₂
- **Method** — Robust growth per unit (Theil–Sen, Mann–Kendall), growth/stagnation/decline classes, β- and σ-convergence, Herfindahl index.
- **Validation** — Rank correlation with tropospheric NO₂ (independent source) (**Spearman ρ = 0.10**)
- **Uncertainty** — Class assigned only if |slope| ≥ threshold and p < α; CI of β (robust errors).
- **Limits** — Small units: noise and light blooming between neighbours.
- **Status** — `experimental` · Confidence: medium
- **References** — Barro & Sala-i-Martin (1992) convergence; Henderson, Storeygard & Weil (2012).
- **Dashboard page** — [`#regions`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#regions)

**Results of this run**

- `F03` Of 264 ADM2 units, 239 show significant growth, 23 are stagnating and 2 are declining. Light remains concentrated: Sfax accounts for 10% of national light. (confidence medium: classification of 264 units, threshold ±1%/yr and p < 0.10)
- `F04` Across ADM2 units, light per capita converges: the least-lit units are catching up. (confidence medium: β = −0.014 [−0.026; −0.003], n = 264)
- `F24` Sfax (ADM1, 2025): share of national light 9.7%, annual growth +6.3% (CI +5.8% to +6.9%, class Growth), light per capita 0.967, population 0.06 M, in the dark 6%, estimated GDP (experimental) 4.90 bn USD.
- `F25` Nabeul (ADM1, 2025): share of national light 8.5%, annual growth +4.7% (CI +4.0% to +5.2%, class Growth), light per capita 1.023, population 0.05 M, in the dark 2%, estimated GDP (experimental) 4.29 bn USD.

## 💹 Use case 3 — Light–GDP relationship

- **Question** — Can growth be estimated before its release, and regional GDP?
- **Data** — VIIRS, Real GDP (World Bank, WDI)
- **Method** — log(light) ~ log(GDP) in levels and growth, OLS with HAC errors; out-of-sample nowcast; regional GDP = national GDP allocated pro rata of light.
- **Validation** — Out-of-sample tracking of official growth (**correlation / MAE (pp) = -0.31 / 2.9**)
- **Uncertainty** — 95% CI of the elasticity: 1.02 to 7.36; 80% and 95% prediction intervals.
- **Limits** — Short annual sample; regional GDP is an experimental statistic to be checked against regional accounts.
- **Status** — `experimental` · Confidence: medium
- **References** — Henderson et al. (2012) AER; Chen & Nordhaus (2011) PNAS; Gibson et al. (2021) JDE.
- **Dashboard page** — [`#time`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#time)

**Results of this run**

- `F05` The elasticity of light with respect to real GDP is 4.19 in levels (95% CI: 1.02 to 7.36, R² = 0.54, 12 years) and 0.25 in growth rates (CI: −0.06 to 0.56). Out of sample, light growth tracks GDP growth with a correlation of −0.31 (mean absolute error: 2.9 percentage points of growth). (confidence medium: n = 12, significant but wide CI (6.34))
- `F51` Light–real GDP elasticity in levels: β = 4.19 (95% CI 1.02 to 7.36, R² = 0.54, n = 12, confidence medium: n = 12, significant but wide CI (6.34)). +1% GDP ↔ +β% light.
- `F52` Light–real GDP elasticity in growth rates: β = 0.25 (95% CI -0.06 to 0.56, R² = 0.05, n = 11, confidence low: n = 11, not significant (p = 0.11)). +1% GDP ↔ +β% light.
- `F53` Light–real GDP elasticity in long DMSP–VIIRS series: β = 1.06 (95% CI 0.87 to 1.25, R² = 0.89, n = 30, confidence high: n = 30, p < 0.01, narrow CI). +1% GDP ↔ +β% light.

## ⚡ Use case 4 — Shocks and resilience

- **Question** — How deep was a shock, and how fast the recovery?
- **Data** — VIIRS (monthly), Black Marble VNP46A2 (daily), event catalogue
- **Method** — Gap to the pre-shock level on the seasonally adjusted series; structural breaks; daily Black Marble index.
- **Validation** — Does the trough exceed ordinary variability? (**trough (main shock) = -9.0% — yes**)
- **Uncertainty** — Pre-shock month-to-month variability (robust SD); unexplained breaks flagged.
- **Limits** — Shocks hitting poorly lit activities (agriculture, daytime services) are underestimated.
- **Status** — `experimental` · Confidence: medium
- **References** — Román et al. (2018); Elvidge et al. (2020) COVID-19 lockdown lights.
- **Dashboard page** — [`#shocks`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#shocks)

**Results of this run**

- `F06` The most pronounced shock in the seasonally adjusted series is “COVID-19”: trough of -9.0% (11/2020), return to the pre-shock level after 10 months. (confidence medium: trough compared with pre-shock month-to-month variability)
- `F55` COVID-19 (2020-03-01 → 2021-06-30): trough of -9.0% on 2020-11-01, back to the pre-shock level after 10 months. Distinguishable from noise: yes.
- `F56` Structural breaks: 2020-03-01 (-7.6 %). Without a known event within ±6 months: 0.
- `F57` Hardest-hit regions (trough): Tunis -23.2 % (covid19), Médenine -22.0 % (covid19), El Kef -20.2 % (covid19), Gabès -19.9 % (covid19), Béja -17.2 % (covid19).

## ⚖️ Use case 5 — Inequality and electrification

- **Question** — Where do people without electricity live?
- **Data** — VIIRS VNL V2, GHSL / WorldPop, GHSL SMOD, electricity access (WDI)
- **Method** — Population-weighted Gini and Theil; population of inhabited pixels below the detection threshold; sensitivity to three thresholds; bootstrap CI of the Gini change.
- **Validation** — Gap with the World Bank electricity-access rate (**mean gap (pp) = -12.3**)
- **Uncertainty** — Range across radiance thresholds; bootstrap CI of the Gini.
- **Limits** — Proxy of outdoor lighting, not of connection: a connected but dimly lit household looks “in the dark”.
- **Status** — `experimental` · Confidence: medium
- **References** — Theil (1967); Falchetta et al. (2020) electricity access from lights.
- **Dashboard page** — [`#inequality`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#inequality)

**Results of this run**

- `F07` The Gini coefficient of light per capita (ADM2) is 0.27 in 2025 (no significant change since 2014). About 0.07 million people live in inhabited areas with no detectable light (12% of the inhabited population). (confidence medium: sensitive to the radiance threshold (from 0.07 to 0.07 M depending on the threshold); a proxy for outdoor lighting, not for grid connection)
- `F58` Gini of light per capita (ADM2): 0.271 in 2014 → 0.272 in 2025 (change 0.001, bootstrap CI -0.026 to 0.020). Theil T 0.127; between-region share 37%.
- `F59` People in inhabited areas without detectable light: 0.06 M (13%) in 2014 → 0.07 M (12%) in 2025. Urban/rural light-per-capita ratio 0.5. Proxy of electricity access, sensitive to the threshold.
- `F60` Average gap between the share of people in lit areas and the World Bank electricity-access rate: -12.3 points.

## 🏭 Use case 6 — Industrial zones

- **Question** — Where is industry, and is its activity growing?
- **Data** — VIIRS VNL V2, GHSL BUILT-S, Sentinel-5P NO₂/SO₂, MODIS MOD11A2, OpenStreetMap
- **Method** — Concordance of six signals per pixel (≥ 3 including light), 8-connected clusters, typology and confidence.
- **Validation** — Comparison with the reference list (n/a) (**precision / recall / F1 = not available**)
- **Uncertainty** — Per-cluster confidence from the number of strong signals; isolated sites to verify.
- **Limits** — Sentinel-5P (≈ 5 km) and MODIS (1 km) resolution: signals describe a neighbourhood.
- **Status** — `experimental` · Confidence: low
- **References** — Elvidge et al. (2016) gas flares; Pesaresi et al. (2023) GHSL.
- **Dashboard page** — [`#industry`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#industry)

**Results of this run**

- `F08` 125 industrial clusters detected from concordant satellite signals: 27 heavy industry, 37 business parks & logistics, 30 oil & gas sites and 31 isolated sites to verify. They emit 25.2% of national light (latest year); their light changes by +2.8% per year. Tunis has the most industrial activity. (confidence low: no reference list available to validate the detection)
- `F61` 125 industrial clusters (≥ 3 of 6 signals): Business park & logistics 37, Isolated site to verify 31, Oil, gas & flares 30, Heavy industry 27. Share of national light: 25.2%; annual growth +2.8%. No validation available.
- `F62` IND-001 — Oil, gas & flares in Bab El Bhar (Tunis) (827.965 km², 3 signals, confidence low); IND-002 — Heavy industry in Korba (Nabeul) (178.235 km², 4 signals, confidence medium); IND-012 — Oil, gas & flares in Gabes Medina (Gabès) (10.535 km², 3 signals, confidence low); IND-004 — Heavy industry in Grombalia (Nabeul) (26.66 km², 4 signals, confidence medium); IND-003 — Oil, gas & flares in Bou Argoub (Nabeul) (27.95 km², 4 signals, confidence medium); IND-008 — Isolated site to verify in Zaghouan (Zaghouan) (17.63 km², 3 signals, confidence low); IND-005 — Isolated site to verify in Sidi Bou Ali (Sousse) (23.865 km², 3 signals, confidence low); IND-007 — Isolated site to verify in Enfidha (Sousse) (18.92 km², 3 signals, confidence low); IND-013 — Isolated site to verify in Ez-Zeriba (Zaghouan) (9.89 km², 3 signals, confidence low); IND-009 — Isolated site to verify in Bir Mchergua (Zaghouan) (17.2 km², 3 signals, confidence low)
- `F63` Tunis: 2 industrial cluster(s), 828.8 km², 216.2% of the region's light.

## 🏖️ Use case 7 — Seasonal tourism

- **Question** — Which areas live from tourism, and how does the season evolve?
- **Data** — VIIRS (monthly), hotel nights or WDI arrivals
- **Method** — Summer excess net of comparable units at the same latitude; one-sided test; season index base 100; seasons overlapping Ramadan flagged.
- **Validation** — Correlation with les arrivées de touristes internationaux (WDI) (**r = 0.56**)
- **Uncertainty** — p-value per unit; 2020–2021 excluded from the classification.
- **Limits** — Any summer activity (diaspora, second homes, festivals) is captured, not only tourism.
- **Status** — `experimental` · Confidence: medium
- **References** — Seasonal light analyses of tourism, e.g. Hu et al. (2021).
- **Dashboard page** — [`#tourism`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#tourism)

**Results of this run**

- `F09` 23 of 264 units show a net summer light excess of at least 10%: Djerba Ajim (Médenine), Djerba Midoun (Médenine), Zarzis (Médenine), Djerba Houmet Souk (Médenine). The median net excess reaches +29% in the most touristic zone. The season index (base 100 = 2019) falls to 83 in 2020 and stands at 128 in 2025. (confidence medium: correlation of 0.56 with les arrivées de touristes internationaux (WDI) (7 years))
- `F76` 23 tourist zone(s) out of 264 ADM2 units (net summer excess ≥ 10%, peak months [7, 8]): Djerba Ajim (Médenine) (+29%, confidence high), Djerba Midoun (Médenine) (+21%, confidence high), Zarzis (Médenine) (+19%, confidence high), Djerba Houmet Souk (Médenine) (+19%, confidence high), Hammam El Guezaz (Nabeul) (+16%, confidence high), Kerkennah (Sfax) (+16%, confidence high), Kelibia (Nabeul) (+15%, confidence high), El Djem (Mahdia) (+14%, confidence high), Mahres (Sfax) (+14%, confidence high), El Bradaa (Mahdia) (+12%, confidence high).
- `F77` Season index (base 100 = 2019): 2014: 97, 2015: 98, 2016: 99, 2017: 83, 2018: 99, 2019: 100, 2020: 83, 2021: 66, 2022: 111, 2023: 144, 2024: 94, 2025: 128. Years when Ramadan overlaps the season: 2014, 2015, 2018, 2019, 2020, 2021, 2022, 2023.
- `F78` Correlation between the season index and les arrivées de touristes internationaux (WDI): 0.56 (7 years; in growth rates: 0.53).

## 🏙️ Use case 8 — Urbanisation signals

- **Question** — Where do cities spread, where do villages get electrified, and where does population grow without light?
- **Data** — VIIRS VNL V2, GHSL GHS-POP / WorldPop, GHSL GHS-BUILT-S R2023A, urban population (WDI)
- **Method** — Lit area (pixels above the threshold) and population per unit; Theil–Sen growth rates; newly lit pixels (dark two years in a row at the start, lit two years in a row at the end), split between electrification of inhabited areas and new settlements; light/population typology.
- **Validation** — Rank correlation with GHSL built-up area growth (independent source) (**Spearman ρ = 0.34**)
- **Uncertainty** — Persistence required over two years to limit noise; ± 1 pp margin between growth rates before classifying.
- **Limits** — Light measures outdoor lighting, not urbanisation in the administrative sense; blooming widens cities; GHSL population is interpolated between epochs.
- **Status** — `experimental` · Confidence: low
- **References** — Zhou et al. (2015) urban extent from lights; Pesaresi et al. (2023) GHSL; Min et al. (2013) village electrification.
- **Dashboard page** — [`#urban`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/en/?country=TUN#urban)

**Results of this run**

- `F79` National lit area: +9.1% per year; population: +0.9% per year. Classes (ADM2): Electrified urbanisation 190, Unlit growth 38, Stable or declining 29, Balanced growth 7.
- `F80` Between 2014 and 2025: 15,081 km² newly lit, of which 109 km² already inhabited (electrification, ≈ 4k people) and 14,972 km² of new settlements; 281 km² lost their light.
- `F81` Fastest lit-area expansion: Bargou (Siliana) (+33.3%/yr), Sidi Aïch (Gafsa) (+28.9%/yr), Mezzouna (Sidi Bouzid) (+28.6%/yr), Bir Ali Ben Kelifa (Sfax) (+24.3%/yr), Ghraiba (Sfax) (+24.0%/yr), Hassi Ferid (Kasserine) (+23.3%/yr). Unlit growth (population faster than light): Fouchana (Ben Arous), La Marsa (Tunis), Ben Arous (Ben Arous), El Mnihla (Ariana), Mannouba (Manouba), Ksar Helal (Monastir), Tina (Sfax), Teboulba (Monastir).
- `F82` Spearman rank correlation between lit-area growth and GHSL built-up growth: 0.34 (p = 0.000, 264 units).

## General limits of night-time lights

- **What lights measure** — Upward radiance emitted around 01:30: agriculture, daytime trade, poorly lit services and the rural informal economy are poorly captured.
- **Saturation and blooming** — DMSP saturates in city centres (DN 63) and “blooms” beyond lit areas; VIIRS is much better, but blooming still inflates the lit area of cities.
- **Gas flares and isolated sites** — The automatic mask may remove isolated mines, ports or power plants, and miss small flares; candidates are exported for verification.
- **Clouds, seasons, moon** — Cloudy months are only partially observed; STL removes average seasonality but not an abnormal season (snow, late monsoon).
- **Product breaks** — DMSP and VIIRS are not directly comparable: the harmonised long series (Li et al., 2020) is a modelled product, to be read for trends only.
- **NTL–GDP elasticity** — Estimated on 10 to 30 annual observations: wide intervals, possible instability, a non-causal relationship that varies with the level of development.
- **Access to electricity** — “Inhabited without light” ≠ “not connected”: a connected household with low consumption is invisible; the indicator depends strongly on the radiance threshold and the population data.
- **Administrative boundaries** — geoBoundaries/GAUL may differ from official boundaries; small ADM2 units are sensitive to light spilling over from neighbouring units.
- **Industrial zones** — Detection relies on thresholds: a power plant, a port or a large shopping centre can meet the signals; a dimly lit factory without visible emissions is missed. Sentinel-5P (≈ 5 km) and MODIS (1 km) are coarser than VIIRS: NO₂/SO₂/heat signals describe a neighbourhood, not a building.
- **Summer tourism** — The summer excess captures any rise in summer light (second homes, diaspora visits, festivals, construction), not only tourism; at high latitudes, very short summer nights reduce VIIRS observations. Ramadan changes night-time activity: the summers concerned are flagged.
- **Urbanisation** — The lit area depends on the detection threshold and on light blooming around cities; a connected but dimly lit neighbourhood stays invisible. Population (GHSL/WorldPop) is modelled from censuses: its growth is not an independent observation, and years between two epochs are interpolated.


---
<sub>Generated by the notebook on 2026-10-17 · version 2.1.0</sub>
