import {FunctionArgument, HttpFunctionResponse} from "@yext/pages";

export default function userProfile(request : FunctionArgument) : HttpFunctionResponse {

  return {
    body: request.pathParams.userId,
    headers: {a:"xyz"},
    statusCode: 200
  }
}
