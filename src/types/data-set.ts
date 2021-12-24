interface DataSet {
  [k: string]: DataSet | Record<string, unknown>;
}

export { DataSet };
