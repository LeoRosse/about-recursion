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
    <div className="flex justify-between my-4 items-center">
      <div>Name: {container.containerInfo.title}</div>
      <div className="flex">
        <button
          className="ml-2 border-black border-2 p-1 rounded shadow-md"
          onClick={() => dispatch(updatePolicy('public'))}
        >
          public
        </button>
        <button
          onClick={() => dispatch(updatePolicy('private'))}
          type="button"
          className="ml-2 border-black border-2 p-1 rounded shadow-md"
        >
          private
        </button>
      </div>
    </div>
  );
};

export { SectionHeading };
