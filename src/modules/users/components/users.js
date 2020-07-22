import React from 'react';
import {useQuery, useMutation, queryCache} from 'react-query';
import {Table, TableBody, TableHead, TableRow, TableCell, Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {LOAD_USERS} from '../constants/requestIds';
import {loadUsers, deleteUser} from '../services/api';

export const Users = () => {
    const [removingId, setRemovingId] = React.useState(null);

    const {data: users, isFetching: usersLoading} = useQuery(LOAD_USERS, loadUsers);

    const [removeUser, {isLoading: isRemoving}] = useMutation(deleteUser, {
        onSuccess: () => {
            queryCache.invalidateQueries(LOAD_USERS);
            setRemovingId(null);
        }
    });

    const handleDeleteUser = (id) => {
        setRemovingId(id);
        removeUser(id);
    };

    if (usersLoading) {
        return 'Loading';
    }

    if (!users) {
        return null;
    }

    return (
        <div>
            <h2>Users</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user) => {
                            return (
                                <TableRow key={user.email}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <Button>
                                            <EditIcon />
                                        </Button>
                                        <Button onClick={() => handleDeleteUser(user.id)}>
                                            {isRemoving && removingId === user.id ? 'Removing' : <DeleteIcon />}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    );
};
