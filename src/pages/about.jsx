import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.webp'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-amber-500 dark:text-zinc-200 dark:hover:text-amber-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-amber-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Brandon Fearing</title>
        <meta
          name="description"
          content="I'm Brandon Fearing. I live in Asheville, NC with my wonderful family. Western North
          Carolina is simply stunning, and I can't imagine a more
          perfect place for us to live these days."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Brandon Fearing.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I live in Asheville, NC with my wonderful family. Western North
                Carolina is simply stunning, and I can&apos;t imagine a more
                perfect place for us to live these days.
              </p>
              <p>
                <span className="font-bold text-white/80">Educationally</span>,
                I graduated with a B.S. in Industrial and Systems Engineering
                from Virginia Tech, as well as minored in Business and
                Industrial Design. My education laid the foundation for how I
                perceive, research, and approach problems:{' '}
                <span className="font-bold">opportunity-minded</span>,{' '}
                <span className="font-bold">user-driven</span>, and{' '}
                <span className="font-bold">process-oriented</span>.
              </p>
              <p>
                <span className="font-bold text-white/80">Professionally</span>,
                I&apos;ve worked on a wide-range of projects in several
                different industries. I&apos;ve machined pipes for nuclear
                aircraft carriers and submarines, tested actuarial financial
                systems, developed nationwide transit mobile applications,
                designed blockchain-based applications for the U.S. Government,
                led UX in website migrations for the State of Ohio, and founded
                a few startups along the way.
              </p>
              <p>
                <span className="font-bold text-white/80">Personally</span>, I
                enjoy working on micro-saas products in the creator economy
                space, getting my hands dirty in my small-but-mighty woodshop,
                staying active out on the golf course and hockey rink, and
                collecting a variety of trading cards. I&apos;m also on a
                decades long endeaver of learning Japanese and a new venture of
                working out consistently on the rowing machine.
              </p>
              <p>
                My mantra these days tends to be,{' '}
                <span className="font-bold">do what makes you happy today</span>
                . These past few years have taught me life is too short and too
                uncertain to spend it in pursuit of a better tomorrow.
              </p>
              {/* <p>
                Professionally, after numerous engineering internships building
                aircraft carriers and submarines for the U.S. Government, I
                began career as an application tester, creating test plans and
                automation scripts for the financial management programs
                outlined in the Affordable Care Act.
              </p>
              <p>
                After it&apos;s first year, those programs had billions in
                unrecouped funds and large-scale data submission errors which
                led to the founding of my first startup, BRDG, a healthcare
                consulting firm developing the{' '}
                <span className="">&quot;TurboTax&quot;</span>
                for the ACA Risk Adjustment and Reinsurance programs.
              </p>
              <p>
                I worked on BRDG for over year until early 2017 when the
                political landscaped changed and the future of the ACA programs
                faced a lot uncertainty.
              </p>
              <p>
                After winding down BRDG, I transitioned back to the federal
                consulting space{' '}
              </p> */}
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/brfearing"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/brandonfearing/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/bfearing"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/brandon-fearing-7b65b04a/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:brandon.fearing@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                brandon.fearing@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
