"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[671],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(4137));const r={sidebar_position:1},i="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Hackathon!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:" /if-docs/intro",draft:!1,editUrl:"https://github.com/fapfaff/if-docs/edit/deploy/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Major Concepts",permalink:" /if-docs/major-concepts/"}},l={},p=[{value:"Hackathon!",id:"hackathon",level:2},{value:"Impact Framework",id:"impact-framework",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Background",id:"background",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Navigating these docs",id:"navigating-these-docs",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("h2",{id:"hackathon"},"Hackathon!"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(832).Z,width:"1128",height:"191"})),(0,a.kt)("hr",null),(0,a.kt)("p",null,"From March 18 to  April 8, 2024, participants will compete to showcase their best application of IF in measuring the environmental impacts of software. "),(0,a.kt)("p",null,"Carbon Hack is a dynamic competition that combines healthy rivalry with collaborative innovation. Hackers will push the limits of the framework, uncover potential weaknesses, and create innovations to enhance the tool."),(0,a.kt)("p",null,"CarbonHack is open to all, including software practitioners and those with a passion for Green Software.\nFind out more about CarbonHack 2024 on the ",(0,a.kt)("a",{parentName:"p",href:"https://grnsft.org/hack/github"},"CarbonHack website")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Registration opens 22nd January!")),(0,a.kt)("hr",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"impact-framework"},"Impact Framework"),(0,a.kt)("p",null,"Impact Framework (IF) aims to make the environmental impacts of software easier to calculate ",(0,a.kt)("strong",{parentName:"p"},"and")," share."),(0,a.kt)("p",null,"IF allows you to calculate the environmental impacts, such as carbon, of your software applications without writing any code. All you have to do is write a simple ",(0,a.kt)("strong",{parentName:"p"},"manifest file")," and IF handles the rest."),(0,a.kt)("p",null,"The project is entirely open source and composability is a core design principle - we want you to be able to create your own plugins and plug them in to our framework, or pick from a broad universe of open source plugins created by others."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"If you can't measure, you can't improve. Software has many negative environmental ",(0,a.kt)("strong",{parentName:"p"},"impacts")," which we need to optimize, carbon, water, and energy, to name just a few."),(0,a.kt)("p",null,"Unfortunately, measuring software impact metrics like carbon, water, and energy is complex and nuanced. "),(0,a.kt)("p",null,"Modern applications are composed of many smaller pieces of software (components) running on different environments, for example, private cloud, public cloud, bare-metal, virtualized, containerized, mobile, laptops, desktops, embedded, and IoT. Many components that make up a typical software application are run on something other than resources you own or control, which makes including the impact of managed services in your measurement especially hard.  "),(0,a.kt)("p",null,"The impacts of software components also vary over time, so as well as understanding ",(0,a.kt)("strong",{parentName:"p"},"which")," components contribute most to the overall impacts, there is also a question of ",(0,a.kt)("strong",{parentName:"p"},"when")," they contribute the most."),(0,a.kt)("p",null,"Only through a granular analysis of the impacts of your software system can investments in reducing its impact be prioritized and verified. Measurement is the first and most crucial step in greening a software system, and the first step in that process with the Impact Framework is to create a tree."),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"This project has evolved over the two years of the GSF's existence. "),(0,a.kt)("p",null,"During the development of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/sci/blob/dev/SPEC.md"},"SCI"),", we acknowledged that the biggest blocker to adoption was data regarding the emissions of software components on different platforms and runtimes."),(0,a.kt)("p",null,"We then launched the sci-data project to help create the data sets required to calculate an SCI score."),(0,a.kt)("p",null,"After some investigation, the original sci-data team quickly realized that there were several existing data sources, and many more were in development, free open source or private commercial. The future challenge wouldn't be to source them, it would be knowing which data set to use for which use case, how data sets differed in their methodology and interface and when to use one over the other, the pros/cons, and trade-offs."),(0,a.kt)("p",null,"The project evolved into the ",(0,a.kt)("a",{parentName:"p",href:"https://sci-guide.greensoftware.foundation/"},"sci-guide")," to document existing data sets, providing guidance for when to use one over another and how to use it to create your own software measurement reports."),(0,a.kt)("p",null,"Finally, we had enough information, and ",(0,a.kt)("a",{parentName:"p",href:"https://sci-guide.greensoftware.foundation/CaseStudies"},"SCI case studies")," started to be written. This was a milestone moment."),(0,a.kt)("p",null,"But now we are in the next evolution, to have software measurement be a mainstream activity. For this to be an industry with thousands of professionals working to decarbonize software, for businesses to grow and thrive in a commercial software measurement ecosystem, we need to formalize software measurement into a discipline with standards and tooling. The SCI Specification is the standard, and the ",(0,a.kt)("a",{parentName:"p",href:"./06-specification/impact-framework.md"},"Impact Framework")," is the tooling."),(0,a.kt)("h2",{id:"project-structure"},"Project Structure"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"IF source code")," can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if"},"IF Github repository"),". The code there covers the framework, which includes all the infrastructure for reading and writing input and output yamls, invoking plugins, running the command line tool and associated helper functions. However, it does not include the actual plugins themselves. Part of the IF design philosophy is that all plugins should be plugins, so that the IF is as composable and configurable as possible. Therefore, to use IF, you have to either create your own plugins or find some prebuilt ones and install them yourself. This also implies that you take responsibility for the plugins you choose to install."),(0,a.kt)("p",null,"We do provide a ",(0,a.kt)("strong",{parentName:"p"},"standard library of plugins")," built and maintained by the IF core team. These can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if-plugins"},(0,a.kt)("inlineCode",{parentName:"a"},"if-plugins")," Github repository"),". You can install these into ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," by running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install https://github.com/Green-Software-Foundation/if-plugins")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," project directory."),(0,a.kt)("p",null,"There is also a second repository for ",(0,a.kt)("strong",{parentName:"p"},"plugins we expect community members to maintain"),". These can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if-unofficial-plugins"},(0,a.kt)("inlineCode",{parentName:"a"},"if-unofficial-plugins")," Github repository"),". You can install these into ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," by running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install https://github.com/Green-Software-Foundation/if-unofficial-plugins")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," project directory."),(0,a.kt)("p",null,"Finally, the ",(0,a.kt)("strong",{parentName:"p"},"source code for this documentation")," website is available at the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if-docs"},(0,a.kt)("inlineCode",{parentName:"a"},"if-docs")," Github repository"),"."),(0,a.kt)("h2",{id:"navigating-these-docs"},"Navigating these docs"),(0,a.kt)("p",null,"The lefthand sidebar contains links to all the information you need to understand Impact Framework. "),(0,a.kt)("p",null,"You can explore the key ideas underpinning Impact Framework in the ",(0,a.kt)("a",{parentName:"p",href:"./major-concepts/"},"Major Concepts section"),"."),(0,a.kt)("p",null,"Users can read our ",(0,a.kt)("a",{parentName:"p",href:"./users/"},"guides")," explaining how to use IF, including installation, using the CLI and loading plugins."),(0,a.kt)("p",null,"We also have ",(0,a.kt)("a",{parentName:"p",href:"./developers/"},"developer documentation")," to help you get started building with IF."),(0,a.kt)("p",null,"You will find documentation for the individual built-in plugin implementations in ",(0,a.kt)("a",{parentName:"p",href:"%20/if-docs/reference/plugins"},(0,a.kt)("inlineCode",{parentName:"a"},"plugins")),"."))}u.isMDXComponent=!0},832:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hack-banner-8a9d7874b60972c27f9bb38f4170f34f.png"}}]);