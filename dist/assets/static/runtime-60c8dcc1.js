var d=Object.defineProperty;var f=(e,o,r)=>o in e?d(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r;var i=(e,o,r)=>(f(e,typeof o!="symbol"?o+"":o,r),r);import{b as s}from"./shim-b181d20a.js";var n={};Object.defineProperty(n,"__esModule",{value:!0});var a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=typeof window<"u"&&typeof window.document<"u",v=typeof s.exports<"u"&&s.exports.versions!=null&&s.exports.versions.node!=null,l=(typeof self>"u"?"undefined":a(self))==="object"&&self.constructor&&self.constructor.name==="DedicatedWorkerGlobalScope",p=typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),y=typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u",t=n.isBrowser=u;n.isWebWorker=l;var m=n.isNode=v;n.isJsDom=p;var c=n.isDeno=y;class w{constructor(){i(this,"name");i(this,"isServerSide");i(this,"version");var o;c?(this.name="deno",this.version="",t&&(this.version=((o=window.Deno)==null?void 0:o.version.deno)||""),this.isServerSide=!0):m?(this.name="node",this.version=s.exports.versions.node,this.isServerSide=!0):t?(this.name="browser",this.version=navigator.userAgent,this.isServerSide=!1):(this.name="unknown",this.version="",this.isServerSide=!1)}getNodeMajorVersion(){if(this.name!="node")throw new Error("Not running in Node.");return+this.version.split(".")[0]}}const b=()=>new w;export{b as g};