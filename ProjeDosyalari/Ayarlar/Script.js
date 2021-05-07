// JavaScript Document

$(document).ready(function(){
	/* UFAK CİHAZLAR İÇİN MENU AÇMA BUTONUNUN İŞLEMLERİ >>>>> */
	$("#HeaderMenuAcmaButonuAlani").on("click", function(){
		$("#HeaderMenuAcmaButonuMenuSinirlamaAlani").slideToggle("slow");
	});
	/* UFAK CİHAZLAR İÇİN MENU AÇMA BUTONUNUN İŞLEMLERİ <<<<< */
	
	/* MAIN VE FOOTER ALANI İÇİN ÜSTTEN BOŞLUK HESAPLAMALARI >>>>> */
	var DokumanGenisligi		=	$(window).outerWidth();
	
	if(!$("#HeaderMesajAlani").length){
	   if(DokumanGenisligi>=1200){ /* XL */
		  var OfsetDegeri		=	108;
	   }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){ /* L */
		  var OfsetDegeri		=	98;
	   }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){ /* M */
		  var OfsetDegeri		=	88;
	   }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){ /* S */
		  var OfsetDegeri		=	78;
	   }else if(DokumanGenisligi<=574){ /* XL */
		  var OfsetDegeri		=	78;
	   }
	}else{
	   if(DokumanGenisligi>=1200){ /* XL */
		  var OfsetDegeri		=	148;
	   }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){ /* L */
		  var OfsetDegeri		=	138;
	   }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){ /* M */
		  var OfsetDegeri		=	118;
	   }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){ /* S */
		  var OfsetDegeri		=	108;
	   }else if(DokumanGenisligi<=574){ /* XL */
		  var OfsetDegeri		=	103;
	   }
	}
	$("main").css("top", OfsetDegeri);
	$("footer").css("top", OfsetDegeri);
	
	$(window).resize(function(){
		var DokumanGenisligi		=	$(window).outerWidth();

		if(!$("#HeaderMesajAlani").length){
		   if(DokumanGenisligi>=1200){ /* XL */
			  var OfsetDegeri		=	108;
		   }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){ /* L */
			  var OfsetDegeri		=	98;
		   }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){ /* M */
			  var OfsetDegeri		=	88;
		   }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){ /* S */
			  var OfsetDegeri		=	78;
		   }else if(DokumanGenisligi<=574){ /* XL */
			  var OfsetDegeri		=	78;
		   }
		}else{
		   if(DokumanGenisligi>=1200){ /* XL */
			  var OfsetDegeri		=	148;
		   }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){ /* L */
			  var OfsetDegeri		=	138;
		   }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){ /* M */
			  var OfsetDegeri		=	118;
		   }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){ /* S */
			  var OfsetDegeri		=	108;
		   }else if(DokumanGenisligi<=574){ /* XL */
			  var OfsetDegeri		=	103;
		   }
		}
		$("main").css("top", OfsetDegeri);
		$("footer").css("top", OfsetDegeri);
	});
	/* MAIN VE FOOTER ALANI İÇİN ÜSTTEN BOŞLUK HESAPLAMALARI <<<<< */

});