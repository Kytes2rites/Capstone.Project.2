function myProcessForm(event) {
    event.preventDefault();
    const form = event.target;
    const phoneinput = form[0];
    const dateinput = form[1];
    const nameinput = form[2];
    const phone = phoneinput.value;
    const date = dateinput.value;
    const name = nameinput.value;
    output(` ${name} @ ${phone} . ${name}!`);