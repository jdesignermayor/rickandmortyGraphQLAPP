(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{R1EA:function(t,r,a){"use strict";a.d(r,"a",function(){return n});var e=a("2Vo4"),o=a("fXoL"),c=a("5eHb");const s="myFavorites";let n=(()=>{class t{constructor(t){this.toastrSvc=t,this.charactersFavSubject=new e.a(null),this.charactersFav$=this.charactersFavSubject.asObservable(),this.initialStorage()}addOrRemoveFavorite(t){const{id:r}=t;this.getFavoriteCharacters().find(t=>t.id===r)?this.removeFromFavorite(r):this.addToFavorite(t)}addToFavorite(t){try{const r=this.getFavoriteCharacters();localStorage.setItem(s,JSON.stringify([...r,t])),this.charactersFavSubject.next([...r,t]),this.toastrSvc.success(`${t.name} added to favorites.`,"Rick and Morty APP")}catch(r){console.log("Error saving localStorage.",r),this.toastrSvc.error(`Error saving localStorage ${r}`,"Rick and Morty APP")}}removeFromFavorite(t){try{const r=this.getFavoriteCharacters().filter(r=>r.id!==t);localStorage.setItem(s,JSON.stringify([...r])),this.charactersFavSubject.next([...r]),this.toastrSvc.warning("Remove from favorites.","Rick and Morty APP")}catch(r){console.log("Error removing localStorage.",r),this.toastrSvc.error(`Error removing localStorage ${r}`,"Rick and Morty APP")}}getFavoriteCharacters(){try{const t=JSON.parse(localStorage.getItem(s));return this.charactersFavSubject.next(t),t}catch(t){console.log("Error getting favorites from localStorage.",t)}}clearStorage(){try{localStorage.clear()}catch(t){console.log("Error cleaning localStorage.",t)}}initialStorage(){JSON.parse(localStorage.getItem(s))||localStorage.setItem(s,JSON.stringify([])),this.getFavoriteCharacters()}}return t.\u0275fac=function(r){return new(r||t)(o.Nb(c.b))},t.\u0275prov=o.Bb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},TWGy:function(t,r,a){"use strict";a.r(r),a.d(r,"HomeModule",function(){return g});var e=a("ofXK"),o=a("tyNb"),c=a("fXoL"),s=a("R1EA"),n=a("RF4Q");function i(t,r){1&t&&c.Gb(0,"app-characters-card",2),2&t&&c.Vb("character",r.$implicit)}const l=[{path:"",component:(()=>{class t{constructor(t){this.localStorageSvc=t,this.charactersFav$=this.localStorageSvc.charactersFav$}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)(c.Fb(s.a))},t.\u0275cmp=c.zb({type:t,selectors:[["app-home"]],decls:3,vars:3,consts:[[1,"character__list"],[3,"character",4,"ngFor","ngForOf"],[3,"character"]],template:function(t,r){1&t&&(c.Kb(0,"section",0),c.hc(1,i,1,1,"app-characters-card",1),c.Tb(2,"async"),c.Jb()),2&t&&(c.vb(1),c.Vb("ngForOf",c.Ub(2,1,r.charactersFav$)))},directives:[e.i,n.a],pipes:[e.b],styles:[".character__list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}"]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=c.Db({type:t}),t.\u0275inj=c.Cb({imports:[[o.b.forChild(l)],o.b]}),t})();var v=a("ekAR");let g=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=c.Db({type:t}),t.\u0275inj=c.Cb({imports:[[e.c,h,v.a]]}),t})()}}]);