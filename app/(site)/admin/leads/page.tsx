'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Mail, Phone, MessageSquare, Calendar } from 'lucide-react';

const supabaseUrl = "https://nveahhqvqrzuosladhgl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52ZWFoaHF2cXJ6dW9zbGFkaGdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NzY5NTUsImV4cCI6MjA3ODU1Mjk1NX0.3HSLYKjpJMkXeLaC35e42uq6DiPpbvo9suq0uReY_yI";
const supabase = createClient(supabaseUrl, supabaseKey);

interface Lead {
  id: string;
  name: string;
  email: string;
  trade: string;
  message: string;
  status: string;
  created_at: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    loadLeads();
  }, [filter]);

  const loadLeads = async () => {
    try {
      let query = supabase.from('leads').select('*').order('created_at', { ascending: false });
      
      if (filter !== 'all') {
        query = query.eq('status', filter);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      setLeads(data || []);
    } catch (error) {
      console.error('Error loading leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('leads')
        .update({ status: newStatus })
        .eq('id', id);
      
      if (error) throw error;
      loadLeads();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    converted: leads.filter(l => l.status === 'converted').length,
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Lead Management</h1>
          <p className="text-muted-foreground">View and manage all incoming leads</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="text-2xl font-bold text-foreground">{stats.total}</div>
            <div className="text-sm text-muted-foreground">Total Leads</div>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="text-2xl font-bold text-accent">{stats.new}</div>
            <div className="text-sm text-muted-foreground">New</div>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="text-2xl font-bold text-blue-500">{stats.contacted}</div>
            <div className="text-sm text-muted-foreground">Contacted</div>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="text-2xl font-bold text-green-500">{stats.converted}</div>
            <div className="text-sm text-muted-foreground">Converted</div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-2">
          {['all', 'new', 'contacted', 'converted'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === status
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card text-muted-foreground hover:bg-muted border border-border'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Leads List */}
        {loading ? (
          <div className="text-center py-12 text-muted-foreground">Loading leads...</div>
        ) : leads.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">No leads found</div>
        ) : (
          <div className="space-y-4">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-1">
                      {lead.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {lead.email}
                      </span>
                      <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                        {lead.trade}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(lead.created_at)}
                      </span>
                    </div>
                  </div>
                  <select
                    value={lead.status}
                    onChange={(e) => updateStatus(lead.id, e.target.value)}
                    className="px-3 py-1 rounded border border-border bg-background text-sm"
                    aria-label={`Update status for ${lead.name}`}
                    title={`Update status for ${lead.name}`}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="converted">Converted</option>
                    <option value="lost">Lost</option>
                  </select>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-card-foreground">{lead.message}</p>
                </div>

                <div className="flex gap-2">
                  <a
                    href={`mailto:${lead.email}?subject=Re: Your Website Inquiry`}
                    className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                  <a
                    href={`https://wa.me/${lead.email.replace(/[^0-9]/g, '')}?text=Hi ${lead.name}, thanks for your inquiry about a ${lead.trade} website`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

