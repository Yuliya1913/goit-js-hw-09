const e=document.querySelector("body");console.log(e);const t=document.querySelector("[data-start]");console.log(t);const o=document.querySelector("[data-stop]");console.log(o);t.addEventListener("click",(()=>{timerId=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.setAttribute("disabled",!0)}),1e3)})),o.addEventListener("click",(()=>{clearInterval(timerId),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.4ff8e3ae.js.map
