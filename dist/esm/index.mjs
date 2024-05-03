import{isMainThread as F}from"node:worker_threads";import{i as _,a as J,m as M}from"../node-features-Dcn4STxq.mjs";import{r as D}from"../register-DGMXNqQF.mjs";import{fileURLToPath as T,pathToFileURL as A}from"node:url";import{b as I,t as b}from"../index-BUWCPB1Z.mjs";import{i as E,a as v,r as $}from"../is-relative-path-pattern-DuKsZATx.mjs";import{p as k}from"../client-Cg7nS93t.mjs";import u from"node:path";import{parseTsconfig as L,getTsconfig as C,createFilesMatcher as W,createPathsMatcher as G}from"get-tsconfig";import O from"node:fs";import"node:module";import"esbuild";import"node:crypto";import"node:os";import"../temporary-directory-CwHp0_NW.mjs";import"node:net";import"../get-pipe-path-CmcG6VNd.mjs";const i={active:!0},H=async t=>{if(!t)throw new Error(`tsx must be loaded with --import instead of --loader
The --loader flag was deprecated in Node v20.6.0 and v18.19.0`);i.namespace=t.namespace,t.port&&(i.port=t.port,t.port.on("message",s=>{s==="deactivate"&&(i.active=!1,t.port.postMessage({type:"deactivated"}))}))},X=()=>"process.setSourceMapsEnabled(true);",d=new Map,q=async t=>{if(d.has(t))return d.get(t);if(!await O.promises.access(t).then(()=>!0,()=>!1)){d.set(t,void 0);return}const a=await O.promises.readFile(t,"utf8");try{const r=JSON.parse(a);return d.set(t,r),r}catch{throw new Error(`Error parsing: ${t}`)}},Q=async t=>{let s=new URL("package.json",t);for(;!s.pathname.endsWith("/node_modules/package.json");){const a=T(s),r=await q(a);if(r)return r;const o=s;if(s=new URL("../package.json",s),s.pathname===o.pathname)break}},K=async t=>(await Q(t))?.type??"commonjs",p=process.env.TSX_TSCONFIG_PATH?{path:u.resolve(process.env.TSX_TSCONFIG_PATH),config:L(process.env.TSX_TSCONFIG_PATH)}:C(),z=p&&W(p),R=p&&G(p),B=p?.config.compilerOptions?.allowJs??!1,N="file://",h=/\.([cm]?ts|[tj]sx)($|\?)/,x=/\.json(?:$|\?)/,V=t=>{const s=u.extname(t);if(s===".json")return"json";if(s===".mjs"||s===".mts")return"module";if(s===".cjs"||s===".cts")return"commonjs"},Y=t=>{const s=V(t);if(s)return s;if(h.test(t))return K(t)},g="tsx-namespace=",l=t=>{const s=t.indexOf(g);if(s===-1)return;const a=t[s-1];if(a!=="?"&&a!=="&")return;const r=s+g.length,o=t.indexOf("&",r);return o===-1?t.slice(r):t.slice(r,o)},y=_(J)?"importAttributes":"importAssertions",Z=async(t,s,a)=>{if(!i.active||i.namespace&&i.namespace!==l(t))return a(t,s);if(i.port){const e=new URL(t);e.searchParams.delete("tsx-namespace"),i.port.postMessage({type:"load",url:e.toString()})}k.send&&k.send({type:"dependency",path:t}),x.test(t)&&(s[y]||(s[y]={}),s[y].type="json");const r=await a(t,s);if(!r.source)return r;const o=t.startsWith("file://")?T(t):t,m=r.source.toString();if(r.format==="json"||h.test(t)){const e=await I(m,o,{tsconfigRaw:z?.(o)});return{format:"module",source:E(e)}}if(r.format==="module"){const e=b(o,m);e&&(r.source=E(e))}return r},U=/\/(?:$|\?)/,w=async(t,s,a)=>{const r=await t(s,a);return!r.format&&r.url.startsWith(N)&&(r.format=await Y(r.url)),r},tt=[".js",".json",".ts",".tsx",".jsx"],P=async(t,s,a)=>{const[r,o]=t.split("?");let m;for(const e of tt)try{return await w(a,r+e+(o?`?${o}`:""),s)}catch(n){if(m===void 0&&n instanceof Error){const{message:c}=n;n.message=n.message.replace(`${e}'`,"'"),n.stack=n.stack.replace(c,n.message),m=n}}throw m},j=async(t,s,a)=>{const r=U.test(t),o=r?"index":"/index",[m,e]=t.split("?");try{return await P(m+o+(e?`?${e}`:""),s,a)}catch(n){if(!r)try{return await P(t,s,a)}catch{}const c=n,{message:f}=c;throw c.message=c.message.replace(`${o.replace("/",u.sep)}'`,"'"),c.stack=c.stack.replace(f,c.message),c}},S=async(t,s,a,r)=>{if(!i.active)return a(t,s);let o=l(t);if(s.parentURL){const e=l(s.parentURL);e&&!o&&(o=e,t+=`${t.includes("?")?"&":"?"}${g}${e}`)}if(i.namespace&&i.namespace!==o)return a(t,s);if(U.test(t))return await j(t,s,a);const m=t.startsWith(N)||v.test(t);if(R&&!m&&!s.parentURL?.includes("/node_modules/")){const e=R(t);for(const n of e)try{return await S(A(n).toString(),s,a)}catch{}}if(h.test(s.parentURL)||B){const e=$(t);if(e)for(const n of e)try{return await w(a,n,s)}catch(c){const{code:f}=c;if(f!=="ERR_MODULE_NOT_FOUND"&&f!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw c}}try{return await w(a,t,s)}catch(e){if(e instanceof Error&&!r){const{code:n}=e;if(n==="ERR_UNSUPPORTED_DIR_IMPORT")try{return await j(t,s,a)}catch(c){if(c.code!=="ERR_PACKAGE_IMPORT_NOT_DEFINED")throw c}if(n==="ERR_MODULE_NOT_FOUND")try{return await P(t,s,a)}catch{}}throw e}};_(M)&&F&&D();export{X as globalPreload,H as initialize,Z as load,S as resolve};
