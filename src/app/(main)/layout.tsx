import MainLayoutHeader from '@/components/layouts/MainLayoutHeader';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MainLayoutHeader />
      <main>{children}</main>
    </div>
  );
}
