import PageHero from "../components/common/PageHero";
import ModelCard from "../components/models/ModelCard";
import CtaBand from "../components/common/CtaBand";
import { VEHICLES } from "../data/vehicles";

export default function Models() {
  return (
    <>
      <PageHero label="Velocity" title="The collection." intro="Three concepts, one idea: performance without compromise. Select a model to see its full specification." />
      {VEHICLES.map((v, i) => (
        <ModelCard key={v.slug} v={v} index={i} />
      ))}
      <CtaBand title="Not sure which one is yours?" copy="Tell us how you like to drive and we will point you to the right model." to="/contact" cta="Start an enquiry" />
    </>
  );
}
