"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(n),p=o,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3612:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7294),o=n(6010),r=n(5281),l=n(5999);const i="admonition_LlT9",s="admonitionHeading_tbUL",d="admonitionIcon_kALy",c="admonitionContent_S0QG";const u={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(l.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(l.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(l.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(l.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(l.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function p(e){var t;const{mdxAdmonitionTitle:n,rest:o}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:o}}function f(e){const{children:t,type:n,title:l,icon:f}=p(e),h=function(e){var t;const n=null!=(t=m[e])?t:e;return u[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),u.info)}(n),k=null!=l?l:h.label,{iconComponent:g}=h,v=null!=f?f:a.createElement(g,null);return a.createElement("div",{className:(0,o.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert","alert--"+h.infimaClassName,i)},a.createElement("div",{className:s},a.createElement("span",{className:d},v),k),a.createElement("div",{className:c},t))}},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7462),o=n(7294),r=n(6010),l=n(2389),i=n(7392),s=n(7094),d=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:p,values:f,groupId:h,className:k}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===p?p:null!=(t=null!=p?p:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[E,C]=(0,o.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=h){const e=N[h];null!=e&&e!==E&&v.some((t=>t.value===e))&&C(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),a=v[n].value;a!==E&&(T(t),C(a),null!=h&&w(h,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var o;const t=x.indexOf(e.currentTarget)-1;n=null!=(o=x[t])?o:x[x.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},k)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>x.push(e),onKeyDown:P,onFocus:O,onClick:O},l,{className:(0,r.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function p(e){const t=(0,l.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},3819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));n(5488),n(5162),n(3612);const r={title:"Start Here",sidebar_position:0},l="How to use THE guide",i={unversionedId:"node-validator-guide/start-here",id:"node-validator-guide/start-here",title:"Start Here",description:"User specific information",source:"@site/docs/node-validator-guide/start-here.md",sourceDirName:"node-validator-guide",slug:"/node-validator-guide/start-here",permalink:"/docs/node-validator-guide/start-here",draft:!1,editUrl:"https://github.com/LYXstaker/docs/tree/main/packages/create-docusaurus/templates/shared/docs/node-validator-guide/start-here.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Start Here",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Part 1 - Setup Node Machine",permalink:"/docs/node-validator-guide/node-machine"}},s={},d=[{value:"User specific information",id:"user-specific-information",level:2},{value:"Codeblocks",id:"codeblocks",level:2},{value:"Terminal commands",id:"terminal-commands",level:3},{value:"Configuration files",id:"configuration-files",level:3},{value:"Example information",id:"example-information",level:3},{value:"Guide Order",id:"guide-order",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use-the-guide"},"How to use THE guide"),(0,o.kt)("h2",{id:"user-specific-information"},"User specific information"),(0,o.kt)("p",null,"Usernames, passwords, and IP addresses will differ for each user. The table below identifies these variables, the step where they are determined, and the syntax used to represent them in commands. Examples are provided in the next section."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Variable data"),(0,o.kt)("th",{parentName:"tr",align:null},"Part/Section"),(0,o.kt)("th",{parentName:"tr",align:null},"Syntax"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node user name"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<node-user>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node IP address"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<node-ip>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Router IP address"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<router-ip>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SSH port"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<ssh-port>"))))),(0,o.kt)("h2",{id:"codeblocks"},"Codeblocks"),(0,o.kt)("p",null,"You will see gray code blocks throughout the guide that allow you to easily copy and paste information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"example code block\n")),(0,o.kt)("p",null,"Hovering over the top right side of a code block reveals a copy icon, which allows you to copy the information without highlighting the text."),(0,o.kt)("p",null,"Codeblocks are used for"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"terminal commands"),(0,o.kt)("li",{parentName:"ul"},"configuration files"),(0,o.kt)("li",{parentName:"ul"},"examples")),(0,o.kt)("p",null,"Codeblock will have titles that indicate their use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Code block title"',title:'"Code',block:!0,'title"':!0},"code block\n")),(0,o.kt)("p",null,"The following are examples of the types of codeblocks you will see in this guide."),(0,o.kt)("h3",{id:"terminal-commands"},"Terminal commands"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"no title"),": all blocks without a title are terminal commands. copy and paste them directly to the terminal prompt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nano ~/.ssh/config\n")),(0,o.kt)("h3",{id:"configuration-files"},"Configuration files"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"filename"),": codeblock titles that contain filenames contain information to copy/paste into a file editor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=~/.ssh/config",title:"~/.ssh/config"},"Host lukso\n  User <node-user>\n  HostName <node-ip>\n  Port <ssh-port>\n")),(0,o.kt)("h3",{id:"example-information"},"Example information"),(0,o.kt)("p",null,"Some codeblocks will be used for example of what a file should look like or commands that need use-specific data. They will be titled ",(0,o.kt)("strong",{parentName:"p"},"Do not copy/paste")),(0,o.kt)("p",null,"This block is for a step that requires modifying a configuration file. It shows you what the file should look like after you make the modification. In this example, we are instructed to find the ",(0,o.kt)("inlineCode",{parentName:"p"},"wifi.powersave")," setting and change the value to ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Example file - do not copy/paste"',title:'"Example',file:!0,"-":!0,do:!0,not:!0,'copy/paste"':!0},"[connection]\nwifi.powersave = 2\n")),(0,o.kt)("p",null,"This block is a command that contains information specific to the individual user of the guide. In this example, a username and IP address is needed in the command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="User-specific command - do not copy/paste"',title:'"User-specific',command:!0,"-":!0,do:!0,not:!0,'copy/paste"':!0},"ssh <node-user>@<node-ip>\n")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"joe"),"'s IP address is ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.1.10")," he would type the command ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh joe@192.168.1.10")),(0,o.kt)("h2",{id:"guide-order"},"Guide Order"),(0,o.kt)("p",null,'When using this guide to setup a node from start to finish, use the "next" button at the bottom of the pages to ensure you complete all steps and in the correct order.'),(0,o.kt)("hr",null),(0,o.kt)("p",null,"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lykhonis/lukso-node-guide#auto-start"},"Vlad's Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/metanull-operator/eth2-ubuntu"},"Setup an Eth2 Mainnet Validator System on Ubuntu")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/enuHBXGS"},"ethstaker"))),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);