import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hviufhixprdcjzgtzqqw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2aXVmaGl4cHJkY2p6Z3R6cXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MTE1NDcsImV4cCI6MTk5OTM4NzU0N30.XXY20AKS9A5LofuUH0B7nev6l3mdNAmA9l9alQJHtM4"
export const supabase = createClient(supabaseUrl, supabaseKey)