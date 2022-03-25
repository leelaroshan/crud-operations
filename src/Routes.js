import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddEditEmployee from './Employees/AddEditEmployee';
import GetEmployee from './Employees/GetEmployee';





export default function Routes() {


    return (
      <div>
        <h4>This is Routes component for this crud project</h4>
        <Switch>
          <Route exact path="/">
            <GetEmployee />
          </Route>
        
          <Route exact path={"/add-new/:_id?"}>
            <AddEditEmployee />
          </Route>
        </Switch>
      </div>
    );
}
