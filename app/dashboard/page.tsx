import { AIChatInterface } from '@/components/ai-dashboard/chat-interface';
import { MetricsGrid } from '@/components/ai-dashboard/metrics-grid';

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full">
      <div className="xl:col-span-2 flex flex-col gap-6">
        <MetricsGrid />
        <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl">
          <h2 className="text-xl font-semibold mb-4 text-slate-100">Financial Data Orchestration</h2>
          {/* Complex Data Visualization Component would go here */}
          <div className="h-[400px] w-full bg-slate-800/50 rounded-lg border border-slate-700/50 flex items-center justify-center">
            <span className="text-slate-500">Interactive WebGL Visualization Area</span>
          </div>
        </div>
      </div>
      <div className="xl:col-span-1 h-full">
        <AIChatInterface />
      </div>
    </div>
  );
}