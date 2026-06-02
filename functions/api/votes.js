export async function onRequestGet({ env }) {
  if (!env.VOTES) {
    return Response.json({});
  }

  const list = await env.VOTES.list({ prefix: 'vote:' });
  const counts = {};

  await Promise.all(
    list.keys.map(async ({ name }) => {
      const artId = name.slice('vote:'.length);
      const value = await env.VOTES.get(name);
      counts[artId] = parseInt(value ?? '0', 10);
    })
  );

  return Response.json(counts);
}
