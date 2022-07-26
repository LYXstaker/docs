"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"Step 1 - System Setup",sidebar_position:1},l=void 0,i={unversionedId:"node-validator-guide/system-setup",id:"node-validator-guide/system-setup",title:"Step 1 - System Setup",description:"- Run",source:"@site/docs/node-validator-guide/1-system-setup.md",sourceDirName:"node-validator-guide",slug:"/node-validator-guide/system-setup",permalink:"/docusaurus-test/node-validator-guide/system-setup",draft:!1,editUrl:"https://github.com/KEEZ-RobG/docusaurus-test/tree/main/packages/create-docusaurus/templates/shared/docs/node-validator-guide/1-system-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Step 1 - System Setup",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"About the guide",permalink:"/docusaurus-test/"},next:{title:"Step 2 - Remote Access ",permalink:"/docusaurus-test/node-validator-guide/remote-access/"}},s={},u=[{value:"Purchase Hardware",id:"purchase-hardware",level:2},{value:"Minimum Requirements",id:"minimum-requirements",level:3},{value:"Example Hardware",id:"example-hardware",level:3},{value:"Step 1 - Install Ubuntu Server",id:"step-1---install-ubuntu-server",level:2},{value:"1.1 - Create a bootable USB stick",id:"11---create-a-bootable-usb-stick",level:3},{value:"Requirments",id:"requirments",level:4},{value:"Download the ISO",id:"download-the-iso",level:4},{value:"Image the USB drive",id:"image-the-usb-drive",level:4},{value:"1.2 - Install the server",id:"12---install-the-server",level:3},{value:"1.2 Reserve Node IP Address",id:"12-reserve-node-ip-address",level:3},{value:"Router Login",id:"router-login",level:4},{value:"Configure Router",id:"configure-router",level:4},{value:"1.3 Configure Auto Start",id:"13-configure-auto-start",level:3},{value:"1.4 Update System",id:"14-update-system",level:3},{value:"1.5 Install Dependencies",id:"15-install-dependencies",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"ToDo",type:"danger"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Run"),(0,a.kt)("li",{parentName:"ul"},"Grammerly"))),(0,a.kt)("h1",{id:"part-1---system-setup"},"Part 1 - System Setup"),(0,a.kt)("p",null,"In this section we will cover the hardware and operating system needed for running a node."),(0,a.kt)("p",null,"Required equipment:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"USB Drive for Ubuntu Server installation"),(0,a.kt)("li",{parentName:"ul"},"Node Machine"),(0,a.kt)("li",{parentName:"ul"},"Personal computer")),(0,a.kt)("h2",{id:"purchase-hardware"},"Purchase Hardware"),(0,a.kt)("h3",{id:"minimum-requirements"},"Minimum Requirements"),(0,a.kt)("p",null,"These are the minimum hardware requirements for a node machine. Always check ",(0,a.kt)("a",{parentName:"p",href:"https://docs.lukso.tech/networks/l16-testnet/run-node#system-requirements"},"LUKSO's documentation")," for updates."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OS:")," Linux or Mac "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CPU:")," 2 cores"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RAM:")," 16GB"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Storage:")," 100GB SSD (solid state is required)")),(0,a.kt)("p",null,"For a future-proof setup, you may wish to choose a system with 4 cores, a 2.8GHz processor, and 1TB of SSD storage, and 32GB of RAM."),(0,a.kt)("h3",{id:"example-hardware"},"Example Hardware"),(0,a.kt)("p",null,"Mini PCs are designed for 24/7 use and low power consumption, making them ideal for running a LUKSO node. The Intel NUC line of mini PCs is a common choice within the community. Below are the specs and pricing of three different NUC models."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Intel NUC 10 (Minimum)"),(0,a.kt)("th",{parentName:"tr",align:null},"Intel NUC 10"),(0,a.kt)("th",{parentName:"tr",align:null},"Intel NUC 10 Performance Kit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Processor"),(0,a.kt)("td",{parentName:"tr",align:null},"i3 2-cores"),(0,a.kt)("td",{parentName:"tr",align:null},"i5 4-core"),(0,a.kt)("td",{parentName:"tr",align:null},"i7 6-core")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RAM"),(0,a.kt)("td",{parentName:"tr",align:null},"16GB"),(0,a.kt)("td",{parentName:"tr",align:null},"16GB"),(0,a.kt)("td",{parentName:"tr",align:null},"32GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Storage"),(0,a.kt)("td",{parentName:"tr",align:null},"256GB"),(0,a.kt)("td",{parentName:"tr",align:null},"512GB"),(0,a.kt)("td",{parentName:"tr",align:null},"1TB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Price"),(0,a.kt)("td",{parentName:"tr",align:null},"$489"),(0,a.kt)("td",{parentName:"tr",align:null},"$629"),(0,a.kt)("td",{parentName:"tr",align:null},"$949")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Link"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://a.co/d/3g1vg6G"},"Amazon")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://a.co/d/1UdrolU"},"Amazon")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://a.co/d/iE7niEu"},"Amazon"))))),(0,a.kt)("p",null,"A backup system (or parts) is also something to consider. If your node is offline, you will incur slashing penalties roughly equal to the rewards you would have gained while being online. For example, if you average 1 LYX per day in rewards, you will lose 1 LYX per day if offline."),(0,a.kt)("h2",{id:"step-1---install-ubuntu-server"},"Step 1 - Install Ubuntu Server"),(0,a.kt)("p",null,"A node can run on either the Desktop or Server version of Ubuntu. In this guide, we will be using Ubuntu 22.04 LTS ",(0,a.kt)("strong",{parentName:"p"},"Server")," as our node operating system and interacting with out node remotely from a personal computer/laptop. "),(0,a.kt)("p",null,"Using Server + remote SSH access from a personal computer instead of directly attaching a keyboard/monitor to you node has security and performance benefits. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nodes should not run unnecessary software, like web browsers and chat software."),(0,a.kt)("li",{parentName:"ul"},"The Desktop GUI consumes RAM. "),(0,a.kt)("li",{parentName:"ul"},"You can access your node from remote locations, like a tropical island.")),(0,a.kt)("h3",{id:"11---create-a-bootable-usb-stick"},"1.1 - Create a bootable USB stick"),(0,a.kt)("h4",{id:"requirments"},"Requirments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"4GB or larger USB flash drive"),(0,a.kt)("li",{parentName:"ul"},"A personal computer")),(0,a.kt)("h4",{id:"download-the-iso"},"Download the ISO"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit the ",(0,a.kt)("a",{parentName:"li",href:"https://ubuntu.com/download/server"},"Ubuntu Server")," download page."),(0,a.kt)("li",{parentName:"ol"},'Choose "Option 2 - Manual Installation"'),(0,a.kt)("li",{parentName:"ol"},'Choose "Download Ubuntu Server 22.04 LTS"')),(0,a.kt)("h4",{id:"image-the-usb-drive"},"Image the USB drive"),(0,a.kt)("p",null,"Follow the guide on Ubuntu's website for your personal computer's operating syste. There are directions for ",(0,a.kt)("a",{parentName:"p",href:"https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#3-usb-selection"},"Windows")," and  ",(0,a.kt)("a",{parentName:"p",href:"https://ubuntu.com/tutorials/create-a-usb-stick-on-macos#3-prepare-the-usb-stick"},"macOS"),". You will start with step 3. "),(0,a.kt)("h3",{id:"12---install-the-server"},"1.2 - Install the server"),(0,a.kt)("p",null,"Attache a monitor and keyboard to your node machine. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This will be the only time we will need input devices attached.")),(0,a.kt)("p",null,"Follow the official ",(0,a.kt)("a",{parentName:"p",href:"https://ubuntu.com/tutorials/install-ubuntu-server#1-overview"},"Ubuntu guide")," to install the operating system."),(0,a.kt)("p",null,"After step 14 is complete and the system reboots, you should see a login screen:"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"inset image 1-1login.png")),(0,a.kt)("p",null,"Login with the username and password created during the installation."),(0,a.kt)("h3",{id:"12-reserve-node-ip-address"},"1.2 Reserve Node IP Address"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In this section you will will be using both your node machine and personal computer.")),(0,a.kt)("p",null,"Address reservation ensures your router always assigns the same IP address to your node. You will need the following information for these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The IP address of your router"),(0,a.kt)("li",{parentName:"ul"},"The IP address of your node machine"),(0,a.kt)("li",{parentName:"ul"},"The username and password of your router")),(0,a.kt)("h4",{id:"router-login"},"Router Login"),(0,a.kt)("p",null,"Find the IP address of your router:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="enter this command on the command line"',title:'"enter',this:!0,command:!0,on:!0,the:!0,'line"':!0},"netstat -nr | awk '$1 == \"0.0.0.0\"{print$2}'\n")),(0,a.kt)("p",null,"Open a web browser on your personal computer and enter your router's IP address."),(0,a.kt)("p",null,"A username and password prompt will appear. If you do not know your credential, you will need to reset your router to its default setting. Refer to your routers manual for instructions."),(0,a.kt)("h4",{id:"configure-router"},"Configure Router"),(0,a.kt)("p",null,"Find the IP address of your node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="enter this command on the command line"',title:'"enter',this:!0,command:!0,on:!0,the:!0,'line"':!0},"hostname -I\n")),(0,a.kt)("p",null,"Find the setting for reserving IP addresses. The names of this setting can vary from router to router. It is often found under \u201cDHCP Settings\u201d or \u201cDHCP Reservation.\u201d Refer to your router\u2019s manual for specific instructions."),(0,a.kt)("p",null,"Configure the router to reserve this address"),(0,a.kt)("p",null,"Shut down the node"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="type this command on the command line"',title:'"type',this:!0,command:!0,on:!0,the:!0,'line"':!0},"shutdown -h now\n")),(0,a.kt)("h3",{id:"13-configure-auto-start"},"1.3 Configure Auto Start"),(0,a.kt)("p",null,"It is important to set up your node to power back automatically on after a power outage. The setting is usually found in the BIOS, but some systems use a jumper on the motherboard. Refer to your hardware manual for instructions."),(0,a.kt)("p",null,"For Intel NUC, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Power on you node machine"),(0,a.kt)("li",{parentName:"ol"},"Press F2 before the server boots to enter BIOS setup"),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Power")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Secondary Power Settings")," menu"),(0,a.kt)("li",{parentName:"ol"},"Set the option for ",(0,a.kt)("inlineCode",{parentName:"li"},"After Power Failure")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"Power One")),(0,a.kt)("li",{parentName:"ol"},"Press F10 to save changes and exit BIOS")),(0,a.kt)("p",null,"Test the setting by unplugging the power cord while the system is running. It should turn on and boot when you plug it back in."),(0,a.kt)("h3",{id:"14-update-system"},"1.4 Update System"),(0,a.kt)("p",null,"Boot your node"),(0,a.kt)("p",null,"Open the Terminal application and run the following commands. Multiple commands can be copy/pasted at the same time. To paste into the terminal window, right click on the screen and select paste."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get update -y && sudo apt dist-upgrade -y\nsudo apt-get autoremove\nsudo apt-get autoclean\n")),(0,a.kt)("p",null,"Enable automatic updates"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install unattended-upgrades\nsudo dpkg-reconfigure -plow unattended-upgrades\n")),(0,a.kt)("h3",{id:"15-install-dependencies"},"1.5 Install Dependencies"),(0,a.kt)("p",null,"Nano is the command-line text editor used throughout this guide."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt install -y nano wget make git\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Credits:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lykhonis/lukso-node-guide#auto-start"},"Vlad's Guide")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/metanull-operator/eth2-ubuntu"},"Setup an Eth2 Mainnet Validator System on Ubuntu")),(0,a.kt)("hr",null))}p.isMDXComponent=!0}}]);