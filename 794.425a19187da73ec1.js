"use strict";(self.webpackChunkng_weather=self.webpackChunkng_weather||[]).push([[794],{6794:(E,l,r)=>{r.r(l),r.d(l,{routes:()=>g});var t=r(4650),p=r(529),c=r(4289);let d=(()=>{class e{constructor(o){this.http=o}getForecast(o){const n=(new p.LE).set("zip",o).set("units",c.k.UNIT).set("cnt",5).set("appid",c.k.APP_ID);return this.http.get(`${c.k.URL}/forecast/daily`,{params:n})}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(p.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),u=(()=>{class e{constructor(o){this.service=o}resolve(o,n){const A=o.paramMap.get(e.ROUTE_PARAM_KEYS.ZIPCODE);return this.service.getForecast(A)}}return e.ROUTE_PARAM_KEYS={ZIPCODE:"zipcode"},e.\u0275fac=function(o){return new(o||e)(t.LFG(d))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var s=r(6895),i=r(3650),m=r(9165),f=r(2013);function v(e,a){if(1&e&&(t.TgZ(0,"li",7),t._uU(1),t.ALo(2,"date"),t.ALo(3,"number"),t.ALo(4,"number"),t._UZ(5,"app-weather-icon",8),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.HOy(" ",t.xi3(2,6,1e3*o.dt,"EEEE, MMM d"),": ",o.weather[0].main," - Min: ",t.xi3(3,9,o.temp.min,".0-0")," - Max: ",t.xi3(4,12,o.temp.max,".0-0")," "),t.xp6(4),t.Q6J("conditionId",o.weather[0].id)("isIcon",!0)}}let h=(()=>{class e{constructor(o,n){this.route=o,this.weatherIconService=n,this.city=""}ngOnInit(){this.forecast=this.route.snapshot.data[e.ROUTE_DATA_KEYS.FORECAST]}getWeatherIcon(o){return this.weatherIconService.getWeatherIcon(o)}}return e.ROUTE_DATA_KEYS={FORECAST:"forecast"},e.\u0275fac=function(o){return new(o||e)(t.Y36(i.gz),t.Y36(f.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-forecast"]],standalone:!0,features:[t.jDz],decls:9,vars:2,consts:[[1,"panel","panel-default"],[1,"panel-heading"],[1,"panel-title"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"mt-2","mb-2"],["routerLink","/","tabindex","0","id","mainPageBtn",1,"btn","btn-success"],[1,"list-group-item"],[3,"conditionId","isIcon"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),t._uU(3),t.qZA()(),t.TgZ(4,"ul",3),t.YNc(5,v,6,15,"li",4),t.qZA()(),t.TgZ(6,"div",5)(7,"a",6),t._uU(8,"< Back to main page"),t.qZA()()),2&o&&(t.xp6(3),t.hij("5-day forecast for ",null==n.forecast||null==n.forecast.city?null:n.forecast.city.name,""),t.xp6(2),t.Q6J("ngForOf",null==n.forecast?null:n.forecast.list))},dependencies:[s.ez,s.sg,s.JJ,s.uU,i.Bz,i.yS,m.O],encapsulation:2,changeDetection:0}),e})();const g=[{path:`:${u.ROUTE_PARAM_KEYS.ZIPCODE}`,component:h,resolve:{[h.ROUTE_DATA_KEYS.FORECAST]:u}}]}}]);