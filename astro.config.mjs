import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Astro Docs Docs (AD²)',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			  head: [
			    {
			      tag: 'meta',
			      attrs: {
			        name: 'robots',
			        content: 'noindex'
			      },
			    },
			  ],
			sidebar: [
				{ label: 'Welcome', link: '/welcome/' },
				{
					label: "About Doc'ing",
					items: [
						{ label: 'Why we write docs', link: '/about-docs/why-we-doc/' },
						{ label: 'How we write docs', link: '/about-docs/how-we-doc/' },
					],
				},
				{
					label: 'First-time Contributors',
					autogenerate: { directory: 'first-time' },
				},
				{
					label: 'Contributing Guides',
					items: [
						{ label: 'Writing and Style Guide', link: '/guides/writing-style/' },
						{ label: 'Adding docs for a new feature', link: '/guides/new-feature-docs/' },
						{ label: 'Contributing a Recipe', link: '/guides/recipe-writing/' },
						{ label: 'Translating Astro docs', link: '/guides/i18n/' },	
					],
				},
				{
					label: 'Roles',
					autogenerate: { directory: 'roles' },
				},
				{
					label: 'Reviewers',
					autogenerate: { directory: 'reviewers' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
