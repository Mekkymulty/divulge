
// ========== Menu
$('#dvgmn').click(function() {
    document.getElementById("mnubrcnt").style.display = "block";
    document.getElementById("mnuinrbr").style.left = "0";
});

$('#mnuhdrclsbr').click(function() {
    document.getElementById("mnuinrbr").style.left = "-100%";
    setTimeout(function() {
        document.getElementById("mnubrcnt").style.display = "none";
    }, 200);
});
$('#mnulngslt').click(function() {
    document.getElementById("pcddrpup").style.display = "block";
    document.getElementById("pcddrpup").style.opacity = "1";
    document.getElementById("pcdoptfltr").style.bottom = "0";
});
$('#dvgmnucls').click(function() {
    $('#mnuhdrclsbr').trigger('click');
});

// ========== Logo
$('#dvlglgo').click(function() {
    window.location.reload();
});


// ========== Search
$('#hmsrchopn, #hmsrcbrdrt').click(function() {
    hmbdywlbr.style.webkitTransition = "0s";
    hmbdywlbr.style.transition = "0s";
    hmbdywlbr.style.opacity = "0";
    document.getElementById("hmsrchbr").style.webkitTransition = "ease-out 0.3s";
    document.getElementById("hmsrchbr").style.transition = "ease-out 0.3s";
    document.getElementById("hmsrchbr").style.display = "block";
    document.getElementById("hmsrchbr").style.opacity = "0";
    document.getElementById("hmsrchbr").style.webkitTransform = "scale(0.9)";
    document.getElementById("hmsrchbr").style.transform = "scale(0.9)";
    setTimeout(() => {
        srchhmsvcs.focus();
        hmbdywlbr.style.webkitTransform = "scale(1.1)";
        hmbdywlbr.style.transform = "scale(1.1)";
        document.getElementById("hmsrchbr").style.opacity = "1";
        document.getElementById("hmsrchbr").style.webkitTransform = "scale(1)";
        document.getElementById("hmsrchbr").style.transform = "scale(1)";
    }, 0);
});

const hmbdywlbr = document.querySelector('.dvlgbdybr');
$('#hmsrchbrbk').click(function() {
    hmbdywlbr.style.webkitTransition = "ease-out 0.3s";
    hmbdywlbr.style.transition = "ease-out 0.3s";
    hmbdywlbr.style.opacity = "1";
    document.getElementById("hmsrchbr").style.webkitTransition = "0";
    document.getElementById("hmsrchbr").style.transition = "0";
    document.getElementById("hmsrchbr").style.opacity = "0";
    setTimeout(function() {
        hmbdywlbr.style.webkitTransform = "scale(1)";
        hmbdywlbr.style.transform = "scale(1)";
        document.getElementById("hmsrchbr").style.display = "none";
        
        srchhmsvcs.value = '';
        document.getElementById("hmsrchicn").style.display = "block";
        document.getElementById("hmiptsrchclr").style.display = "none";
        document.getElementById("hmsrhinrbr").style.display = "none";
        document.getElementById("hmsrhrctpplr").style.display = "block";
    }, 0);
});
var srchhmsvcs = document.getElementById("hmdvlgsrch");
srchhmsvcs.onfocus = function() {
    if (srchhmsvcs.value.length <= 0) {
        document.getElementById("hmsrchicn").style.display = "none";
    };
};
srchhmsvcs.onblur = function() {
    if (srchhmsvcs.value.length <= 0) {
        document.getElementById("hmsrchicn").style.display = "block";
    };
};
function hmsrchbrfnc() {
    if (srchhmsvcs.value.length >= 1) {
        document.getElementById("hmiptsrchclr").style.display = "flex";
        document.getElementById("hmsrhinrbr").style.display = "block";
        document.getElementById("hmsrhrctpplr").style.display = "none";
    }
    else {
        document.getElementById("hmiptsrchclr").style.display = "none";
        document.getElementById("hmsrhinrbr").style.display = "none";
        document.getElementById("hmsrhrctpplr").style.display = "block";
    };
};
$('#hmiptsrchclr').click(function() {
    srchhmsvcs.value = '';
    srchhmsvcs.focus();
    document.getElementById("hmiptsrchclr").style.display = "none";
    document.getElementById("hmsrhinrbr").style.display = "none";
    document.getElementById("hmsrhrctpplr").style.display = "block";
});
$('#hmsrcbdybr').on('scroll', function() {
    if (hmsrcbdybr.scrollTop > 10) {
        document.getElementById("hmsrhdrbr").style.borderBottom = "1px solid rgb(230, 235, 240)";
    } else {
        document.getElementById("hmsrhdrbr").style.borderBottom = "0";
    };
});

// ========== Account
$('#acntopn').click(function() {
    hmbdywlbr.style.webkitTransition = "0s";
    hmbdywlbr.style.transition = "0s";
    hmbdywlbr.style.opacity = "0";
    document.getElementById("accountbr").style.display = "block";
    document.getElementById("accountbr").style.opacity = "0";
    document.getElementById("accountbr").style.webkitTransform = "scale(0.9)";
    document.getElementById("accountbr").style.transform = "scale(0.9)";
    document.getElementById("accountbr").style.right = "0%";
    setTimeout(() => {
        hmbdywlbr.style.webkitTransform = "scale(1.1)";
        hmbdywlbr.style.transform = "scale(1.1)";
        document.getElementById("accountbr").style.opacity = "1";
        document.getElementById("accountbr").style.webkitTransform = "scale(1)";
        document.getElementById("accountbr").style.transform = "scale(1)";
    }, 0);
});
$('#acntbrbk').click(function() {
    document.getElementById("accountbr").style.right = "-100%";
    setTimeout(function() {
        hmbdywlbr.style.webkitTransition = "ease-out 0.3s";
        hmbdywlbr.style.transition = "ease-out 0.3s";
        hmbdywlbr.style.opacity = "1";
        hmbdywlbr.style.webkitTransform = "scale(1)";
        hmbdywlbr.style.transform = "scale(1)";
        document.getElementById("accountbr").style.opacity = "0";
        document.getElementById("accountbr").style.display = "none";
    }, 200);
});
$('#acntbdybr').on('scroll', function() {
    if (acntbdybr.scrollTop > 10) {
        document.getElementById("acchdrbr").style.borderBottom = "1px solid rgb(230, 235, 240)";
    } else {
        document.getElementById("acchdrbr").style.borderBottom = "0";
    };
});

// ========== body
hmbdywlbr.addEventListener('scroll', () => {
    if (hmbdywlbr.scrollTop > 250) {
        document.getElementById("scrolltotop-btn").style.display = "flex";
    } else {
        document.getElementById("scrolltotop-btn").style.display = "none";
    };
});


// ========== Activities
var srvcsnvlstg = document.getElementsByClassName('srvcslstg');
Array.prototype.forEach.call(srvcsnvlstg, function(hmbtnnvopn) {
    hmbtnnvopn.addEventListener('click', function() {
        hmbdywlbr.style.webkitTransition = "0s";
        hmbdywlbr.style.transition = "0s";
        hmbdywlbr.style.opacity = "0";
        document.getElementById("nvbrscnt").style.webkitTransition = "ease-out 0.3s";
        document.getElementById("nvbrscnt").style.transition = "ease-out 0.3s";
        document.getElementById("nvbrscnt").style.display = "block";
        document.getElementById("nvbrscnt").style.opacity = "0";
        document.getElementById("nvbrscnt").style.webkitTransform = "scale(0.9)";
        document.getElementById("nvbrscnt").style.transform = "scale(0.9)";
        setTimeout(() => {
            hmbdywlbr.style.webkitTransform = "scale(1.1)";
            hmbdywlbr.style.transform = "scale(1.1)";
            $('#nvrhtsrcbr').show();
            $('#nvuitmslst').show();
            document.getElementById("nvbrscnt").style.opacity = "1";
            document.getElementById("nvbrscnt").style.webkitTransform = "scale(1)";
            document.getElementById("nvbrscnt").style.transform = "scale(1)";
        }, 0);
    });
});
$('#srvcwbstclk').click(function() {
    setTimeout(() => {
        wbstscr.trigger('click');
    }, 100);
});
$('#srvcmktnclk').click(function() {
    setTimeout(() => {
        mktgscr.trigger('click');
    }, 100);
});
$('#srvcmngtclk').click(function() {
    setTimeout(() => {
        mngmscr.trigger('click');
    }, 100);
});
$('#srvcplngclk').click(function() {
    setTimeout(() => {
        plngscr.trigger('click');
    }, 100);
});
$('#srvcmdiaclk').click(function() {
    setTimeout(() => {
        mdiascr.trigger('click');
    }, 100);
});
$('#srvcsrvcclk').click(function() {
    setTimeout(() => {
        srvcscr.trigger('click');
    }, 100);
});
$('#nvlstgsl').click(function() {
    nvbrseccnt.style.display = "none";
    $('#nvbdycnt').hide();
    document.getElementById("nvsecbrscnt").style.display = "block";
    document.getElementById("nvinrbrscnt").style.paddingTop = "40px";
});
$(document).ready(function() {
    document.getElementById("srvcwbstclk").lastElementChild.innerHTML = document.getElementById("nvbrwbste").lastElementChild.innerHTML;
    document.getElementById("srvcmktnclk").lastElementChild.innerHTML = document.getElementById("nvbrmktng").lastElementChild.innerHTML;
    document.getElementById("srvcmngtclk").lastElementChild.innerHTML = document.getElementById("nvbrmngmnt").lastElementChild.innerHTML;
    document.getElementById("srvcplngclk").lastElementChild.innerHTML = document.getElementById("nvbrplnng").lastElementChild.innerHTML;
    document.getElementById("srvcmdiaclk").lastElementChild.innerHTML = document.getElementById("nvbrmedia").lastElementChild.innerHTML;
    document.getElementById("srvcsrvcclk").lastElementChild.innerHTML = document.getElementById("nvbrsrvcs").lastElementChild.innerHTML;

    document.getElementById("hmbrinrspn").innerHTML = document.getElementById("nvbpsnlzinrspn").innerHTML;
    document.getElementById("acnvbpsnlzinrspn").innerHTML = document.getElementById("nvbpsnlzinrspn").innerHTML;
});

$('#hmnvbrbk').click(function() {
    hmbdywlbr.style.webkitTransition = "ease-out 0.3s";
    hmbdywlbr.style.transition = "ease-out 0.3s";
    hmbdywlbr.style.opacity = "1";
    document.getElementById("nvbrscnt").style.webkitTransition = "0s";
    document.getElementById("nvbrscnt").style.transition = "0s";
    document.getElementById("nvbrscnt").style.opacity = "0";
    setTimeout(function() {
        hmbdywlbr.style.webkitTransform = "scale(1)";
        hmbdywlbr.style.transform = "scale(1)";
        document.getElementById("nvbrscnt").style.display = "none";
        
        srchnvitms.value = '';
        nvbrseccnt.style.display = "block";
        document.getElementById("nvsrcicn").style.display = "block";
        document.getElementById("nvsrchiptclr").style.display = "none";
        document.getElementById("nvsrchrbr").style.display = "none";
        document.getElementById("nvcntinrbrfst").lastElementChild.style.display = "block";
        document.getElementById("nvsecbrscnt").style.display = "none";
        document.getElementById("nvinrbrscnt").style.paddingTop = "90px";
    }, 0);
});
var srchnvitms = document.getElementById("dvlgnvsrch");
srchnvitms.onfocus = function() {
    if (srchnvitms.value.length <= 0) {
        document.getElementById("nvsrcicn").style.display = "none";
    }
};
srchnvitms.onblur = function() {
    if (srchnvitms.value.length <= 0) {
        document.getElementById("nvsrcicn").style.display = "block";
    }
};
const nvbrseccnt = document.querySelector('.dvgnvbrcnt')
function nvsrchbr() {
    if (srchnvitms.value.length >= 1) {
        nvbrseccnt.style.display = "none";
        document.getElementById("nvsrchiptclr").style.display = "flex";
        document.getElementById("nvsrchrbr").style.display = "block";
        document.getElementById("nvcntinrbrfst").lastElementChild.style.display = "none";
    }
    else {
        if (document.getElementById("nvsecbrscnt").style.display === "block") {
            nvbrseccnt.style.display = "none";
        } else {
            nvbrseccnt.style.display = "block";
        };
        document.getElementById("nvsrchiptclr").style.display = "none";
        document.getElementById("nvsrchrbr").style.display = "none";
        document.getElementById("nvcntinrbrfst").lastElementChild.style.display = "block";
    }
};
$('#nvsrchiptclr').click(function() {
    srchnvitms.value = '';
    srchnvitms.focus();
    if (document.getElementById("nvsecbrscnt").style.display === "block") {
        nvbrseccnt.style.display = "none";
    } else {
        nvbrseccnt.style.display = "block";
    };
    document.getElementById("nvsrchiptclr").style.display = "none";
    document.getElementById("nvsrchrbr").style.display = "none";
    document.getElementById("nvcntinrbrfst").lastElementChild.style.display = "block";
});
var nvbtnsclk = document.getElementsByClassName('dvlgnvbtn');
Array.prototype.forEach.call(nvbtnsclk, function(nvbrbtnclk) {
    nvbrbtnclk.addEventListener('click', function(dvgnvcntnr) {
        nvbrbtnclk.scrollIntoView({behavior: 'smooth', inline: 'center'});
        $('#nvbdycnt').show();
        document.getElementById("psnlzedt").innerHTML = " " + dvgnvcntnr.target.lastElementChild.innerHTML + " ";
        document.getElementById("nvinritmstpbr").innerHTML = dvgnvcntnr.target.lastElementChild.innerHTML;
        //dvgnvcntnr.target.clone().appendTo('#mnlstinrbrimg');
    });
});
var mdscnvcntlitm = document.getElementById("dvlgnvcntbtn");
var mdascnvlst = mdscnvcntlitm.getElementsByClassName("dvlgnvbtn");
for (var iectscnv = 0; iectscnv < mdascnvlst.length; iectscnv++) {
    mdascnvlst[iectscnv].addEventListener("click", function() {
        var mdscnvntdnli = document.getElementsByClassName("dvgnvactbtn");
        if (mdscnvntdnli.length > 0) { 
            mdscnvntdnli[0].className = mdscnvntdnli[0].className.replace(" dvgnvactbtn", "");
        }
        this.className += " dvgnvactbtn";
    });
};
var wbstscr = $('#nvbrwbste');
var mktgscr = $('#nvbrmktng');
var mngmscr = $('#nvbrmngmnt');
var plngscr = $('#nvbrplnng');
var mdiascr = $('#nvbrmedia');
var srvcscr = $('#nvbrsrvcs');
wbstscr.click(function() {
    document.getElementById("wbstnvbdybr").style.display = "block";
    $('#mktgnvbdybr, #mngtnvbdybr, #plngnvbdybr, #mdianvbdybr, #svcsnvbdybr').hide();
    $('#stwd-fturbar').show();
});
mktgscr.click(function() {
    document.getElementById("mktgnvbdybr").style.display = "block";
    $('#wbstnvbdybr, #mngtnvbdybr, #plngnvbdybr, #mdianvbdybr, #svcsnvbdybr').hide();
    $('#mrkt-fturbar').show();
});
mngmscr.click(function() {
    document.getElementById("mngtnvbdybr").style.display = "block";
    $('#wbstnvbdybr, #mktgnvbdybr, #plngnvbdybr, #mdianvbdybr, #svcsnvbdybr').hide();
    $('#mngm-fturbar').show();
});
plngscr.click(function() {
    document.getElementById("plngnvbdybr").style.display = "block";
    $('#wbstnvbdybr, #mktgnvbdybr, #mngtnvbdybr, #mdianvbdybr, #svcsnvbdybr').hide();
    $('#plng-fturbar').show();
});
mdiascr.click(function() {
    document.getElementById("mdianvbdybr").style.display = "block";
    $('#wbstnvbdybr, #mktgnvbdybr, #mngtnvbdybr, #plngnvbdybr, #svcsnvbdybr').hide();
    $('#mdia-fturbar').show();
});
srvcscr.click(function() {
    document.getElementById("svcsnvbdybr").style.display = "block";
    $('#wbstnvbdybr, #mktgnvbdybr, #mngtnvbdybr, #plngnvbdybr, #mdianvbdybr').hide();
    $('#srvc-fturbar').show();
});
$('#nvsrchrbr, #nvinrbrscnt').on('scroll', function() {
    if (nvsrchrbr.scrollTop > 10 || nvinrbrscnt.scrollTop > 10) {
        document.getElementById("nvhdrbr").style.borderBottom = "1px solid rgb(230, 235, 240)";
    } else {
        document.getElementById("nvhdrbr").style.borderBottom = "0";
    };
});
// Activity info button
var actInfoBtn = document.getElementsByClassName('act-info-btn');
Array.prototype.forEach.call(actInfoBtn, function(infoBtn) {
    window.addEventListener('click', function(callText){
        if (infoBtn.contains(callText.target)){
            infoBtn.parentNode.style.border = "1px solid #e6ebf0";
            infoBtn.parentNode.style.overflow = "hidden";
            infoBtn.style.margin = "10px 10px 5px auto";
            infoBtn.nextElementSibling.style.display = "block";
        } else{
            infoBtn.parentNode.style.border = "0";
            infoBtn.parentNode.style.overflow = "initial";
            infoBtn.style.margin = "0 0 0 auto";
            infoBtn.nextElementSibling.style.display = "none";
        };
    });
});
// Second activity buttons
var dvgscnvbtnclk = document.getElementsByClassName('dvgsecnvbtn');
Array.prototype.forEach.call(dvgscnvbtnclk, function(nvsecbrbtnclk) {
    nvsecbrbtnclk.addEventListener('click', function() {
        nvbrseccnt.style.display = "block";
        document.getElementById("nvinrbrscnt").style.paddingTop = "90px";
        document.getElementById("nvsecbrscnt").style.display = "none";
    });
});
$('#nvsecwbstclk').click(function() {
    wbstscr.trigger('click');
});
$('#nvsecmktnclk').click(function() {
    mktgscr.trigger('click');
});
$('#nvsecmngtclk').click(function() {
    mngmscr.trigger('click');
});
$('#nvsecplngclk').click(function() {
    plngscr.trigger('click');
});
$('#nvsecmdiaclk').click(function() {
    mdiascr.trigger('click');
});
$('#nvsecsrvcclk').click(function() {
    srvcscr.trigger('click');
});
$(document).ready(function() {
    document.getElementById("nvsecwbstclk").lastElementChild.innerHTML = document.getElementById("nvbrwbste").lastElementChild.innerHTML;
    document.getElementById("nvsecmktnclk").lastElementChild.innerHTML = document.getElementById("nvbrmktng").lastElementChild.innerHTML;
    document.getElementById("nvsecmngtclk").lastElementChild.innerHTML = document.getElementById("nvbrmngmnt").lastElementChild.innerHTML;
    document.getElementById("nvsecplngclk").lastElementChild.innerHTML = document.getElementById("nvbrplnng").lastElementChild.innerHTML;
    document.getElementById("nvsecmdiaclk").lastElementChild.innerHTML = document.getElementById("nvbrmedia").lastElementChild.innerHTML;
    document.getElementById("nvsecsrvcclk").lastElementChild.innerHTML = document.getElementById("nvbrsrvcs").lastElementChild.innerHTML;
});
var nvlstitsmdrct = document.getElementsByClassName('nvbritmdrct');
Array.prototype.forEach.call(nvlstitsmdrct, function(nvlstdr) {
    nvlstdr.addEventListener('click', function() {
        document.getElementById("nvcntinrbrfst").style.opacity = "0";
        document.getElementById("nvcntinrbrfst").style.webkitTransform = "scale(0.9)";
        document.getElementById("nvcntinrbrfst").style.transform = "scale(0.9)";
        document.getElementById("nvcntinrbrsc").style.display = "block";
        setTimeout(() => {
            document.getElementById("nvcntinrbrfst").style.display = "none";
            document.getElementById("nvcntinrbrsc").style.right = "0%";
            document.getElementById("lstinrbrnm").innerHTML = nvlstdr.firstElementChild.lastElementChild.innerHTML;
        }, 100);
    });
});
$('#nvbrpsnlz').click(function() {
    if (document.getElementById("wbstnvbdybr").style.display === "block") {
        location.href = "/personalize/personalize website.html";
    };
    if (document.getElementById("mktgnvbdybr").style.display === "block") {
        location.href = "/personalize/personalize marketing.html";
    };
    if (document.getElementById("mngtnvbdybr").style.display === "block") {
        location.href = "/personalize/personalize management.html";
    };
    if (document.getElementById("plngnvbdybr").style.display === "block") {
        location.href = "/personalize/personalize planning.html";
    };
    if (document.getElementById("mdianvbdybr").style.display === "block") {
        location.href = "/personalize/personalize media.html";
    };
    if (document.getElementById("svcsnvbdybr").style.display === "block") {
        location.href = "/personalize/personalize services.html ";
    };
});
$('#nvinrscbrbk').click(function() {
    document.getElementById("nvcntinrbrsc").style.right = "-100%";
    setTimeout(() => {
        document.getElementById("nvcntinrbrfst").style.display = "block";
        setTimeout(() => {
            document.getElementById("nvcntinrbrsc").style.display = "none";
            document.getElementById("nvcntinrbrfst").style.opacity = "1";
            document.getElementById("nvcntinrbrfst").style.webkitTransform = "scale(1)";
            document.getElementById("nvcntinrbrfst").style.transform = "scale(1)";
            
            $('#stwd-fturbar').hide();
            $('#mrkt-fturbar').hide();
            $('#mngm-fturbar').hide();
            $('#plng-fturbar').hide();
            $('#mdia-fturbar').hide();
            $('#srvc-fturbar').hide();
        }, 50);
    }, 200);
});
$('#actitems-inrbar').click(function() {
    if (document.getElementById("actitems-inrbar").lastElementChild.style.display !== "block") {
        document.getElementById("actitems-inrbar").style.borderRadius = "14px";
        document.getElementById("actitems-inrbar").lastElementChild.style.display = "block";
        document.getElementById("act-item-info").style.marginRight = "10px";
    } else {
        document.getElementById("actitems-inrbar").style.borderRadius = "6px";
        document.getElementById("actitems-inrbar").lastElementChild.style.display = "none";
        document.getElementById("act-item-info").style.marginRight = "0";
    };
});

// ========= customer support
$('#ctmrspt').on('click', function() {
    document.getElementById("customer-support").style.display = "block"
});
const sptchtsdt = new Date();
const gtmnt = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var getalldate =  gtmnt[sptchtsdt.getMonth()] + " " + sptchtsdt.getDate() + "," + " " + sptchtsdt.getFullYear();//(sptchtsdt.getMonth() + 1)
var sprtsrvrdt = document.getElementById('date-support-server');
$(document).ready(function() {
    sprtsrvrdt.innerHTML = getalldate;
});

// ========== scroll to top
$('#scrolltotop-btn').click(function() {
    document.getElementById("body-nav").scrollIntoView({behavior: 'smooth'});
});

// ========== Details
$('#company-location').click(function() {window.open("https://goo.gl/maps/NeEP7Vz9j99tMLSg7", "_blank");});
$('#dvgeml').click(function() {location.href = "mailto:mekkynworu@gmail.com";});
$('#wtsapdrt').click(function() {window.open("https://www.whatsapp.com/", "_blank");});
$('#clldrt').click(function() {location.href = "tel:+2347037852061";});
window.addEventListener('click', function(callText){
    if (document.getElementById('clldrt').contains(callText.target)){
        document.getElementById("call-text").innerHTML = "+234 703 785 2061";
    } else{
        document.getElementById("call-text").innerHTML = "Call";
    };
});
$('#dvlgabt').click(function() {location.href = "/about us/abtus.html";});
$(document).ready(function() {
    $('#hmrcnrpplr').clone().appendTo('#nvuitmslst');
    $('#hmrcnrpplr').clone().appendTo('#hmsrhrctpplr');
});





