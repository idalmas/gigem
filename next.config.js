/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: 'https://reqmscxybwgimogjsytk.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlcW1zY3h5YndnaW1vZ2pzeXRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3NTAzMjQsImV4cCI6MjA0NTMyNjMyNH0.BOFXIgYmWdjxRxIOQSndSRr4DqtmkwGuLUx0ao1JZqo',
  },
}

module.exports = nextConfig
