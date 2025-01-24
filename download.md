---
layout: default
title: Download welfin
description: personal finance companion designed to help you develop good financial habits and grow your wealth! Download now and start making smarter financial decisions today!">
permalink: /download
---

<p class="fs-6 text-center" id="download-by-qr">
</p>

![welfin]({{ '/assets/images/icon.webp' | relative_url }}){:id="welfin-icon" .welfin-icon}

<p class="fs-6 fw-300 text-center">
  Get welfin on your preferred store:
</p>

<div class="download-buttons">
  <a href="https://play.google.com/store/apps/details?id=xyz.rzndwb.welfin" target="_blank" class="store-button">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" class="store-icon" />
  </a>

  <a href="https://apps.apple.com/us/app/welfin-money-manager/id6740206481" target="_blank" class="store-button">
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" class="store-icon" />
  </a>
</div>

<script type="text/javascript">
    (function() {
        const welfinIcon = document.getElementById("welfin-icon");
        const qrDesc = document.getElementById("download-by-qr");
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        welfinIcon.classList.remove("qr-scan");
        qrDesc.innerHTML = "";

        if (/android/i.test(userAgent)) {
            window.location.href = "https://play.google.com/store/apps/details?id=xyz.rzndwb.welfin";
        }
        else if (/iPhone|iPad|iPod/i.test(userAgent)) {
            window.location.href = "https://apps.apple.com/us/app/welfin-money-manager/id6740206481";
        }
        else {
            welfinIcon.src = "{{ '/assets/images/qr-download.webp' | relative_url }}";
            welfinIcon.classList.add("qr-scan");
            qrDesc.innerHTML = "Scan QR to download welfin on your device:";
        }
    })();
</script>
