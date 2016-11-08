var slots;
var gold;
slotitem = new Array('0','1','2','3','4','5','6','7','8','9');
document.slots.bet.focus();
startgold=25;
document.slots.gold.value=startgold;

function stopplay () {
    if (document.slots.gold.value < startgold)
    {alert("You lost "+ (startgold-document.slots.gold.value) +" gold pieces.   ");}
    else 	{alert("You gained "+ (document.slots.gold.value-startgold) +" gold pieces.   ");}
}
function rollem () {

    if (document.slots.bet.value<1 || document.slots.bet.value == "") {alert("You cannot bet less that 1.   "); return;}

    if (Math.floor(document.slots.gold.value) < Math.floor(document.slots.bet.value)) {alert("Your bet "+document.slots.bet.value+" is larger than your remaining gold "+document.slots.gold.value+".  "); return;}

    if (document.slots.bet.value>1) {document.slots.banner.value="Bet is "+document.slots.bet.value+" gold pieces";}

    else {document.slots.banner.value="Bet is "+document.slots.bet.value+" gold piece";}
    counter=0;
    spinem();
}
function spinem() {

    turns1=10+Math.floor((Math.random() * 10));

    for (a=0;a<turns1;a++)
    {document.slots.slot1.src=""+slotitem[a % 9]+".gif"; }

    turns2=10+Math.floor((Math.random() * 10));

    for (b=0;b<turns2;b++)

    {document.slots.slot2.src=""+slotitem[b % 9]+".gif"; }

    turns3=10+Math.floor((Math.random() * 10));

    for (c=0;c<turns3;c++)

    {document.slots.slot3.src=""+slotitem[c % 9]+".gif"; }

    counter++;

    if (counter<25) {setTimeout("spinem(counter);",50);} else {checkmatch();}
}
function checkmatch()	{

    if ((document.slots.slot1.src == document.slots.slot2.src) && (document.slots.slot1.src == document.slots.slot3.src))

    {document.slots.banner.value="3 of a kind - You won "+Math.floor(document.slots.bet.value*10)+" gold pieces";

        document.slots.gold.value=Math.floor(document.slots.gold.value)+Math.floor(document.slots.bet.value*10); }

    else if ((document.slots.slot1.src == document.slots.slot2.src) ||

        (document.slots.slot1.src == document.slots.slot3.src) ||

        (document.slots.slot2.src == document.slots.slot3.src))

    {document.slots.banner.value="A pair - You won "+Math.floor(document.slots.bet.value*2)+" gold pieces";

        document.slots.gold.value = Math.floor(document.slots.bet.value*2) + Math.floor(document.slots.gold.value);}

    else {document.slots.gold.value=document.slots.gold.value-document.slots.bet.value;

        document.slots.banner.value="No match - You lost "+document.slots.bet.value+" gold pieces";}

}
