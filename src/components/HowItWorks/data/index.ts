/* Assets */
import assets from "../assets";

const data = {
  om: {
    steps: [
      {
        title: "We ship the sensors",
        description:
          "The sensors are delivered in your site and you don`t need to go throught industrial Wi-fi or talk to IT departments.",
        image: assets.om[1],
      },
      {
        title: "Attach to your machine",
        description:
          "The sensors are delivered in your site and you don`t need to go throught industrial Wi-fi or talk to IT departments.",
        image: assets.om[2],
      },
      {
        title: "Get valuable insights",
        description:
          "Our system centralizes accurate information about your machines, with insights and analyzes, such as equipment health, anomaly detection and machine spectrum degradation.",
        image: assets.om[3],
      },
    ],
  },
  am: {
    steps: [
      {
        title: "Send us your list of Assets, Places and Users",
        description:
          "We make the platform ready and organized for you, preparing your plant and assets following the layout sent to us, as well as your registered maintainers on the platform.",
        image: assets.am[1],
      },
      {
        title: "Automate your Work Plans and Work Orders",
        description:
          "Use online procedures to organize checklists and inspections. Sequencing and planning Work Orders preemptively has never been easier.",
        image: assets.am[2],
      },
      {
        title: "Replace Excel completely",
        description:
          "The platform will open the Work Orders and distribute them according to the configured automations, allowing the entire maintenance team to worry only about performing their routine activities.",
        image: assets.am[3],
      },
    ],
  },
};

export default data;
