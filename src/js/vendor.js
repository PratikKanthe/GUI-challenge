const e = new Map(),
  t = ({ element: t, target: d }) => {
    const c = t.querySelectorAll(d || ":scope *"),
      i = c[0];
    (t.tabIndex = -1),
      c.forEach((e) => (e.tabIndex = -1)),
      (i.tabIndex = 0),
      e.set(t, { targets: c, active: i, index: 0 }),
      t.addEventListener("focusin", (n) => {
        e.get("last_rover") != t &&
          (s(t, e.get(t).active), e.set("last_rover", t));
      }),
      t.addEventListener("keydown", (e) => {
        switch (e.keyCode) {
          case 39:
            e.preventDefault(), n(t);
            break;
          case 37:
            e.preventDefault(), a(t);
        }
      });
  },
  n = (t) => {
    const n = e.get(t);
    (n.index += 1),
      n.index > n.targets.length - 1 && (n.index = n.targets.length - 1);
    let a = n.targets[n.index];
    a && s(t, a);
  },
  a = (t) => {
    const n = e.get(t);
    (n.index -= 1), n.index < 1 && (n.index = 0);
    let a = n.targets[n.index];
    a && s(t, a);
  },
  s = (t, n) => {
    const a = e.get(t);
    (a.active.tabIndex = -1),
      (a.active = n),
      (a.active.tabIndex = 0),
      a.active.focus();
  };
export { t };
