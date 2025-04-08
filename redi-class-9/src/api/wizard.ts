const BASE_URL = 'http://localhost:3001/wizards';

export const getWizards = async () => { 
    const response = await fetch(`${BASE_URL}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
} 