import { env } from '@/lib/env';
import type { DataSource } from './data-source.types';
import { MockDataSource } from './mock-data-source';
import { SupabaseDataSource } from './supabase-data-source';

let instance: DataSource | null = null;

export function getDataSource(): DataSource {
  if (!instance) {
    instance = env.dataMode === 'live' ? new SupabaseDataSource() : new MockDataSource();
  }
  return instance;
}
