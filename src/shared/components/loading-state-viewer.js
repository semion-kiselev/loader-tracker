import React from 'react';

export const LoadingStateViewer = ({isLoading, error, data, children}) => {
    if (isLoading) {
        return 'Is loading...';
    }

    if (error) {
        return (
            <div style={{color: 'maroon'}}>
                {error}
            </div>
        );
    }

    if (!data) {
        return null;
    }

    return children(data);
}
