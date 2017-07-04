



/* ControlTag Loader for Guardian 2196ddf0-947c-45ec-9b0d-0a82fb280cb8 */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.24.5","schema_version":3},"confid":"JVZiE3vn","context_terms":[],"publisher":{"name":"Guardian","active":true,"uuid":"2196ddf0-947c-45ec-9b0d-0a82fb280cb8","version_bucket":"stable","id":1606},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"max_segments":200,"control_tag_pixel_throttle":100,"fingerprint":true,"user_data_timing":"load","use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","first_party_uid":false,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":true,"context_terms":false,"dfp_premium":true},"prioritized_segments":["pd4qbbfgm","pf7b390qs","pf69bc5ej","pfbydt1la","pdgt3njnf","qch545k51","pc7rdizb1","pc5vehxke","pua66e5js","qugzk81u4","pc34lrflh","pc5nbdjj6","pez2d3d65","pc3yb2jnr","pejva6oth","p3gny4tdd","pc3qvpl05","pc4yr3v68","pddsg4s8s","pddoepmg9","qhwl1waww","pc5w36i05","pddlukb05","qa64xt83u","pejrd6nks","pitx85x39","pc4zpkoug","pddkdvlsy","pc5od6yai","pdgs7v63v","pn0ypwdx3","pc4rbl7c1","pc30v552x","pdcvwqmj9","pdr1oq8g2","pg2fdclf7","qrxw120ot","p15qshyrq","pddqecujr","pc40t9co0","pd8ji32s2","pejmmlt9p","pd75vtkvb","pgfu0fcgh","pdcg4ot2c","pc4mk6ami","pc0w6lsxy","psfta56j4","pzdtmvivk","o9d2ttnn8","pdckv4cas","pc9nwfl88","phu475oqv","pg2ihcbve","proqwo9aq","pc4n3hzc2","pej1rgbfz","pg7frotfj","pekj6xcey","pc5skfqq4","rb73g5let","pm07exsjk","rllhuy9i5","rok9lxz5l","rok8ybgfw","rok75au8c","rkyfmualg","rkyfiot5c","rkyfdjrto","rkye97iff","rkye7e0u0","rkx76klvc","rkx3unkel","phy8dbm0s","pd7rurt4z","rg2zcq881","pvrdjmqvf","pdvufedsd","rfy3yv32c","rgvq9l0ve","rgy2obuqz","rgq2qcj21","rb8co19ne","pc5kmruvq","rc4mcntmw","pqkplf0be","pnxmcawyi","o91ikbu3n","o7ucof8q1","pacsezf1a","pfb8e3ig6","o900akem3","qo2inol9r","q6lt072o3","q6o9xwghr","q1np525aa","q1cl4jd8u","qvw2tojcz","q1cif7xzh","q0nwf5o4n","penl4dfdk","qzy7xnyhh","o900rzsy5","qsxx9paua","o8t9ae9ur","pzenpplk3","qownpnf5e","qbebqdz3p","qjop0o93c","o7t9e8n50","pacqhvg0a","pf630mmbe","qic2qbx96","qib7zc5w0","qib7uzaqc","pdwol2qtw","o9kz6a44e","phqiyc6hy","qf06kviq6","qf06fdih8","qf06l2ew5","peobygmnj","pc5jz538h","qgc274x49","qgc3fvlwi","qgc3bk2wu","qgc2z6qdk","p6skgiv6q","p7jt2meml","qbacd0yyf","o1n8fxn6j","qehuruteq","p6gj0bwpw","pdr05l94c","o85u0ixyg","o8t8m33zj","qbqiiw2yv","qci27ltoe","o9d15sc10","o9k7dba0f","o980l8rw2","pti6nfjwb","o9814bbkr","o9d08i9e0","o9kv0nirv","p28ychl3o","pf69xxbie","pzpdpq50t","pwe66gnsj","pkp0ih0rc","piivzraa1","ptz4ibvtn","puzw810sx","pf6yq8g55","pf6ykx980","pf6yobv9a","psjp17hcn","pf7ywv06y","psjpxlswv","qdaw20brf","pq0rh070l","pokgelbhk","pejm3tokw","pf7je666b","o7x4flan5","o9hrfhrbb","pns9m3e12","pm9o9oplh","pf6o9hmkv","plprbhhko","pf78uuqp9","pejwioqwn","pjmtfs000","piiqugz58","pjh1q2nu5","pgypmsgn3","phvgaoeg7","pen73cot7","pacq5etbx","pgypp7moc","o9014ry8e","o90ybs3cz","o7x58k35t","o9hsvqzmh","o9d3g5y8j","pf7ada0f3","o7tnag02m","pdf5716xx","o8q817ljs","o98sacjda","o9la4hbc7","pacpk24tt","o99sxp0ek","o9hrs31q0","o9k71oieo","o901c5kja","o9kx7ipge","o9hpuy6yx","o983hpg7l","o9dc1uetx","o982gxw80","pacnk0nnb","o98yl02f8","o99oztuyy","o7trw3wm6","o983lnmef","pacptlrbv","o98y7aqld","o982xjq8s","o98z64ojz","o98sy245e","o98zeo2gg","o9d4iai5q","o9hqqhuhq","o98w47bej","o90yif1p1","o98zucgnm","o98tjjazh","o981tagvy","o91i4xwws","o9803wshw","o980d6bss","o98wt05fc","o90zqjd4u","o981d4u31","o98wbvmu5","o98347a4n","o99tnhus8","o90zfgla7","o980x7vl6","o99qk17ns","pdvmffa62","pdw0ntmqs","pdwozd0oq","o99od5ayz","pf3nvob3x","pf685gwyd","pf69ikaox","pf7vh80dw","pf7vtdfnc","pf8b46ehq","pgayoajls","pgbnhqfcz","pgx9xwn0t","pg8w6vlia","pf62rumx5","pfrhy56qe","pge5jedtz","pg7b5eojd","phupxwgrh","phazhlez1","phyl9nbp9","piiruh2d1","pimlaiwt6","piml0kyjv","pimmapn1c","piquo8r95","pirae8sgr","pirak431b","piu5jl1k3","piu55vjzt","pja4e8v1t","pjh1tpc2v","pj98zb3aw","pj99a383d","pj99jvtnd","pkaeybgui","pj6jhw17h","pimlgnofl","pketd2fs8","pkufk917o","pkyj2hii2","pkym60wwt","pk1co5ai7","pkedj6or1","pllbroto5","plljun0n8","plljwka5b","plpleewk5","plmd4naf5","plyfdpqz9","pmdcltgca","pf7chzo0p","pmhgf9vl6","pkplsqlt1","pmpzjhn04","pns5wz8nq","pnw07um1b","plle9u1dd","pllfdaymb","pn5cs9tev","pn9d2bj52","pow4zhk9k","pos6k0l5k","pqj8nnpni","pq8jz9xax","pq8j3ftvp","pq8xkui1f","pq8zdloub","prcdx4ead","prrtob9cz","prrzw7mw2","prrz9czjh","prr0falpt","prwc6lgok","pkymxasdv","plmea5gai","phykmx56w","pmpvu8bwl","pkpmupqfd","qk0hp06nn","pltc88vx0","pf659ci8m","pqj3dy4jc","pkpl16ncf","pmpo75i1v","prno0tcac","prorcbl9i","pk158jinw","prnmm44xt","pimpzyu1g","pqv6k42he","psrlvrnjk","ps745zv06","pf6ywryhc","pf6yt2suu","ptkat24tq","purp52uv6","pu2nmeb0r","pu2ot7z2w","pu2ow1trx","q2usdg7k4","pu3kt1kl3","pwq6d7yv0","pwq9urrmb","pxairj2ny","px6k4ls27","qv8jmv37x","py2ew47hr","qpup0puzr","py2e0tkte","pzloqwq4l","ql3sp8pdz","pzpgcwewo","pzpgib6sw","pzpgqz76v","pzp14ku1k","pzp4bwaje","pzp4oqpmd","pzqhjdkwo","pztevyzcz","p0xy1adsa","p0xy6wbg8","p0xy9hfaj","p0xhhgoee","p1cxxlu52","p107efqf7","rtueqqzhn","p107r5iiv","pkudodb6f","p2g2qgq01","p2ko8enj7","qu8wxynyp","p2lrlfzqf","qtlrmcmnx","p2lro4hi2","p2lryefg7","p2st035vr","p30f3cf02","p30f8mhdn","p30gbxmw0","p30ggyiba","p30gjugds","p30gn4zo2","p38ygl7b9","p38ytto2l","p4tcwfsd1","p4tc0b1ly","p4tc3py3v","p4tc7r6wm","p4w8xqj92","p40z1to2r","qy8iyb1vr","p5k3zn5jy","p477esitn","p5k35lke9","rcr3r8yod","p5k38o7tv","q8k1fuemx","p5k4g4tp5","q79cm7v0w","p5k4l1rhn","q8k1bys5j","p5k4qhjns","rbzzl49u8","p5k4ybkcl","qbwftl0uu","qbwd2odla","p5s4ym4ge","p5s5it39n","p5s6ymtrb","p5vvbz0tq","p6bqoebyr","p6pp5jlfi","p6rki224q","p6rkxvy54","p6rk3vhem","p6rk9e5wh","p6rlbzz7c","p5vyzii4h","p6sjoab3f","pxt3w6jl8","p7juce3xn","p7jui1pah","p7junmh2y","p7wahwpew","p70doy94w","p77e1fpor","p8rth0wnq","p8b88zh39","p74dei2uu","p74df8n3h","qazj8raea","qbebj4zv0","qbfdv5tt1","qb50nnpay","qci1yskzm","qcq2ikxd1","qcyw4qjg6","qd9vrexxm","p6gxrubh2","qfta7t3bf","qfx7wsqd2","qhj98y7pa","qe98kxfr8","qe99fc43u","qicoh5duw","qicol5a4l","qci174l4l","qjn8nfsa1","psw9mvjlr","qv8zyddvp","qjssqqpuv","qjsysu4cz","qk3iqq3gg","qk4nhdahi","qk7fiaw44","qk7q0oxad","qlfcfnzxx","ql4guzuwa","ql4g068kf","ql4g3ndkb","ql4g59gul","ql4g8azwb","ql4hhl4or","ql4hjlagl","ql4h6xuhv","ql4icwkkv","ql4ige80v","ql4iiebez","ql4ikrw6g","ql4im5etl","ql4ip12j3","ql4irvbrb","ql4jgqo51","ql4jnfkyt","ql4jpyuhd","ql4ju4a3r","qidbojxay","q5xs0r8qd","ql4dppcn7","q8k1zfee1","p5k4bxf3i","ql4dm9smx","qoayrr9os","qoizpg1qu","qnbzr2ubq","qnfwjwakc","qnbr1mbqc","qoizsag07","qoizuu8lm","qoizx3cpf","qoiz0pzju","qoiz3whdu","qoi1iht5q","qoi1vvdgw","qoi10j4wz","qoi146i84","qo6pk3blp","qo7d4nnis","qo7d9dv9v","qo996ec7x","qo9996mr3","qpaab5xnq","qpaadsfqw","qpaaha1ct","qpaako1d1","qpaamn2rd","qpaaoax9m","qpaap2uo8","qpaatfpim","qpaav24pa","qpaay64lp","qpaa2c0h9","qpabdzfiv","qpabghxqs","qpabig5a3","qpabj7i6i","qpabl2sz3","qpmpvxt14","qpmpyeca9","qpmpzwi62","qpmp1re5t","qpqkbtrnp","qpuqf46ba","qqf91vf3o","qqh0ujuiq","qo68q0aup","qpun72ndb","qo7gb8ob6","qo7f1rm8o","qprjjxh4z","qnj7s5fc7","qqjrnswgc","qqql4cajg","qqqmhczde","qqrcg81us","qqrcphmko","qqrcwfrl6","qqrej1rm4","qqreqfgfw","qqrew8zr6","qqre71wv4","qqrfeeub3","qqrf6lr9x","qqrgl8lqd","qqrgxqj6l","qqrg63e7w","qqrhgmk6j","qqromrlh3","qqro0z2xp","qqrqt4yfx","qqrq4hfs4","qqrrc3vjz","qqrrkf61f","qqrrq751y","qqrru2m6e","qqrr1kt2b","qqrr86tgf","qqrsc54l5","qi1cioqyn","qqrtq6kj4","qqrtu6pzh","qqrt2bh9q","qqrt7b9gk","qqrum07eh","qqruy2bze","qqru2wrud","qqrvhfcqv","qqrv1wo5a","qk03z720a","qrd3b5c9f","qrd3ge9nq","qrd3ibw1w","qreiejxs8","qrf8js3z3","qrlpdt8l9","qrlphjph9","qrmdglne0","qrmdiifco","qrmdkeoqq","qrmdmgg3t","qrmdoj0bo","qrmdqcy75","qrmdssnt2","qrmduv5gc","qrmdw9nhn","qrmd2d5hk","qrmd4f8uf","qrmd6nmfj","pev9if6eq","qr1nfmoqw","qpq9kj4rs","qtgnejfrb","qtkykvrvq","qp14ux4gc","quc23gnxg","qudb9kswk","qudh5p25p","qugyquc5c","qug2k352k","qug5qgew3","qu5jkzumf","qvc96xuq3","qv5pysatf","qv5p13kjn","rlds7dwf2","qwo6peref","qparuma6s","qxb4ouc0r","qxcaye2dz","qxca38b4m","qxcn4r9ho","qx4jfe3ke","qx4jzmkxb","qx4ke0hul","qsyx7krsn","qh1dj65zg","qybpmw89b","qykcurfhk","qo3yarimo","qo3tultpi","qzz6pblum","q0j5265lp","q0n89mxg2","q0rdbcxzg","q1a3rrz6s","q1cgs07s8","qo3x2eltf","qo3t4yme0","q1ci1n8tk","qqrdeu7zb","q2zcfazs1","qs6bmcupo","quygbjri3","qsebgskv2","q3vdmi9w7","q3uvgkvbt","qsyya30yn","q4aolunkd","q4a8rlhp6","q4a8u45sd","q4a8x00ha","q4a83yoez","q4a86ep1r","q4a88aox9","q4a89r259","q4a9bgglg","ql4dr789t","ql4ed2575","ql4ektthz","ql4emdvgj","ql4en31vt","ql4ep6f0v","q4mdtir8c","q4okmpn7a","q4pu7fgj0","q4qodgjys","q4qopxj7k","q4qoszbf0","q4qou48fq","q4qowqt0z","q4qo2pi7m","q4qo7j21w","q4qpe6sj0","q4qpg0y64","q4qpi6ckk","q4qpk1lh3","q4qpm89o0","q4qpo3bn2","pen7skghp","q47ojhn9k","paw5id3en","q5u4vswmu","q5wt2hus9","q5wwrwksb","q5ywwjfg8","q5yw2x10a","q5y2i8r2h","q54mizzoe","q56an6qkq","q57g89lvi","q6qdkcya9","q6qu0vbzp","q6qzdozs9","q6ud1kc3g","q60dj3ero","q61kdhodr","q7est6nfe","quedhd693","q7lvwqtlf","q7t3w66l8","q75ylrwez","q79exovf0","q7iy0o5ds","q79v466kp","q79w8xwgd","q79xyexk5","q79ym4dz8","q790fr5c4","q8aawcnaa","q1ezbmb99","qo3t8u1zs","qo3uqx77v","qo3xvbta6","qo3xmn55g","q8w7mcxf1","q85p2aoun","q9as0paa2","q9atf2314","qz26afl2w","qz3eo7geb","qz3er0si6","qz3et3wxf","qo3vcuzys","qo3xyw654","qmwx7jhn7","qn8i6a14w","q9xth3roh","qpatlei9y","rapj5025z","rardd4491","rbgj26xy4","rbgj60idm","rbgkbtts3","rbp0bfof5","rbz6mbubb","qqrby5hcr","rcwpw31nq","q6262jmp1","qo3xjgjim","qo3tbyxz3","rcxoorhq1","qo3xsng4k","qo3uj68f9","rc5psu4yu","rbgcxgrcq","rdrtyi46x","rdrxf3x1q","rdvohx559","rdvwh5ajw","pzhi8w4ex","rfb97pdof","rfgcezp18","rf3uc0rqk","rf3ugqolm","qywgmljux","qo3wasyxj","rf633dgw8","rf63596mi","rf6389sgg","rf64ccmik","rf64htcaw","rgc2ium3h","rgms1mmda","rgms4nw26","rgms7vg8f","rga1x82na","rgqtpslw5","rgqtuzia5","rgvjbgbnl","rg2mxekrf","rim5lwdk2","rg3kcf3pc","rhqo6kh0b","rhsapi0sx","rhsa9hev8","rhsbqtqbv","rhsb7puxn","rhvjhpz1q","rhvj86o4h","rhwfujtk5","rhwf20rkz","rh4eegt73","rh6yq5mfa","rh7f90evk","rh7h8o88p","rh7qz6rp1","rh8e0c9v5","ria5ccxo4","rib9qnfad","rib908g9c","rifru4vfk","rij294rjf","ri1x20ydn","ri1ybznod","ri1yjjbo5","ri1yr3u3p","ri1ywyt8c","ri2vrqtwx","rjen14ynf","rg2zdrgj9","rg2zgwdoz","rg2zfqtj2","rg2zeo9om","rjutzplv6","q8ewgp4pz","rklp63btc","rkxp6k66m","rkxqdanng","rkxr6vozg","rkxs58eun","rkxtplbw0","rkxtvd1mx","rkyfpttw6","rleafr84z","rlqb7pnks","rlqcxolnm","rlqc2jrct","rlqc7f70a","rlqdp83od","rlqebrjgm","rlqeqmni5","rgbpmr0xe","rl3bnqbyk","rmc7wxyiv","rmd9bnq31","rmd9hpkbs","rno42ppa3","rnyli205l","ros7oqxqa","rpcgwoh0o","ro40b8cei","rpwus8nlt","rnpwy5eze","rrf7wcso7","qjxrhhm4v","rrpoi457t","rr9r7h3i2","rsc8ryptk","rsc9hptyd","rs4ralw4j","rs4rpac8h","rs9akr92b","rtrqy6i9b","rtruhsg42","rtzweskls","rtzxg6byn","psjor97pr","qparoncnc","posms8vno","rt4pr3f2h","ruiyofr2n","ruj01wlb8","rvkbkxq6o","rvq3olize","rtrs1u8wt","rwayd8jto","rwh3i8dje","rx130e6xk","rytoi7sb5"],"realtime_segments":[{"id":"qtlrmcmnx","test":["and",["and",["or",["intersects","$page_attr_keywordIds:,",["social-care-network/series/guide-to-occupational-therapy"]]]]]},{"id":"p2lryefg7","test":["and",["and",["or",["intersects","$page_attr_contentType",["network front"]]]]]},{"id":"q0nwf5o4n","test":["and",["and",["or",["intersects","$page_attr_pageid",["/education/2016/aug/23/how-to-find-accommodation-after-going-through-clearing"]]]]]},{"id":"qrd3ge9nq","test":["and",["and",["or",["or","$event_KisssW86"],["or","$event_KisvjODM"],["or","$event_KiWLWXBj"],["or","$event_Kiss3Nsj"],["or","$event_KisuOIsH"],["or","$event_KistoL8T"],["or","$event_Kissg9Kq"],["or","$event_KisubO1a"]]]]},{"id":"qo7d4nnis","test":["and",["and",["or",[]]]]},{"id":"qzy7xnyhh","test":["and",["and",["or",["intersects","$page_attr_TopicIds:,",["clearing","a-levels","a-levels,exams,education,uk news,sixth form,schools","advice for students,students,higher education,education,sixth form,a-levels,schools,exams,further education","teacher network,education,exams,a-levels,gcses,schools,sixth form,secondary schools"]]]]]},{"id":"qo7d9dv9v","test":["and",["and",["or",[]]]]},{"id":"p2lro4hi2","test":["and",["and",["or",["intersects","$user_attr_cookie_s_campaign",["ema_632"]]]]]},{"id":"o8q817ljs","test":["and",["and",["or",["intersects","$page_attr_edition",["au"]]]]]},{"id":"qrd3ibw1w","test":["and",["and",["or",["or","$event_KiWK7AO0"]]]]},{"id":"o7trw3wm6","test":["and",["and",["or",["intersects","$page_attr_keywordIds:,",["sport/skiing","sport/winter-olympics","sport/winter-olympics-2014","sport/winter-olympics-2014-bobsleigh","sport/winter-olympics-2014-figure-skating","sport/winter-olympics-2014-ice-hockey","sport/winter-olympics-2014-nordic-combined","sport/winter-olympics-2014-skeleton","sport/winter-paralympics-2014","travel/chalets","travel/skiing","travel/snowboarding","travel/winter-sports"]]]]]},{"id":"p2lrlfzqf","test":["and",["and",["or",["intersects","$user_attr_cookie_s_campaign",["emcneweml6619i2"]]]]]},{"id":"qpqkbtrnp","test":["and",["and",["or",["intersects","$page_attr_pageTaggingData.Job Function",["secretarial"]],["intersects","$page_attr_pageTaggingData.recruiter",["amanda newell ltd","directors secretaries","knightsbridge recruitment","office concierge","sorted personal management"]]]]]},{"id":"qpup0puzr","test":["or",["and",["or",["intersects","$page_attr_pageid",["education/2009/may/10/university-guide-conservatoire-dance-drama","education/2009/may/10/universityguide-aberystwyth-uni","education/2009/may/10/universityguide-anglia-ruskin-uni","education/2009/may/10/universityguide-aston","education/2009/may/10/universityguide-bangor-uni","education/2009/may/10/universityguide-bath-spa-uni","education/2009/may/10/universityguide-birkbeck-uni-london","education/2009/may/10/universityguide-birmingham-city-uni","education/2009/may/10/universityguide-bournemouth-uni","education/2009/may/10/universityguide-brunel-uni","education/2009/may/10/universityguide-buckinghamshire-new-uni","education/2009/may/10/universityguide-canterbury-christ-church-uni","education/2009/may/10/universityguide-cardiff-uni","education/2009/may/10/universityguide-city-uni-london","education/2009/may/10/universityguide-coventry-uni","education/2009/may/10/universityguide-de-montfort-uni","education/2009/may/10/universityguide-edge-hill-uni","education/2009/may/10/universityguide-edinburgh-napier-uni","education/2009/may/10/universityguide-glasgow-caledonian-uni","education/2009/may/10/universityguide-glyndwr-uni","education/2009/may/10/universityguide-goldsmiths-uni-london","education/2009/may/10/universityguide-guildhall-school-music-drama","education/2009/may/10/universityguide-heriot-watt-uni","education/2009/may/10/universityguide-imperial-coll-london","education/2009/may/10/universityguide-keele-uni","education/2009/may/10/universityguide-king-s-coll-london","education/2009/may/10/universityguide-kingston-uni","education/2009/may/10/universityguide-lancaster-uni","education/2009/may/10/universityguide-leeds-metropolitan-uni","education/2009/may/10/universityguide-leeds-trinity-all-saints","education/2009/may/10/universityguide-liverpool-hope-uni","education/2009/may/10/universityguide-liverpool-john-moores-uni","education/2009/may/10/universityguide-london-metropolitan-uni","education/2009/may/10/universityguide-london-school-economics-political-science","education/2009/may/10/universityguide-london-south-bank-uni","education/2009/may/10/universityguide-loughborough-uni","education/2009/may/10/universityguide-manchester-metropolitan-uni","education/2009/may/10/universityguide-middlesex-uni","education/2009/may/10/universityguide-newcastle-uni","education/2009/may/10/universityguide-newman-uc-birmingham","education/2009/may/10/universityguide-northumbria-uni","education/2009/may/10/universityguide-nottingham-trent-uni","education/2009/may/10/universityguide-open-uni","education/2009/may/10/universityguide-oxford-brookes-uni","education/2009/may/10/universityguide-queen-margaret-uni-edinburgh","education/2009/may/10/universityguide-queen-mary-uni-london","education/2009/may/10/universityguide-queen-s-uni-belfast","education/2009/may/10/universityguide-robert-gordon-uni","education/2009/may/10/universityguide-roehampton-uni","education/2009/may/10/universityguide-royal-academy-music","education/2009/may/10/universityguide-royal-coll-music","education/2009/may/10/universityguide-royal-holloway-uni-london","education/2009/may/10/universityguide-royal-welsh-coll-music-drama","education/2009/may/10/universityguide-school-oriental-african-studies","education/2009/may/10/universityguide-sheffield-hallam-uni","education/2009/may/10/universityguide-southampton-solent-uni","education/2009/may/10/universityguide-st-mary-s-uc-belfast","education/2009/may/10/universityguide-st-mary-s-uc-twickenham","education/2009/may/10/universityguide-staffordshire-uni","education/2009/may/10/universityguide-stirling","education/2009/may/10/universityguide-swansea-uni","education/2009/may/10/universityguide-teesside-uni","education/2009/may/10/universityguide-thames-valley-uni","education/2009/may/10/universityguide-uc-falmouth-dartington-coll-arts","education/2009/may/10/universityguide-uc-london","education/2009/may/10/universityguide-uc-plymouth-st-mark-st-john","education/2009/may/10/universityguide-uhi-millennium-institute","education/2009/may/10/universityguide-uni-aberdeen","education/2009/may/10/universityguide-uni-abertay-dundee","education/2009/may/10/universityguide-uni-arts-london","education/2009/may/10/universityguide-uni-bath","education/2009/may/10/universityguide-uni-bedfordshire","education/2009/may/10/universityguide-uni-birmingham","education/2009/may/10/universityguide-uni-bolton","education/2009/may/10/universityguide-uni-bradford","education/2009/may/10/universityguide-uni-brighton","education/2009/may/10/universityguide-uni-bristol","education/2009/may/10/universityguide-uni-buckingham","education/2009/may/10/universityguide-uni-cambridge","education/2009/may/10/universityguide-uni-central-lancashire","education/2009/may/10/universityguide-uni-chester","education/2009/may/10/universityguide-uni-chichester","education/2009/may/10/universityguide-uni-cumbria","education/2009/may/10/universityguide-uni-derby","education/2009/may/10/universityguide-uni-dundee","education/2009/may/10/universityguide-uni-durham","education/2009/may/10/universityguide-uni-east-anglia","education/2009/may/10/universityguide-uni-east-london","education/2009/may/10/universityguide-uni-edinburgh","education/2009/may/10/universityguide-uni-essex","education/2009/may/10/universityguide-uni-exeter","education/2009/may/10/universityguide-uni-for-creative-arts","education/2009/may/10/universityguide-uni-glasgow","education/2009/may/10/universityguide-uni-gloucestershire","education/2009/may/10/universityguide-uni-greenwich","education/2009/may/10/universityguide-uni-hertfordshire","education/2009/may/10/universityguide-uni-huddersfield","education/2009/may/10/universityguide-uni-hull","education/2009/may/10/universityguide-uni-kent","education/2009/may/10/universityguide-uni-leeds"]]]],["or",["and",["or",["intersects","$page_attr_keywordIds:,",["education-universityguide/education-universityguide","education/universityguide"]]]],["and",["or",["intersects","$page_attr_pageid",["education/2009/may/10/universityguide-uni-kent","education/2009/may/10/universityguide-uni-leeds","education/2009/may/10/universityguide-uni-leicester","education/2009/may/10/universityguide-uni-lincoln","education/2009/may/10/universityguide-uni-liverpool","education/2009/may/10/universityguide-uni-manchester","education/2009/may/10/universityguide-uni-northampton","education/2009/may/10/universityguide-uni-nottingham","education/2009/may/10/universityguide-uni-oxford","education/2009/may/10/universityguide-uni-plymouth","education/2009/may/10/universityguide-uni-portsmouth","education/2009/may/10/universityguide-uni-reading","education/2009/may/10/universityguide-uni-salford","education/2009/may/10/universityguide-uni-sheffield","education/2009/may/10/universityguide-uni-southampton","education/2009/may/10/universityguide-uni-st-andrews","education/2009/may/10/universityguide-uni-strathclyde","education/2009/may/10/universityguide-uni-sunderland","education/2009/may/10/universityguide-uni-surrey","education/2009/may/10/universityguide-uni-sussex","education/2009/may/10/universityguide-uni-ulster","education/2009/may/10/universityguide-uni-wales-institute-cardiff","education/2009/may/10/universityguide-uni-wales-lampeter","education/2009/may/10/universityguide-uni-warwick","education/2009/may/10/universityguide-uni-west-england-bristol","education/2009/may/10/universityguide-uni-west-scotland","education/2009/may/10/universityguide-uni-westminster","education/2009/may/10/universityguide-uni-winchester","education/2009/may/10/universityguide-uni-wolverhampton","education/2009/may/10/universityguide-uni-worcester","education/2009/may/10/universityguide-uni-york"]]]]]]},{"id":"qrd3b5c9f","test":["and",["and",["or",["or","$event_KisqhLjP"],["or","$event_KiWLIBjz"],["or","$event_KisnCRZj"],["or","$event_Kisnh7x8"],["or","$event_KisqvxpJ"],["or","$event_Kisn2L9w"],["or","$event_KispuSBR"],["or","$event_KisrjH5d"],["or","$event_KisqDOsv"],["or","$event_KisqS1im"],["or","$event_KisrUVUh"],["or","$event_Kisq8MoL"]]]]},{"id":"qrlpdt8l9","test":["and",["and",["or",["intersects","$page_attr_studyType",["postgraduate"]]]]]},{"id":"rtueqqzhn","test":["or",["and",["or",["contains","$page_attr_keywordIds:,",["education/universityguide"]]]],["or",["and",["or",["contains","$page_attr_pageid",["education/ng-interactive/2017/may/16/university-league-tables-2018"]]]],["or",["and",["or",["contains","$page_attr_pageid",["education/ng-interactive/2017/may/16/university-guide-2018"]]]],["and",["or",["contains","$page_attr_TopicIds:,",["University guide"]]]]]]]}],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"//connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"//apiservices.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"//link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"//apiservices.krxd.net/um","click":"//apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","is_optout":"//beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","set_optin":"//apiservices.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"site":{"name":"Guardian NextGen","cap":255,"id":20761,"organization_id":1606,"uid":"JVZiE3vn"},"tags":[{"id":30377,"name":"FB MMCR Retargeting","content":"<script>\n!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\nn.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\ndocument,'script','//connect.facebook.net/en_US/fbevents.js');\n\nfbq('init', '279880532344561');\nfbq('track', 'PageView');\n</script>","target":null,"target_action":"append","timing":"asap","method":"document","priority":null,"template_replacement":true,"internal":false,"criteria":[]},{"id":21118,"name":"Technographic Data provider tag","content":"<script>\r\n// this tag is intentionally blank\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":true,"criteria":["and",["and",["or",["notContains","$url","https://"]],["and",["<=","$frequency",3]]]]},{"id":21119,"name":"Krux Geographic Data provider tag","content":"","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":true,"criteria":["and",["and",["or",["notContains","$url","https://"]],["and",["<=","$frequency",3]]]]},{"id":21122,"name":"DTC NextGen","content":"<script>\r\n(function(){\r\n\tKrux('scrape', { 'page_attr_pageid': {js_global: \"guardian.config.page.pageId\"}});\r\n\tKrux('scrape', { 'page_attr_sectionid': {js_global: \"guardian.config.page.section\"}});\r\n\tKrux('scrape', { 'page_attr_edition': {js_global: \"guardian.config.page.edition\"}});\r\n\tKrux('scrape', { 'page_attr_keywordIds': {js_global: \"guardian.config.page.keywordIds\"}});\r\n\tKrux('scrape', { 'page_attr_contentType': {js_global: \"guardian.config.page.contentType\"}});\r\n\tKrux('scrape', { 'page_attr_authorIds': {js_global: \"guardian.config.page.authorIds\"}});\r\n\tKrux('scrape', { 'user_attr_cookie_s_campaign': {cookie: 's_campaign'}});\r\n\tKrux('scrape', { 'page_attr_TopicIds': {meta_name: 'keywords'}});\r\n \tKrux('set', 'page_attr_omniture_prop13', typeof window.s =='object' && window.s['prop13']);\r\n\tKrux('set', 'page_attr_omniture_prop16', typeof window.s =='object' && window.s['prop16']);\r\n}());\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":true,"criteria":[]},{"id":21124,"name":"Liveramp User Match","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;      \r\n  }\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["or",["notContains","$url","https://"]],["and",["<=","$frequency",3]]]]},{"id":21127,"name":"Visual DNA provider tag","content":"<script>new Image().src = 'https://usermatch.krxd.net/um/v2?partner=vdna';</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":false,"internal":true,"criteria":["and",["and",["or",["notContains","$url","https://"]],["and",["<=","$frequency",3]]]]},{"id":21128,"name":"eXelate Media provider tag","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: \"//loadm.exelator.com/load\",\r\n      data: {\r\n          _kdpid: 'e4942ff0-4070-4896-a7ef-e6a5a30ce9f9',\r\n          buid: kuid,\r\n          p: '204',\r\n          g: '270',\r\n          j: '0'\r\n      }});\r\n  }\r\n  })();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["or",["notContains","$url","https://"]],["and",["<=","$frequency",3]]]]},{"id":21135,"name":"Https check","content":"<script>\r\n// Using Globals __exst.prtcl to produce page attribute __exst.prtcl\r\nKrux('scrape', { 'page_attr___exst.prtcl': {js_global: \"__exst.prtcl\"}});\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":21139,"name":"Madison Logic provider tag","content":"","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["or",["notContains","$url","https://"]],["and",["<=","$frequency",3]]]]},{"id":21141,"name":"Gigya provider tag","content":"","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["or",["notContains","$url","https://"]],["and",["<=","$frequency",3]]]]},{"id":21147,"name":"GUID capture for UberID","content":"<script>\r\n(function() {\r\n\tvar login;\r\n  // Using Omniture prop2 to produce user attribute omniture_prop2\r\n  \t\tKrux('set', 'user_attr_omniture_prop2', typeof window.s =='object' && window.s['prop2']);\r\n  \t\tlogin = typeof window.s =='object' && window.s['prop2'] ? 'Yes' : 'No';\r\n  \t\tKrux('set','user_attr_user_logged_in', login);\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":21151,"name":"Referrer","content":"<script>\r\n(function() {\r\n  // Using Globals F09828._rsiYa to produce page attribute referrer\r\n  Krux('scrape', { 'page_attr_referrer': {js_global: \"F09828._rsiYa\"}});\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":21157,"name":"IXI Digital (Network) provider tag","content":"<script>\r\n    // Empty by design.\r\n</script>\r\n","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21158,"name":"Dun & Bradstreet (via Neustar) provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21159,"name":"Experian Premium provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21160,"name":"Experian Standard provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":21161,"name":"Krux Geo Data","content":"<script>\r\n(function() {\r\n\r\n    /* Data Transfer Code for telegraph */\r\n    Krux(\"set\", {\r\n        \"user_attr_dma\": Krux('get', 'user_attr_kx_geo_dma')\r\n    });\r\n    Krux(\"set\", {\r\n        \"user_attr_country\": Krux('get', 'user_attr_kx_geo_country')\r\n    });\r\n    Krux(\"set\", {\r\n        \"user_attr_region\": Krux('get', 'user_attr_kx_geo_region')\r\n    });\r\n\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":21162,"name":"Krux Track Social","content":"<script type=\"text/javascript\">Krux('social.init');</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":21164,"name":"Nielsen Audience Segments (via Exelate) provider t","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":30379,"name":"FB MMCR Segmentation","content":"<script>\n// This library tag assumes fbq is available on the page.\n// All targeted segments should also be set as OR rules in SuperTag\n(function(){\n   if (window.fbq) {\n      var lsSegs = Krux('get','user_segments') || []; // Segs in LS\n      var targetSegIds = 'rbgkbtts3'.split(','); // Segs to target\n\n      targetSegIds.map(function(seg) {\n         if(lsSegs.indexOf(seg) !== -1) {\n            fbq('track', 'ViewContent', {\n                  segment_id: seg \n               }\n            );\n         }\n      })\n   }\n})();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["rbgkbtts3"]]]]]}],"usermatch_tags":[{"id":13,"name":"Sonobi User Match","content":"<script>\n!function() {\n    var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n    (new Image()).src = prefix\n                        + '//sync.go.sonobi.com/usc.gif?'\n                        + prefix\n                        + '//beacon.krxd.net/usermatch.gif?partner=sonobi&partner_uid=[UID]';\n}();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":54,"name":"Survata User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n        if (kuid) {\n           var url = prefix + '//px.surveywall-api.survata.com/k';\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":25,"name":"eXelate Media","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n    Krux('require:http').pixel({\n      url: \"//loadm.exelator.com/load\",\n      data: {\n          _kdpid: 'e4942ff0-4070-4896-a7ef-e6a5a30ce9f9',\n          buid: kuid,\n          p: '204',\n          g: '270',\n          j: '0'\n      }});\n  }\n  })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":27,"name":"Visual DNA","content":"<script>\nnew Image().src = 'https://usermatch.krxd.net/um/v2?partner=vdna';\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":51,"name":"Eyeota User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\n        if (kuid) {\n           var url = prefix + '//ps.eyeota.net/match?bid=i0r4o4v&uid=' + kuid;\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":71,"name":"AppNexus Connect","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif?adnxs_uid=$UID';\n            var appnexus_url = '//ib.adnxs.com/getuid?' + kurl\n            var i = new Image();\n            i.src = appnexus_url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":76,"name":"LiveRamp User Matching","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;     \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":77,"name":"MediaMath User Match","content":"<script>\n\n(function(){\n\tvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\tvar url = prefix + '//pixel.mathtag.com/sync/img?redir=' + prefix + '%2F%2Fbeacon.krxd.net%2Fusermatch.gif%3Fpartner%3Dmediamath%26mmuuid%3D%5BMM_UUID%5D';\n\t(new Image()).src = url;\n})();\n\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":81,"name":"Bombora","content":"<script>\n\n(function () {\n_ml = window._ml || {};\n_ml.pub = '748';\n_ml.redirect = '//beacon.krxd.net/usermatch.gif?partner=madisonlogic&partner_uid=[PersonID]';\nvar s = document.getElementsByTagName('script')[0], cd = new Date(), mltag = document.createElement('script');\nmltag.type = 'text/javascript'; mltag.async = true;\nmltag.src = '//ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth() + cd.getFullYear();\ns.parentNode.insertBefore(mltag, s);\n})();\n\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":82,"name":"DataLogix","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=2dd640a6-6ebd-4d4f-af30-af8baa441a0d&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gpwn29rvapq62&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":85,"name":"IXI Digital Open Market","content":"<script>\n(function(){\n    var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n    new Image().src = prefix + '//kr.ixiaa.com/C726AB29-0470-440B-B8D2-D552CED3A3DC/a.gif';\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.c3a35cae6beb84887ab6a83973d97fa9', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
