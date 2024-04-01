import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'BagelFatOne-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_JAMO@1.0/BagelFatOne-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'KCC-Ganpan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCC-Ganpan.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    width: 100%;
    font-family: 'KCC-Ganpan', 'sans-serif';
    text-align: center;
    background-color: #282c34;
  }

  
  .txt, .row, .col-md-4, .nav, .letter-input, .game, .startBtn, .Toastify__toast, .Toastify__progress-bar--bg, .Toastify__toast-icon svg, .Toastify__progress-bar, .Toastify__toast-container--top-center {
    font-family: 'KCC-Ganpan', 'sans-serif';
  }

  .txt {
    font-family: 'BagelFatOne-Regular','sans-serif';
    font-size: 5rem;
    padding-top: 250px;
    color: #591F07;
  }
  .row {
    font-family: 'KCC-Ganpan','sans-serif';
    padding-top: 400px;
    padding-left: 62px;
    padding-right: 69px;
    border-radius: 10px;
  }

  body  .App  .nav {
    font-family: 'KCC-Ganpan','sans-serif';
    background-color: #AB6029!important;
    position: fixed;
    width: 100%;
    padding: 20px 0;
    margin-left: -30px;
    font-size: 2.3rem;
  }
  body  .App  .nav .logo {
    padding: 0;
  }
  body  .App  .nav .nav-link {
    color: white;
    text-align: center;
    padding-left: 500px;
  }

  .letter-input {
    width: 50px;
    height: 50px; 
    margin: 1px;
    text-align: center;
    font-size: 20px; 
    border: 2px solid #AB6029; 
    border-radius: 5px; 
    background-color: #F4C166; 
    color: #591F07; 
  }
  .letter-input:focus {
    border-color: #8e4a20; /
    background-color: #f1cc8b; 
    outline: none; 
  }
  .game{
    font-family: 'KCC-Ganpan','sans-serif';
    padding-top: 15px;
  }
  .game button {
    margin-top: -10px;
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 18px; 
    color: white; 
    background-color: #AB6029; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer; 
    transition: background-color 0.3s ease; 
  }
  .game button:hover {
    background-color: #8e4a20;
    color: white;
  }
  .game button.btn {
    margin-top: -5px;
  }
  .startBtn {
    font-family: 'KCC-Ganpan','sans-serif';
    margin-bottom: 17px;
    margin-left: 10px;

    padding: 10px 20px;
    font-size: 18px; 
    color: white; 
    background-color: #AB6029; 
    border: none;
    border-radius: 5px; 
  }
  .Toastify__toast{
    background: #F4C166;
    color: #591F07;
    font-family: 'KCC-Ganpan','sans-serif';
  }
  .Toastify__progress-bar--bg {
    background: #F4C166;
  }
  .Toastify__toast-icon svg{
    fill: #591F07;
  }
  .Toastify__progress-bar {
    background: #591F07;
  }
  .Toastify__toast-container--top-center {
    top: 87%;
  }
  
`;
