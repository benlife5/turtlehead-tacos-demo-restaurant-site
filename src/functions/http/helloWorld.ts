import {HttpFunctionArgument, HttpFunctionResponse } from "@yext/pages";

export default function helloWorld2(request : HttpFunctionArgument) : HttpFunctionResponse {
  const { pathParams, queryParams, site } = request

  return {
    body: "Hello World 2",
    headers: {},
    statusCode: 200
  }
}