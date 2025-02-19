---
lang: en_US
title: Installing Pangu7
excerpt: Guide to installing Pangu7
permalink: /installing-pangu7
redirect_from:
  - /pangu712
  - /pangu7
---

Pangu7 is capable of jailbreaking every iOS device on firmware version 7.1 up to 7.1.2.

Pangu7 is an untethered jailbreak, meaning that it persists after reboot, so once it's installed you will not have to reinstall it unless you erase your device.

You will need a computer running Windows 7 and newer or a Mac running macOS 10.14 Mojave and the appropriate Pangu.

## macOS

::: tip

### Downloads

- Version 1.2.0 of [Pangu](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/file/Fo8ihCJa) from the Legacy Jailbreak Archives

### Installing Pangu

1. Open the `pangu` dmg and move the application to your `/Applications` folder
1. Open the terminal and run the following command: `sudo -b /Applications/pangu.app/Contents/MacOS/pangu`
1. Plug your device into your computer and trust your computer 
1. Disable your passcode (You will be able to re-enable it once the jailbreak process is done)
1. Set your device's date to any point before June 2014
1. Press jailbreak in the Pangu app on your computer
1. Open the Pangu app on your device once it appears on your home screen
   - Tap Continue to trust the app and allow it to run
1. Your device will reboot after a short period, then you will need to unlock it
1. Wait a little while and your device will reboot one more time


:::

## Windows

::: danger

You will bootloop if you jailbreak your device while in the dark

:::

::: tip

### Downloads
- Version 1.0-en of [Pangu](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/file/41UlRSyS) from the Legacy Jailbreak Archives
- Version 0.3 of the [Pangu untether](http://apt.saurik.com/debs/io.pangu.axe7_0.3_iphoneos-arm.deb)

### Installing Pangu

1. Open the `pangu` exe
1. Plug your device into your computer and trust your computer 
1. Disable your passcode (You will be able to re-enable it once the jailbreak process is done)
1. Set your device's date to any point before June 2014
1. Untick the `Install PP25` checkbox
1. Press jailbreak in the Pangu app on your computer
1. Open the Pangu app on your device once it appears on your home screen
   - Tap Continue to trust the app and allow it to run
1. Your device will reboot after a short period, then you will need to unlock it
1. Wait a little while and your device will reboot one more time

### Fixing bootloops while booting in the dark

1. Unlock your device and open Cydia
1. Tap `Ignore (Temporary)`
1. Open the Search tab and search for and install `Filza File Manager`
1. Once it is installed, open Filza and open the settings by tapping on the cog in the bottom bar
1. Scroll down and tap on `Enable WebDAV server`
   - Make a note of URL next to `Listening`, it should look like `http://192.168.0.43:11111` or `http://10.0.0.43:11111`
1. Navigate to the URL you noted above on the computer you downloaded the pangu untether onto
2. Navigate to the `/var/mobile` folder in the website
3.  Click on `Upload` and select the pangu untether deb
4. On your device, go back into Filza's settings and disable WebDAV server
5. Navigate to the `/var/mobile` folder in Filza and tap on the pangu deb you upload
6. Tap on `Install`
7. Reboot your device

:::

----

Once you see your lock screen, you will be jailbroken with a fixed untether package that will no longer cause bootloops while in the dark. You can now use Cydia to install [tweaks](/faq/#what-are-tweaks), themes and more.

