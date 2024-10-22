function myProcessForm(event) {
    event.preventDefault();
    const form = event.target;
    const dateinput = form[2];
    const nameinput = form[0];
    const timeinput = form[3];
    const date = dateinput.value;
    const name = nameinput.value;
    const time = timeinput.value;
    output(` Thank you ${name}. Your appointment is scheduled on ${date} @ ${time}!`);
}