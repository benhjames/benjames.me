/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
  poweredByHeader: false,
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60,
  },
});
