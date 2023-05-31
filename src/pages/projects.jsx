import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoCereal from '@/images/logos/cereal-mark.svg'
import logoElestrals from '@/images/logos/elestrals-2.png'
import logoShinyhunt from '@/images/logos/shinyhunt.webp'
import logoPoketch from '@/images/logos/poketch.webp'
import logoBuckeyeUI from '@/images/logos/buckeyeui.png'
import logoPLI from '@/images/logos/pli-square.png'
import logoLocoPlus from '@/images/logos/loco+.jpg'
import logoCortexFutura from '@/images/logos/cortex-futura.jpg'
import clsx from 'clsx'

const projects = [
  {
    name: 'Elestrals',
    description:
      'A $1.4M Kickstarter-funded trading card game of monsters, magic, and mythology.',
    link: { href: 'https://elestrals.com', label: 'elestrals.com' },
    logo: logoElestrals,
    rounded: true,
  },
  {
    name: 'Cereal',
    description:
      'A suite of products and tools to help creators grow and earn a living doing what they love.',
    link: { href: 'https://trycereal.com', label: 'trycereal.com' },
    logo: logoCereal,
    rounded: true,
  },
  {
    name: 'ShinyHunt',
    description:
      'A mobile/web app to help shiny hunters keep track of their encounters and collections.',
    link: { href: 'https://shinyhunt.com', label: 'shinyhunt.com' },
    logo: logoShinyhunt,
    rounded: true,
  },
  {
    name: 'Poketch',
    description:
      'A basic counter mobile app to keep track of time and encounters.',
    link: { href: 'https://poketchapp.com', label: 'poketchapp.com' },
    logo: logoPoketch,
  },
  {
    name: 'BuckeyeUI',
    description: 'A platform agnostic component library for Ohioan websites.',
    link: { href: 'https://www.buckeyeui.com/', label: 'buckeyeui.com' },
    logo: logoBuckeyeUI,
    rounded: true,
  },
  {
    name: 'Precision Label Inc',
    description:
      'A manufacturer of pressure sensitive labels and tags for a myriad of industries.',
    link: {
      href: 'https://precisionlabelinc.com/',
      label: 'precisionlabelinc.com',
    },
    logo: logoPLI,
  },
  {
    name: 'Loco+ Creator Map',
    description:
      'A platform empowering independent filmmakers and content creators.',
    link: {
      href: 'https://www.golocoplus.com/creators',
      label: 'golocoplus.com',
    },
    rounded: true,
    logo: logoLocoPlus,
  },
  {
    name: 'Cortex Futura Revamp',
    description:
      'A site devoted to Tana courses and resources to become more prodcutive.',
    link: { href: 'https://www.cortexfutura.com/', label: 'cortexfutura.com' },
    logo: logoCortexFutura,
    rounded: true,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Brandon Fearing</title>
        <meta
          name="description"
          content="A collection of my own projects and freelance gigs from the past few years."
        />
      </Head>
      <SimpleLayout
        title="Things I've worked on at night and on the weekends."
        intro="A collection of my own projects and freelance gigs from the past few years."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className={clsx(
                    project.rounded ? 'rounded-full' : 'rounded-lg',
                    'h-8 w-8'
                  )}
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="blank">
                  {project.name}
                </Card.Link>
              </h2>
              {/* <Image
                className="z-10 object-contain w-auto max-h-6 max-w-fit"
                src={project.logo}
                alt=""
              /> */}
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-amber-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
