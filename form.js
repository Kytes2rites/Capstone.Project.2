function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const dateinput = form[2];
    const nameinput = form[0];
    const timeinput = form[3];
    const date = dateinput.value;
    const name = nameinput.value;
    const time = timeinput.value;
    output(` Thank you ${name}. Your appointment is scheduled on ${date} @ ${time}! Please wait for confirmation code...`);
    const promise = new Promise(getServerResponse2);
    promise.then(parseResponse);
}
    

function getServerResponse2(resolve) {
    setTimeout(activateResolve, 5000);
    
    function activateResolve() {
        const response = {
        message: "Your confirmation code is ParkCode117",
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

