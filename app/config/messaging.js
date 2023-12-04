const sharedConfig = {
  appInsights: require('applicationinsights'),
  host: process.env.SERVICE_BUS_HOST,
  password: process.env.SERVICE_BUS_PASSWORD,
  username: process.env.SERVICE_BUS_USER,
  useCredentialChain: process.env.NODE_ENV === 'production'
}

module.exports = {
  submissionSubscription: {
    address: process.env.NOTIFY_SUBMITTED_SUBSCRIPTION_ADDRESS,
    topic: process.env.NOTIFY_SUBMITTED_TOPIC_ADDRESS,
    type: 'subscription',
    ...sharedConfig
  },
  msgSrc: 'ffc-ahwr-notification'
}
