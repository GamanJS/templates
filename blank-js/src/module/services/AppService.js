import { composeService } from 'gaman/compose';

export const AppService = composeService(() => ({
	WelcomeMessage() {
		return '❤️ Welcome to GamanJS';
	},
}));
