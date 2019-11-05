import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import SamplePage from './SmartComponents/SamplePage/SamplePage';
import Applications from './routes/Applications';

const paths = {
    samplepage: '/',
    applications: 'applications/:id'
};

const InsightsRoute = ({ component: Component, rootClass, ...rest }) => {
    const root = document.getElementById('root');
    root.removeAttribute('class');
    root.classList.add(`page__${rootClass}`, 'pf-c-page__main');
    root.setAttribute('role', 'main');

    return (<Route { ...rest } component={ Component } />);
};

InsightsRoute.propTypes = {
    component: PropTypes.func,
    rootClass: PropTypes.string
};

export const Routes = () => {

    return (
        <Switch>
            <InsightsRoute exact path={ paths.samplepage } component={ SamplePage } rootClass='samplepage'/>
            <InsightsRoute exact path={ paths.applications } component={ Applications } rootClass='applications' />
            <InsightsRoute component={ Applications } rootClass='samplepage' />
        </Switch>
    );
};

Routes.propTypes = {
    childProps: PropTypes.shape({
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    })
};
