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
    var accTotal = accTotal = parseInt(gagDropDown.value, 10) + parseInt(trackDropDown.value, 10);
    
    if(gagDropDown.selectedIndex !== 0) {
        accTotal = accTotal - parseInt(cogDropDown.value, 10);
        if(lureDropDown.value !== "0") {
            accTotal = accTotal + parseInt(lureDropDown.value);
        }
    }

    if(stunDropDown.value !== "0") {
        accTotal = accTotal + parseInt(stunDropDown.value);
    }
    total.innerText = "Final Accuracy = " + accTotal;
})