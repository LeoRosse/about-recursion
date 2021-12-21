import { Container } from "./types";

const payload: { containers: Container[] } = {
  containers: [
    {
      containerInfo: {
        id: "first-container",
        title: "First Container",
        children: [
          {
            containerInfo: {
              id: "nested-container",
              title: "Nested Container",
              children: [
                {
                  chartInfo: {
                    id: "first-chart",
                    title: "First Chart",
                  },
                },
                {
                  chartInfo: {
                    id: "second-chart",
                    title: "Second Chart",
                  },
                },
              ],
            },
          },
          {
            containerInfo: {
              id: "super-nested-container",
              title: "Super Nested Container",
              children: [
                {
                  chartInfo: {
                    id: "damn-nested",
                    title: "Damn Nested",
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export { payload };
