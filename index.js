function SendEmail () {
    var RandomEmailIndex = Math.floor(Math.random() * 4);
    var RandomEmailMessages = ["Suck It","I dominate","You're up, bro","Bring it!"]
    var EmailList =localStorage.getItem("email")
    var MyEmail = 'mailto:'+EmailList+'?subject=I Did It&body='+RandomEmailMessages[RandomEmailIndex]
    window.open(MyEmail)
}
function GetEmails () {
    email = window.prompt("Add Email")
    console.log(email)
    email = email+","+localStorage.getItem("email")
    localStorage.setItem("email",email)
}
//les.barchard@gmail.com,grant.barchard@gmail.com,travis.massey@ncr.com