function myProcessForm(event) {
    event.preventDefault();
    const form = event.target;
    const dateinput = form[0];
    const phoneinput = form[1];
    const nameinput = form[2];
    const date = dateinput.value;
    const phone = phoneinput.value;
    const name = nameinput.value;
    output(` Thank you ${date} @ ${phone} . Your appointment is scheduled on ${name}!`);
}