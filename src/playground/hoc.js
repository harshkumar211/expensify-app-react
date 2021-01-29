// higher order component
//HOC is a components(HOC) that renders another components
//goal is to reuse the code
//render hijacking
//props manipulation // showing privileged information
//Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props)=>(    <div>
    <h1>Info</h1>
    <p>The info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent)=>{
    return (props) =>(
        <div>
        {props.isAdmin && <p>This is a private info, please dont share it</p>}
        <WrappedComponent {...props}/>
        </div>
    );   
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication =(WrappedComponent)=>{
    return(props)=>(
        <div>
            {!props.isAuthenticated && <p>You need to Sign in</p>}
            {props.isAuthenticated && <WrappedComponent {...props}/>}
        </div>
    );
}
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="this is my Id"></AdminInfo>,document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={false} info="this is my Id"></AuthInfo>,document.getElementById('app'));
