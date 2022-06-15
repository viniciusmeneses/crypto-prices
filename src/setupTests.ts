import "@testing-library/jest-dom";

import { apolloClient } from "./graphql";
import { graphqlServer } from "./mocks";

beforeAll(() => graphqlServer.listen());
beforeEach(() => apolloClient.clearStore());
afterEach(() => graphqlServer.resetHandlers());
afterAll(() => graphqlServer.close());
