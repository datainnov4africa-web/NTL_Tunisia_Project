<p align="right"><a href="methodology.md">English</a></p>

# Méthodologie — Tunisie (2014–2025)

## Données et nettoyage

VIIRS DNB mensuel (VCMSLCFG) et annuel VNL V2, DMSP–VIIRS harmonisé, Black Marble quotidien, GHSL/WorldPop, Sentinel-5P NO₂/SO₂, MODIS LST, Banque mondiale. Nettoyage : pixels valides si cf_cvg ≥ 2, unité-mois gardée si ≥ 80 % de pixels observés, pics remplacés, fond et torchères masqués.

## 📈 Cas d'usage 1 — Dynamiques temporelles

- **Question** — L'activité accélère-t-elle ou ralentit-elle, hors effet de saison ?
- **Données** — VIIRS VCMSLCFG (monthly), VIIRS VNL V2 (annual), Harmonised DMSP–VIIRS (Li et al., 2020)
- **Méthode** — STL robuste (période 12) sur log(somme des lumières) ; pente de Theil–Sen et test de Mann–Kendall sur les composites annuels ; détection d'anomalies et de ruptures.
- **Validation** — Significativité de la tendance (Mann–Kendall) et cohérence mensuel/annuel (**p-value = < 0,0001**)
- **Incertitude** — IC 95 % de la croissance annuelle : +5,0 % à +6,5 %
- **Limites** — Couverture nuageuse et nuits courtes en été ; la lumière n'est pas la valeur ajoutée.
- **Statut** — `experimental` · Confiance: élevée
- **Références** — Cleveland et al. (1990) STL ; Sen (1968) ; Elvidge et al. (2017).
- **Page du tableau de bord** — [`#time`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/?country=TUN#time)

**Résultats de cette exécution**

- `F02` Entre 2014 et 2025, la lumière nocturne de Tunisie a évolué de +6,0 % par an (IC 95 % : +5,0 % à +6,5 %). Sur les 12 derniers mois, le niveau désaisonnalisé est +4,1 % par rapport aux 12 mois précédents. (confiance élevée : tendance significative (p < 0,01 ; n = 12))
- `F76` Validation : Significativité de la tendance (Mann–Kendall) et cohérence mensuel/annuel (p-value = < 0,0001). Incertitude : IC 95 % de la croissance annuelle : +5,0 % à +6,5 % Limites : Couverture nuageuse et nuits courtes en été ; la lumière n'est pas la valeur ajoutée. Statut : statistique expérimentale ; confiance élevée.

## 🗺️ Cas d'usage 2 — Croissance régionale et convergence

- **Question** — Quelles régions décollent, lesquelles décrochent ?
- **Données** — VIIRS VNL V2, GHSL / WorldPop, Sentinel-5P NO₂
- **Méthode** — Croissance robuste par unité (Theil–Sen, Mann–Kendall), classes croissance/stagnation/déclin, β- et σ-convergence, indice de Herfindahl.
- **Validation** — Corrélation de rang avec le NO₂ troposphérique (source indépendante) (**Spearman ρ = 0,10**)
- **Incertitude** — Classe attribuée seulement si |pente| ≥ seuil et p < α ; IC de β (erreurs robustes).
- **Limites** — Petites unités : bruit et débordement de lumière (blooming) entre voisins.
- **Statut** — `experimental` · Confiance: moyenne
- **Références** — Barro et Sala-i-Martin (1992) convergence ; Henderson, Storeygard et Weil (2012).
- **Page du tableau de bord** — [`#regions`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/?country=TUN#regions)

**Résultats de cette exécution**

- `F03` Sur 264 unités ADM2, 239 sont en croissance significative, 23 stagnent et 2 déclinent. L'activité lumineuse reste concentrée : Sfax concentre 10 % de la lumière nationale. (confiance moyenne : classement sur 264 unités, seuil ±1 %/an et p < 0,10)
- `F04` Entre unités ADM2, la lumière par habitant converge : les unités les moins éclairées rattrapent leur retard. (confiance moyenne : β = −0,014 [−0,026 ; −0,003], n = 264)
- `F23` Sfax (ADM1, 2025) : part de la lumière nationale 9,7 %, croissance annuelle +6,3 % (IC +5,8 % à +6,9 %, classe Croissance), lumière par habitant 0,967, population 0,06 M, dans le noir 6 %.
- `F24` Nabeul (ADM1, 2025) : part de la lumière nationale 8,5 %, croissance annuelle +4,7 % (IC +4,0 % à +5,2 %, classe Croissance), lumière par habitant 1,023, population 0,05 M, dans le noir 2 %.

## 💹 Cas d'usage 3 — Relation lumières–PIB

- **Question** — Peut-on estimer la croissance avant sa publication, et le PIB régional ?
- **Données** — VIIRS, PIB réel (Banque mondiale, WDI)
- **Méthode** — log(lumière) ~ log(PIB) en niveaux et en croissance, MCO avec écarts-types HAC ; prévision hors échantillon ; PIB régional = PIB national réparti au prorata de la lumière.
- **Validation** — Suivi hors échantillon de la croissance officielle (**corrélation / EAM (points) = n.d. / n.d.**)
- **Incertitude** — IC 95 % de l'élasticité : n.d. à n.d. ; intervalles de prévision 80 % et 95 %.
- **Limites** — Échantillon annuel court ; le PIB régional est une statistique expérimentale à confronter aux comptes régionaux.
- **Statut** — `experimental`
- **Références** — Henderson et al. (2012) AER ; Chen et Nordhaus (2011) PNAS ; Gibson et al. (2021) JDE.
- **Page du tableau de bord** — [`#time`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/?country=TUN#time)

**Résultats de cette exécution**

- `F78` Validation : Suivi hors échantillon de la croissance officielle (corrélation / EAM (points) = n.d. / n.d.). Incertitude : IC 95 % de l'élasticité : n.d. à n.d. ; intervalles de prévision 80 % et 95 %. Limites : Échantillon annuel court ; le PIB régional est une statistique expérimentale à confronter aux comptes régionaux. Statut : statistique expérimentale ; confiance n.d..

## ⚡ Cas d'usage 4 — Chocs et résilience

- **Question** — Quelle a été la profondeur d'un choc, et la vitesse de récupération ?
- **Données** — VIIRS (monthly), Black Marble VNP46A2 (daily), catalogue d'événements
- **Méthode** — Écart au niveau d'avant-choc sur la série désaisonnalisée ; ruptures structurelles ; indice quotidien Black Marble.
- **Validation** — Le creux dépasse-t-il la variabilité ordinaire ? (**creux (choc principal) = -9,0 % — oui**)
- **Incertitude** — Variabilité mensuelle d'avant-choc (écart-type robuste) ; ruptures inexpliquées signalées.
- **Limites** — Les chocs touchant des activités peu éclairées (agriculture, services de jour) sont sous-estimés.
- **Statut** — `experimental` · Confiance: moyenne
- **Références** — Román et al. (2018) ; Elvidge et al. (2020) lumières et confinements.
- **Page du tableau de bord** — [`#shocks`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/?country=TUN#shocks)

**Résultats de cette exécution**

- `F05` Le choc le plus marqué dans la série désaisonnalisée est « COVID-19 » : creux de -9,0 % (11/2020), retour au niveau d'avant-choc après 10 mois. (confiance moyenne : creux comparé à la variabilité mensuelle d'avant-choc)
- `F50` COVID-19 (2020-03-01 → 2021-06-30) : creux de -9,0 % le 2020-11-01, retour au niveau d'avant-choc après 10 mois. Distinct du bruit : oui.
- `F51` Ruptures structurelles : 2020-03-01 (-7,6 %). Sans événement connu à ±6 mois : 0.
- `F52` Régions les plus touchées (creux) : Tunis -23,2 % (covid19), Médenine -22,0 % (covid19), El Kef -20,2 % (covid19), Gabès -19,9 % (covid19), Béja -17,2 % (covid19).

## ⚖️ Cas d'usage 5 — Inégalités et électrification

- **Question** — Où vivent les populations privées d'électricité ?
- **Données** — VIIRS VNL V2, GHSL / WorldPop, GHSL SMOD, accès à l'électricité (WDI)
- **Méthode** — Gini et Theil pondérés par la population ; population des pixels habités sous le seuil de détection ; sensibilité à trois seuils ; IC bootstrap de la variation du Gini.
- **Validation** — Écart avec le taux d'accès à l'électricité de la Banque mondiale (**écart moyen (points) = n.d.**)
- **Incertitude** — Plage selon le seuil de radiance ; IC bootstrap du Gini.
- **Limites** — Proxy de l'éclairage extérieur, pas du raccordement : un foyer raccordé mais peu éclairé paraît « dans le noir ».
- **Statut** — `experimental` · Confiance: moyenne
- **Références** — Theil (1967) ; Falchetta et al. (2020) accès à l'électricité par les lumières.
- **Page du tableau de bord** — [`#inequality`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/?country=TUN#inequality)

**Résultats de cette exécution**

- `F06` Le Gini de la lumière par habitant (ADM2) vaut 0,27 en 2025 (évolution non significative depuis 2014). Environ 0,07 million(s) de personnes vivent dans des zones habitées sans lumière détectable (12 % de la population habitée). (confiance moyenne : sensible au seuil de radiance (de 0,07 à 0,07 M selon le seuil) ; proxy d'éclairage extérieur, pas de raccordement)
- `F53` Gini de la lumière par habitant (ADM2) : 0,271 en 2014 → 0,272 en 2025 (variation 0,001, IC bootstrap -0,026 à 0,020). Theil T 0,127 ; part entre régions 37 %.
- `F54` Habitants de zones habitées sans lumière détectable : 0,06 M (13 %) en 2014 → 0,07 M (12 %) en 2025. Rapport lumière/hab. urbain/rural 0,5. Proxy de l'accès à l'électricité, sensible au seuil.
- `F80` Validation : Écart avec le taux d'accès à l'électricité de la Banque mondiale (écart moyen (points) = n.d.). Incertitude : Plage selon le seuil de radiance ; IC bootstrap du Gini. Limites : Proxy de l'éclairage extérieur, pas du raccordement : un foyer raccordé mais peu éclairé paraît « dans le noir ». Statut : statistique expérimentale ; confiance moyenne.

## 🏭 Cas d'usage 6 — Zones industrielles

- **Question** — Où est l'industrie, et son activité progresse-t-elle ?
- **Données** — VIIRS VNL V2, GHSL BUILT-S, Sentinel-5P NO₂/SO₂, MODIS MOD11A2, OpenStreetMap
- **Méthode** — Concordance de six signaux par pixel (≥ 3 dont la lumière), grappes 8-connexes, typologie et confiance.
- **Validation** — Comparaison avec la liste de référence (OpenStreetMap) (**précision / rappel / F1 = 65 % / 23 % / 0,33**)
- **Incertitude** — Confiance par grappe selon le nombre de signaux forts ; sites isolés à vérifier.
- **Limites** — Résolution de Sentinel-5P (≈ 5 km) et MODIS (1 km) : les signaux qualifient un voisinage.
- **Statut** — `experimental` · Confiance: faible
- **Références** — Elvidge et al. (2016) torchères ; Pesaresi et al. (2023) GHSL.
- **Page du tableau de bord** — [`#industry`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/?country=TUN#industry)

**Résultats de cette exécution**

- `F07` 125 grappes industrielles détectées par concordance de signaux satellitaires : 27 d'industrie lourde, 37 zones d'activités et de logistique, 30 sites d'hydrocarbures et 31 sites isolés à vérifier. Elles émettent 25,2 % de la lumière nationale (dernière année) ; leur lumière évolue de +2,8 % par an. Tunis concentre la plus forte activité industrielle. (confiance faible : précision 65 % et rappel 23 % face à la liste de référence)
- `F55` 125 grappes industrielles (≥ 3 signaux sur 6) : Zone d'activités et logistique 37, Site isolé à vérifier 31, Hydrocarbures et torchères 30, Industrie lourde 27. Part de la lumière nationale : 25,2 % ; croissance annuelle +2,8 %. Validation (OpenStreetMap) : précision 65 %, rappel 23 %.
- `F56` IND-001 — Hydrocarbures et torchères à Bab El Bhar (Tunis) (827.965 km², 3 signaux, confiance faible); IND-002 — Industrie lourde à Korba (Nabeul) (178.235 km², 4 signaux, confiance moyenne); IND-012 — Hydrocarbures et torchères à Gabes Medina (Gabès) (10.535 km², 3 signaux, confiance faible); IND-004 — Industrie lourde à Grombalia (Nabeul) (26.66 km², 4 signaux, confiance moyenne); IND-003 — Hydrocarbures et torchères à Bou Argoub (Nabeul) (27.95 km², 4 signaux, confiance moyenne); IND-008 — Site isolé à vérifier à Zaghouan (Zaghouan) (17.63 km², 3 signaux, confiance faible); IND-005 — Site isolé à vérifier à Sidi Bou Ali (Sousse) (23.865 km², 3 signaux, confiance faible); IND-007 — Site isolé à vérifier à Enfidha (Sousse) (18.92 km², 3 signaux, confiance faible); IND-013 — Site isolé à vérifier à Ez-Zeriba (Zaghouan) (9.89 km², 3 signaux, confiance faible); IND-009 — Site isolé à vérifier à Bir Mchergua (Zaghouan) (17.2 km², 3 signaux, confiance faible)
- `F57` Tunis : 2 grappe(s) industrielle(s), 828,8 km², 216,2 % de la lumière de la région.

## 🏖️ Cas d'usage 7 — Tourisme saisonnier

- **Question** — Quelles zones vivent du tourisme, et comment évolue la saison ?
- **Données** — VIIRS (monthly), nuitées ou arrivées WDI
- **Méthode** — Surcroît estival net des unités comparables de même latitude ; test unilatéral ; indice de saison base 100 ; saisons recoupant le Ramadan signalées.
- **Validation** — Corrélation avec les nuitées (**r = non disponible**)
- **Incertitude** — p-valeur par unité ; années 2020–2021 exclues du classement.
- **Limites** — Toute activité estivale (diaspora, résidences secondaires, festivals) est captée, pas seulement le tourisme.
- **Statut** — `experimental` · Confiance: faible
- **Références** — Analyses saisonnières des lumières et du tourisme, par ex. Hu et al. (2021).
- **Page du tableau de bord** — [`#tourism`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/?country=TUN#tourism)

**Résultats de cette exécution**

- `F08` 23 unités sur 264 ont un surcroît de lumière estival net d'au moins 10 % : Djerba Ajim (Médenine), Djerba Midoun (Médenine), Zarzis (Médenine), Djerba Houmet Souk (Médenine). Le surcroît net médian atteint +29 % dans la zone la plus touristique. L'indice de saison (base 100 = 2019) tombe à 83 en 2020 et vaut 128 en 2025. (confiance faible : aucune statistique de nuitées pour valider l'indicateur)
- `F69` 23 zone(s) touristique(s) sur 264 unités ADM2 (surcroît estival net ≥ 10 %, mois de pointe [7, 8]) : Djerba Ajim (Médenine) (+29 %, confiance élevée), Djerba Midoun (Médenine) (+21 %, confiance élevée), Zarzis (Médenine) (+19 %, confiance élevée), Djerba Houmet Souk (Médenine) (+19 %, confiance élevée), Hammam El Guezaz (Nabeul) (+16 %, confiance élevée), Kerkennah (Sfax) (+16 %, confiance élevée), Kelibia (Nabeul) (+15 %, confiance élevée), El Djem (Mahdia) (+14 %, confiance élevée), Mahres (Sfax) (+14 %, confiance élevée), El Bradaa (Mahdia) (+12 %, confiance élevée).
- `F70` Indice de saison (base 100 = 2019) : 2014 : 97, 2015 : 98, 2016 : 99, 2017 : 83, 2018 : 99, 2019 : 100, 2020 : 83, 2021 : 66, 2022 : 111, 2023 : 144, 2024 : 94, 2025 : 128. Années avec Ramadan chevauchant la saison : 2014, 2015, 2018, 2019, 2020, 2021, 2022, 2023.
- `F82` Validation : Corrélation avec les nuitées (r = non disponible). Incertitude : p-valeur par unité ; années 2020–2021 exclues du classement. Limites : Toute activité estivale (diaspora, résidences secondaires, festivals) est captée, pas seulement le tourisme. Statut : statistique expérimentale ; confiance faible.

## 🏙️ Cas d'usage 8 — Signaux d'urbanisation

- **Question** — Où les villes s'étendent-elles, où les villages s'électrifient-ils, et où la population croît-elle sans lumière ?
- **Données** — VIIRS VNL V2, GHSL GHS-POP / WorldPop, GHSL GHS-BUILT-S R2023A, population urbaine (WDI)
- **Méthode** — Surface éclairée (pixels au-dessus du seuil) et population par unité ; croissances de Theil–Sen ; pixels nouvellement éclairés (sombres deux années de suite au début, éclairés deux années de suite à la fin), séparés entre électrification de zones habitées et nouvelles implantations ; typologie lumière/population.
- **Validation** — Corrélation de rang avec la croissance de la surface bâtie GHSL (source indépendante) (**Spearman ρ = 0,34**)
- **Incertitude** — Persistance exigée sur deux années pour limiter le bruit ; marge de ± 1 point entre croissances avant de classer.
- **Limites** — La lumière mesure l'éclairage extérieur, pas l'urbanisation au sens administratif ; le débordement (blooming) élargit les villes ; la population GHSL est interpolée entre époques.
- **Statut** — `experimental` · Confiance: faible
- **Références** — Zhou et al. (2015) étendue urbaine par les lumières ; Pesaresi et al. (2023) GHSL ; Min et al. (2013) électrification des villages.
- **Page du tableau de bord** — [`#urban`](https://datainnov4africa-web.github.io/NTL_Tunisia_Project/?country=TUN#urban)

**Résultats de cette exécution**

- `F71` Surface éclairée nationale : +9,1 % par an ; population : +0,9 % par an. Classes (ADM2) : Urbanisation électrifiée 190, Croissance non éclairée 38, Stable ou en déclin 29, Croissance équilibrée 7.
- `F72` Entre 2014 et 2025 : 15 081 km² nouvellement éclairés, dont 109 km² de zones déjà habitées (électrification, ≈ 4 k habitants) et 14 972 km² de nouvelles implantations ; 281 km² ont perdu leur lumière.
- `F73` Plus forte extension de la surface éclairée : Bargou (Siliana) (+33,3 %/an), Sidi Aïch (Gafsa) (+28,9 %/an), Mezzouna (Sidi Bouzid) (+28,6 %/an), Bir Ali Ben Kelifa (Sfax) (+24,3 %/an), Ghraiba (Sfax) (+24,0 %/an), Hassi Ferid (Kasserine) (+23,3 %/an). Croissance non éclairée (population plus rapide que la lumière) : Fouchana (Ben Arous), La Marsa (Tunis), Ben Arous (Ben Arous), El Mnihla (Ariana), Mannouba (Manouba), Ksar Helal (Monastir), Tina (Sfax), Teboulba (Monastir).
- `F74` Corrélation de rang (Spearman) entre croissance de la surface éclairée et croissance du bâti GHSL : 0,34 (p = 0,000, 264 unités).

## Limites générales des lumières nocturnes

- **Ce que mesurent les lumières** — Radiance émise vers le haut vers 01 h 30 : l'agriculture, le commerce de jour, les services peu éclairés et l'économie informelle rurale sont mal captés.
- **Saturation et débordement** — DMSP sature au centre des villes (DN 63) et « déborde » (blooming) ; VIIRS est bien meilleur mais le débordement gonfle encore la surface éclairée des villes.
- **Torchères et sites isolés** — Le masque automatique peut retirer des mines, ports ou centrales isolés, et manquer de petites torchères ; les candidats sont exportés pour vérification.
- **Nuages, saisons, lune** — Les mois nuageux sont partiellement observés ; la STL retire la saisonnalité moyenne mais pas une saison anormale (neige, mousson tardive).
- **Ruptures de produit** — DMSP et VIIRS ne sont pas directement comparables : la série longue harmonisée (Li et al., 2020) est un produit modélisé, à lire en tendance seulement.
- **Élasticité NTL–PIB** — Estimée sur 10 à 30 points annuels : intervalles larges, instabilité possible, relation non causale et variable selon le niveau de développement.
- **Accès à l'électricité** — « Habité sans lumière » ≠ « non raccordé » : un foyer raccordé à faible consommation est invisible ; l'indicateur dépend fortement du seuil de radiance et de la population.
- **Limites administratives** — geoBoundaries/GAUL peuvent différer des limites officielles ; les petites unités ADM2 sont sensibles au débordement de la lumière des voisines.
- **Zones industrielles** — La détection repose sur des seuils : une centrale, un port ou un grand centre commercial peut cumuler les signaux ; une usine peu éclairée ou sans émissions visibles échappe à la détection. Sentinel-5P (≈ 5 km) et MODIS (1 km) sont plus grossiers que VIIRS : les signaux NO₂/SO₂/chaleur qualifient un voisinage, pas un bâtiment.
- **Tourisme estival** — Le surcroît estival mesure toute hausse de lumière en été (résidences secondaires, diaspora, fêtes, chantiers), pas seulement le tourisme ; aux hautes latitudes, les nuits d'été très courtes réduisent les observations VIIRS. Le Ramadan modifie l'activité nocturne : les étés concernés sont signalés.
- **Urbanisation** — La surface éclairée dépend du seuil de détection et du débordement de lumière (blooming) autour des villes ; un quartier raccordé mais peu éclairé reste invisible. La population (GHSL/WorldPop) est modélisée à partir des recensements : sa croissance n'est pas une observation indépendante, et les années entre deux millésimes sont interpolées.


---
<sub>Généré par le notebook le 2026-10-24 · version 2.1.0</sub>
