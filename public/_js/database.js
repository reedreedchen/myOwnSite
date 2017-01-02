//renee chia-lei chen 12-23-2016

var userNumber = 0;
var loginEmail, loginPassword;
var content;
var currentPrivacy=0;
function runDatabase()
{
	const config = {
	apiKey: "AIzaSyDR0mtaANTClk9D_0NwO4TQWqMfJtHRirs",
	authDomain: "reneechenwork.firebaseapp.com",
	databaseURL: "https://reneechenwork.firebaseio.com",
	storageBucket: "reneechenwork.appspot.com",
	messagingSenderId: "728769274238"
	};
	firebase.initializeApp(config);
	
	
	const rootRef = firebase.database().ref();
	const msgBoard = rootRef.child('messageBoard');

	msgBoard.on('value',function(snap){loadUserNumber(snap.numChildren())});//loadUserNumber()
}

function loadUserNumber(x) {
    userNumber = x;
    resetMsg();
}

function resetMsg() {
    document.getElementById('messageTable').innerHTML = "";
    loadMsg();
}

//print all data on database with printData()
function loadMsg()
{
    if (userNumber > 0)
    {
        if (localStorage.getItem('lang') == "zh-Hant-TW")
            document.getElementById("savedMessage").innerHTML = "先前的留言:";
        else
            document.getElementById("savedMessage").innerHTML = "Saved Message:";
        detectLang();
        for (i = userNumber - 1; i >= 0; i--)
        {
            console.log("currentlyLoadingUser:" + userNumber);
            var ref = firebase.database().ref('messageBoard').child(i);
            ref.child('privacy').on('value', function (snapshot) { colletctData("privacy", snapshot.val(), i) });
            ref.child('username').on('value', function (snapshot) { colletctData("name", snapshot.val(), i) });
            ref.child('email').on('value', function (snapshot) { colletctData("email", snapshot.val(), i) });
            ref.child('message').on('value', function (snapshot) { colletctData("msg", snapshot.val(), i) });
            ref.child('datetime').on('value', function (snapshot) { colletctData("datetime", snapshot.val(), i) });;
            ref.child('response').on('value', function (snapshot) { colletctData("rsp", snapshot.val(), i) });
            printData();
        } 
    } else {
        document.getElementById("savedMessage").innerHTML = "";
        if (localStorage.getItem('lang') == "zh-Hant-TW")
            document.getElementById('error').innerHTML = "<span class='text'>目前還沒有留言。</span>";
        else
            document.getElementById('error').innerHTML = "<span class='text'>The message board is empty.</span>";
    }


}

function colletctData(type, value, i) {
    if (type == "privacy") {
        currentPrivacy = value;
    }
    else if (type == "name")
        if (localStorage.getItem('lang') == "zh-Hant-TW")
            content = "<table><tr><td><span class='text'>姓名:</span></td><td><span class='text'>" + value + "</td></tr>";
        else
            content = "<table><tr><td><span class='text'>Name:</span></td><td><span class='text'>" + value + "</td></tr>";
    else if (type == "email") {
        if (!currentPrivacy) {
            if (localStorage.getItem('lang') == "zh-Hant-TW")
                content += "<tr><td><span class='text'>電子信箱:</span></td><td><span class='text'>" + value + "</span></td></tr>";
            else
                content += "<tr><td><span class='text'>Email:</span></td><td><span class='text'>" + value + "</span></td></tr>";
        } else {
            if (localStorage.getItem('lang') == "zh-Hant-TW")
                content += "<tr><td><span class='text'>電子信箱:</span></td><td><span class='text'>這是一則隱藏留言。</span></td></tr>";
            else
                content += "<tr><td><span class='text'>Email:</span></td><td><span class='text'>This message is private.</span></td></tr>";
        }
    }
    else if (type == "msg")
    {
        if (!currentPrivacy) {
            if (localStorage.getItem('lang') == "zh-Hant-TW")
                content += "<tr><td><span class='text'>留言內容:</span></td><td><span class='text'>" + value + "</span></td></tr>"
            else
                content += "<tr><td><span class='text' >Message:</span></td><td><span class='text'>" + value + "</span></td></tr>"
        } else {
            if (localStorage.getItem('lang') == "zh-Hant-TW")
                content += "<tr><td><span class='text' id='msgText'>留言內容:</span></td><td><span class='text'>這是一則隱藏留言。</span></td></tr>";
            else
                content += "<tr><td><span class='text' id='msgText'>Message:</span></td><td><span class='text'>This message is private.</span></td></tr>";
        }
    } else if (type == "datetime")
    {

            if (localStorage.getItem('lang') == "zh-Hant-TW")
                content += "<tr><td><span class='text'>時間:</span></td><td><span class='text'>" + value + "</span></td></tr>"
            else
                content += "<tr><td><span class='text' >Time:</span></td><td><span class='text'>" + value + "</span></td></tr>"
    }
    else if (type == "rsp") {
        if (value != null)
        {
            if (localStorage.getItem('lang') == "zh-Hant-TW")
                content += "<tr><td><span class='text'>回覆:</span></td><td><span class='text'>" + value + "</span></td></tr></table>";
            else
                content += "<tr><td><span class='text' >Response:</span></td><td><span class='text'>" + value + "</span></td></tr></table>";
        } else
        {
            if (localStorage.getItem('lang') == "zh-Hant-TW")
                content += "<tr><td><span class='text'>回覆:</span></td><td><span class='text'>尚未回覆</span></td></tr></table>";
            else
                content += "<tr><td><span class='text' >Response:</span></td><td><span class='text'>Not responded yet</span></td></tr></table>";
        }
        if (i != 0) content += "<hr/>";
    }
}
function printData() {
    document.getElementById('messageTable').innerHTML += content;
}
//delete from database
function deleteData()
{
    if (userNumber != 0) {
        var msgBoard = firebase.database().ref().child('messageBoard');
        msgBoard.child(userNumber - 1).remove();
        msgBoard.on('value', function (snap) { loadUserNumber(snap.numChildren()) });
        resetMsg();
        document.getElementById('error').innerHTML = "<span class='text'>message deleted</span>";
    } else
    {
        document.getElementById('error').innerHTML = "<span class='text'>no message to delete</span>";
    }
}


function openBox() {
    if (document.getElementById('messageBox').style.display == 'none')
    {
        document.getElementById('error').innerHTML = "";
        $('.messageBox').css('display', 'block');
        if (localStorage.getItem('lang') == "zh-Hant-TW")
            document.getElementById('toggleMessageLink').innerHTML = "<a class='pinkText' href='javastript:void(0)' onclick='writeUserData()'>儲存</a> <a class='pinkText' href='javastript:void(0)' onclick='openBox()'>關閉</a>"
        else
            document.getElementById('toggleMessageLink').innerHTML = "<a class='pinkText' href='javastript:void(0)' onclick='writeUserData()'>save</a> <a class='pinkText' href='javastript:void(0)' onclick='openBox()'>close</a>"
    }
    else if (document.getElementById('messageBox').style.display == 'block' || document.getElementById('messageBox').style.display == '') {
        $('.messageBox').css('display', 'none');
        if(localStorage.getItem('lang') == "zh-Hant-TW") 
            document.getElementById('toggleMessageLink').innerHTML = "<a class='pinkText' href='javastript:void(0)' onclick='openBox()'>留言</a>";
        else
            document.getElementById('toggleMessageLink').innerHTML = "<a class='pinkText' href='javastript:void(0)' onclick='openBox()'>leave message</a>";
    }
    if (userNumber > 0)
        document.getElementById('error').innerHTML = "";
    else document.getElementById('error').innerHTML = "<span class='text'>The message board is empty.</span>";
}


//write to database
function writeUserData()
{
    resetMsg();
    var name = HtmlEncode(document.getElementById('nameInput').value);
    var email = HtmlEncode(document.getElementById('emailInput').value);
    var msg = HtmlEncode(document.getElementById('msgInput').value);
    var privacy = document.getElementById('privacyInput').checked;
    var datetime = new Date().toString('MM-dd-yyyy');



    if (name != "" && email != "" && msg != "")
    {
        firebase.database().ref('messageBoard/' + userNumber).set({
            username: name,
            email: email,
            message: msg,
            privacy: privacy,
            datetime: datetime
        });
        console.log("dataSavedOnFirebase");
        if (localStorage.getItem('lang') == "zh-Hant-TW") {
            document.getElementById('error').innerHTML = "<span class='text'>謝謝您的留言! 我會盡快回覆。</span>";
            document.getElementById('toggleMessageLink').innerHTML = "<a class='pinkText' href='javastript:void(0)' onclick='openBox()'>留言</a>";
        }
        else {
            document.getElementById('error').innerHTML = "<span class='text'>Thank you! I will get back to you soon.</span>";
            document.getElementById('toggleMessageLink').innerHTML = "<a class='pinkText' href='javastript:void(0)' onclick='openBox()'>leave message</a>";
        }
        $('.messageBox').css('display', 'none');

        document.getElementById('nameInput').value = "";
        document.getElementById('emailInput').value = "";
        document.getElementById('msgInput').value = "";
        document.getElementById('privacyInput').checked = false;
    }
    else
    {
        if (localStorage.getItem('lang') == "zh-Hant-TW")
            document.getElementById('error').innerHTML = "<span class='text'>所有資料都必須有內容。</span>";
        else
            document.getElementById('error').innerHTML = "<span class='text'>All areas are required to leave me a message.</span>";
    }

    saveValue();//save "" to local memory as well

}


//autosave inputs to prevent crash
function loadValue()
{
    document.getElementById('nameInput').value = localStorage.getItem('nameInput');
    document.getElementById('emailInput').value = localStorage.getItem('emailInput');
    document.getElementById('msgInput').value = localStorage.getItem('msgInput');
    if (localStorage.getItem('privacyInput') == "checked")
        document.getElementById('privacyInput').checked = true;
    else if (localStorage.getItem('privacyInput') == "unchecked") document.getElementById('privacyInput').checked = false;
}

function saveValue()
{
    localStorage.setItem('nameInput', document.getElementById('nameInput').value);
    localStorage.setItem('emailInput', document.getElementById('emailInput').value);
    localStorage.setItem('msgInput', document.getElementById('msgInput').value);
    if (document.getElementById('privacyInput').checked)
        localStorage.setItem('privacyInput', "checked");
    else
        localStorage.setItem('privacyInput', "unchecked");
 
}

//this function prevents user from modifying the board using HTML code.
//found here -> http://stackoverflow.com/questions/784586/convert-special-characters-to-html-in-javascript
function HtmlEncode(s)
{
    var el = document.createElement("div");
    el.innerText = el.textContent = s;
    s = el.innerHTML;
    return s;
}