/*
Disclaimer: I didn't import jQuery for this small piece of code
*/

var template;
updateTemplate();

function updateTemplate() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            template = this.responseText;
        }
    };
    xmlhttp.open("GET", "/template/invite.txt", true);
    xmlhttp.send();
}

function updateInviteVisibility(caller) {
    if (caller.value == '') {
        document.getElementById('invite-form').setAttribute('hidden', '');
    }
}

function generateInvite() {
    var name = document.getElementById('name').value;
    var reason = document.getElementById('reason').value;
    if (name == '' || reason == '') return;

    var content = template;
    content = content.replace(/\[name\]/g, name);
    content = content.replace("[reason]", reason);
    document.getElementById("invite").innerHTML = content;
    document.getElementById('send-email').setAttribute('href', 'mailto:?subject=A proposal for you&body=' + content);
    document.getElementById('invite-form').removeAttribute('hidden');
    document.getElementById("copy-invite-button").focus();
}

function copyInviteToClipboard() {
    var copyText = document.getElementById("invite");
    copyText.select();
    document.execCommand("copy");
}
