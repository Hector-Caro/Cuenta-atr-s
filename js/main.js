document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton');
    const countDown = document.getElementById('count-down');
    const datos = document.getElementById('datos');

    startButton.addEventListener('click', function () {
        const horasInput = document.getElementById('horas-input');
        const minutosInput = document.getElementById('minutos-input');
        const segundosInput = document.getElementById('segundos-input');

        let horas = parseInt(horasInput.value) || 0;
        let minutos = parseInt(minutosInput.value) || 0;
        let segundos = parseInt(segundosInput.value) || 0;

        if (horas === 0 && minutos === 0 && segundos === 0) {
            alert('Ingresa un tiempo válido.');
            return;
        }

        countDown.classList.remove('disabled');
        datos.style.display = 'none';

        function cuentaAtras() {

            document.getElementById('horas').innerText = horas.toString().padStart(2, '0');
            document.getElementById('minutos').innerText = minutos.toString().padStart(2, '0');
            document.getElementById('segundos').innerText = segundos.toString().padStart(2, '0');

            if (horas === 0 && minutos === 0 && segundos === 0) {
                clearInterval(funcionCuentaAtras);

                datos.style.display = 'block';
                countDown.classList.add('disabled');
            }
        };

        cuentaAtras();

        funcionCuentaAtras = setInterval(function () {
            if (segundos === 0) {
                if (minutos === 0) {
                    if (horas === 0) {
                        return;
                    }
                    horas--;
                    minutos = 59;
                } else {
                    minutos--;
                }
                segundos = 59;
            } else {
                segundos--;
            }

            cuentaAtras();
        }, 1000);
    });
});
