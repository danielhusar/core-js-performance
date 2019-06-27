import React, { useState } from 'react';
import Select from 'react-select';

import cities from './cities';

const values = cities.map(function ({ name }) {
  return {
    label: name,
    value: name
  }
});

function loadCoreJS () {
  require("core-js/modules/es.string.split.js");
}

function App() {
  const [coreJs, setCoreJs]  = useState(false);

  return (
    <div className="App" style={{ padding: '40px' }}>
      <p>Search for a city:</p>
      <Select
        options={values} />

      <div style={{marginTop: '140px' }}>
        <h1>Instructions (for desktop Google Chrome)</h1>

        <p>1. Search for a city (Example: "Francisco"). Notice that the filtering happens immediately as you type.</p>

        <p>2. Load the core-js es.string.split polyfill by hitting this button</p>
        {coreJs ? <p>core-js has been loaded.</p> : <button type="button" style={{ padding: '10px' }} onClick={() => { setCoreJs(true); loadCoreJS(); }}>Load core-js es.string.split polyfill to make it slow</button>}
        <p>3. Search for the same city (Example "Francisco"). Notice that their is a lag when typing and the filtering is much slower.</p>
        <p>4. You will need to open this page in a new tab for each test after loading core-js.</p>
      </div>
    </div>
  );
}

export default App;
