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
 * 		https://gaman.7togk.id/docs/overview/controllers/
 *
 * ==========================================================================
 */

import { composeController } from 'gaman/compose';
import AppService from '../services/AppService';
import type { RT } from 'gaman/types';

export default composeController(
	(appService: RT<typeof AppService> = AppService()) => ({
		HelloWorld(ctx) {
			return Res.message(appService.WelcomeMessage());
		},
	}),
);
