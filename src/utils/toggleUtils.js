export const toggleLike = (items, itemId) => {
  return items.map((item) =>
    item.id === itemId
      ? {
          ...item,
          likes: item.likedByUser ? item.likes - 1 : item.likes + 1,
          likedByUser: !item.likedByUser,
        }
      : item
  );
};
