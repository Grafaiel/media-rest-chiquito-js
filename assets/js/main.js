function meuEscopo() {
    const adicionar = document.querySelector('#adicionar');
    const finalizar = document.querySelector('#finalizar');
    const inputSalto = document.querySelector('#salto');
    const array = [];

    adicionar.addEventListener("click", adicionarSalto);

    function adicionarSalto() {
        const result = document.querySelector('.result');
        if (Number(inputSalto.value) >= 0){
            let soma = document.createElement('option');
            if (Number(inputSalto.value) <= 1) {
                soma.text = `${Number(inputSalto.value)} Metro`;
            } else {
                soma.text = `${Number(inputSalto.value)} Metros`;
            }
            saltos.appendChild(soma);
            array.push(Number(inputSalto.value));
            console.log(array);
            inputSalto.value = '';
            inputSalto.focus();
        }
        result.innerHTML = '';
        const calculo = media(...array);
        
        function media() {
            let total = 0;
            for (let i = 0; i < arguments.length; i++){
                total += arguments[i];
            }   
            return (total / arguments.length).toFixed(1);
        }

        finalizar.addEventListener("click", resultado);

        function resultado() {
            result.style.backgroundColor = "var( --primary-color-darker)";
            return result.innerHTML = `<p> A média obtida pelos saltos:  </p> <br> <h3>${calculo}<h3>`;
        }
    }


}
meuEscopo();