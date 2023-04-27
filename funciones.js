
function validacionCampos() {


    var input1 = document.getElementById('exampleFormControlInput1').value;
    var input2 = document.getElementById('exampleFormControlInput2').value;
    var input3 = document.getElementById('exampleFormControlTextarea1').value;

    if (input1 == '' || input2 == '' || input3 == '') {
        alert('Uno o más campos se encuentran vacíos');
    }


}


// var input1 = document.getElementById('exampleFormControlInput1');

// if (input1 == '') {
//     alert('El campo Nombre no puede estar vacío')
// }