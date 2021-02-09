// Navbar 
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