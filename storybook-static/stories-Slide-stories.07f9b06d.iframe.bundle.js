"use strict";(self.webpackChunkstorybook_practice=self.webpackChunkstorybook_practice||[]).push([[474],{"./src/stories/Slide.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StorybookSlide:()=>StorybookSlide,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Slide_stories});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Slide(){const text=["developer","data scientist","system admin","mobile developer","game developer"],[view,setView]=(0,react.useState)(text[0]);let count=-1;return(0,react.useEffect)((()=>{let timer=setInterval((()=>{count=(count+1)%5,console.log(count),setView(text[count])}),1500);return()=>clearInterval(timer)}),[]),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("div",{className:"text",children:"Every"}),(0,jsx_runtime.jsx)("div",{className:"edit",children:view}),(0,jsx_runtime.jsx)("div",{className:"text",children:"has a"})]})}const Container=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n  display: flex;\n  justify-content: center;\n  background-color: #313539;\n  .edit {\n    position: relative;\n    animation-duration: 1500ms;\n    animation-name: down;\n    animation-iteration-count: infinite;\n    color: #f2740d;\n    font-weight: bold;\n    font-size: 55px;\n    margin: 0px 5px;\n  }\n  .text {\n    color: white;\n    font-weight: bold;\n    font-size: 55px;\n  }\n  @keyframes down {\n    from {\n      top: -50px;\n    }\n    to {\n      top: 0px;\n    }\n  }\n"]))),components_Slide=Slide;Slide.__docgenInfo={description:"",methods:[],displayName:"Slide"};const Slide_stories={title:"Slide",component:components_Slide,argTypes:{}},StorybookSlide=args=>(0,jsx_runtime.jsx)(components_Slide,{...args});StorybookSlide.parameters={...StorybookSlide.parameters,docs:{...StorybookSlide.parameters?.docs,source:{originalSource:"args => <Slide {...args}></Slide>",...StorybookSlide.parameters?.docs?.source}}};const __namedExportsOrder=["StorybookSlide"]}}]);