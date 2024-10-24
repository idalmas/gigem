'use client';

import { useEffect } from 'react';

export default function TestEnv() {
  useEffect(() => {
    console.log('Test page - NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('Test page - NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  }, []);

  return <div>Check the console for environment variables</div>;
}
