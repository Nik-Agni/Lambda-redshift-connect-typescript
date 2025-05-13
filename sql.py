SELECT 
  'INSERT INTO ' || table_name || ' (' || 
  LISTAGG(column_name, ', ') WITHIN GROUP (ORDER BY ordinal_position) || 
  ') VALUES (...);' AS insert_template
FROM information_schema.columns
WHERE table_name = 'your_table_name'
  AND table_schema = 'public'
GROUP BY table_name;
.
