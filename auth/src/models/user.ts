import mongoose from "mongoose";
import { Password } from "../services/password";

// An interface that describes the properties that are required to create a new user
interface UserAttrs {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<UserAttrs>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

const User = mongoose.model("User", userSchema);

export { User };
