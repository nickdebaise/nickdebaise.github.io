"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[845],{8110:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"api/toast","title":"Toast","description":"Call it to create a toast from anywhere, even outside React components, such as in your state management tools.","source":"@site/docs/api/toast.md","sourceDirName":"api","slug":"/api/toast","permalink":"/packages/react-native-toast/api/toast","draft":false,"unlisted":false,"editUrl":"https://github.com/backpackapp-io/react-native-toast/website/docs/api/toast.md","tags":[],"version":"current","frontMatter":{"id":"toast","title":"Toast","hide_title":true,"sidebar_label":"toast()","slug":"/api/toast"},"sidebar":"tutorialSidebar","previous":{"title":"<Toasts />","permalink":"/packages/react-native-toast/components/toasts"},"next":{"title":"useToaster()","permalink":"/packages/react-native-toast/api/use-toaster"}}');var i=s(4848),a=s(8453);const o={id:"toast",title:"Toast",hide_title:!0,sidebar_label:"toast()",slug:"/api/toast"},d="toast() API",l={},r=[{value:"Basic Usage",id:"basic-usage",level:3},{value:"Creating a toast",id:"creating-a-toast",level:2},{value:"Blank",id:"blank",level:3},{value:"Success",id:"success",level:3},{value:"Error",id:"error",level:3},{value:"Custom (JSX)",id:"custom-jsx",level:3},{value:"Full example",id:"full-example",level:4},{value:"Loading",id:"loading",level:3},{value:"Promise",id:"promise",level:3},{value:"Simple Usage",id:"simple-usage",level:4},{value:"Advanced",id:"advanced",level:4},{value:"Default durations",id:"default-durations",level:2},{value:"Dismiss toast programmatically",id:"dismiss-toast-programmatically",level:2},{value:"Dismiss a single toast",id:"dismiss-a-single-toast",level:4},{value:"Dismiss all toasts at once",id:"dismiss-all-toasts-at-once",level:4},{value:"Remove toasts instantly",id:"remove-toasts-instantly",level:4},{value:"Update an existing toast",id:"update-an-existing-toast",level:2},{value:"Prevent duplicate toasts",id:"prevent-duplicate-toasts",level:2},{value:"Prevent Swipe to Dismiss",id:"prevent-swipe-to-dismiss",level:2},{value:"Disable Shadow",id:"disable-shadow",level:2},{value:"Animation Options",id:"animation-options",level:2},{value:"Adjust toast width to hug text",id:"adjust-toast-width-to-hug-text",level:2},{value:"All toast() Options",id:"all-toast-options",level:2}];function c(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsxs)(t.h1,{id:"toast-api",children:[(0,i.jsx)(t.code,{children:"toast()"})," API"]})}),"\n",(0,i.jsx)(t.p,{children:"Call it to create a toast from anywhere, even outside React components, such as in your state management tools."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Make sure you add the ",(0,i.jsx)(t.code,{children:"<Toasts/>"})," component to your app first."]})}),"\n",(0,i.jsx)(t.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import { toast } from '@backpackapp-io/react-native-toast';\n\n// ...\n\ntoast('Hello World');\n\n// ...\n\ntoast('Hello World', {\n  duration: 4000,\n  position: ToastPosition.TOP,\n  icon: '\ud83d\udc4f',\n  animationType: 'timing',\n  animationConfig: {\n    duration: 500,\n    flingPositionReturnDuration: 200,\n    easing: Easing.elastic(1),\n  },\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"creating-a-toast",children:"Creating a toast"}),"\n",(0,i.jsx)(t.h3,{id:"blank",children:"Blank"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"toast('Hello World');\n"})}),"\n",(0,i.jsx)(t.p,{children:"The most basic variant."}),"\n",(0,i.jsx)(t.h3,{id:"success",children:"Success"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"toast.success('Successfully created!');\n"})}),"\n",(0,i.jsx)(t.p,{children:"Creates a notification with a success indicator on the left."}),"\n",(0,i.jsx)(t.h3,{id:"error",children:"Error"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"toast.error('This is an error!');\n"})}),"\n",(0,i.jsx)(t.p,{children:"Creates a notification with an error indicator on the left."}),"\n",(0,i.jsx)(t.h3,{id:"custom-jsx",children:"Custom (JSX)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'import { resolveValue } from "@backpackapp-io/react-native-toast";\n\ntoast("", {\n  customToast: (toast) => (\n    <View>\n      <Text>{resolveValue(toast.message, toast)}</Text>\n    </View>\n   )\n})\n'})}),"\n",(0,i.jsx)(t.p,{children:"Creates a custom notification with JSX. Have complete control over your toast."}),"\n",(0,i.jsx)(t.h4,{id:"full-example",children:"Full example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import { resolveValue } from \"@backpackapp-io/react-native-toast\";\n\ntoast(Math.floor(Math.random() * 1000).toString(), {\n  width: screenWidth,\n  disableShadow: true,\n  customToast: (toast) => {\n    return (\n      <View\n        style={{\n          height: toast.height,\n          width: toast.width,\n          backgroundColor: 'yellow',\n          borderRadius: 8,\n        }}\n      >\n        <Text>{resolveValue(toast.message, toast)}</Text>\n      </View>\n    );\n  },\n});\n"})}),"\n",(0,i.jsx)(t.h3,{id:"loading",children:"Loading"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const id = toast.loading('Waiting...');\n\n//Somewhere later in your code...\n\ntoast.dismiss(id);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This will create a loading notification. Most likely, you want to update it afterwards. For a friendly alternative, check out ",(0,i.jsx)(t.code,{children:"toast.promise()"}),", which takes care of that automatically."]}),"\n",(0,i.jsx)(t.h3,{id:"promise",children:"Promise"}),"\n",(0,i.jsx)(t.p,{children:"This shorthand is useful for mapping a promise to a toast. It will update automatically when the promise resolves or fails."}),"\n",(0,i.jsx)(t.h4,{id:"simple-usage",children:"Simple Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const myPromise = fetchData();\n\ntoast.promise(myPromise, {\n  loading: 'Loading',\n  success: 'Got the data',\n  error: 'Error when fetching',\n});\n"})}),"\n",(0,i.jsx)(t.h4,{id:"advanced",children:"Advanced"}),"\n",(0,i.jsxs)(t.p,{children:["You can provide a function to the success/error messages to incorporate the result/error of the promise. The third argument is ",(0,i.jsx)(t.code,{children:"toastOptions"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"toast.promise(\n  myPromise,\n  {\n    loading: 'Loading',\n    success: (data) => `Successfully saved ${data.name}`,\n    error: (err) => `This just happened: ${err.toString()}`,\n  },\n  {\n    duration: 2000\n  }\n);\n"})}),"\n",(0,i.jsx)(t.h2,{id:"default-durations",children:"Default durations"}),"\n",(0,i.jsxs)(t.p,{children:["Every type has its own duration. You can overwrite them by using the ",(0,i.jsx)(t.code,{children:"duration"})," field within the toast options."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"type"}),(0,i.jsx)(t.th,{children:"duration"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"blank"})}),(0,i.jsx)(t.td,{children:"4000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"error"})}),(0,i.jsx)(t.td,{children:"4000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"success"})}),(0,i.jsx)(t.td,{children:"2000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"custom"})}),(0,i.jsx)(t.td,{children:"4000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"loading"})}),(0,i.jsx)(t.td,{children:"Infinity"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"dismiss-toast-programmatically",children:"Dismiss toast programmatically"}),"\n",(0,i.jsxs)(t.p,{children:["You can manually dismiss a notification with ",(0,i.jsx)(t.code,{children:"toast.dismiss"}),". Be aware that it triggers the exit animation and does not remove the Toast instantly. Toasts will auto-remove after 1 second by default."]}),"\n",(0,i.jsx)(t.h4,{id:"dismiss-a-single-toast",children:"Dismiss a single toast"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const toastId = toast('Loading...');\n\n// ...\n\ntoast.dismiss(toastId);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You can dismiss all toasts at once, by leaving out the ",(0,i.jsx)(t.code,{children:"toastId"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"dismiss-all-toasts-at-once",children:"Dismiss all toasts at once"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"toast.dismiss();\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To remove toasts instantly without any animations, use ",(0,i.jsx)(t.code,{children:"toast.remove"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"remove-toasts-instantly",children:"Remove toasts instantly"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"toast.remove(toastId);\n\n// or\n\ntoast.remove();\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.h2,{id:"update-an-existing-toast",children:"Update an existing toast"}),"\n",(0,i.jsx)(t.p,{children:"Each toast call returns a unique id. Use in the toast options to update the existing toast."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const toastId = toast.loading('Loading...');\n\n// ...\n\ntoast.success('This worked', {\n  id: toastId,\n});\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.h2,{id:"prevent-duplicate-toasts",children:"Prevent duplicate toasts"}),"\n",(0,i.jsx)(t.p,{children:"To prevent duplicates of the same kind, you can provide a unique permanent id."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"toast.success('Copied to clipboard!', {\n  id: 'clipboard',\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"prevent-swipe-to-dismiss",children:"Prevent Swipe to Dismiss"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"toast('This toast cannot be swiped away', {\n  duration: 4000,\n  position: ToastPosition.TOP,\n  isSwipeable: false, // <-- Add here (defaults to true)\n})\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.h2,{id:"disable-shadow",children:"Disable Shadow"}),"\n",(0,i.jsxs)(t.p,{children:["You can disable the shadow of the toast by setting ",(0,i.jsx)(t.code,{children:"disableShadow"})," to ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"toast('This toast has no shadow', {\n  duration: 4000,\n  position: ToastPosition.TOP,\n  disableShadow: true, // <-- Add here (defaults to false)\n})\n\n"})}),"\n",(0,i.jsx)(t.h2,{id:"animation-options",children:"Animation Options"}),"\n",(0,i.jsxs)(t.p,{children:["Control the animation type and configuration for toasts.\n",(0,i.jsxs)(t.em,{children:["Note: it is important to still supply the duration when configuring the animation. The duration in ",(0,i.jsx)(t.code,{children:"animatonConfig"})," controls the duration of the opacity animation, not the total duration of the toast."]})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import { toast } from 'react-native-toast';\n\n// Show a toast with custom animation settings\ntoast.show('This is a toast message', {\n  animationType: 'spring',\n  animationConfig: {\n    duration: 500,\n    stiffness: 100,\n  },\n  position: 'top',\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"adjust-toast-width-to-hug-text",children:"Adjust toast width to hug text"}),"\n",(0,i.jsx)(t.p,{children:"To have the toast adjust its width based on the content of the text, you can apply the following styles."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"AutoWidthStyles = {\n  pressable: {\n    maxWidth: width - 32,\n    alignSelf: 'center',\n    left: null,\n    paddingHorizontal: 16\n  },\n  view: {\n    flexGrow: 1,\n    flexShrink: 1,\n    maxWidth: width - 32,\n    paddingHorizontal: 0,\n    width: undefined\n  },\n  text: {\n    flex: undefined,\n    flexGrow: 1,\n    flexShrink: 1,\n    flexWrap: 'wrap'\n  }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["These styles can be applied to the defaultStyle prop in the ",(0,i.jsx)(t.code,{children:"<Toasts />"})," component or to each toast instance individually. If you use these styles frequently, I recommend creating an object that you can add directly to each toast call, e.g.,"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"toast('my toast', {\n  styles: AutoWidthStyles\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["where ",(0,i.jsx)(t.code,{children:"AutoWidthStyles"})," holds the actual styles for auto width."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.h2,{id:"all-toast-options",children:"All toast() Options"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"duration"})}),(0,i.jsx)(t.td,{children:"number"}),(0,i.jsx)(t.td,{children:"3000"}),(0,i.jsxs)(t.td,{children:["Duration in milliseconds. Set to ",(0,i.jsx)(t.code,{children:"Infinity"})," to keep the toast open until dismissed manually."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"position"})}),(0,i.jsx)(t.td,{children:"enum"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"Position of the toast. Can be ToastPosition.TOP or ToastPosition.BOTTOM."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"id"})}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Unique id for the toast."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"icon"})}),(0,i.jsx)(t.td,{children:"Element"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Icon to display on the left of the toast."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"animationType"})}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"'timing'"}),(0,i.jsx)(t.td,{children:"Animation type. Can be 'timing' or 'spring'."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"animationConfig"})}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Animation configuration."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"customToast"})}),(0,i.jsx)(t.td,{children:"function"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Custom toast component."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"width"})}),(0,i.jsx)(t.td,{children:"number"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Width of the toast."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"height"})}),(0,i.jsx)(t.td,{children:"number"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Height of the toast."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"disableShadow"})}),(0,i.jsx)(t.td,{children:"boolean"}),(0,i.jsx)(t.td,{children:"false"}),(0,i.jsx)(t.td,{children:"Disable shadow on the toast."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"isSwipeable"})}),(0,i.jsx)(t.td,{children:"boolean"}),(0,i.jsx)(t.td,{children:"true"}),(0,i.jsx)(t.td,{children:"Disable/Enable swipe to dismiss the toast."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"providerKey"})}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"'DEFAULT'"}),(0,i.jsx)(t.td,{children:"Provider key for the toast."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"accessibilityMessage"})}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Accessibility message for screen readers."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"styles"})}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Styles for the toast."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>d});var n=s(6540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);