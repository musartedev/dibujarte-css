export async function onRequestPost({ env, params }) {
  const artId = params.artId;

  if (!artId || artId.length > 120) {
    return Response.json({ error: 'Invalid art id' }, { status: 400 });
  }

  if (!env.VOTES) {
    return Response.json({ error: 'Votes not configured' }, { status: 503 });
  }

  const key = `vote:${artId}`;
  const current = parseInt((await env.VOTES.get(key)) ?? '0', 10);
  const votes = current + 1;

  await env.VOTES.put(key, String(votes));

  return Response.json({ artId, votes });
}
