$(document).ready(function () {
    $("#loading").hide()
    // $("#world").hide()
    window.onpopstate = function (event) {
        $("#loading").hide()
    }
})

function showLoading() {
    // $("#world").hide()
    // $("#loading").show()
    $("#world").fadeOut(200)
    $("#loading").fadeIn(200)
}