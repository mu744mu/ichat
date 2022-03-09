 <style>
    * {
    font-family: serif;
    font-weight: bold;
    text-shadow: none!important;
    font-size: 15.5px !important;line-height: 1.3!important;
}
    .ae {
      padding-top: 6px;
      padding-bottom: 3px;
      padding-left: 2px;
      border: 1px solid black;
      border-radius: 2px;
      margin: 1px;
      float: left; 
      padding: 6px 8px;
    }
    .pmsgc {
      background-color: rgba(0, 77, 255, 0.08)!important;
    }
    .ppmsgc {
      background-color: #f1f1ff!important;
    }
    .hmsg {
      background-color: linen!important;
    }
    .label-primary,
    .btn-primary,
    .bg-primary,
    .label-primary:hover,
    .btn-primary:hover,
    .btn-primary:focus {
      background-color: #438ac7;
      background-image: none;
    } 
    .bg {
      background-color: {{bg:steelblue}};
    } 
    .bgg {
      background-color: lightslategray;
    } 
    .pophead {
      background-color: slategrey;
    }
    
    .light {
      background-color: {{background:whitesmoke}};
    }
    .label,.btn{
      border-radius: 1px;
    }
    .label-primary,.btn-primary{  
      background-color: {{buttons:#438ac7}}!important;
    }
    .hid {
      display: none;
    }
    #mic .mic{
      background-color: {{buttons:#438ac7}};
    }
    .typingIndicatorBubbleDot {
  width: 4px;
  height: 4px;
  margin-right: 4px;
  background-color: #57585a;
  border-radius: 50%;
  animation-name: bounce;
  animation-duration: 1.3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.mic{
  width:64px;height:50px;margin:0px;border-radius:4px;background-image: url(mic.png);background-size: cover;background-repeat: no-repeat;background-position: center;
}
.typingIndicatorBubbleDot:first-of-type {
  margin: 0px 4px;
}

.typingIndicatorBubbleDot:nth-of-type(2) {
  animation-delay: 0.15s;
}

.typingIndicatorBubbleDot:nth-of-type(3) {
  animation-delay: 0.3s;
}
.flex-grow-1 {
  flex-grow: 1 !important;
}
.c-flex {
  display: flex;
    flex-direction: column;
}
.d-flex{
  display: flex; 
}
.flex-fill {
  flex: 1 1 auto !important;
}
.bgf{
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .bgf {
    background-color: rgba(0, 0, 0, .5);
  }
}
.nav-pills li a{border-radius: 0px!important;}
    @keyframes bounce {
  0%,
  60%,
  100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-4px);
  }
} 
td {
  border: 1px solid grey;
  font-weight: bold;
}  
th {
  background-color: cornflowerblue;
  color: white;
  padding: 5px;
}
.tab-pane{
  width: 100%;
}
 
html {
    overflow: hidden;
} 
  </style>
</head>
<body class="bg" onload="if (typeof load == 'undefined'){setTimeout('location.reload();',5000);return;};load();" style="background-color:#40404f;height:100%;max-height:100%; margin: 0px; padding: 0px; overflow: hidden; ">
  <div style="width:100%; height:100%;max-height:100%;max-width:380px;padding:0px;" class="center-block bg dad">
   <div id="tlogins" class="border corner light fr break c-flex" style="z-index:1000;margin-left:-4px;height:100%;width:100%;max-width:390px;min-height:100%;">
      <div class="hid">
      {{sitename}}
    </div> 
      <h1 class="hid">
      {{description}}
    </h1> 
      <a href="/" class="label bg   fl" style="width:100%;padding:6px;border-radius:0px;text-align: left;"><img src="prv1.png" class="fl" style="margin-right: 2px; width:28px;">{{sitename}}<button class="btn fr btn-success fa fa-refresh" style="margin:0px;margin-top:-2px;" ></button></a>
      <ul class="nav  nav-tabs" style="margin-bottom:0px;background-color:whitesmoke;"> 
        <li class="active"><a data-toggle="tab" style="padding: 10px 8px;" class="  fa fa-user" href="#l1">دخول الزوار</a></li>
        <li><a data-toggle="tab" style="padding: 10px 8px;" class=" fa fa-user" href="#l2">دخول الاعضاء</a></li>
        <li><a data-toggle="tab" style="padding: 10px 8px;" class=" fa fa-user-plus" href="#l3"> تسجيل عضويه</a></li>
      </ul>
      <div class="tab-content">
        <div id="l1" style="padding:8px;width:100%;" class="tab-pane in active">
          <input class="border corner" id="u1" placeholder="أكتب الاسم المستعار">
          <button onclick="login(1);" class="btn btn-primary">دخول</button><br>&nbsp;
        </div>
        <div id="l2" style="padding:8px;width:100%;" class="tab-pane hid">
          <input id="u2" class="border corner" placeholder="اكتب اسم العضو"><br>
          <input id="pass1" class="border corner" type="password" placeholder="اكتب كلمه المرور">
  
          <button onclick="login(2);" class="btn btn-primary">دخول</button>
                  <div class="checkbox" style="margin:0px;display:inline;">
            <label><input id="stealth" type="checkbox" value="">دخول مخفي</label>
          </div>
        </div>
        <div id="l3" style="padding:8px;width:100%;" class="tab-pane hid">
          <input id="u3" class="border corner" placeholder="اكتب اسم العضو"><br>
          <input id="pass2" class="border corner" type="password" placeholder="اكتب كلمه المرور">
          <button onclick="login(3);" class="btn btn-primary">دخول</button>
        </div>
        <h6 class="hid">
          {{sitename}}
        </h6> 
          <a class="hid" href="/">
          {{description}}
        </a> 
      </div> 
    <div title="المتواجدين الآن" class="bg mini fl" style="width:100%;border-radius:0px;padding: 0px;">
      <label class="fl label loginstat label-info" style="border-radius: 1px;margin: 0px;">يتم الاتصال ..</label>
      <span class="s1 fr fa fa-user label badgex   label-as-badge label-success" style="border-radius: 0px;">0</span>
    </div>
      <div class="lonline light break flex-grow-1" style="width:100%;outline: lightgray solid 1px;padding-left:1px;">
      </div>
      <div class="fr borderg minix" style="padding:2px;background-color:white;z-index:1;color:lightslategrey;font-size: small!important;">Copyright © 2021 <a title="Jawalhost.com" class="mini" href="https://jawalhost.com/">جوال هوست</a>. All Rights Reserved</div>
    </div> 
  </div>
    <div id="room" style="height: 100%; width:100%; " class="break c-flex fr  " >
      <div id="mic" style="width:100%;border: none;padding: 2px; height: 53px;display: none;" class="nosel bg">
        <div id="mic0" i="0" class="mic dots border corner bg">
          <div class="u" style="display: flex;width: 100%;background: rgba(222, 222, 222, 0.5);margin-top: 32px;">
           <img class="object-fit" style="min-height:14px;max-height:20px;max-width:64px;">
           <span></span>
          </div>
          </div>
          <div id="mic1" i="1" class="mic dots border corner bg"> 
            <div class="u" style="display: flex;width: 100%;background: rgba(222, 222, 222, 0.5);margin-top: 32px;">
             <img class="object-fit" style="min-height:14px;max-height:20px;max-width:64px;">
             <span></span>
            </div>
            </div>
            <div id="mic2" i="2" class="mic dots border corner bg">
              <div class="u" style="display: flex;width: 100%;background: rgba(222, 222, 222, 0.5);margin-top: 32px;">
               <img class="object-fit" style="min-height:14px;max-height:20px;max-width:64px;">
               <span></span>
              </div>
              </div>
              <div id="mic3" i="3" class="mic dots border corner bg">
                <div class="u" style="display: flex;width: 100%;background: rgba(222, 222, 222, 0.5);margin-top: 32px;">
                 <img class="object-fit" style="min-height:14px;max-height:20px;max-width:64px;">
                 <span></span>
                </div>
                </div>
                <div id="mic4" i="4" class="mic dots border corner bg">
                  <div class="u" style="display: flex;width: 100%;background: rgba(222, 222, 222, 0.5);margin-top: 32px;">
                   <img class="object-fit" style="min-height:14px;max-height:20px;max-width:64px;">
                   <span></span>
                  </div>
                  </div>
      </div>
      <div id="d2" class="d2  flex-grow-1 light    break">
      </div>
      <div class="tablebox d-flex footer fl light" style="width:100%;height:42px;padding:4px;">
        <button onclick="send('rleave',{});" style=" margin-left:-2px;margin-top:2px;border-radius: 2px;" class="fa fa-sign-out fl btn btn-primary">&nbsp;</button>
        <img tabindex="0" role="button" data-toggle="popover" data-trigger="focus" class="fl nosel emobox" style="padding:5px;width:34px;"
          src="imgs/emoii.gif">
        <textarea id="tbox" onclick="$('.pop').pop('hide');setTimeout(function(){$('#d2').scrollTop($('#d2')[0].scrollHeight);},600);"
          placeholder="اكتب رسالتك هنا" class="fl tbox flex-fill" style="background-color: rgb(170, 170, 175);"></textarea>
        <button onclick="Tsend();" style=" margin-left:2px;margin-top:2px;" class="fa fa-send fl btn btn-primary">إرسال</button>
      </div>
    <div id="d0" onclick=" " class="nosel fl  bg" style="padding-left: 1px; margin-top: 1px; width: 100%;  ">
      <label title="المتواجدين" href="#" onclick="$('.pnhead').text($(this).attr('title'));setTimeout(function(){$('#users').scrollTop(0);},100);$('.dpnl').show();$('#usearch').val('');updateusers();"
        data-toggle="tab" data-target="#users" class="ae fa label label-primary fa-user"><span class="busers minix  badge border" style="margin-top:-8px;padding:1px 4px;">0</span></label>
          <label title="المحادثات الخاصه" href="#" onclick="$('.pnhead').text($(this).attr('title'));hl($(this),'primary');setTimeout(function(){$('#users').scrollTop(0);},100);$('.dpnl').show();"
        data-toggle="tab" data-target="#chats" class="ae fa chats label label-primary fa-comment"><span class=" minix  badge border" style="margin-top:-8px;padding:1px 4px;">0</span></label>
      <label title="غرف الدردشه" href="#" onclick="$('.pnhead').text($(this).attr('title'));$('.dpnl').show();" data-toggle="tab"
        data-target="#rooms" class="ae fa label label-primary fa-users"><span class="brooms minix  badge border" style="margin-top:-8px;padding:1px 4px;">0</span>الغرف</label>
      <label title="الحائط" href="#" onclick="$('.pnhead').text($(this).attr('title'));$('.dpnl').show();setTimeout(function(){$('#d2bc').scrollTop(0);$('.d2bc .mm .reply').each(function(i,e){$(e).scrollTop(e.scrollHeight);});},100);hl($(this),'primary');$(this).find('.bwall').text('0');bcc=0;"
        data-toggle="tab" data-target="#wall" class="ae fa label label-primary fa-commenting"><span class="bwall  minix badge border" style="margin-top:-8px;padding:1px 4px;">0</span>الحائط</label>
      <label title="الإعدادات" href="#" onclick="$('.pnhead').text($(this).attr('title'));$('.dpnl').show();" data-toggle="tab"
        data-target="#settings" style="width: 46px;" class="ae label label-primary fa fa-gear">&nbsp;</label> 
    </div>
    </div>
<div id="dpnl" class="dpnl bg tab-content" style="display:none;border: 1px solid;max-width: 360px;width:90%;min-width: 300px; top: 0px;right: 0px">
    <div style="width: 100%;">
      <label onclick="$(this).parent().parent().hide();"  data-toggle="tab" data-target="#settings" class="label label-danger border nosel fa fa-close fr" style="margin-bottom: 0px;margin-right:2px;border: 1px solid black;border-radius:6px;padding:6px 8px;">&nbsp;</label>
      <label class="fl nosel label pnhead" style="margin:3px;padding-left:10px;padding-right:10px;">المتواجدين</label>
    </div> 
      <div id="users" style="height: 100%;width:100%;" class="light break tab-pane active">
        <textarea type="search" id="usearch" placeholder=".. البحث" class="tbox bg border" style="width:100%;padding-left:5px;display:block;border-radius: 0px;"></textarea>
        <label style=" margin: 0px!important;width:100%;margin:0px;border:none;padding:4px;border-radius:0px;display:none;" class="nosel ninr   fl uzr label bg">المتواجدين في الدردشه</label>

      </div>
      <div id="chats" style="height: 100%;width:100%;" class="break light tab-pane"> 
      </div>
      <div id="wall" style="height: 100%;width:100%;display: flex !important;" class="break tab-pane c-flex">
        <div id="d2bc" class="d2 light fl  d2bc flex-grow-1   break  " style="width:100%;padding-top:1px;">
          <button class="fa fa-comments btn border btn-info" onclick="$(this).parent().scrollTop(0);$(this).hide();$('.tboxbc').focus();" style="display:none;position: absolute;top: 32px;z-index: 1;left: 50px;width: 70%;text-align: center;" id="bcmore">رسائل جديدة</button>
        </div>
                <div class="tablebox fl light d-flex" style="width:100%;height:42px;padding:4px;">
          <button onclick="sendbc(true);" style="margin-left:2px; margin-right:3px;margin-top:2px;border-radius: 2px;" class="fr fa fa-share-alt sndfilebc fl btn btn-primary"></button>
          <img tabindex="0" role="button" data-toggle="popover" data-trigger="focus" class="fl emobc" style="padding:5px;width:34px;"
            src="imgs/emoii.gif">
          <textarea placeholder="اكتب رسالتك هنا" class="fl tbox tboxbc flex-fill"></textarea>
          <button onclick="sendbc();" style=" margin-top:2px;margin-left:2px;" class="fa fa-send sndbc fl btn btn-primary">إرسال</button>
        </div>
      </div>
      <div id="rooms" style="height: 100%;width:100%;" class="light break tab-pane">
        <div style="width:100%;margin:0px;border:none;border-radius:0px;" class="nosel label-primary fl  bgg"><button onclick="mkr();" class="border btn label label-success fl   fa fa-plus " style="margin:1px;">غرفه جديدة</button>          </div>
      </div>

      <div id="chats" style="height: 100%;width:100%;" class="light break tab-pane ">
      </div>
      <div id="settings" style="height: 100%;width:100%;padding:0px;" class="break light tab-pane "> 
        <div class="borderg corner" style="background-color: white;width: 100%;margin-top:-2px;"> 
            <div style="display: inline-block;width: 132px;margin-top: 2px;"class=" label label-primary  ">الزخرفه</div>
            <br> <input class="stopic  corner   dots" style="width:99%;">
            <br>
            <div style="display: inline-block;width: 132px;margin-top: 2px;"class="   label label-primary">الحاله</div>
            <br><input class="smsg  corner   dots" style="width:99%;">
            <br>
            <div class="label label-primary" style="display: inline-block;width: 132px;margin-top: 2px;">لون الإسم</div> 
            <div class="cpick border scolor btn" style="width: 64px;height:22px; color: rgb(0, 0, 0); background-image: none; background-color: rgb(255, 255, 255);"></div>
            <br>
            <div class="label label-primary" style="display: inline-block;width: 132px;margin-top: 2px;">لون الخط</div>  
            <div class="cpick border mcolor btn" style="width: 64px;height:22px; color: rgb(0, 0, 0); background-image: none; background-color: rgb(255, 255, 255);"></div>
            <br>
            <div class="label label-primary" style="display: inline-block;width: 132px;margin-top: 2px;">لون الخلفيه</div> 
            <div class="cpick border sbg btn" style="width: 64px;height:22px; color: rgb(0, 0, 0); background-image: none; background-color: rgb(255, 255, 255);"></div>
 
            <button class="border btn mini btn-success hand fl" style="padding:6px;width: 98%;margin-left:3px;margin-top: 2px;margin-bottom: 4px;" onclick="setprofile();">
              <span class="fl fa fa-edit"></span>
              حـفـظ</button> 
        </div>
        
   <select id="zoom" style="width: 98%;margin:2px 4px;" class="fl btn btn-primary" onchange="document.body.style.zoom=$(this).val();fixSize(1);setv('zoom',$(this).val());">
     <option value="1.20">%120 - حجم الخطوط</option>
     <option value="1.10">%110 - حجم الخطوط</option>
     <option value="1.05">%105 - حجم الخطوط</option>
     <option seleceted="seleceted" value="1">%100 - حجم الخطوط</option>
     <option value="0.95">%95 - حجم الخطوط</option>
     <option value="0.9">%90 - حجم الخطوط</option>  
   </select>
         <label onclick="sendpic();" style="background-color: ghostwhite;color: black;margin:2px 4px; padding:8px;width:98%;" class="label tc border  btn  label-info fl"><img style="width:32px;height:32px;margin:-8px;"  src="pic.png" class="fitimg fl borderg spic corner hand">تغير الصوره</label>
      <label onclick="send('setpic',{pic: 'pic.png'});" style="color: black;margin:2px 4px; padding:8px;width:98%;" class="label tc border btn  label-danger fl"><span class="fl fa fa-user-times"></span>حذف الصوره</label> 
 
      <label onclick="if (nopm){nopm=false;$(this).find('span').removeClass('fa-check');}else{nopm=true;$(this).find('span').addClass('fa-check');};send('busy',{busy:nopm});" style="background-color: ghostwhite;color: black;margin:2px 4px; padding:8px;width:98%;" class="label tc border  btn   fl"><span class="fa fl"></span>تعطيل المحادثات الخاصه</label>
      <br>  
                 <label onclick="if (nonot){nonot=false;$(this).find('span').removeClass('fa-check');}else{nonot=true;$(this).find('span').addClass('fa-check');} ;" style="background-color: ghostwhite;color: black;margin:2px 4px; padding:8px;width:98%;" class="label tc border  btn  bb4 fl"><span class="fa fl"></span>تعطيل التنبيهات</label>
<br>
      <label onclick="pmsg();" style="background-color: ghostwhite;color: black;margin:2px 4px; padding:8px;width:98%;" class="label tc border pmsg  btn  label-info fl"><span class="fl fa fa-send"></span>إرسال إعلان</label>
     <br>
     <label onclick="if(myroom!=null){redit(myroom);}" style="background-color: ghostwhite;color: black;margin:2px 4px; padding:8px;width:98%;" class="label tc border redit  btn  label-info fl"><span class="fl fa fa-home"></span>إداره الغرفه</label>
     <br>
     <label onclick="if(power.cp){$('#cp').show();$('#m1 .active a').click();}" style="background-color: ghostwhite;color: black;margin:2px 4px; padding:8px;width:98%;" class="label tc border cp  btn  label-danger fl"><span class="fl fa fa-star"></span>لوحه التحكم</label>
     <br>
     <label onclick="logout();" style="margin:2px 4px; padding:8px;width:98%;" class="label border  btn  label-danger tc fl"><span class="fl fa fa-sign-out"></span>تسجيل خروج</label>
    
      </div>
    </div>


   
  <!-- upro Modal -->
  <div class="modal" id="upro" role="dialog" style="z-index:2100">
    <div class="modal-dialog ">
      <div class="modal-content" style="width:340px;margin:-1px;">
        <div style="color:white;margin-top:-1px;" onclick="$(this).parent().parent().parent().modal('hide');" class="modal-header label-primary">
          <span class="pull-right clickable badge"><i class="fa fa-times"></i></span>
          <label style="margin:1px;max-width:90%;" class="mini dots nosel modal-title">إنشاء غرفه جديدة</label>
        </div>
        <div class="modal-body" style="padding:1px;">
          <div class="light fl pro center break" style="width:100%;border:1px solid lightgrey; padding:0px;margin:0px;">
            <center> 
              <div style="width:100%;height:200px;background-size: cover;" class="fitimg fl u-pic ">
                <div style="width:100%;height:100%;" class="fitimg bgf fl u-pic "></div>
                </div>
              <label style="width:100%;text-align:end;margin-bottom:0px;" class="">
              <div style="width:100%;padding:2px;text-align: center;" class="fl u-msg"></div>
              <div class="fl mini u-co" style="margin:4px;"></div>
              <div  class="fr u-room"></div> 
              </label> 
            </center>

            <a class="fl fa fa-comment  btn upm borderg" style="color:black;margin:2px;width: 106px;text-align: center;">محادثه خاصه</a>
            <a class="fl fa fa-envelope-o btn unot borderg" style="color:black;margin:2px;width: 106px;text-align: center;">تنبيه</a>
            <a class="fl fa fa-heart btn ulike borderg" style="margin:2px;color:red;width: 106px;text-align: center;">0</a>

            <a class="fl fa fa-microphone-slash  btn uml borderg" style="color:black;margin:2px;margin-top:4px;width: 106px;text-align: center;">سحب المايك</a>
            <a class="fl fa fa-microphone-slash  btn umm borderg" style="color:black;margin:2px;margin-top:4px;width: 106px;text-align: center;">كتم المايك</a>
            <a class="fl fa fa-microphone  btn uma borderg" style="color:black;margin:2px;margin-top:4px;width: 106px;text-align: center;">سماح</a>
            
            <a data-trigger="focus" tabindex="0" data-toggle="popover" class="fl fa fa-diamond btn ugift borderg"
              style="color:blue;margin:2px;margin-top:4px;width: 106px;text-align: center;">ارسل هديه</a>
            <a class="fl fa fa-search btn uh borderg" style="color:black;margin:2px;margin-top:4px;width: 106px;text-align: center;">كشف النكات</a>
            <a data-trigger="focus" tabindex="0" data-toggle="popover" class="fl fa fa-star btn ubnr borderg"
            style="color:deeppink;margin:2px;margin-top:4px;width: 106px;text-align: center;">البنر</a>
            <a class="fl fa fa-ban btn udelpic borderg" style="color:maroon;margin:2px;margin-top:4px;width: 106px;text-align: center;">حذف الصوره</a>
            <a class="fl fa fa-user-times btn urkick borderg" style="color:darkorchid;margin:2px;margin-top:4px;width: 106px;text-align: center;">طرد من الغرفه</a>
            <a class="fl fa fa-star btn umod borderg" style="color:green;margin:2px;margin-top:4px;width: 106px;text-align: center;">ترقيه الى مراقب</a>
            <a class="fl fa fa-ban btn ukick borderg" style="color:crimson;margin:2px;margin-top:4px;width: 106px;text-align: center;">طرد</a>
            <a class="fl fa fa-ban btn uban borderg" style="color:crimson;margin:2px;margin-top:4px;width: 106px;text-align: center;">باند</a>
            <a class="fl fa fa-warning btn ureport borderg" style="color:black;margin:2px;margin-top:4px;width: 106px;text-align: center;">تبليغ</a>
            <a class="fl fa fa-ban btn umute borderg" style="color:red;margin:2px;margin-top:4px;width: 106px;text-align: center;">تجاهل</a>
            <a class="fl fa fa-check btn uunmute borderg" style="color:red;margin:2px;margin-top:4px;width: 106px;text-align: center;">إلغاء التجاهل</a>
            <div class="border nickbox fl" style="padding:4px;margin-top:2px;width:100%;">
<label class="label fl label-primary" style="height: 32px;padding: 8px;">الزخرفه</label>
<textarea class="borderg corner  fl u-topic" style="height:32px;padding:4px;width:60%;resize:none;"></textarea>
<label class="btn btn-primary u-nickc fr fa fa-save">تغير</label>
</div>
<div class="border fl likebox" style="width:100%;padding:4px;margin-top:2px;">
              
              <label>♥الايكات</label><br>
              <input type="number" class="likec">
              <a class="fa fa-check btn ulikec border" style="margin:2px;">حفظ</a>

            </div>
            <div class="border fl powerbox" style="width:100%;padding:4px;margin-top:2px;">
              <label>المجموعه</label><br>
              <select style="width:200px;display:inline;" class="userpower selbox form-control">
            </select><br>
              <label>المده بالأيام</label><br>
              <input type="number" class="userdays"><br>
              <a class="fa fa-check btn upower border" style="margin:2px;">حفظ</a>

            </div>
                                    <div class="border fl roomzbox" style="width:100%;padding:4px;margin-top:2px;">
              <label>الغرفه</label><br>
              <select style="width:200px;display:inline;" class="roomz selbox form-control">
            </select><br>
              <label>كلمه المرور(إختياري)</label><br>
              <input type="text" class="rpwd"><br>
              <a class="fa fa-check btn uroomz border" style="margin:2px;">نقل</a>

            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
    <x id="uhtml" style="display:none;">
    <div class="hand nosel fl uzr borderg" style="text-align:left;background-color:white;border-radius:0px!important;width:100%;margin:0px!important;border-top:none;border-left:0px;padding-right:1px;">
    <div class="d-flex fl" style="padding-right: 16px;width: 100%;">
      <img class="fl ustat" style='width:4px;min-height:100%;max-height:64px;margin-bottom:-1px;border-bottom: 1px solid whitesmoke;'>
      <div style="min-width:44px;min-height:44px;max-height: 64px;background-size: cover;" class="fitimg fl u-pic ">
        <div style="min-width:100%;height:100%;background-position-y: center;" class="fitimg bgf fl u-pic "></div>
      </div>
     <span class="fl muted fa" style="color:indianred;display: none;width: 16px;margin-right: -16px;">&nbsp;</span> 
      <div style="padding: 0px 2px;overflow: hidden;" class="fl flex-grow-1 break">
        <div style="width:100%;display: flex;overflow: hidden;line-height: normal;margin-top:1px;" class="fl d-flex">
          <img class="fl u-ico object-fit" style="min-height: 14px;" >
          <div class="fl flex-grow-1"><span style="padding: 0px 4px; max-width:100%;border-radius: 2px;" class="corner u-topic"></span></div>
        </div>
        <div style="color:#888;margin-top:-1px;" class="fl mini u-msg"></div>
      </div>
    </div>
    <div class="fr c-flex" style="margin-left:-32px;">
      <img  class="fr co" style="width:18px;height:18px;border-radius:1px;margin-top: -2px;margin-left:1px">
      <span class="fr uhash" style="color:grey;font-size:70%!important;margin-top:-4px;"></span>
    </div>
    </div>
  </x>
  <x id="rhtml" style="display:none;">
    <div class="nosel d-flex fl room borderg" style="text-align:left;background-color:white;border-radius:0px!important;width:100%;margin:0px!important;border-top:none;border-left:0px;padding-right:1px;">
    <div class="d-flex flex-grow-1 fl" style="overflow: hidden;padding: 1px;">
       <div style="min-width:44px;min-height:44px;max-height: 44px;background-size: cover;" class="fitimg fl u-pic ">
        <div style="min-width:100%;height:100%;background-position-y: center;" class="fitimg bgf fl u-pic "></div>
      </div>
       <div style="padding: 0px 2px;overflow: visible;" class="fl flex-grow-1 break">
        <div style="width:100%;display: flex;overflow: hidden;line-height: normal;margin-top:1px;" class="fl d-flex">
          <img class="fl u-ico object-fit" style="min-height: 14px;" >
          <div class="fl flex-grow-1"><span style="padding: 0px 4px; max-width:100%;border-radius: 2px;" class="corner u-topic dots"></span></div>
        </div>
        <div style="color:#888;margin-top:-1px;" class="fl dots mini u-msg"></div>
      </div>
    </div>
    <div class="fr c-flex">
      <span class="corner fa fa-user label label-primary fr uc" style="padding:3px;margin:1px;border-radius: 2px;"></span>
    </div>
    </div>
  </x> 
  <x id="callnot" style="display:none;">
    <div class="border  bgg" style="position:absolute;top:60px;margin-left:60px;z-index:9999;width:260px;padding:4px;">
      <div class="uzer">
      </div>
      <a class="btn btn-success callaccept fa fa-phone">قبول</a>
      <a class="btn btn-danger calldeny fa fa-phone">رفض</a>
      <a class="label label-warning callstat">..</a>
    </div>
  </x>
  <x id="uhead" style="display:none;">
    <div class="fl d-flex uzr" style="margin:3px;width:65%;">
      <img class="fl ustat" style='width:4px;height:22px; ' src='imgs/s1.png'>
      <img style="width:36px;height:36px;" class="fitimg fl hand u-pic ">
      <div style="width: 39px;" class="fl flex-fill">
        <div style="width:100%;margin-top:0px;" class="fl">
          <img class="fl u-ico" alt="">
          <div class="fl" style="width:90%;"><span style="max-width:100%;padding: 0px 4px;border-radius: 2px;" class="corner nosel u-topic dots">{1}</span></div>
        </div>
      </div>
    </div>
  </x>
    <x id="pop" class="hid">
    <div class="bgg corner c-flex" style="outline: 1px solid gray;overflow-y:hidden;display:none;position:absolute;top:1px;min-height:180px;max-height:500px;height:50%;width:99%;max-width:500px;padding-bottom:25px;z-index:10;">
      <div style="width:100%;height:30px;" class="head nosel bg fl">
        <label class="label fl hand fa fa-info title" style="margin:2px;margin-right: 2px;">&nbsp;</label>
        <label style="padding:8px;" onclick="$(this).parent().parent().remove();" class="btn minix btn-danger pphide fr border fa fa-close">&nbsp;&nbsp;</label>
      </div>
      <div class="body fl flex-grow-1" style="min-height:100%;width:100%;height:100%;overflow: hidden;">

      </div>
    </div>
  </x>
  <x id="cw" class="hid">
    <div class="c-flex bgg border corner" style="border-radius: 2px;display:none;position:absolute;top:1px;min-height:180px;max-height:500px;height:50%;width:97%;max-width:500px; ">
      <div style="width:100%;height:30px;" class="head nosel bg fl">
        <label class="label fl hand fa border fa-user" style="margin:2px;margin-right: 2px;">&nbsp;</label>
        <label style="padding:8px;" class="btn minix btn-danger phide fr border fa fa-minus">&nbsp;&nbsp;</label>
        <label style="padding:8px;" onclick="var pp=$(this).parent().parent();if($(this).hasClass('fa-expand')){pp.css('height','86%');}else{pp.css('height','50%');}$(this).toggleClass('fa-expand fa-compress');fixSize();"
          class="btn   btn-info   fr border fa fa-expand">&nbsp;&nbsp;</label>
      </div>
      <div class="cont break fr c-flex flex-grow-1" style="width:100%;">
        <div class="d2 flex-grow-1 break light">
        </div>
        <div class="tablebox footer d-flex light fl" style="width:100%;height:42px;padding:4px;"> 
          <div class="typ" style="display: flex;position: absolute;right:20px;margin-top:-12px;">
            <div class="typingIndicatorBubbleDot"></div>
            <div class="typingIndicatorBubbleDot"></div>
            <div class="typingIndicatorBubbleDot"></div>
          </div> 
          <button style="margin-right:3px;margin-top:2px;border-radius: 2px;" class="fr fa fa-share-alt sndfile fl btn btn-primary">&nbsp;&nbsp;&nbsp;&nbsp;</button>
          <img tabindex="0" role="button" data-toggle="popover" data-trigger="focus" class="fl nosel emo" style="padding:5px;width:34px;"
            src="imgs/emoii.gif">
          <textarea placeholder="اكتب رسالتك هنا" class="fl flex-fill tbox"></textarea>

          <button style=" margin-top:2px;margin-left:2px;" class="fa fa-send sndpm fl btn btn-primary">&nbsp;&nbsp;&nbsp;</button>
        </div>
      </div>
    </div>
  </x>
  <x id="umsg" style="display:none;">
    <div class="uzr borderg d-flex" style="border-top:none;margin:0px;width:100%;padding:0px; background-color:white;position:relative;">
      <div style="min-width:44px;min-height:44px;max-height:64px;background-size: cover;" class="fitimg fl u-pic ">
        <div style="min-width:100%;height:100%;background-position-y:center;" class="fitimg bgf fl u-pic "></div>
      </div>
      <div class="uzr flex-fill break" style="padding-top: 1px;padding-left:1px;">
        <div style="width:100%;display: flex;" class="">
          <img class="u-ico object-fit"  style="min-height: 14px;" >
          <span style="padding:1px 4px;display:block;max-width:82%;margin-left:1px;border-radius: 2px;" class="nosel u-topic dots hand"></span>
        </div> 
        <div style="padding:0px 5px; width:100%;padding-right:25px;padding-bottom: 1px;" class="u-msg break"></div>
        <div class="reply break " style="max-height:162px;overflow: hidden;">
        </div>
      </div>
      <div class="c-flex" style="position: absolute;right: 0px;">
        <div style="line-height: normal;margin-right: 2px;" class="aa"> 
          <button style="padding:3px;width: 32px;border-radius: 0px;margin-right:-4px;" class="breply btn minix btn-info fa fa-comments">&nbsp;</button>
          <button style="padding:3px;width: 32px;border-radius: 0px;margin-right:-4px;" class="blike btn minix btn-danger fa fa-heart">&nbsp;</button>
          <button style="padding:3px;width: 32px;border-radius: 0px;" class="bdel btn minix btn-primary fa fa-times hid">&nbsp;</button>
        </div>
        <span style="margin-top:2px;padding:0px 2px;margin-right:4px;color:grey;text-align: end;" class="minix tago">..</span>
      </div> 
    </div>
  </x>
  <x id="not" class="hid">
    <div onclick="$(this).remove();" style="min-width:180px;max-width:260px;border:1px solid black;z-index:2110;background-color:#efefef;position:absolute;top:30%;margin-left:30px;padding:5px; "
      class="hand corner nosel">
      <center>
        <div class="corner border label label-primary" style="margin-top:-10px;padding-top:10px;padding-left:15px;width:50%;padding-right:15px;">تنبيه</div>
      </center>
    </div>
  </x>
  <div class="modal" id="mnot" role="dialog">
    <div class="modal-dialog ">
      <div class="modal-content" style="width:310px;">
        <div style="color:white;" onclick="$(this).parent().parent().parent().modal('hide') ;" class="modal-header label-primary">
          <span class="pull-right clickable badge"><i class="fa fa-times"></i></span>
          <label style="margin:1px;" class="mini fa fa-comments modal-title">إعلان</label>
        </div>
        <div class="modal-body" style="padding:1px;">
          <div class="break" style="background-color:#efefef;padding:5px;">  
            <textarea placeholder="اكتب رسالتك هنا" class="fl" style="width:100%;resize: none;"></textarea>
            <label class="checkbox-inline"><input class="ispp" type="checkbox" value="">إعلان خاص للسوابر؟</label><button class="rsave btn btn-primary fr"><span class="fa fa-send">إرسال</span></button>  
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- mkr Modal -->
  <div class="modal" id="mkr" role="dialog">
    <div class="modal-dialog ">
      <div class="modal-content" style="width:310px;">
        <div style="color:white;" onclick="$(this).parent().parent().parent().modal('hide') ;" class="modal-header label-primary">
          <span class="pull-right clickable badge"><i class="fa fa-times"></i></span>
          <label style="margin:1px;" class="mini fa fa-comments modal-title">إنشاء غرفه جديدة</label>
        </div>
        <div class="modal-body" style="padding:1px;">
          <div class="break" style="background-color:#efefef;padding:5px;">
            <input class="rtopic" style="width:200px;" type="text" placeholder="عنوان الغرفه">
            <input class="rabout" style="width:200px;" type="text" placeholder="الوصف">
            <input class="rwelcome" style="width:200px;" type="text" placeholder="رساله الترحيب">
            <input autocomplete="off" class="rpwd" style="width:200px;" type="text" placeholder="كلمه المرور">
            <input class="rmax" style="width:200px;" type="number" placeholder="حجم الغرفه من 2 ألى 40" min="2" max="40">
            <input class="rl" style="width:200px;" type="number" placeholder="عدد الايكات للدخول" min="0">
            <input class="rvl" style="width:200px;" type="number" placeholder="عدد الايكات للصوتيه" min="0">
            <label class="checkbox-inline"><input class="rdel" type="checkbox" value="">تثبيت الغرفه</label><br><br>
            <label class="checkbox-inline"><input class="rv" type="checkbox" value="">تفعيل الصوتيه</label><br><br>
            <div class="cpick border  btn" style="width: 84px;height: 44px;color: rgb(0, 0, 0);background-image: none;position: absolute;top: 96px;right: 4px;"></div> 
      
            <button class="rmake btn btn-primary fl"><span class="fa fa-plus">(20)إنشاء الغرفه</span></button>
            <button class="rsave btn btn-primary fl"><span class="fa fa-edit">حفظ التعديلات</span></button>
            <button class="rdelete btn btn-danger fr"><span class="fa fa-times">حذف</span></button>
            <div class="rpic fr border" onclick="roomspic($(this).find('img'));" onerror="if($(this).attr('src')!='room.png'){$(this).attr('src','room.png');}">
                      <img style="max-width: 100%;height:100%">
            </div>
            <div class="break border corner" id="ops" style="width:100%;padding:2px;"> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<div id="cp" class="light break" style="width:100%;height:100%;position: absolute;top:0px;left:0px;overflow-x: auto;zoom: 95%;display: none;">
  <div style="margin:1px;width:120px;" class="fl borderg" id='m1'>
    <ul class="nav nav-pills nav-stacked">
        <li><a data-toggle="tab" onclick="send('cp',{cmd:'fps',q:''});" href="#fps">السجل</a></li>
        <li><a data-toggle="tab" onclick="send('cp',{cmd:'actions'});" href="#actions">الحالات</a></li>
        <li><a data-toggle="tab" onclick="send('cp',{cmd:'logins',q:''});" href="#logins">الأعضاء</a></li>
        <li><a data-toggle="tab" onclick="send('cp',{cmd:'bans'});" href="#bans">الحظر</a></li>
        <li><a data-toggle="tab" onclick="send('cp',{cmd:'sico',data:{}});cp_powers();" href="#powers">الصلاحيات</a></li>
        <li><a data-toggle="tab" onclick="send('cp',{cmd:'fltr'});" href="#fltr">فلتر</a></li>
        <li><a data-toggle="tab" onclick="send('cp',{cmd:'rooms'});" href="#cp_rooms">الغرف</a></li>
        <li><a data-toggle="tab" onclick="send('cp',{cmd:'shrt'});" href="#shrt">الإختصارات</a></li>
        <li><a data-toggle="tab" onclick="send('cp',{cmd:'subs'});" href="#subs">الإشتراكات</a></li>
        <li><a data-toggle="tab" onclick="send('cp',{cmd:'msgs'});" href="#msgs">الرسائل</a></li>
        <li><a data-toggle="tab" onclick="send('cp',{cmd:'owner'});" href="#sett">إداره الموقع</a></li>
        <button class="btn btn-danger fa fa-sign-out fr" style="border-radius: 0px;width: 100%;" onclick="$('#cp').hide();">العودة للدردشه</button>
    </ul>
</div>
<div class="fl tab-content" style="width:100%;margin-left:0px;position:absolute;display:inline;"> 
  <button class="fa fa-refresh btn btn-success" onclick="$('#m1 .active a').click();" style="position: fixed;top: 6px;right: 8px;"></button>
  <div id='actions' class="tab-pane cpactions"></div>
  <div id='fps' class="tab-pane fade  cpevents  ">
    <input autocomplete="off" placeholder="البحث" value="" onchange="send('cp',{cmd:'fps',q:$(this).val()});">
</div>
  <div id='logins' class="tab-pane fade cpactions" style="width: 100%;">
    <input autocomplete="off" placeholder="البحث اسم العضو\الآي بي\الجهاز" onchange="send('cp',{cmd:'logins',q:$(this).val()});">
</div>
  <div id='bans' class="tab-pane  bans">
    <input autocomplete="off" class="banit" placeholder="رقم الجهاز \\ الدوله \\ الاي بي">
    <button onclick="send('cp',{cmd:'ban',type:$('.banit').val()});" class="btn btn-danger">حظر</button>
    <button onclick="send('cp',{cmd:'aban',type:$('.banit').val()});" class="btn btn-success">سماح</button>
</div>
<div id='powers' class="tab-pane" style="width:500px;">
  <select onchange="cp_powerchange();" style="width:200px;display:inline" class="powerbox selbox form-control">
</select>
  <button class="delp btn btn-danger fa fa-times">حذف</button>
  <div class="sico border corner fr" style="width:200px;">

  </div>
</div>
<div id='fltr' class="tab-pane fltr">
  <input class="fltrit" placeholder="اضافه كلمه\موقع">
  <br><button style="margin:5px;width:200px;" onclick="fltrit('amsgs',$('.fltrit').val());" class="fa fa-check btn btn-success">إضافه ألى الكلمات المسموحه</button>
  <br><button style="margin:5px;width:200px;" onclick="fltrit('bmsgs',$('.fltrit').val());" class="fa fa-times btn btn-danger">إضافه ألى الكلمات الممنوعه</button>
  <br><button style="margin:5px;width:200px;" onclick="fltrit('wmsgs',$('.fltrit').val());" class="fa fa-warning btn btn-info">إضافه ألى الكلمات المراقبه</button>
  <br><b>آخر الكلمات الممنوعه</b>
  <div id="fltred" class="break" style="width:400px;height:200px;"> 
  </div>
</div>
<div id='cp_rooms' class="tab-pane">

</div>
<div id='shrt' class="tab-pane">
  <input style="margin: 4px;" class="shrtname" placeholder="الإختصار \ س1">
  <br><input style="margin: 4px;" class="shrtvalue" placeholder="الزخرفه \ السلام عليكم">
  <br><button style="margin:5px;width:200px;" onclick="send('cp',{cmd:'shrtadd',name:$('.shrtname').val(),value:$('.shrtvalue').val()});" class="fa fa-check btn btn-success">إضافه</button>
  <br>
</div>
<div id="subs" class="tab-pane">

</div>
<div id='msgs' class="tab-pane msgs">
  <input class="msgt" placeholder="عنوان الرساله">
  <br>
  <textarea class="msgm" placeholder="الرساله" maxlength="250"></textarea>
  <br><button style="margin:5px;width:200px;" onclick="send('cp',{cmd:'msgsit',type:'w',t:$('.msgt').val(),m:$('.msgm').val()});" class="fa fa-check btn btn-success">إضافه ألى رسائل الترحيب</button>
  <br><button style="margin:5px;width:200px;" onclick="send('cp',{cmd:'msgsit',type:'d',t:$('.msgt').val(),m:$('.msgm').val()});" class="fa fa-check btn btn-danger">إضافه ألى الرسائل اليوميه</button>
  <br><b>الرسائل</b><br>

</div>
<div id='sett' class="tab-pane fade">
  <div class="border corner" style="padding:4px;">
      <label class="label label-info fa fa-home">إعدادات الموقع</label>
      <br>
      <label style="margin-left:5px;" class="label label-primary">إسم الموقع</label>
      <br>
      <textarea maxlength="5120" style="width:260px;" id="sett_name" type="text" placeholder="شات فلان الكتابي"></textarea>
      <br>
      <label style="margin-left:5px;" class="label label-primary">عنوان الصفحه</label>
      <br>
      <textarea maxlength="5120" style="width:260px;" id="sett_title" type="text" placeholder="شات فلان الكتابي للجوال - شات خليجي عربي"></textarea>
      <br>
      <label style="margin-left:5px;" class="label label-primary">وصف الموقع</label>
      <br>
      <textarea maxlength="5120" style="width:260px;" id="sett_description" type="text" placeholder="شات فلان الكتابي للجوال , دردشه , مسابقات , العاب , تعارف , بدون تسجيل او تحميل"></textarea>
      <br>
      <label style="margin-left:5px;" class="label label-primary">الكلمات الدلاليه</label>
      <br>
      <textarea maxlength="5120" style="width:260px;" id="sett_keywords" type="text" placeholder="شات فلان, شات فلان الكتابي, شات خليجي, شات بدون تسجيل, شات بدون تحميل"></textarea>
      <br>
      <label style="margin-left:5px;" class="label label-primary">السكربت JavaScript</label>
      <br>
      <textarea maxlength="10240" style="width:260px;" id="sett_scr" type="text" placeholder="للمبرمجين فقط"></textarea>
      <br>
      <label style="margin-left:5px;" class="label label-primary">لون القوالب</label>
      <br>
      <input class="jscolor color {pickerPosition:'top'} sbg  corner dots" style="width: 80px; color: rgb(255, 255, 255); background-image: none; background-color: rgb(0, 0, 0);" autocomplete="off">
      <br>
      <label style="margin-left:5px;" class="label label-primary">لون المحتوى</label>
      <br>
      <input class="color {pickerPosition:'top'} sbackground  corner dots" style="width: 80px; color: rgb(255, 255, 255); background-image: none; background-color: rgb(0, 0, 0);" autocomplete="off">
      <br>
      <label style="margin-left:5px;" class="label label-primary">لون الأزرار</label>
      <br>
      <input class="color {pickerPosition:'top'} sbuttons  corner dots" style="width: 80px; color: rgb(255, 255, 255); background-image: none; background-color: rgb(0, 0, 0);" autocomplete="off">
      <br>
      <label style="margin-left:5px;" class="label label-primary">الرسائل</label>
      <br> <input type="number" min="5" value="5" class="msgstt corner dots" style="width: 80px;" autocomplete="off"><b>المده بالدقائق للرسائل اليوميه</b>
      <br>
      <label style="margin-left:5px;" class="label label-primary">الحائط</label>
      <br><input type="number" min="0" value="0" class="wall_likes corner dots" style="width: 80px;" autocomplete="off"><b>عدد الايكات</b>

      <br> <input type="number" min="0" value="0" class="wall_minutes corner dots" style="width: 80px;" autocomplete="off"><b>المده بين رسائل الحائط بالدقيقه</b>

      <br>
      <label style="margin-left:5px;" class="label label-primary">الزوار</label>
      <br>
      <input id="allowg" type="checkbox" class="allowg corner dots" autocomplete="off">
      <label for="allowg" class="checkbox-inline">السماح بدخول الزوار</label>
      <br>
      <input id="allowreg" type="checkbox" class="allowreg corner dots" autocomplete="off">
      <label for="allowreg" class="checkbox-inline">السماح بتسجيل العضويات</label>
      <br>
      <input id="rc" type="checkbox" class="rc corner dots" autocomplete="off">
      <label for="rc" class="checkbox-inline">إستعاده الاتصال</label>
      <br>
      <input id="bclikes" type="checkbox" class="corner dots" autocomplete="off">
      <label for="bclikes" class="checkbox-inline">ﻻيكات الحائط</label>
      <br>
      <input id="mlikes" type="checkbox" class=" corner dots" autocomplete="off">
      <label for="mlikes" class="checkbox-inline">ﻻيكات العام</label>
      <br>
      <input id="mreply" type="checkbox" class=" corner dots" autocomplete="off">
      <label for="mreply" class="checkbox-inline">ردود العام</label>
      <br>
      <input id="bcreply" type="checkbox" class=" corner dots" autocomplete="off">
      <label for="bcreply" class="checkbox-inline">ردود الحايط</label>
      <br>
      <br><input type="number" min="0" value="0" class="pmlikes corner dots" style="width: 80px;" autocomplete="off"><b>عدد الايكات للمحادثات الخاصه</b>
      <br><input type="number" min="0" value="0" class="notlikes corner dots" style="width: 80px;" autocomplete="off"><b>عدد الايكات للتنبيهات</b>
      <br><input type="number" min="0" value="0" class="fileslikes corner dots" style="width: 80px;" autocomplete="off"><b>عدد الايكات لإرسال صور\فيديو</b>
      <br><input type="number" min="0" value="0" class="proflikes corner dots" style="width: 80px;" autocomplete="off"><b>عدد الايكات لتغير الزخرفه والحاله</b>
      <br><input type="number" min="0" value="0" class="piclikes corner dots" style="width: 80px;" autocomplete="off"><b>عدد الايكات لتغير الصوره</b>
      <br>
      <label class="btn btn-danger label fa fa-save border" onclick="sett_save();">حفظ</label>
      <br>
  </div>
  <div class="border corner" style="padding:4px;margin-top:-1px;">
      <label class="label label-info fa fa-gear">خيارات الموقع</label>
      <br>
      <label class="label label-primary">الايقونات</label>
      <div style="width:360px;" class="p-site break">
        <label class="label label-primary">ايقونه الموقع  favicon.ico</label><br>
        <img src="favicon.ico" style="width: 32px;height: 32px;object-fit: contain;object-position: top;" onclick="sendfilea(this,function(fn){send('cp',{cmd:'favicon',fn:fn});});"> 
        <br> 
        <label class="label label-primary">صوره الموقع prv1.png</label><br>
        <img src="prv1.png" style="width: 32px;height: 32px;object-fit: contain;object-position: top;" onclick="sendfilea(this,function(fn){send('cp',{cmd:'prv1',fn:fn});});"> 
        <br>
        <label class="label label-primary">صوره العضو pic.png</label><br>
        <img src="pic.png" style="width: 32px;height: 32px;object-fit: contain;object-position: top;" onclick="sendfilea(this,function(fn){send('cp',{cmd:'pic',fn:fn});});"> 
        <br>
        <label class="label label-primary">صوره الغرف room.png</label><br>
        <img src="room.png" style="width: 32px;height: 32px;object-fit: contain;object-position: top;" onclick="sendfilea(this,function(fn){send('cp',{cmd:'room',fn:fn});});"> 
        <br>
      </div>
      <br>
      <label class="label label-primary fa fa-image">ايقونات السوابر</label><span class="btn btn-primary minix fa fa-plus border" onclick="sendfilea(this,function(fn){send('cp',{cmd:'addico',pid:fn,tar:'sico'});});"></span>
      <div style="width:360px;" class="p-sico break">
      </div>
      <br>
      <label class="label label-primary fa fa-image">ايقونات الهدايا</label><span class="btn btn-primary minix fa fa-plus border" onclick="sendfilea(this,function(fn){send('cp',{cmd:'addico',pid:fn,tar:'dro3'});});"></span>
      <div style="width:360px;" class="p-dro3 break">
      </div>
      <br>
      <label class="label label-primary fa fa-image">الإبتسامات</label><span class="btn btn-primary minix fa fa-plus border" onclick="sendfilea(this,function(fn){send('cp',{cmd:'addico',pid:fn,tar:'emo'});});"></span><span class="btn emo_order btn-primary minix fa fa-save border">حفظ</span>
      <div style="width:360px;" class="p-emo break">
      </div>
  </div>
</div>
</div> 
</div>
</body>
<script> 
    var vl=getv('zoom');
   if(vl==''){vl='1';setv('zoom',vl);}
     if(isNaN(parseInt(vl))==false)
     { 
     $('#zoom').val(vl).trigger('change');fixSize(1);
     } 
{{scr}}  
 

</script>
</html>
