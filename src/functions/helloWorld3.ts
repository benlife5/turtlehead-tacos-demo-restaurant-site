import { FunctionArgument, FunctionReturnValue, FunctionConfig } from "@yext/pages/*"
import myString from "../support/support.js";

export default function helloWorld3(request : FunctionArgument) : FunctionReturnValue {

  return {
    body: "updated!\n" + myString + "\npath params:" + JSON.stringify(request.pathParams) + "\nQuery params:" + JSON.stringify(request.queryParams),
    headers: {},
    statusCode: 200
  }
}

export const config: FunctionConfig = {
    name: "helloWorld3"
  };
  
export const getPath = () => {
    return `specialSlug300/:id`;
};