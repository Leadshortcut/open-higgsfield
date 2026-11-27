import type { ModelEntry } from "./types";

// MAGI-2 (Sand AI) on the Higgsfield platform: three routes, picked by the media attached.
// text: sand/magi-2/text-to-video · start (+ end) frame: sand/magi-2/image-to-video
// references (up to 10 images, 5 videos, 5 audio clips): sand/magi-2/reference-to-video
// https://open.higgsfield.ai/models/sand/magi-2/image-to-video/api-reference
export const magi2: ModelEntry = {
  id: "magi-2",
  surface: "video",
  label: "MAGI-2",
  roles: { start: 1, end: 1, reference: 10, video: 5, audio: 5 },
  settings: {
    aspectRatio: { type: "enum", values: ["16:9", "9:16", "1:1", "4:3", "3:4", "21:9"], default: "16:9" },
    resolution: { type: "enum", values: ["1080p"], default: "1080p" },
    duration: { type: "range", min: 4, max: 30, default: 5 },
    generateAudio: { type: "boolean", default: true },
  },
};
