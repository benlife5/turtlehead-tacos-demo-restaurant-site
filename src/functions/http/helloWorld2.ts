import {FunctionConfig, FunctionArgument, FunctionReturnValue } from "@yext/pages";

export default function helloWorld2(request : FunctionArgument) : FunctionReturnValue {
  const { pathParams, queryParams, site } = request

  return {
    body: "Hello World 2",
    headers: {},
    statusCode: 200
  }
}

export const config: FunctionConfig = {
  name: "helloWorld2",
};

export const getPath = () => {
  return 'abc/:def';
};