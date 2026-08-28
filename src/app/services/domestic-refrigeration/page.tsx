import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getServiceBySlug } from '@/lib/services-data';

const service = getServiceBySlug('domestic-refrigeration')!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: { title: service.metaTitle, description: service.metaDescription },
};

export default function Page() {
  return <ServicePage service={service} />;
}
