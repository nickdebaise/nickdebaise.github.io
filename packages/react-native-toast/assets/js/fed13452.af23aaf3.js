"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[673],{6423:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"components/toasts","title":"<Toasts />","description":"Include the `` component in the root of your app.","source":"@site/docs/components/toasts.md","sourceDirName":"components","slug":"/components/toasts","permalink":"/packages/react-native-toast/components/toasts","draft":false,"unlisted":false,"editUrl":"https://github.com/backpackapp-io/react-native-toast/website/docs/components/toasts.md","tags":[],"version":"current","frontMatter":{"id":"toasts","title":"<Toasts />","hide_title":true,"sidebar_label":"<Toasts />","slug":"/components/toasts"},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/packages/react-native-toast/getting-started"},"next":{"title":"toast()","permalink":"/packages/react-native-toast/api/toast"}}');var o=t(4848),i=t(8453);const a={id:"toasts",title:"<Toasts />",hide_title:!0,sidebar_label:"<Toasts />",slug:"/components/toasts"},r="<Toasts />",l={},d=[{value:"Props",id:"props",level:2},{value:"globalAnimationType",id:"globalanimationtype",level:3},{value:"globalAnimationConfig",id:"globalanimationconfig",level:3},{value:"overrideDarkMode",id:"overridedarkmode",level:3},{value:"extraInsets",id:"extrainsets",level:3},{value:"onToastShow",id:"ontoastshow",level:3},{value:"onToastHide",id:"ontoasthide",level:3},{value:"onToastPress",id:"ontoastpress",level:3},{value:"preventScreenReaderFromHiding",id:"preventscreenreaderfromhiding",level:3},{value:"defaultStyle",id:"defaultstyle",level:3},{value:"providerKey",id:"providerkey",level:3},{value:"Example",id:"example",level:2}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"toasts-",children:(0,o.jsx)(n.code,{children:"<Toasts />"})})}),"\n",(0,o.jsxs)(n.p,{children:["Include the ",(0,o.jsx)(n.code,{children:"<Toasts />"})," component in the root of your app."]}),"\n",(0,o.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,o.jsx)(n.h3,{id:"globalanimationtype",children:"globalAnimationType"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"'timing' | 'spring'"})}),"\n",(0,o.jsx)(n.p,{children:"Set the global animation type for all toasts. This can be overridden by the toast options."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'<Toasts globalAnimationType="spring" />\n'})}),"\n",(0,o.jsx)(n.h3,{id:"globalanimationconfig",children:"globalAnimationConfig"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"object"})}),"\n",(0,o.jsx)(n.p,{children:"Set the global animation config for all toasts. This can be overridden by the toast options."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"<Toasts globalAnimationConfig={{duration: 500, flingPositionReturnDuration: 200, easing: Easing.elastic(1)}} />\n"})}),"\n",(0,o.jsx)(n.h3,{id:"overridedarkmode",children:"overrideDarkMode"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"boolean | undefined"})}),"\n",(0,o.jsxs)(n.p,{children:["Override the system dark mode. If a value is supplied (I.e. ",(0,o.jsx)(n.code,{children:"true"})," or ",(0,o.jsx)(n.code,{children:"false"}),"), then the toast components will use that value for the dark mode. For example, if ",(0,o.jsx)(n.code,{children:"overrideDarkMode = {false}"}),", dark mode will be disabled, regardless of the system's preferences."]}),"\n",(0,o.jsx)(n.h3,{id:"extrainsets",children:"extraInsets"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"object"})}),"\n",(0,o.jsx)(n.p,{children:"Supply the container for the toasts with extra padding."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"extraInsets?: {\n  top?: number;\n  bottom?: number;\n  right?: number;\n  left?: number;\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"ontoastshow",children:"onToastShow"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"function"})}),"\n",(0,o.jsxs)(n.p,{children:["When a toast is shown, this callback will fire, returning the toast object that was shown. ",(0,o.jsx)(n.em,{children:'Note, the toast object is "shown" when the toast is mounted.'})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"onToastShow?: (toast: T) => void;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"ontoasthide",children:"onToastHide"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"function"})}),"\n",(0,o.jsxs)(n.p,{children:["When a toast is hidden, this callback will fire, returning the toast object that was hidden. ",(0,o.jsx)(n.em,{children:'Note, the toast object is "hidden" when the toast is unmounted.'})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"onToastHide?: (toast: T) => void;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"ontoastpress",children:"onToastPress"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"function"})}),"\n",(0,o.jsx)(n.p,{children:"When a toast is pressed, this callback will fire, returning the toast object that was pressed."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"onToastPress?: (toast: T) => void;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"preventscreenreaderfromhiding",children:"preventScreenReaderFromHiding"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"boolean"})}),"\n",(0,o.jsx)(n.p,{children:"Prevent screen readers from hiding the toast component. This is useful if you want to override the default behavior of screen readers hiding the toast component."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"<Toasts preventScreenReaderFromHiding={true} />\n"})}),"\n",(0,o.jsx)(n.h3,{id:"defaultstyle",children:"defaultStyle"}),"\n",(0,o.jsxs)(n.p,{children:["(",(0,o.jsx)(n.code,{children:"object"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"Supply default styles for the toast component. This will be applied to all toasts unless overridden by the toast options."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"defaultStyle?: {\n  view?: ViewStyle;\n  pressable?: ViewStyle;\n  text?: TextStyle;\n  indicator?: ViewStyle;\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"providerkey",children:"providerKey"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"string"})}),"\n",(0,o.jsx)(n.p,{children:"Provide the Toasts component with a providerKey to conditionally render toasts in a component. Useful for rendering toasts in native modals."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'// Component in native modal\n<Toasts providerKey="MODAL::1" />\n\n//...\n// Root component\n<Toasts /> //has default providerKey of DEFAULT\n\n//...\n// Call toast in root modal\n\nconst id = toast("Hello from root modal") //default providerKey of DEFAULT\n\n// Native modal becomes visible\nconst id = toast("Hello from native modal", {providerKey: "MODAL::1"})\n//Now, toast is shown only in native modal\n'})}),"\n",(0,o.jsx)(n.p,{children:'If you want to persist toasts across components (i.e. when you open/close a modal and want to keep the same toasts), your toasts should be assigned a providerKey of "PERSISTS".'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'toast("Message...", {providerKey: "PERSISTS"})\n'})}),"\n",(0,o.jsx)(n.p,{children:"Or, if you cannot do so, you can update each toast manually."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const { toasts } = useToasterStore(); //Note, no provider key passed in\n\nuseEffect(() => {\n  toasts.forEach((t) => {\n    toast(t.message, {\n      ...t,\n      providerKey: isModalVisible ? 'MODAL::1' : 'DEFAULT', //Switch provider key here\n    });\n  });\n}, [isModalVisible]);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'<Toasts\n  onToastPress={(t) => {\n    console.log(`Toast ${t.id} was pressed.`)\n  }}\n  overrideDarkMode={isAppDarkMode}\n  globalAnimationType="spring"\n  globalAnimationConfig={{duration: 500, flingPositionReturnDuration: 200, stiffness: 50, damping: 10}}\n/>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);