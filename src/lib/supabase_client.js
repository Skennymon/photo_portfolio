import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ytjourbrptiliggerqln.supabase.co'
const supabaseKey = process.env.SUPABASE_PUBLIC_ANON
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;