import { Follows, User } from '@prisma/client';

export type MyUserFollowings = {
  following: (Follows & {
    following: User & {
      following: (Follows & {
        following: User;
      })[];
    };
  })[];
} | null;
