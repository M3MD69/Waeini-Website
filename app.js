document.getElementById('downloadLatestVersionBtn').addEventListener('click', downloadLatestAppVersion);

function downloadLatestAppVersion() {
    const link = document.createElement('a');
    link.href = 'Waeini-1.1.apk';
    link.download = 'Waeini-1.1.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}