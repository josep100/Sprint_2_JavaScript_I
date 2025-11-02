
// Exercise 6

const validate = () => {
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastN = document.getElementById("fLastN");
	const fPassw = document.getElementById("fPassword");
	const ftelef = document.getElementById("fPhone");
	
	const campos = [
		{input: fName, regex: /^[A-Za-z]+$/},
		{input: fEmail, regex: /^\S+@\S+\.\S+$/},
		{input: fLastN, regex: /^[A-Za-z]+$/},
		{input: fPassw, regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/},
		{input: ftelef, regex: /^\d+$/}
	]

	const miFormulario = document.getElementById('form');
	
	miFormulario.addEventListener('submit', (event) => {
			event.preventDefault();

			let hayError = false;

			campos.forEach(({ input, regex}) => {
				const valor = input.value.trim();

				if (valor.length < parseInt(input.getAttribute('minlength'))) {
					input.classList.add("is-invalid");
					hayError = true;
					return;
				}

				if (!regex.test(valor)) {
					input.classList.add("is-invalid");
					hayError = true;
				} else{
					input.classList.remove("is-invalid");
				}
			});
			
			if(fAddress.value.trim().length < parseInt(fAddress.getAttribute('minlength'))){
				fAddress.classList.add("is-invalid");
				hayError = true;
			}else {
				fAddress.classList.remove("is-invalid");
			}

			if (!hayError) {
				miFormulario.submit(); 
			}
	});
	

}
