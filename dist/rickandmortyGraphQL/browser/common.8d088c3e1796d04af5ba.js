(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{RF4Q:function(e,t,c){"use strict";c.d(t,"a",function(){return s});var r=c("fXoL"),a=c("R1EA"),i=c("tyNb");const n=function(e){return["/character-details",e]};let s=(()=>{class e{constructor(e){this.localStorageSvc=e}getIcon(){return this.character.isFavorite?"heart-solid.svg":"heart.svg"}onToggleFavorite(){const e=this.character.isFavorite;this.getIcon(),this.character.isFavorite=!e,this.localStorageSvc.addOrRemoveFavorite(this.character)}}return e.\u0275fac=function(t){return new(t||e)(r.Fb(a.a))},e.\u0275cmp=r.zb({type:e,selectors:[["app-characters-card"]],inputs:{character:"character"},decls:22,vars:9,consts:[[1,"card"],[1,"card__link",3,"routerLink"],["rel","preload","as","image","width","300","height","300","alt","character.name",3,"src"],[1,"card__details"],[1,"card__favorite"],["rel","preload","as","image","width","30","height","30","alt","character.name",3,"src","click"],[1,"card__list"],[1,"table__label"]],template:function(e,t){1&e&&(r.Kb(0,"article",0),r.Kb(1,"a",1),r.Kb(2,"figure"),r.Gb(3,"img",2),r.Jb(),r.Jb(),r.Kb(4,"div",3),r.Kb(5,"figure",4),r.Kb(6,"img",5),r.Qb("click",function(){return t.onToggleFavorite()}),r.Jb(),r.Jb(),r.Kb(7,"h3"),r.ic(8),r.Jb(),r.Kb(9,"ul",6),r.Kb(10,"li"),r.Kb(11,"label",7),r.ic(12,"Status: "),r.Jb(),r.ic(13),r.Jb(),r.Kb(14,"li"),r.Kb(15,"label",7),r.ic(16,"Species:"),r.Jb(),r.ic(17),r.Jb(),r.Kb(18,"li"),r.Kb(19,"label",7),r.ic(20,"Gender:"),r.Jb(),r.ic(21),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&e&&(r.vb(1),r.Vb("routerLink",r.Yb(7,n,t.character.id)),r.vb(2),r.Vb("src",t.character.image,r.dc),r.vb(3),r.Wb("src","/assets/imgs/",t.getIcon(),"",r.dc),r.vb(2),r.jc(t.character.name),r.vb(5),r.kc("",t.character.status," "),r.vb(4),r.kc("",t.character.species," "),r.vb(4),r.kc(" ",t.character.gender," "))},directives:[i.a],styles:["figure.card__favorite[_ngcontent-%COMP%]{background:transparent}"],changeDetection:0}),e})()},ekAR:function(e,t,c){"use strict";c.d(t,"a",function(){return n});var r=c("ofXK"),a=c("tyNb"),i=c("fXoL");let n=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.Db({type:e}),e.\u0275inj=i.Cb({imports:[[r.c,a.b]]}),e})()}}]);