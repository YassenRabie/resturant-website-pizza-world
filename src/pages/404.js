import React from "react"
import { Helmet } from "react-helmet"

const NotFoundPage = () => (
   <>
      <Helmet>
         <meta charSet="utf-8" />
         <title>Pizza World - 404</title>
      </Helmet>
      <a href="/">Home</a>
   </>
)

export default NotFoundPage
