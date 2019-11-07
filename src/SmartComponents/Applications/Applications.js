import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Main, PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';

class Applications extends Component {

    render() {

        return (
            <React.Fragment>
                <PageHeader>
                    <PageHeaderTitle title='Application'/>
                </PageHeader>
                <Main>
                    <h1> { this.props.match.params.id } Settings </h1>
                </Main>
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
