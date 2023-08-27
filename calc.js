var stunBox = document.getElementById('stun');
var stunDropDown = document.getElementById('stunQuantity');

var lureBox = document.getElementById('lure_ratio');
var gagDropDown = document.getElementById('gag_choice');
var cogDropDown = document.getElementById('target_level');
var trackDropDown = document.getElementById('track_prog');
var lureDropDown = document.getElementById('luredQuantity');

var calcButton = document.getElementById('calculateButton');
var total = document.getElementById('finalResult');

function toggleDisabled(disableBox, targetDropDown) {
    targetDropDown.disabled = !disableBox.checked;
}

stunBox.addEventListener('change', function () {
    toggleDisabled(stunBox, stunDropDown)
    if (stunDropDown.disabled) {
        stunDropDown.value = "0";
    }
})

lureBox.addEventListener('change', function () {
    if (gagDropDown.value === "sound") {
        toggleDisabled(lureBox, lureDropDown);
    }
    if (lureDropDown.disabled) {
        lureDropDown.value = "0";
    }
})

gagDropDown.addEventListener('change', function () {
    if (gagDropDown.value !== "sound") {
        lureDropDown.disabled = true
        lureDropDown.value = "0";
        lureBox.checked = false;
    }
})

calcButton.addEventListener('click', function() {
    var trackBonus = parseInt(trackDropDown.value, 10) / 2; //This bonus is halved for Toon-Up. Added in 2nd time for other gags.
    var accTotal = parseInt(gagDropDown.value, 10) + trackBonus;

    if(gagDropDown.selectedIndex !== 0) {
        accTotal -= parseInt(cogDropDown.value, 10);
        accTotal += trackBonus;
        if(lureDropDown.value !== "0") {
            accTotal += parseInt(lureDropDown.value);
        }
    }

    if(stunDropDown.value !== "0") {
        accTotal += parseInt(stunDropDown.value);
    }

    total.innerText = "Final Accuracy = " + accTotal;
})