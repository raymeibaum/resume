import puppeteer from "puppeteer";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = resolve(__dirname, "../index.html");
const pdfPath = resolve(__dirname, "../ray-meibaum-resume.pdf");

const now = () => new Date().toLocaleTimeString();

console.log(`[${now()}] Generating PDF...`);

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.emulateMediaType("print");
await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle0" });
await page.pdf({
  path: pdfPath,
  format: "Letter",
  printBackground: true,
  margin: { top: "0.2in", right: "0.35in", bottom: "0.2in", left: "0.35in" },
});
await browser.close();

console.log(`[${now()}] PDF written to ray-meibaum-resume.pdf`);
