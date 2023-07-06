import {FunctionArgument, OnUrlChangeResponse } from "@yext/pages";

export default function helloWorld2(request : FunctionArgument) : OnUrlChangeResponse {
  const { pathParams, queryParams, site } = request
  console.log("OnUrlChange Running")
}