import {FunctionArgument, OnUrlUpdateResponse } from "@yext/pages";

export default function helloWorld2(request : FunctionArgument) : OnUrlUpdateResponse {
  const { pathParams, queryParams, site } = request
  console.log("OnUrlChange Running")
}