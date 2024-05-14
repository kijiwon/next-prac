import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  const allCustomers = await fetchFilteredCustomers('');

  return (
    <p>
      <CustomersTable customers={allCustomers} />
    </p>
  );
}
