import { Container } from "./types";

const payloadOne: { containers: Container[] } = {
  containers: [
    {
      containerInfo: {
        id: "first-container",
        title: "First Container",
        cols: 2,
        rows: 4,
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
          {
            chartInfo: {
              id: "super-nested",
              title: "Super Nested",
            },
          },
          {
            chartInfo: {
              id: "super-nested",
              title: "Super Nested",
            },
          },
          {
            chartInfo: {
              id: "super-nested",
              title: "Super Nested",
            },
          },
          {
            chartInfo: {
              id: "super-nested",
              title: "Super Nested",
            },
          },
        ],
      },
      metadata: {
        actions: [
          {
            types: "export",
            values: ["image", "xls", "svg"],
          },
        ],
      },
    },
  ],
};

export { payloadOne };
