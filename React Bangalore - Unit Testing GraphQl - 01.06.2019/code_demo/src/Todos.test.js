import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import Todos from './Todos';
import { ApolloProvider } from 'react-apollo';
import { MockedProvider } from 'react-apollo/test-utils';
import client from './Client';
import { getTodoQuery } from './queries';
import wait from 'waait';


describe("Continent List test Suite", () => {
    const mocks = [{
        request: {
            query: getTodoQuery
        },
        result: {
            "data": {
              "continents": [
                {
                  "code": "AF",
                  "name": "Africa"
                },
                {
                  "code": "AN",
                  "name": "Antarctica"
                },
                {
                  "code": "AS",
                  "name": "Asia"
                },
                {
                  "code": "EU",
                  "name": "Europe"
                },
                {
                  "code": "NA",
                  "name": "North America"
                },
                {
                  "code": "OC",
                  "name": "Oceania"
                },
                {
                  "code": "SA",
                  "name": "South America"
                }
              ]
            }
          }
    }]

    const errorMocks = [{
        request: {
            query: getTodoQuery
        },
        error: new Error("Aw!")
    }]
    it("Render the component" ,async () => {
        const {getByTestId}  = render(<MockedProvider mocks={mocks} addTypename={false}><Todos /></MockedProvider>)
        expect(getByTestId("loading")).toHaveTextContent("Loading ...")
        await wait(0)
        expect(getByTestId("success")).toHaveTextContent("List of Continents")
    })

    it("Query fails", async () => {
        const {getByTestId}  = render(<MockedProvider mocks={errorMocks} addTypename={false}><Todos /></MockedProvider>)
        expect(getByTestId("loading")).toHaveTextContent("Loading ...")
        await wait(0)
        expect(getByTestId("error")).toHaveTextContent("ERROR");
    })
})