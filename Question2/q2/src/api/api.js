const API_BASE_URL = 'http://localhost:3000/numbers';

export const fetchNumbers = async (type) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${type}`);
        if (!response.ok) throw new Error('Failed to fetch numbers');
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};
