import { composeService } from '@gaman/core';

export const AppService = composeService(() => ({
	WelcomeMessage() {
		return '❤️ Welcome to GamanJS';
	},
}));
