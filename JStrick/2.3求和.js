window.onload = function () {
    var oBtn = document.getElementsByTagName("button")[0];
    var oSum = document.getElementsByTagName("input")[0];

    oSum.onkeyup = function () {
        this.value = this.value.replace(/[^\d,]/, "")///[^\d,]/
    }

    oBtn.onclick = function () {
        var sum = 0;

        var oSum = document.getElementsByTagName("input")[0].value.split(",");

        for (var i in oSum) {
            sum += Number(oSum[i])
        }

        alert(sum);
    }
}