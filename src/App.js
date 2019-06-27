import React, { useState } from 'react';
import Select from 'react-select';

import cities from './cities';

const values = cities.map(function ({ name }) {
  return {
    label: name,
    value: name
  }
});

function createIntercomScript () {
  var w=window;
  var ic=w.Intercom;
  if(typeof ic==="function"){
    ic('reattach_activator');
    ic('update',w.intercomSettings);
  }else{
    var d=document;
    var i=function(){
      i.c(arguments);
    };
    i.q=[];
    i.c=function(args){
      i.q.push(args);
    };
    w.Intercom=i;
    var l=function(){
      console.log('creating script');
      var s=d.createElement('script');
      s.type='text/javascript';
      s.async=true;
      s.src='https://widget.intercom.io/widget/foobar';
      var x=d.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s,x);
    };
    if(w.attachEvent){
      w.attachEvent('onload',l);
    }else{
      w.addEventListener('load',l,false);
    }
    l();
  }
}

function App() {
  const [intercom, setIntercom]  = useState(false);

  return (
    <div className="App" style={{ padding: '40px' }}>
      <p>Search for a city:</p>
      <Select
        options={values} />

      <div style={{marginTop: '340px' }}>
        <h1>Instructions (for desktop Google Chrome)</h1>

        <p>1. Search for a city (Example: "Francisco"). Notice that the filtering happens immediately as you type.</p>

        <p>2. Load the intercom widget by hitting this button</p>
        {intercom ? <p>Intercom has been loaded.</p> : <button type="button" style={{ padding: '10px' }} onClick={() => { setIntercom(true); createIntercomScript(); }}>Load Intercom to make it slow</button>}
        <p>3. Search for the same city (Example "Francisco"). Notice that their is a lag when typing and the filtering is much slower.</p>
        <p>4. You will need to open this page in a new tab for each test after loading intercom.</p>
      </div>
    </div>
  );
}

export default App;
