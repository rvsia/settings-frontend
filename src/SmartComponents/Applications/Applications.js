import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';
import asyncComponent from '../../Utilities/asyncComponent';

class Applications extends Component {

    render() {
        const appName = this.props.match.params.id;

        const TestApp = asyncComponent(() => import(/* webpackChunkName: "TestApp" */ './TestApp'));
        return (
            <React.Fragment>
                <PageHeader>
                    <PageHeaderTitle title='Applications Settings'/>
                    <p>{ `Settings for ${ appName }` }</p>
                </PageHeader>
                <Switch>
                    <Route exact path='/applications/testApp' component={ TestApp }/>
                </Switch>
            </React.Fragment>
        );
    }
}

Applications.propTypes =  {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    })
};

export default Applications;
