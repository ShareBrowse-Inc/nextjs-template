module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: "yarn start 8081",
      url: ["http://localhost:8081/"],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
