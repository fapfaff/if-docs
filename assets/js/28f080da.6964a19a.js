"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[806],{4137:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=u(t),c=i,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return t?a.createElement(g,o(o({ref:n},s),{},{components:t})):a.createElement(g,o({ref:n},s))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=d;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8227:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var a=t(7462),i=(t(7294),t(4137));const l={"sidebar-position":1},o="How to build plugins",r={unversionedId:"developers/how-to-build-plugins",id:"developers/how-to-build-plugins",title:"How to build plugins",description:"The IF is designed to be as composable as possible. This means you can develop your own plugins and use them in a pipeline.",source:"@site/docs/developers/how-to-build-plugins.md",sourceDirName:"developers",slug:"/developers/how-to-build-plugins",permalink:"/developers/how-to-build-plugins",draft:!1,editUrl:"https://github.com/fapfaff/if-docs/edit/deploy/docs/developers/how-to-build-plugins.md",tags:[],version:"current",frontMatter:{"sidebar-position":1},sidebar:"tutorialSidebar",previous:{title:"Developers",permalink:"/developers/"},next:{title:"How to make plugins production ready",permalink:"/developers/how-to-refine-plugins"}},p={},u=[{value:"Step 1: Use our template repository",id:"step-1-use-our-template-repository",level:2},{value:"Step 2: Writing your plugin code",id:"step-2-writing-your-plugin-code",level:2},{value:"The plugin interface",id:"the-plugin-interface",level:3},{value:"Global config",id:"global-config",level:3},{value:"Methods",id:"methods",level:3},{value:"execute",id:"execute",level:4},{value:"Params",id:"params",level:4},{value:"Returns",id:"returns",level:4},{value:"What are <code>PluginParams</code>?",id:"what-are-pluginparams",level:3},{value:"What are <code>PluginParams</code>?",id:"what-are-pluginparams-1",level:2},{value:"Step 3: Install your plugin",id:"step-3-install-your-plugin",level:2},{value:"Step 4: Load your plugin into IF",id:"step-4-load-your-plugin-into-if",level:2},{value:"Step 5: Publishing your plugin",id:"step-5-publishing-your-plugin",level:2},{value:"Summary of steps",id:"summary-of-steps",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Appendix: Walk-through of the Sum plugin",id:"appendix-walk-through-of-the-sum-plugin",level:2}],s={toc:u};function m(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-build-plugins"},"How to build plugins"),(0,i.kt)("p",null,"The IF is designed to be as composable as possible. This means you can develop your own plugins and use them in a pipeline.\nTo help developers write Typescript plugins to integrate easily into IF, we provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginInterface")," interface. Here's an overview of the stages you need to follow to integrate your plugin:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a Typescript file that implements the ",(0,i.kt)("inlineCode",{parentName:"li"},"PluginInterface")),(0,i.kt)("li",{parentName:"ul"},"install the plugin"),(0,i.kt)("li",{parentName:"ul"},"initialize and invoke the plugin in your manifest file")),(0,i.kt)("h2",{id:"step-1-use-our-template-repository"},"Step 1: Use our template repository"),(0,i.kt)("p",null,"Instead of building up your plugin repository and all the configuration from scratch, you can use our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if-plugin-template"},"plugin template repository"),". To use the template, visit the Github repository and click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Use this template")," button. You will have the option to ",(0,i.kt)("inlineCode",{parentName:"p"},"create a new repository")," under your own account. Then, you can clone that repository to your local machine."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"use our template repository",src:t(2961).Z,width:"3024",height:"1184"})),(0,i.kt)("p",null,"Inside that repository, all you have to do is run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install typescript")," in the template folder, rename the project in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and write your plugin code inside ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts"),". All the configuration and setup is taken care of for you. "),(0,i.kt)("h2",{id:"step-2-writing-your-plugin-code"},"Step 2: Writing your plugin code"),(0,i.kt)("p",null,"Now your project is setup, you can focus on your plugin logic. The entry point for your plugin is ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts"),". In this guide it is assumed that all your plugin logic is in ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," but depending on the copmplexity of your plugin you might want to split the code across multiple files. ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," should always be your entry point, though."),(0,i.kt)("p",null,"The following sections describe the rules your plugin code should conform to. We also have an ",(0,i.kt)("a",{parentName:"p",href:"#appendix-walk-through-of-the-sum-plugin"},"appendix")," that deep dives a real plugin."),(0,i.kt)("h3",{id:"the-plugin-interface"},"The plugin interface"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginInterface")," is structured as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type PluginInterface = {\n  execute: (\n    inputs: PluginParams[],\n    config?: Record<string, any>\n  ) => PluginParams[];\n  metadata: {\n    kind: string;\n  };\n  [key: string]: any;\n};\n")),(0,i.kt)("p",null,"The interface requires an execute function where your plugin logic is implemented. It should also return metadata. This can include any relevant metadata you want to include, with a minimum requirement being ",(0,i.kt)("inlineCode",{parentName:"p"},"kind: execute"),". "),(0,i.kt)("h3",{id:"global-config"},"Global config"),(0,i.kt)("p",null,"Global config is passed as an argument to the plugin. In your plugin code you can handle it as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Here's the function definition - notice that global config is passed in here!\nexport const Plugin = (globalConfig: YourConfig): PluginInterface => {\n\n// in here you have access to globalConfig[your-params]\n\n}\n")),(0,i.kt)("p",null,"The parameters available to you in ",(0,i.kt)("inlineCode",{parentName:"p"},"globalConfig")," depends upon the parameters you pass in the manifest file. For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sum")," plugin has access to ",(0,i.kt)("inlineCode",{parentName:"p"},"input-parameters")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"output-parameter")," in its global config, and it is defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Initialize")," block in the manifest file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"initialize:\n  plugins:\n    sum:\n      method: Sum\n      path: '@grnsft/if-plugins'\n      global-config:\n        input-parameters: ['cpu/energy', 'network/energy']\n        output-parameter: 'energy'\n")),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("h4",{id:"execute"},"execute"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," is where the main calculation logic of the plugin is implemented. It always takes ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," (an array of ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginParams"),") as an argument and returns an updated set of ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs"),"."),(0,i.kt)("h4",{id:"params"},"Params"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"inputs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PluginParams[]")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of data provided in the ",(0,i.kt)("inlineCode",{parentName:"td"},"inputs")," field of a component in a manifest file")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Return value"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"outputs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise<PluginParams[]>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Promise")," resolving to an array of updated ",(0,i.kt)("inlineCode",{parentName:"td"},"PluginParams[]"))))),(0,i.kt)("h3",{id:"what-are-pluginparams"},"What are ",(0,i.kt)("inlineCode",{parentName:"h3"},"PluginParams"),"?"),(0,i.kt)("h2",{id:"what-are-pluginparams-1"},"What are ",(0,i.kt)("inlineCode",{parentName:"h2"},"PluginParams"),"?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PluginParams")," are a fundamental data type in the Impact Framework. The type is defined as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type PluginParams = {\n  [key: string]: any;\n};\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginParams")," type therefore defines an array of key-value pairs."),(0,i.kt)("p",null,"IF needs to know about all the parameters used in each pipeline. The default behaviour is that it grabs parameters from a local file, ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts"),". This file defines the standard set of parameter names, their units, a descriptiona nd the method used to aggregate them across time or across a tree."),(0,i.kt)("p",null,"If your new plugin uses new parameters that are not included in ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts"),", you can simply add them to your manifest file in a section named ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: params-demo\ndescription: null\ntags:\nparams: \n  - name: new-param-1\n    description: dummy\n    aggregation: sum\n    unit: MT\n  - name: new-param-2\n    description: dummy\n    aggregation: sum\n    unit: s\n")),(0,i.kt)("p",null,"This will append the new parameter informatrion to the object loaded from ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts")," and you can use your plugin as normal. In effect, you have append-only access to ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts")," via your manifest file without ever having to change any IF source code."),(0,i.kt)("p",null,"However, if you are an advanced user and you want to use something other than out recommended standard set of parameters, you can provide a replacement ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts")," file on the command line. This file should be a ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"js"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," file with the ame structure as our ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts"),". You can rename the file. You then pass the path to the file to the ",(0,i.kt)("inlineCode",{parentName:"p"},"override-params")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"ie --manifest <path-to-manifest> --override-params <path-to-your-params-file>\n")),(0,i.kt)("h2",{id:"step-3-install-your-plugin"},"Step 3: Install your plugin"),(0,i.kt)("p",null,"Now your plugin code is written, you can install it to make it available to IF."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\n")),(0,i.kt)("p",null,"Then use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm link")," to create a package that can be installed into IF:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm link\n")),(0,i.kt)("h2",{id:"step-4-load-your-plugin-into-if"},"Step 4: Load your plugin into IF"),(0,i.kt)("p",null,"Now your plugin is ready to run in IF. First install your plugin by navigating to the ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," project folder and running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm link new-plugin\n")),(0,i.kt)("p",null,"replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"new-plugin")," with your plugin name as defined in the plugin's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". If you are not sure, the name can be checked by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm ls -g --depth=0 --link=true"),"."),(0,i.kt)("p",null,"Your plugin is now ready to be run in IF. All that remains is to add your plugin to your manifest file. This means adding it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize block")," and adding it to the component pipelines where you want your plugin to be executed. For example, an ",(0,i.kt)("inlineCode",{parentName:"p"},"initilize")," block might look as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"initialize:\n  plugins:\n    new-plugin:\n      method: YourFunctionName\n      path: 'new-plugin'\n      global-config:\n        something: true \n")),(0,i.kt)("p",null,"Run your manifest uisng"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"np run ie -- --manifest <path-to-manifest>\n")),(0,i.kt)("p",null,"If you have to link more than one local plugin, for example to test your plugin in a pipeline, you can do so with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm link new-plugin --save\n")),(0,i.kt)("p",null,"This will create an entry like ",(0,i.kt)("inlineCode",{parentName:"p"},'"new-plugin": "file:path/to/your/plugin"')," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," which links to your local plugin. This way, multiple plugins can be linked at once. Of course, these changes should not be committed, but they can be helpful for local testing."),(0,i.kt)("h2",{id:"step-5-publishing-your-plugin"},"Step 5: Publishing your plugin"),(0,i.kt)("p",null,"Now you have run your plugin locally and you are happy with how it works, you can make it public by publishing it to a public Github repository. Now all you have to do to use it in a manifest file is ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," it and pass the path to the Github repository in the plugin ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," block."),(0,i.kt)("p",null,"For example, for a plugin saved in ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com/my-repo/new-plugin")," you can do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install https://github.com/my-repo/new-plugin\n")),(0,i.kt)("p",null,"Then, in your manifest file, provide the path in the plugin instantiation. You also need to specify which function the plugin instantiates. Let's say you are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sum")," plugin from the example above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: plugin-demo\ndescription: loads plugin\ntags: null\ninitialize:\n  plugins:\n    - name: new-plugin\n      kind: plugin\n      method: FunctionName\n      path: https://github.com/my-repo/new-plugin\ntree:\n  children:\n    child:\n      config:\n      inputs:\n")),(0,i.kt)("p",null,"Now, when you run the manifest file, it will load the plugin automatically."),(0,i.kt)("p",null,"You can run this using the globally installed IF as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"ie --manifest <path-to-my-manifest>\n")),(0,i.kt)("h2",{id:"summary-of-steps"},"Summary of steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy our template repository and update ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")),(0,i.kt)("li",{parentName:"ul"},"Add your plugin code to ",(0,i.kt)("inlineCode",{parentName:"li"},"index.ts")),(0,i.kt)("li",{parentName:"ul"},"Build and link the plugin using ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run build && npm link")),(0,i.kt)("li",{parentName:"ul"},"Load your plugin into ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," using ",(0,i.kt)("inlineCode",{parentName:"li"},"npm link")),(0,i.kt)("li",{parentName:"ul"},"Initialize your plugin and add it to a pipeline in your manifest file."),(0,i.kt)("li",{parentName:"ul"},"Publish your plugin to Github")),(0,i.kt)("p",null,"You should also create unit tests for your plugin to demonstrate correct execution and handling of corner cases."),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"You can read our more advanced guide on ",(0,i.kt)("a",{parentName:"p",href:"/developers/how-to-refine-plugins"},"how to refine your plugins"),"."),(0,i.kt)("h2",{id:"appendix-walk-through-of-the-sum-plugin"},"Appendix: Walk-through of the Sum plugin"),(0,i.kt)("p",null,"To demonstrate how to build a plugin that conforms to the ",(0,i.kt)("inlineCode",{parentName:"p"},"pluginInterface"),", let's examine the ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," plugin."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," plugin implements the following logic:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"sum whatever is provided in the ",(0,i.kt)("inlineCode",{parentName:"li"},"input-parameters")," field from ",(0,i.kt)("inlineCode",{parentName:"li"},"globalConfig"),"."),(0,i.kt)("li",{parentName:"ul"},"append the result to each element in the output array with the name provided as ",(0,i.kt)("inlineCode",{parentName:"li"},"output-parameter")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"globalConfig"),".")),(0,i.kt)("p",null,"Let's look at how you would implement this from scratch:"),(0,i.kt)("p",null,"The plugin must be a function conforming to ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginInterface"),". You can call the function ",(0,i.kt)("inlineCode",{parentName:"p"},"Sum"),", and inside the body you can add the signature for the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export const Sum = (globalConfig: SumConfig): PluginInterface => {\n  const errorBuilder = buildErrorMessage(Sum.name);\n  const metadata = {\n    kind: 'execute',\n  };\n\n  /**\n   * Calculate the sum of each input.\n   */\n  const execute = async (inputs: PluginParams[]): Promise<PluginParams[]> => {\n\n  };\n\n  return {\n    metadata,\n    execute,\n  };\n\n}\n")),(0,i.kt)("p",null,"Your plugin now has the basic structure required for IF integration. Your next task is to add code to the body of ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," to enable the actual plugin logic to be implemented."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," function should grab the ",(0,i.kt)("inlineCode",{parentName:"p"},"input-parameters")," (the values to sum) from ",(0,i.kt)("inlineCode",{parentName:"p"},"globalConfig"),". it should then iterate over the ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," array, get the values for each of the ",(0,i.kt)("inlineCode",{parentName:"p"},"input-parameters")," and append them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," array, using the name from the ",(0,i.kt)("inlineCode",{parentName:"p"},"output-parameter")," value in ",(0,i.kt)("inlineCode",{parentName:"p"},"globalConfig"),". Here's what this can look like, with the actual calculation pushed to a separate function, ",(0,i.kt)("inlineCode",{parentName:"p"},"calculateSum"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  /**\n   * Calculate the sum of each input.\n   */\n  const execute = async (inputs: PluginParams[]): Promise<PluginParams[]> => {\n    const inputParameters = globalConfig['input-parameters'];\n    const outputParameter = globalConfig['output-parameter'];\n\n    return inputs.map(input => {\n      return {\n        ...input,\n        [outputParameter]: calculateSum(input, inputParameters),\n      };\n    });\n\n  return {\n    metadata,\n    execute,\n  };\n}\n")),(0,i.kt)("p",null,"Now we just need to define what happens in ",(0,i.kt)("inlineCode",{parentName:"p"},"calculateSum")," - this can be a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"reduce"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  /**\n   * Calculates the sum of the energy components.\n   */\n  const calculateSum = (input: PluginParams, inputParameters: string[]) =>\n    inputParameters.reduce(\n      (accumulator, metricToSum) => accumulator + input[metricToSum],\n      0\n    );\n")),(0,i.kt)("p",null,"Note that this example did not include any validation or error handling - you will likely want to add some for a real plugin."),(0,i.kt)("p",null,"Finally, if your plugin used any fields in ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," or created new ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs")," that have not been used in the Impact Framework before, then you should add them to ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"params.ts")," can be found in the path ",(0,i.kt)("inlineCode",{parentName:"p"},"src/config"),"."),(0,i.kt)("p",null,"Each entry in ",(0,i.kt)("inlineCode",{parentName:"p"},"params.ts")," looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"carbon:\n  description: an amount of carbon emitted into the atmosphere\n  unit: gCO2e\n  aggregation: sum\n")),(0,i.kt)("p",null,"This information allows IF to programmatically make decisions about how to handle values in features such as aggregation, time normalization and visualizations, and also acts as a global reference document for understanding IF data. The example above is for ",(0,i.kt)("inlineCode",{parentName:"p"},"carbon"),"."),(0,i.kt)("p",null,"You should add your new data, give a name, define a unit and short description. The ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregation")," field determines how the value is treated when some manipulation has to be done to spread the value over time or aggregate it."),(0,i.kt)("p",null,"For absolute metrics like carbon, the right value is ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," because you would want to add carbon emissions from each timestep when you aggregate over time."),(0,i.kt)("p",null,"For proportional metrics, the right value is ",(0,i.kt)("inlineCode",{parentName:"p"},"avg"),". For example, you would want to calculate the average ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu/utilization")," - it would not make sense to sum it when aggregating over multiple timesteps."),(0,i.kt)("p",null,"Finally, values that should always be presented identically regardless of any aggregation, such as names or global constants, should be given the ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregation-method")," value ",(0,i.kt)("inlineCode",{parentName:"p"},"none"),"."),(0,i.kt)("p",null,"Now you are ready to run your plugin using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ie")," CLI tool!"))}m.isMDXComponent=!0},2961:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/template-repo-6cc54a91c4b00717cf92334e56c8ec1b.png"}}]);