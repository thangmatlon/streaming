require("dotenv/config");
const { launcher } = require("@loybung/launcher");

const launcherObject = {
  url: "https://loybung-api.vercel.app/project/streaming",
  filepath: "app.js",
};

launcher(launcherObject, async (run) => {
  await run();
});
