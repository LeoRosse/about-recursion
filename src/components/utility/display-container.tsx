import { useAppSelector } from '../../store/hooks';
import { Container } from '../../types';

const displayContainer = (container: Container): boolean => {
  // policy
  const policy = useAppSelector((state) => state.policy.policy);
  const hasPolicy = container.metadata?.relatedActions?.find((relAct) => relAct.types === 'policy');
  if (hasPolicy && !hasPolicy?.values.includes(policy)) return false;
  return true;
};

export { displayContainer };
