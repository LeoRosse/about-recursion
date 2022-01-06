import * as t from 'io-ts';
import { Chain } from 'fp-ts/lib/Either';

const usersInput = t.union([
  t.type({
    users: t.type({
      data: t.array(
        t.type({
          email: t.string,
          id: t.string,
          name: t.string,
          phone: t.string,
          username: t.string,
          website: t.string,
        }),
      ),
    }),
  }),
  t.undefined,
]);

export type UsersInput = t.TypeOf<typeof usersInput>;

const usersParametric = t.union([
  t.array(
    t.type({ email: t.string, id: t.string, name: t.string, phone: t.string, username: t.string, website: t.string }),
  ),
  t.undefined,
]);

export type UsersParametric = t.TypeOf<typeof usersParametric>;

const isDataInput = (i: unknown): i is UsersParametric => usersInput.is(i);

const returnUsersParametric = (input: UsersInput) => input?.users.data;

const users = new t.Type<UsersParametric, UsersParametric, UsersInput>(
  'users',
  isDataInput,
  (input, context) =>
    Chain.chain(usersInput.validate(input, context), (i) =>
      isDataInput(i) ? t.success(returnUsersParametric(i)) : t.failure(input, context),
    ),
  t.identity,
);

export { users };
