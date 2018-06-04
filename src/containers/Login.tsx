import* as React from 'react';
import Todo from '../models/Todo';
import { Button, InputGroup, InputGroupAddon, InputGroupText, Input, ButtonDropdown} from 'reactstrap'; 
import Avatar from '../components/Avatar';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'



const  Login = () => {



    return (
    <div className="formLogin">

      <form>
    <Avatar />
      
      <InputGroup
      style={{
        margin: '15px auto 15px auto ',
      }}
      >
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <InputGroup
        style={{
          margin: '0 auto 15px auto ',
        }}        
      >
        <Input placeholder="username" />
        <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
      </InputGroup>

        <Link 
          style={{
            color: '#fff',
          }}
          to="/app">
          <Button
            color='primary'>          
            Go app!
          </Button>
        </Link>

      </form>
    </div>
    )
  }
export default Login;