import {OnUrlChangeArgument, OnUrlChangeResponse } from "@yext/pages";

export default function onChange(request : OnUrlChangeArgument) : OnUrlChangeResponse {
  const { site } = request
  console.log("OnUrlChange 1 Running")
}