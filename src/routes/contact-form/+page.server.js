import { GIST_ID, GITHUB_TOKEN } from '$env/static/private';

import axios from 'axios';

export function load({ cookies }) {}

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		try {
			const response = await axios.get(`https://api.github.com/gists/${GIST_ID}`, {
				headers: {
					Authorization: `Bearer ${GITHUB_TOKEN}`
				}
			});

			const gistData = response.data;

			const list = JSON.parse(gistData.files['data.json'].content);
			const entry = Object.fromEntries(data);
			if (entry.name) list.push(Object.fromEntries(data));

			await axios.patch(
				`https://api.github.com/gists/${GIST_ID}`,
				{
					files: {
						'data.json': {
							content: JSON.stringify(list)
						}
					}
				},
				{
					headers: {
						Authorization: `Bearer ${GITHUB_TOKEN}`
					}
				}
			);

			console.log('Form data submitted successfully');
		} catch (error) {
			console.error('Error submitting form data:', error);
		}
	}
};
