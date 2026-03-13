import { useState } from "react";
import {
  Stethoscope,
  Wrench,
  Scale,
  Building2,
  CalendarCheck,
  Bot,
  Bell,
  ClipboardList,
  LayoutDashboard,
  Phone,
  Truck,
  FileText,
  MessageSquare,
  Users,
  FolderSearch,
  Globe,
  FileCheck,
  Target,
  Sparkles,
  BarChart3,
  Mail,
} from "lucide-react";

const industries = [
  {
    id: "healthcare",
    label: "Healthcare",
    icon: Stethoscope,
    description: "Dental & doctor's offices",
    tools: [
      { icon: Globe, name: "Website with Online Booking" },
      { icon: Bot, name: "AI Receptionist" },
      { icon: Bell, name: "Appointment Reminder System" },
      { icon: ClipboardList, name: "Intake Form Automation" },
      { icon: LayoutDashboard, name: "Patient CRM Dashboard" },
    ],
  },
  {
    id: "trades",
    label: "Home Services",
    icon: Wrench,
    description: "HVAC, plumbing & construction",
    tools: [
      { icon: Phone, name: "Call Answering AI" },
      { icon: CalendarCheck, name: "Job Scheduling System" },
      { icon: Truck, name: "Technician Dispatch Dashboard" },
      { icon: FileText, name: "Automated Invoicing" },
      { icon: MessageSquare, name: "Lead Follow-Up Texts" },
    ],
  },
  {
    id: "legal",
    label: "Law Firms",
    icon: Scale,
    description: "Legal practices of all sizes",
    tools: [
      { icon: ClipboardList, name: "Intake Automation" },
      { icon: FolderSearch, name: "Case Qualification AI" },
      { icon: Users, name: "Client Portal" },
      { icon: FileCheck, name: "Document Automation" },
    ],
  },
  {
    id: "realestate",
    label: "Real Estate",
    icon: Building2,
    description: "Brokerages & independent agents",
    tools: [
      { icon: Target, name: "Lead Capture Site" },
      { icon: Sparkles, name: "AI Lead Responder" },
      { icon: BarChart3, name: "CRM Integration & Scheduling" },
      { icon: Mail, name: "Nurture Campaigns" },
    ],
  },
];

const IndustrySolutions = () => {
  const [active, setActive] = useState("healthcare");
  const current = industries.find((i) => i.id === active)!;

  return (
    <section id="industries" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Built for Your Industry
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We deliver purpose-built AI systems tailored to the workflows that matter most in your field.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActive(ind.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                active === ind.id
                  ? "bg-primary text-primary-foreground shadow-elevated"
                  : "bg-surface text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground"
              }`}
            >
              <ind.icon className="h-4 w-4" />
              {ind.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-surface rounded-2xl border border-border shadow-card p-8">
          <p className="text-sm text-muted-foreground font-medium mb-1 uppercase tracking-wider">
            {current.description}
          </p>
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">
            {current.label} Automation Stack
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {current.tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
              >
                <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary/10">
                  <tool.icon className="h-4.5 w-4.5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
