export default function oldHelloWorld(request : any) : any{
    const { pathParams, queryParams, site } = request

    console.log(pathParams, queryParams, site)
  
    return {
      body: "Hello World 123abc456\n" + YEXT_PUBLIC_EXTERNAL_IMAGE_API_BASE_URL,
      headers: {},
      statusCode: 200
    }
  }