import dayjs from "dayjs";
import { DatePickerInput } from "./DatePicker";

export default {
  title: "DatePicker",
  component: DatePickerInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Primary = {
  args: {
    date: dayjs(),
    onChange: () => {},
  },
};
