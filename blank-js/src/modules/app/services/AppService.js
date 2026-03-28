import { composeService } from 'gaman/compose';

export const AppService = composeService(() => {
	/** 
	 * TODO: your private logic in here
	 */
	
	return {
		WelcomeMessage() {
			return '❤️ Welcome to GamanJS';
		},
	};
});
