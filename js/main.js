/*
Disclaimer: I didn't import jQuery for this small piece of code
*/

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
    document.getElementById('send-email').setAttribute('href', 'mailto:?subject=A proposal for you&body=' + content.replace(/\r?\n/g, '%0D%0A'));
    document.getElementById('invite-form').removeAttribute('hidden');
    document.getElementById("invite").focus();
}

function copyInviteToClipboard() {
    var copyText = document.getElementById("invite");
    copyText.select();
    document.execCommand("copy");
}
