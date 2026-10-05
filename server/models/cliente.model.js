import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true,
      trim: true,
    },

    name: {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        }
    },

    address: {
        city: {
            type: String,
            required: true,
        }
    },

    phone: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Cliente = mongoose.model("Cliente", clienteSchema);

export default Cliente;