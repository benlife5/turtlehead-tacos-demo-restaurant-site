import {FunctionArgument, FunctionReturnValue, FunctionConfig} from "@yext/pages";

export default function helloWorld1(request : FunctionArgument) : FunctionReturnValue {

  return {
    body: "Hello World 1\n" + YEXT_PUBLIC_EXTERNAL_IMAGE_API_BASE_URL,
    headers: {a:"xyz"},
    statusCode: 200
  }
}
