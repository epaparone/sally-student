'use strict';

const appRoot = document.querySelector('#app');

function handleApp() {
    const helloWorldH1 = <h1>Hello, world!</h1>;

    ReactDOM.render(helloWorldH1, appRoot);
}

$(document).ready(handleApp());