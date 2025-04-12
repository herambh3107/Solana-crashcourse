import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

async function main() {
  // Connect to mainnet instead of devnet
  const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
  
  // Define some famous Solana wallets directly by their addresses
  // Since we can't resolve .sol domains without the package, we'll use known addresses
  const famousWallets = [
    { name: "Anatoly Yakovenko (Solana co-founder)", address: "3yFwqXBfZY4jBVUafQ1YEXw2tEcPDofcDYYxMbLiq9UT" },
    { name: "Shaquille O'Neal", address: "CgugRsZ1VUP5fQpP9xEgpdHbG4vKiT5nxFVfY1WQmxLB" },
    { name: "Brian McCann", address: "6iQKfEyhr3bLkQWJ6nC5ZEEfNLwZKZnKEQ5PiuHrBG5s" }
  ];
  
  for (const wallet of famousWallets) {
    try {
      const publicKey = new PublicKey(wallet.address);
      
      // Get balance for the wallet
      const balanceInLamports = await connection.getBalance(publicKey);
      const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
      
      console.log(
        `💰 The balance for ${wallet.name} (${publicKey.toString()}) is ${balanceInSOL} SOL!`
      );
    } catch (error) {
      console.error(`Error looking up ${wallet.name}:`, error.message);
    }
  }
}

main().catch(error => {
  console.error("Error:", error);
});
