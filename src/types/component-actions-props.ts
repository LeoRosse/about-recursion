interface ComponentActionsProps {
  readonly containerId: string;
  readonly values: { readonly label: string; readonly onClick: () => void | undefined }[];
}

export { ComponentActionsProps };
