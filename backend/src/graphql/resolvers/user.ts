export const User = {
    fullName: (parent: { firstName: string; lastName: string }) => {
      return `${parent.firstName} ${parent.lastName}`;
    },
  };
  