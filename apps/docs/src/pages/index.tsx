import { Button } from '@vident-ui/core';
import { useBooleanToggle } from '@vident-ui/hooks';


export default function Docs() {
  const [checked, toggle] = useBooleanToggle();

  return <div>Docs!!</div>;
}
