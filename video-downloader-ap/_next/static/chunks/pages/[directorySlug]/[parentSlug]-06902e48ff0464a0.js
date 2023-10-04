(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[930],{4999:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[directorySlug]/[parentSlug]",function(){return __webpack_require__(8112)}])},8112:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSG:function(){return __N_SSG},default:function(){return _parentSlug_}});var jsx_runtime=__webpack_require__(2322),Meta=__webpack_require__(9774),Layout=__webpack_require__(7266),LogoSection=__webpack_require__(3732),clsx_m=__webpack_require__(6277),Image=__webpack_require__(2729),Markdown=__webpack_require__(8897),HowToSchema=__webpack_require__(4835),enums=__webpack_require__(7309);let HowToSection=param=>{let{heading,section,description,howToTime,video=null,config={enableEnumeration:!1,imagePosition:enums.L.TOP},className=""}=param,{enableEnumeration,imagePosition}=config;return(0,jsx_runtime.jsxs)("section",{id:"how-to-section",className:(0,clsx_m.Z)("grid grid-flow-row gap-8 pb-16 pt-12 text-center md:gap-16 md:pb-24 md:pt-20",className),children:[(0,jsx_runtime.jsx)(HowToSchema.i,{heading:heading||"",description:description,howToItems:section,howToTime:howToTime,video:video}),heading&&(0,jsx_runtime.jsx)("h2",{className:"text-2xl font-medium leading-tight tracking-tight sm:text-4xl",children:heading}),(0,jsx_runtime.jsx)("div",{className:"grid grid-cols-1 items-start justify-items-center gap-12 sm:grid-cols-3",children:section.map((section,index)=>{if(!section.heading&&!section.content&&!section.image)return null;let image=section.image&&(0,jsx_runtime.jsx)(Image.Ee,{className:"h-auto",alt:section.image.alt,hash:section.image.hash,ext:section.image.ext,width:320,height:213,sizes:{xs:296,sm:149,md:192,lg:245,xl:320}});return(0,jsx_runtime.jsxs)("div",{className:"grid grid-flow-row justify-items-center gap-2",children:[imagePosition===enums.L.TOP&&image,section.heading&&(0,jsx_runtime.jsxs)("h3",{className:"text-xl font-bold leading-tight tracking-tight",children:[enableEnumeration?"".concat(index+1,". "):"",section.heading]}),(0,jsx_runtime.jsx)(Markdown.U,{content:section.content,className:"max-w-full"}),imagePosition===enums.L.BOTTOM&&image]},index)})})]})};var VideoSection=__webpack_require__(3798);let UVPSection=param=>{let{section}=param;return(0,jsx_runtime.jsx)("section",{id:"uvp-section",className:"grid grid-flow-row gap-16 py-8 text-center sm:text-start md:gap-44 md:pt-20 md:pb-20",children:section.map((uvp,index)=>uvp.heading||uvp.content||uvp.image?(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-1 gap-8 sm:gap-32 md:grid-cols-2",children:[(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.W)("grid grid-flow-row content-start gap-4",index%2!=0?"md:order-last":void 0),children:[uvp.heading&&(0,jsx_runtime.jsx)("h2",{className:"text-3xl font-medium leading-tight tracking-tight sm:text-4xl",children:uvp.heading}),(0,jsx_runtime.jsx)(Markdown.U,{content:uvp.content,className:"max-w-full"})]}),uvp.image&&(0,jsx_runtime.jsx)(Image.Ee,{alt:uvp.image.alt,className:"h-auto",hash:uvp.image.hash,ext:uvp.image.ext,width:512,height:378,sizes:{xs:296,sm:512,md:272,lg:352,xl:480}})]},index):null)})};var FAQSection=__webpack_require__(6935),DiscoverSection=__webpack_require__(4622),TestimonialSection=__webpack_require__(5044),MoreThanSection=__webpack_require__(6584),AggregateRatingSchema=__webpack_require__(9160),BlogPostSection=__webpack_require__(6948),HeroSection=__webpack_require__(3570);let VideoDownloaderParentTemplate=param=>{let{pageData,locales,navData,breadcrumbData,footerData,staticContent,blogPosts,showSmartBanner,children:microApp,dynamicOgImage}=param;return(0,jsx_runtime.jsxs)(Layout.A,{locales:locales,navData:navData,breadcrumbData:breadcrumbData,footerData:footerData,children:[(0,jsx_runtime.jsx)(AggregateRatingSchema.f,{title:pageData.titleSection.heading,description:pageData.titleSection.content}),(0,jsx_runtime.jsx)(Meta.h_,{title:pageData.meta.metaTitle,description:pageData.meta.metaDescription,locales:locales,showSmartBanner:showSmartBanner,dynamicOgImage:pageData.titleSection.image||(null==dynamicOgImage?void 0:dynamicOgImage.image)?{title:(null==dynamicOgImage?void 0:dynamicOgImage.title)||pageData.titleSection.heading,image:(null==dynamicOgImage?void 0:dynamicOgImage.image)||(0,Image.zL)(pageData.titleSection.image.hash,pageData.titleSection.image.ext,pageData.titleSection.image.width),ctaText:(null==dynamicOgImage?void 0:dynamicOgImage.ctaText)||staticContent.getStartedNow,theme:(null==dynamicOgImage?void 0:dynamicOgImage.theme)||["#4434FF","#D634FF"]}:null}),(0,jsx_runtime.jsx)("div",{className:"mx-auto w-full max-w-screen-2xl px-6",children:microApp}),(0,jsx_runtime.jsxs)("div",{className:"mx-auto max-w-6xl px-8 sm:px-12 lg:px-24 xl:px-0","data-testid":"@template/parent",children:[(0,jsx_runtime.jsx)(HowToSection,{heading:pageData.howToHeading,section:pageData.howToSection,description:pageData.titleSection.content,howToTime:pageData.howToTime,video:pageData.videoSection,config:{enableEnumeration:!0,imagePosition:enums.L.BOTTOM},className:"pb-0 md:pb-0"}),(0,jsx_runtime.jsx)(LogoSection.h,{}),(0,jsx_runtime.jsx)(HeroSection.D,{section:pageData.heroSection}),pageData.videoSection&&(0,jsx_runtime.jsx)(VideoSection.n,{section:pageData.videoSection,description:pageData.titleSection.content,howToTime:pageData.howToTime}),(0,jsx_runtime.jsx)(UVPSection,{section:pageData.UVPSection}),(0,jsx_runtime.jsx)(FAQSection.v,{heading:staticContent.faqTitle,section:pageData.faqSection}),pageData.childPages.length>0&&(0,jsx_runtime.jsx)(DiscoverSection.A,{heading:staticContent.discoverMore,section:pageData.childPages}),(0,jsx_runtime.jsx)(TestimonialSection.J,{heading:staticContent.whatTheySay}),blogPosts&&blogPosts.length>0&&(0,jsx_runtime.jsx)(BlogPostSection.q,{heading:staticContent.moreFromVEED,posts:blogPosts})]}),(0,jsx_runtime.jsx)(MoreThanSection.c,{section:pageData.moreThanSection,cta:pageData.titleSection.CTA})]})};var micro_app=__webpack_require__(1262);let ParentPage=param=>{let{directoryType,pageData,locales,navData,breadcrumbData,footerData,staticContent,showSmartBanner,blogPosts,direction}=param;return(0,jsx_runtime.jsx)(VideoDownloaderParentTemplate,{directoryType:directoryType,pageData:pageData,locales:locales,navData:navData,breadcrumbData:breadcrumbData,footerData:footerData,staticContent:staticContent,showSmartBanner:showSmartBanner,blogPosts:blogPosts,direction:direction,children:pageData.microApp&&(0,jsx_runtime.jsx)(micro_app.H,{microApp:pageData.microApp,pageData:pageData})})};var __N_SSG=!0,_parentSlug_=ParentPage}},function(__webpack_require__){__webpack_require__.O(0,[424,917,789,525,461,748,872,602,278,326,446,554,865,995,774,888,179],function(){return __webpack_require__(__webpack_require__.s=4999)}),_N_E=__webpack_require__.O()}]);