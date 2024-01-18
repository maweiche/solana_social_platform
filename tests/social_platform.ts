import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SocialPlatform } from "../target/types/social_platform";

describe("social_platform", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SocialPlatform as Program<SocialPlatform>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
