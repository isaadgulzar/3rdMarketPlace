// For Mobile Navbar 
function toggleNavOpen() {
    $('#MobileNav').removeClass("hidden");
    $('#closeNavIcon').removeClass("hidden");
    $('#openNavIcon').addClass("hidden");
}
function toggleNavClose() {
    $('#MobileNav').addClass('hidden');
    $('#closeNavIcon').addClass('hidden');
    $('#openNavIcon').removeClass("hidden");
}

// For Responsive Sidebar [Apply Filters]
$(document).ready(function () {
    $(window).resize(function() {
        if ($(this).width() > 1024) {
            $('#mySidebar').addClass("hidden");
            $('#mySidebar').removeClass("fixed inset-0 flex z-40");
            $(".sidebarOverlay").remove();
            $('#closeSidebarIcon').addClass("hidden");
            $('#openSidebarIcon').removeClass("hidden");
        }
    });
});
function openSidebar() {
    $('#mySidebar').removeClass("hidden ");
    $('#mySidebar').addClass("fixed inset-0 flex z-40");
    $("<div class='sidebarOverlay fixed inset-0'><div class='absolute inset-0 bg-gray-600 opacity-75'></div></div>").insertBefore('#actualSidebar');
    $('#closeSidebarIcon').removeClass("hidden");
    $('#openSidebarIcon').addClass("hidden");
}
function closeSidebar() {
    $('#mySidebar').addClass("hidden");
    $('#mySidebar').removeClass("fixed inset-0 flex z-40");
    $(".sidebarOverlay").remove();
    $('#closeSidebarIcon').addClass("hidden");
    $('#openSidebarIcon').removeClass("hidden");
}

// For Filter Categories Toggle
$('.open').click(function(e){
    var el;
    if(e.target.tagName == 'path') {
        el = $(e.target).parent();
    }
    else {
        el = $(e.target);
    }
    console.log(el);
    if($(el).hasClass("toggleCross")) {
        el.removeClass('toggleCross');
        el.addClass('togglePlus');
        var elParent = el.parents().closest('.parent');
        elParent.siblings('.child').addClass('hidden');
    }
    else {
        el.removeClass('togglePlus');
        el.addClass('toggleCross');
        var elParent = el.parents().closest('.parent');
        elParent.siblings('.child').removeClass('hidden');
    }
});