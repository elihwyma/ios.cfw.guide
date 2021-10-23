"use strict";(self.webpackChunkios_cfw_guide=self.webpackChunkios_cfw_guide||[]).push([[4351],{5331:(e,o,i)=>{i.r(o),i.d(o,{data:()=>t});const t={key:"v-02cb8be4",path:"/troubleshooting/",title:"Troubleshooting",lang:"en_US",frontmatter:{lang:"en_US",title:"Troubleshooting",description:"Fixing common issues on jailbroken devices.",permalink:"/troubleshooting"},excerpt:"",headers:[{level:2,title:"How to enter DFU mode",slug:"how-to-enter-dfu-mode",children:[]},{level:2,title:"How to exit DFU mode",slug:"how-to-exit-dfu-mode",children:[]},{level:2,title:"Common Errors on Odyssey and Taurine",slug:"common-errors-on-odyssey-and-taurine",children:[{level:3,title:"ERR_Jailbreak",slug:"err-jailbreak",children:[]},{level:3,title:"ERR_Already_Jailbroken and ERR_KernRW (Taurine)/ERR_TFP0 (Odyssey)",slug:"err-already-jailbroken-and-err-kernrw-taurine-err-tfp0-odyssey",children:[]}]},{level:2,title:"Common Errors on unc0ver",slug:"common-errors-on-unc0ver",children:[{level:3,title:"rootFS already mounted",slug:"rootfs-already-mounted",children:[]}]},{level:2,title:"Fixing package installation errors on Sileo",slug:"fixing-package-installation-errors-on-sileo",children:[{level:3,title:'Syntax error: "(" unexpected',slug:"syntax-error-unexpected",children:[]},{level:3,title:"Exec format error",slug:"exec-format-error",children:[]}]}],filePathRelative:"en_US/troubleshooting.md",git:{updatedTime:1635026198e3,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:1}]}}},4468:(e,o,i)=>{i.r(o),i.d(o,{default:()=>R});var t=i(6252);const a=(0,t.uE)('<h2 id="how-to-enter-dfu-mode" tabindex="-1"><a class="header-anchor" href="#how-to-enter-dfu-mode" aria-hidden="true">#</a> How to enter DFU mode</h2><h4 id="for-devices-with-a-real-home-button-iphone-6s-and-below" tabindex="-1"><a class="header-anchor" href="#for-devices-with-a-real-home-button-iphone-6s-and-below" aria-hidden="true">#</a> For devices with a real home button (iPhone 6s and below):</h4><ol><li>Hold down both the Home button and Lock button.</li><li>After 8 seconds, release the Lock button while continuing to hold down the Home button.</li></ol><h4 id="for-iphone-7-7-ipod-7th-gen-and-2018-ipads" tabindex="-1"><a class="header-anchor" href="#for-iphone-7-7-ipod-7th-gen-and-2018-ipads" aria-hidden="true">#</a> For iPhone 7/7+, iPod 7th Gen and 2018 iPads:</h4><ol><li>Power on your iPhone/iPad if it&#39;s not on already</li><li>Connect it to your computer with your cable</li><li>Launch iTunes (or Finder on macOS Catalina and newer) and check that the iPhone/iPad is recognised</li><li>Hold down both the Side button and Volume Down button.</li><li>After 8 seconds, release the Side button while continuing to hold down the Volume Down button.</li></ol><h4 id="for-devices-without-a-home-button-iphone-8-8-ipad-air-5-and-ipad-mini-6" tabindex="-1"><a class="header-anchor" href="#for-devices-without-a-home-button-iphone-8-8-ipad-air-5-and-ipad-mini-6" aria-hidden="true">#</a> For devices without a home button, iPhone 8/8+, iPad Air 5 and iPad Mini 6:</h4><ol><li>Power on your iPhone/iPad if it&#39;s not on already</li><li>Connect it to your computer with your cable</li><li>Launch iTunes (or Finder on macOS Catalina and newer) and check that the iPhone/iPad is recognised</li><li>Press the Volume Up button immediately followed by the Volume Down button</li><li>Press and hold down the Power button until the screen turns black</li><li>Release the Power button</li><li>Hold down the Power button and the Volume Down button for immediately after for 5 seconds</li><li>Release the Power button but keep holding down the Volume Down button for another 5 seconds</li></ol><h2 id="how-to-exit-dfu-mode" tabindex="-1"><a class="header-anchor" href="#how-to-exit-dfu-mode" aria-hidden="true">#</a> How to exit DFU mode</h2><h4 id="for-devices-with-a-real-home-button-iphone-6s-and-below-1" tabindex="-1"><a class="header-anchor" href="#for-devices-with-a-real-home-button-iphone-6s-and-below-1" aria-hidden="true">#</a> For devices with a real home button (iPhone 6s and below):</h4><p>Hold the Home button and the Lock button until the device reboots.</p><h4 id="for-iphone-7-7-ipod-7th-gen-and-2018-ipads-1" tabindex="-1"><a class="header-anchor" href="#for-iphone-7-7-ipod-7th-gen-and-2018-ipads-1" aria-hidden="true">#</a> For iPhone 7/7+, iPod 7th Gen and 2018 iPads:</h4><p>Hold down the Side button and Volume Down button until the device reboots.</p><h4 id="for-devices-without-a-home-button-iphone-8-8-ipad-air-5-and-ipad-mini-6-1" tabindex="-1"><a class="header-anchor" href="#for-devices-without-a-home-button-iphone-8-8-ipad-air-5-and-ipad-mini-6-1" aria-hidden="true">#</a> For devices without a home button, iPhone 8/8+, iPad Air 5 and iPad Mini 6:</h4><ol><li>Quick-press the Volume Up button</li><li>Quick-press the Volume Down button</li><li>Hold down the Side button until the device reboots.</li></ol><h2 id="common-errors-on-odyssey-and-taurine" tabindex="-1"><a class="header-anchor" href="#common-errors-on-odyssey-and-taurine" aria-hidden="true">#</a> Common Errors on Odyssey and Taurine</h2><h3 id="err-jailbreak" tabindex="-1"><a class="header-anchor" href="#err-jailbreak" aria-hidden="true">#</a> ERR_Jailbreak</h3><p>This is caused by you having used a previous jailbreak. To solve this, you need to restore rootfs:</p><ol><li>Reboot the device.</li><li>Open the Odyssey or Taurine app, depending on your iOS version.</li><li>Toggle the <code>Restore Rootfs</code> option</li><li>Press the Jailbreak button.</li></ol><p>Once the restore rootfs successfully completes, try jailbreaking again.</p><h3 id="err-already-jailbroken-and-err-kernrw-taurine-err-tfp0-odyssey" tabindex="-1"><a class="header-anchor" href="#err-already-jailbroken-and-err-kernrw-taurine-err-tfp0-odyssey" aria-hidden="true">#</a> ERR_Already_Jailbroken and ERR_KernRW (Taurine)/ERR_TFP0 (Odyssey)</h3><p><code>ERR_Already_Jailbroken</code> indicates that the jailbreak process was interrupted. <code>ERR_KernRW</code> and <code>ERR_TFP0</code> indicate that the exploit failed. Both can be solved in the same way:</p><ol><li>Reboot the device.</li><li>Open the Odyssey or Taurine app, depending on your iOS version.</li><li>Press the Jailbreak button.</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Jailbreaks are hardly ever 100% successful, you may need to re-attempt running the jailbreak multiple times</p></div><h2 id="common-errors-on-unc0ver" tabindex="-1"><a class="header-anchor" href="#common-errors-on-unc0ver" aria-hidden="true">#</a> Common Errors on unc0ver</h2><h3 id="rootfs-already-mounted" tabindex="-1"><a class="header-anchor" href="#rootfs-already-mounted" aria-hidden="true">#</a> rootFS already mounted</h3><ol><li>Open the Settings application</li><li>Go to <code>General</code> -&gt; <code>iX Storage</code><ul><li>This could be <code>iPhone Storage</code>, <code>iPad Storage</code> or <code>iPod Storage</code></li></ul></li><li>Scroll to the System Update downloaded and tap on it</li><li>Tap <code>Delete</code></li><li>Re-run unc0ver</li></ol><p>If this doesn&#39;t fix it, or there is no update downloaded, you may need to download the OTA update and delete it again. Try the following instructions:</p><ol><li>Open the unc0ver application</li><li>Tap on the settings icon in the top right-hand corner</li><li>Uncheck all the options</li><li>Enable <code>Restore RootFS</code></li><li>Press <code>Done</code> in the top right-hand corner</li><li>Go to the jailbreak tab and press <code>Restore RootFS</code><ul><li>If the button says <code>Jailbreak</code>, go back and check to see if <code>Restore RootFS</code> is the only option enabled</li></ul></li><li>When prompted about restoring, tap <code>OK</code><ul><li>This may take some time</li><li>If it fails, try again from the beginning</li></ul></li><li>When finished, tap <code>OK</code> again, and your device will restart</li><li>Open the Settings application</li><li>Go to <code>General</code> -&gt; <code>Software Update</code></li><li>Download the software update but <strong>do not install it</strong></li><li>Go back to <code>General</code></li><li>Once downloaded, go to <code>iX Storage</code> like before <ul><li>This could be <code>iPhone Storage</code>, <code>iPad Storage</code> or <code>iPod Storage</code></li></ul></li><li>Scroll to the System Update downloaded and tap on it</li><li>Tap <code>Delete</code></li><li>Scroll to the unc0ver application and tap on it</li><li>Tap <code>Delete</code></li><li><a href="/installing-unc0ver">Install unc0ver</a> again like before but don&#39;t run it yet</li><li>Turn on Airplane Mode and run the jailbreak now <ul><li>This may take several attempts, keep trying until it works</li></ul></li></ol>',28),r={class:"custom-container tip"},n=(0,t._)("p",{class:"custom-container-title"},"TIP",-1),l=(0,t.Uk)("If this doesn't work, ask on the r/Jailbreak "),d={href:"https://discord.gg/jb",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("Discord Server"),s=(0,t.Uk)(" for support."),c=(0,t._)("h2",{id:"fixing-package-installation-errors-on-sileo",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#fixing-package-installation-errors-on-sileo","aria-hidden":"true"},"#"),(0,t.Uk)(" Fixing package installation errors on Sileo")],-1),u=(0,t._)("p",null,"For the purposes of this troubleshooting section, we are assuming you are running Sileo on Taurine/Odyssey/Odysseyra1n.",-1),p=(0,t._)("p",null,[(0,t.Uk)("In order to determine which error you are encountering, you will have to tap "),(0,t._)("code",null,"Show Details"),(0,t.Uk)(" in Sileo when you encounter an error with installing or removing a package.")],-1),f=(0,t.Uk)("If the fixes below don't help, feel free to ask on the Sileo "),b={href:"https://discord.gg/Sileo",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("Discord Server"),w=(0,t.Uk)(" for support."),g=(0,t.uE)('<h3 id="syntax-error-unexpected" tabindex="-1"><a class="header-anchor" href="#syntax-error-unexpected" aria-hidden="true">#</a> Syntax error: &quot;(&quot; unexpected</h3><p>This error indicates that the developer of the tweak you are trying to install/remove has written the installation/removal script incorrectly. You will need Filza to fix this issue.</p><h4 id="removing-the-tweak-causing-this-error" tabindex="-1"><a class="header-anchor" href="#removing-the-tweak-causing-this-error" aria-hidden="true">#</a> Removing the tweak causing this error</h4><ol><li>Open Filza and navigate to <code>/Library/dpkg/info</code></li><li>Find the .postinst or .postrm file corresponding to the tweak with an error, e.g. <code>com.miro.shortmoji2.postinst</code> would be the file to edit if ShortMoji 2 had an install error or <code>com.miro.shortmoji2.postrm</code> if it had an uninstall error</li><li>Tap and hold the file until a menu appears</li><li>Tap <code>Open with</code></li><li>Tap <code>Text Editor</code></li><li>Find the first line of the file that says <code>#!/bin/sh</code></li><li>Change <code>sh</code> to <code>bash</code></li><li>Tap <code>Save</code></li><li>Open Sileo</li><li>Uninstall the tweak. <ul><li>For paid tweaks, you will need to file a bug report to the developer if you wish to install the tweak.</li><li>For free tweaks, you should file a bug report to the developer. If you wish to install the tweak immediately, continue with this guide.</li></ul></li></ol><h4 id="editing-the-tweak-to-fix-the-error-free-tweaks-only" tabindex="-1"><a class="header-anchor" href="#editing-the-tweak-to-fix-the-error-free-tweaks-only" aria-hidden="true">#</a> Editing the tweak to fix the error (Free tweaks only)</h4>',5),y=(0,t.Uk)("Open "),k={href:"https://parcility.co",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("Parcility"),S=(0,t.Uk)(" in Safari on your device"),x=(0,t.uE)("<li>Search for the tweak you wish to install <ul><li>If it does not appear in the search, you will have to wait for the developer to update their tweak</li></ul></li><li>Tap <code>Download</code></li><li>Once the file has finished downloading, tap on the file in Safari&#39;s downloads menu</li><li>Tap the share button</li><li>Tap <code>Save to Filza</code></li><li>Tap <code>Save</code></li><li>Open Filza, it will open to the folder where you downloaded the tweak file</li><li>Tap on the tweak you wish to fix</li><li>Scroll down and tap <code>Extract</code></li><li>Open the result folder, and navigate to <code>DEBIAN</code></li><li>Repeat steps 2-8 of <code>Removing the tweak causing this error</code> above</li><li>Navigate back to the folder where you downloaded the tweak</li><li>Tap and hold on the tweak folder</li><li>Tap on <code>Create DEB</code></li><li>Tap and hold on the resulting deb file</li><li>Tap <code>Open with</code></li><li>Tap on <code>Sileo</code></li><li>Tap <code>Get</code></li>",18),T=(0,t.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Some developers in the Jailbreak community put a call to the wrong shell in their installation/removal scripts. Until April 2021, most Jailbreaks pointed <code>/bin/sh</code> to <code>/bin/bash</code> so developers were able to use <code>#!/bin/sh</code> to indicate which shell to use even if they use Bash features. In April 2021, Procursus, which runs on Chimera, Odyssey, Taurine, and Odysseyra1n, changed to a different, higher performance shell. This broke these incorrectly formatted scripts.</p></div><h3 id="exec-format-error" tabindex="-1"><a class="header-anchor" href="#exec-format-error" aria-hidden="true">#</a> Exec format error</h3><p>This error indicates that the developer of the tweak you are trying to install/remove has omitted a key part of the installation/removal script. You will need Filza to fix this issue.</p><h4 id="removing-the-tweak-causing-this-error-1" tabindex="-1"><a class="header-anchor" href="#removing-the-tweak-causing-this-error-1" aria-hidden="true">#</a> Removing the tweak causing this error</h4><ol><li>Open Filza and navigate to <code>/Library/dpkg/info</code></li><li>Find the .postinst or .postrm file corresponding to the tweak with an error, e.g. <code>com.miro.shortmoji2.postinst</code> would be the file to edit if ShortMoji 2 had an install error</li><li>Tap and hold the file until a menu appears.</li><li>Tap <code>Open with</code></li><li>Tap <code>Text Editor</code></li><li>Add a new line to the start of the file that says <code>#!/bin/bash</code>.</li><li>Tap <code>Save</code></li><li>Open Sileo</li><li>Uninstall the tweak.</li><li>Navigate to the <code>Sources</code> tab</li><li>Swipe down and refresh your sources</li><li>Navigate to the <code>Search</code> tab</li><li>Type <code>libiosexec1</code> into the Search field</li><li>Install <code>libiosexec1</code> by Hayden Seay</li><li>Try installing the tweak causing an error again</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>In May 2021, Procursus attempted to migrate to a version of dpkg that no longer handles this install error, as developers should have included the <code>#!/bin/sh</code> or <code>#!/bin/bash</code> calls in their scripts. At the time of writing, the lead developer of Procursus has created a patch, <code>libiosexec</code>, that re-adds this error handling. If you still encounter this error, you may not have updated for a while.</p></div>',6),P={},R=(0,i(3744).Z)(P,[["render",function(e,o){const i=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[a,(0,t._)("div",r,[n,(0,t._)("p",null,[l,(0,t._)("a",d,[h,(0,t.Wm)(i)]),s])]),c,u,p,(0,t._)("p",null,[f,(0,t._)("a",b,[m,(0,t.Wm)(i)]),w]),g,(0,t._)("ol",null,[(0,t._)("li",null,[y,(0,t._)("a",k,[v,(0,t.Wm)(i)]),S]),x]),T],64)}]])},3744:(e,o)=>{o.Z=(e,o)=>{for(const[i,t]of o)e[i]=t;return e}}}]);