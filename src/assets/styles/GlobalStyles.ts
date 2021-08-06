import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

*{
    margin: 0px;
    margin: 0px;
    box-sizing: border-box;
    overflow: hidden;
}

html, #root, body{
    height: 100vh;
}

*, button, input {
    font-family: 'Roboto', sans-serif;

    border: 0;
    outline: 0;
}
&::-webkit-scrollbar {
      width: 5px;
      border-radius: 90px;
      scroll-behavior: smooth;
      background-color: rgb(248, 249, 250);
    }
    &::-webkit-scrollbar-track {
      border-radius: 90px;
      background-color: rgb(248, 249, 250);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(64, 75, 90);
      border-radius: 90px;
    }
  }


`;