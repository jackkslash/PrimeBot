import { model, Schema, Document } from "mongoose";

interface IUser extends Document {
  userID: string;
  terms: boolean;
  addresses: [string];
}

const userSchema: Schema = new Schema({
  userID: { type: [String] },
  terms: { type: [Boolean] },
  addresses: { type: [String] },
});

export const User = model<IUser>("User", userSchema);
