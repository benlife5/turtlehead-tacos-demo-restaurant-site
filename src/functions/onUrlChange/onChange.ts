import {FunctionArgument, OnUrlChangeResponse } from "@yext/pages";

export default function onChange(request : FunctionArgument) : OnUrlChangeResponse {
  const { pathParams, queryParams, site } = request
  console.log("OnUrlChange Running")
}