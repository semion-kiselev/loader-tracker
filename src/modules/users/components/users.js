import React from 'react';
import {LoadingStateViewer} from '../../../shared/components/loading-state-viewer';
import {useUsers} from '../hooks';

const renderUsers = (users) => users.map((user) => {
    return (
        <div key={user.email}>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <hr/>
        </div>
    );
})

export const Users = () => {
    const {users, isLoading, error} = useUsers();

    return (
        <div>
            <h2>Users</h2>
            <LoadingStateViewer
                isLoading={isLoading}
                error={error}
                data={users}
            >
                {renderUsers}
            </LoadingStateViewer>
        </div>
    );
}
