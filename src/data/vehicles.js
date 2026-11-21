import { IMAGES, img } from "./images.js";

/**
 * Single source of truth for the selector, the collection page,
 * the flagship showcase and every model detail page.
 * All models and figures are fictional demonstration content.
 */
export const VEHICLES = [
  {
    slug: "vxr-01",
    index: "01",
    name: "VELOCITY VXR-01",
    short: "VXR-01",
    type: "Hypercar",
    summary: "A mid-engine hypercar shaped around airflow, mass and the driver.",
    description:
      "The VXR-01 is where VELOCITY's engineering ideas meet in one car. A low, wide body is sculpted by airflow, a twin-turbo V8 sits behind the cabin, and every control is tuned for precision at speed.",
    stats: {
      power: { value: 850, unit: "HP" },
      accel: { value: 2.8, decimals: 1, unit: "SEC" },
      top: { value: 350, unit: "KM/H" },
      drivetrain: "AWD",
    },
    engine: "4.0L TWIN-TURBO V8",
    transmission: "8-SPEED DUAL-CLUTCH",
    image: IMAGES.vxrCard,
    hero: img("vxr-01-detail-hero.jpg", 2400, 1350, "VELOCITY VXR-01 hypercar on a dark studio floor, side-on", "VXR-01 hero: low side-on view, car in the right half", "70% 55%", "62% 55%"),
    designDetails: [
      { title: "Sculpted by airflow", text: "The body is drawn from the underside up, with channels and edges that guide air rather than fight it." },
      { title: "A low, wide stance", text: "A planted proportion that makes the car look fast before it moves." },
      { title: "Red as a signal", text: "Racing red appears only where function meets form: stitching, brake calipers and the rear light signature." },
    ],
    features: [
      { title: "4.0L twin-turbo V8", text: "Mounted behind the cabin for balance and tuned for sharp response across the rev range." },
      { title: "8-speed dual-clutch", text: "Fast, precise shifts that keep power delivery continuous." },
      { title: "All-wheel drive", text: "Power is distributed for traction when the road asks for it." },
      { title: "Carbon-fibre structure", text: "A rigid, lightweight tub that keeps the chassis stable and the mass low." },
    ],
    gallery: [
      img("vxr-01-g1.jpg", 2400, 1029, "VXR-01 rear diffuser and exhaust detail", "Rear diffuser and exhaust detail", "50% 60%"),
      img("vxr-01-g2.jpg", 1600, 1200, "VXR-01 cockpit with carbon steering wheel", "Cockpit, driver's view", "50% 50%"),
      img("vxr-01-g3.jpg", 1600, 1200, "VXR-01 front wheel and carbon brake detail", "Front wheel and brake detail", "50% 50%"),
    ],
  },
  {
    slug: "gt-rs",
    index: "02",
    name: "VELOCITY GT-RS",
    short: "GT-RS",
    type: "Grand Touring Coupe",
    summary: "A long-legged coupe built to cross continents at speed and in comfort.",
    description:
      "The GT-RS pairs a long bonnet with real everyday usability. Rear-wheel drive keeps the steering pure, while a quieter cabin and a settled ride make the miles pass quickly.",
    stats: {
      power: { value: 620, unit: "HP" },
      accel: { value: 3.4, decimals: 1, unit: "SEC" },
      top: { value: 310, unit: "KM/H" },
      drivetrain: "RWD",
    },
    engine: "3.5L TWIN-TURBO V6",
    transmission: "8-SPEED AUTOMATIC",
    image: IMAGES.gtCard,
    hero: img("gt-rs-hero.jpg", 2400, 1350, "VELOCITY GT-RS grand touring coupe in dark graphite, side-on", "GT-RS hero: long side profile in graphite, car in the right half", "68% 55%", "60% 55%"),
    designDetails: [
      { title: "Long bonnet, short deck", text: "Classic grand touring proportions, refined until every line feels necessary." },
      { title: "Quiet confidence", text: "Restrained surfacing and fewer lines let the shape speak without shouting." },
      { title: "A cabin made for distance", text: "Supportive seats, clear displays and controls that stay out of the way." },
    ],
    features: [
      { title: "Rear-wheel drive", text: "A direct, communicative connection between driver and road." },
      { title: "3.5L twin-turbo V6", text: "Mounted behind the front axle for a balanced, composed stance." },
      { title: "Adaptive damping", text: "A ride that relaxes on the motorway and tightens when the road twists." },
      { title: "Touring cabin", text: "Generous luggage space and low cabin noise for long journeys." },
    ],
    gallery: [
      img("gt-rs-g1.jpg", 2400, 1029, "GT-RS rear three-quarter at dusk", "Rear three-quarter at dusk", "50% 55%"),
      img("gt-rs-g2.jpg", 1600, 1200, "GT-RS leather and carbon interior", "Interior: seats and dashboard", "50% 50%"),
      img("gt-rs-g3.jpg", 1600, 1200, "GT-RS headlight and front wing detail", "Headlight and front wing detail", "50% 50%"),
    ],
  },
  {
    slug: "e-one",
    index: "03",
    name: "VELOCITY E-ONE",
    short: "E-ONE",
    type: "Electric Performance Concept",
    summary: "An electric concept that treats instant torque as a design brief.",
    description:
      "The E-ONE explores what a VELOCITY looks like without an engine: a flat floor, a low centre of gravity and a silent, immediate delivery of power.",
    stats: {
      power: { value: 780, unit: "HP" },
      accel: { value: 2.9, decimals: 1, unit: "SEC" },
      top: { value: 300, unit: "KM/H" },
      drivetrain: "AWD",
    },
    engine: "DUAL-MOTOR ELECTRIC",
    transmission: "SINGLE-SPEED",
    image: IMAGES.eCard,
    hero: img("e-one-hero.jpg", 2400, 1350, "VELOCITY E-ONE electric concept with illuminated light bar, side-on", "E-ONE hero: low side-on view with light-bar signature, car in the right half", "66% 55%", "58% 55%"),
    designDetails: [
      { title: "Clean, continuous surfaces", text: "With no grille to feed, the body is one uninterrupted form." },
      { title: "A light signature", text: "A single illuminated line defines the front and rear of the car." },
      { title: "An open, minimal cabin", text: "A flat floor and fewer physical controls create calm, usable space." },
    ],
    features: [
      { title: "Dual-motor all-wheel drive", text: "Independent front and rear motors for immediate, controlled traction." },
      { title: "Low-mounted battery", text: "Packaged beneath the floor to keep the centre of gravity low." },
      { title: "Regenerative braking", text: "Recovers energy when slowing and keeps the pedal feel consistent." },
      { title: "Selectable driving modes", text: "Software-tuned response, from relaxed to fully focused." },
    ],
    gallery: [
      img("e-one-g1.jpg", 2400, 1029, "E-ONE rear light bar at night", "Rear light bar at night", "50% 55%"),
      img("e-one-g2.jpg", 1600, 1200, "E-ONE minimal cabin with wide display", "Minimal cabin and display", "50% 50%"),
      img("e-one-g3.jpg", 1600, 1200, "E-ONE aerodynamic wheel detail", "Aero wheel detail", "50% 50%"),
    ],
  },
];

export const getVehicle = (slug) => VEHICLES.find((v) => v.slug === slug);
export const flagship = VEHICLES[0];
