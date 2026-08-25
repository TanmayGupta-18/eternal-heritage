import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "eternal-heritage";
const basePath = `/${repositoryName}/`;
const destination = resolve("dist/404.html");

const fallbackDocument = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <title>Eternal Heritage</title>
    <script>
      (function () {
        var basePath = ${JSON.stringify(basePath)};
        var path = window.location.pathname;
        var route = path.indexOf(basePath) === 0 ? path.slice(basePath.length) : path.replace(/^\\/+/, "");
        var query = window.location.search || "";
        window.location.replace(basePath + "#/" + route + query);
      })();
    </script>
  </head>
  <body></body>
</html>`;

await mkdir(dirname(destination), { recursive: true });
await writeFile(destination, fallbackDocument, "utf8");
