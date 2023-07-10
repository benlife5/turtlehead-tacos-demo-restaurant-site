// import {OnPageGenerateArgument, OnPageGenerateResponse } from "@yext/pages";

// export default function onGenerate(request : OnPageGenerateArgument) : OnPageGenerateResponse {
//   const { site } = request
//   console.log("onGenerate Running " + request.feature)
//   const slug =  request.streamOutput.slug ?? request.feature
//   console.log(slug)
//   return {
//     path: slug + "-special",
//     content: request.feature + " Page",
//     redirects: []
//   }
// }