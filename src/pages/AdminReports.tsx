import AdminLayout from "@/components/admin/AdminLayout";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type Metric = { name: string; value: number | string };
type MetricsResponse = { metrics: Metric[] };

const AdminReports = () => {
  const token = localStorage.getItem("userToken") || "";
  const [ga, setGa] = useState<MetricsResponse>({ metrics: [] });
  const [meta, setMeta] = useState<MetricsResponse>({ metrics: [] });

  async function load() {
    const a = await fetch("http://localhost:3001/api/integrations/google-analytics", { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json());
    const m = await fetch("http://localhost:3001/api/integrations/meta", { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json());
    setGa(a);
    setMeta(m);
  }

  function exportCSV() {
    const rows = [["metric", "value"], ...[...ga.metrics, ...meta.metrics].map((x) => [x.name, x.value])];
    const csv = rows.map(r => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "report.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  useEffect(() => { if (token) load(); }, []);

  const data = ga.metrics.map((m) => ({ name: m.name, value: m.value })) || [];

  return (
    <AdminLayout>
      <h1 className="font-display text-2xl font-bold mb-4">Reportes</h1>
      <div className="bg-background rounded-2xl shadow-sm ring-1 ring-border p-4 mb-4">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#7c3aed" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Button onClick={exportCSV}>Exportar CSV</Button>
    </AdminLayout>
  );
};

export default AdminReports;
