const input = document.querySelectorAll('input'),
    result = document.querySelector('#result');
//calc
let resCalc;
input.forEach(item => {
    item.addEventListener('click', e => {
        if (e.target.value == 'C') {
            result.value = '';
        } else if (e.target.value == '=') {
            if (result.value == '') {
                result.value = '';
            } else { result.value = eval(result.value); }

        } else {
            result.value += e.target.value;
        }

    })
})



