import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    min-height: 98vh;
    margin: 0;
    padding: 0;

    background: #63856a; /* Old browsers */
    background: -moz-radial-gradient(center, ellipse cover,  #63856a 1%, #3c5a40 100%); /* FF3.6+ */
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(1%,#63856a), color-stop(100%,#3c5a40)); /* Chrome,Safari4+ */
    background: -webkit-radial-gradient(center, ellipse cover,  #63856a 1%,#3c5a40 100%); /* Chrome10+,Safari5.1+ */
    background: -o-radial-gradient(center, ellipse cover,  #63856a 1%,#3c5a40 100%); /* Opera 12+ */
    background: -ms-radial-gradient(center, ellipse cover,  #63856a 1%,#3c5a40 100%); /* IE10+ */
    background: radial-gradient(ellipse at center,  #63856a 1%,#3c5a40 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#63856a', endColorstr='#3c5a40',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

    background-size: 100vw 100vh;
    
    border-bottom: 2vh solid;
    border-image-source: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O9gAmQzyfzQeHpTzaVyY2-yHCOq7FNHWEA&usqp=CAU");
    border-image-slice: 100;
    
    user-select: none;
    
    color: #e0dbd1;
    font-size: 5vh;
    font-weight: 100;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    ::-webkit-scrollbar {
        display: none;
    }
    
    input:-webkit-autofill::first-line,
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 10000s ease-in-out 0s;
        -webkit-text-fill-color: #aaa !important;
    }
}
img {
    -webkit-user-drag: none;
}`;

export default GlobalStyle;
