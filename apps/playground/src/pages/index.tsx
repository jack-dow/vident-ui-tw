import { Button } from '@vident-ui/core';
import { useBooleanToggle } from '@vident-ui/hooks';

import { Layout } from '../components/Layout';

import * as Demos from '../demos';

export default function Docs() {
  const [checked, toggle] = useBooleanToggle();

  return <Layout />;
}
