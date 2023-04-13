import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    background-color: #000;
    color: #fff;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
}

.canvas {
    display: grid;
    min-height: 100vh;
    grid-auto-flow: row;
    grid-template-rows: auto;
    gap: 0.5rem;
    padding: 2rem;
    width: 100vw;
    align-items: center;
    text-align: center;
    
}

.type-box {
    display: block;
    max-width: 1000px;
    height: 140px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}

.words {
    font-size: 32px;
    display: flex;
    flex-wrap: wrap;
}

.word {
    margin: 5px;
    padding-right: 2px;
}



`