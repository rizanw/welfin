---
layout: default
title: Download
permalink: /download
---

<p class="fs-6 text-center" id="download-by-qr">
</p>

<img src="{{ '/assets/images/icon.webp' | relative_url }}" alt="Welfin Icon" id="welfin-icon" class="welfin-icon" />

<p class="fs-6 fw-300 text-center">
  Get welfin on your preferred store:
</p>

<div class="download-buttons">
  <a href="https://play.google.com/store/apps/details?id=xyz.rzndwb.welfin" target="_blank" class="store-button">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" class="store-icon" />
  </a>

  <div class="button ios-button coming-soon">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" class="store-icon" />
    <span>Coming Soon</span>
  </div>
</div>

<script type="text/javascript">
    (function() {
        var welfinIcon = document.getElementById("welfin-icon");
        welfinIcon.classList.remove("qr-scan");
        var qrDesc = document.getElementById("download-by-qr");
        qrDesc.innerHTML = "";

        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            window.location.href = "https://play.google.com/store/apps/details?id=xyz.rzndwb.welfin";
        }
        else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        }
        else {
            welfinIcon.src = "{{ '/assets/images/qr-download.png' | relative_url }}";
            welfinIcon.classList.add("qr-scan");
            qrDesc.innerHTML = "Scan QR to download welfin on your device:";
        }
    })();
</script>

<style>
    .download-buttons {
        display: flex;
        justify-content: center;
        gap: 24px;
        flex-direction: column;
        align-items: center;
        margin-top: 18px;
    }

    .welfin-icon {
        height: 128px;
        border-radius: 10%;
        display: block;
        margin: 0 auto;
    }

    .qr-scan {
        height: 256px;
    }

    .store-icon {
        height: 64px;
        margin-right: 8px;
        margin-left: 8px;
    }
    
    .coming-soon {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 10px 15px;
        margin-top: 10px;
    }

    .coming-soon span {
        font-size: 16px;
        font-weight: bold;
        margin-left: 10px;
    }

    .store-button:hover {
        opacity: 0.8;
    }
</style>
