function encriptar() {
    let frase = document.getElementById('encriptar').value;
    regex = /^[a-z\s]+$/;

    if(!frase){
        alert("Por Favor digite sua frase");
        return false;
    }
    
    if(!regex.test(frase)){
        alert('Por favor, digite apenas letras minúsculas e sem acentos!');
        return false; // Impede o envio do formulário
    }

    if (frase) {
        let lista = frase.split(' ');

        let palavrasParaAlterar = lista.map(palavra => {
            
            return palavra
                .replace(/a/, 'ai')
                .replace(/e/, 'enter')
                .replace(/i/, 'imes')
                .replace(/o/, 'ober')
                .replace(/u/, 'ufat');
        });

        let img = document.getElementById('img_cadeado');
        img.classList.add('img_encript_none');

        let btn_cop = document.getElementById('btn_copia');
        btn_cop.classList.add('btn_cop_block');

        let area_encript = document.getElementById('encriptado');
        area_encript.value = palavrasParaAlterar.join(' ');
    }
}

function descriptografar() {
    let fraseCriptografada = document.getElementById('encriptar').value;

    if (fraseCriptografada) {
        let listaCriptografada = fraseCriptografada.split(' ');

        let fraseDescriptografada = listaCriptografada.map(plcript => {
            return plcript
                .replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
        });

        let img = document.getElementById('img_cadeado');
        img.classList.add('img_encript_none');

        let btn_cop = document.getElementById('btn_copia');
        btn_cop.classList.add('btn_cop_block');

        let area_desencriptada = document.getElementById('encriptado');
        area_desencriptada.value = fraseDescriptografada.join(' ');
    }
}