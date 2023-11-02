$(document).ready(function () {
    $("#loading").hide()
    // $("#world").hide()
})

function showLoading() {
    // $("#world").hide()
    // $("#loading").show()
    $("#world").fadeOut(200)
    $("#loading").fadeIn(200)
}