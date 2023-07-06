import {FunctionArgument, HttpFunctionResponse} from "@yext/pages";

export default function helloWorld1(request : FunctionArgument) : HttpFunctionResponse {

  return {
    body: "id: " + request.pathParams.id,
    headers: {a:"xyz"},
    statusCode: 200
  }
}
