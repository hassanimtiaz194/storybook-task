import { Accordion1 } from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion1,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Primary = {
  args: {
    size: 'large',
    data: [
      {
        title: "Accordion 1",
        details:
          "Description of accordion 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
      {
        title: "Accordion 2",
        details:
          "Description of accordion 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
      {
        title: "Accordion 3",
        details:
          "Description of accordion 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
    ],
  },
};
