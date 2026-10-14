import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { IntegrationCard } from '@/src/components/shared/ui/card/integration-card';

const integrationData = [
  {
    id: 'slack',
    iconSrc: '/images/icons/slack.svg',
    iconAlt: 'Slack',
    title: 'Slack',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'discord',
    iconSrc: '/images/icons/discord.svg',
    iconAlt: 'Discord',
    title: 'Discord',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'telegram',
    iconSrc: '/images/icons/telegram.svg',
    iconAlt: 'Telegram',
    title: 'Telegram',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'messenger',
    iconSrc: '/images/icons/messenger-dark.svg',
    iconAlt: 'Messenger',
    title: 'Messenger',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'duolingo',
    iconSrc: '/images/icons/duolingo.svg',
    iconAlt: 'Duolingo',
    title: 'Duolingo',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'skype',
    iconSrc: '/images/icons/skype.svg',
    iconAlt: 'Skype',
    title: 'Skype',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'netflix',
    iconSrc: '/images/icons/netflix.svg',
    iconAlt: 'Netflix',
    title: 'Netflix',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'confluence',
    iconSrc: '/images/icons/confluence.svg',
    iconAlt: 'Confluence',
    title: 'Confluence',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'claude-ai',
    iconSrc: '/images/icons/claude-ai.svg',
    iconAlt: 'Claude',
    title: 'Claude',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'behance',
    iconSrc: '/images/icons/behance.svg',
    iconAlt: 'Behance',
    title: 'Behance',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'edge',
    iconSrc: '/images/icons/edge.svg',
    iconAlt: 'Edge',
    title: 'Edge',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'skype-2',
    iconSrc: '/images/icons/skype.svg',
    iconAlt: 'Skype',
    title: 'Skype',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'pinterest',
    iconSrc: '/images/icons/pinterest.svg',
    iconAlt: 'Pinterest',
    title: 'Pinterest',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'discord-2',
    iconSrc: '/images/icons/discord.svg',
    iconAlt: 'Discord',
    title: 'Discord',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'jira',
    iconSrc: '/images/icons/jira_service_desk.svg',
    iconAlt: 'Jira',
    title: 'Jira',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'tiktok',
    iconSrc: '/images/icons/tiktok.svg',
    iconAlt: 'TikTok',
    title: 'TikTok',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'safari',
    iconSrc: '/images/icons/safari.svg',
    iconAlt: 'Safari',
    title: 'Safari',
    description: 'Send voice-generated alerts directly to team chats.',
  },
  {
    id: 'mastercard',
    iconSrc: '/images/icons/mastar-card.svg',
    iconAlt: 'Mastercard',
    title: 'Mastercard',
    description: 'Send voice-generated alerts directly to team chats.',
  },
];

const IntegrationHero = () => {
  return (
    <section
      className="lp:pb-39! pt-28 pb-20 md:pt-39 md:pb-28"
      aria-labelledby="ecosystem-heading"
    >
      <div className="main-container">
        <div className="space-y-14">
          <div className="space-y-3 text-center">
            <TextReveal>
              <h2
                id="ecosystem-heading"
                className="text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-sora font-normal tracking-[-2.4px]"
              >
                eComSmiths works with your ecosystem
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p
                className="font-inter-tight text-tagline-2 text-background-13/50 font-normal"
                itemProp="description"
              >
                eComSmiths works with your ecosystem
              </p>
            </TextReveal>
          </div>

          <div
            className="grid grid-cols-12 items-center justify-center gap-4 md:gap-2"
            aria-label="Platform integrations"
          >
            {integrationData.map((item, index) => (
              <div key={item.id} className="col-span-12 md:col-span-6 lg:col-span-4">
                <RevealAnimation delay={0.1 + (index % 9) * 0.1} key={item.id}>
                  <IntegrationCard
                    iconSrc={item.iconSrc}
                    iconAlt={item.iconAlt}
                    title={item.title}
                    description={item.description}
                  />
                </RevealAnimation>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationHero;
