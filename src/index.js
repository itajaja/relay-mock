import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';

export default class MockNetworkLayer {
  constructor(...args) {
    this.schema = makeExecutableSchema({ typeDefs: args[0] });

    addMockFunctionsToSchema({ schema: this.schema });
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

  sendQuery = queryRequest => {
    const query = queryRequest.getQueryString();
    const variables = queryRequest.getVariables();

    return graphql(this.schema, query, {}, {}, variables).then(response => {
      request.resolve({
        response: response.data,
      });
    });
  }
}
