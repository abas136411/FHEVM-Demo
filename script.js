function registerNFT() {
  const name = document.getElementById("productName").value;
  const serial = document.getElementById("serialNumber").value;
  const output = document.getElementById("output");

  if (!name || !serial) {
    output.innerText = "⚠️ Please fill in all fields!";
    return;
  }

  // Simple mock registry (later can connect to blockchain)
  const nftData = {
    name: name,
    serial: serial,
    tokenId: Math.floor(Math.random() * 1000000),
  };

  output.innerHTML = `✅ NFT Registered!<br>
    Product: ${nftData.name}<br>
    Serial: ${nftData.serial}<br>
    Token ID: #${nftData.tokenId}`;
}
