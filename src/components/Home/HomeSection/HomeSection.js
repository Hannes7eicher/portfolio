import HomeCard from "./HomeCard/HomeCard";

export default function HomeSection() {
    return (
      <div className="relative grid-container grid grid-cols-1 justify-items-center gap-y-32 sm:gap-y-64 p-8 bg-transparent">
          <HomeCard title="Arduino Plant Watering Kit" subtitle="Check on your plants from anywhere even when you're not around." image="plantKit.png" />
          <HomeCard title="Arduino IoT Energy Meter" subtitle="Become more aware of consumption by monitoring your energy meter with an Arduino." image="energyMeter.png" />

      </div>
    );
}