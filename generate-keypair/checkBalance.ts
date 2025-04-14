import { airdropIfRequired } from "@solana-developers/helpers";
import { Connection, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";

const publicKey = new PublicKey("C3X8LmzXtKTp1CfiCWcrojyTincfbvaFjvsCvFjaYNhC");

    const connection = new Connection("https://api.devnet.solana.com", "confirmed");
    const balanceInLamports = await connection.getBalance(publicKey);
    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
    console.log(
        `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
    );

    console.log("Public key is not valid!");



const transaction = new Transaction();

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: publicKey,
  toPubkey: recipient,
  lamports: LAMPORTS_PER_SOL * 1000,
});

transaction.add(sendSolInstruction);

const signature = sendAndConfirmTransaction(connection, transaction, [
    senderKeypair,
  ]);

  await airdropIfRequired(
    connection,
    keypair.publicKey,
    1 * LAMPORTS_PER_SOL,
    0.5 * LAMPORTS_PER_SOL,
  );