import { watch } from "chokidar";
import { execSync } from "child_process";

const watcher = watch(["index.html", "css/style.css"], { ignoreInitial: true });

let timer = null;
watcher.on("change", () => {
  clearTimeout(timer);
  timer = setTimeout(() => execSync("node scripts/generate-pdf.js", { stdio: "inherit" }), 500);
});
