const { expect } = require('chai');
// For usage see https://www.npmjs.com/package/@axway/api-builder-test-utils#runtime-api
const { Runtime } = require('@axway/api-builder-test-utils');

describe('APIs', function () {
	this.timeout(30000);
	describe('Healthcheck', () => {
		it('should be able to hit the healthcheck API', async () => {
			const runtime = new Runtime();
			await runtime.test(async () => {
				const response = await runtime.request({
					method: 'GET',
					path: 'apibuilderPing.json',
					headers: {
						accept: 'application/json'
					}
				});
				expect(response.statusCode).to.equal(200);
				expect(response.body).to.deep.equal({ success: true });
			});
		});
	});
});
