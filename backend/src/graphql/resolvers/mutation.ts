export const Mutation = {
    createUser: (_: any, { name, email }: { name: string; email: string }) => {
      return { id: "1", name, email };
    },
  };
  