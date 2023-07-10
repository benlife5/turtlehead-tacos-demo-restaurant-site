import {HttpFunctionArgument, HttpFunctionResponse} from "@yext/pages";

export default function helloWorld1(request : HttpFunctionArgument) : HttpFunctionResponse {

  return {
    body: "Hello World 1\n" + YEXT_PUBLIC_FUNCTION_TEST_KEY,
    headers: {a:"ghfj"},
    statusCode: 200
  }
}
