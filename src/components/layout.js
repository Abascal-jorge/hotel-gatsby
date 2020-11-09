import React from 'react';
import Header from "./header";
import Helmet from "react-helmet";
import {Global, css} from "@emotion/core"
import Footer from "./footer";
import useSEO from "../hooks/use-SEO";

const Layout = (props) => {

    const data = useSEO();
    const {siteName, fallbackSeo: { description, title }} = data;
    return ( 
        <>
            <Global
                styles={
                    css`
                        html{
                            box-sizing: border-box;
                            font-size: 62.5%
                        }

                        *, *:before, *:after{
                            box-sizing: inherit;
                        }
                        body{
                            font-size: 18px;
                            font-size: 1.8rem;
                            line-height:1.5;
                            font-family: "PT Sans", sans-serif; 
                        }
                        h1,h2,h3{
                            margin: 0;
                            line-height:1.5;
                        }
                        h1, h2{
                            font-family: "Roboto", serif;
                        }
                        h3{
                            font-family: "PT Sans", sans-serif;
                        }
                        ul{
                            list-style: none;
                            margin: 0;
                            padding: 0;
                        }
                    `
                }
            />
            <Helmet>
                <title>{siteName}</title>
                <meta name="description" content={description}/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto:wght@700&display=swap" rel="stylesheet"/>
            </Helmet>
            <Header/>
            {props.children}

            <Footer/>
        </>

     );
}
 
export default Layout;