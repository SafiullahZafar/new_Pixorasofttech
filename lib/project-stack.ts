const knownTechnologyTag = /^(Next\.js(?:\s\d+)?|React(?: Native)?|TypeScript|JavaScript|Node\.js|PHP(?:\s[\d.]+)?|Laravel(?:\s\d+)?|Flutter|Go|PostgreSQL|MongoDB|MySQL|Tailwind CSS|Vite(?:\s\d+)?|WebSockets?|AWS|Docker|Stripe API|Maps API|Supabase)$/i;

export function getProjectTechnologyStack(tags: string[]) {
  return tags.filter((tag) => knownTechnologyTag.test(tag));
}
