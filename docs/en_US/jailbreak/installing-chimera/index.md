---
lang: en_US
title: Installing Chimera
description: Guide to installing Chimera
permalink: /installing-chimera
redirect_from:
  - /chimera
  - /cm
---

Chimera is a [semi-untethered jailbreak](/types-of-jailbreak/#semi-untethered-jailbreaks), meaning it requires a app to re-apply the exploit after a reboot.

Chimera is capable of jailbreaking all devices on iOS 12.0 to 12.1.2 and A7 to A11 devices on iOS 12.0 to 12.5.5.

Due to how semi-untethered jailbreaks work, the app will need to be [re-signed](/resigning-apps) once every 7 days.

We will use AltStore to install the Chimera jailbreak application to your iOS device for use in the next step.

::: warning
If you have a newer device with an A12 SoC, such as the iPhone XS, you can only use Chimera on iOS 12.0 - 12.1.2.
:::

::: warning
If you are already jailbroken with unc0ver, make sure to properly [remove it](/removing-unc0ver) before proceeding.
:::

## Downloads

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Chimera is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest release of [Chimera](https://chimera.coolstar.org/)
- The latest release of [AltStore](http://altstore.io/)
- The latest release of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows
- The latest release of [iCloud](https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) if on Windows

If you are running iOS 12.0 - 12.1.4, you will need to use [AltDeploy](resigning-apps#resign-with-a-mac-altdeploy)

## Installing the application

1. Download AltStore for your respective operating system
1. Launch AltStore/AltServer
    - On macOS, open the Mail app and open `Mail` -> `Preferencees` in the menu bar
    - Click on the `General` tab, the `Manage Plug-ins`, check `AltPlugin` and apply
1. Connect your iOS Device to your Mac or PC via USB
1. Click AltStore/AltServer in the Menu Bar/System Tray
1. Click Install AltStore
    - Follow all onscreen prompts
1. Open Settings and navigate to `General` -> `Device Management` and verify AltStore
1. Download [Chimera](https://chimera.sh/) on your iOS Device and open the `.ipa` in AltStore
    - Make sure your iOS Device and Mac or PC are connected to the same WiFi network

The Chimera application can now be opened from home screen.


## Running Chimera

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Chimera application from your home screen immediately afterwards
1. Tap "Jailbreak"
1. Reboot your phone again when prompted
    - If you are not prompted and it automatically reboots, wait 1-2 minutes, then try again.
    - This time, it is necessary
1. Once again, open the Chimera application from your home screen immediately after rebooting
1. Tap "Jailbreak" again
    - If it automatically reboots or crashes and the jailbreak is not installed, wait 1-2 minutes, then try again.

::: warning
If that app or your device continually crashes/restarts unexpectedly and the jailbreak isn't installed despite the above steps, attempt to put the device in a freezer for that 1-2 minute period.
:::

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install [tweaks](/faq/#what-are-tweaks), themes and more.