const next = require("eslint-config-next");

module.exports = [
  {
    ignores: ["dist"],
  },
  {
    ...next,
  },
];
