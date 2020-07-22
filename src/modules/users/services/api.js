const users = [
    {id: 1, name: 'User1', email: 'user1@gmail.com'},
    {id: 2, name: 'User2', email: 'user2@gmail.com'}
];

const apiTimeout = 2000;

const withDelay = (data) => new Promise(resolve => setTimeout(() => {
    resolve(data)
}, apiTimeout));

export const loadUsers = () => {
    return withDelay([...users]);
};

export const loadUser = (id) => {
    const foundUser = users.find(user => user.id === id);
    return withDelay({...foundUser});
};

export const createUser = (data) => {
    const id = Math.max(...users.map(user => user.id)) + 1;
    const newUser = {id, ...data};
    users.push(newUser);

    return withDelay(newUser);
};

export const updateUser = (id, data) => {
    const userIndex = users.findIndex(user => user.id === id);
    const foundUser = users[userIndex];
    const updatedUser = {...foundUser, ...data};
    users.splice(userIndex, 1, updatedUser);

    return withDelay(updatedUser);
};

export const deleteUser = (id) => {
    const userIndex = users.findIndex(user => user.id === id);
    users.splice(userIndex, 1);

    return withDelay(undefined);
};
