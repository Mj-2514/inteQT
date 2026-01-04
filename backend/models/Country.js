import mongoose from "mongoose";

const countrySchema = new mongoose.Schema(
  {
    Countryname: String,
    slug: { type: String, unique: true },

    partnersRange: String,
    Ipv4PeersRange: String,
    Ipv6PeersRange: String,
    IxpPartnersRange: String,
    Ipv4GatewaysRange: String,
    Ipv6GatewaysRange: String,
    CloudPartnersRange: String,

    ddosProtection: Boolean,

    minServiceLatencyRange: String,
    avgServiceLatencyRange: String,

    features: String,
    ourServices: String,
    commercialOfferDateRange: String,
    deliveryDateRange: String,

    integrationNote: String,
    whyChooseUs: String,
    capabilities: String,

    submarineCableImage: String,
    submarineCableLink: String,

    status: {
      type: String,
      enum: ["draft", "pending", "approved", "rejected"],
      default: "pending",
    },

    rejectionNote: String,

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CountryUser",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Country", countrySchema);
