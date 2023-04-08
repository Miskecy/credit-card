import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
	}

	html {
		font-size: 62.5%;
	}

	body {
		background: var(--background);	
	}

	body, input, button {
		font-family: 'Source Sans Pro', 'Roboto', sans-serif;
		font-size: 1.6rem;
	}

	:root {			
		--background: #111827;
		--background-light: #374151;
		--purple: #9333EA;

		--text: #E5E7EB;
		--text-input-placeholder: #9CA3AF;
		--border-input: #374151;
	}
`;
