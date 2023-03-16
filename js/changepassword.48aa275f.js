(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["changepassword"],{"0060":function(e,t,a){"use strict";a.r(t);var r=a("7a23"),c={class:"min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8"};function o(e,t,a,o,n,s){var l=Object(r["resolveComponent"])("ChangePassword",!0);return Object(r["openBlock"])(),Object(r["createBlock"])("div",c,[Object(r["createVNode"])(l)])}var n=a("2864"),s=Object(r["defineComponent"])({components:{ChangePassword:n["a"]}});s.render=o;t["default"]=s},2864:function(e,t,a){"use strict";var r=a("7a23"),c={class:"mt-8 mx-auto sm:w-full sm:max-w-md"},o={class:"py-8 px-4 sm:px-10"},n=Object(r["createVNode"])("h2",{class:"mt-6 text-3xl font-extrabold text-gray-900"}," Change Password ",-1),s={key:0,class:"rounded-md bg-red-50 p-4 my-3"},l={class:"flex"},d=Object(r["createVNode"])("div",{class:"flex-shrink-0"},[Object(r["createVNode"])("svg",{class:"h-5 w-5 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[Object(r["createVNode"])("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})])],-1),i={class:"ml-3"},u={key:0,class:"text-sm font-medium text-red-800"},m={key:1,class:"text-sm font-medium text-red-800"},p=Object(r["createVNode"])("label",{for:"email",class:"block text-sm font-medium text-gray-700"}," Current Password ",-1),b={class:"mt-1"},f=Object(r["createVNode"])("label",{for:"email",class:"block text-sm font-medium text-gray-700"}," New Password ",-1),j={class:"mt-1"},O=Object(r["createVNode"])("label",{for:"password",class:"block text-sm font-medium text-gray-700"}," Confirm Password ",-1),w={class:"mt-1"},v=Object(r["createTextVNode"])("Confirm");function g(e,t,a,g,h,x){var V=Object(r["resolveComponent"])("el-input"),y=Object(r["resolveComponent"])("el-button"),N=Object(r["resolveComponent"])("el-form");return Object(r["openBlock"])(),Object(r["createBlock"])("div",c,[Object(r["createVNode"])("div",o,[n,e.warningDisplay&&""!==e.warning||e.apiWarning&&""!==e.apiWarning?(Object(r["openBlock"])(),Object(r["createBlock"])("div",s,[Object(r["createVNode"])("div",l,[d,Object(r["createVNode"])("div",i,[e.apiWarning&&""!==e.apiWarning?(Object(r["openBlock"])(),Object(r["createBlock"])("h3",u,Object(r["toDisplayString"])(e.apiWarning),1)):(Object(r["openBlock"])(),Object(r["createBlock"])("h3",m,Object(r["toDisplayString"])(e.warning),1))])])])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(N,{class:"space-y-6 my-5"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("div",null,[p,Object(r["createVNode"])("div",b,[Object(r["createVNode"])(V,{modelValue:e.form.currentPassword,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.currentPassword=t}),type:"password",placeholder:"********"},null,8,["modelValue"])])]),Object(r["createVNode"])("div",null,[f,Object(r["createVNode"])("div",j,[Object(r["createVNode"])(V,{modelValue:e.form.password,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.password=t}),type:"password",placeholder:"********"},null,8,["modelValue"])])]),Object(r["createVNode"])("div",null,[O,Object(r["createVNode"])("div",w,[Object(r["createVNode"])(V,{modelValue:e.form.confirmPassword,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.form.confirmPassword=t}),type:"password",placeholder:"********"},null,8,["modelValue"])])]),Object(r["createVNode"])("div",null,[Object(r["createVNode"])(y,{onClick:e.changePass,disabled:e.disabledButton,loading:e.loading,class:"w-full",type:"primary","native-type":"submit"},{default:Object(r["withCtx"])((function(){return[v]})),_:1},8,["onClick","disabled","loading"])])]})),_:1})])])}var h=a("1da1"),x=(a("96cf"),a("d81d"),a("ae5e")),V=a("afbc"),y=a("3fd4"),N=Object(r["defineComponent"])({setup:function(){var e=Object(r["reactive"])({currentPassword:"",password:"",confirmPassword:""}),t=Object(r["ref"])(!1),a=Object(r["ref"])(!1),c=Object(r["ref"])(!1),o=Object(r["ref"])(!1),n=Object(r["computed"])((function(){return e.password!==e.confirmPassword&&e.confirmPassword.length>0})),s=Object(r["computed"])((function(){return 0!=n.value||1!=a.value||1!=c.value||1!=o.value})),l=Object(r["computed"])((function(){return""!==e.password})),d=Object(r["ref"])(""),i=Object(r["computed"])((function(){return 0==a.value?"At least 8 characters—the more characters, the better.":0==c.value?"A mixture of letters and numbers.":1==n.value?"Passwords do not match.":0==o.value?"Inclusion of at least one special character, e.g., ! @ # ? ]":""}));function u(){return m.apply(this,arguments)}function m(){return m=Object(h["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.value=!0,a.next=3,x["b"].changePassword(e).then((function(e){1==e.succeeded?y["a"].alert("Your password has been changed successfully","Password changed",{confirmButtonText:"OK",callback:function(){V["a"].push({name:"AccountDetail"})}}):e.errors.map((function(e){d.value=e})),t.value=!1}));case 3:case"end":return a.stop()}}),a)}))),m.apply(this,arguments)}return Object(r["watch"])((function(){return e.password}),(function(e){d.value="",a.value=e.length>=8,c.value=/\d/.test(e),o.value=/[!@#\$%\^\&*\)\(+=._-]/.test(e)})),{form:e,warning:i,disabledButton:s,changePass:u,loading:t,warningDisplay:l,apiWarning:d}}});N.render=g;t["a"]=N},d81d:function(e,t,a){"use strict";var r=a("23e7"),c=a("b727").map,o=a("1dde"),n=o("map");r({target:"Array",proto:!0,forced:!n},{map:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);