export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-layout">
      <main className="page-content">{children}</main>
    </div>
  );
}
