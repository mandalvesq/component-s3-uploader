(this["webpackJsonpunicorn-front"]=this["webpackJsonpunicorn-front"]||[]).push([[0],{23:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t(2),c=t.n(o),i=t(12),l=t.n(i),s=(t(23),t(13)),r=t(14),u=t(17),f=t(16),d=t(15),g=t.n(d),h=(t(42),function(e){Object(u.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=n.call.apply(n,[this].concat(o))).state={file:null,base64URL:""},e.getBase64=function(e){return new Promise((function(n){var t="",a=new FileReader;a.readAsDataURL(e),a.onload=function(){console.log("Called",a),t=a.result,console.log(t),n(t)},console.log(undefined)}))},e.handleFileInputChange=function(n){console.log(n.target.files[0]);var t=e.state.file;t=n.target.files[0],e.getBase64(t).then((function(n){t.base64=n,console.log("File Is",t),g.a.post("https://1oun98e8c6.execute-api.us-east-1.amazonaws.com/v1/upload-to-s3",{image:"".concat(n)},alert("Imagem enviada com sucesso")),e.setState({base64URL:n,file:t})})).catch((function(e){console.log(e)})),e.setState({file:n.target.files[0]})},e}return Object(r.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:" Upload files to S3 "}),Object(a.jsx)("input",{type:"file",name:"file",onChange:this.handleFileInputChange}),Object(a.jsx)("h3",{children:"made with love by mandalvesq"})]})}}]),t}(c.a.Component)),p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(n){var t=n.getCLS,a=n.getFID,o=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),o(e),c(e),i(e)}))};l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),p()}},[[43,1,2]]]);
//# sourceMappingURL=main.279eed2c.chunk.js.map