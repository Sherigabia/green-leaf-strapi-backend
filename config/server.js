module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['DvD1GKKM4lZZ8rt9n1uxXw==','g5t5hC4PeauzmIyhcDaTnw==', 'kXcaDfWqjqrqscxYp7omSA==', 'dnWSdNFotF1d7gth0CRQdQ==']),
  },
});
