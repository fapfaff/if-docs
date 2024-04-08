"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[229],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||r;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(4137));const r={},o="Plugins",l={unversionedId:"reference/plugins",id:"reference/plugins",title:"Plugins",description:"The Impact Framework includes several builtin plugins (e.g. time-sync, groupby and csv-exporter). All other plugins are external plugins that have to be installed before they can be run in an IF pipeline. Anyone can create and install a new plugin. As long as the plugin conforms to the expected interface, IF can run it.",source:"@site/docs/reference/plugins.md",sourceDirName:"reference",slug:"/reference/plugins",permalink:"/reference/plugins",draft:!1,editUrl:"https://github.com/fapfaff/if-docs/edit/deploy/docs/reference/plugins.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command line tool",permalink:"/reference/cli"},next:{title:"FAQs",permalink:"/FAQ"}},u={},s=[{value:"<code>built-in</code>",id:"built-in",level:3},{value:"<code>if-plugins</code>",id:"if-plugins",level:3},{value:"<code>if-unofficial-plugins</code>",id:"if-unofficial-plugins",level:3},{value:"Exhaust plugins (outputs)",id:"exhaust-plugins-outputs",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugins"},"Plugins"),(0,a.kt)("p",null,"The Impact Framework includes several builtin plugins (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"time-sync"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"groupby")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"csv-exporter"),"). All other plugins are external plugins that have to be installed before they can be run in an IF pipeline. Anyone can create and install a new plugin. As long as the plugin conforms to the expected interface, IF can run it."),(0,a.kt)("p",null,"There are two repositories that were created by the IF core team. The ",(0,a.kt)("inlineCode",{parentName:"p"},"if-plugins"),' repository contains the "core" set of plugins that IF developers will maintain and support. We also provide a second repository of ',(0,a.kt)("inlineCode",{parentName:"p"},"if-unofficial")," plugins that are mainly re-implementations of existing third party plugins or code that we expect community members to maintain independently of the IF core team."),(0,a.kt)("p",null,"Documentation for the specific individual plugins are available in the plugin READMEs. Below you will find a brief description of each plugin and a link to its documentation:"),(0,a.kt)("h3",{id:"built-in"},(0,a.kt)("inlineCode",{parentName:"h3"},"built-in")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins#readme"},"Time Sync"),": Takes a heterogeneous set of time series data that might be offset, discontinuous or irregularly spaces and returns time series conforming to a user defined time grid. E.g. a user can define that all sets of observations should start at sopme global start time, end at some global end time and have a specific temporal resolution. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins#readme"},"CSV Exporter"),": Exports data for a given metric to a CSV file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins#readme"},"Groupby"),": Allows a user to regroup their output data according to given keys."))),(0,a.kt)("h3",{id:"if-plugins"},(0,a.kt)("inlineCode",{parentName:"h3"},"if-plugins")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/blob/main/src/lib/cloud-metadata/README.md"},"Cloud metadata"),": Looks up detailed metadata about a given cloud instance type and region, including the physical processor being used."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/blob/main/src/lib/e-mem/README.md"},"E-MEM"),": Calculate the energy expended due to memroy usage, by multiplying the energy used in GB by a coefficient."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/blob/main/src/lib/sci-e/README.md"},"SCI-E"),": Calculates the sum of all energy components."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/blob/main/src/lib/sci-m/README.md"},"SCI-M")," - Calculates the embodied carbon for a component."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/blob/main/src/lib/sci-o/index.ts"},"SCI-O")," - Calculates the operational carbon from the total energy and grid carbon intensity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/blob/main/src/lib/sci/README.md"},"SCI"),": Calculates the software carbon intensity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/blob/main/src/lib/shell/README.md"},"SHELL")," - A plugin that enables external code in any language to be run in a child process"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/tree/main/src/lib/tdp-finder"},"TDP-FINDER"),": Looks up the thermnal desig power for a given processor in a local database."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/tree/main/src/lib/sum"},"Sum"),": a generic arithmetic plugin that allows you to sum any set of input parameters."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/tree/main/src/lib/multiply"},"Multiply"),": a generic arithmetic plugin that allows you to multiply any set of input parameters."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/tree/main/src/lib/coefficient"},"Coefficient"),": a generic arithmetic plugin that allows you to multiply any input value by a coefficient."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/tree/main/src/lib/e-net"},"E-NET"),": simply multiplies the amount of data transferred (GB) by a coefficient (kWh/GB) to yield network/energy."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/tree/main/src/lib/mock-observations"},"Mock Observations"),": A plugin for mocking observations (inputs) for testing and demo purposes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/tree/main/src/lib/csv-export"},"CSV-Export"),": a generic CSV exporter plugin."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/tree/main/src/lib/divide"},"Divide"),": A generic plugin for doing arithmetic division of two values."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-plugins/tree/main/src/lib/regex"},"Regex"),": A generic plugin to match part of one string and extract it into another.")),(0,a.kt)("h3",{id:"if-unofficial-plugins"},(0,a.kt)("inlineCode",{parentName:"h3"},"if-unofficial-plugins")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-unofficial-plugins/blob/main/src/lib/azure-importer/README.md"},"Azure importer"),": Grabs usage metrics from an Azure virtual machine, given user credentials and virtual machine details."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-unofficial-plugins/blob/main/src/lib/ccf/README.md"},"Cloud Carbon Footprint"),": Calculates usage metrics using the Cloud Carbon Footprint APIs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-unofficial-plugins/blob/main/src/lib/watt-time/README.md"},"WattTime"),": WattTime is an external service for looking up grid emissions based on location."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-unofficial-plugins/blob/main/src/lib/teads-curve/README.md"},"TEADS-CURVE"),": Calculates the energy in kWh used by the CPU"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-unofficial-plugins/blob/main/src/lib/teads-aws/README.md"},"TEADS-AWS"),": Calculates the energy in kWh used by the CPU using a model specific to AWS instances."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-unofficial-plugins/blob/main/src/lib/boavizta/README.md"},"Boavizta"),": Calculates energy and embodied carbon using the Boavizta APIs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/if-unofficial-plugins/blob/main/src/lib/co2js/README.md"},"co2js"),": Calculates the carbon emissions of a website.")),(0,a.kt)("h2",{id:"exhaust-plugins-outputs"},"Exhaust plugins (outputs)"),(0,a.kt)("p",null,"Export plugins designed to implement custom ways of exporting output file. Currenlty supported ones are ",(0,a.kt)("inlineCode",{parentName:"p"},"csv"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," plugins.\nThese are currently built in to the IF, but migrating to dynamically loading export functions as plugins is part of our near-term roadmap."))}c.isMDXComponent=!0}}]);