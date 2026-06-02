export function sortArts(arts, sortBy, getCount) {
  const items = [...arts];

  switch (sortBy) {
    case 'recientes':
      return items.sort((a, b) => b.orderIndex - a.orderIndex);
    case 'antiguos':
      return items.sort((a, b) => a.orderIndex - b.orderIndex);
    case 'votados':
      return items.sort(
        (a, b) => getCount(b.id) - getCount(a.id) || b.orderIndex - a.orderIndex
      );
    default:
      return items;
  }
}
