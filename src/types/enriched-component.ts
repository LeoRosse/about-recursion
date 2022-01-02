interface EnrichedComponent {
  (): JSX.Element;
  getLayout(page: React.ReactElement): JSX.Element;
}

export { EnrichedComponent };
