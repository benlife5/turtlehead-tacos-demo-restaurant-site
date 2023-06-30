import {FunctionArgument, OnPageGenerateResponse } from "@yext/pages";

export default function helloWorld2(request : FunctionArgument) : OnPageGenerateResponse {
  const { pathParams, queryParams, site } = request
  console.log("onUrlChange Running")
  return {
    path: "abc",
    content: "xyz",
    redirects: []
  }
}