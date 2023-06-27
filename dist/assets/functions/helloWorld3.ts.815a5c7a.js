const r="abc123";function t(a){return{body:`updated!
`+r+`
path params:`+JSON.stringify(a.pathParams)+`
Query params:`+JSON.stringify(a.queryParams),headers:{},statusCode:200}}const n={name:"helloWorld3"},o=()=>"specialSlug300/:id";export{n as config,t as default,o as getPath};
