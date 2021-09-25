const apicall = 'https://bmi-webapp-prod-awdshow.azurewebsites.net/pages/16';

fetch(apicall).then(res => res.json()).then(json => {
  // console.log(json[0].name);

    
    // INTRO heading
    var introhead, introhead1, introhead_id = "";
    introhead = json;

    for (introhead1 in introhead) {
        if (introhead[introhead1].__component == "pages.gospel-intro") {
            introhead_id +=   introhead[introhead1].heading;
        }
    }
    document.getElementById("about-heading").innerHTML = introhead_id;
    
    
    
    // INTRO COPY
    var introcopy, introcopy1, introcopy_id = "";
    introcopy = json;

    for (introcopy1 in introcopy) {
        if (introcopy[introcopy1].__component == "pages.gospel-intro") {
            introcopy_id +=   introcopy[introcopy1].intro_text;
        }
    }
    document.getElementById("about-copy").innerHTML = introcopy_id;
    
    
    // INTRO modal
    var intromore, intromore1, intromore_id = "";
    intromore = json;

    for (intromore1 in intromore) {
        if (intromore[intromore1].__component == "pages.gospel-intro") {
            intromore_id +=   intromore[intromore1].learn_more;
        }
    }
    document.getElementById("about-more").innerHTML = intromore_id;
    
   
    
    // HOSTS
    var host1, hosts1, hosts1b, host1_id = "";
    host1 = json;    
    for (hosts1 in host1) { 
        if (host1[hosts1].__component == "pages.host-list") {
            for (hosts1b in host1[hosts1].hosts) { 
				if (host1[hosts1].hosts[hosts1b].meta_key == "Mike") {
					
host1_id +=     '<div class="back">';
host1_id +=     	'<span>' + host1[hosts1].hosts[hosts1b].name + '</span>';
host1_id +=     	'<p>' + host1[hosts1].hosts[hosts1b].bio + '</p>';
host1_id +=     '</div>	';
host1_id +=     '<div class="front" style="background-image:url(' + host1[hosts1].hosts[hosts1b].image.url + ')"></div>';
                }
            }
        }
    }
    document.getElementById("host1").innerHTML = host1_id;
	
	var host2, hosts2, hosts2b, host2_id = "";
    host2 = json;    
    for (hosts2 in host2) { 
        if (host2[hosts2].__component == "pages.host-list") {
            for (hosts2b in host2[hosts2].hosts) { 
				if (host2[hosts2].hosts[hosts2b].meta_key == "Catherine") {
					
host2_id +=     '<div class="back">';
host2_id +=     	'<span>' + host2[hosts2].hosts[hosts2b].name + '</span>';
host2_id +=     	'<p>' + host2[hosts2].hosts[hosts2b].bio + '</p>';
host2_id +=     '</div>	';
host2_id +=     '<div class="front" style="background-image:url(' + host2[hosts2].hosts[hosts2b].image.url + ')"></div>';
                }
            }
        }
    }
    document.getElementById("host2").innerHTML = host2_id;
	
	var host3, hosts3, hosts3b, host3_id = "";
    host3 = json;    
    for (hosts3 in host3) { 
        if (host3[hosts3].__component == "pages.host-list") {
            for (hosts3b in host3[hosts3].hosts) { 
				if (host3[hosts3].hosts[hosts3b].meta_key == "Wardell") {
					
host3_id +=     '<div class="back">';
host3_id +=     	'<span>' + host3[hosts3].hosts[hosts3b].name + '</span>';
host3_id +=     	'<p>' + host3[hosts3].hosts[hosts3b].bio + '</p>';
host3_id +=     '</div>	';
host3_id +=     '<div class="front" style="background-image:url(' + host3[hosts3].hosts[hosts3b].image.url + ')"></div>';
                }
            }
        }
    }
    document.getElementById("host3").innerHTML = host3_id;
	
	var hostm, hostm2, hostm_id = "";
    hostm = json;    
    for (hostm2 in hostm) { 
        if (hostm[hostm2].meta_key == "creative-thanks-link") {         
hostm_id +=     '<a href="#" data-toggle="modal" data-target="#about-modal"><p>';
hostm_id +=     	hostm[hostm2].name;
hostm_id +=     	'<span>' + hostm[hostm2].content + '</span>';
hostm_id +=     '</p></a>';        
        }
    }
    document.getElementById("hostm").innerHTML = hostm_id;
	
	
	var ch, ch1, ch_id = "";
    ch = json;    
    
    for (ch1 in ch) { 
        if (ch[ch1].meta_key == "creative-thanks-text") {
ch_id +=  	ch[ch1].name;
        }
    }
    document.getElementById("creative-heading").innerHTML = ch_id;
	
	
	var ct, ct1, ct_id = "";
    ct = json;    
    
    for (ct1 in ct) { 
        if (ct[ct1].meta_key == "creative-thanks-text") {
ct_id +=  	ct[ct1].content;
        }
    }
    document.getElementById("creative-text").innerHTML = ct_id;
	
	
	// hosts popup
	
	var cp, cp1, cp2, cp_id = "";
    cp = json;    
    for (cp1 in cp) { 
        if (cp[cp1].meta_key == "creative-thanks-people") {
            for (cp2 in cp[cp1].hosts) { 
cp_id +=     	'<li>';
cp_id +=     		'<div style="background-image:url(' + cp[cp1].hosts[cp2].image.url + ')"></div>';
cp_id +=     		'<h5>' + cp[cp1].hosts[cp2].name + '</h5>';
cp_id +=     	'</li>';
            }
        }
    }
    document.getElementById("creative-people").innerHTML = cp_id;

	
	
	// video
	
	var vh, vh1, vh_id = "";
    vh = json;    
    for (vh1 in vh) { 
        if (vh[vh1].meta_key == "special_welcome") {
vh_id +=  	vh[vh1].name;
        }
    }
    document.getElementById("video-heading").innerHTML = vh_id;
	
	
	var vt, vt1, vt_id = "";
    vt = json;    
    for (vt1 in vt) { 
        if (vt[vt1].meta_key == "special_welcome") {
vt_id +=  	vt[vt1].text;
        }
    }
    document.getElementById("video-text").innerHTML = vt_id;
	
	
	var vp, vp1, vp_id = "";
    vp = json;    
    for (vp1 in vp) { 
        if (vp[vp1].meta_key == "special_welcome") {
			
vp_id +=  	'<button class="play-vid"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></button>';
vp_id +=  	'<img class="lazy poster" data-src="' + vp[vp1].image.url + '" alt="poster">';
vp_id +=  	'<iframe id="videoiframe" src="https://www.youtube.com/embed/' + vp[vp1].youtube_id + '?enablejsapi&rel=0" frameborder="0" allowfullscreen></iframe>';	
		
        }
    }
    document.getElementById("video-player").innerHTML = vp_id;

	$(document).ready(function() {
        $('.play-vid').on('click', function(ev){ 
            $("#videoiframe")[0].src += "&autoplay=1";
            ev.preventDefault();
            $('.poster').hide();
            $(this).hide();
        });
    });
	
	
	// winners
	
    /* 
    
    srcset for background image 
    
    Our music videos are background images so we can't use srcset for them, instead we are going to
    set up a hidden image with srcsets, detect which one is used for that image and then use that
    same type for our backgrounds.

    */
	
	  // doja cat
    m1_avifs = "https://cdn.bcms.app/uploads/rb21_doja_cat_say_so_f5ce8f954d.avif";
    m1_webp = "https://cdn.bcms.app/uploads/rb21_doja_cat_say_so_cc5800b012.webp";
    m1_jpeg = "https://cdn.bcms.app/uploads/rb21_doja_cat_say_so_7dd43643d8.jpg"
    
    // roddy ricch
    m2_avifs = "https://cdn.bcms.app/uploads/rb21_roddy_ricch_0ba3371200.avif";
    m2_webp = "https://cdn.bcms.app/uploads/rb21_roddy_ricch_849179eff3.webp";
    m2_jpeg = "https://cdn.bcms.app/uploads/rb21_roddy_ricch_1526da67bb.jpg"
    
    // metro boomin
    m3_avifs = "https://cdn.bcms.app/uploads/rb21_metro_boomin_5809308495.avif";
    m3_webp =  "https://cdn.bcms.app/uploads/rb21_metro_boomin_0fea4f6a69.webp";
    m3_jpeg = "https://cdn.bcms.app/uploads/rb21_metro_boomin_1ac4bdda42.jpg"

    // by default use jpg
    m1_vid = m1_jpeg;
    m2_vid = m2_jpeg;
    m3_vid = m3_jpeg;
    
    // identify the hidden image for testing
    const picture = document.getElementById('ImageTypes');
    
    // get the value of the source that the hidden image is using
    const myCurrentSrc = picture.querySelector('img').currentSrc;
    // expecting something like
    // data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=
    
    // get the image type of the source of the hidden image
    const bestSupportedImageType = myCurrentSrc.substring(myCurrentSrc.indexOf(':')+1,myCurrentSrc.indexOf(';'));
    // expecting something like
    // image/avif
        
    // now pick the best supported one
    // https://stackoverflow.com/a/66359366/955002
    if (bestSupportedImageType == "image/avif") {
      m1_vid = m1_avifs;
      m2_vid = m2_avifs;
      m3_vid = m3_avifs;
    } else if (bestSupportedImageType == "image/webp") {
      m1_vid = m1_webp;
      m2_vid = m2_webp;
      m3_vid = m3_webp;
    }
	
	var w1, w1b, w1_id = "";
    w1 = json;    
    for (w1b in w1) { 
        if (w1[w1b].meta_key == "song-of-the-year") {
		
w1_id +=  	'<div class="section"></div>';
w1_id +=  	'<div class="section" style="background-image: url(' + m1_vid + ')">';
w1_id +=  		'<a href="//www.youtube.com/watch?v=' + w1[w1b].youtube_id + '?enablejsapi&rel=0" data-lity class="w1a"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
w1_id +=  	'</div>';
w1_id +=  	'<div class="section">';
w1_id +=  		'<h3>' + w1[w1b].award_name + '</h3>';
w1_id +=  		'<hr>';
w1_id +=  		'<h4>' + w1[w1b].award_winner + '</h4><br>';
w1_id +=  		w1[w1b].award_details;
w1_id +=  		'<div>';
w1_id +=  			'<a href="//www.youtube.com/watch?v=' + w1[w1b].youtube_song_id + '?enablejsapi&rel=0" data-lity class="w1b1"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn2_30444a6601.png" alt="play"></a>';
w1_id +=  			'<a href="//www.youtube.com/watch?v=' + w1[w1b].youtube_song_id + '?enablejsapi&rel=0" data-lity class="w1b2">' + w1[w1b].special_message + '</a>';
w1_id +=  		'</div>';
w1_id +=  	'</div>';
			
        }
    }
    document.getElementById("soty").innerHTML = w1_id;
	
	
	var w2, w2b, w2_id = "";
    w2 = json;    
    for (w2b in w2) { 
        if (w2[w2b].meta_key == "songwriter-of-the-year-1") {
w2_id +=  	'<div class="section">';
w2_id +=  		'<h3>' + w2[w2b].award_name + '</h3>';
w2_id +=  		'<hr>';
w2_id +=  		'<h4>' + w2[w2b].award_winner + '</h4><br>';
w2_id +=  		w2[w2b].award_details;
w2_id +=  		'<div>';
w2_id +=  			'<a href="//www.youtube.com/watch?v=' + w2[w2b].youtube_song_id + '?enablejsapi&rel=0" data-lity  class="w2b1"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_puboty_448219e152.png" alt="play"></a>';
w2_id +=  			'<a href="//www.youtube.com/watch?v=' + w2[w2b].youtube_song_id + '?enablejsapi&rel=0" data-lity class="w2b2">' + w2[w2b].special_message + '</a>';
w2_id +=  		'</div>';
w2_id +=  	'</div>';
w2_id +=  	'<div class="section" style="background-image: url(' + m2_vid + ')">';
w2_id +=  		'<a href="//www.youtube.com/watch?v=' + w2[w2b].youtube_id + '?enablejsapi&rel=0" data-lity class="w2a"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
w2_id +=  	'</div>';
w2_id +=  	'<div class="section"></div>';
			
        }
    }
    document.getElementById("swoty").innerHTML = w2_id;
	
	
	var w3, w3b, w3_id = "";
    w3 = json;    
    for (w3b in w3) { 
        if (w3[w3b].meta_key == "producer-of-the-year") {
w3_id +=  	'<div class="section"></div>';
w3_id +=  	'<div class="section" style="background-image: url(' + m3_vid + ')">';
w3_id +=  		'<a href="//www.youtube.com/watch?v=' + w3[w3b].youtube_id + '?enablejsapi&rel=0" data-lity  class="w3a"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
w3_id +=  	'</div>';
w3_id +=  	'<div class="section">';
w3_id +=  		'<h3>' + w3[w3b].award_name + '</h3>';
w3_id +=  		'<hr>';
w3_id +=  		'<h4>' + w3[w3b].award_winner + '</h4><br>';
w3_id +=  		w3[w3b].award_details;
w3_id +=  		'<div>';
w3_id +=  			'<a href="//www.youtube.com/watch?v=' + w3[w3b].youtube_song_id + '?enablejsapi&rel=0" data-lity  class="w3b1"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_poty_3d323a45c7.png" alt="play"></a>';
w3_id +=  			'<a href="//www.youtube.com/watch?v=' + w3[w3b].youtube_song_id + '?enablejsapi&rel=0" data-lity class="w3b2">' + w3[w3b].special_message + '</a>';
w3_id +=  		'</div>';
w3_id +=  	'</div>';
			
        }
    }
    document.getElementById("poty").innerHTML = w3_id;
	
	
	var w4, w4b, w4_id = "";
    w4 = json;    
    for (w4b in w4) { 
        if (w4[w4b].meta_key == "publisher-of-the-year") {

w4_id +=  	'<div class="section">';
w4_id +=  		'<h3>' + w4[w4b].award_name + '</h3>';
w4_id +=  		'<hr>';
w4_id +=  		'<h4>' + w4[w4b].award_winner + '</h4><br>';
w4_id +=  		w4[w4b].award_details;
w4_id +=  	'</div>';

w4_id +=  	'<div class="section">';
w4_id +=  		'<img class="lazy puboty-logo" data-src="https://cdn.bcms.app/uploads/rb21_puboy_e5f045e672.png" alt="Kobalt">';
w4_id +=  		'<div>';
w4_id +=  			'<a href="//www.youtube.com/watch?v=' + w4[w4b].youtube_id + '?enablejsapi&rel=0" data-lity  class="w4b1"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_puboty_448219e152.png" alt="play"></a>';
w4_id +=  			'<a href="//www.youtube.com/watch?v=' + w4[w4b].youtube_id + '?enablejsapi&rel=0" data-lity  class="w4b2">' + w4[w4b].special_message + '</a>';
w4_id +=  		'</div>';
w4_id +=  	'</div>';

w4_id +=  	'<div class="section"></div>';
			

			
        }
    }
    document.getElementById("puboty").innerHTML = w4_id;
	
	
	
	// hiwts

	var hiwts1, hiwts1b, hiwts1_id = "";
    hiwts1 = json;    
    for (hiwts1b in hiwts1) { 
        if (hiwts1[hiwts1b].meta_key == "hiwts-intro") {
hiwts1_id +=  	hiwts1[hiwts1b].name;
        }
    }
    document.getElementById("hiwts-heading").innerHTML = hiwts1_id;
	
	var hiwts2, hiwts2b, hiwts2_id = "";
    hiwts2 = json;    
    for (hiwts2b in hiwts2) { 
        if (hiwts2[hiwts2b].meta_key == "hiwts-intro") {
hiwts2_id +=  	hiwts2[hiwts2b].content;
        }
    }
    document.getElementById("hiwts-text").innerHTML = hiwts2_id;
	
	var hiwts_i1, hiwts_i1b, hiwts_i1_id = "";
    hiwts_i1 = json;    
    for (hiwts_i1b in hiwts_i1) { 
        if (hiwts_i1[hiwts_i1b].meta_key == "hiwts-1") {
			
hiwts_i1_id +=  	'<div class="front">';
hiwts_i1_id +=  		'<div class="outer">';
hiwts_i1_id +=  			'<div class="inner" style="background-image:url(' + hiwts_i1[hiwts_i1b].image.url + ')"></div>';
hiwts_i1_id +=  		'</div>';
hiwts_i1_id +=  	'</div>';
hiwts_i1_id +=  	'<div class="back">';
hiwts_i1_id +=  		'<div>';
hiwts_i1_id +=  			'<a href="//www.youtube.com/watch?v=' + hiwts_i1[hiwts_i1b].youtube_id + '?enablejsapi&rel=0" data-lity class="h1b1"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
hiwts_i1_id +=  			'<a href="//www.youtube.com/watch?v=' + hiwts_i1[hiwts_i1b].youtube_id + '?enablejsapi&rel=0" data-lity class="h1b2">' + hiwts_i1[hiwts_i1b].name + '<br>' + hiwts_i1[hiwts_i1b].text + '</a>';
hiwts_i1_id +=  		'</div>';
hiwts_i1_id +=  	'</div>';
			
        }
    }
    document.getElementById("hiwts-1").innerHTML = hiwts_i1_id;
	
	var hiwts_i2, hiwts_i2b, hiwts_i2_id = "";
    hiwts_i2 = json;    
    for (hiwts_i2b in hiwts_i2) { 
        if (hiwts_i2[hiwts_i2b].meta_key == "hiwts-2") {
			
hiwts_i2_id +=  	'<div class="front">';
hiwts_i2_id +=  		'<div class="outer">';
hiwts_i2_id +=  			'<div class="inner" style="background-image:url(' + hiwts_i2[hiwts_i2b].image.url + ')"></div>';
hiwts_i2_id +=  		'</div>';
hiwts_i2_id +=  	'</div>';
hiwts_i2_id +=  	'<div class="back">';
hiwts_i2_id +=  		'<div>';
hiwts_i2_id +=  			'<a href="//www.youtube.com/watch?v=' + hiwts_i2[hiwts_i2b].youtube_id + '?enablejsapi&rel=0" data-lity class="h2b1"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
hiwts_i2_id +=  			'<a href="//www.youtube.com/watch?v=' + hiwts_i2[hiwts_i2b].youtube_id + '?enablejsapi&rel=0" data-lity class="h2b2">' + hiwts_i2[hiwts_i2b].name + '<br>' + hiwts_i2[hiwts_i2b].text + '</a>';
hiwts_i2_id +=  		'</div>';
hiwts_i2_id +=  	'</div>';
			
        }
    }
    document.getElementById("hiwts-2").innerHTML = hiwts_i2_id;
	
	var hiwts_i3, hiwts_i3b, hiwts_i3_id = "";
    hiwts_i3 = json;    
    for (hiwts_i3b in hiwts_i3) { 
        if (hiwts_i3[hiwts_i3b].meta_key == "hiwts-3") {
			
hiwts_i3_id +=  	'<div class="front">';
hiwts_i3_id +=  		'<div class="outer">';
hiwts_i3_id +=  			'<div class="inner" style="background-image:url(' + hiwts_i3[hiwts_i3b].image.url + ')"></div>';
hiwts_i3_id +=  		'</div>';
hiwts_i3_id +=  	'</div>';
hiwts_i3_id +=  	'<div class="back">';
hiwts_i3_id +=  		'<div>';
hiwts_i3_id +=  			'<a href="//www.youtube.com/watch?v=' + hiwts_i3[hiwts_i3b].youtube_id + '?enablejsapi&rel=0" data-lity class="h3b1"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
hiwts_i3_id +=  			'<a href="//www.youtube.com/watch?v=' + hiwts_i3[hiwts_i3b].youtube_id + '?enablejsapi&rel=0" data-lity class="h3b2">' + hiwts_i3[hiwts_i3b].name + '<br>' + hiwts_i3[hiwts_i3b].text + '</a>';
hiwts_i3_id +=  		'</div>';
hiwts_i3_id +=  	'</div>';
			
        }
    }
    document.getElementById("hiwts-3").innerHTML = hiwts_i3_id;
	
	var hiwts_i4, hiwts_i4b, hiwts_i4_id = "";
    hiwts_i4 = json;    
    for (hiwts_i4b in hiwts_i4) { 
        if (hiwts_i4[hiwts_i4b].meta_key == "hiwts-4") {
			
hiwts_i4_id +=  	'<div class="front">';
hiwts_i4_id +=  		'<div class="outer">';
hiwts_i4_id +=  			'<div class="inner" style="background-image:url(' + hiwts_i4[hiwts_i4b].image.url + ')"></div>';
hiwts_i4_id +=  		'</div>';
hiwts_i4_id +=  	'</div>';
hiwts_i4_id +=  	'<div class="back">';
hiwts_i4_id +=  		'<div>';
hiwts_i4_id +=  			'<a href="//www.youtube.com/watch?v=' + hiwts_i4[hiwts_i4b].youtube_id + '?enablejsapi&rel=0" data-lity class="h4b1"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
hiwts_i4_id +=  			'<a href="//www.youtube.com/watch?v=' + hiwts_i4[hiwts_i4b].youtube_id + '?enablejsapi&rel=0" data-lity class="h4b2">' + hiwts_i4[hiwts_i4b].name + '<br>' + hiwts_i4[hiwts_i4b].text + '</a>';
hiwts_i4_id +=  		'</div>';
hiwts_i4_id +=  	'</div>';
			
        }
    }
    document.getElementById("hiwts-4").innerHTML = hiwts_i4_id;
	
	
	
	// remembrance intro
	
	var remi, remi1, remi_id = "";
    remi = json;    
    for (remi1 in remi) { 
        if (remi[remi1].meta_key == "remembrance-intro") {
remi_id +=  	remi[remi1].name;
        }
    }
    document.getElementById("remembrance-heading").innerHTML = remi_id;
	
	var remc, remc1, remc_id = "";
    remc = json;    
    for (remc1 in remc) { 
        if (remc[remc1].meta_key == "remembrance-intro") {
remc_id +=  	remc[remc1].content;
        }
    }
    document.getElementById("remembrance-text").innerHTML = remc_id;
	
	var rem1, rem1b, rem1_id = "";
    rem1 = json;    
    for (rem1b in rem1) { 
        if (rem1[rem1b].meta_key == "remembrance-1") {

rem1_id +=  	'<div class="rem-content left">';
rem1_id +=  		'<div>';
rem1_id +=  			'<p>' + rem1[rem1b].text + '</p>';
rem1_id +=  		'</div>';
rem1_id +=  	'</div>';
rem1_id +=  	'<img class="circle-text" src="https://cdn.bcms.app/uploads/rb21_nipsey_hussle_circle_17162a593c.png" alt="nispey hussle">';
			
        }
    }
    document.getElementById("rem1").innerHTML = rem1_id;
	
	
	
	var rem2, rem2b, rem2_id = "";
    rem2 = json;    
    for (rem2b in rem1) { 
        if (rem2[rem2b].meta_key == "remembrance-2") {

rem2_id +=  	'<div class="rem-content right">';
rem2_id +=  		'<div>';	
rem2_id +=  			'<p>' + rem2[rem2b].text + '</p>';
rem2_id +=  		'</div>';
rem2_id +=  	'</div>';
rem2_id +=  	'<img class="circle-text" src="https://cdn.bcms.app/uploads/rb21_pop_smoke_circle_b21a109643.png" alt="pop smoke">';
			
        }
    }
    document.getElementById("rem2").innerHTML = rem2_id;
	
	var rem3, rem3b, rem3_id = "";
    rem3 = json;    
    for (rem3b in rem3) { 
        if (rem3[rem3b].meta_key == "remembrance-3") {

rem3_id +=  	'<div class="rem-content left">';
rem3_id +=  		'<div>';
rem3_id +=  			'<p>' + rem3[rem3b].text + '</p>';
rem3_id +=  			'<div class="bottom">';
rem3_id +=  				'<h3>A SPECIAL MESSAGE FROM JUICE WRLD’S MOTHER<span>' + rem3[rem3b].name + '</span></h3>';
rem3_id +=  				'<a href="//www.youtube.com/watch?v=' + rem3[rem3b].youtube_id + '?enablejsapi&rel=0" data-lity class="r3a"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
rem3_id +=  			'</div>';
rem3_id +=  		'</div>';
rem3_id +=  	'</div>';
rem3_id +=  	'<img class="circle-text" src="https://cdn.bcms.app/uploads/rb21_juice_world_circle_3859f65f36.png" alt="juice wrld">';
	
        }
    }
    document.getElementById("rem3").innerHTML = rem3_id;
	
	var rem4, rem4b, rem4_id = "";
    rem4 = json;    
    for (rem4b in rem1) { 
        if (rem4[rem4b].meta_key == "remembrance-4") {

rem4_id +=  	'<div class="rem-content right">';
rem4_id +=  		'<div>';
rem4_id +=  			'<p>' + rem4[rem4b].text + '</p>';
rem4_id +=  			'<div class="bottom">';
rem4_id +=  				'<a href="//www.youtube.com/watch?v=' + rem4[rem4b].youtube_id + '?enablejsapi&rel=0" data-lity class="r4a"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
rem4_id +=  				'<h3>A SPECIAL TRIBUTE TO<span>' + rem4[rem4b].name + '</span></h3>';
rem4_id +=  			'</div>';
rem4_id +=  		'</div>';
rem4_id +=  	'</div>';
rem4_id +=  	'<img class="circle-text" src="https://cdn.bcms.app/uploads/rb21_chucky_thompson_circle_59697fd497.png" alt="chucky thompson">';
			
        }
    }
    document.getElementById("rem4").innerHTML = rem4_id;
	
	$('.rem-content').hover( function () {
		$(this).closest('.item').find('.circle-text').toggleClass('active');
	});

	
	
	// first time
	
	var fth, fthb, fth_id = "";
    fth = json;    
    for (fthb in fth) { 
        if (fth[fthb].meta_key == "firsttime-intro") {
fth_id +=  fth[fthb].name;
        }
    }
    document.getElementById("ft-heading").innerHTML = fth_id;
	
	var ftt, fttb, ftt_id = "";
    ftt = json;    
    for (fttb in ftt) { 
        if (ftt[fttb].meta_key == "firsttime-intro") {
ftt_id +=  ftt[fttb].content;
        }
    }
    document.getElementById("ft-text").innerHTML = ftt_id;
	
	var ft1, ft1b, ft1_id = "";
    ft1 = json;    
    for (ft1b in ft1) { 
        if (ft1[ft1b].meta_key == "firsttime-1") {			
ft1_id +=  	'<div style="background-image:url(' + ft1[ft1b].image.url + ');">';
ft1_id +=  		'<a href="//www.youtube.com/watch?v=' + ft1[ft1b].youtube_id + '?enablejsapi&rel=0" data-lity class="ft1"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
ft1_id +=  	'</div>';
ft1_id +=  	'<h4>' + ft1[ft1b].name + '</h4>';
        }
    }
    document.getElementById("firsttime-1").innerHTML = ft1_id;
	
	var ft2, ft2b, ft2_id = "";
    ft2 = json;    
    for (ft2b in ft2) { 
        if (ft2[ft2b].meta_key == "firsttime-2") {			
ft2_id +=  	'<div style="background-image:url(' + ft2[ft2b].image.url + ');">';
ft2_id +=  		'<a href="//www.youtube.com/watch?v=' + ft2[ft2b].youtube_id + '?enablejsapi&rel=0" data-lity class="ft2"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
ft2_id +=  	'</div>';
ft2_id +=  	'<h4>' + ft2[ft2b].name + '</h4>';
        }
    }
    document.getElementById("firsttime-2").innerHTML = ft2_id;
	
	var ft3, ft3b, ft3_id = "";
    ft3 = json;    
    for (ft3b in ft3) { 
        if (ft3[ft3b].meta_key == "firsttime-3") {			
ft3_id +=  	'<div style="background-image:url(' + ft3[ft3b].image.url + ');">';
ft3_id +=  		'<a href="//www.youtube.com/watch?v=' + ft3[ft3b].youtube_id + '?enablejsapi&rel=0" data-lity class="ft3"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
ft3_id +=  	'</div>';
ft3_id +=  	'<h4>' + ft3[ft3b].name + '</h4>';
        }
    }
    document.getElementById("firsttime-3").innerHTML = ft3_id;
	
	var ft4, ft4b, ft4_id = "";
    ft4 = json;    
    for (ft4b in ft4) { 
        if (ft4[ft4b].meta_key == "firsttime-4") {			
ft4_id +=  	'<div style="background-image:url(' + ft4[ft4b].image.url + ');">';
ft4_id +=  		'<a href="//www.youtube.com/watch?v=' + ft4[ft4b].youtube_id + '?enablejsapi&rel=0" data-lity class="ft4"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
ft4_id +=  	'</div>';
ft4_id +=  	'<h4>' + ft4[ft4b].name + '</h4>';
        }
    }
    document.getElementById("firsttime-4").innerHTML = ft4_id;
	
	var ft5, ft5b, ft5_id = "";
    ft5 = json;    
    for (ft5b in ft5) { 
        if (ft5[ft5b].meta_key == "firsttime-5") {			
ft5_id +=  	'<div style="background-image:url(' + ft5[ft5b].image.url + ');">';
ft5_id +=  		'<a href="//www.youtube.com/watch?v=' + ft5[ft5b].youtube_id + '?enablejsapi&rel=0" data-lity class="ft5"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
ft5_id +=  	'</div>';
ft5_id +=  	'<h4>' + ft5[ft5b].name + '</h4>';
        }
    }
    document.getElementById("firsttime-5").innerHTML = ft5_id;
	
	var ft6, ft6b, ft6_id = "";
    ft6 = json;    
    for (ft6b in ft6) { 
        if (ft6[ft6b].meta_key == "firsttime-6") {			
ft6_id +=  	'<div style="background-image:url(' + ft6[ft6b].image.url + ');">';
ft6_id +=  		'<a href="//www.youtube.com/watch?v=' + ft6[ft6b].youtube_id + '?enablejsapi&rel=0" data-lity class="ft6"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
ft6_id +=  	'</div>';
ft6_id +=  	'<h4>' + ft6[ft6b].name + '</h4>';
        }
    }
    document.getElementById("firsttime-6").innerHTML = ft6_id;
	
	var ft7, ft7b, ft7_id = "";
    ft7 = json;    
    for (ft7b in ft7) { 
        if (ft7[ft7b].meta_key == "firsttime-7") {			
ft7_id +=  	'<div style="background-image:url(' + ft7[ft7b].image.url + ');">';
ft7_id +=  		'<a href="//www.youtube.com/watch?v=' + ft7[ft7b].youtube_id + '?enablejsapi&rel=0" data-lity class="ft7"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
ft7_id +=  	'</div>';
ft7_id +=  	'<h4>' + ft7[ft7b].name + '</h4>';
        }
    }
    document.getElementById("firsttime-7").innerHTML = ft7_id;
	
	var ft8, ft8b, ft8_id = "";
    ft8 = json;    
    for (ft8b in ft8) { 
        if (ft8[ft8b].meta_key == "firsttime-8") {			
ft8_id +=  	'<div style="background-image:url(' + ft8[ft8b].image.url + ');">';
ft8_id +=  		'<a href="//www.youtube.com/watch?v=' + ft8[ft8b].youtube_id + '?enablejsapi&rel=0" data-lity class="ft8"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
ft8_id +=  	'</div>';
ft8_id +=  	'<h4>' + ft8[ft8b].name + '</h4>';
        }
    }
    document.getElementById("firsttime-8").innerHTML = ft8_id;
	
	var ft9, ft9b, ft9_id = "";
    ft9 = json;    
    for (ft9b in ft9) { 
        if (ft9[ft9b].meta_key == "firsttime-9") {			
ft9_id +=  	'<div style="background-image:url(' + ft9[ft9b].image.url + ');">';
ft9_id +=  		'<a href="//www.youtube.com/watch?v=' + ft9[ft9b].youtube_id + '?enablejsapi&rel=0" data-lity class="ft9"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
ft9_id +=  	'</div>';
ft9_id +=  	'<h4>' + ft9[ft9b].name + '</h4>';
        }
    }
    document.getElementById("firsttime-9").innerHTML = ft9_id;
	
	var ft10, ft10b, ft10_id = "";
    ft10 = json;    
    for (ft10b in ft10) { 
        if (ft10[ft10b].meta_key == "firsttime-10") {			
ft10_id +=  	'<div style="background-image:url(' + ft10[ft10b].image.url + ');">';
ft10_id +=  		'<a href="//www.youtube.com/watch?v=' + ft10[ft10b].youtube_id + '?enablejsapi&rel=0" data-lity class="ft10"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
ft10_id +=  	'</div>';
ft10_id +=  	'<h4>' + ft10[ft10b].name + '</h4>';
        }
    }
    document.getElementById("firsttime-10").innerHTML = ft10_id;
	
	
	// SONGWRITER intro
	
	var si, si1, si_id = "";
    si = json;    
    for (si1 in si) { 
        if (si[si1].meta_key == "song-qualifier-copy") {			

si_id +=  	'<div class="col-lg-8 offset-lg-2 text-center">';
si_id +=  		'<h2 class="animate-zoom-out">' + si[si1].name + '</h2>';
si_id +=  	'</div>';
si_id +=  	'<div class="col-lg-6 offset-lg-3 text-center">';
si_id +=  		'<p>' + si[si1].content + '</p>';
si_id +=  	'</div>';
			
        }
    }
    document.getElementById("songwriters-intro").innerHTML = si_id;
	
	
	// SONGWRITER note
	
	var sn, sn1, sn_id = "";
    sn = json;    
    for (sn1 in sn) { 
        if (sn[sn1].meta_key == "first-time-key") {			

sn_id +=  		sn[sn1].content;
			
        }
    }
    document.getElementById("songwriters-note").innerHTML = sn_id;
	
	
	// SONGWRITER SONGS
    
    var songs, songs1, songs2, songs3, songs_id = "";
    songs = json;

    for (songs1 in songs) {
        if (songs[songs1].type == "TopSongs") {
            for (songs2 in songs[songs1].songs) {
                
songs_id +=    '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 song-col">';
songs_id +=        '<div class="song-card-wrap animate-zoom-out">';
songs_id +=            '<div class="song-card">';
songs_id +=            		'<div class="inner">';
songs_id +=            			'<div class="song-img"><img class="lazy" data-src="' + songs[songs1].songs[songs2].image.url + '" alt="album art"></div>';
songs_id +=            			'<h4>' + songs[songs1].songs[songs2].name + '</h4>';
songs_id +=            			'<hr>';
songs_id +=                     '<ul class="writers">'; 
				for (songs3 in songs[songs1].songs[songs2].writers) {
songs_id +=                     	'<li>';
                                if (songs[songs1].songs[songs2].writers[songs3].first_win) {
songs_id +=                         	'<span class="asterisk">✱</span>'; 
                                  }                               
songs_id +=                     songs[songs1].songs[songs2].writers[songs3].name; 

									              if (songs[songs1].songs[songs2].writers[songs3].affiliation == "BMI" || songs[songs1].songs[songs2].writers[songs3].affiliation == "BMI/PRS") {
                                  } else {
songs_id +=                         ' <span>(' + songs[songs1].songs[songs2].writers[songs3].affiliation + ')</span>' 
                                  }
songs_id +=                             '</li>';
                                }
songs_id +=                     '</ul>';
songs_id +=                     '<ul class="publishers">';				
                                for (songs3 in songs[songs1].songs[songs2].publishers) {
songs_id +=                         '<li>' + songs[songs1].songs[songs2].publishers[songs3].name + '</li> '; 
                                    }
songs_id +=                     '</ul>';
				
songs_id +=                 '</div>';
songs_id +=            '</div>';
songs_id +=        '</div>';
songs_id +=    '</div>';
            }
        }
    }
    document.getElementById("songwriters-winners").innerHTML = songs_id;
    
    $('.song-img').on('click', function(){     
        $(this).toggleClass('active');
    });
	
	
	
	
	
	// top producers
	
	var pr1, pr1b, pr1_id = "";
    pr1 = json;    
    for (pr1b in pr1) { 
        if (pr1[pr1b].meta_key == "producer-1") {			
			
pr1_id +=  	'<div class="left animate-slide-lefts" style="background-image: url(' + pr1[pr1b].image.url + ')"></div>';
pr1_id +=  	'<div class="right">';
pr1_id +=  		'<h3 class="animate-slide-lefts">' + pr1[pr1b].name + '</h3>';
pr1_id +=  		'<ul class="animate-slide-lefts">';
pr1_id +=  			pr1[pr1b].text;
pr1_id +=  		'</ul>';
pr1_id +=  	'</div>';			
			
        }
    }
    document.getElementById("producer-1").innerHTML = pr1_id;
	
	var pr2, pr2b, pr2_id = "";
    pr2 = json;    
    for (pr2b in pr2) { 
        if (pr2[pr2b].meta_key == "producer-2") {			
			
pr2_id +=  	'<div class="left animate-slide-lefts" style="background-image: url(' + pr2[pr2b].image.url + ')"></div>';
pr2_id +=  	'<div class="right">';
pr2_id +=  		'<h3 class="animate-slide-lefts">' + pr2[pr2b].name + '</h3>';
pr2_id +=  		'<ul class="animate-slide-lefts">';
pr2_id +=  			pr2[pr2b].text;
pr2_id +=  		'</ul>';
pr2_id +=  	'</div>';			
			
        }
    }
    document.getElementById("producer-2").innerHTML = pr2_id;
	
	var pr3, pr3b, pr3_id = "";
    pr3 = json;    
    for (pr3b in pr3) { 
        if (pr3[pr3b].meta_key == "producer-3") {			
			
pr3_id +=  	'<div class="left animate-slide-lefts" style="background-image: url(' + pr3[pr3b].image.url + ')"></div>';
pr3_id +=  	'<div class="right">';
pr3_id +=  		'<h3 class="animate-slide-lefts">' + pr3[pr3b].name + '</h3>';
pr3_id +=  		'<ul class="animate-slide-lefts">';
pr3_id +=  			pr3[pr3b].text;
pr3_id +=  		'</ul>';
pr3_id +=  	'</div>';			
			
        }
    }
    document.getElementById("producer-3").innerHTML = pr3_id;
	
	var pr4, pr4b, pr4_id = "";
    pr4 = json;    
    for (pr4b in pr4) { 
        if (pr4[pr4b].meta_key == "producer-4") {			
			
pr4_id +=  	'<div class="left animate-slide-lefts" style="background-image: url(' + pr4[pr4b].image.url + ')"></div>';
pr4_id +=  	'<div class="right">';
pr4_id +=  		'<h3 class="animate-slide-lefts">' + pr4[pr4b].name + '</h3>';
pr4_id +=  		'<ul class="animate-slide-lefts">';
pr4_id +=  			pr4[pr4b].text;
pr4_id +=  		'</ul>';
pr4_id +=  	'</div>';			
			
        }
    }
    document.getElementById("producer-4").innerHTML = pr4_id;
	
	
	
	// favorite heading
	
	var fh, fh1, fh_id = "";
    fh = json;    
    for (fh1 in fh) { 
        if (fh[fh1].meta_key == "favoritemoment-intro") {			
fh_id +=  	fh[fh1].name;		
        }
    }
    document.getElementById("favorite-heading").innerHTML = fh_id;
	
	var fsh, fsh1, fsh_id = "";
    fsh = json;    
    for (fsh1 in fsh) { 
        if (fsh[fsh1].meta_key == "favoritemoment-intro") {			
fsh_id +=  	fsh[fsh1].content;		
        }
    }
    document.getElementById("favorite-subheading").innerHTML = fsh_id;
	
	
	// favorite item
	
	var fi, fi1, fi_id = "";
    fi = json;    
    for (fi1 in fi) { 
        if (fi[fi1].meta_key == "favoritemoment") {	
			
fi_id +=  	'<div class="front">';
fi_id +=  		'<a href="//www.youtube.com/watch?v=' + fi[fi1].youtube_id + '?enablejsapi&rel=0" data-lity class="fm"><img class="lazy" data-src="' + fi[fi1].image.url + '" alt="poster montage"></a>';
fi_id +=  	'</div>';
fi_id +=  	'<div class="middle">';
fi_id +=  		'<div>';
fi_id +=  			'<a href="//www.youtube.com/watch?v=' + fi[fi1].youtube_id + '?enablejsapi&rel=0" data-lity class="fm"><img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_play_btn_a824c675a9.png" alt="play"></a>';
fi_id +=  			'<a href="//www.youtube.com/watch?v=' + fi[fi1].youtube_id + '?enablejsapi&rel=0" data-lity class="fm">' + fi[fi1].name + '<br>' + fi[fi1].text + '</a>';
fi_id +=  		'</div>';
fi_id +=  	'</div>';
fi_id +=  	'<div class="back">';
fi_id +=  		'<img class="lazy" data-src="https://cdn.bcms.app/uploads/rb21_fav_bg_25a8777423.png" alt="">';
fi_id +=  	'</div>';			
			
        }
    }
     document.getElementById("favorite-item").innerHTML = fi_id;
	

	
	
	
	
	// photo credits
    
    var pc, pc2, pc_id = "";
    pc = json;
    for (pc2 in pc) {
        if (pc[pc2].meta_key == "photo-credits") {
            
 pc_id+=       pc[pc2].content;
            
        }
    }
    document.getElementById("photo-credits").innerHTML = pc_id;
	
	

	
	
    
/**************** LAZY LOAD ******************/    
    
    var lazyLoad = new LazyLoad();
    
    
    
    
/**************** SCROLL TRIGGER ******************/   
    
var $animation_elements = $('.animate-slide-right, .animate-slide-left, .animate-zoom-out, .animated-rule');
var $window = $(window);
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
    var window_offset = (window_height * .15);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position - window_offset)) {

            //Add class that the element is ready
            $element.addClass('ready');
        } else {
            $element.removeClass('ready');
        }

        //stagger in view for "one at a time animation"
        $(".ready:not(.in-view)").each(function(index) {
            $(this).delay( 50 * index ).queue(function() {
                $(this).addClass("in-view");
            });
        });
  });
}
var scrollTimeout;
$(window).on('scroll resize', function () {
    //Call animateInViewport for animations
    //Throttled to occur every .2s
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(function () {
            check_if_in_view();
            scrollTimeout = null;
        }, 50);
    }
});
	
	
	
/***************** EVENT TRACKING *******************/
    
// About - read more
document.querySelector('.about-more').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click Learn More',
        'awards_click_label': 'Intro Section'
    });
});


// Winners list
document.querySelector('#winners-list-btn').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click Full List of Winners',
        'awards_click_label': 'Bottom of Page'
    });
});
     
  
// INTRO VIDEO
document.querySelector('.play-vid').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'A Special Welcome from H.E.R.'
    });
});
	
	
// WINNERS
document.querySelector('.w1a').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'Song of the Year - SAY SO'
    });
});
document.querySelector('.w1b1').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'A SPECIAL MESSAGE FROM DOJA CAT'
    });
});
document.querySelector('.w1b2').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'A SPECIAL MESSAGE FROM DOJA CAT'
    });
});
document.querySelector('.w2a').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'Songwriter of the Year - RODDY RICCH'
    });
});
document.querySelector('.w2b1').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'A SPECIAL MESSAGE FROM RODDY RICCH'
    });
});
document.querySelector('.w2b2').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'A SPECIAL MESSAGE FROM RODDY RICCH'
    });
});
document.querySelector('.w3a').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'Producer of the Year - METRO BOOMIN'
    });
});
document.querySelector('.w3b1').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'A SPECIAL MESSAGE FROM METRO BOOMIN'
    });
});
document.querySelector('.w3b2').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'A SPECIAL MESSAGE FROM METRO BOOMIN'
    });
});
document.querySelector('.w4b1').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'A SPECIAL MESSAGE FROM SONGS OF KOBALT MUSIC PUBLISHING'
    });
});
document.querySelector('.w4b2').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'A SPECIAL MESSAGE FROM SONGS OF KOBALT MUSIC PUBLISHING'
    });
});
document.querySelector('.h1b1').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'HIWTS - Eric Bellinger “On Chill”'
    });
});
document.querySelector('.h1b2').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'HIWTS - Eric Bellinger “On Chill”'
    });
});
document.querySelector('.h2b1').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'HIWTS - Jahaan Sweet “BEST ON EARTH”'
    });
});
document.querySelector('.h2b2').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'HIWTS - Jahaan Sweet “BEST ON EARTH”'
    });
});
document.querySelector('.h3b1').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'HIWTS - Micah Powell “P*$$y Fairy (OTW)”'
    });
});
document.querySelector('.h3b2').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'HIWTS - Micah Powell “P*$$y Fairy (OTW)”'
    });
});
document.querySelector('.h4b1').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'HIWTS - Tiara Thomas “Slide”'
    });
});
document.querySelector('.h4b2').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'HIWTS - Tiara Thomas “Slide”'
    });
});
	
document.querySelector('.ft1').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'First Time Winner 24kGoldn'
    });
});
document.querySelector('.ft2').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'First Time Winner Austin “Ayo” Owens'
    });
});
document.querySelector('.ft3').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'First Time Winner BIA'
    });
});
document.querySelector('.ft4').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'First Time Winner Don P'
    });
});
document.querySelector('.ft5').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'First Time Winner Frank Ski'
    });
});
document.querySelector('.ft6').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'First Time Winner G. Ry'
    });
});
document.querySelector('.ft7').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'First Time Winner H.E.R.'
    });
});
document.querySelector('.ft8').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'First Time Winner James “Keyz” Foye'
    });
});
document.querySelector('.ft9').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'First Time Winner LT Moe'
    });
});
document.querySelector('.ft10').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'First Time Winner Russ'
    });
});
	
document.querySelector('.r3a').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'A SPECIAL MESSAGE FROM JUICE WRLD’S MOTHER CARMELLA WALLACE'
    });
});
document.querySelector('.r4a').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'A SPECIAL TRIBUTE TO CHUCKY THOMPSON'
    });
});
	
document.querySelector('.fm').addEventListener('click', event => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'bmi_awards_click',
        'awards_show_name': 'BMI R&B Hip Hop Awards',
        'awards_click_action': 'Click YouTube Video Link',
        'awards_click_label': 'My Favorite Moment'
    });
});
	




}); // end