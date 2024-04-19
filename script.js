function showPage(pageId) {
    // Hide all pages
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    // Show the selected page
    var page = document.getElementById(pageId);
    page.style.display = 'block';
}
