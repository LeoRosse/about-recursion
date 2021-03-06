import * as React from 'react';
import { Container } from '../types';
import { SectionHeading } from './section-heading/section-heading';
import { createComponent } from './utility/create-component';
import { createContainer } from './utility/create-container';

interface GraphSectionProps {
  containers: Container[];
}

const GraphSection: React.FC<GraphSectionProps> = ({ containers }) => {
  // page
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl space-y-24">
      <SectionHeading container={containers[0]} />
      {createContainer(createComponent, containers[0].containerInfo.children)}
    </div>
  );
};

export { GraphSection };
