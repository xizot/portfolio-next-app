import MainLayoutHeader from "@/components/layouts/MainLayoutHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainLayoutHeader />
      <main className="pt-20">{children}</main>
    </div>
  );
}
