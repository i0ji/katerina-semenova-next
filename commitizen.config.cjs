"use strict";

module.exports = {
  types: [
    {
      value: "build",
      name: "build:     out builds",
    },
    {
      value: "chore",
    },
    {
      value: "ci",
      name: "ci/cd",
    },
    {
      value: "docs",
      name: "docs:      docs update",
    },
    {
      value: "feat",
      name: "feat:      add new features",
    },
    { value: "fix", name: "fix:       fix bugs" },
    {
      value: "refactor",
    },
    {
      value: "revert",
      name: "revert:    reset/revert commit",
    },
    {
      value: "style",
      name: "style:     style/implementation features",
    },
    { value: "tests" },
  ],

  scopes: [
    { name: "components" },
    { name: "environment" },
    { name: "full product" },
  ],

  messages: {
    type: "Changes type:",
    scope: "\nChoose scope:",
    customScope: "Custom scope:",
    subject: "Short description:\n",
    body: 'Full description. Use "|" for new row:\n',
    breaking: "Breaking changes:\n",
    footer:
      "Meta (issues, links):\n",
    confirmCommit: "Confirm",
  },

  allowCustomScopes: true,

  allowBreakingChanges: false,

  footerPrefix: "Version:",

  subjectLimit: 72,
};