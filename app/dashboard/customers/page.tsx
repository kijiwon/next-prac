import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  const allCustomers = await fetchFilteredCustomers(query);
  // 빈문자열을 전달해 모든 데이터를 가져오기

  return (
    <div>
      <CustomersTable customers={allCustomers} />
    </div>
  );
}
