import * as React from 'react';
import { Link as LocationLink, LinkProps } from 'react-location';

export const Link = (props: LinkProps) => <LocationLink preload={5000} {...props} />;
