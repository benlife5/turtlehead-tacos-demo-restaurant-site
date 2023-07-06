import {FunctionArgument, HttpFunctionResponse} from "@yext/pages";

export default function helloWorld1(request : FunctionArgument) : HttpFunctionResponse {

  return {
    body: "=====id=====",
    headers: {},
    statusCode: 200
  }
}
