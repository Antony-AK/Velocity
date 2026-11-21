import { IMAGES } from "./images.js";

export const NAV = [
  { to: "/models", label: "Models" },
  { to: "/technology", label: "Technology" },
  { to: "/story", label: "Our Story" },
];

export const ENGINEERING = [
  {
    no: "01",
    title: "Aerodynamics",
    text: "Every contour is shaped to balance airflow, stability, and performance.",
    long: "Airflow shapes the VELOCITY silhouette before any surface is styled. The underbody, the rear diffuser and every edge are drawn to keep the car stable as speed rises.",
    points: ["Flat underbody with a rear diffuser", "Integrated rear wing element", "Cooling openings shaped around airflow"],
    image: IMAGES.engAero,
    caption: "Rear diffuser detail",
  },
  {
    no: "02",
    title: "Powertrain",
    text: "Engineered power delivery designed for precision and responsiveness.",
    long: "Each VELOCITY powertrain is tuned for how power arrives, not only how much. Throttle response, gearing and traction are calibrated together.",
    points: ["Twin-turbo V8 and V6 concepts", "Dual-clutch and automatic transmissions", "Dual-motor electric concept"],
    image: IMAGES.engPower,
    caption: "Twin-turbo V8 engine bay",
  },
  {
    no: "03",
    title: "Lightweight Construction",
    text: "Advanced materials designed to reduce mass and improve agility.",
    long: "Mass is the enemy of agility. Structure and body panels are built from advanced materials, and weight is kept low and close to the centre of the car.",
    points: ["Carbon-fibre passenger cell", "Aluminium subframes", "Weight kept low and centred"],
    image: IMAGES.engLight,
    caption: "Carbon-fibre monocoque",
  },
  {
    no: "04",
    title: "Driver Experience",
    text: "Technology that connects the driver with the machine.",
    long: "The cockpit is built around the person driving. Information is clear and minimal, and every control sits where a hand expects to find it.",
    points: ["Driver-focused cockpit layout", "Minimal, glare-resistant displays", "Controls placed where hands expect them"],
    image: IMAGES.engDriver,
    caption: "Cockpit and instrument display",
  },
];

export const DISCLAIMER =
  "VELOCITY is a fictional brand. All models, specifications and performance figures are concept content for demonstration only.";
