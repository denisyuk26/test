/**
 * Created by Сергей on 14.10.2017.
 */
/**
 * Created by Сергей on 14.10.2017.
 */
window.onload = function(){
    document.querySelector('.tabs-content').addEventListener('click', fTabs);
    function fTabs(event) {
        if (event.target.className == 'selectors'){
            var dataTab = event.target.getAttribute('data-tab');
            var dataS = document.getElementsByClassName('data-select');
            var tabSelect = document.getElementsByClassName('tab-select');
            console.log(event.target);
        }

        if(event.target.className == 'selectors') {

            var tabBody = document.getElementsByClassName('content');
            var ts = document.getElementsByClassName('tab-select');
            for (var i = 0; i < tabBody.length; i++) {
                if(dataTab == i) {
                    tabBody[i].classList.remove('hide-cont');
                    tabBody[i].classList.add('active');
                    ts[i].classList.add('selected');
                } else {
                    tabBody[i].classList.remove('active');
                    tabBody[i].classList.add('hide-cont');
                    ts[i].classList.remove('selected');
                }
            }
        }
    }

};


function isValidYear() {
    var input = document.getElementById('year');
    var errorBlock = document.getElementById('error');
    var val = input.value;

    if (+val < 1960 || +val >2017 || val == '') {
        input.classList.add('input-error');
        errorBlock.classList.remove('op0');
    }
    else {
        input.classList.remove('input-error');
        errorBlock.classList.add('op0');

    }

}
