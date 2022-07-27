"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var u=2;u<i;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3612:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(7294),a=n(6010),i=n(5281),l=n(5999);const r="admonition_LlT9",s="admonitionHeading_tbUL",u="admonitionIcon_kALy",p="admonitionContent_S0QG";const d={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(l.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(l.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(l.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(l.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(l.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},c={secondary:"note",important:"info",success:"tip",warning:"danger"};function m(e){var t;const{mdxAdmonitionTitle:n,rest:a}=function(e){const t=o.Children.toArray(e),n=t.find((e=>{var t;return o.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),a=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:a}}function h(e){const{children:t,type:n,title:l,icon:h}=m(e),k=function(e){var t;const n=null!=(t=c[e])?t:e;return d[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),d.info)}(n),f=null!=l?l:k.label,{iconComponent:y}=k,g=null!=h?h:o.createElement(y,null);return o.createElement("div",{className:(0,a.Z)(i.k.common.admonition,i.k.common.admonitionType(e.type),"alert","alert--"+k.infimaClassName,r)},o.createElement("div",{className:s},o.createElement("span",{className:u},g),f),o.createElement("div",{className:p},t))}},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(7294),a=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(7462),a=n(7294),i=n(6010),l=n(2389),r=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n;const{lazy:l,block:c,defaultValue:m,values:h,groupId:k,className:f}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:y.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),v=(0,r.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[S,C]=(0,a.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=k){const e=w[k];null!=e&&e!==S&&g.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),o=g[n].value;o!==S&&(P(t),C(o),null!=k&&N(k,String(o)))},H=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var o;const t=T.indexOf(e.currentTarget)+1;n=null!=(o=T[t])?o:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>T.push(e),onKeyDown:H,onFocus:E,onClick:E},l,{className:(0,i.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,l.Z)();return a.createElement(c,(0,o.Z)({key:String(t)},e))}},9041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var o=n(7462),a=(n(7294),n(3905)),i=n(5488),l=n(5162);n(3612);const r={title:"Part 2 - Security",sidebar_position:2},s=void 0,u={unversionedId:"node-validator-guide/security",id:"node-validator-guide/security",title:"Part 2 - Security",description:"- Grammerly",source:"@site/docs/node-validator-guide/2-security.md",sourceDirName:"node-validator-guide",slug:"/node-validator-guide/security",permalink:"/docusaurus-test/node-validator-guide/security",draft:!1,editUrl:"https://github.com/KEEZ-RobG/docusaurus-test/tree/main/packages/create-docusaurus/templates/shared/docs/node-validator-guide/2-security.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Part 2 - Security",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Part 1 - System Setup",permalink:"/docusaurus-test/node-validator-guide/system-setup"},next:{title:"Part 3 - Network Setup",permalink:"/docusaurus-test/node-validator-guide/network-setup"}},p={},d=[{value:"Step 1: Configure SSH",id:"step-1-configure-ssh",level:3},{value:"Step 2: Generate the OpenSSH-compatible Keys with PuTTYgen",id:"step-2-generate-the-openssh-compatible-keys-with-puttygen",level:3},{value:"Step 3: Save The Public Key On The Server",id:"step-3-save-the-public-key-on-the-server",level:3},{value:"Step 4: Secure SSH access",id:"step-4-secure-ssh-access",level:3},{value:"4.1 Open the SSH config file",id:"41-open-the-ssh-config-file",level:4},{value:"4.2 Change SSH Port Number",id:"42-change-ssh-port-number",level:4},{value:"4.3 Disable root and password log in:",id:"43-disable-root-and-password-log-in",level:4},{value:"4.4 Disable root access",id:"44-disable-root-access",level:4},{value:"4.5 Configure firewall",id:"45-configure-firewall",level:4},{value:"Step 5: Create a PuTTY Profile to Save Your Server&#39;s Settings",id:"step-5-create-a-putty-profile-to-save-your-servers-settings",level:3},{value:"Configure Personal Device - Ubuntu",id:"configure-personal-device---ubuntu",level:2},{value:"Update SSH Config",id:"update-ssh-config",level:3},{value:"Generate SSH Keys",id:"generate-ssh-keys",level:3},{value:"Disable Non-Key Remote Access",id:"disable-non-key-remote-access",level:3},{value:"Verify Remote Access",id:"verify-remote-access",level:3},{value:"Keep System Up to Date",id:"keep-system-up-to-date",level:3},{value:"Disable Root Access",id:"disable-root-access",level:3},{value:"Block Unauthorized Access",id:"block-unauthorized-access",level:3},{value:"Improve SSH Connection",id:"improve-ssh-connection",level:3},{value:"Configure Personal Device - Windows",id:"configure-personal-device---windows",level:2},{value:"Comming Soon",id:"comming-soon",level:3},{value:"Configure Personal Device - Mac",id:"configure-personal-device---mac",level:2},{value:"Comming Soon",id:"comming-soon-1",level:3}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"ToDo",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Grammerly"))),(0,a.kt)("h1",{id:"ssh-hardening"},"SSH hardening"),(0,a.kt)("p",null,"This guide will add security to the SSH connection by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configuring private keys only authentication"),(0,a.kt)("li",{parentName:"ul"},"Disabling SSH for root"),(0,a.kt)("li",{parentName:"ul"},"Changing the SSH port to a random number")),(0,a.kt)("p",null,"Choose your personal computer's operating system and SSH client"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Windows",label:"Windows (Putty)",mdxType:"TabItem"},(0,a.kt)("h3",{id:"step-1-configure-ssh"},"Step 1: Configure SSH"),(0,a.kt)("h3",{id:"step-2-generate-the-openssh-compatible-keys-with-puttygen"},"Step 2: Generate the OpenSSH-compatible Keys with PuTTYgen"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start the PuTTYgen utility, by double-clicking on its .exe file or pressing the Windows key and searching for PuTTYgen"),(0,a.kt)("li",{parentName:"ol"},"For Type of key to generate, select SSH-2 RSA"),(0,a.kt)("li",{parentName:"ol"},"In the Number of bits in a generated key field, specify 4096"),(0,a.kt)("li",{parentName:"ol"},"Click the Generate button"),(0,a.kt)("li",{parentName:"ol"},"Move your mouse pointer around in the blank area of the Key section, below the progress bar (to generate some randomness) until the progress bar is full"),(0,a.kt)("li",{parentName:"ol"},"A private/ public key pair has now been generated"),(0,a.kt)("li",{parentName:"ol"},"Type a passphrase in the Key passphrase field & re-type the same passphrase in the Confirm passphrase field"),(0,a.kt)("li",{parentName:"ol"},"Click the Save public key button & choose whatever filename you'd like (some users create a folder in their computer named my_keys)"),(0,a.kt)("li",{parentName:"ol"},"Click the Save private key button & choose whatever filename you'd like (you can save it in the same location as the public key, but it should be a location that only you can access)"),(0,a.kt)("li",{parentName:"ol"},"Right-click in the text field labeled Public key for pasting into OpenSSH authorized_keys file and choose Select All"),(0,a.kt)("li",{parentName:"ol"},"Right-click again in the same text field and choose Copy")),(0,a.kt)("h3",{id:"step-3-save-the-public-key-on-the-server"},"Step 3: Save The Public Key On The Server"),(0,a.kt)("p",null,"You now need to paste the public key copied in the last step in the ",(0,a.kt)("inlineCode",{parentName:"p"},"authorized_keys")," file on your node."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log into you node ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh <node-user>@<node-ip>")),(0,a.kt)("li",{parentName:"ol"},"Open the file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nano ~/.ssh/authorized_keys\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Paste the SSH public key into the file"),(0,a.kt)("li",{parentName:"ol"},"Save and exit by pressing ",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + X"),", then ",(0,a.kt)("inlineCode",{parentName:"li"},"y")," , then ",(0,a.kt)("inlineCode",{parentName:"li"},"Enter"))),(0,a.kt)("h3",{id:"step-4-secure-ssh-access"},"Step 4: Secure SSH access"),(0,a.kt)("h4",{id:"41-open-the-ssh-config-file"},"4.1 Open the SSH config file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo nano /etc/ssh/sshd_config\n")),(0,a.kt)("h4",{id:"42-change-ssh-port-number"},"4.2 Change SSH Port Number"),(0,a.kt)("p",null,"The default SSH port (22) should be changed to a random number for security reasons."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Find ",(0,a.kt)("inlineCode",{parentName:"li"},"#Port 22")),(0,a.kt)("li",{parentName:"ol"},"Remove the ",(0,a.kt)("inlineCode",{parentName:"li"},"#")),(0,a.kt)("li",{parentName:"ol"},"Choose a number between 1024 thru 49141"),(0,a.kt)("li",{parentName:"ol"},"Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"22")," with your number"),(0,a.kt)("li",{parentName:"ol"},"Remain in the editor\n:::Note\nFor the rest of this guide when you see ",(0,a.kt)("inlineCode",{parentName:"li"},"<ssh-port>")," replace it with the number you chose in this step.\n:::")),(0,a.kt)("h4",{id:"43-disable-root-and-password-log-in"},"4.3 Disable root and password log in:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"ChallengeResponseAuthentication")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"no")),(0,a.kt)("li",{parentName:"ol"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"PasswordAuthentication")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"no")),(0,a.kt)("li",{parentName:"ol"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"PermitRootLogin")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"prohibit-password")),(0,a.kt)("li",{parentName:"ol"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"PermitEmptyPasswords")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"no")),(0,a.kt)("li",{parentName:"ol"},"Save and exit by pressing ",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + X"),", then ",(0,a.kt)("inlineCode",{parentName:"li"},"y")," , then ",(0,a.kt)("inlineCode",{parentName:"li"},"Enter"))),(0,a.kt)("h4",{id:"44-disable-root-access"},"4.4 Disable root access"),(0,a.kt)("p",null,"A root access should not be used. Instead, a user should be using sudo to perform privilged operations on a system."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo passwd -l root\n")),(0,a.kt)("h4",{id:"45-configure-firewall"},"4.5 Configure firewall"),(0,a.kt)("p",null,"By default deny all traffic:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo ufw default deny incoming\nsudo ufw default allow outgoing\n")),(0,a.kt)("p",null,"Allow SSH access"),(0,a.kt)("p",null,"Type ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo ufw allow <ssh-port>/tcp")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"<ssh-port>")," replaced"),(0,a.kt)("p",null,"Enable firewall"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo ufw enable\n")),(0,a.kt)("p",null,"Logout"),(0,a.kt)("h3",{id:"step-5-create-a-putty-profile-to-save-your-servers-settings"},"Step 5: Create a PuTTY Profile to Save Your Server's Settings"),(0,a.kt)("p",null,"Create a profile to save you connection information."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start PuTTY by double-clicking its executable file or pressing the Windows key and searching for PuTTY"),(0,a.kt)("li",{parentName:"ol"},"Navigate PuTTY's various categories, along the left-hand side of the window"),(0,a.kt)("li",{parentName:"ol"},"PuTTY's initial window is the Session Category"),(0,a.kt)("li",{parentName:"ol"},"In the Host Name field, enter the IP address of your node ",(0,a.kt)("inlineCode",{parentName:"li"},"<node-ip>")),(0,a.kt)("li",{parentName:"ol"},"Enter the port number in the Port field ",(0,a.kt)("inlineCode",{parentName:"li"},"<ssh-port>")),(0,a.kt)("li",{parentName:"ol"},"Select SSH under Protocol"),(0,a.kt)("li",{parentName:"ol"},"Along the left-hand side of the window, select the Data sub-category, under Connection;"),(0,a.kt)("li",{parentName:"ol"},"Enter your node username in the Auto-login username field ",(0,a.kt)("inlineCode",{parentName:"li"},"<node-user>")),(0,a.kt)("li",{parentName:"ol"},"Expand the SSH sub-category, under Connection;"),(0,a.kt)("li",{parentName:"ol"},"Highlight the Auth sub-category and click the Browse button, on the right-hand side of the PuTTY window;"),(0,a.kt)("li",{parentName:"ol"},"Browse to and select your previously-created private key;"),(0,a.kt)("li",{parentName:"ol"},"Return to the Session Category and enter a name for this profile in the Saved Sessions field;"),(0,a.kt)("li",{parentName:"ol"},"Click the Save button for the Load, Save or Delete a stored session")),(0,a.kt)("p",null,"Now you can log in to your node and you will not be prompted for a password. However, if you had set a passphrase on your public key, you will be asked to enter the passphrase at that time (and every time you log in, in the future).")),(0,a.kt)(l.Z,{value:"windows-ps",label:"Windows PowerShell",mdxType:"TabItem"}),(0,a.kt)(l.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"})),">",(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The next steps will be performed your ",(0,a.kt)("strong",{parentName:"p"},"personal device"),"."),(0,a.kt)("p",{parentName:"admonition"},"Choose you device's operating system from the tabs below.")),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ubuntu",label:"Ubuntu",mdxType:"TabItem"},(0,a.kt)("admonition",{title:"ToDo",type:"danger"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Run"),(0,a.kt)("li",{parentName:"ul"},"Grammerly"))),(0,a.kt)("h2",{id:"configure-personal-device---ubuntu"},"Configure Personal Device - Ubuntu"),(0,a.kt)("p",null,"The next steps will configure the client software on a personal device running Ubuntu. You will use this device to control your node remotely."),(0,a.kt)("h3",{id:"update-ssh-config"},"Update SSH Config"),(0,a.kt)("p",null,"The SSH command requires the username, IP address, and port number of the node machine. "),(0,a.kt)("p",null,"Simplify the SSH command by updating the SSH config file with your node credentials."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nano ~/.ssh/config \n")),(0,a.kt)("p",null,"Copy/Paste the following into the config file.\nReplace ",(0,a.kt)("inlineCode",{parentName:"p"},"<node-user>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<node-ip>"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"<ssh-port>"),"\nIP address and port number have been determined in previous steps.\n",(0,a.kt)("inlineCode",{parentName:"p"},"<node-user>")," is your node machine's user name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Host lukso\n  User <node-user>\n  HostName <node-ip>\n  Port <ssh-port>\n")),(0,a.kt)("p",null,"Attempt to connect to verify the configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh lukso\n")),(0,a.kt)("p",null,"Enter the password of your node machine. "),(0,a.kt)("p",null,"You should now see the command line of you node machine."),(0,a.kt)("p",null,"Type ",(0,a.kt)("inlineCode",{parentName:"p"},"exit")," to close the SSH connection. You are not back on the command line of your personal device."),(0,a.kt)("h3",{id:"generate-ssh-keys"},"Generate SSH Keys"),(0,a.kt)("p",null,"SSH is more secure when using public/pricate keys instead of a password. In this step we well generate keys on your personal device and send the public key to the node machine."),(0,a.kt)("p",null,"On your ",(0,a.kt)("strong",{parentName:"p"},"personal device"),", create a new key pair for ssh authentication."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh-keygen -t rsa -b 4096\n")),(0,a.kt)("p",null,"Copy the public key ",(0,a.kt)("strong",{parentName:"p"},"keyname.pub")," to a node machine. Replace ",(0,a.kt)("strong",{parentName:"p"},"keyname.pub")," with a key in home directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh-copy-id -i ~/.ssh/keyname.pub lukso\n")),(0,a.kt)("h3",{id:"disable-non-key-remote-access"},"Disable Non-Key Remote Access"),(0,a.kt)("p",null,"On a personal computer, try to ssh again. This time it should not prompt for a password."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh lukso\n")),(0,a.kt)("p",null,"Open the SSH configuration file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo nano /etc/ssh/sshd_config\n")),(0,a.kt)("p",null,"Find and modify the following options:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ChallengeResponseAuthentication no"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"PasswordAuthentication no"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"PermitRootLogin prohibit-password"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"PermitEmptyPasswords no")),(0,a.kt)("p",null,"Save changes and close editor. (",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"X"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter"),")"),(0,a.kt)("p",null,"Validate SSH configuration and restart ssh service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo sshd -t\nsudo systemctl restart sshd\n")),(0,a.kt)("p",null,"Close the ssh connection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"exit\n")),(0,a.kt)("h3",{id:"verify-remote-access"},"Verify Remote Access"),(0,a.kt)("p",null,"Reconnect to your node machine"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh lukso\n")),(0,a.kt)("p",null,"Stay connected to a remote node machine to perform next steps."),(0,a.kt)("h3",{id:"keep-system-up-to-date"},"Keep System Up to Date"),(0,a.kt)("p",null,"Update your system manually:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get update -y\nsudo apt dist-upgrade -y\nsudo apt-get autoremove\nsudo apt-get autoclean\n")),(0,a.kt)("p",null,"Configure your system to automatically update:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install unattended-upgrades\nsudo dpkg-reconfigure -plow unattended-upgrades\n")),(0,a.kt)("h3",{id:"disable-root-access"},"Disable Root Access"),(0,a.kt)("p",null,"A root access should not be used. Instead, a user should be using the ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," command to perform privilged operations on a system."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo passwd -l root\n")),(0,a.kt)("h3",{id:"block-unauthorized-access"},"Block Unauthorized Access"),(0,a.kt)("p",null,"Install Fail2ban to block IP addresses that are attempting to access our node. Fail2ban blocks addresses after a certain number of failed attempts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install fail2ban -y\n")),(0,a.kt)("p",null,"Edit a config to monitor ssh logins"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo nano /etc/fail2ban/jail.local\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("em",{parentName:"p"},"replace-port")," to match the ssh port number."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[sshd]\nenabled=true\nport=replace-port\nfilter=sshd\nlogpath=/var/log/auth.log\nmaxretry=3\nignoreip=\n")),(0,a.kt)("p",null,"Save changes and close the editor"),(0,a.kt)("p",null,"Restart the service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl restart fail2ban\n")),(0,a.kt)("h3",{id:"improve-ssh-connection"},"Improve SSH Connection"),(0,a.kt)("p",null,"WiFi power managment may slow down SSH connections. Modifying a config file will disable it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo nano /etc/NetworkManager/conf.d/default-wifi-powersave-on.conf\n")),(0,a.kt)("p",null,"Find the wifi.power setting and change to to match the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[connection]\nwifi.powersave = 2\n")),(0,a.kt)("p",null,"Save changes and close the editor."),(0,a.kt)("p",null,"Restart ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkManager")," service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl restart NetworkManager\n"))),(0,a.kt)(l.Z,{value:"windows",label:"Windows (PuTTY)",mdxType:"TabItem"},(0,a.kt)("h2",{id:"configure-personal-device---windows"},"Configure Personal Device - Windows"),(0,a.kt)("admonition",{title:"ToDo",type:"danger"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Write"),(0,a.kt)("li",{parentName:"ul"},"Run"),(0,a.kt)("li",{parentName:"ul"},"Grammerly"))),(0,a.kt)("p",null,"The next steps will configure PuTTY (SSH client software) on a personal device running Windows. You will use this device to control your node remotely."),(0,a.kt)("h3",{id:"comming-soon"},"Comming Soon")),(0,a.kt)(l.Z,{value:"mac",label:"Mac",mdxType:"TabItem"},(0,a.kt)("h2",{id:"configure-personal-device---mac"},"Configure Personal Device - Mac"),(0,a.kt)("admonition",{title:"ToDo",type:"danger"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"find someone with a mac"))),(0,a.kt)("p",null,"The next steps will configure the client software on a personal device running Mac OS. You will use this device to control your node remotely."),(0,a.kt)("h3",{id:"comming-soon-1"},"Comming Soon"))),(0,a.kt)("p",null,"Credits\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lykhonis/lukso-node-guide#auto-start"},"Vlad's Guide"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/metanull-operator/eth2-ubuntu"},"Setup an Eth2 Mainnet Validator System on Ubuntu")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement"},"https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.how2shout.com/how-to/how-to-login-into-ubuntu-using-ssh-from-windows-10-8-7.html"},"https://www.how2shout.com/how-to/how-to-login-into-ubuntu-using-ssh-from-windows-10-8-7.html")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://support.hostway.com/hc/en-us/articles/115001509884-How-To-Use-SSH-Keys-on-Windows-Clients-with-PuTTY-"},"https://support.hostway.com/hc/en-us/articles/115001509884-How-To-Use-SSH-Keys-on-Windows-Clients-with-PuTTY-")))}m.isMDXComponent=!0}}]);