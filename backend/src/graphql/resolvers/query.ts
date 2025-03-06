export const Query = {
    hello: () => "Hello, GraphQL!",
    getUser: (_: any, { id }: { id: string }) => {
      return { id, name: "John Doe", email: "john@example.com" };
    },
  };
  