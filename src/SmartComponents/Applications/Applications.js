import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';

class Applications extends Component {

    render() {
        const appName = this.props.match.params.id;

        return (
            <React.Fragment>
                <PageHeader>
                    <PageHeaderTitle title='Applications Settings'/>
                    <p>{ `Settings for ${ appName }` }</p>
                </PageHeader>
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
