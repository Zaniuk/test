import { c as create_ssr_component } from "../../chunks/index-34bc8443.js";
var login_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;700&display=swap');\r\n:root{\r\n    --lblue: #3C91E6;\r\n    --green: #75B150;\r\n    --pink: #AE415C;\r\n    --purple: #A78ADD;\r\n    --yellow: #FFF500;\r\n    --white: white;\r\n    --ulblue: #7BCFCE;\r\n    --bg-dark: #16161E;\r\n    --bg-light: #1A1B26 ;\r\n    --bg-window:rgba(217, 217, 217, .03);\r\n}\r\nhtml{\r\n    scroll-behavior: smooth;\r\n}\r\nbody{\r\n    font-family: 'Inter', sans-serif;\r\n    background-color: var(--bg-dark);\r\n    color: var(--white);\r\n    margin: 0;\r\n    overflow-x: hidden;\r\n    \r\n}\r\n.caret-lblue{\r\n    caret-color: var(--lblue);\r\n}\r\n.caret-pink{\r\n    caret-color: var(--pink);\r\n}\r\n.caret-purple{\r\n    caret-color: var(--purple);\r\n}\r\n.caret-green{\r\n    caret-color: var(--green);\r\n}\r\n.border-pink{\r\n    border: solid 2px var(--pink);\r\n}\r\n.border-lblue{\r\n    border: solid 2px var(--lblue);\r\n}\r\n.border-green{\r\n    border: solid 2px var(--green);\r\n}\r\n.border-purple{\r\n    border: solid 2px var(--purple);\r\n}\r\n.text-white{\r\n    color: var(--white);\r\n}\r\n.text-ulblue{\r\n    color: var(--ulblue);\r\n}\r\n.text-lblue{\r\n    color: var(--lblue);\r\n}\r\n.text-purple{\r\n    color: var(--purple);\r\n}\r\n.text-green{\r\n    color: var(--green);\r\n}\r\n.text-pink{\r\n    color: var(--pink);\r\n}\r\n.text-yellow{\r\n    color: var(--yellow);\r\n}\r\n.bg-dark{\r\n    background-color: var(--bg-dark);\r\n}\r\n.bg-light{\r\n    background-color: var(--bg-light);\r\n}\r\n.bg-window{\r\n    background-color: var(--bg-window);\r\n}\r\nsection{\r\n    min-height: 100vh;\r\n}\r\n.scale-up-center {\r\n	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n}\r\n@-webkit-keyframes scale-up-center {\r\n  0% {\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n@keyframes scale-up-center {\r\n  0% {\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n.slide-in-fwd-top {\r\n	-webkit-animation: slide-in-fwd-top-delay-4 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.4s both;\r\n	        animation: slide-in-fwd-top-delay-4 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.4s both;\r\n}\r\n.slide-in-fwd-top-delay-4 {\r\n	-webkit-animation: slide-in-fwd-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.8s both;\r\n	        animation: slide-in-fwd-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.8s both;\r\n}\r\n@-webkit-keyframes slide-in-fwd-top-delay-4 {\r\n    0% {\r\n      -webkit-transform: translateZ(-1400px) translateY(-800px);\r\n              transform: translateZ(-1400px) translateY(-800px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateZ(0) translateY(0);\r\n              transform: translateZ(0) translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n@keyframes slide-in-fwd-top {\r\n    0% {\r\n      -webkit-transform: translateZ(-1400px) translateY(-800px);\r\n              transform: translateZ(-1400px) translateY(-800px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateZ(0) translateY(0);\r\n              transform: translateZ(0) translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n@-webkit-keyframes slide-in-fwd-top {\r\n    0% {\r\n      -webkit-transform: translateZ(-1400px) translateY(-800px);\r\n              transform: translateZ(-1400px) translateY(-800px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateZ(0) translateY(0);\r\n              transform: translateZ(0) translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n@keyframes slide-in-fwd-top {\r\n    0% {\r\n      -webkit-transform: translateZ(-1400px) translateY(-800px);\r\n              transform: translateZ(-1400px) translateY(-800px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateZ(0) translateY(0);\r\n              transform: translateZ(0) translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n/* CARDS ANIMATIONS */\r\n.fade-in-bottom {\r\n    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.1s both;\r\n            animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.1s both;\r\n  }\r\n.fade-in-bottom-d-1 {\r\n    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.2s both;\r\n            animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.2s both;\r\n  }\r\n.fade-in-bottom-d-2 {\r\n    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s both;\r\n            animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s both;\r\n  }\r\n.fade-in-bottom-d-3 {\r\n    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.4s both;\r\n            animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.4s both;\r\n  }\r\n.fade-in-bottom-d-4 {\r\n    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both;\r\n            animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both;\r\n  }\r\n.fade-in-bottom-d-5 {\r\n    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.6s both;\r\n            animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.6s both;\r\n  }\r\n.fade-in-bottom-d-6 {\r\n    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.7s both;\r\n            animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.7s both;\r\n  }\r\n.hide-project{\r\n    visibility: hidden;\r\n}\r\n@-webkit-keyframes fade-in-bottom {\r\n    0% {\r\n      -webkit-transform: translateY(50px);\r\n              transform: translateY(50px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n@keyframes fade-in-bottom {\r\n    0% {\r\n      -webkit-transform: translateY(50px);\r\n              transform: translateY(50px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n.date{\r\n    font-size: .75rem;\r\n    color: gray;\r\n}\r\n.bytemd {\r\n  height: calc(100vh - 175px);\r\n}\r\n.bytemd{\r\n  background-color: var(--bg-dark);\r\n  color: white;\r\n}\r\n.bytemd-toolbar{\r\n  color: white;\r\n  background-color: var(--bg-dark);\r\n}\r\n.CodeMirror{\r\n  color: white;\r\n  background-color: var(--bg-dark);\r\n}\r\n.markdown-body{\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n  padding: 0 .5rem ;\r\n  word-wrap: break-word;\r\n}\r\n.markdown-body code{\r\n  max-width: 100%;\r\n  word-wrap: break-word;\r\n}\r\n.markdown-body img{\r\n  width: 100%;\r\n  border-radius: 1rem;\r\n}\r\n.markdown-body a{\r\n    color: var(--green);\r\n}\r\n.markdown-body h1{\r\n  color: var(--lblue);\r\n}\r\n.markdown-body h2{\r\n  color: var(--pink);\r\n}\r\n:root{--lblue:#3C91E6;--green:#75B150;--pink:#AE415C;--purple:#A78ADD;--yellow:#FFF500;--white:white;--ulblue:#7BCFCE;--bg-dark:#16161E;--bg-light:#1A1B26 ;--bg-window:rgba(217, 217, 217, .03)}\r\nlabel.svelte-1xl8yxm{display:block}\r\n#p-email.svelte-1xl8yxm{color:var(--lblue)}\r\n#p-pass.svelte-1xl8yxm{color:var(--pink)}\r\n#email.svelte-1xl8yxm{padding:.5rem;width:280px;border:2px solid var(--lblue);color:var(--lblue);background-color:var(--bg-light);border-radius:.3rem;transition:100ms ease-in-out\r\n    }\r\n#password.svelte-1xl8yxm{padding:.5rem;width:280px;border:2px solid var(--pink);color:var(--pink);background-color:var(--bg-light);border-radius:.3rem;transition:100ms ease-in-out\r\n    }\r\n#submit.svelte-1xl8yxm{background-color:var(--bg-light);color:var(--purple);border:2px solid var(--purple);padding:.5rem 1rem;margin:1rem;border-radius:.3rem;transition:250ms ease-in-out}\r\n#submit.svelte-1xl8yxm:hover,#submit.svelte-1xl8yxm:focus{background-color:var(--purple);color:white}\r\nform.svelte-1xl8yxm{margin-top:20vh;display:flex;flex-flow:column;align-items:center}")();
const css = {
  code: "@import '../css/global.css';:root{--lblue:#3C91E6;--green:#75B150;--pink:#AE415C;--purple:#A78ADD;--yellow:#FFF500;--white:white;--ulblue:#7BCFCE;--bg-dark:#16161E;--bg-light:#1A1B26 ;--bg-window:rgba(217, 217, 217, .03)}label.svelte-1xl8yxm{display:block}#p-email.svelte-1xl8yxm{color:var(--lblue)}#p-pass.svelte-1xl8yxm{color:var(--pink)}#email.svelte-1xl8yxm{padding:.5rem;width:280px;border:2px solid var(--lblue);color:var(--lblue);background-color:var(--bg-light);border-radius:.3rem;transition:100ms ease-in-out\r\n    }#password.svelte-1xl8yxm{padding:.5rem;width:280px;border:2px solid var(--pink);color:var(--pink);background-color:var(--bg-light);border-radius:.3rem;transition:100ms ease-in-out\r\n    }#submit.svelte-1xl8yxm{background-color:var(--bg-light);color:var(--purple);border:2px solid var(--purple);padding:.5rem 1rem;margin:1rem;border-radius:.3rem;transition:250ms ease-in-out}#submit.svelte-1xl8yxm:hover,#submit.svelte-1xl8yxm:focus{background-color:var(--purple);color:white}form.svelte-1xl8yxm{margin-top:20vh;display:flex;flex-flow:column;align-items:center}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<form class="${"svelte-1xl8yxm"}"><label class="${"svelte-1xl8yxm"}"><p id="${"p-email"}" class="${"svelte-1xl8yxm"}">Email</p>
        <input id="${"email"}" type="${"email"}" required class="${"svelte-1xl8yxm"}"></label>

    <label class="${"svelte-1xl8yxm"}"><p id="${"p-pass"}" class="${"svelte-1xl8yxm"}">Password</p>
        <input id="${"password"}" type="${"password"}" required class="${"svelte-1xl8yxm"}"></label>
    <label class="${"svelte-1xl8yxm"}"><input id="${"submit"}" type="${"submit"}" value="${"Login"}" class="${"svelte-1xl8yxm"}"></label>
</form>`;
});
export { Login as default };