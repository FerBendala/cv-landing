import IconAITools from '@image/svg/icon-aitools.svg?react';
import TechCSS from '@image/svg/tech-css.svg?react';
import TechFigma from '@image/svg/tech-figma.svg?react';
import TechGit from '@image/svg/tech-git.svg?react';
import TechHTML from '@image/svg/tech-html.svg?react';
import TechIllustrator from '@image/svg/tech-illustrator.svg?react';
import TechJavascript from '@image/svg/tech-javascript.svg?react';
import TechPhotoshop from '@image/svg/tech-photoshop.svg?react';
import TechReact from '@image/svg/tech-react.svg?react';
import TechSass from '@image/svg/tech-sass.svg?react';
import TechStorybook from '@image/svg/tech-storybook.svg?react';
import TechTailwind from '@image/svg/tech-tailwindcss.svg?react';
import TechTypescript from '@image/svg/tech-typescript.svg?react';

const skillGroups = [
	{
		category: 'architecture',
		skills: [
			{ name: 'JavaScript', icon: <TechJavascript /> },
			{ name: 'TypeScript', icon: <TechTypescript /> },
			{ name: 'React', icon: <TechReact /> },
			{ name: 'Storybook', icon: <TechStorybook /> }
		]
	},
	{
		category: 'styling',
		skills: [
			{ name: 'Tailwind', icon: <TechTailwind /> },
			{ name: 'Sass', icon: <TechSass /> },
			{ name: 'CSS', icon: <TechCSS /> },
			{ name: 'HTML', icon: <TechHTML /> }
		]
	},
	{
		category: 'productivity',
		skills: [
			{ name: 'Git', icon: <TechGit /> },
			{ name: 'AI Tooling', icon: <IconAITools /> }
		]
	},
	{
		category: 'design',
		skills: [
			{ name: 'Figma', icon: <TechFigma /> },
			{ name: 'Illustrator', icon: <TechIllustrator /> },
			{ name: 'Photoshop', icon: <TechPhotoshop /> }
		]
	}
];

export { skillGroups };
