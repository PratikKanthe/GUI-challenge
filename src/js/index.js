alert("dont scroll 🔪");

// arrow keys
document
  .querySelector(".horizontal-media-scroller")

  .forEach((scroller) =>
    rovingIndex({
      element: scroller,
      target: "a",
    })
  );

import { t as e } from "./vendor.js";
!(function (e = ".", o = "__import__") {
  try {
    self[o] = new Function("u", "return import(u)");
  } catch (t) {
    const r = new URL(e, location),
      n = (e) => {
        URL.revokeObjectURL(e.src), e.remove();
      };
    (self[o] = (e) =>
      new Promise((t, l) => {
        const a = new URL(e, r);
        if (self[o].moduleMap[a]) return t(self[o].moduleMap[a]);
        const c = new Blob(
            [`import * as m from '${a}';`, `${o}.moduleMap['${a}']=m;`],
            { type: "text/javascript" }
          ),
          m = Object.assign(document.createElement("script"), {
            type: "module",
            src: URL.createObjectURL(c),
            onerror() {
              l(new Error(`Failed to import: ${e}`)), n(m);
            },
            onload() {
              t(self[o].moduleMap[a]), n(m);
            },
          });
        document.head.appendChild(m);
      })),
      (self[o].moduleMap = {});
  }
})("assets/");
document
  .querySelectorAll(".horizontal-media-scroller")
  .forEach((o) => e({ element: o, target: "a" }));
