"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[761],{2210:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{C1:function(){return LANDING_PAGE_EVENTS},PW:function(){return TEMPLATE_EVENTS},mq:function(){return HOMEPAGE_EVENTS},pN:function(){return LANDING_PAGE_CONTACT_SALES_EVENTS}});let TEMPLATE_EVENTS={TEMPLATE_CLICKED:"Template Clicked",VIEW_ALL_TEMPLATES_CLICKED:"View All Templates Clicked"},LANDING_PAGE_EVENTS={PRIMARY_CTA:"LP Primary CTA Clicked",SECONDARY_CTA:"LP Secondary CTA Clicked"},LANDING_PAGE_CONTACT_SALES_EVENTS={DETAILS_FORM_SUBMITTED:"LP Contact Sales Details Form Submitted",MEETING_BOOKING_FORM_SUBMITTED:"LP Contact Sales Meeting Booking Form Submitted"},HOMEPAGE_EVENTS={PRIMARY_CTA:"Home Page Primary CTA Clicked",SECONDARY_CTA:"Home Page Secondary CTA Clicked"}},5742:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U:function(){return events},B:function(){return helpers_namespaceObject}});var helpers_namespaceObject={};__webpack_require__.r(helpers_namespaceObject),__webpack_require__.d(helpers_namespaceObject,{logTemplate:function(){return logTemplate}});var events=__webpack_require__(2210),index_es=__webpack_require__(1765);let logTemplate=(event,template)=>{index_es.Z.logEvent(event,{templateId:template.id,templateName:template.name})}},7065:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return handleCTAClicked}});let handleCTAClicked=(href,logEvent)=>async e=>{e.preventDefault();try{await logEvent()}catch(error){console.error("Error occurred:",error)}finally{window.location.href=href}}},8426:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J:function(){return CallToAction}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),react_icons_fi__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4543),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4905),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6214);let getButtonClassName=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)("inline-grid grid-flow-col items-center justify-center gap-[22px] whitespace-nowrap rounded-full px-9 py-[15px] font-medium shadow-md",{variants:{inverted:{false:"bg-blue-600 text-white shadow-blue-600/20 hover:bg-blue-700",true:"bg-white text-blue-600 shadow-white/20 hover:bg-neutral-100"},size:{normal:"text-lg",large:"text-xl py-4"}},defaultVariants:{inverted:!1,size:"normal"}}),getIconClassName=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)("shadow-neutral-1000/25 -mr-[15px] grid items-center justify-center rounded-full p-3 shadow-xl",{variants:{inverted:{false:"bg-white text-blue-600",true:"bg-blue-600 text-white"}},defaultVariants:{inverted:!1}}),CallToAction=param=>{let{text,inverted,icon,bidirectional=!0,size,...props}=param,buttonClassName=getButtonClassName({inverted,size}),iconClassName=getIconClassName({inverted});bidirectional&&(iconClassName="".concat(iconClassName,"  rtl:-scale-x-100"));let Icon=icon||react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.Rgz;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_1__.z,{...props,className:buttonClassName,enableTrackingParams:!0,children:[text,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:iconClassName,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{className:"h-[18px] w-[18px]"})})]})}},2351:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{R:function(){return Marquee}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6277),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2784);let Marquee=param=>{let{children,direction,pauseOnHover,className}=param,[isHovered,setIsHovered]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(className,"w-full overflow-hidden"),onMouseOver:()=>setIsHovered(!0),onMouseOut:()=>setIsHovered(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"animate-marquee mx-auto flex w-fit",style:{"--marquee-direction":"ltr"===direction?"reverse":"normal","--marquee-play-state":pauseOnHover&&isHovered?"paused":"running"},children:[children,children]})})}},7803:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:function(){return Video}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6277),next_dynamic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5237),next_dynamic__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2784),_Image__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2729);let ReactPlayer=next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(372).then(__webpack_require__.bind(__webpack_require__,4372)),{loadableGenerated:{webpack:()=>[4372]},ssr:!1}),Video=param=>{var ref,_controls;let{thumbnail,showThumbnail,title,className,position,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(className,"relative mx-auto h-full w-full max-w-full"),children:[thumbnail&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_3__.Ee,{...thumbnail,className:"h-full w-full object-cover"}),(!showThumbnail||!thumbnail)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ReactPlayer,{...props,playing:null!==(ref=!showThumbnail&&props.playing)&&void 0!==ref&&ref,muted:!0,controls:null===(_controls=props.controls)||void 0===_controls||_controls,wrapper:(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((param,ref)=>{let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref:ref,title:title,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(position,"inset-0 z-10"),children:children})}),config:{file:{attributes:{style:{width:"100%",height:"100%",objectFit:"cover"}}}}})]})}},9160:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:function(){return AggregateRatingSchema}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),_StructuredMarkup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4501);let AggregateRatingSchema=param=>{let{title,description}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StructuredMarkup__WEBPACK_IMPORTED_MODULE_1__.l,{schema:{"@context":"https://schema.org","@type":"SoftwareApplication",url:"https://www.veed.io",name:"VEED, ".concat(title),description,operatingSystem:"Windows, MacOS, Chrome OS, Linux, iOS, Android",applicationCategory:"MultimediaApplication",applicationSubCategory:"Video Editor",aggregateRating:{"@type":"AggregateRating",ratingValue:4.9,bestRating:5,ratingCount:79},offers:{"@type":"Offer",price:0,priceCurrency:"GBP"}}})}},5279:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{N:function(){return FAQSchema}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),utils_filterBoolean__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4217),_StructuredMarkup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4501);let FAQSchema=param=>{let{section}=param,schema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:(0,utils_filterBoolean__WEBPACK_IMPORTED_MODULE_2__.g)(null==section?void 0:section.map(faq=>faq.heading&&faq.content?{"@type":"Question",name:faq.heading,acceptedAnswer:{"@type":"Answer",text:faq.content}}:null))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StructuredMarkup__WEBPACK_IMPORTED_MODULE_1__.l,{schema:schema})}},4835:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{i:function(){return HowToSchema}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),utils_youtubeId__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7778),utils_filterBoolean__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4217),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5632),_StructuredMarkup__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4501);let HowToSchema=param=>{let{heading,description,howToItems,howToTime,video}=param,router=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),pathname=router.asPath.split("?")[0];if("/tools/video-editor"===pathname)return null;let schema={"@context":"https://schema.org","@type":"HowTo",name:heading||"How to use VEED",step:(0,utils_filterBoolean__WEBPACK_IMPORTED_MODULE_3__.g)(null==howToItems?void 0:howToItems.map(howTo=>howTo.heading&&howTo.content?{"@type":"HowToStep",name:howTo.heading,itemListElement:[{"@type":"HowToDirection",text:howTo.content}]}:null)),video:video?{"@type":"VideoObject",name:video.title,description,contentUrl:"".concat(video.url),embedUrl:"https://www.youtube.com/embed/".concat((0,utils_youtubeId__WEBPACK_IMPORTED_MODULE_4__.i)(video.url)),thumbnailUrl:"http://img.youtube.com/vi/".concat((0,utils_youtubeId__WEBPACK_IMPORTED_MODULE_4__.i)(video.url),"/sddefault.jpg"),uploadDate:"2022-07-09T17:23:47.793Z",duration:howToTime||"PT1M54S"}:void 0};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StructuredMarkup__WEBPACK_IMPORTED_MODULE_2__.l,{schema:schema})}},1225:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return VideoSchema}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),utils_youtubeId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7778),_StructuredMarkup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4501);let VideoSchema=param=>{let{video,description,howToTime}=param,schema={"@context":"https://schema.org","@type":"VideoObject",name:video.title,contentUrl:video.url,embedUrl:"https://www.youtube.com/embed/".concat((0,utils_youtubeId__WEBPACK_IMPORTED_MODULE_2__.i)(video.url)),thumbnailUrl:"http://img.youtube.com/vi/".concat((0,utils_youtubeId__WEBPACK_IMPORTED_MODULE_2__.i)(video.url),"/sddefault.jpg"),description,duration:howToTime||"PT3M",productionCompany:{"@type":"Organization",url:"https://www.veed.io",name:"VEED"},author:{"@type":"Organization",url:"https://www.veed.io",name:"VEED"},keywords:video.title,uploadDate:"2022-07-09T17:23:47.793Z"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StructuredMarkup__WEBPACK_IMPORTED_MODULE_1__.l,{schema:schema})}},6948:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:function(){return BlogPostSection}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),ui_tailwind_components_Image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2729),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6214);let BlogPostSection=param=>{let{posts,heading}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section",{"data-testid":"@blogPostSection",id:"blog-post-section",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"mb-12 text-center text-4xl font-medium",children:heading}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{className:"grid grid-flow-row gap-6 md:grid-cols-3",children:posts.slice(0,3).map((post,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.z,{className:"",href:"/learn/".concat(post.slug),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article",{className:"h-full overflow-hidden rounded-2xl border border-neutral-200 transition-transform duration-100 ease-in-out hover:scale-[1.0125]",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Image__WEBPACK_IMPORTED_MODULE_1__.Ee,{src:post.thumbnail.url,width:220,height:100,className:"h-auto w-full",alt:post.thumbnail.alt||""})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"p-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"mb-2 text-xl font-medium",children:post.title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"line-clamp-4 text-sm leading-relaxed text-neutral-700",children:post.summary})]})]})})},index))})]})}},2313:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return CreateTemplateSection}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),ui_tailwind_components_Markdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8897),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2784),ui_tailwind_components_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6214),ui_tailwind_components_Video__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7803),ui_tailwind_components_Image__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2729),react_icons_fi__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(4543),_Marquee__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2351),analytics_amplitude__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5742),_veedstudio_analytics_browser__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1765),utils_constants__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(794);let Template=param=>{let{template,templateCtaText}=param,[showThumbnail,setShowThumbnail]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0),href="".concat(utils_constants__WEBPACK_IMPORTED_MODULE_9__.L$,"/").concat(template.id),aspectRatio=template.ratio.replace("x","/"),image={...template.image||{src:template.thumbnail,alt:template.name},height:384,width:681,sizes:{xs:340,sm:340,md:454,lg:681,xl:681}},onTemplateClick=template=>analytics_amplitude__WEBPACK_IMPORTED_MODULE_7__.B.logTemplate(analytics_amplitude__WEBPACK_IMPORTED_MODULE_7__.U.PW.TEMPLATE_CLICKED,template);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ui_tailwind_components_Button__WEBPACK_IMPORTED_MODULE_3__.z,{href:href,className:"relative mr-4 h-96 w-full",onClick:()=>onTemplateClick(template),enableTrackingParams:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"bg-neutral-1000/50 absolute inset-0 z-10 grid items-center justify-center rounded-2xl p-2 opacity-0 transition-opacity group-hover:opacity-100",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ui_tailwind_components_Button__WEBPACK_IMPORTED_MODULE_3__.z,{variant:"secondary",className:"rtl:direction-rtl cursor-pointer rounded-full text-sm",children:[templateCtaText,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_10__.Rgz,{className:"rtl:-scale-x-100"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"h-full overflow-hidden rounded-2xl",style:{aspectRatio},onMouseOver:()=>setShowThumbnail(!1),onMouseOut:()=>setShowThumbnail(!0),children:template.preview?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Video__WEBPACK_IMPORTED_MODULE_4__.n,{url:template.preview,title:template.name,thumbnail:image,showThumbnail:showThumbnail,playing:!0,controls:!1,loop:!0}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Image__WEBPACK_IMPORTED_MODULE_5__.Ee,{...image})})]})},CreateTemplateSection=param=>{let{section,templates,templateCtaText}=param,onBrowseClick=()=>{_veedstudio_analytics_browser__WEBPACK_IMPORTED_MODULE_8__.Z.logEvent(analytics_amplitude__WEBPACK_IMPORTED_MODULE_7__.U.PW.VIEW_ALL_TEMPLATES_CLICKED)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section",{id:"create-template-section",className:"mt-20 mb-20 grid grid-flow-row justify-items-center gap-14 rounded-2xl bg-neutral-50 py-12 text-center md:py-20",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid grid-flow-row gap-6",children:[section.heading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-2xl font-medium leading-tight tracking-tight md:text-3xl lg:text-4xl",children:section.heading}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Markdown__WEBPACK_IMPORTED_MODULE_1__.U,{content:section.content,className:"max-w-full text-inherit"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Marquee__WEBPACK_IMPORTED_MODULE_6__.R,{pauseOnHover:!0,direction:"ltr",className:"direction-ltr",children:templates.map(template=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Template,{template:template,templateCtaText:templateCtaText},template.id))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"hidden sm:block",children:section.CTA&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ui_tailwind_components_Button__WEBPACK_IMPORTED_MODULE_3__.z,{variant:"ghost",className:"text-xl",href:utils_constants__WEBPACK_IMPORTED_MODULE_9__.L$,onClick:onBrowseClick,children:[section.CTA.text,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_10__.Rgz,{className:"rtl:-scale-x-100"})]})})]})}},4622:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return DiscoverSection}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),ui_tailwind_components_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6214),_hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4181);let DiscoverSection=param=>{let{heading,section}=param,locale=(0,_hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__.b)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section",{"data-testid":"@discoverSection",id:"discover-section",className:"mt-10 mb-20 grid grid-flow-row gap-6 rounded-2xl border border-neutral-200 p-8 md:gap-10 md:py-12 md:px-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{"data-testid":"@discoverSection/heading",className:"text-2xl font-medium leading-tight tracking-tight md:text-3xl",children:heading}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{"data-testid":"@discoverSection/links",className:"flex flex-wrap gap-2",children:section.sort((a,b)=>a.title.localeCompare(b.title)).map(child=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Button__WEBPACK_IMPORTED_MODULE_1__.z,{variant:"outline",href:child.link,locale:locale,children:child.title})},child.title))})]})}},7851:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return FAQSection}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),react_icons_fa__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8978),ui_tailwind_components_Accordian__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4551),ui_tailwind_components_Markdown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8897),ui_tailwind_components_schema_FAQSchema__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5279);let FAQSection=param=>{let{heading,section}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section",{id:"faq-section",className:"grid grid-cols-1 gap-10 py-8 md:grid-cols-2 md:pt-20 md:pb-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_schema_FAQSchema__WEBPACK_IMPORTED_MODULE_3__.N,{section:section}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid w-80 grid-flow-row content-start items-start justify-start justify-items-start gap-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"shadow-neutral-1000/20 grid items-center justify-center rounded-full bg-white p-6 text-blue-600 shadow-xl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.g_g,{className:"h-8 w-8 rtl:-scale-x-100"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-3xl font-medium leading-tight tracking-tight md:text-4xl",children:heading})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"grid grid-flow-row",children:section.map(faq=>faq.heading||faq.content?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"border-t border-neutral-200 py-4 last-of-type:border-b md:p-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Accordian__WEBPACK_IMPORTED_MODULE_1__.G,{icons:{opened:react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.iFH,closed:react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.wEH},heading:faq.heading,className:"rounded-lg px-4 py-2 text-start text-xl font-medium transition hover:bg-neutral-100",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"px-4 pt-2 pb-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Markdown__WEBPACK_IMPORTED_MODULE_2__.U,{content:faq.content,className:"max-w-full"})})})},faq.heading):null)})]})}},3570:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return HeroSection}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),ui_tailwind_components_Markdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8897);let HeroSection=param=>{let{section}=param;return section.heading||section.content?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section",{id:"hero-section",className:"mb-4 mt-12 grid grid-flow-row gap-4 rounded-2xl bg-neutral-50 p-8 md:mb-20 md:mt-14 md:p-12",children:[section.heading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-2xl font-medium leading-tight tracking-tight lg:text-3xl",children:section.heading}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Markdown__WEBPACK_IMPORTED_MODULE_1__.U,{content:section.content,className:"max-w-none md:columns-2"})]}):null}},3732:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:function(){return LogoSection}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),ui_tailwind_components_Image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2729);let logos=[{url:"https://cdn-site-assets.veed.io/facebook_eeafacb0ea_94f54bd445/facebook_eeafacb0ea_94f54bd445.png",height:21,width:111,alt:"Facebook Logo"},{url:"https://cdn-site-assets.veed.io/visa_c3a605a752_cdbacb05c5/visa_c3a605a752_cdbacb05c5.png",height:21,width:60,alt:"Visa Logo"},{url:"https://cdn-site-assets.veed.io/pandg_ed1613b589_a1a69f7471/pandg_ed1613b589_a1a69f7471.png",height:21,width:45,alt:"P&G Logo"},{url:"https://cdn-site-assets.veed.io/pinterest_e2176fc546_32818e4097/pinterest_e2176fc546_32818e4097.png",height:22,width:91,alt:"Pinterest Logo"},{url:"https://cdn-site-assets.veed.io/vaynermedia_6a60d16603_53046d937f/vaynermedia_6a60d16603_53046d937f.png",height:12,width:120,alt:"Vayner Media Logo"},{url:"https://cdn-site-assets.veed.io/booking_com_2eb121846e_12f1946815/booking_com_2eb121846e_12f1946815.png",height:18,width:108,alt:"Booking Logo"},{url:"https://cdn-site-assets.veed.io/hublot_238379d6c6_6ee0506db1/hublot_238379d6c6_6ee0506db1.png",height:17,width:122,alt:"Hublot Logo"}],LogoSection=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{id:"logo-section",className:"mx-auto flex flex-wrap items-center justify-center gap-8 pb-8 pt-12 md:py-14",children:logos.map(logo=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Image__WEBPACK_IMPORTED_MODULE_1__.Ee,{priority:!0,src:logo.url,alt:logo.alt,height:logo.height,width:logo.width},logo.alt))})},9953:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return MoreThanSection}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),ui_tailwind_components_CallToAction__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8426),ui_tailwind_components_Image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2729),ui_tailwind_components_Markdown__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8897),analytics_amplitude_events__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2210),_veedstudio_analytics_browser__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1765),utils_enums__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7309),modules_activation_flow_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(162),analytics_utils_handle_cta_clicked__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(7065),_hooks_useActivationFlow__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7782);let MoreThanSection=param=>{let{section,cta,tags,title}=param,activationFlowPayload=(0,_hooks_useActivationFlow__WEBPACK_IMPORTED_MODULE_7__.h)({title,tags});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section",{"data-testid":"@moreThan",id:"more-from-section",className:"relative mt-20 grid grid-flow-row justify-center gap-20 bg-neutral-50 px-8 pb-28 pt-16 text-center md:px-24",style:{backgroundImage:"url(".concat("https://assets-global.website-files.com/616e938268c8f02f94b2b53c/616e938268c8f0dce0b2b5c3_more-than-circles.svg",")"),backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",backgroundSize:"cover"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mx-auto grid max-w-6xl grid-flow-row justify-items-center gap-8",children:[section.heading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-4xl font-medium leading-tight tracking-tight",children:section.heading}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Markdown__WEBPACK_IMPORTED_MODULE_3__.U,{content:section.content,className:"max-w-full"}),(()=>{let ctaLink=activationFlowPayload?"/new?".concat(modules_activation_flow_utils__WEBPACK_IMPORTED_MODULE_8__.XE,"=").concat(activationFlowPayload):cta.link;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_CallToAction__WEBPACK_IMPORTED_MODULE_1__.J,{"data-testid":"@moreThan/cta",href:ctaLink,text:cta.text,onClick:(0,analytics_utils_handle_cta_clicked__WEBPACK_IMPORTED_MODULE_9__.$)(ctaLink,()=>_veedstudio_analytics_browser__WEBPACK_IMPORTED_MODULE_5__.Z.logEvent(analytics_amplitude_events__WEBPACK_IMPORTED_MODULE_4__.C1.PRIMARY_CTA,{position:utils_enums__WEBPACK_IMPORTED_MODULE_6__.L.BOTTOM}).promise)})})()]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Image__WEBPACK_IMPORTED_MODULE_2__.Ee,{src:"https://cdn-site-assets.veed.io/morethan_8c1e4a3d1e_ab0f207654/morethan_8c1e4a3d1e_ab0f207654.png",alt:"VEED app displayed on mobile,tablet and laptop",width:1344,height:567,sizes:{xs:240,sm:576,md:576,lg:832,xl:1088}})]})}},5044:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J:function(){return TestimonialSection}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2784),react_icons_im__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3988),ui_tailwind_components_Markdown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8897);let testimonials=[{author:"Chris Y.",content:"Veed is a great piece of browser software with the best team I've ever seen.\nVeed allows for subtitling, editing, effect/text encoding, and many more advanced features that other editors just can't compete with. The free version is wonderful, but the Pro version is beyond perfect. Keep in mind that this a browser editor we're talking about and the level of quality that Veed allows is stunning and a complete game changer at worst."},{author:"Laura Haleydt - Brand Marketing Manager, Carlsberg Importers",content:"I love using VEED as the speech to subtitles transcription is the most accurate I've seen on the market.\nIt has enabled me to edit my videos in just a few minutes and bring my video content to the next level"},{author:"Diana B - Social Media Strategist, Self Employed",content:"The Best & Most Easy to Use Simple Video Editing Software!\nI had tried tons of other online editors on the market and been disappointed. With VEED I haven't experienced any issues with the videos I create on there.\nIt has everything I need in one place such as the progress bar for my 1-minute clips, auto transcriptions for all my video content, and custom fonts for consistency in my visual branding."}],TestimonialSection=param=>{let{heading}=param,ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),intervalRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{let index=0;return intervalRef.current=window.setInterval(()=>{if(ref.current){var ref1,ref2;index===testimonials.length-1?(null===(ref1=ref.current)||void 0===ref1||ref1.scrollTo({left:0,behavior:"smooth"}),index=0):(null===(ref2=ref.current)||void 0===ref2||ref2.scrollBy({left:ref.current.offsetWidth,behavior:"smooth"}),index+=1)}},3500),()=>{clearInterval(intervalRef.current)}},[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section",{id:"testimonial-section",className:"grid grid-cols-3 gap-10 pt-8 pb-16 md:grid-cols-5 md:py-20 md:pt-20",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"col-span-2 grid w-80 grid-flow-row content-start items-start justify-start justify-items-start gap-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"shadow-neutral-1000/20 grid items-center justify-center rounded-full bg-white p-6 text-blue-600 shadow-xl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_3__.bFs,{className:"h-8 w-8 rtl:-scale-x-100"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-3xl font-medium leading-tight tracking-tight md:text-4xl",children:heading})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref:ref,className:"scrollbar-hide col-span-3 snap-x snap-mandatory overflow-x-auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"grid auto-cols-fr grid-flow-col",style:{width:"".concat(100*testimonials.length,"%")},children:testimonials.map(testimonial=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"snap-start pr-8 pb-10",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid grid-flow-row gap-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Markdown__WEBPACK_IMPORTED_MODULE_2__.U,{content:testimonial.content,className:"italic"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-lg font-medium",children:testimonial.author})]})},testimonial.content))})})]})}},2790:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:function(){return VideoSection}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2322),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2784),ui_tailwind_components_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6214),ui_tailwind_components_Video__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7803),ui_tailwind_components_schema_VideoSchema__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1225),js_cookie__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1805);let VideoSection=param=>{let{section,description,howToTime}=param,[showThumbnail,setShowThumbnail]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),openInNewTab=href=>{Object.assign(document.createElement("a"),{target:"_blank",rel:"noopener noreferrer",href:href}).click()},onClickImage=()=>{let oneTrustStatus=js_cookie__WEBPACK_IMPORTED_MODULE_5__.Z.get("OptanonConsent");!oneTrustStatus||oneTrustStatus&&(null==oneTrustStatus?void 0:oneTrustStatus.includes("C0004:1"))?setShowThumbnail(!1):openInNewTab(section.url)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section",{id:"video-section",className:"grid grid-flow-row justify-items-center gap-12 pb-16 pt-8 text-center md:pb-20 md:pt-24",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_schema_VideoSchema__WEBPACK_IMPORTED_MODULE_4__.a,{video:section,description:description,howToTime:howToTime}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-2xl font-medium leading-tight tracking-tight sm:text-3xl",children:section.title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Button__WEBPACK_IMPORTED_MODULE_2__.z,{className:"aspect-video w-full max-w-screen-md overflow-hidden rounded-2xl",onClick:()=>onClickImage(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ui_tailwind_components_Video__WEBPACK_IMPORTED_MODULE_3__.n,{url:section.url,title:section.title,thumbnail:section.thumbnail&&{...section.thumbnail,height:432,width:768,sizes:{xs:296,sm:544,md:586,lg:576,xl:576}},showThumbnail:showThumbnail,playing:!0,controls:!0,position:"absolute"})})]})}},4217:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{g:function(){return filterBoolean}});let truthy=value=>!!value,filterBoolean=array=>array.filter(truthy)},7778:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{i:function(){return getYouTubeId}});let youtubeIdRegex=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;function getYouTubeId(url){if(!url)return null;let match=url.match(youtubeIdRegex),matchedId=match&&match[7];return(null==matchedId?void 0:matchedId.length)===11?matchedId:null}}}]);