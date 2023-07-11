export const prerender = true;

export const load = async () => {
	const fetchUserData = async () => {
		const response = await fetch('https://api.github.com/users/jmarron7');
		if (response.ok) {
			const userData = await response.json();
            return userData
		} else {
			console.error('Failed to fetch user data');
		}
	};

    return {
        data: fetchUserData(),
    }
};