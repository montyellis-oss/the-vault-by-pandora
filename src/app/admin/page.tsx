"use client";

import { useState, useEffect, useCallback } from "react";
import AdminLogin from "../../components/admin/AdminLogin";
import AdminSidebar from "../../components/admin/AdminSidebar";
import ProductManager from "../../components/admin/ProductManager";
import PartnerHub from "../../components/admin/PartnerHub";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [activeTab, setActiveTab] = useState<"products" | "partners">("products");

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch("/api/products");
      setAuthenticated(res.ok);
    } catch {
      setAuthenticated(false);
    } finally {
      setChecking(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    setAuthenticated(false);
  };

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-800 border-t-amber-500" />
          <span className="text-sm text-gray-400">Verifying access…</span>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return <AdminLogin onSuccess={() => setAuthenticated(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-black">
      <AdminSidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={handleLogout}
      />
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-6 py-8 lg:px-10 lg:py-10">
          {activeTab === "products" ? <ProductManager /> : <PartnerHub />}
        </div>
      </main>
    </div>
  );
}