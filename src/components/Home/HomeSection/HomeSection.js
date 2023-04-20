import HomeCard from "./HomeCard/HomeCard";

export default function HomeSection() {
    return (
      <div className="relative grid-container grid grid-cols-1 justify-items-end p-8 sm:pr-64 sm:pt-[80vh] gap-y-32 sm:gap-y-64 pb-32 bg-transparent">
          <HomeCard 
          title="Arduino Plant Watering Kit" 
          subtitle="Check on your plants from anywhere even when you're not around." 
          image="plantKit.png" 
          route="/Plantkit"
          />
          <HomeCard 
          title="Arduino IoT Energy Meter"
          subtitle="Become more aware of consumption by monitoring your energy." 
          image="energyMeter.png" 
          route="/EnergyMeter"
          />
          <HomeCard 
          title="Olfactory Display"
          subtitle="Exploring olfactory interaction in virtual environments" 
          image="OlfactoryHero.png" 
          route="/OlfactoryDisplay"
          />
          <HomeCard 
          title="CriticalDesign"
          subtitle="A critical design concept evoking angry emotions" 
          image="CriticalDesign.png" 
          route="/CriticalDesign"
          />
      </div>
    );
}