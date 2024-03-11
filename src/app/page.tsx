import { db } from '../lib/db/db';
import { countries } from '@/lib/db/schema';

export default async function Home() {

  const count = await db.select().from(countries);

  return (
    <div>
      Connected to database?
      <p>{count.length/2}</p>
    </div>
  );
}
