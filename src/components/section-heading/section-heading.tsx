import * as React from 'react';
import { useDispatch } from 'react-redux';
import { updatePolicy } from '../../store/slices/policy-slice';
import { Container } from '../../types';

interface SectionHeadingProps {
  container: Container;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ container }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between my-4">
      <div>Name: {container.containerInfo.title}</div>
      <div className="flex">
        <button onClick={() => dispatch(updatePolicy('public'))}>public</button>
        <button onClick={() => dispatch(updatePolicy('private'))}>private</button>
      </div>
    </div>
  );
};

export { SectionHeading };
