import { AccordionValues, type AccordionValueItem } from '../components/AccordionValues';
import { PageHero } from '../components/PageHero';

const APPROACH_VALUES: AccordionValueItem[] = [
  {
    num: '01',
    title: 'Peace',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra tempor lectus nec consequat. Curabitur dignissim orci vel aliquam posuere. Nulla id ex quis justo tempus malesuada.',
  },
  {
    num: '02',
    title: 'Integrity',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra tempor lectus nec consequat. Curabitur dignissim orci vel aliquam posuere. Nulla id ex quis justo tempus malesuada.',
  },
  {
    num: '03',
    title: 'Commitment',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra tempor lectus nec consequat. Curabitur dignissim orci vel aliquam posuere. Nulla id ex quis justo tempus malesuada.',
  },
  {
    num: '04',
    title: 'Responsibility',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra tempor lectus nec consequat. Curabitur dignissim orci vel aliquam posuere. Nulla id ex quis justo tempus malesuada.',
  },
  {
    num: '05',
    title: 'Conviction',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra tempor lectus nec consequat. Curabitur dignissim orci vel aliquam posuere. Nulla id ex quis justo tempus malesuada.',
  },
  {
    num: '06',
    title: 'Gratitude',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra tempor lectus nec consequat. Curabitur dignissim orci vel aliquam posuere. Nulla id ex quis justo tempus malesuada.',
  },
  {
    num: '07',
    title: 'Building Things That Last',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra tempor lectus nec consequat. Curabitur dignissim orci vel aliquam posuere. Nulla id ex quis justo tempus malesuada.',
  },
];

/** Our Approach page matching Figma frame "Group 77 - Our Approach Page" (119:200). */
export function OurApproachPage() {
  return (
    <>
      <PageHero
        title={'OUR\nPHILOSOPHY'}
        eyebrow="OUR APPROACH"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales tortor eu rutrum. Vivamus a finibus ipsum, eu sodales nulla. Cras in facilisis magna."
        imageSrc="/assets/approach-hero.png"
        imageAlt="Architectural facade geometry"
      />

      <AccordionValues
        eyebrow="OUR VALUES"
        heading="Building for generations, not just for today."
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra tempor lectus nec consequat. Curabitur dignissim orci vel aliquam posuere. Nulla id ex quis justo tempus malesuada sed non tortor. In quis elit enim. Vestibulum semper metus quis pharetra commodo. Ut tincidunt eu enim sed elementum"
        imageSrc="/assets/approach-pipes.png"
        imageAlt="Industrial infrastructure piping"
        items={APPROACH_VALUES}
      />
    </>
  );
}
