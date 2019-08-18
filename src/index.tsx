import * as React from 'react';
import { render } from 'react-dom';

const Main = () => <h1>Hello, World!</h1>;

render(<Main />, document.querySelector('main')!);
