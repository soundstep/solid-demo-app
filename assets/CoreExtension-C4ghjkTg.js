var _e=Object.defineProperty;var xe=(s,t,e)=>t in s?_e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var a=(s,t,e)=>(xe(s,typeof t!="symbol"?t+"":t,e),e);function Re(s,t){const e={alpha:!0,antialias:!1,depth:!1,stencil:!0,desynchronized:!1,powerPreference:"high-performance",premultipliedAlpha:!0,preserveDrawingBuffer:!1},r=s.getContext("webgl",e)||s.getContext("experimental-webgl",e);if(!r)throw new Error("Unable to create WebGL context");return t?new Proxy(r,{get(n,i){const o=n[i];return typeof o=="function"?(t.increment(String(i)),o.bind(n)):o}}):r}function g(s,t){if(!Ae()&&!s)throw new Error(t||"Assertion failed")}function ke(s,t,e){const r=Math.trunc(s>>>24),n=Math.trunc(s>>>16&255),i=Math.trunc(s>>>8&255),o=Math.trunc(s&255),h=Math.trunc(t>>>24),c=Math.trunc(t>>>16&255),f=Math.trunc(t>>>8&255),l=Math.trunc(t&255),d=Math.round(h*e+r*(1-e)),E=Math.round(c*e+n*(1-e)),x=Math.round(f*e+i*(1-e)),_=Math.round(l*e+o*(1-e));return(d<<24|E<<16|x<<8|_)>>>0}function $e(s,t){const e=s>>>24,r=s>>>16&255,n=s>>>8&255,i=Math.trunc((s&255)*t);return(e<<24|r<<16|n<<8|i)>>>0}let se=!0;function ze(s){se=s==="webgl"}function qe(s,t,e=!1){const r=(s&255)/255*t,n=se?r:1,i=Math.trunc((s>>>24)*n),o=Math.trunc((s>>>16&255)*n),h=Math.trunc((s>>>8&255)*n),c=Math.trunc(r*255);return e?(c<<24|h<<16|o<<8|i)>>>0:(i<<24|o<<16|h<<8|c)>>>0}function V(s,t){return Object.prototype.hasOwnProperty.call(s,t)}function Ae(){return{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,LEGACY:!1}&&!0}class ne{constructor(){a(this,"eventListeners",{})}on(t,e){let r=this.eventListeners[t];r||(r=[]),r.push(e),this.eventListeners[t]=r}off(t,e){const r=this.eventListeners[t];if(!r)return;if(!e){delete this.eventListeners[t];return}const n=r.indexOf(e);n>=0&&r.splice(n,1)}once(t,e){const r=(n,i)=>{this.off(t,r),e(n,i)};this.on(t,r)}emit(t,e){const r=this.eventListeners[t];r&&[...r].forEach(n=>{n(this,e)})}removeAllListeners(){this.eventListeners={}}}class ge{static makeCacheKey(t){return!1}static resolveDefaults(t){return{}}}function j(s,t,e){const r=s.createShader(t);if(!r)throw new Error;if(s.shaderSource(r,e),s.compileShader(r),s.getShaderParameter(r,s.COMPILE_STATUS))return r;console.log(s.getShaderInfoLog(r)),s.deleteShader(r)}function me(s,t,e){const r=s.createProgram();if(!r)throw new Error;if(s.attachShader(r,t),s.attachShader(r,e),s.linkProgram(r),s.getProgramParameter(r,s.LINK_STATUS))return r;console.log(s.getProgramInfoLog(r)),s.deleteProgram(r)}function pe(s){return self.WebGL2RenderingContext&&s instanceof self.WebGL2RenderingContext}class ie extends ge{constructor(e){super();a(this,"boundBufferCollection",null);a(this,"buffersBound",!1);a(this,"program");a(this,"vao");a(this,"renderer");a(this,"glw");a(this,"attributeBuffers");a(this,"attributeLocations");a(this,"attributeNames");a(this,"uniformLocations");a(this,"uniformTypes");a(this,"supportsIndexedTextures");const r=this.renderer=e.renderer,n=this.glw=this.renderer.glw;this.supportsIndexedTextures=e.supportsIndexedTextures||!1;const i=n.isWebGl2(),o=i&&e.webgl2Extensions||!i&&e.webgl1Extensions||[],h=i?"2.0":"1.0";o.forEach(T=>{if(!n.getExtension(T))throw new Error('Shader "'.concat(this.constructor.name,'" requires extension "').concat(T,'" for WebGL ').concat(h," but wasn't found"))});const c=e.shaderSources||this.constructor.shaderSources;if(c)i&&(c!=null&&c.webGl2)&&(c.fragment=c.webGl2.fragment,c.vertex=c.webGl2.vertex,delete c.webGl2);else throw new Error('Shader "'.concat(this.constructor.name,'" is missing shaderSources.'));const f=r.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS,l=c.vertex instanceof Function?c.vertex(f):c.vertex,d=c.fragment instanceof Function?c.fragment(f):c.fragment,E=j(n,n.VERTEX_SHADER,l),x=j(n,n.FRAGMENT_SHADER,d);if(!E||!x)throw new Error;const _=me(n,E,x);if(!_)throw new Error;if(this.program=_,i){const T=n.createVertexArray();if(!T)throw new Error;this.vao=T,n.bindVertexArray(this.vao)}this.attributeLocations={},this.attributeBuffers={},this.attributeNames=[],[...e.attributes].forEach(T=>{const R=n.getAttribLocation(this.program,T);if(R<0)throw new Error("".concat(this.constructor.name,': Vertex shader must have an attribute "').concat(T,'"!'));const A=n.createBuffer();if(!A)throw new Error("".concat(this.constructor.name,': Could not create buffer for attribute "').concat(T,'"'));this.attributeLocations[T]=R,this.attributeBuffers[T]=A,this.attributeNames.push(T)}),this.uniformLocations={},this.uniformTypes={},e.uniforms.forEach(T=>{const R=n.getUniformLocation(this.program,T.name);if(this.uniformTypes[T.name]=T.uniform,!R){console.warn('Shader "'.concat(this.constructor.name,'" could not get uniform location for "').concat(T.name,'"'));return}this.uniformLocations[T.name]=R})}bindBufferAttribute(e,r,n){const{glw:i}=this;i.enableVertexAttribArray(e),i.vertexAttribPointer(r,e,n.size,n.type,n.normalized,n.stride,n.offset)}disableAttribute(e){this.glw.disableVertexAttribArray(e)}disableAttributes(){for(const e in this.attributeLocations)this.disableAttribute(this.attributeLocations[e]);this.boundBufferCollection=null}canBatchShaderProps(e,r){return!1}bindRenderOp(e,r){this.bindBufferCollection(e.buffers),e.textures.length>0&&this.bindTextures(e.textures);const{glw:n,parentHasRenderTexture:i,renderToTexture:o}=e;if(!(o&&i)){if(i){const{width:h,height:c}=e.framebufferDimensions||{};this.setUniform("u_pixelRatio",1),this.setUniform("u_resolution",new Float32Array([h!=null?h:0,c!=null?c:0]))}else this.setUniform("u_pixelRatio",e.options.pixelRatio),this.setUniform("u_resolution",new Float32Array([n.canvas.width,n.canvas.height]));if(r){if(V(r,"$dimensions")){let h=r.$dimensions;h||(h=e.dimensions),this.setUniform("u_dimensions",[h.width,h.height])}if(V(r,"$alpha")){let h=r.$alpha;h||(h=e.alpha),this.setUniform("u_alpha",h)}this.bindProps(r)}}}setUniform(e,...r){this.glw.setUniform(this.uniformTypes[e],this.uniformLocations[e],...r)}bindBufferCollection(e){if(this.boundBufferCollection!==e){for(const r in this.attributeLocations){const n=e.getBuffer(r),i=e.getAttributeInfo(r);g(n,'Buffer for "'.concat(r,'" not found')),g(i),this.bindBufferAttribute(this.attributeLocations[r],n,i)}this.boundBufferCollection=e}}bindProps(e){}bindTextures(e){}attach(){this.glw.useProgram(this.program),this.glw.useProgram(this.program),this.glw.isWebGl2()&&this.vao&&this.glw.bindVertexArray(this.vao)}detach(){this.disableAttributes()}}a(ie,"shaderSources");class G extends ne{constructor(e){super();a(this,"txManager");a(this,"dimensions",null);a(this,"error",null);a(this,"state","freed");a(this,"renderableOwners",new Set);this.txManager=e}setRenderableOwner(e,r){r?this.renderableOwners.add(e):this.renderableOwners.delete(e)}get renderable(){return this.renderableOwners.size>0}setState(e,...r){if(this.state!==e){if(this.state=e,e==="loaded"){const n=r;this.dimensions=n[0]}else if(e==="failed"){const n=r;this.error=n[0]}this.emit(e,...r)}}static makeCacheKey(e){return!1}static resolveDefaults(e){return{}}}const Ie=s=>{const t=s>>>24,e=s>>>16&255,r=s>>>8&255,n=s&255;return[t/255,e/255,r/255,n/255]},Ke=s=>{const t=s>>>24,e=s>>>16&255,r=s>>>8&255,n=s&255;return[t,e,r,n]};function Ze(s){return(s&255)/255}function Qe(s){const t=Math.floor(s[0]*255),e=Math.floor(s[1]*255),r=Math.floor(s[2]*255),n=Math.floor(s[3]*255);return"rgba(".concat(t,",").concat(e,",").concat(r,",").concat(n.toFixed(4),")")}function J(s,t,e,r,n){return n?(n.x1=s,n.y1=t,n.x2=e,n.y2=r,n):{x1:s,y1:t,x2:e,y2:r}}function je(s,t,e){const r=J(Math.max(s.x1,t.x1),Math.max(s.y1,t.y1),Math.min(s.x2,t.x2),Math.min(s.y2,t.y2),e);return r.x1<r.x2&&r.y1<r.y2?r:J(0,0,0,0,r)}function Je(s,t){return s.x1<t.x2&&s.x2>t.x1&&s.y1<t.y2&&s.y2>t.y1}function et(s,t){return t?(t.x=s.x1,t.y=s.y1,t.width=s.x2-s.x1,t.height=s.y2-s.y1,t):{x:s.x1,y:s.y1,width:s.x2-s.x1,height:s.y2-s.y1}}function tt(s,t,e){const r=Math.max(s.x,t.x),n=Math.max(s.y,t.y),i=Math.min(s.x+s.width,t.x+t.width)-r,o=Math.min(s.y+s.height,t.y+t.height)-n;return i>0&&o>0?e?(e.x=r,e.y=n,e.width=i,e.height=o,e):{x:r,y:n,width:i,height:o}:e?(e.x=0,e.y=0,e.width=0,e.height=0,e):{x:0,y:0,width:0,height:0}}function rt(s,t){return t?(t.x=s.x,t.y=s.y,t.width=s.width,t.height=s.height,t):{x:s.x,y:s.y,width:s.width,height:s.height}}function Se(s,t){return s===t?!0:s===null||t===null?!1:s.x===t.x&&s.y===t.y&&s.width===t.width&&s.height===t.height}function st(s,t){return s.x1<=t.x2&&s.y1<=t.y2&&s.x2>=t.x1&&s.y2>=t.y1}function nt(s){return s.x1<s.x2&&s.y1<s.y2}class Me extends ne{constructor(e,r){super();a(this,"fontFamily");a(this,"descriptors");a(this,"loaded",!1);this.fontFamily=e,this.descriptors={style:"normal",weight:"normal",stretch:"normal",...r}}static convertToCssFontFaceDescriptors(e){return{style:e.style,weight:typeof e.weight=="number"?"".concat(e.weight):e.weight,stretch:e.stretch,unicodeRange:e.unicodeRange,variant:e.variant,featureSettings:e.featureSettings,display:e.display}}}const y=class y extends G{constructor(e,r){super(e);a(this,"props");this.props=y.resolveDefaults(r||{})}get color(){return this.props.color}set color(e){this.props.color=e}async getTextureData(){const e=new Uint32Array([this.color]),r=new Uint8ClampedArray(e.buffer);return{data:new ImageData(r,1,1),premultiplyAlpha:!0}}static makeCacheKey(e){const r=y.resolveDefaults(e);return"ColorTexture,".concat(r.color)}static resolveDefaults(e){return{color:e.color||4294967295}}};a(y,"z$__type__Props");let Y=y;class be{constructor(t,e){a(this,"memManager");a(this,"textureSource");this.memManager=t,this.textureSource=e}}class Ne{constructor(t){a(this,"options");a(this,"mode");a(this,"stage");a(this,"txManager");a(this,"txMemManager");a(this,"shManager");a(this,"rttNodes",[]);this.options=t,this.stage=t.stage,this.txManager=t.txManager,this.txMemManager=t.txMemManager,this.shManager=t.shManager}}class Le{}class ye extends Le{constructor(e,r,n,i,o,h,c,f,l,d,E,x,_){super();a(this,"glw");a(this,"options");a(this,"buffers");a(this,"shader");a(this,"shaderProps");a(this,"alpha");a(this,"clippingRect");a(this,"dimensions");a(this,"bufferIdx");a(this,"zIndex");a(this,"renderToTexture");a(this,"parentHasRenderTexture");a(this,"framebufferDimensions");a(this,"length",0);a(this,"numQuads",0);a(this,"textures",[]);a(this,"maxTextures");this.glw=e,this.options=r,this.buffers=n,this.shader=i,this.shaderProps=o,this.alpha=h,this.clippingRect=c,this.dimensions=f,this.bufferIdx=l,this.zIndex=d,this.renderToTexture=E,this.parentHasRenderTexture=x,this.framebufferDimensions=_,this.maxTextures=i.supportsIndexedTextures?e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS):1}addTexture(e){const{textures:r,maxTextures:n}=this,i=r.findIndex(h=>h===e);if(i!==-1)return i;const o=r.length;return o>=n?4294967295:(this.textures.push(e),o)}draw(){const{glw:e,shader:r,shaderProps:n,options:i}=this,{shManager:o}=i;o.useShader(r),r.bindRenderOp(this,n);const h=this.bufferIdx/24*6*2;if(this.clippingRect.valid){const{x:c,y:f,width:l,height:d}=this.clippingRect,E=i.pixelRatio,x=i.canvas.height,_=Math.round(c*E),T=Math.round(l*E),R=Math.round(d*E),A=Math.round(x-R-f*E);e.setScissorTest(!0),e.scissor(_,A,T,R)}else e.setScissorTest(!1);e.drawElements(e.TRIANGLES,6*this.numQuads,e.UNSIGNED_SHORT,h)}}function we(s){const t={MAX_RENDERBUFFER_SIZE:0,MAX_TEXTURE_SIZE:0,MAX_VIEWPORT_DIMS:0,MAX_VERTEX_TEXTURE_IMAGE_UNITS:0,MAX_TEXTURE_IMAGE_UNITS:0,MAX_COMBINED_TEXTURE_IMAGE_UNITS:0,MAX_VERTEX_ATTRIBS:0,MAX_VARYING_VECTORS:0,MAX_VERTEX_UNIFORM_VECTORS:0,MAX_FRAGMENT_UNIFORM_VECTORS:0};return Object.keys(t).forEach(r=>{t[r]=s.getParameter(s[r])}),t}function Pe(s){const t={ANGLE_instanced_arrays:null,WEBGL_compressed_texture_s3tc:null,WEBGL_compressed_texture_astc:null,WEBGL_compressed_texture_etc:null,WEBGL_compressed_texture_etc1:null,WEBGL_compressed_texture_pvrtc:null,WEBKIT_WEBGL_compressed_texture_pvrtc:null,WEBGL_compressed_texture_s3tc_srgb:null,OES_vertex_array_object:null};return Object.keys(t).forEach(r=>{t[r]=s.getExtension(r)}),t}function Ue(s,t){const e=~~(t/80),r=new Uint16Array(e*6);for(let i=0,o=0;i<e;i+=6,o+=4)r[i]=o,r[i+1]=o+1,r[i+2]=o+2,r[i+3]=o+2,r[i+4]=o+1,r[i+5]=o+3;const n=s.createBuffer();s.elementArrayBufferData(n,r,s.STATIC_DRAW)}function Be(s){return s!==null&&typeof s=="object"&&s.constructor&&s.constructor.name==="HTMLImageElement"}const ee=s=>s&&!(s&s-1),ae=(s,t,e,r)=>{const n=3*s,i=3*(e-s)-n,o=1-n-i,h=3*t,c=3*(r-t)-h,f=1-h-c;return function(l){if(l>=1)return 1;if(l<=0)return 0;let d=.5,E,x,_;for(let A=0;A<20;A++){if(E=d*(d*(d*o+i)+n),_=l-E,_>-1e-8&&_<1e-8)return d*(d*(d*f+c)+h);if(x=d*(d*(3*o)+2*i)+n,x>1e-10&&x<1e-10)break;d+=_/x}let T=0,R=1;for(let A=0;A<20;A++){if(d=.5*(T+R),E=d*(d*(d*o+i)+n),_=l-E,_>-1e-8&&_<1e-8)return d*(d*(d*f+c)+h);_<0?R=d:T=d}}},P={},te={ease:[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1],"ease-in-sine":[.12,0,.39,0],"ease-out-sine":[.12,0,.39,0],"ease-in-out-sine":[.37,0,.63,1],"ease-in-cubic":[.32,0,.67,0],"ease-out-cubic":[.33,1,.68,1],"ease-in-out-cubic":[.65,0,.35,1],"ease-in-circ":[.55,0,1,.45],"ease-out-circ":[0,.55,.45,1],"ease-in-out-circ":[.85,0,.15,1],"ease-in-back":[.36,0,.66,-.56],"ease-out-back":[.34,1.56,.64,1],"ease-in-out-back":[.68,-.6,.32,1.6]},U=s=>s,Ce=s=>{const t=/-?\d*\.?\d+/g,e=s.match(t);if(e){const[r,n,i,o]=e,h=parseFloat(r||"0.42"),c=parseFloat(n||"0"),f=parseFloat(i||"1"),l=parseFloat(o||"1"),d=ae(h,c,f,l);return P[s]=d,d}return console.warn("Unknown cubic-bezier timing: "+s),U},it=s=>{if(s==="")return U;if(P[s]!==void 0)return P[s]||U;if(s==="linear")return t=>t;if(s==="step-start")return()=>1;if(s==="step-end")return t=>t===1?1:0;if(te[s]!==void 0){const[t,e,r,n]=te[s],i=ae(t,e,r,n);return P[s]=i,i}return s.startsWith("cubic-bezier")?Ce(s):(console.warn("Unknown timing function: "+s),U)};Math.hypot||(Math.hypot=(...s)=>{let t=0,e=s.length;for(;e--;)t+=s[e]*s[e];return Math.sqrt(t)});const H=new Uint8Array([0,0,0,0]);class B extends be{constructor(e,r,n){super(r,n);a(this,"glw");a(this,"_nativeCtxTexture",null);a(this,"_state","freed");a(this,"_w",0);a(this,"_h",0);this.glw=e}get ctxTexture(){return this._state==="freed"&&this.load(),g(this._nativeCtxTexture),this._nativeCtxTexture}get renderable(){return this.textureSource.renderable}get w(){return this._w}get h(){return this._h}load(){this._state==="loading"||this._state==="loaded"||(this._state="loading",this.textureSource.setState("loading"),this._nativeCtxTexture=this.createNativeCtxTexture(),this.onLoadRequest().then(({width:e,height:r})=>{this._state!=="freed"&&(this._state="loaded",this._w=e,this._h=r,this.textureSource.setState("loaded",{width:e,height:r}))}).catch(e=>{this._state="failed",this.textureSource.setState("failed",e),console.error(e)}))}async onLoadRequest(){var h,c;const{glw:e,memManager:r}=this;e.texImage2D(0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null),r.setTextureMemUse(this,H.byteLength);const n=await((h=this.textureSource)==null?void 0:h.getTextureData());if(!this._nativeCtxTexture)return g(this._state==="freed"),{width:0,height:0};let i=0,o=0;if(g(this._nativeCtxTexture),e.activeTexture(0),n.data instanceof ImageBitmap||n.data instanceof ImageData||Be(n.data)){const f=n.data;i=f.width,o=f.height,e.bindTexture(this._nativeCtxTexture),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!!n.premultiplyAlpha),e.texImage2D(0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,f),r.setTextureMemUse(this,i*o*4),(e.isWebGl2()||ee(i)&&ee(o))&&e.generateMipmap()}else if(n.data===null)i=0,o=0,e.bindTexture(this._nativeCtxTexture),e.texImage2D(0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,H),r.setTextureMemUse(this,H.byteLength);else if("mipmaps"in n.data&&n.data.mipmaps){const{mipmaps:f,width:l=0,height:d=0,type:E,glInternalFormat:x}=n.data,_=E==="ktx"?new DataView((c=f[0])!=null?c:new ArrayBuffer(0)):f[0];e.bindTexture(this._nativeCtxTexture),e.compressedTexImage2D(0,x,l,d,0,_),e.texParameteri(e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_MIN_FILTER,e.LINEAR),r.setTextureMemUse(this,_.byteLength)}else console.error("WebGlCoreCtxTexture.onLoadRequest: Unexpected textureData returned",n);return{width:i,height:o}}free(){if(this._state==="freed"||(this._state="freed",this.textureSource.setState("freed"),this._w=0,this._h=0,!this._nativeCtxTexture))return;const{glw:e,memManager:r}=this;e.deleteTexture(this._nativeCtxTexture),r.setTextureMemUse(this,0),this._nativeCtxTexture=null}createNativeCtxTexture(){const{glw:e}=this,r=e.createTexture();if(!r)throw new Error("Could not create WebGL Texture");return e.activeTexture(0),e.bindTexture(r),e.texParameteri(e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}}const D=class D extends G{constructor(e,r){super(e);a(this,"props");a(this,"parentTexture");a(this,"onParentTxLoaded",()=>{this.setState("loaded",{width:this.props.width,height:this.props.height})});a(this,"onParentTxFailed",(e,r)=>{this.setState("failed",r)});this.parentTexture=this.txManager.loadTexture(r.texture.txType,r.texture.props,r.texture.options),this.props=D.resolveDefaults(r||{}),queueMicrotask(()=>{const n=this.parentTexture;n.state==="loaded"?this.onParentTxLoaded(n,n.dimensions):n.state==="failed"&&this.onParentTxFailed(n,n.error),n.on("loaded",this.onParentTxLoaded),n.on("failed",this.onParentTxFailed)})}async getTextureData(){return{data:this.props}}static makeCacheKey(e){return!1}static resolveDefaults(e){return{texture:e.texture,x:e.x||0,y:e.y||0,width:e.width||0,height:e.height||0}}};a(D,"z$__type__Props");let C=D;class De extends B{constructor(t,e,r){super(t,e,r)}async onLoadRequest(){var e,r;const t=await this.textureSource.getTextureData();return{width:((e=t.data)==null?void 0:e.width)||0,height:((r=t.data)==null?void 0:r.height)||0}}}class Oe{constructor(t){a(this,"config");this.config=t}getBuffer(t){var e;return(e=this.config.find(r=>r.attributes[t]))==null?void 0:e.buffer}getAttributeInfo(t){var e;return(e=this.config.find(r=>r.attributes[t]))==null?void 0:e.attributes[t]}}class Ge{constructor(t){a(this,"gl");a(this,"activeTextureUnit",0);a(this,"texture2dUnits");a(this,"texture2dParams",new WeakMap);a(this,"scissorEnabled");a(this,"scissorX");a(this,"scissorY");a(this,"scissorWidth");a(this,"scissorHeight");a(this,"blendEnabled");a(this,"blendSrcRgb");a(this,"blendDstRgb");a(this,"blendSrcAlpha");a(this,"blendDstAlpha");a(this,"boundArrayBuffer");a(this,"boundElementArrayBuffer");a(this,"curProgram");a(this,"programUniforms",new WeakMap);a(this,"canvas");a(this,"MAX_RENDERBUFFER_SIZE");a(this,"MAX_TEXTURE_SIZE");a(this,"MAX_VIEWPORT_DIMS");a(this,"MAX_VERTEX_TEXTURE_IMAGE_UNITS");a(this,"MAX_TEXTURE_IMAGE_UNITS");a(this,"MAX_COMBINED_TEXTURE_IMAGE_UNITS");a(this,"MAX_VERTEX_ATTRIBS");a(this,"MAX_VARYING_VECTORS");a(this,"MAX_VERTEX_UNIFORM_VECTORS");a(this,"MAX_FRAGMENT_UNIFORM_VECTORS");a(this,"TEXTURE_MAG_FILTER");a(this,"TEXTURE_MIN_FILTER");a(this,"TEXTURE_WRAP_S");a(this,"TEXTURE_WRAP_T");a(this,"LINEAR");a(this,"CLAMP_TO_EDGE");a(this,"RGBA");a(this,"UNSIGNED_BYTE");a(this,"UNPACK_PREMULTIPLY_ALPHA_WEBGL");a(this,"UNPACK_FLIP_Y_WEBGL");a(this,"FLOAT");a(this,"TRIANGLES");a(this,"UNSIGNED_SHORT");a(this,"ONE");a(this,"ONE_MINUS_SRC_ALPHA");a(this,"VERTEX_SHADER");a(this,"FRAGMENT_SHADER");a(this,"STATIC_DRAW");a(this,"COMPILE_STATUS");a(this,"LINK_STATUS");a(this,"DYNAMIC_DRAW");a(this,"COLOR_ATTACHMENT0");this.gl=t,this.activeTextureUnit=t.getParameter(t.ACTIVE_TEXTURE)-t.TEXTURE0;const e=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);this.texture2dUnits=new Array(e).fill(void 0).map((n,i)=>(this.activeTexture(i),t.getParameter(t.TEXTURE_BINDING_2D))),this.activeTexture(this.activeTextureUnit),this.scissorEnabled=t.isEnabled(t.SCISSOR_TEST);const r=t.getParameter(t.SCISSOR_BOX);this.scissorX=r[0],this.scissorY=r[1],this.scissorWidth=r[2],this.scissorHeight=r[3],this.blendEnabled=t.isEnabled(t.BLEND),this.blendSrcRgb=t.getParameter(t.BLEND_SRC_RGB),this.blendDstRgb=t.getParameter(t.BLEND_DST_RGB),this.blendSrcAlpha=t.getParameter(t.BLEND_SRC_ALPHA),this.blendDstAlpha=t.getParameter(t.BLEND_DST_ALPHA),this.boundArrayBuffer=t.getParameter(t.ARRAY_BUFFER_BINDING),this.boundElementArrayBuffer=t.getParameter(t.ELEMENT_ARRAY_BUFFER_BINDING),this.curProgram=t.getParameter(t.CURRENT_PROGRAM),this.canvas=t.canvas,this.MAX_RENDERBUFFER_SIZE=t.MAX_RENDERBUFFER_SIZE,this.MAX_TEXTURE_SIZE=t.MAX_TEXTURE_SIZE,this.MAX_VIEWPORT_DIMS=t.MAX_VIEWPORT_DIMS,this.MAX_VERTEX_TEXTURE_IMAGE_UNITS=t.MAX_VERTEX_TEXTURE_IMAGE_UNITS,this.MAX_TEXTURE_IMAGE_UNITS=t.MAX_TEXTURE_IMAGE_UNITS,this.MAX_COMBINED_TEXTURE_IMAGE_UNITS=t.MAX_COMBINED_TEXTURE_IMAGE_UNITS,this.MAX_VERTEX_ATTRIBS=t.MAX_VERTEX_ATTRIBS,this.MAX_VARYING_VECTORS=t.MAX_VARYING_VECTORS,this.MAX_VERTEX_UNIFORM_VECTORS=t.MAX_VERTEX_UNIFORM_VECTORS,this.MAX_FRAGMENT_UNIFORM_VECTORS=t.MAX_FRAGMENT_UNIFORM_VECTORS,this.TEXTURE_MAG_FILTER=t.TEXTURE_MAG_FILTER,this.TEXTURE_MIN_FILTER=t.TEXTURE_MIN_FILTER,this.TEXTURE_WRAP_S=t.TEXTURE_WRAP_S,this.TEXTURE_WRAP_T=t.TEXTURE_WRAP_T,this.LINEAR=t.LINEAR,this.CLAMP_TO_EDGE=t.CLAMP_TO_EDGE,this.RGBA=t.RGBA,this.UNSIGNED_BYTE=t.UNSIGNED_BYTE,this.UNPACK_PREMULTIPLY_ALPHA_WEBGL=t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.UNPACK_FLIP_Y_WEBGL=t.UNPACK_FLIP_Y_WEBGL,this.FLOAT=t.FLOAT,this.TRIANGLES=t.TRIANGLES,this.UNSIGNED_SHORT=t.UNSIGNED_SHORT,this.ONE=t.ONE,this.ONE_MINUS_SRC_ALPHA=t.ONE_MINUS_SRC_ALPHA,this.MAX_VERTEX_TEXTURE_IMAGE_UNITS=t.MAX_VERTEX_TEXTURE_IMAGE_UNITS,this.TRIANGLES=t.TRIANGLES,this.UNSIGNED_SHORT=t.UNSIGNED_SHORT,this.VERTEX_SHADER=t.VERTEX_SHADER,this.FRAGMENT_SHADER=t.FRAGMENT_SHADER,this.STATIC_DRAW=t.STATIC_DRAW,this.COMPILE_STATUS=t.COMPILE_STATUS,this.LINK_STATUS=t.LINK_STATUS,this.DYNAMIC_DRAW=t.DYNAMIC_DRAW,this.COLOR_ATTACHMENT0=t.COLOR_ATTACHMENT0}isWebGl2(){return pe(this.gl)}activeTexture(t){const{gl:e}=this;this.activeTextureUnit!==t&&(e.activeTexture(t+e.TEXTURE0),this.activeTextureUnit=t)}bindTexture(t){const{gl:e,activeTextureUnit:r,texture2dUnits:n}=this;n[r]!==t&&(n[r]=t,e.bindTexture(this.gl.TEXTURE_2D,t))}_getActiveTexture(){const{activeTextureUnit:t,texture2dUnits:e}=this;return e[t]}texParameteri(t,e){const{gl:r,texture2dParams:n}=this,i=this._getActiveTexture();if(!i)throw new Error("No active texture");let o=n.get(i);o||(o={},n.set(i,o)),o[t]!==e&&(o[t]=e,r.texParameteri(r.TEXTURE_2D,t,e))}texImage2D(t,e,r,n,i,o,h,c){const{gl:f}=this;o?f.texImage2D(f.TEXTURE_2D,t,e,r,n,i,o,h,c):f.texImage2D(f.TEXTURE_2D,t,e,r,n,i)}compressedTexImage2D(t,e,r,n,i,o){const{gl:h}=this;h.compressedTexImage2D(h.TEXTURE_2D,t,e,r,n,i,o)}pixelStorei(t,e){const{gl:r}=this;r.pixelStorei(t,e)}generateMipmap(){const{gl:t}=this;t.generateMipmap(t.TEXTURE_2D)}createTexture(){const{gl:t}=this;return t.createTexture()}deleteTexture(t){const{gl:e}=this;t&&this.texture2dParams.delete(t),e.deleteTexture(t)}viewport(t,e,r,n){const{gl:i}=this;i.viewport(t,e,r,n)}clearColor(t,e,r,n){const{gl:i}=this;i.clearColor(t,e,r,n)}setScissorTest(t){const{gl:e,scissorEnabled:r}=this;t!==r&&(t?e.enable(e.SCISSOR_TEST):e.disable(e.SCISSOR_TEST),this.scissorEnabled=t)}scissor(t,e,r,n){const{gl:i,scissorX:o,scissorY:h,scissorWidth:c,scissorHeight:f}=this;(t!==o||e!==h||r!==c||n!==f)&&(i.scissor(t,e,r,n),this.scissorX=t,this.scissorY=e,this.scissorWidth=r,this.scissorHeight=n)}setBlend(t){const{gl:e,blendEnabled:r}=this;t!==r&&(t?e.enable(e.BLEND):e.disable(e.BLEND),this.blendEnabled=t)}blendFunc(t,e){const{gl:r,blendSrcRgb:n,blendDstRgb:i,blendSrcAlpha:o,blendDstAlpha:h}=this;(t!==n||e!==i||t!==o||e!==h)&&(r.blendFunc(t,e),this.blendSrcRgb=t,this.blendDstRgb=e,this.blendSrcAlpha=t,this.blendDstAlpha=e)}createBuffer(){const{gl:t}=this;return t.createBuffer()}createFramebuffer(){const{gl:t}=this;return t.createFramebuffer()}bindFramebuffer(t){const{gl:e}=this;e.bindFramebuffer(e.FRAMEBUFFER,t)}framebufferTexture2D(t,e,r){const{gl:n}=this;n.framebufferTexture2D(n.FRAMEBUFFER,t,n.TEXTURE_2D,e,r)}clear(){const{gl:t}=this;t.clear(t.COLOR_BUFFER_BIT)}arrayBufferData(t,e,r){const{gl:n,boundArrayBuffer:i}=this;i!==t&&(n.bindBuffer(n.ARRAY_BUFFER,t),this.boundArrayBuffer=t),n.bufferData(n.ARRAY_BUFFER,e,r)}elementArrayBufferData(t,e,r){const{gl:n,boundElementArrayBuffer:i}=this;i!==t&&(n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t),this.boundElementArrayBuffer=t),n.bufferData(n.ELEMENT_ARRAY_BUFFER,e,r)}vertexAttribPointer(t,e,r,n,i,o,h){const{gl:c,boundArrayBuffer:f}=this;f!==t&&(c.bindBuffer(c.ARRAY_BUFFER,t),this.boundArrayBuffer=t),c.vertexAttribPointer(e,r,n,i,o,h)}useProgram(t){const{gl:e,curProgram:r}=this;r!==t&&(e.useProgram(t),this.curProgram=t)}setUniform(t,e,...r){const{gl:n,programUniforms:i}=this;let o=i.get(this.curProgram);o||(o=new Map,i.set(this.curProgram,o));const h=o.get(e);(!h||!Xe(h,r))&&(o.set(e,r),n[t](e,...r))}getParameter(t){const{gl:e}=this;return e.getParameter(t)}drawElements(t,e,r,n){const{gl:i}=this;i.drawElements(t,e,r,n)}getExtension(t){const{gl:e}=this;return e.getExtension(t)}createVertexArray(){const{gl:t}=this;return g(t instanceof WebGL2RenderingContext),t.createVertexArray()}bindVertexArray(t){const{gl:e}=this;g(e instanceof WebGL2RenderingContext),e.bindVertexArray(t)}getAttribLocation(t,e){const{gl:r}=this;return r.getAttribLocation(t,e)}getUniformLocation(t,e){const{gl:r}=this;return r.getUniformLocation(t,e)}enableVertexAttribArray(t){const{gl:e}=this;e.enableVertexAttribArray(t)}disableVertexAttribArray(t){const{gl:e}=this;e.disableVertexAttribArray(t)}createShader(t){const{gl:e}=this;return e.createShader(t)}compileShader(t){const{gl:e}=this;e.compileShader(t)}attachShader(t,e){const{gl:r}=this;r.attachShader(t,e)}linkProgram(t){const{gl:e}=this;e.linkProgram(t)}deleteProgram(t){const{gl:e}=this;e.deleteProgram(t)}getShaderParameter(t,e){const{gl:r}=this;return r.getShaderParameter(t,e)}getShaderInfoLog(t){const{gl:e}=this;return e.getShaderInfoLog(t)}createProgram(){const{gl:t}=this;return t.createProgram()}getProgramParameter(t,e){const{gl:r}=this;return r.getProgramParameter(t,e)}getProgramInfoLog(t){const{gl:e}=this;return e.getProgramInfoLog(t)}shaderSource(t,e){const{gl:r}=this;r.shaderSource(t,e)}deleteShader(t){const{gl:e}=this;e.deleteShader(t)}}function Xe(s,t){return s.length!==t.length?!1:s.every((e,r)=>Array.isArray(e)||e instanceof Float32Array?!1:e===t[r])}const O=class O extends G{constructor(e,r){super(e);a(this,"props");this.props=O.resolveDefaults(r||{})}get width(){return this.props.width}set width(e){this.props.width=e}get height(){return this.props.height}set height(e){this.props.height=e}async getTextureData(){return{data:null,premultiplyAlpha:null}}static resolveDefaults(e){return{width:e.width||256,height:e.height||256}}};a(O,"z$__type__Props");let k=O;class re extends B{constructor(e,r,n){super(e,r,n);a(this,"framebuffer");const i=e.createFramebuffer();g(i,"Unable to create framebuffer"),this.framebuffer=i}async onLoadRequest(){const{glw:e,memManager:r}=this,n=this._nativeCtxTexture=this.createNativeCtxTexture(),{width:i,height:o}=this.textureSource;return e.texImage2D(0,e.RGBA,i,o,0,e.RGBA,e.UNSIGNED_BYTE,null),r.setTextureMemUse(this,i*o*4),e.bindFramebuffer(this.framebuffer),e.framebufferTexture2D(e.COLOR_ATTACHMENT0,n,0),e.bindFramebuffer(null),{width:i,height:o}}}const Fe=24;class ve extends Ne{constructor(e){super(e);a(this,"glw");a(this,"system");a(this,"quadBuffer",new ArrayBuffer(1024*1024*4));a(this,"fQuadBuffer",new Float32Array(this.quadBuffer));a(this,"uiQuadBuffer",new Uint32Array(this.quadBuffer));a(this,"renderOps",[]);a(this,"curBufferIdx",0);a(this,"curRenderOp",null);a(this,"rttNodes",[]);a(this,"activeRttNode",null);a(this,"defaultShader");a(this,"quadBufferCollection");a(this,"defaultTexture");a(this,"renderToTextureActive",!1);this.mode="webgl";const{canvas:r,clearColor:n,bufferMemory:i}=e;this.defaultTexture=new Y(this.txManager),this.defaultTexture.setRenderableOwner(this,!0),this.defaultTexture.once("loaded",()=>{this.stage.requestRender()});const o=Re(r,e.contextSpy),h=this.glw=new Ge(o),c=Ie(n);h.viewport(0,0,r.width,r.height),h.clearColor(c[0],c[1],c[2],c[3]),h.setBlend(!0),h.blendFunc(h.ONE,h.ONE_MINUS_SRC_ALPHA),Ue(h,i),this.system={parameters:we(this.glw),extensions:Pe(this.glw)},this.shManager.renderer=this,this.defaultShader=this.shManager.loadShader("DefaultShader").shader;const f=h.createBuffer();g(f);const l=6*Float32Array.BYTES_PER_ELEMENT;this.quadBufferCollection=new Oe([{buffer:f,attributes:{a_position:{name:"a_position",size:2,type:h.FLOAT,normalized:!1,stride:l,offset:0},a_textureCoordinate:{name:"a_textureCoordinate",size:2,type:h.FLOAT,normalized:!1,stride:l,offset:2*Float32Array.BYTES_PER_ELEMENT},a_color:{name:"a_color",size:4,type:h.UNSIGNED_BYTE,normalized:!0,stride:l,offset:4*Float32Array.BYTES_PER_ELEMENT},a_textureIndex:{name:"a_textureIndex",size:1,type:h.FLOAT,normalized:!1,stride:l,offset:5*Float32Array.BYTES_PER_ELEMENT}}}])}reset(){const{glw:e}=this;this.curBufferIdx=0,this.curRenderOp=null,this.renderOps.length=0,e.setScissorTest(!1),e.clear()}getShaderManager(){return this.shManager}createCtxTexture(e){return e instanceof C?new De(this.glw,this.txMemManager,e):e instanceof k?new re(this.glw,this.txMemManager,e):new B(this.glw,this.txMemManager,e)}addQuad(e){var q,K;const{fQuadBuffer:r,uiQuadBuffer:n}=this,{width:i,height:o,colorTl:h,colorTr:c,colorBl:f,colorBr:l,textureOptions:d,shader:E,shaderProps:x,alpha:_,clippingRect:T,tx:R,ty:A,ta:X,tb:F,tc:v,td:W,rtt:oe,parentHasRenderTexture:he,framebufferDimensions:ce}=e;let{texture:m}=e;if(x&&V(x,"$dimensions")){const N=x.$dimensions;N.width=i,N.height=o}m=m!=null?m:this.defaultTexture,g(m instanceof G,"Invalid texture type");let{curBufferIdx:u,curRenderOp:L}=this;const ue={width:i,height:o},$=E||this.defaultShader;g($ instanceof ie),this.reuseRenderOp(e)||(this.newRenderOp($,x,_,ue,T,u,oe,he,ce),L=this.curRenderOp,g(L));const fe=(q=d==null?void 0:d.flipX)!=null?q:!1,de=(K=d==null?void 0:d.flipY)!=null?K:!1;let p=0,I=0,M=1,b=1;if(m instanceof C){const{x:N,y:w,width:Te,height:Ee}=m.props,{width:Z=0,height:Q=0}=m.parentTexture.dimensions||{width:0,height:0};p=N/Z,M=p+Te/Z,I=w/Q,b=I+Ee/Q,m=m.parentTexture}fe&&([p,M]=[M,p]),de&&([I,b]=[b,I]);const{txManager:le}=this.stage,z=le.getCtxTexture(m);g(z instanceof B);const S=this.addTexture(z,u);if(L=this.curRenderOp,g(L),F!==0||v!==0)r[u++]=R,r[u++]=A,r[u++]=p,r[u++]=I,n[u++]=h,r[u++]=S,r[u++]=R+i*X,r[u++]=A+i*v,r[u++]=M,r[u++]=I,n[u++]=c,r[u++]=S,r[u++]=R+o*F,r[u++]=A+o*W,r[u++]=p,r[u++]=b,n[u++]=f,r[u++]=S,r[u++]=R+i*X+o*F,r[u++]=A+i*v+o*W,r[u++]=M,r[u++]=b,n[u++]=l,r[u++]=S;else{const N=R+i*X,w=A+o*W;r[u++]=R,r[u++]=A,r[u++]=p,r[u++]=I,n[u++]=h,r[u++]=S,r[u++]=N,r[u++]=A,r[u++]=M,r[u++]=I,n[u++]=c,r[u++]=S,r[u++]=R,r[u++]=w,r[u++]=p,r[u++]=b,n[u++]=f,r[u++]=S,r[u++]=N,r[u++]=w,r[u++]=M,r[u++]=b,n[u++]=l,r[u++]=S}L.length+=Fe,L.numQuads++,this.curBufferIdx=u}newRenderOp(e,r,n,i,o,h,c,f,l){const d=new ye(this.glw,this.options,this.quadBufferCollection,e,r,n,o,i,h,0,c,f,l);this.curRenderOp=d,this.renderOps.push(d)}addTexture(e,r,n){const{curRenderOp:i}=this;g(i);const o=i.addTexture(e);if(o===4294967295){if(n)throw new Error("Unable to add texture to render op");const{shader:h,shaderProps:c,dimensions:f,clippingRect:l,alpha:d}=i;return this.newRenderOp(h,c,d,f,l,r),this.addTexture(e,r,!0)}return o}reuseRenderOp(e){var f;const{shader:r,shaderProps:n,parentHasRenderTexture:i,rtt:o,clippingRect:h}=e,c=r||this.defaultShader;return!(((f=this.curRenderOp)==null?void 0:f.shader)!==c||!Se(this.curRenderOp.clippingRect,h)||i||o||this.curRenderOp.shader!==this.defaultShader&&(!n||!this.curRenderOp.shader.canBatchShaderProps(this.curRenderOp.shaderProps,n)))}addRenderOp(e){this.renderOps.push(e),this.curRenderOp=null}render(e="screen"){var h;const{glw:r,quadBuffer:n}=this,i=new Float32Array(n,0,this.curBufferIdx),o=(h=this.quadBufferCollection.getBuffer("a_position"))!=null?h:null;r.arrayBufferData(o,i,r.STATIC_DRAW),this.renderOps.forEach((c,f)=>{c.draw()})}renderToTexture(e){for(let r=0;r<this.rttNodes.length;r++)if(this.rttNodes[r]===e)return;this.rttNodes.unshift(e)}renderRTTNodes(){const{glw:e}=this,{txManager:r}=this.stage;for(let n=0;n<this.rttNodes.length;n++){const i=this.rttNodes[n];if(!i||!i.hasRTTupdates)continue;this.activeRttNode=i,g(i.texture,"RTT node missing texture");const o=r.getCtxTexture(i.texture);g(o instanceof re),this.renderToTextureActive=!0,e.bindFramebuffer(o.framebuffer),e.viewport(0,0,o.w,o.h),e.clear();for(let h=0;h<i.children.length;h++){const c=i.children[h];c&&(c.update(this.stage.deltaTime,{x:0,y:0,width:0,height:0,valid:!1}),this.stage.addQuads(c),c.hasRTTupdates=!1)}this.render(),this.renderOps.length=0,i.hasRTTupdates=!1}e.bindFramebuffer(null),e.viewport(0,0,this.glw.canvas.width,this.glw.canvas.height),this.renderToTextureActive=!1}removeRTTNode(e){const r=this.rttNodes.indexOf(e);r!==-1&&this.rttNodes.splice(r,1)}}const We={LINE_FEED:10,CARRIAGE_RETURN:13,SPACE:32,TAB:9,ZERO_WIDTH_SPACE:8203,ZERO_WIDTH_NON_JOINER:8204,ZERO_WIDTH_JOINER:8205,LEFT_TO_RIGHT_MARK:8206,RIGHT_TO_LEFT_MARK:8207,LEFT_TO_RIGHT_EMBEDDING:8234,RIGHT_TO_LEFT_EMBEDDING:8235,POP_DIRECTIONAL_FORMATTING:8236,LEFT_TO_RIGHT_OVERRIDE:8237,RIGHT_TO_LEFT_OVERRIDE:8238,LINE_SEPARATOR:8232,PARAGRAPH_SEPARATOR:8233,OBJECT_REPLACEMENT_CHARACTER:65532,REPLACEMENT_CHARACTER:65533,ZERO_WIDTH_NO_BREAK_SPACE:65279,LEFT_TO_RIGHT_ISOLATE:8294,RIGHT_TO_LEFT_ISOLATE:8295,FIRST_STRONG_ISOLATE:8296,POP_DIRECTIONAL_ISOLATE:8297,INHIBIT_SYMMETRIC_SWAPPING:8298,ACTIVATE_SYMMETRIC_SWAPPING:8299,INHIBIT_ARABIC_FORM_SHAPING:8300,ACTIVATE_ARABIC_FORM_SHAPING:8301,NATIONAL_DIGIT_SHAPES:8302,NOMINAL_DIGIT_SHAPES:8303,LEFT_TO_RIGHT_BOUNDARY:8206,RIGHT_TO_LEFT_BOUNDARY:8207};class He{}class Ve extends He{constructor(e,r){super();a(this,"data");a(this,"glyphMap");a(this,"kernings");this.data=e,this.glyphMap=r;const n=this.kernings={};e.kernings.forEach(i=>{const o=i.second,h=n[o]=n[o]||{};h[i.first]=i.amount}),this.kernings=n}*shapeText(e,r){var o;let n,i;for(;(n=r.peek())&&!n.done;){const h=n.value,c=this.glyphMap.get(h);if(r.next(),c!==void 0){const f=i!==void 0?(((o=this.kernings[c.id])==null?void 0:o[i])||0)+e.letterSpacing:0;i=c.id,yield{mapped:!0,glyphId:c.id,codepoint:h,cluster:r.lastIndex,xAdvance:c.xadvance+f,yAdvance:0,xOffset:c.xoffset+f,yOffset:c.yoffset,xBearing:0,yBearing:0,width:c.width,height:c.height}}else h===We.LINE_FEED&&(i=void 0),yield{mapped:!1,codepoint:h,cluster:r.lastIndex}}}}class at extends Me{constructor(e,r,n,i,o,h){super(e,r);a(this,"type");a(this,"texture");a(this,"maxCharHeight",0);a(this,"data");a(this,"shaper");a(this,"glyphMap",new Map);this.type=n;const c=i.renderer;g(c instanceof ve,"SDF Font Faces can only be used with the WebGL Renderer"),this.texture=i.txManager.loadTexture("ImageTexture",{src:o,premultiplyAlpha:!1},{preload:!0}),this.texture.on("loaded",()=>{this.checkLoaded()}),fetch(h).then(async f=>{this.data=await f.json();let l=0;this.data.chars.forEach(d=>{this.glyphMap.set(d.id,d);const E=d.yoffset+d.height;E>l&&(l=E)}),this.maxCharHeight=l,this.shaper=new Ve(this.data,this.glyphMap),this.checkLoaded()}).catch(console.error)}getAtlasEntry(e){const r=this.glyphMap.get(e);if(r===void 0)throw new Error("Glyph ".concat(e," not found in font ").concat(this.fontFamily));return{x:r.x,y:r.y,width:r.width,height:r.height}}checkLoaded(){this.loaded||this.texture.state==="loaded"&&this.data&&(this.loaded=!0,this.emit("loaded"))}}class ot{}export{ze as A,Oe as B,ge as C,ne as E,k as R,at as S,Me as T,ie as W,g as a,Ie as b,J as c,je as d,tt as e,Ze as f,Qe as g,G as h,Ae as i,nt as j,Je as k,ve as l,qe as m,et as n,rt as o,ye as p,$e as q,ot as r,it as s,ke as t,st as u,Y as v,C as w,be as x,Ne as y,Ke as z};
//# sourceMappingURL=CoreExtension-C4ghjkTg.js.map
