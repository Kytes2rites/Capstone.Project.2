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

    
function handleSubmit(event) {
    event.preventDefault();
    const phoneForm = event.target;
    const phoneInput = phoneForm[0];
    const phoneValue = phoneInput.value;
    output(` <br>Your info is being processed. . .<br>`);
    const promise = new Promise(getServerResponse2);
    promise.then(parseResponse);
}
    

function getServerResponse2(resolve) {
    setTimeout(activateResolve, 5000);
    
    function activateResolve() {
        const response = {
        message: "Successfully recieved. See you there!",
        };
        const resolveValue = JSON.stringify(response);
        resolve(resolveValue);
    }
}
    
    

function parseResponse(resolveValue) {
    const response = JSON.parse(resolveValue);
    const message = response.message;
    output(message);
}