import { AccordionValues, type AccordionValueItem } from '../components/AccordionValues';
import { PageHero } from '../components/PageHero';

const VISION_PILLARS: AccordionValueItem[] = [
  {
    num: '01',
    title: 'Long-Term Stewardship',
    description:
      'Guided by generational discipline across our three operating pillars, Group 77 builds institutions designed to compound value over decades rather than quarters.',
  },
  {
    num: '02',
    title: 'Pan-African Connectivity',
    description:
      'Bridging Johannesburg industrial capability with high-growth regional corridors to strengthen essential commercial and logistics networks across the continent.',
  },
  {
    num: '03',
    title: 'Sustainable Infrastructure',
    description:
      'Investing in resilient physical systems, industrial assets, and foundational utilities that enable communities and enterprises to thrive reliably.',
  },
  {
    num: '04',
    title: 'Disciplined Capital Allocation',
    description:
      'Deploying patient capital with rigorous governance, risk stewardship, and alignment between institutional partners and operating businesses.',
  },
  {
    num: '05',
    title: 'Local Empowerment',
    description:
      'Developing local operational leadership, technical capability, and enduring enterprise partnerships anchored in South Africa and across Africa.',
  },
  {
    num: '06',
    title: 'Institutional Resilience',
    description:
      'Operating through clear regulatory compliance, transparent reporting, and governance structures built to endure economic cycles.',
  },
  {
    num: '07',
    title: 'Generational Legacy',
    description:
      'Authoring an African-built industrial and asset management legacy where today’s values become tomorrow’s durable foundation.',
  },
];

/** Our Vision page matching Figma frame "Group 77 - Our Vision" (121:583) with completed body. */
export function OurVisionPage() {
  return (
    <>
      <PageHero
        title={'THE FUTURE\nWE ARE\nAUTHORING'}
        eyebrow="our future"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales tortor eu rutrum. Vivamus a finibus ipsum, eu sodales nulla. Cras in facilisis magna."
        imageSrc="/assets/vision-hero.png"
        imageAlt="Modern glass skyscraper facade"
      />

      <AccordionValues
        eyebrow="OUR VISION FOR AFRICA"
        heading="Building for generations, not just for today."
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra tempor lectus nec consequat. Curabitur dignissim orci vel aliquam posuere. Nulla id ex quis justo tempus malesuada sed non tortor. In quis elit enim. Vestibulum semper metus quis pharetra commodo. Ut tincidunt eu enim sed elementum"
        imageSrc="/assets/home-vision-seeds.png"
        imageAlt="Seeds held in hand symbolizing generational growth"
        items={VISION_PILLARS}
        showWatermark
      />
    </>
  );
}
