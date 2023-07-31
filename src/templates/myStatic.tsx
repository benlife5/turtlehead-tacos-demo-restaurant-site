// import "src/index.css";
// import "src/styles/quoteManager.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
} from "@yext/pages";
// import type {
//   TemplateRenderProps,
//   TemplateProps,
// } from "src/types/entities";
import * as React from "react";
import { useContext } from "react";
import {
TemplateProps,
TemplateRenderProps,
} from "@yext/pages";
// import { Main } from "src/layouts/main";
import { getRuntime } from "@yext/pages/util";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { defaultHeadConfig } from "src/common/head";
// import { Loading } from "src/components/quoteManager/Loading";
// import { Error } from "src/components/quoteManager/Error";
// import { QuoteView } from "src/components/quoteManager/QuoteView";
// import { QuoteContext } from "src/api/quote/QuoteContext";
// import type { Quote } from "src/types/api/quote";
// import { useTemplateData } from "src/common/useTemplateData";

export const getPath: GetPath<TemplateProps> = () => {
  return `quote`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (data) => {
  return {
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      }], 
    title: `List Manager`
  }
};

const QuoteManager: Template<TemplateRenderProps<never>> = (props) => {
  const runtime = getRuntime();
  console.log(runtime)

  if (runtime.name !== "browser") return <div></div>;

//   console.log(InternalWithProviders({}))

// if(typeof window === 'undefined') {return <div></div>}



  const router = createBrowserRouter([
    {
      path: "/*",
      element: <InternalWithProviders {...props} />,      
    },
  ],
);

//   return <InternalWithProviders {...props}  />;
return <RouterProvider router={router} />;
};

const InternalWithProviders: Template<TemplateRenderProps<never>> = (data) => {
  // Providers needs to be in a different template than the context consumer
  return (
    <div className="abc" style={{width: 500}}>
      {/* <Main data={data} pageName="List Manager" hideHeaderSearch={true}> */}
        <Internal {...data}/>
      {/* </Main> */}
    </div>
  );
};

const Internal: Template<TemplateRenderProps<never>> = () => {
  // This is a context instead of a hook because when the quote is updated in the child components, 
  //  we need to trigger a rerender of the entire quote list when we pull the updated version.
//   const { status: fetchStatus, quoteAddMode } = useContext(QuoteContext);
    const fetchStatus = {
        loading: false,
        error: false,
    }
//   const { relativePrefixToRoot } = useTemplateData();

  return (
    <div className="flex-grow">
      {/* {fetchStatus.loading && <Loading message="Loading your list..."/>}
      {fetchStatus.error && <Error error={fetchStatus.error} errorLink={`${relativePrefixToRoot}index.html`}/>} */}
      {/* If the user has chosen to overwrite the existing quote, we should pretend
      it doesn't exist 
      TODO: Pass a properly constructed error that shows a consistent message to the actual no quote case*/}
      {/* {quoteAddMode === 'OVERWRITE' &&<p>abv</p>} */}
      <p>abc</p>
    </div>
  )
}

export default QuoteManager;