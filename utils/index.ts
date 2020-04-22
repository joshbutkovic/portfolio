import ReactGA from 'react-ga';

// Date Utils
const monthNames: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const getFullMonth = (): string => {
    return monthNames[new Date().getMonth()];
};

// Analytics
export const initGA = () => {
    ReactGA.initialize('UA-164233857-1');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};
