
function app() {
    return <h1>Hello Worm</h1>;
}

/* Render */
import {render} from 'preact';
render(app(), document.body);
