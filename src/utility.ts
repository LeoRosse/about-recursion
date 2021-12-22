const createObjectNested = (element: Container | Chart) => {
  if (isContainer(element)) {
    return {
      [element.containerInfo.id]: element.containerInfo?.children?.reduce(
        (acc, curr) => ({ ...acc, ...createObjectNested(curr) }),
        {},
      ),
    };
  }
  return { [element.chartInfo.id]: { data: {} } };
};

console.log(brandOverview.containers.reduce((acc, curr) => ({ ...acc, ...createObjectNested(curr) }), {}));
