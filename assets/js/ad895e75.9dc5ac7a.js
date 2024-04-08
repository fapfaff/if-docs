"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[288],{4137:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(o),h=r,f=c["".concat(l,".").concat(h)]||c[h]||p[h]||n;return o?a.createElement(f,i(i({ref:t},d),{},{components:o})):a.createElement(f,i({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<n;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},7701:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var a=o(7462),r=(o(7294),o(4137));const n={"sidebar-position":7},i="FAQs",s={unversionedId:"FAQ",id:"FAQ",title:"FAQs",description:"Is there any way to auto-generate manifest files?",source:"@site/docs/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/if-docs/FAQ",draft:!1,editUrl:"https://github.com/fapfaff/if-docs/tree/deploy/docs/FAQ.md",tags:[],version:"current",frontMatter:{"sidebar-position":7},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/if-docs/reference/plugins"},next:{title:"Contribution Guidelines",permalink:"/if-docs/contributions"}},l={},u=[{value:"Is there any way to auto-generate manifest files?",id:"is-there-any-way-to-auto-generate-manifest-files",level:2},{value:"What is your vision for the IF?",id:"what-is-your-vision-for-the-if",level:2},{value:"Is there a way to generate an audit/report along with a csv/yaml output?",id:"is-there-a-way-to-generate-an-auditreport-along-with-a-csvyaml-output",level:2},{value:"The manifest approach makes things transparent, but you can still manipulate the data you put as inputs in the manifest. How to fight again this?",id:"the-manifest-approach-makes-things-transparent-but-you-can-still-manipulate-the-data-you-put-as-inputs-in-the-manifest-how-to-fight-again-this",level:2},{value:"Is it planned to make the IF more user friendly or also more usable for non it people?",id:"is-it-planned-to-make-the-if-more-user-friendly-or-also-more-usable-for-non-it-people",level:2},{value:"Does it only calculate emissions for CPU usage or does it also work with other meters like storage/bandwith?",id:"does-it-only-calculate-emissions-for-cpu-usage-or-does-it-also-work-with-other-meters-like-storagebandwith",level:2},{value:"Is the cloud-metadata only for public cloud providers?",id:"is-the-cloud-metadata-only-for-public-cloud-providers",level:2},{value:"Have you compared the results to the carbon reports that cloud providers are producing for their customers?",id:"have-you-compared-the-results-to-the-carbon-reports-that-cloud-providers-are-producing-for-their-customers",level:2},{value:"Are there plans to include other pieces of cloud metadata beyond servers e.g. for PaaS services?",id:"are-there-plans-to-include-other-pieces-of-cloud-metadata-beyond-servers-eg-for-paas-services",level:2},{value:"Is there a cloud-metadata for VMware and/or Openstack ?",id:"is-there-a-cloud-metadata-for-vmware-andor-openstack-",level:2},{value:"Will IF be developed beyond the upcoming hackathon?",id:"will-if-be-developed-beyond-the-upcoming-hackathon",level:2}],d={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faqs"},"FAQs"),(0,r.kt)("h2",{id:"is-there-any-way-to-auto-generate-manifest-files"},"Is there any way to auto-generate manifest files?"),(0,r.kt)("p",null,"You have to create your basic structure but it's expected that your input data will be fille dusing an importer plugin (we have one for Azure VMs and there will be mroe after the hackathon). For testing and experimenting we also have a MockObservations plugin that can autofill manifests with dummy data"),(0,r.kt)("h2",{id:"what-is-your-vision-for-the-if"},"What is your vision for the IF?"),(0,r.kt)("p",null,"The vision is to be a protocol that enables you to use IF for any and all of those use-cases, and more. "),(0,r.kt)("p",null,"Right now we focus on software applications running in the cloud, but we have people using it on-premise and even for supply chain modeling. The idea is that we provide the minimal infrastructure required for you to build up different use cases using plugins."),(0,r.kt)("h2",{id:"is-there-a-way-to-generate-an-auditreport-along-with-a-csvyaml-output"},"Is there a way to generate an audit/report along with a csv/yaml output?"),(0,r.kt)("p",null,'No - we see the manifest file and associated manifest as a new type of "executable audit". The IF itself does not generate any other form of report, although there is nothing stopping others from building out this functionality on top of IF.'),(0,r.kt)("h2",{id:"the-manifest-approach-makes-things-transparent-but-you-can-still-manipulate-the-data-you-put-as-inputs-in-the-manifest-how-to-fight-again-this"},"The manifest approach makes things transparent, but you can still manipulate the data you put as inputs in the manifest. How to fight again this?"),(0,r.kt)("p",null,"We can't really stop people inputting fake data into a manifest file. But we're very interested in ways we can verify that the computation was done correctly and provide public proofs. Don't expect anything imminently, but we are thinking along these lines for the future."),(0,r.kt)("h2",{id:"is-it-planned-to-make-the-if-more-user-friendly-or-also-more-usable-for-non-it-people"},"Is it planned to make the IF more user friendly or also more usable for non it people?"),(0,r.kt)("p",null,"IF is a low level infrastructure project. the core team focuses on building out solid foundations for others to build UIs, apps etc on top. There is no official IF UX tooling."),(0,r.kt)("h2",{id:"does-it-only-calculate-emissions-for-cpu-usage-or-does-it-also-work-with-other-meters-like-storagebandwith"},"Does it only calculate emissions for CPU usage or does it also work with other meters like storage/bandwith?"),(0,r.kt)("p",null,"We do have basic models for memory and network usage in addition to CPU. You can create plugins for anything you can observe and model."),(0,r.kt)("h2",{id:"is-the-cloud-metadata-only-for-public-cloud-providers"},"Is the cloud-metadata only for public cloud providers?"),(0,r.kt)("p",null,"Yes it is - it's based on a database we maintain as part of the IF repository. You could extend it by adding the same data for your on premise resource."),(0,r.kt)("h2",{id:"have-you-compared-the-results-to-the-carbon-reports-that-cloud-providers-are-producing-for-their-customers"},"Have you compared the results to the carbon reports that cloud providers are producing for their customers?"),(0,r.kt)("p",null,"No we haven't - we've been focussing on capturing impacts of individual applications over relatively short time periods so far. It's difficult to find the underlying data to build the comparisons."),(0,r.kt)("h2",{id:"are-there-plans-to-include-other-pieces-of-cloud-metadata-beyond-servers-eg-for-paas-services"},"Are there plans to include other pieces of cloud metadata beyond servers e.g. for PaaS services?"),(0,r.kt)("p",null,"We don't have immediate specific plans to build this as the IF core team, but we're enthusiastic about teams building plugins for this to support more use-cases"),(0,r.kt)("h2",{id:"is-there-a-cloud-metadata-for-vmware-andor-openstack-"},"Is there a cloud-metadata for VMware and/or Openstack ?"),(0,r.kt)("p",null,"No there isn't! It would be a nice addition."),(0,r.kt)("h2",{id:"will-if-be-developed-beyond-the-upcoming-hackathon"},"Will IF be developed beyond the upcoming hackathon?"),(0,r.kt)("p",null,"yes! we are very passionate about this project and it is only going to grow from here, far beyond the hackathon!"))}p.isMDXComponent=!0}}]);