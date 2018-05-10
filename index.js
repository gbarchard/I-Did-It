function SendEmail () {
    var RandomEmailIndex = Math.floor(Math.random() * 4);
    var RandomEmailMessages = ["Suck It","I dominate","You're up, bro","Bring it!"]
    var MyEmail = 'mailto:les.barchard@gmail.com,grant.barchard@gmail.com,travis.massey@ncr.com?subject=I Did It&body='+RandomEmailMessages[RandomEmailIndex]
    window.open(MyEmail);
}
function GetEmails () {
    window.prompt("Add Email");
}