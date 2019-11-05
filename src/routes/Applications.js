import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { PageHeader, PageHeaderTitle, Main } from '@redhat-cloud-services/frontend-components';

const Applications = ({ match }) => {
    const { params } = match;
    return (
        <React.Fragment>
            <PageHeader>
                <PageHeaderTitle title='Applications Page'/>
                <p> The is the route to the applications page </p>
            </PageHeader>
            <Main>
                <p> Content { params.id }</p>
            </Main>
        </React.Fragment>
    );
};

Applications.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    })
};

export default withRouter(Applications);
