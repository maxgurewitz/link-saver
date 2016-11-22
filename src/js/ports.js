function createLink(href) {
  console.log('href', href);
}

module.exports = {
  subscriptions: {
    createLink: createLink
  }
};
