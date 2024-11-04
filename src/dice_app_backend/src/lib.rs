use ic_cdk_macros::{query, update};
use candid::{CandidType, Deserialize};
use rand::Rng;
use rand_chacha::{ChaCha8Rng, rand_core::SeedableRng};

#[derive(CandidType, Deserialize)]
struct DiceResult {
    value: u8,
}

#[update]
fn roll_dice() -> DiceResult {
    // Create a new ChaCha8 RNG instance seeded with a value for deterministic results
    let mut rng = ChaCha8Rng::seed_from_u64(42);
    let value = rng.gen_range(1..=6);
    DiceResult { value }
}

#[query]
fn http_request() -> String {
    // Simple response for HTTP requests
    String::from("Hello from Dice App Backend!")
}









