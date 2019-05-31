const mongoose = require('mongoose');
const { Schema } = mongoose;

const campsiteSchema = new Schema({
  title: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  desc: { type: String, required: true },
  numberTentSites: { type: String, required: true },
  numberRvSites: { type: String, required: true },
  RvSiteInfo: { type: String, required: true },
  numberOtherLodging: { type: String, required: true },
  otherLodgingInfo: { type: String, required: true },
  photos: { type: String, required: true },
  propertyAmenities: { type: String, required: true },
  propertyNearbyActivities: { type: String, required: true },
  hasWifi: { type: String, required: true },
  hasRestrooms: { type: String, required: true },
  hasShowers: { type: String, required: true },
  hasHiking: { type: String, required: true },
  hasPets: { type: String, required: true },
  hasFishing: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
});

const Campsite = mongoose.model("Campsite", campsiteSchema);

module.exports = Campsite;
