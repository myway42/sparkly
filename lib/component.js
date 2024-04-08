const template=document.createElement("template");template.innerHTML=`
<style>
  :host {
    display: inline-block;
  }
  .sparkly {
    position: relative;
    display: inline-block;
    line-height: 1em;
  }
  .sparkly .wrap {
    display: block;
    position: absolute;
    left: 0;
    z-index: 2;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
  @media (prefers-reduced-motion: no-preference) {
    .sparkly .content {
      animation: comeInOut 900ms ease 0s 1 normal forwards;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .sparkly .content {
      animation: none;
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    .sparkly svg {
      animation: spin 1000ms linear 0s 1 normal none;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .sparkly svg {
      animation: none;
    }
  }
  @keyframes comeInOut {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1);
    }

    100% {
      transform: scale(0);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(180deg);
    }
  }
</style>

<div class="sparkly">
  <span @click="toggleClick">
    <slot></slot>
  </span>
</div>
`;export default class Sparkly extends HTMLElement{static register(tag="sparkly-view"){customElements.define(tag,Sparkly)}constructor(){super();this.attachShadow({mode:"open"});this.shadowRoot.appendChild(template.content.cloneNode(true));this.container=this.shadowRoot.querySelector(".sparkly")}get canclick(){return this.getAttribute("canclick")||false}set canclick(value){this.setAttribute("canclick",value)}get color(){return this.getAttribute("color")||"#FFC700"}set color(value){this.setAttribute("color",value)}get minsize(){return this.getAttribute("minsize")||10}set minsize(value){this.setAttribute("minsize",value)}get maxsize(){return this.getAttribute("maxsize")||20}set maxsize(value){this.setAttribute("maxsize",value)}connectedCallback(){// 闪光体
let sparkContent=document.createElement("span");const{toggleSpark}=useIntervalSpark(sparkContent,{color:this.color,minsize:this.minsize,maxsize:this.maxsize},this.container);// 开始闪烁
toggleSpark("start");// 显示隐藏
if(!!this.canclick){this.container.addEventListener("click",()=>{toggleSpark()})}}}function random(min,max){min=Number.parseFloat(min);max=Number.parseFloat(max);return Math.floor(Math.random()*(max-min))+min}// 生成单个闪光
function generateSparkle(sparkContent,color,minsize,maxsize){const sparkle={id:String(random(10000,99999)),createdAt:Date.now(),color,size:random(minsize,maxsize),style:{top:random(0,100)+"%",left:random(0,100)+"%","z-index":random(-1,2),"animation-delay":random(50,500)+"ms"}};sparkle.dom=document.createElement("span");Object.keys(sparkle.style).forEach(key=>{sparkle.dom.style.setProperty(key,sparkle.style[key])});sparkle.dom.className="wrap";sparkle.dom.innerHTML=`
    <svg width=${sparkle.size} height=${sparkle.size} viewBox="0 0 184 184" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M92 0C92 0 96 63.4731 108.263 75.7365C120.527 88 184 92 184 92C184 92 118.527 98 108.263 108.263C98 118.527 92 184 92 184C92 184 86.4731 119 75.7365 108.263C65 97.5269 0 92 0 92C0 92 63.9731 87.5 75.7365 75.7365C87.5 63.9731 92 0 92 0Z"
        fill='${sparkle.color}'
      />
    </svg>
`;sparkContent.appendChild(sparkle.dom);return sparkle}function useIntervalSpark(sparkContent,{color,minsize,maxsize},parent){// 初始闪光
let Sparkles=Array(3).fill("").map(()=>generateSparkle(sparkContent,color,minsize,maxsize));// 追加闪光
const setSparkles=()=>{const sparkle=generateSparkle(sparkContent,color,minsize,maxsize);const now=Date.now();Sparkles.forEach(item=>{if(now-item.createdAt>750){item.remove=true;sparkContent.removeChild(item.dom)}});Sparkles=Sparkles.filter(item=>!item.remove).concat(sparkle)};// 事件监听
let t=null;const toggleSpark=state=>{if(state&&state==="end"||t){window.clearInterval(t);t=null;parent.removeChild(sparkContent);sparkContent=document.createElement("span");Sparkles=[]}else{parent.appendChild(sparkContent);t=window.setInterval(setSparkles,random(200,450))}};window.addEventListener("beforeunload",()=>{toggleSpark("end")});return{Sparkles,toggleSpark}}