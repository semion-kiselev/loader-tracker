const users = [
    {name: 'User1', email: 'user1@gmail.com'},
    {name: 'User2', email: 'user2@gmail.com'}
];
export const loadUsers = () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(users)
    }, 3000));
};
