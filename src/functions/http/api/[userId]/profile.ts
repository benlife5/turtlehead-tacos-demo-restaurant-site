import {HttpFunctionArgument, HttpFunctionResponse} from "@yext/pages";

export default function userProfile(request : HttpFunctionArgument) : HttpFunctionResponse {

  return {
    body: "User " + request.pathParams.userId,
    headers: {a:"xyz"},
    statusCode: 200
  }
}
