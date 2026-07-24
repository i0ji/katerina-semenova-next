'use strict';

module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:     A new feature (correlates with MINOR in SemVer)',
    },
    {
      value: 'fix',
      name: 'fix:      A bug fix (correlates with PATCH in SemVer)',
    },
    {
      value: 'docs',
      name: 'docs:     Documentation only changes',
    },
    {
      value: 'style',
      name: 'style:    Code style changes (formatting, semicolons, etc.)',
    },
    {
      value: 'refactor',
      name: 'refactor: Code refactoring (neither fix nor feature)',
    },
    {
      value: 'perf',
      name: 'perf:     Performance improvements',
    },
    {
      value: 'test',
      name: 'test:     Adding or correcting tests',
    },
    {
      value: 'build',
      name: 'build:    Build system, dependencies, or tools',
    },
    {
      value: 'ci',
      name: 'ci:       CI/CD configuration or automation',
    },
    {
      value: 'chore',
      name: 'chore:    Maintenance tasks (no production code change)',
    },
    {
      value: 'revert',
      name: 'revert:   Revert a previous commit',
    },
  ],

  scopes: [
    { name: 'components' },
    { name: 'environment' },
    { name: 'full product' },
  ],

  messages: {
    type: 'Changes type:',
    scope: '\nChoose scope:',
    customScope: 'Custom scope:',
    subject: 'Short description:\n',
    body: 'Full description. Use "|" for new row:\n',
    breaking: 'Breaking changes:\n',
    footer: 'Meta (version, issues):\n',
    confirmCommit: 'Confirm',
  },

  allowCustomScopes: true,
  allowBreakingChanges: false,
  footerPrefix: 'Version:',
  subjectLimit: 72,
};'use strict';

module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:     A new feature (correlates with MINOR in SemVer)',
    },
    {
      value: 'fix',
      name: 'fix:      A bug fix (correlates with PATCH in SemVer)',
    },
    {
      value: 'docs',
      name: 'docs:     Documentation only changes',
    },
    {
      value: 'style',
      name: 'style:    Code style changes (formatting, semicolons, etc.)',
    },
    {
      value: 'refactor',
      name: 'refactor: Code refactoring (neither fix nor feature)',
    },
    {
      value: 'perf',
      name: 'perf:     Performance improvements',
    },
    {
      value: 'test',
      name: 'test:     Adding or correcting tests',
    },
    {
      value: 'build',
      name: 'build:    Build system, dependencies, or tools',
    },
    {
      value: 'ci',
      name: 'ci:       CI/CD configuration or automation',
    },
    {
      value: 'chore',
      name: 'chore:    Maintenance tasks (no production code change)',
    },
    {
      value: 'revert',
      name: 'revert:   Revert a previous commit',
    },
  ],

  scopes: [
    { name: 'components' },
    { name: 'environment' },
    { name: 'full product' },
  ],

  messages: {
    type: 'Changes type:',
    scope: '\nChoose scope:',
    customScope: 'Custom scope:',
    subject: 'Short description:\n',
    body: 'Full description. Use "|" for new row:\n',
    breaking: 'Breaking changes:\n',
    footer: 'Meta (version, issues):\n',
    confirmCommit: 'Confirm',
  },

  allowCustomScopes: true,
  allowBreakingChanges: false,
  footerPrefix: 'Version:',
  subjectLimit: 72,
};