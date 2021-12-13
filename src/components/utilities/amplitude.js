import amplitude from "amplitude-js";
const key = "d90206e2a94cd7ca9f33e049df7fd918";

export const initAmplitude = () => {
  console.log("API Key: ", key);
  amplitude.getInstance().init(key);
};
export const setAmplitudeUserDevice = (installationToken) => {
  amplitude.getInstance().setDeviceId(installationToken);
};

export const setAmplitudeUserId = (userId) => {
  amplitude.getInstance().setUserId(userId);
};

export const setAmplitudeUserProperties = (properties) => {
  amplitude.getInstance().setUserProperties(properties);
};

export const sendAmplitudeData = (eventType, eventProperties) => {
  amplitude.getInstance().logEvent(eventType, eventProperties);
};
