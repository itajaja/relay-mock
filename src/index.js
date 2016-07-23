import { mockServer } from 'graphql-tools';

export default class MockNetworkLayer {
  constructor(...args) {
    this.server = mockServer(...args);
  }

  supports() {
    return false;
  }

  sendMutation() {
    throw new Error('mutations are not supporeted yet');
  }

  sendQueries(queryRequests) {
    return Promise.all(queryRequests.map(this.sendQuery));
  }

  sendQuery = async queryRequest => {
    const query = queryRequest.getQueryString();
    const variables = queryRequest.getVariables();

    return this.server.query(query, variables)
      .then(({ data }) => queryRequest.resolve({ response: data }));
  }
}
