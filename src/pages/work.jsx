import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      {href && <Card.Cta>{cta || 'Learn more'}</Card.Cta>}
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Employment - Brandon Fearing</title>
        <meta
          name="description"
          content="A brief overview of my employment history, listed in descending chronological order."
        />
      </Head>
      <SimpleLayout
        title="Things I've worked on from nine to five."
        intro="A brief overview of my employment history, listed in descending chronological order."
      >
        <div className="space-y-20">
          <SpeakingSection title="Deloitte Digital" dates="Jun 2017 - May 2023">
            <Appearance
              href=""
              title="Ohio Identity Applications"
              description="Led a team of content strategist, UI designers, and software engineers in the creation of internal web applications and agency intranets."
              event="UX Team Lead"
              cta=""
            />
            <Appearance
              href=""
              title="Innovate Ohio Platform"
              description="Led a team of content strategist, UI designers, and software engineers in the migration of legacy websites for the Department of Taxation, Ohio Tourism, Take Charge Ohio, Donate Life Ohio, Bureau of Motor Vehicles, and Department of Higher Education."
              event="UX Team Lead"
              cta=""
            />
            <Appearance
              href=""
              title="Specialty Crops Integrated Operating Network"
              description="Developed an automated business platform that modernizes the way USDA provides specialty crops inspection and audit services."
              event="Development Team Lead"
              cta=""
            />
            <Appearance
              href=""
              title="Department of Defense"
              description="Developed a suspicious purchase order review application for domestic and foreign intelligence agencies."
              event="Lead Developer"
              cta=""
            />
            <Appearance
              href=""
              title="United States Treasury Department"
              description="Designed and developed a multi-tiered grants payment application in partnership with the National Science Foundation."
              event="UI Designer / Lead Developer"
              cta=""
            />
            <Appearance
              href=""
              title="Ohio Identity Manager"
              description="Developed and deployed a web portal to automate SAML/OIDC single sign-on and enterprise app store onboarding processes for Ohioan agencies."
              event="Lead Developer"
              cta=""
            />
            <Appearance
              href=""
              title="Department of Homeland Security"
              description="Designed and developed an equipment review and attestation mobile application for U.S. CBP agents."
              event="UI Designer / Lead Developer"
              cta=""
            />
            <Appearance
              href=""
              title="SafeTN"
              description="Developed and deployed a hybrid mobile application to capture suspicious activity reports for the State of Tennessee."
              event="Lead Mobile Developer"
              cta=""
            />
            <Appearance
              href=""
              title="Verizon Enterprise Solutions"
              description="Developed a digital evidence upload and analysis web platform for a nationwide telecommunications company."
              event="Lead Frontend Developer"
              cta=""
            />
            <Appearance
              href=""
              title="Amtrak"
              description="Coordinated onshore and offshore development teams implementing new product features and bug fixes for iOS and Android mobile apps."
              event="Mobile Technical Lead"
              cta=""
            />
          </SpeakingSection>
          <SpeakingSection title="BRDG" dates="Feb 2016 - Jun 2017">
            <Appearance
              href=""
              title="Healthcare IT Consulting"
              description="Provided strategic guidance, application development, and technical reviews for clients in the healthcare solutions industry."
              event="Co-founder and CEO"
              cta=""
            />
          </SpeakingSection>
          <SpeakingSection
            title="Accenture Federal Services"
            dates="Sep 2014 - Jan 2016"
          >
            <Appearance
              href=""
              title="CMS Affordable Insurance Exchange"
              description="Responsible for the test automation planning and script creation across various financial management systems."
              event="Automation Test Lead"
              cta=""
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
