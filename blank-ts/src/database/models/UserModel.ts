import { composeSchema, Model } from "@gaman/db";

export const UserSchema = composeSchema('users', (c) => ({
  id: c.int().primary().autoIncrement(),
  name: c.string(),
  age: c.int(),
}));

export type User = typeof UserSchema.infer;

export const UserModel = new Model(UserSchema);