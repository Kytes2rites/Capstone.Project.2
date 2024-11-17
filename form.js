function myProcessForm(event) {
    event.preventDefault();
    const form = event.target;
    const nameinput = form[0];
    const phoneinput = form[1];
    const dateinput = form[2];
    const timeinput = form[3];
    const name = phoneinput.value;
    const phone = dateinput.value;
    const date = nameinput.value;
    const time = timeinput.value;
    output(` ${name}  @ ${phone} . ${time} at ${time}!`)
}
