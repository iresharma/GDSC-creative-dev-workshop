const DARK_ICON = "lni-night";
const LIGHT_ICON = "lni-sun";

const switchButton = document.querySelector("#switch-button");

if (halfmoon.getPreferredMode() == "light-mode") {
  switchButton.classList.add(DARK_ICON);
} else if (halfmoon.getPreferredMode() == "dark-mode") {
  switchButton.classList.add(LIGHT_ICON);
} else if (halfmoon.getPreferredMode() == "not-set") {
  switchButton.classList.add(LIGHT_ICON);
}

const switchTheme = () => {
  halfmoon.toggleDarkMode();
  if (halfmoon.getPreferredMode() == "light-mode") {
    switchButton.classList.remove(LIGHT_ICON);
    switchButton.classList.add(DARK_ICON);
  } else if (halfmoon.getPreferredMode() == "dark-mode") {
    switchButton.classList.remove(DARK_ICON);
    switchButton.classList.add(LIGHT_ICON);
  }
};

gsap.registerPlugin(TextPlugin);
const restart = (position) => globalTimeline.play(position);

const globalTimeline = gsap.timeline({
  onComplete: restart,
  onCompleteParams: [4],
});
const navItems = gsap.utils.toArray(".nav-item");

globalTimeline
  .fromTo(
    "#logo-left",
    { scale: 10, x: "100vw", y: "50vh" },
    { scale: 5, x: "47vw", y: "50vh", duration: 1.5 }
  )
  .fromTo(
    "#logo-right",
    { scale: 10, x: "-10vw", y: "50vh" },
    { scale: 5, x: "53vw", y: "50vh", duration: 1.5 },
    "<0"
  )
  .to("#logo-left", { scale: 1, x: 0, y: 0, duration: 0.5 })
  .to("#logo-right", { scale: 1, x: 0, y: 0, duration: 0.5 }, "<0")
  .from(navItems, { opacity: 0, y: "-100%" })
  .from(".content-wrapper", { opacity: 0, duration: 0.5 }, "-=0.3");

const words = [
  "a team of motivated individuals.",
  "builders.",
  "developers.",
  "creators.",
];

const colors = ["#eb4132", "#0b9e57", "#fbbe00", "#3f87f5"];

let cursor = gsap.to(".cursor", {
  opacity: 0,
  ease: "power2.inOut",
  repeat: -1,
});

words.forEach((word) => {
  var color = colors[Math.floor(Math.random() * colors.length)];
  let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
  tl.to(".text", { duration: 1, text: word, color });
  globalTimeline.add(tl);
});
