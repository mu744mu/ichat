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
