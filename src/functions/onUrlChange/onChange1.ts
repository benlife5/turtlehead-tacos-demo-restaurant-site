import {OnUrlChangeArgument, OnUrlChangeResponse } from "@yext/pages";

export default function onChange(request : OnUrlChangeArgument) : OnUrlChangeResponse {
  const { site } = request
  console.log("OnUrlChange 2 Running")
}