import { Button } from '@vident-ui/core';
import { useBooleanToggle } from '@vident-ui/hooks';

import { useStore } from '../lib/store';
import { Layout } from '../components/Layout';

export default function Docs() {
  const ActiveComponent = useStore((state) => state.ActiveComponent);

  return (
    <Layout>
      <div className="flex h-full w-full items-start justify-center p-8">
        {ActiveComponent ? <ActiveComponent /> : <div>No component selected</div>}
      </div>
    </Layout>
  );
}
