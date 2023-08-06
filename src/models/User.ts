import { model, Schema, Document } from "mongoose";

interface IUser extends Document {
  userID: string;
  terms: boolean;
  addresses: [];
}

const userSchema: Schema = new Schema({
  userID: { type: String },
  terms: { type: Boolean },
  addresses: { type: [] },
});

export const User = model<IUser>("User", userSchema);
