var arr = [
    {
        qoute: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        qoute: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        qoute: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch"
    },
    {
        qoute: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss"
    },
    {
        qoute: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    }
]
var num = arr.length;
var random;
function randomQuote() {
    if (random == arr[Math.floor(Math.random() * num)]) {
        randomQuote();
        
    } else {


        random = arr[Math.floor(Math.random() * num)];
        document.getElementById("quotes").innerHTML = random.qoute;
        document.getElementById("author").innerHTML = "-- " + random.author;
    }
}