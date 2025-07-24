const update_textarea = () => {
	const textarea = document.getElementById("textarea");
	textarea.disabled = true;

	fetch(location.origin + "/get_file")
	.then(res => res.text())
	.then(text => {
		const textarea = document.getElementById("textarea");
		textarea.value = text;
		textarea.disabled = false;
	});
}


const send_textarea = () => {
	const textarea = document.getElementById("textarea");
	textarea.disabled = true;

	fetch(location.origin + "/send_file", {
		method: "POST",
		headers: {
			"Content-Type": "text/plain",
		},
		body: textarea.value
	})
	.then(res => {
		textarea.disabled = false;
	});
}


update_textarea();
