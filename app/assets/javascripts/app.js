//Text
var bodyBabyStep1 = "An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen; it’s simply a matter of when they will happen. This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!";

var bodyBabyStep2 = "List your debts, excluding the house, in order. The smallest balance should be your number one priority. Don’t worry about interest rates unless two debts have similar payoffs. If that’s the case, then list the higher interest rate debt first. The point of the debt snowball is simply this: You need some quick wins in order to stay pumped up about getting out of debt! Paying off debt is not always about math. It’s about motivation. Personal finance is 20% head knowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt.";

var bodyBabyStep3 = "Once you complete the first two baby steps, you will have built serious momentum. But don’t start throwing all your “extra” money into investments quite yet. It’s time to build your full emergency fund. Ask yourself, “What would it take for me to live for three to six months if I lost my income?” Your answer to that question is how much you should save. Use this money for emergencies only: incidents that would have a major impact on you and your family. Keep these savings in a money market account. Remember, this stash of money is not an investment; it is insurance you’re paying to yourself, a buffer between you and life.";

var bodyBabyStep4 = "When you reach this step, you’ll have no payments—except the house—and a fully funded emergency fund. Now it’s time to get serious about building wealth. Dave suggests investing 15% of your household income into Roth IRAs and pre-tax retirement plans. Don’t invest more than that because the extra money will help you complete the next two steps: college savings and paying off your home early.";

var bodyBabyStep5 = "By this point, you should have already started Baby Step 4—investing 15% of your income—before saving for college. Whether you are saving for you or your child to go to college, you need to start now.In order to have enough money saved for college, you need to have a goal. Determine how much per month you should be saving at 12% interest in order to have enough for college. If you save at 12% and inflation is at 4%, then you are moving ahead of inflation at a net of 8% per year!";

var bodyBabyStep6 = "Now it’s time to begin chunking all of your extra money toward the mortgage. You are getting closer to realizing the dream of a life with no house payments. As you attack this last debt, you will gain momentum much like you did back in the second step of the debt snowball. Remember, having absolutely no payments is totally within your reach!";

var bodyBabyStep7 = "It’s time to build wealth and give like never before. Leave an inheritance for future generations, and bless others now with your excess. It's really the only way to live! Golda Meir says, “You can’t shake hands with a clenched fist.” Vow to never hold your money so tightly that you never give any away. Hoarding money is not the way to wealth. Save for yourself, save for your family’s future, and be gracious enough to bless others. You can do all three at the same time.";

//Default Load
document.addEventListener("DOMContentLoaded",init);

function init() {
    document.getElementById('img-heading').src = "assets/images/icons/individual/icons_large_bs1_blue.png";
    document.getElementById('main-heading').innerHTML = "Baby Step 1";
    document.getElementById('sub-heading').innerHTML = "$1,000 Emergency Fund";
    document.getElementById('baby-step-body').innerHTML = bodyBabyStep1;

    /* 
    $.ajax({
        url: "baby-steps.json",
        method: "GET",
        success: function (result, status, xhr) {
            console.log(result);
        }
    });
    */

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState==4 && this.status==200) {
            console.log(JSON.parse(this.response));
        }
    };

    xhr.open("GET", "baby-steps.json", true);
    xhr.send();
};

//Click Event
document.getElementById('item1').addEventListener("click", init);

document.getElementById('item2').addEventListener("click",function() {
    document.getElementById('img-heading').src = "assets/images/icons/individual/icons_large_bs2_blue.png";
    document.getElementById('main-heading').innerHTML = "Baby Step 2";
    document.getElementById('sub-heading').innerHTML = "Pay off all debt using the Debt Snowball";
    document.getElementById('baby-step-body').innerHTML = bodyBabyStep2;
});

document.getElementById('item3').addEventListener("click",function() {
    document.getElementById('img-heading').src = "assets/images/icons/individual/icons_large_bs3_blue.png";
    document.getElementById('main-heading').innerHTML = "Baby Step 3";
    document.getElementById('sub-heading').innerHTML = "3 to 6 months of exepenses in savings";
    document.getElementById('baby-step-body').innerHTML = bodyBabyStep3;

});

document.getElementById('item4').addEventListener("click",function() {
    document.getElementById('img-heading').src = "assets/images/icons/individual/icons_large_bs4_blue.png";
    document.getElementById('main-heading').innerHTML = "Baby Step 4";
    document.getElementById('sub-heading').innerHTML = "Invest 15% of household income for retirement";
    document.getElementById('baby-step-body').innerHTML = bodyBabyStep4;
});

document.getElementById('item5').addEventListener("click",function() {
    document.getElementById('img-heading').src = "assets/images/icons/individual/icons_large_bs5_blue.png";
    document.getElementById('main-heading').innerHTML = "Baby Step 5";
    document.getElementById('sub-heading').innerHTML = "College funding for children";
    document.getElementById('baby-step-body').innerHTML = bodyBabyStep5;
});

document.getElementById('item6').addEventListener("click",function() {
    document.getElementById('img-heading').src = "assets/images/icons/individual/icons_large_bs6_blue.png";
    document.getElementById('main-heading').innerHTML = "Baby Step 6";
    document.getElementById('sub-heading').innerHTML = "Pay off your house early";
    document.getElementById('baby-step-body').innerHTML = bodyBabyStep6;
});

document.getElementById('item7').addEventListener("click",function() {
    document.getElementById('img-heading').src = "assets/images/icons/individual/icons_large_bs7_blue.png";
    document.getElementById('main-heading').innerHTML = "Baby Step 7";
    document.getElementById('sub-heading').innerHTML = "Build wealth and give!";
    document.getElementById('baby-step-body').innerHTML = bodyBabyStep7
});

//Mouseover Event
document.getElementById('item1').addEventListener("mouseover",function() {
    document.getElementById('img1').src = "assets/images/icons/individual/icons_small_bs1_blue.png";
});
document.getElementById('item1').addEventListener("mouseout",function() {
    document.getElementById('img1').src = "assets/images/icons/individual/icons_small_bs1.png";
});

document.getElementById('item2').addEventListener("mouseover",function() {
    document.getElementById('img2').src = "assets/images/icons/individual/icons_small_bs2_blue.png";
});
document.getElementById('item2').addEventListener("mouseout",function() {
    document.getElementById('img2').src = "assets/images/icons/individual/icons_small_bs2.png";
});

document.getElementById('item3').addEventListener("mouseover",function() {
    document.getElementById('img3').src = "assets/images/icons/individual/icons_small_bs3_blue.png";
});
document.getElementById('item3').addEventListener("mouseout",function() {
    document.getElementById('img3').src = "assets/images/icons/individual/icons_small_bs3.png";
});

document.getElementById('item5').addEventListener("mouseover",function() {
    document.getElementById('img5').src = "assets/images/icons/individual/icons_small_bs5_blue.png";
});
document.getElementById('item5').addEventListener("mouseout",function() {
    document.getElementById('img5').src = "assets/images/icons/individual/icons_small_bs5.png";
});

document.getElementById('item4').addEventListener("mouseover",function() {
    document.getElementById('img4').src = "assets/images/icons/individual/icons_small_bs4_blue.png";
});
document.getElementById('item4').addEventListener("mouseout",function() {
    document.getElementById('img4').src = "assets/images/icons/individual/icons_small_bs4.png";
});

document.getElementById('item6').addEventListener("mouseover",function() {
    document.getElementById('img6').src = "assets/images/icons/individual/icons_small_bs6_blue.png";
});
document.getElementById('item6').addEventListener("mouseout",function() {
    document.getElementById('img6').src = "assets/images/icons/individual/icons_small_bs6.png";
});

document.getElementById('item7').addEventListener("mouseover",function() {
    document.getElementById('img7').src = "assets/images/icons/individual/icons_small_bs7_blue.png";
});
document.getElementById('item7').addEventListener("mouseout",function() {
    document.getElementById('img7').src = "assets/images/icons/individual/icons_small_bs7.png";
});

