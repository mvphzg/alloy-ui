AUI.add("aui-component",function(b){var g=b.Lang,l=function(p,q){return(p||[]).concat(q||[]);},c=b.ClassNameManager,h=c.getClassName,k=b.Widget.getClassName,d=b.getClassName,o="component",m=d("helper","hidden"),a=b.config.win.Object.prototype.constructor;var n=function(q){var p=this;p._originalConfig=q;p._setRender(q);n.superclass.constructor.apply(this,arguments);e[p.get("id")]=p;};var e=n._INSTANCES={};n.NAME="component";n.ATTRS={useARIA:{writeOnce:true,value:false,validator:g.isBoolean},cssClass:{lazyAdd:false,value:null},hideClass:{value:m},render:{value:false,writeOnce:true}};b.extend(n,b.Widget,{initializer:function(q){var p=this;if(q&&q.cssClass){p._uiSetCssClass(q.cssClass);}p.after("cssClassChange",p._afterCssClassChange);},clone:function(q){var p=this;q=q||{};q.id=q.id||b.guid();b.mix(q,p._originalConfig);return new p.constructor(q);},toggle:function(q){var p=this;if(!g.isBoolean(q)){q=!p.get("visible");}return p.set("visible",q);},_uiSetVisible:function(s){var p=this;var r=n.superclass._uiSetVisible;if(r){r.apply(p,arguments);}var t=p.get("hideClass");if(t!==false){var q=p.get("boundingBox");q.toggleClass(t||m,!s);}},_afterCssClassChange:function(q){var p=this;p._uiSetCssClass(q.newVal,q.prevVal);},_renderBoxClassNames:function(){var z=this;var p=z.get("boundingBox")._node;var B=z.get("contentBox")._node;var u=p.className;var r=B.className;var t=(u)?u.split(" "):[];var y=(r)?r.split(" "):[];var q=z._getClasses();var w=q.length-4;var v;var A;t.push(k());for(var s=q.length-3;s>=0;s--){v=q[s];t.push(v.CSS_PREFIX||h(v.NAME.toLowerCase()));if(s<=w){A=String(q[s].NAME).toLowerCase();y.push(d(A,"content"));}}y.push(z.getClassName("content"));t=b.Array.dedupe(t);y=b.Array.dedupe(y);if(p===B){var x=y.concat(t);B.className=x.join(" ");}else{p.className=t.join(" ");B.className=y.join(" ");}},_renderInteraction:function(t,q){var p=this;p.render(q);var r=p._renderHandles;for(var s=r.length-1;s>=0;s--){var u=r.pop();u.detach();}},_setRender:function(s){var y=this;var q=s&&s.render;if(q&&q.constructor==a){var r=q.eventType||"mousemove";var v=q.parentNode;var t=q.selector||v;if(t){y._renderHandles=[];var x=y._renderHandles;if(!g.isArray(r)){r=[r];}var p=b.rbind(y._renderInteraction,y,v);var w=b.one(t);for(var u=r.length-1;u>=0;u--){x[u]=w.once(r[u],p);}delete s.render;}}},_uiSetCssClass:function(t,v){var q=this;var u=v+"-content";var p=t+"-content";var s=q.get("boundingBox");var r=q.get("contentBox");s.replaceClass(v,t);r.replaceClass(u,p);}});n.getById=function(p){return e[p];};var j=n.prototype;var i=b.Widget.prototype._UI_ATTRS;n._applyCssPrefix=function(p){if(p&&p.NAME&&!("CSS_PREFIX" in p)){p.CSS_PREFIX=b.getClassName(String(p.NAME).toLowerCase());}return p;};n.create=function(q){q=q||{};var r=q.EXTENDS||b.Component;var w=q.constructor;if(!b.Object.owns(q,"constructor")){w=function(){w.superclass.constructor.apply(this,arguments);};}var y=q.prototype;if(y){if(q.UI_ATTRS||q.BIND_UI_ATTRS||q.SYNC_UI_ATTRS){var u=l(q.BIND_UI_ATTRS,q.UI_ATTRS);var x=l(q.SYNC_UI_ATTRS,q.UI_ATTRS);var t=r.prototype;var p=(t&&t._UI_ATTRS)||i;u=l(p.BIND,u);x=l(p.SYNC,x);var v=y._UI_ATTRS;if(!v){v=y._UI_ATTRS={};}if(u.length){v.BIND=u;}if(x.length){v.SYNC=x;}}}var s=q.AUGMENTS;if(s&&!g.isArray(s)){s=[s];}b.mix(w,q);delete w.prototype;b.extend(w,r,y);if(s){w=b.Base.build(q.NAME,w,s,{dynamic:false});}n._applyCssPrefix(w);return w;};n.CSS_PREFIX=d("component");var f=b.Base;n.build=function(){var p=f.build.apply(f,arguments);n._applyCssPrefix(p);return p;};b.Component=n;},"@VERSION@",{requires:["aui-classnamemanager","base-build","widget"],skinnable:false});