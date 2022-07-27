"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3612:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7294),o=n(6010),r=n(5281),l=n(5999);const i="admonition_LlT9",s="admonitionHeading_tbUL",u="admonitionIcon_kALy",d="admonitionContent_S0QG";const p={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(l.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(l.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(l.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(l.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(l.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function c(e){var t;const{mdxAdmonitionTitle:n,rest:o}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:o}}function h(e){const{children:t,type:n,title:l,icon:h}=c(e),k=function(e){var t;const n=null!=(t=m[e])?t:e;return p[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),p.info)}(n),f=null!=l?l:k.label,{iconComponent:y}=k,g=null!=h?h:a.createElement(y,null);return a.createElement("div",{className:(0,o.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert","alert--"+k.infimaClassName,i)},a.createElement("div",{className:s},a.createElement("span",{className:u},g),f),a.createElement("div",{className:d},t))}},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),o=n(7294),r=n(6010),l=n(2389),i=n(7392),s=n(7094),u=n(2466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:c,values:h,groupId:k,className:f}=e,y=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===c?c:null!=(t=null!=c?c:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:b}=(0,s.U)(),[S,C]=(0,o.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=k){const e=w[k];null!=e&&e!==S&&g.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==S&&(P(t),C(a),null!=k&&b(k,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var o;const t=T.indexOf(e.currentTarget)-1;n=null!=(o=T[t])?o:T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},f)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>T.push(e),onKeyDown:I,onFocus:E,onClick:E},l,{className:(0,r.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(y.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function c(e){const t=(0,l.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},3425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),r=n(5488),l=n(5162);n(3612);const i={title:"Part 1 - System Setup",sidebar_position:1},s=void 0,u={unversionedId:"node-validator-guide/system-setup",id:"node-validator-guide/system-setup",title:"Part 1 - System Setup",description:"- Run",source:"@site/docs/node-validator-guide/1-system-setup.md",sourceDirName:"node-validator-guide",slug:"/node-validator-guide/system-setup",permalink:"/docusaurus-test/node-validator-guide/system-setup",draft:!1,editUrl:"https://github.com/KEEZ-RobG/docusaurus-test/tree/main/packages/create-docusaurus/templates/shared/docs/node-validator-guide/1-system-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Part 1 - System Setup",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"About the guide",permalink:"/docusaurus-test/"},next:{title:"Part 2 - Security",permalink:"/docusaurus-test/node-validator-guide/security"}},d={},p=[{value:"Purchase Hardware",id:"purchase-hardware",level:2},{value:"Minimum Requirements",id:"minimum-requirements",level:3},{value:"Example Hardware",id:"example-hardware",level:3},{value:"User specific information",id:"user-specific-information",level:2},{value:"Step 1 - Install Ubuntu Server",id:"step-1---install-ubuntu-server",level:2},{value:"1.1 - Create a bootable USB stick",id:"11---create-a-bootable-usb-stick",level:3},{value:"Requirments",id:"requirments",level:4},{value:"Follow these steps to download the ISO file and image the USB flash drive:",id:"follow-these-steps-to-download-the-iso-file-and-image-the-usb-flash-drive",level:4},{value:"1.2 - Install the server",id:"12---install-the-server",level:3},{value:"1.3 - Determine node IP address",id:"13---determine-node-ip-address",level:3},{value:"Step 2 - Connect to your node",id:"step-2---connect-to-your-node",level:2},{value:"2.1 - Download and install PuTTY",id:"21---download-and-install-putty",level:4},{value:"2.2 - Configure PuTTY",id:"22---configure-putty",level:4},{value:"2.1 - Open PowerShell as administrator",id:"21---open-powershell-as-administrator",level:4},{value:"2.2 - Install OpenSSH",id:"22---install-openssh",level:4},{value:"2.3 - Connect to node",id:"23---connect-to-node",level:4},{value:"2.1 - Open terminal",id:"21---open-terminal",level:4},{value:"2.2 - Connect to node",id:"22---connect-to-node",level:4},{value:"Step 3 - Update System",id:"step-3---update-system",level:2},{value:"3.1 - Update the server",id:"31---update-the-server",level:3},{value:"3.2 - Enable automatic updates",id:"32---enable-automatic-updates",level:3},{value:"3.3 Install Dependencies",id:"33-install-dependencies",level:3},{value:"Step 4 - Reserve Node IP Address",id:"step-4---reserve-node-ip-address",level:2},{value:"4.1 - Router Login",id:"41---router-login",level:3},{value:"4.2 - Configure Router",id:"42---configure-router",level:3},{value:"Step 5 - Configure Auto Start",id:"step-5---configure-auto-start",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"ToDo",type:"danger"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Run"))),(0,o.kt)("h1",{id:"part-1---system-setup"},"Part 1 - System Setup"),(0,o.kt)("p",null,"This section will cover the hardware and operating system needed for running a node."),(0,o.kt)("p",null,"Required equipment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"USB Drive for Ubuntu Server installation"),(0,o.kt)("li",{parentName:"ul"},"Node Machine"),(0,o.kt)("li",{parentName:"ul"},"Personal computer")),(0,o.kt)("h2",{id:"purchase-hardware"},"Purchase Hardware"),(0,o.kt)("h3",{id:"minimum-requirements"},"Minimum Requirements"),(0,o.kt)("p",null,"These are the minimum hardware requirements for a node machine. Always check ",(0,o.kt)("a",{parentName:"p",href:"https://docs.lukso.tech/networks/l16-testnet/run-node#system-requirements"},"LUKSO's documentation")," for updates."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OS:")," Linux or Mac "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CPU:")," 2 cores"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RAM:")," 16GB"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Storage:")," 100GB SSD (solid state is required)")),(0,o.kt)("p",null,"For a future-proof setup, you may wish to choose a system with 4 cores, a 2.8GHz processor, 1TB of SSD storage, and 32GB of RAM."),(0,o.kt)("h3",{id:"example-hardware"},"Example Hardware"),(0,o.kt)("p",null,"Mini PCs are designed for 24/7 use and low power consumption, making them ideal for running a LUKSO node. The Intel NUC mini PC line is a common choice within the community. Below are the specs and pricing of three different NUC models."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Intel NUC 10 (Minimum)"),(0,o.kt)("th",{parentName:"tr",align:null},"Intel NUC 10"),(0,o.kt)("th",{parentName:"tr",align:null},"Intel NUC 10 Performance Kit"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Processor"),(0,o.kt)("td",{parentName:"tr",align:null},"i3 2-cores"),(0,o.kt)("td",{parentName:"tr",align:null},"i5 4-core"),(0,o.kt)("td",{parentName:"tr",align:null},"i7 6-core")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RAM"),(0,o.kt)("td",{parentName:"tr",align:null},"16GB"),(0,o.kt)("td",{parentName:"tr",align:null},"16GB"),(0,o.kt)("td",{parentName:"tr",align:null},"32GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Storage"),(0,o.kt)("td",{parentName:"tr",align:null},"256GB"),(0,o.kt)("td",{parentName:"tr",align:null},"512GB"),(0,o.kt)("td",{parentName:"tr",align:null},"1TB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Price"),(0,o.kt)("td",{parentName:"tr",align:null},"$489"),(0,o.kt)("td",{parentName:"tr",align:null},"$629"),(0,o.kt)("td",{parentName:"tr",align:null},"$949")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Link"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://a.co/d/3g1vg6G"},"Amazon")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://a.co/d/1UdrolU"},"Amazon")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://a.co/d/iE7niEu"},"Amazon"))))),(0,o.kt)("p",null,"A backup system (or parts) is also something to consider. If your node is offline, you will incur slashing penalties roughly equal to the rewards you would have gained while being online. For example, if you average 1 LYX per day in rewards, you will lose 1 LYX per day if offline."),(0,o.kt)("h2",{id:"user-specific-information"},"User specific information"),(0,o.kt)("p",null,"Usernames, passwords, and IP addresses will differ for each individual. The table below identifies these variables, the step where they are determined, and the generic syntax used to represent them in commands."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Variable data"),(0,o.kt)("th",{parentName:"tr",align:null},"Part/Section"),(0,o.kt)("th",{parentName:"tr",align:null},"Syntax"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node user name"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#12---install-the-server"},"P1 1.2")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<node-user>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node password"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#12---install-the-server"},"P1 1.2")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<password>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node IP address"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#13---determine-node-ip-address"},"P1 1.3")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<node-ip>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Router IP address"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#41---router-login"},"P1 4.1")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<router-ip>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SSH port"),(0,o.kt)("td",{parentName:"tr",align:null},"P2"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<ssh-port>"))))),(0,o.kt)("h2",{id:"step-1---install-ubuntu-server"},"Step 1 - Install Ubuntu Server"),(0,o.kt)("p",null,"This guide will follow the steps for Ubuntu 22.04 LTS ",(0,o.kt)("strong",{parentName:"p"},"Server")," as our node operating system, and we will interact with the node remotely from a personal computer/laptop. "),(0,o.kt)("p",null,"You do have the options to install the desktop version of Ubuntu and operate a node like a normal computer with a keyboard, mouse and monitor attached. However, there are a number of reason to choose a server installation for you node."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Security")," - Most importantly, it is best security practice to run ",(0,o.kt)("strong",{parentName:"p"},"only")," the software needed to operate a node. To setup, troubleshoot, and maintain your node, you will rely on a web browser to follow guides and chat applications (like Discord) for community support. With remote access, you can use these application from your personal computer, and simply copy/paste commands into the SSH terminal.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Performance")," - Ubuntu Desktop uses more system resources. Ubuntu Server makes more resources available to your node software.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Convenience")," - Your node should be ",(0,o.kt)("strong",{parentName:"p"},"wired")," to your network, not connected through WiFi. Remote access removes the need to keep a keyboard and monitor connect to you node and allows you to place your node hidden away near your router. Only two connections are needed, one to your router and one to an electrical outlet."))),(0,o.kt)("p",null,"Also, with SSH enabled, you can easily setup access to your from remote locations, allowing you to perform maintenance and troubleshooting from anywhere with an internet connection."),(0,o.kt)("p",null,"Using Server + remote SSH access from a personal computer instead of directly attaching a keyboard/monitor to your node has security and performance benefits and also adds convenience. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nodes should not run unnecessary software, like web browsers needed to follow guides, or messaging platforms used for community support."),(0,o.kt)("li",{parentName:"ul"},"The temptation to use the node for other purposes is removed"),(0,o.kt)("li",{parentName:"ul"},"The Desktop GUI consumes system resources"),(0,o.kt)("li",{parentName:"ul"},"You can place the node next to your router and avoid running wires."),(0,o.kt)("li",{parentName:"ul"},"You can easily configure access to your node from remote locations by enabling a VPN server.")),(0,o.kt)("h3",{id:"11---create-a-bootable-usb-stick"},"1.1 - Create a bootable USB stick"),(0,o.kt)("h4",{id:"requirments"},"Requirments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"4GB or larger USB flash drive"),(0,o.kt)("li",{parentName:"ul"},"A personal computer")),(0,o.kt)("h4",{id:"follow-these-steps-to-download-the-iso-file-and-image-the-usb-flash-drive"},"Follow these steps to download the ISO file and image the USB flash drive:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit the ",(0,o.kt)("a",{parentName:"li",href:"https://ubuntu.com/download/server"},"Ubuntu Server")," download page."),(0,o.kt)("li",{parentName:"ol"},'Choose "Option 2 - Manual Installation"'),(0,o.kt)("li",{parentName:"ol"},'Choose "Download Ubuntu Server 22.04 LTS"'),(0,o.kt)("li",{parentName:"ol"},"Follow the guide on Ubuntu's website. Choose the appropriate guide below for your personal computer's operating system. You still start with step 3")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#3-usb-selection"},"Windows guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ubuntu.com/tutorials/create-a-usb-stick-on-macos#3-prepare-the-usb-stick"},"macOS guide"),".")),(0,o.kt)("h3",{id:"12---install-the-server"},"1.2 - Install the server"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Attach a monitor and keyboard to your node machine. "),(0,o.kt)("li",{parentName:"ol"},"Follow ",(0,o.kt)("a",{parentName:"li",href:"https://ubuntu.com/tutorials/install-ubuntu-server#1-overview"},"Ubuntu's official guide")," to install the operating system. After step 14 is complete, and the system reboots, you should see a login screen:"),(0,o.kt)("li",{parentName:"ol"},"Login with the username and password created during the installation.")),(0,o.kt)("h3",{id:"13---determine-node-ip-address"},"1.3 - Determine node IP address"),(0,o.kt)("p",null,"We will need to know the node's IP address for the next step in the guide."),(0,o.kt)("p",null,"Type",(0,o.kt)("inlineCode",{parentName:"p"}," hostname -I")," on the command line to determine the IP address of your node."),(0,o.kt)("h2",{id:"step-2---connect-to-your-node"},"Step 2 - Connect to your node"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you installed Ubuntu Desktop, skip to step 3 and run commands in the desktop terminal application.")),(0,o.kt)("p",null,"This step will establish a basic SSH connection from your personal computer to your node. "),(0,o.kt)("p",null,"Choose the operating system of your personal computer below for the correct instructions."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Windows",label:"Windows (Putty)",mdxType:"TabItem"},(0,o.kt)("h4",{id:"21---download-and-install-putty"},"2.1 - Download and install PuTTY"),(0,o.kt)("p",null,"PuTTY is a free and popular SSH client for Windows"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit the ",(0,o.kt)("a",{parentName:"li",href:"https://putty.org"},"PuTTY")," website"),(0,o.kt)("li",{parentName:"ol"},"Download the MSI installer"),(0,o.kt)("li",{parentName:"ol"},"Run the installer"),(0,o.kt)("li",{parentName:"ol"},'Choose "Install anyway if prompted with a warning from Microsoft.'),(0,o.kt)("li",{parentName:"ol"},"Accept the default options during installation")),(0,o.kt)("h4",{id:"22---configure-putty"},"2.2 - Configure PuTTY"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open PuTTY"),(0,o.kt)("li",{parentName:"ol"},"Enter your node's IP address (",(0,o.kt)("a",{parentName:"li",href:"#13---determine-node-ip-address"},"from step 1.3"),") in the Host Name box"),(0,o.kt)("li",{parentName:"ol"},'Click "open"'),(0,o.kt)("li",{parentName:"ol"},'Click "Accept" when prompted with the security alert.'),(0,o.kt)("li",{parentName:"ol"},"Enter your node user name and password")),(0,o.kt)("p",null,"You should now see the same command prompt you used while directly interacting with your node machine in the previous steps."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In Step 5, we will copy and paste commands from this guide into the PuTTY terminal. "),(0,o.kt)("p",{parentName:"admonition"},"To copy commands from the guide, hover over the top right corner of the gray command block and click the copy button."),(0,o.kt)("p",{parentName:"admonition"},"Right-click anywhere inside the terminal window to paste the command."))),(0,o.kt)(l.Z,{value:"windows-ps",label:"Windows PowerShell",mdxType:"TabItem"},(0,o.kt)("h4",{id:"21---open-powershell-as-administrator"},"2.1 - Open PowerShell as administrator"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"Win+R")," to open run"),(0,o.kt)("li",{parentName:"ol"},"Type ",(0,o.kt)("inlineCode",{parentName:"li"},"powershell")),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"Ctrl+Shift+Enter"))),(0,o.kt)("h4",{id:"22---install-openssh"},"2.2 - Install OpenSSH"),(0,o.kt)("p",null,"Copy/Paste this command into PowerShell. To copy commands from the guide, hover over the top right corner of the gray command block and click the copy button. To paste into PowerShell, right-click anywhere in the PowerShell window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0\n")),(0,o.kt)("h4",{id:"23---connect-to-node"},"2.3 - Connect to node"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Establish an SSH connection using a command with this syntax: ",(0,o.kt)("inlineCode",{parentName:"li"},"ssh <node-user>@<node-ip>"),"Example command: ",(0,o.kt)("inlineCode",{parentName:"li"},"ssh joe@192.168.1.5")),(0,o.kt)("li",{parentName:"ol"},"Type ",(0,o.kt)("inlineCode",{parentName:"li"},"yes")," and press ",(0,o.kt)("inlineCode",{parentName:"li"},"Enter")," when prompted with the authenticity warning."),(0,o.kt)("li",{parentName:"ol"},"Enter the node user's password")),(0,o.kt)("p",null,"You should now see the same command prompt you used while directly interacting with your node machine in the previous steps.")),(0,o.kt)(l.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,o.kt)("h4",{id:"21---open-terminal"},"2.1 - Open terminal"),(0,o.kt)("p",null,"Go to Applications > Utilities, and then open Terminal"),(0,o.kt)("h4",{id:"22---connect-to-node"},"2.2 - Connect to node"),(0,o.kt)("p",null,"Establish an SSH connection using a command with this syntax: ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh <node-user>@<node-ip>")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Example command: ",(0,o.kt)("inlineCode",{parentName:"li"},"ssh joe@192.168.1.5")),(0,o.kt)("li",{parentName:"ol"},"Type ",(0,o.kt)("inlineCode",{parentName:"li"},"yes")," and press ",(0,o.kt)("inlineCode",{parentName:"li"},"Enter")," when prompted with the authenticity warning."),(0,o.kt)("li",{parentName:"ol"},"Enter the node user's password")),(0,o.kt)("p",null,"You should now see the same command prompt you used while directly interacting with your node machine in the previous steps."),(0,o.kt)("p",null,"Copy and paste this guide's commands from the grey block into the terminal window."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In Step 5 we will copy and paste commands from this guide into the terminal."),(0,o.kt)("p",{parentName:"admonition"},"To copy commands from the guide, hover over the top right corner of the gray command block and click the copy button."),(0,o.kt)("p",{parentName:"admonition"},"To paste a copied command into a Mac terminal, choose ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Paste")," from the terminal window.")))),(0,o.kt)("h2",{id:"step-3---update-system"},"Step 3 - Update System"),(0,o.kt)("p",null,"It is vital to the security of your node that your server is kept up-to-date."),(0,o.kt)("h3",{id:"31---update-the-server"},"3.1 - Update the server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt-get update -y && sudo apt dist-upgrade -y\nsudo apt-get autoremove\nsudo apt-get autoclean\n")),(0,o.kt)("p",null,'If a "Deamons using outdated libraries" screen appears, restart all.'),(0,o.kt)("h3",{id:"32---enable-automatic-updates"},"3.2 - Enable automatic updates"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt-get install unattended-upgrades\nsudo dpkg-reconfigure -plow unattended-upgrades\n")),(0,o.kt)("p",null,"Choose yes and press ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter")),(0,o.kt)("h3",{id:"33-install-dependencies"},"3.3 Install Dependencies"),(0,o.kt)("p",null,"Nano is the command-line text editor used throughout this guide."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install -y nano wget make git\n")),(0,o.kt)("h2",{id:"step-4---reserve-node-ip-address"},"Step 4 - Reserve Node IP Address"),(0,o.kt)("p",null,"Address reservation ensures your router always assigns the same IP address to your node. "),(0,o.kt)("h3",{id:"41---router-login"},"4.1 - Router Login"),(0,o.kt)("p",null,"Determine your router's IP address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="copy/paste this command"',title:'"copy/paste',this:!0,'command"':!0},"netstat -nr | awk '$1 == \"0.0.0.0\"{print$2}'\n")),(0,o.kt)("p",null,"Open a web browser on your personal computer and enter your router's IP address."),(0,o.kt)("p",null,"A username and password prompt will appear. You will need to reset your router to its default setting if you do not know your credential. Refer to your router manual for instructions."),(0,o.kt)("h3",{id:"42---configure-router"},"4.2 - Configure Router"),(0,o.kt)("p",null,"Find the IP address of your node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="copy/paste this command"',title:'"copy/paste',this:!0,'command"':!0},"hostname -I\n")),(0,o.kt)("p",null,"Find the setting for reserving IP addresses. \u201cDHCP Settings\u201d or \u201cDHCP Reservation\u201d are common terms. Refer to your router\u2019s manual for specific instructions."),(0,o.kt)("p",null,"Configure the router to reserve this address"),(0,o.kt)("p",null,"Shut down the node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="copy/paste this command"',title:'"copy/paste',this:!0,'command"':!0},"shutdown -h now\n")),(0,o.kt)("h2",{id:"step-5---configure-auto-start"},"Step 5 - Configure Auto Start"),(0,o.kt)("p",null,"It is important to set up your node to power on automatically after a power outage. The setting is usually found in the BIOS, but some systems use a jumper on the motherboard. Refer to your hardware manual for instructions."),(0,o.kt)("p",null,"For Intel NUC, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Power on your node machine"),(0,o.kt)("li",{parentName:"ol"},"Press F2 before the server boots to enter BIOS setup"),(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Power")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Secondary Power Settings")," menu"),(0,o.kt)("li",{parentName:"ol"},"Set the option for ",(0,o.kt)("inlineCode",{parentName:"li"},"After Power Failure")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"Power On")),(0,o.kt)("li",{parentName:"ol"},"Press F10 to save changes and exit BIOS")),(0,o.kt)("p",null,"Test the setting by unplugging the power cord while the system is running. It should turn on and boot when you plug it back in."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Credits:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/lykhonis/lukso-node-guide#auto-start"},"Vlad's Guide")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/metanull-operator/eth2-ubuntu"},"Setup an Eth2 Mainnet Validator System on Ubuntu")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/enuHBXGS"},"ethstaker")),(0,o.kt)("hr",null))}c.isMDXComponent=!0}}]);