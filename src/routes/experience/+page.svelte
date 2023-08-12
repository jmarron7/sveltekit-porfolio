<script lang="ts">
	import Icon from '@iconify/svelte';

	const details = [
		{
			year: 'AUG 2023',
			icon: 'cib:svelte',
			details: 'Rebuilt jesusmarron.com in Sveltekit'
		},
		{
			year: 'MAY 2023 - JULY 2023',
			icon: 'fa6-brands:angular',
			details:
				"Completed Cook Systems' Intensive 2-Month Fullstack Developer Program in Java, Spring Boot, Angular, and Typescript"
		},
		{
			year: 'FEB 2023 - PRESENT',
			icon: 'simple-icons:go',
			details: 'Started Learning Go and Sveltekit'
		},
		{
			year: 'DEC 2022',
			icon: 'material-symbols:volunteer-activism-rounded',
			details:
				'Volunteered with Code Crew as a Technical Volunteer During the Hour of Code Winter Event Again'
		},
		{
			year: 'JUNE 2022 - FEB 2023',
			icon: 'vaadin:automation',
			details:
				'Joined the Platform Team of a SaaS Company Where I focused on Infrastructure Automation'
		},
		{
			year: '2022',
			icon: 'healthicons:group-discussion-meetingx3',
			details: 'Started Attending Local Tech Meetups'
		},
		{
			year: 'AUG 2021 - JUNE 2022',
			icon: 'grommet-icons:system',
			details: 'Started Role as a Systems Engineer at a Local AgTech Company'
		},
		{
			year: 'FEB 2021',
			icon: 'fluent:person-support-24-filled',
			details: 'Landed a Contracted IT Service Desk Analyst Role at a Pest Control Company'
		},
		{
			year: 'LATE 2020',
			icon: 'mdi:react',
			details: 'Started Learning React, Typescript, and Django'
		},
		{
			year: '2020 - 2021',
			icon: 'icon-park-solid:laptop',
			details:
				'Completed Tech901 Courses in Computer Programming, IT Fundamentals, and Data Analytics'
		},
		{
			year: '2019',
			icon: 'material-symbols:volunteer-activism-rounded',
			details:
				'Volunteered with Code Crew as a Technical Volunteer During the Hour of Code Winter Event'
		},
		{
			year: '2019',
			icon: 'cib:python',
			details: 'Started Learning Python'
		},
		{
			year: '2018 - 2021',
			icon: 'tabler:dots',
			details: 'Worked Various Jobs While Still Thinking About Tech'
		},
		{
			year: '2018',
			icon: 'ph:pause-fill',
			details: 'Paused Enrollment at The University of Memphis'
		},
		{
			year: '2015',
			icon: 'ph:code-fill',
			details: 'Revisited Building Websites in HTML and CSS'
		},
		{
			year: '2014',
			icon: 'fa6-brands:java',
			details: 'Learned about Java and Data Structures @ UofM'
		},
		{
			year: '2014',
			icon: 'teenyicons:school-solid',
			details: 'Started Attending The University of Memphis for Computer Science'
		},
		{
			year: '2011',
			icon: 'simple-icons:visualbasic',
			details: 'Enrolled in a Visual Basic Class in High School'
		},
		{
			year: '2011 - 2013',
			icon: 'bi:unity',
			details: 'Started Learning Game Development in Unity with C#'
		},
		{
			year: '2009 - 2013',
			icon: 'mdi:calculator',
			details: 'Created TI-BASIC Programs on TI-83 & TI-84 Calculators'
		},
		{
			year: '2008',
			icon: 'file-icons:lua',
			details: 'Started Creating Game Mods and Scripts with Lua'
		},
		{
			year: '2007',
			icon: 'material-symbols:line-start-square-outline-rounded',
			details: 'Started Programming with HTML, CSS, and PHP'
		}
	];
</script>

<svelte:head>
	<title>Jesus Marron - Experience</title>
</svelte:head>

<h2 class="text-3xl mb-6 font-semibold">My Tech Journey</h2>
{#each details as detail}
	<div class="flex items-center border rounded p-4 border-base-200 mb-4">
		<Icon icon={detail.icon} class="text-2xl mr-1" />

		<div class="ml-4">
			<span class="text-surface-300 block"> {detail.year} </span>

			<p>{@html detail.details}</p>
		</div>
	</div>
{/each}
