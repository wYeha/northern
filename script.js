mailId.onclick = () => {
	navigator.clipboard.writeText('info@vc-ss.ru')
	successMessage.classList.add('active');
	setTimeout(() => successMessage.classList.remove('active'), 1500)
}

phoneId.onclick = () => {
	navigator.clipboard.writeText('+74959845926')
	successMessage.classList.add('active');
	setTimeout(() => successMessage.classList.remove('active'), 1500)
}
