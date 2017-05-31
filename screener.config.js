module.exports = {
  apiKey: process.env.SCREENER_API_KEY,
  projectRepo: 'loyalchow/screener-v2-test',
  failureExitCode: 0,
  states: [
    {
      url: 'https://screener.io',
      name: 'Home'
    }
  ]
};
