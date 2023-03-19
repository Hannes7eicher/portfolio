import Card from './Card'

export default function Section() {
    return (
      <div className="grid-container grid grid-cols-1 justify-items-center gap-y-32 sm:gap-y-64 p-8 bg-white">
          <Card title={"Arduino Plant Watering Kit"} subtitle={"Check on your plants from anywhere even when you're not around."} image={"plantKit.png"} />
          <Card title={"Arduino IoT Energy Meter"} subtitle={"Become more aware of consumption by monitoring your energy meter with an Arduino."} image={"energyMeter.png"} />

      </div>
    );
}