CKEDITOR.skins.add("office2003",function(){return{editor:{css:["editor.css"]},dialog:{css:["dialog.css"]},separator:{canGroup:!1},templates:{css:["templates.css"]},margins:[0,14,18,14]}}()),function(){function e(){CKEDITOR.dialog.on("resize",function(e){var t=e.data,n=t.width,r=t.height,i=t.dialog,s=i.parts.contents;if(t.skin!="office2003")return;s.setStyles({width:n+"px",height:r+"px"});if(!CKEDITOR.env.ie||CKEDITOR.env.ie9Compat)return;var o=function(){var e=i.parts.dialog.getChild([0,0,0]),t=e.getChild(0),n=t.getSize("width");r+=t.getChild(0).getSize("height")+1;var s=e.getChild(2);s.setSize("width",n),s=e.getChild(7),s.setSize("width",n-28),s=e.getChild(4),s.setSize("height",r),s=e.getChild(5),s.setSize("height",r)};setTimeout(o,100),e.editor.lang.dir=="rtl"&&setTimeout(o,1e3)})}CKEDITOR.dialog?e():CKEDITOR.on("dialogPluginReady",e)}();