module.exports = {
  apiKey: process.env.SCREENER_API_KEY,
  projectRepo: 'loyalchow/screener-v2-test',
  failureExitCode: 0,
  branch: process.env.TRAVIS_PULL_REQUEST_BRANCH || process.env.TRAVIS_BRANCH,
  commit: process.env.TRAVIS_PULL_REQUEST_SHA || process.env.TRAVIS_COMMIT
  states: [
    {
      url: 'https://screener.io',
      name: 'Home'
    }
  ]
};
