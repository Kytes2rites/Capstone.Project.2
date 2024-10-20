function myProcessForm(event) {
    document.write
    event.preventDefault();
    const form = event.target;
    const input = form[0];
    const input2 = form[1];
    const value = input.value;
    output(`Thank you ${value} for your submission!`);
}