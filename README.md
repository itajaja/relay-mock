# relay-mock

A `NetworkLayer` around [mockServer](https://github.com/apollostack/graphql-tools) to serve mock data locally.

```js
import RelayMockNetworkLayer from 'relay-mock';

import mySchema from 'mySchema.graphql';

const environment = new Relay.Environment();
const networkLayer = new RelayMockNetworkLayer(mySchema);
environment.injectNetworkLayer(networkLayer)
```

The arguments to `RelayMockNetworkLayer` are the same of `mockServer` ([documentation](http://docs.apollostack.com/apollo-server/mocking.html), [example](https://github.com/apollostack/mock-demo))
