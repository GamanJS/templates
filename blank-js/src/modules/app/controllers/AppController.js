/**
 * ==========================================================================
 * Gaman Controller
 * ==========================================================================
 *
 * This controller handles the core logic for your application.
 * Controllers in GamanJS keep your code clean, modular, and
 * easy to maintain — just like a well-structured MVC pattern.
 *
 * Example:
 *    HelloWorld(ctx) {
 *        return Res.json({ message: '❤️ Welcome to GamanJS' });
 *    }
 *
 * For more details, visit:
 * 		https://gamanjs.github.io/docs/overview/controllers/
 *
 * ==========================================================================
 */

import { composeController } from 'gaman/compose';
export default composeController(({ appService }) => {
	/**
	 * TODO: your private logic in here
	 */

	return {
		render(ctx) {
			return ctx.send({
				message: appService.WelcomeMessage(),
			});
		},
	};
});
