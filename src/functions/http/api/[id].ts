import {HttpFunctionArgument, HttpFunctionResponse} from "@yext/pages";

export default function helloWorld1(request : HttpFunctionArgument) : HttpFunctionResponse {

  return {
    body: "id: " + request.pathParams.id + "\n" + JSON.stringify(request.queryParams),
    headers: {a:"xyz"},
    statusCode: 200
  }
}
