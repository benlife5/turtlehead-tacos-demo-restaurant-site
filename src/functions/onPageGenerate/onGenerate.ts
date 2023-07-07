import {FunctionArgument, OnPageGenerateResponse } from "@yext/pages";

export default function onGenerate(request : FunctionArgument) : OnPageGenerateResponse {
  const { pathParams, queryParams, site } = request
  console.log("onGenerate Running " + request.feature)
  const slug =  request.streamOutput.slug ?? request.feature
  console.log(slug)
  return {
    path: slug + "-special",
    content: request.feature + " Page",
    redirects: []
  }
}