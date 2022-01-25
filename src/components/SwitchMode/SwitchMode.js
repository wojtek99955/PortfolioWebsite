import React from 'react';
import { useContext } from 'react';
import {SwitchContext} from "../../App";
import {Switch, Notch} from './SwitchModeStyle';


function SwitchMode() {
const context = useContext(SwitchContext);
    return (
        <Switch toggle={context.toggle} onClick={context.handleToggle}>
            <Notch toggle={context.toggle}/>
        </Switch>
    )
}
export default SwitchMode;
