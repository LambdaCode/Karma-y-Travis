!function(e){function n(e,n){converters={},converters.k=function(e){return e},converters.c=function(e){return e+273.15},converters.f=function(e){return 5*(e-32)/9+273.15},e=converters[n]?converters[n](e):Medida.invalidConversion(n,"Kelvin"),Temperatura.call(this,e,"Kelvin")}n.prototype=new Temperatura,n.prototype.constructor=n,e.Kelvin=n}(this);