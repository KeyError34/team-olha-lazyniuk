export const Query = {
  getUsers: () => 'Hello, GraphQL!',
  getUser: (_: any, { id }: { id: string }) => {
    return { id };
  },
};
  