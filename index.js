import logo from './assets/JSLogo.png'
import './index.css'

console.log('Hello World!')

const text = document.createElement('h1')
text.innerText = 'I love JavaScript'
const javaScriptLogo = document.createElement('img')
javaScriptLogo.src = logo
document.querySelector('body').append(text, javaScriptLogo)

