/**
 * Central image manifest.
 * Drop licensed photographs into /public/images using the file names below.
 * Until a file exists, a clearly marked placeholder slot is shown instead.
 * `pos` / `posM` are object-position values for desktop/tablet and mobile crops.
 */
export const img = (file, w, h, alt, label, pos = "50% 50%", posM = pos) => ({
  src: `/images/${file}`,
  file,
  w,
  h,
  alt,
  label,
  pos,
  posM,
});


export const IMAGES = {
  heroVxr: img("1.jpg", 2400, 1350, "VELOCITY VXR-01 hypercar in black and red, low front three-quarter view", "Black and red hypercar, low front three-quarter, dark studio. Keep the car in the right half of the frame.", "72% 50%", "66% 50%"),
  introDetail: img("2.jpg", 1600, 2000, "Close-up of carbon fibre weave with red stitching", "Macro detail: carbon-fibre weave with red stitching"),
  flagship: img("3.jpg", 2000, 1250, "VELOCITY VXR-01 in full side profile in a dark studio", "Full side profile, car filling about 80% of the frame width", "50% 55%"),
  vxrCard: img("4.jpg", 1800, 1125, "VELOCITY VXR-01 hypercar, front three-quarter", "VXR-01 hypercar, front three-quarter, black and red", "60% 55%"),
  gtCard: img("5.jpg", 1800, 1125, "VELOCITY GT-RS grand touring coupe, front three-quarter", "GT-RS grand touring coupe, long bonnet, dark graphite paint", "55% 55%"),
  eCard: img("6.jpg", 1800, 1125, "VELOCITY E-ONE electric performance concept, front three-quarter", "E-ONE electric concept, closed grille, light-bar signature", "50% 55%"),
  engAero: img("7.jpg", 1600, 1280, "Rear diffuser and aerodynamic bodywork detail", "Rear diffuser and aero detail"),
  engPower: img("8.jpg", 1600, 1280, "Twin-turbo V8 engine bay detail", "Twin-turbo V8 engine bay detail"),
  engLight: img("9.jpg", 1600, 1280, "Exposed carbon-fibre monocoque structure", "Exposed carbon-fibre monocoque"),
  engDriver: img("1.jpg", 1600, 1280, "Driver-focused cockpit with steering wheel and display", "Cockpit: steering wheel and instrument display"),
  design: img("4.jpg", 2400, 1200, "Sculpted body surface catching light along the flank", "Wide, dark side-on flank shot with a single strip of light on the bodywork", "50% 50%", "40% 50%"),
  finalRear: img("9.jpg", 2400, 1200, "Rear view of a VELOCITY hypercar on an empty road at dusk", "Rear view, hypercar on an empty road at dusk, red tail-light bar", "50% 60%", "50% 60%"),
  storyHero: img("3.jpg", 2400, 1029, "VELOCITY design studio with a full-size clay model", "Design studio with a full-size clay model under work lights"),
  storyDetail: img("6.jpg", 1600, 1200, "Technical sketches and airflow studies pinned to a studio wall", "Sketches and airflow studies on a studio wall"),
  techHero: img("5.jpg", 2400, 1029, "Airflow visualisation around a sports car in a wind tunnel", "Wind-tunnel smoke visualisation around a car body"),
};

