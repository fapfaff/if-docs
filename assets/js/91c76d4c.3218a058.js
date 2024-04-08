"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[960],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const o={},i="Command line tool",l={unversionedId:"reference/cli",id:"reference/cli",title:"Command line tool",description:"A core feature of the Impact Framework is the ie command line tool (CLI). This is how you trigger Impact Framework to execute a certain manifest file.",source:"@site/docs/reference/cli.md",sourceDirName:"reference",slug:"/reference/cli",permalink:"/if-docs/reference/cli",draft:!1,editUrl:"https://github.com/fapfaff/if-docs/tree/deploy/docs/reference/cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reference",permalink:"/if-docs/reference/"},next:{title:"Plugins",permalink:"/if-docs/reference/plugins"}},s={},p=[{value:"<code>ie</code>",id:"ie",level:2},{value:"<code>--manifest</code>",id:"--manifest",level:2},{value:"<code>--output</code>",id:"--output",level:2},{value:"CSV export identifiers",id:"csv-export-identifiers",level:3},{value:"<code>--override-params</code>",id:"--override-params",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-line-tool"},"Command line tool"),(0,r.kt)("p",null,"A core feature of the Impact Framework is the ",(0,r.kt)("inlineCode",{parentName:"p"},"ie")," command line tool (CLI). This is how you trigger Impact Framework to execute a certain manifest file. "),(0,r.kt)("p",null,"Let's take a look at the various commands exposed by ",(0,r.kt)("inlineCode",{parentName:"p"},"ie"),"."),(0,r.kt)("h2",{id:"ie"},(0,r.kt)("inlineCode",{parentName:"h2"},"ie")),(0,r.kt)("p",null,"If you have globally installed our ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," npm package, you can invoke the CLI using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ie")," command directly in your terminal. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ie")," command is an alias to ",(0,r.kt)("inlineCode",{parentName:"p"},"npx ts-node src/index.ts"),", which executes the Impact Framework's ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.ts")," script and acts as the entry point for Impact Framework."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ie <args>")),(0,r.kt)("h2",{id:"--manifest"},(0,r.kt)("inlineCode",{parentName:"h2"},"--manifest")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--manifest")," flag is the only required flag and tells ",(0,r.kt)("inlineCode",{parentName:"p"},"ie")," where to find the manifest file that you want to execute. This command expects to receive the path where your manifest file is saved, as shown in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ie --manifest examples/manifests/my-manifest.yml\n")),(0,r.kt)("h2",{id:"--output"},(0,r.kt)("inlineCode",{parentName:"h2"},"--output")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--output")," flag is optional and is used for defining a path to save your output data. If you provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"--output")," command with a path, your output data will be saved as a ",(0,r.kt)("inlineCode",{parentName:"p"},".yml")," file to disk. If you omit this command, your output data will be displayed in the terminal."),(0,r.kt)("p",null,"Here is an example of ",(0,r.kt)("inlineCode",{parentName:"p"},"--output")," being used to define a path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ie --manifest examples/manifests/my-manifest.yml --output examples/outputs/my-outdata.yml\n")),(0,r.kt)("h3",{id:"csv-export-identifiers"},"CSV export identifiers"),(0,r.kt)("p",null,"If you want to save data to CSV, you have to select a specific metric to export. You do this by adding a hashtag and the metric name after the savepath provided to the output command. For example, you could save the ",(0,r.kt)("inlineCode",{parentName:"p"},"carbon")," data to a CSV file called ",(0,r.kt)("inlineCode",{parentName:"p"},"demo.csv")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ie --manifest demo.yml --output demo#carbon\n")),(0,r.kt)("h2",{id:"--override-params"},(0,r.kt)("inlineCode",{parentName:"h2"},"--override-params")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"override-params")," command is used when you want to discard our recommended set of parameters and associated units and aggregation methods and instead provide your own. We do not recommend this, and if you use this feature you take full responsibility for any errors you introduce downstream, including unit or aggregation errors. This is why we hide the ability to override the parameters behind a CLI command - it is an advanced feature that you should only use if you really know what you are doing. "),(0,r.kt)("p",null,"You pass the path to your new parameter file as an argument. The file is expected to conform to the same structure as our ",(0,r.kt)("inlineCode",{parentName:"p"},"src/config/params.ts")," file."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ie --manifest <your manifest> --override-params <path-to-your-params-file>\n")))}d.isMDXComponent=!0}}]);