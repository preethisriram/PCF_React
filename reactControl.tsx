import * as React from 'react';
import { Stack, IStackTokens } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react/lib/TextField';
import { sample } from './index';
import { useState } from 'react';

/*
export interface IButtonExampleProps extends React.AllHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement | HTMLSpanElement> {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}
*/
export interface IReactProps {
	// These are set based on the toggles shown above the examples (not needed in real code)
	//disabled?: boolean;
	//checked?: boolean;
	deeplinkdisplay : string;
    onChange: (deeplinkdisplay:string) => void;
	
  }

  export interface IReactState {
    deeplinkdisplay: string;
}
// Example formatting
const stackTokens: IStackTokens = {  };

export class ReactControl extends React.Component<IReactProps,IReactState>  {
	//destructuring
    constructor(props: Readonly<IReactProps>) {
        super(props);
        this.state = { deeplinkdisplay: props.deeplinkdisplay};
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(p: IReactProps) {
        this.setState({deeplinkdisplay : (p.deeplinkdisplay)});
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let value = e.currentTarget.value;
        this.setState({deeplinkdisplay: value});
        this.props.onChange(value);
    }
	
	
	//the above stmt is same as deeplinkdisplay = props.deeplinkdisplay. 
	
	//use state accepts parameters - initial state of the property and returns the current value of the set property and a method 
	//that is capable of updating that property
	//const [deeplinkdisplay, setDeeplinkDisplay] = useState('null');
	// <button onClick = { () => setDeeplinkDisplay('new value')} > </button>
  render(){
    return (
        <div>
            <input id='inputText' value={this.state.deeplinkdisplay} onChange={this.handleChange} />
            <PrimaryButton text="Copy" onClick={_alertClicked}  />
        </div>
        
        
    );
  }
	/*return (
	  <Stack horizontal tokens={stackTokens}>
	   <TextField  id = 'deeplink' readOnly defaultValue = {deeplinkdisplay} />
	  
		<PrimaryButton text="Copy" onClick={_alertClicked}  />
		
	  </Stack>
	);
    */
  };

function _alertClicked(): void {
  alert('Clicked');
}
