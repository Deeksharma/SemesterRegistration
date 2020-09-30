const getIsLoggedIn = () => localStorage.getItem('misData') === 'false';

export default getIsLoggedIn;
