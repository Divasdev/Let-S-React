#!/bin/bash
cd "/Users/divassharma/Desktop/LET'S-REACT/Aero-Radar"

files=(
  "package.json"
  "package-lock.json"
  "src/App.jsx"
  "src/pages/LandingPage.jsx"
  "src/pages/AirportPage.jsx"
  "src/components/NavBar/NavBar.jsx"
  "src/components/NavBar/NavBar.css"
  "src/components/AirportPage/AirlinesOperating.jsx"
  "src/components/AirportPage/AirportInfoCard.jsx"
  "src/components/AirportPage/AirportSearch.jsx"
  "src/components/AirportPage/DelayTrendChart.jsx"
  "src/components/AirportPage/PopularRoutes.jsx"
  "src/components/AirportPage/TerminalStatus.jsx"
  "src/components/AirportPage/WeatherTelemetry.jsx"
  "src/components/LandingPage/AirportIntelligenceSection/Airport.jsx"
  "src/components/LandingPage/AirportIntelligenceSection/AirportCard.jsx"
  "src/components/LandingPage/AirportIntelligenceSection/AirportSectionHeader.jsx"
  "src/components/LandingPage/AirportIntelligenceSection/LiveBroadcastBadge.jsx"
  "src/components/LandingPage/FAQ/FAQ.css"
  "src/components/LandingPage/FAQ/FAQ.jsx"
  "src/components/LandingPage/FAQ/FAQitem.jsx"
  "src/components/LandingPage/FeaturesSection/FeaturesSection.jsx"
  "src/components/LandingPage/FeaturesSection/MLCard.jsx"
  "src/components/LandingPage/FeaturesSection/NotificationCard.jsx"
  "src/components/LandingPage/FeaturesSection/TowerCard.jsx"
  "src/components/LandingPage/FeaturesSection/TrackAircraft.jsx"
  "src/components/LandingPage/HeroSection/HeroBadge.jsx"
  "src/components/LandingPage/HeroSection/HeroCard.jsx"
  "src/components/LandingPage/HeroSection/HeroHeader.jsx"
  "src/components/LandingPage/HeroSection/HeroSection.jsx"
  "src/components/LandingPage/Imports/ImportsItems.jsx"
  "src/components/LandingPage/Imports/SeamlessImports.jsx"
  "src/components/LandingPage/RadarSection/LiveGlobalReach.jsx"
  "src/components/LandingPage/RadarSection/RadarCards.jsx"
  "src/components/LandingPage/RadarSection/RadarDescription.jsx"
  "src/components/LandingPage/RadarSection/RadarSection.jsx"
  "src/components/LandingPage/TravelStatsSection/FlightChart.jsx"
  "src/components/LandingPage/TravelStatsSection/PassportPreview.jsx"
  "src/components/LandingPage/TravelStatsSection/StatsCard.jsx"
  "src/components/LandingPage/TravelStatsSection/TravelStatsSection.jsx"
  "src/components/LandingPage/TravelStatsSection/WorldMapCard.jsx"
)

git add -A src/components/AirportIntelligenceSection
git commit -m "chore: remove old AirportIntelligenceSection folder"
git add -A src/components/FAQ
git commit -m "chore: remove old FAQ folder"
git add -A src/components/FeaturesSection
git commit -m "chore: remove old FeaturesSection folder"
git add -A src/components/HeroSection
git commit -m "chore: remove old HeroSection folder"
git add -A src/components/Imports
git commit -m "chore: remove old Imports folder"
git add -A src/components/NavBar.css
git commit -m "chore: remove old NavBar.css"
git add -A src/components/NavBar.jsx
git commit -m "chore: remove old NavBar.jsx"
git add -A src/components/RadarSection
git commit -m "chore: remove old RadarSection folder"
git add -A src/components/TravelStatsSection
git commit -m "chore: remove old TravelStatsSection folder"

for i in "${!files[@]}"; do
  file="${files[$i]}"
  if [ -f "$file" ]; then
    git add "$file"
    git commit -m "refactor: update structure for $(basename "$file")"
  fi
done

git push origin main
