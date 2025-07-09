type DashboardLayoutProps = {
  children: React.ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid" data-layout="dashboard">
      {children}
    </div>
  );
}
