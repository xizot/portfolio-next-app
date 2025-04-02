import MainLayoutHeader from '@/components/layouts/MainLayoutHeader';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MainLayoutHeader />
      <div className="container">
        <main>{children}</main>
      </div>
    </div>
  );
}
