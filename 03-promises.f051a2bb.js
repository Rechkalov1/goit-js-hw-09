var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("iQIUW");const i=document.querySelector(".form"),l=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),u=document.querySelector('[name="amount"]');function d(e,o){return new Promise(((n,t)=>{setInterval((()=>{Math.random()>.3?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}i.addEventListener("submit",(function(e){e.preventDefault();const o=l.value,n=a.value,t=u.value;for(let e=1;e<=t;e+=1)d(e,o).then((({position:e,delay:o})=>r.Notify.success(`Fulfilled promise ${e} in ${o}ms`))).catch((({position:e,delay:o})=>r.Notify.failure(`Rejected promise ${e} in ${o}ms`))),o+=n})),console.log(i);
//# sourceMappingURL=03-promises.f051a2bb.js.map