import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Ubuntu:400,700', 'Oswald:400,700', 'sans-serif']
  }
});

function importAll(r) {
  let assets = {};
  r.keys().forEach((record, i) => { assets[record.replace('./', '')] = r(record); });
  return assets;
}

const images = importAll(require.context('./images/', false, /\.(png|jpe?g|svg|gif)$/));

const css_images = importAll(require.context('./css/', false, /\.(png|jpe?g|svg|gif)$/));


ReactDOM.render(
	<App images={images} css_images={css_images}/>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
