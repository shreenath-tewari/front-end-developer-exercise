//Text
var bodyBabySteps = [
    "An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen; it’s simply a matter of when they will happen. This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!",
    "List your debts, excluding the house, in order. The smallest balance should be your number one priority. Don’t worry about interest rates unless two debts have similar payoffs. If that’s the case, then list the higher interest rate debt first. The point of the debt snowball is simply this: You need some quick wins in order to stay pumped up about getting out of debt! Paying off debt is not always about math. It’s about motivation. Personal finance is 20% head knowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt.",
    "Once you complete the first two baby steps, you will have built serious momentum. But don’t start throwing all your “extra” money into investments quite yet. It’s time to build your full emergency fund. Ask yourself, “What would it take for me to live for three to six months if I lost my income?” Your answer to that question is how much you should save. Use this money for emergencies only: incidents that would have a major impact on you and your family. Keep these savings in a money market account. Remember, this stash of money is not an investment; it is insurance you’re paying to yourself, a buffer between you and life.",
    "When you reach this step, you’ll have no payments—except the house—and a fully funded emergency fund. Now it’s time to get serious about building wealth. Dave su]ggests investing 15% of your household income into Roth IRAs and pre-tax retirement plans. Don’t invest more than that because the extra money will help you complete the next two steps: college savings and paying off your home early.",
    "By this point, you should have already started Baby Step 4—investing 15% of your income—before saving for college. Whether you are saving for you or your child to go to college, you need to start now.In order to have enough money saved for college, you need to have a goal. Determine how much per month you should be saving at 12% interest in order to have enough for college. If you save at 12% and inflation is at 4%, then you are moving ahead of inflation at a net of 8% per year!",
    "Now it’s time to begin chunking all of your extra money toward the mortgage. You are getting closer to realizing the dream of a life with no house payments. As you attack this last debt, you will gain momentum much like you did back in the second step of the debt snowball. Remember, having absolutely no payments is totally within your reach!",
    "It’s time to build wealth and give like never before. Leave an inheritance for future generations, and bless others now with your excess. It's really the only way to live! Golda Meir says, “You can’t shake hands with a clenched fist.” Vow to never hold your money so tightly that you never give any away. Hoarding money is not the way to wealth. Save for yourself, save for your family’s future, and be gracious enough to bless others. You can do all three at the same time."
];

var subHeadings = [
    "$1,000 Emergency Fund",
    "Pay off all debt using the Debt Snowball",
    "3 to 6 months of exepenses in savings",
    "Invest 15% of household income for retirement",
    "College funding for children",
    "Pay off your house early",
    "Build wealth and give!"
];

//Default Load
document.addEventListener("DOMContentLoaded", function() {
    bodyText(1);
});

//Utility Function
function compare(friend1, friend2) {
    if(friend1.lastName>friend2.lastName)
        return 1;
    if(friend1.lastName<friend2.lastName)
        return -1;
    return 0;
}

function babyStepFriends(n) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(this.readyState==4 && this.status==200) {
            var response1 = JSON.parse(this.response);
            var friends = response1.friends;

            sameBabyStepFriends = [];
            for(var i=0; i<friends.length; i++) {
                var friend = friends[i];
                if(friend.babyStep == n) {
                    sameBabyStepFriends.push(friend);
                }
            }
            sameBabyStepFriends.sort(compare);
            var msg = "";
            switch(sameBabyStepFriends.length) {
                case 0:
                    msg = "";
                    break;
                case 1:
                    msg = '<span class="dynamic-element-name">' + sameBabyStepFriends[0].firstName + " " + sameBabyStepFriends[0].lastName + '</span>' + '<span class="dynamic-element-other">' + " is also in Baby Step " + n + '</span>';
                    break;
                case 2:
                    msg = '<span class="dynamic-element-name">' + sameBabyStepFriends[0].firstName + " " + sameBabyStepFriends[0].lastName + '</span>' + '<span class="dynamic-element-other">' + " and " + '</span>' + '<span class="dynamic-element-name">' + sameBabyStepFriends[1].firstName + " " + sameBabyStepFriends[1].lastName + '</span>' + '<span class="dynamic-element-other">' + " are also in Baby Step " + n + '</span>';
                    break;
                case 3:
                    msg = '<span class="dynamic-element-name">' + sameBabyStepFriends[0].firstName + " " + sameBabyStepFriends[0].lastName + '</span>' + '<span class="dynamic-element-other">' + ", " + '</span>' + '<span class="dynamic-element-name">' + sameBabyStepFriends[1].firstName + " " + sameBabyStepFriends[1].lastName + '</span>' + '<span class="dynamic-element-other">' + "and 1 other friend are also in Baby Step " + n + '</span>';
                    break;
                default:
                    msg = '<span class="dynamic-element-name">' + sameBabyStepFriends[0].firstName + " " + sameBabyStepFriends[0].lastName + '<span class="dynamic-element-other">' + ", " + '</span>' + '<span class="dynamic-element-name">' + sameBabyStepFriends[1].firstName + " " + sameBabyStepFriends[1].lastName + '</span>' + '<span class="dynamic-element-other">' + " and 2 other friends are also in Baby Step " + n + '</span>';
                    break;
            }
            document.getElementById('dynamic-element').innerHTML = msg;
        }
    };

    xhr.open("GET", "baby-steps.json", true);
    xhr.send();
}


function bodyText(n) {
    document.getElementById('img-heading').src = "assets/images/icons/individual/icons_large_bs"+n+"_blue.png";
    document.getElementById('main-heading').innerHTML = "Baby Step " + n;
    document.getElementById('sub-heading').innerHTML = subHeadings[n-1];
    document.getElementById('baby-step-body').innerHTML = bodyBabySteps[n-1];
    babyStepFriends(n);
};

function mouseHover(n) {
    document.getElementById('text'+n).style.color = "#36abe1";
    document.getElementById('text'+n).style.fontWeight = 600;
    document.getElementById('img'+n).src = "assets/images/icons/individual/icons_small_bs" + n +"_blue.png";
};

function mouseOut(n) {
    document.getElementById('text'+n).style.color = "#9ba0a4";
    document.getElementById('text'+n).style.fontWeight = 400;
    document.getElementById('img'+n).src = "assets/images/icons/individual/icons_small_bs" + n + ".png";
};

//Click Event
document.getElementById('item1').addEventListener("click", function() {
    bodyText(1);
});

document.getElementById('item2').addEventListener("click", function() {
    bodyText(2);
});

document.getElementById('item3').addEventListener("click", function() {
    bodyText(3);
});

document.getElementById('item4').addEventListener("click", function() {
    bodyText(4);
});

document.getElementById('item5').addEventListener("click", function() {
    bodyText(5);
});

document.getElementById('item6').addEventListener("click", function() {
    bodyText(6);
});

document.getElementById('item7').addEventListener("click", function() {
    bodyText(7);
});

//Mouseover Event
document.getElementById('item1').addEventListener("mouseover",function() {
    mouseHover(1);
});
document.getElementById('item1').addEventListener("mouseout",function() {
    mouseOut(1);
});

document.getElementById('item2').addEventListener("mouseover",function() {
    mouseHover(2);
});
document.getElementById('item2').addEventListener("mouseout",function() {
    mouseOut(2);
});

document.getElementById('item3').addEventListener("mouseover",function() {
    mouseHover(3);
});
document.getElementById('item3').addEventListener("mouseout",function() {
    mouseOut(3);
});

document.getElementById('item4').addEventListener("mouseover",function() {
    mouseHover(4);
});
document.getElementById('item4').addEventListener("mouseout",function() {
    mouseOut(4);
});

document.getElementById('item5').addEventListener("mouseover",function() {
    mouseHover(5);
});
document.getElementById('item5').addEventListener("mouseout",function() {
    mouseOut(5);
});

document.getElementById('item6').addEventListener("mouseover",function() {
    mouseHover(6);
});
document.getElementById('item6').addEventListener("mouseout",function() {
    mouseOut(6);
});

document.getElementById('item7').addEventListener("mouseover",function() {
    mouseHover(7);
});
document.getElementById('item7').addEventListener("mouseout",function() {
    mouseOut(7);
});

