(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const d=document.documentElement,g={light:document.getElementById("light-icon"),dark:document.getElementById("dark-icon"),system:document.getElementById("system-icon")},m=document.getElementById("theme-menu"),f=document.querySelectorAll("[data-theme-option]"),r=window.matchMedia("(prefers-color-scheme: dark)");let o=localStorage.getItem("theme")||"system";localStorage.setItem("theme",o);u(o);a(o);function a(t){Object.entries(g).forEach(([n,c])=>n===t?c.classList.remove("hidden"):c.classList.add("hidden")),m.classList.add("hidden"),localStorage.setItem("theme",t)}function u(t){t==="dark"||t==="system"&&r.matches?d.classList.add("dark"):(t==="light"||t==="system"&&!r.matches)&&d.classList.remove("dark"),o=t}r.addEventListener("change",({matches:t})=>{o==="system"&&(t?d.classList.add("dark"):d.classList.remove("dark"))});f.forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.themeOption;a(n),u(n)})});document.getElementById("toggle-theme-menu").addEventListener("click",()=>m.classList.toggle("hidden"));const h=document.getElementById("toggle-mobile-menu");h.addEventListener("click",()=>{document.getElementById("mobile-menu").classList.toggle("hidden"),document.getElementById("open-menu-icon").classList.toggle("hidden"),document.getElementById("close-menu-icon").classList.toggle("hidden")});
