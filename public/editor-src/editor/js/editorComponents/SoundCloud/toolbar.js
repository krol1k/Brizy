import { t } from "visual/utils/i18n";

import {
  toolbarElementSoundCloudLink,
  toolbarElementSoundCloudAutoPlay,
  toolbarElementSoundCloudStyle,
  toolbarSizeWidthWidthPercent,
  toolbarSizeHeightHeightPx
} from "visual/utils/toolbar";

export function getItemsForDesktop(v) {
  const device = "desktop";

  return [
    {
      id: "toolbarSoundCloud",
      type: "popover",
      icon: "nc-sound-cloud",
      title: t("SoundCloud"),
      position: 90,
      options: [
        toolbarElementSoundCloudLink({ v }),
        toolbarElementSoundCloudAutoPlay({ v }),
        toolbarElementSoundCloudStyle({ v })
      ]
    },
    {
      id: "toolbarSettings",
      type: "popover",
      icon: "nc-cog",
      title: t("Settings"),
      roles: ["admin"],
      position: 110,
      options: [
        toolbarSizeWidthWidthPercent({ v, device, state: "normal" }),
        toolbarSizeHeightHeightPx({
          v,
          device,
          state: "normal",
          config: {
            slider: {
              min: v.smallHeight,
              max: v.showArtwork === "on" ? v.largeHeight : v.mediumHeight
            }
          }
        })
      ]
    }
  ];
}

export function getItemsForTablet(v) {
  const device = "tablet";
  const state = "normal";

  return [
    {
      id: "tabletToolbarSettings",
      type: "popover",
      icon: "nc-cog",
      title: t("Settings"),
      roles: ["admin"],
      position: 110,
      options: [
        toolbarSizeWidthWidthPercent({ v, device, state }),
        toolbarSizeHeightHeightPx({
          v,
          device,
          state,
          config: {
            slider: {
              min: v.smallHeight,
              max: v.showArtwork === "on" ? v.largeHeight : v.mediumHeight
            }
          }
        })
      ]
    }
  ];
}

export function getItemsForMobile(v) {
  const device = "mobile";
  const state = "normal";

  return [
    {
      id: "mobileToolbarSettings",
      type: "popover",
      icon: "nc-cog",
      title: t("Settings"),
      roles: ["admin"],
      position: 110,
      options: [
        toolbarSizeWidthWidthPercent({ v, device, state }),
        toolbarSizeHeightHeightPx({
          v,
          device,
          state,
          config: {
            slider: {
              min: v.smallHeight,
              max: v.showArtwork === "on" ? v.largeHeight : v.mediumHeight
            }
          }
        })
      ]
    }
  ];
}
