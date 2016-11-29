$(document).ready(function () {
    //Shorthand notation
    /*$.getJSON('baby-steps.json').then(function (data, textStatus, jqXHR) {
        // success callback
        window.friends = data.friends;
    }, function (jqXHR, textStatus, errorThrown) {
        // error callback
        console.log(errorThrown);
    });*/

    $.ajax({
        url: "baby-steps.json",
        type: "get",
        dataType: "json",
        success: function (data, status, jqXHR) {
            window.friends = data.friends;
        },
        error: function (jqXHR, status, error) {
            console.log(error);
        }
    });
});

//Utility Functions

function compare(friend1, friend2) {
    if(friend1.lastName>friend2.lastName)
        return 1;
    if(friend1.lastName<friend2.lastName)
        return -1;
    return 0;
}

function babyStepFriends(n) {
    var msg = "";
    var friends = window.friends;

    sameBabyStepFriends = [];
    for(var i=0; i<friends.length; i++) {
        var friend = friends[i];
        if(friend.babyStep == n)
            sameBabyStepFriends.push(friend);
    }
    sameBabyStepFriends.sort(compare);

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
            msg = '<span class="dynamic-element-name">' + sameBabyStepFriends[0].firstName + " " + sameBabyStepFriends[0].lastName + '</span>' + '<span class="dynamic-element-other">' + ", " + '</span>' + '<span class="dynamic-element-name">' + sameBabyStepFriends[1].firstName + " " + sameBabyStepFriends[1].lastName + '</span>' + '<span class="dynamic-element-other">' + " and 1 other friend are also in Baby Step " + n + '</span>';
            break;
        default:
            msg = '<span class="dynamic-element-name">' + sameBabyStepFriends[0].firstName + " " + sameBabyStepFriends[0].lastName + '<span class="dynamic-element-other">' + ", " + '</span>' + '<span class="dynamic-element-name">' + sameBabyStepFriends[1].firstName + " " + sameBabyStepFriends[1].lastName + '</span>' + '<span class="dynamic-element-other">' + " and 2 other friends are also in Baby Step " + n + '</span>';
            break;
    }

    return msg;
}

function mouseHover(n) {
    //$('#text'+n).css("color", "#36abe1");
    //$('#text'+n).css("font-weight", 600);
    $('#img'+n).attr("src", "assets/images/icons/individual/icons_small_bs" + n +"_blue.png");
}

function mouseOut(n) {
    //$('#text'+n).css("color", "#9ba0a4");
    //$('#text'+n).css("font-weight", 400);
    $('#img'+n).attr("src", "assets/images/icons/individual/icons_small_bs" + n + ".png");
}

//Click events

$('.nav-item').click(function () {
    var dataItem = $(this).data('item');
    $('.container.mover').animate({'margin-top': ((dataItem-1)*-567)+'px'}, 1000, function () {
        // load friends in this step here
        var html = babyStepFriends(dataItem);
        $('.container-'+dataItem+' .dynamic-element').html(html);
    });

    $('.nav-item').removeClass('active');
    $(this).addClass('active');
});

//MouseOver events

$(".nav-item").hover(function () {
    var dataItem = $(this).data('item');
    mouseHover(dataItem);
}, function () {
    var dataItem = $(this).data('item');
    mouseOut(dataItem);
});
